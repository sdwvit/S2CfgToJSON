"""Minimal PE64 address helper for reverse-engineering UE shipping binaries.

No third-party deps (capstone/pefile/numpy are frequently unavailable). Use with
objdump for disassembly.

Usage:
    exec(open('pe.py').read())          # after setting PATH below, or:
    PATH = '/path/to/Game-Win64-Shipping.exe'; exec(open('pe.py').read())

Provides:
    D          mmap of the whole file (bytes-like, searchable with re)
    IMAGEBASE  preferred load base
    SECS       [(name, vaddr_rva, vsize, raw_off, raw_size), ...]
    rva2off(r) / off2rva(o)
    va2off(v)  / off2va(o)      <- the two you actually use
    secof(rva) section name containing an RVA
    fnrange(va) (start_va, end_va) from .pdata unwind info

Key gotcha: va2off() returns None for addresses in the *uninitialized tail* of a
section (vsize > raw_size). That is diagnostic, not an error -- see SKILL.md
"Constant provenance".
"""
import struct
import mmap
import bisect

try:
    PATH
except NameError:
    raise SystemExit("set PATH to the .exe before exec()ing this file")

_f = open(PATH, 'rb')
D = mmap.mmap(_f.fileno(), 0, access=mmap.ACCESS_READ)

_lfanew, = struct.unpack_from('<I', D, 0x3c)
assert D[_lfanew:_lfanew + 4] == b'PE\0\0', "not a PE"
_coff = _lfanew + 4
_nsec, = struct.unpack_from('<H', D, _coff + 2)
_optsz, = struct.unpack_from('<H', D, _coff + 16)
_opt = _coff + 20
_magic, = struct.unpack_from('<H', D, _opt)
assert _magic == 0x20b, "not PE32+ (x64)"
IMAGEBASE, = struct.unpack_from('<Q', D, _opt + 24)

SECS = []
_sectab = _opt + _optsz
for _i in range(_nsec):
    _o = _sectab + 40 * _i
    _name = D[_o:_o + 8].rstrip(b'\0').decode('latin1')
    _vsz, _va, _rsz, _ra = struct.unpack_from('<IIII', D, _o + 8)
    SECS.append((_name, _va, _vsz, _ra, _rsz))


def rva2off(r):
    for _n, va, vsz, ra, rsz in SECS:
        if va <= r < va + max(vsz, rsz):
            d = r - va
            return ra + d if d < rsz else None   # None => uninitialized tail
    return None


def off2rva(o):
    for _n, va, _vsz, ra, rsz in SECS:
        if ra <= o < ra + rsz:
            return va + (o - ra)
    return None


def secof(r):
    for n, va, vsz, ra, rsz in SECS:
        if va <= r < va + max(vsz, rsz):
            return n
    return None


def va2off(v):
    return rva2off(v - IMAGEBASE)


def off2va(o):
    r = off2rva(o)
    return None if r is None else r + IMAGEBASE


# ---- .pdata: exact function bounds, no heuristics ----
_pd = [s for s in SECS if s[0] == '.pdata']
_FN = []
if _pd:
    _, _, _pvsz, _pra, _ = _pd[0][0], None, _pd[0][2], _pd[0][3], None
    _FN = sorted(struct.unpack_from('<III', D, _pra + 12 * i)[:2]
                 for i in range(_pvsz // 12))
_FNS = [x[0] for x in _FN]


def fnrange(va):
    """(start_va, end_va) of the function containing va, from unwind info."""
    i = bisect.bisect_right(_FNS, va - IMAGEBASE) - 1
    if i < 0:
        return None
    return _FN[i][0] + IMAGEBASE, _FN[i][1] + IMAGEBASE


def wstr(va, maxlen=200):
    """Read a UTF-16LE string at a VA (stops at an aligned 0x0000 unit)."""
    o = va2off(va)
    if o is None:
        return None
    buf = D[o:o + maxlen * 2]
    for i in range(0, len(buf) - 1, 2):          # must scan on even offsets:
        if buf[i] == 0 and buf[i + 1] == 0:      # splitting on b'\0\0\0' eats
            buf = buf[:i]                        # the last char's high byte
            break
    return buf.decode('utf-16-le', 'ignore')


def astr(va, maxlen=200):
    """Read a NUL-terminated ASCII string at a VA."""
    o = va2off(va)
    if o is None:
        return None
    return D[o:o + maxlen].split(b'\x00')[0].decode('latin1')


def findw(s):
    """All file offsets of a UTF-16LE string."""
    import re
    return [m.start() for m in re.finditer(re.escape(s.encode('utf-16-le')), D)]


def finda(s):
    """All file offsets of an ASCII string."""
    import re
    return [m.start() for m in re.finditer(re.escape(s.encode()), D)]


def ptrsto(va):
    """All (file_off, section) holding an 8-byte LE pointer equal to va."""
    import re
    pat = struct.pack('<Q', va)
    out = []
    for m in re.finditer(re.escape(pat), D):
        out.append((m.start(), secof(off2rva(m.start()) or 0)))
    return out


def vtable(va, n=400):
    """Read consecutive .text pointers starting at va."""
    o = va2off(va)
    out = []
    for i in range(n):
        p, = struct.unpack_from('<Q', D, o + 8 * i)
        if not (IMAGEBASE < p < IMAGEBASE + 0x20000000):
            break
        if secof(p - IMAGEBASE) != '.text':
            break
        out.append(p)
    return out
