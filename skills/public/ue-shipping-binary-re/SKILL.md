---
name: ue-shipping-binary-re
description: "Recover game logic from a shipped Unreal Engine binary when no source is available: locate C++ classes without RTTI via UHT registration data, find and disassemble specific methods through vtable diffing, read tuning constants, and determine whether a value is compiled-in or config-driven. Use when investigating how a UE game actually implements a behaviour (AI, spawning, simulation, combat resolution) and data files alone are insufficient or explicitly out of scope."
---

# Reverse-engineering UE shipping binaries

For answering "how does this game actually do X" from a stripped shipping `.exe`,
using only `strings`, `objdump`, and Python. Developed against a UE5 title with a
custom native AI engine, no behaviour trees, and no shipped C++ source.

**The deliverable is a mechanism, not a disassembly listing.** Users want to
understand logic. Translate to pseudocode and plain English; show assembly only
where it is the evidence for a surprising claim.

## Setup

`Binaries/Win64/*-Shipping.exe` is the target (note the `Win64/` subdirectory —
easy to miss when a glob flattens it). Copy `pe.py` from this skill to a
scratchpad, set `PATH`, and `exec()` it. It gives VA↔file-offset mapping,
`.pdata` function bounds, string search, and vtable reads with no dependencies.

Assume `capstone`, `pefile`, `numpy`, and even `pip` are missing. `objdump` is
present and fast:

```
objdump -d --start-address=0xVA --stop-address=0xVA2 -M intel game.exe
```

A whole-`.text` disassembly piped to `grep` takes a few minutes on a 350 MB
binary — acceptable for xref hunting. Run it with `run_in_background: true` and
wait with `until ! pgrep -x objdump; do sleep 3; done`.

## Extract strings twice — this is the highest-value rule

```
strings -n 5      game.exe > s.txt     # ASCII
strings -el -n 5  game.exe > sw.txt    # UTF-16LE  <-- do not skip
```

UE stores `TCHAR` as UTF-16. **Reflection/UPROPERTY names and header paths land
in the ASCII dump; hand-written prototype-parser field names, console variable
names, log categories, and most format strings land only in the wide dump.**

Consequence: any "symbol X does not exist" conclusion drawn from the ASCII dump
alone is invalid. Re-check both before asserting absence.

This asymmetry is also a *diagnostic*. A field name present in the wide dump but
absent from the ASCII reflection data is not a `UPROPERTY` — it is parsed by a
hand-written config parser, so it has no Blueprint/editor exposure and no
validation. That single check tells you a lot about how a system is authored.

## Finding a class without RTTI

Shipping builds are usually `/GR-`, so there are no `.?AV...@@` type descriptors
and no complete object locators. Use UHT's generated registration instead.

1. Find the class name as UTF-16, **including the `U`/`A`/`F` prefix**:
   `findw('UMyClass')`. Note that `GetPrivateStaticClassBody` is passed the name
   *without* the prefix, i.e. `name_va + 2`.
2. `ptrsto(name_va)` → a hit in `.data` inside an array of
   `FClassRegisterCompiledInInfo`, stride 40 bytes:

   ```
   [-0x10] OuterRegister  -> Z_Construct_UClass_UMyClass
   [-0x08] InnerRegister  -> UMyClass::GetPrivateStaticClass
   [ 0x00] Name           -> L"UMyClass"
   [+0x08] Info           -> FClassRegistrationInfo
   [+0x10] Hash
   ```
3. Disassemble `InnerRegister`. It marshals `GetPrivateStaticClassBody`, whose
   arguments hand you the class layout directly:

   | Location | Meaning |
   |---|---|
   | `rcx` | package name (`L"/Script/..."`) |
   | `rdx` | class name (prefix-stripped) |
   | `r8` | `&ReturnClass` (the static `UClass*`) |
   | `[rsp+0x20]` | **InSize** — `sizeof(UMyClass)` |
   | `[rsp+0x28]` | alignment |
   | `[rsp+0x30]` | **EClassFlags** (`0x1` = `CLASS_Abstract`) |
   | `r11-0x50` | **ClassConstructor** |
   | `r11-0x38` | **SuperClassFn** — call it to name the parent |
   | `r11-0x30` | WithinClassFn |

   Resolve `SuperClassFn` by disassembling it and reading its `lea rdx` name
   operand. This reconstructs the inheritance chain reliably.

4. `ClassConstructor` is an `InternalConstructor` thunk
   (`mov rcx,[rcx]; test; jne <real ctor>`). The real constructor stores the
   **vtable** (`lea rax,[rip+X]; mov [rbx],rax`) and initialises members —
   member offsets and their defaults are visible here.

## Finding a specific method: vtable diffing

To locate a virtual like `Create()` with no symbols:

1. Get vtables for the abstract base and **two or more** concrete subclasses.
2. Determine each vtable's true length. Without RTTI, vtables are packed
   back-to-back in `.rdata` with no terminator. Trick: the next vtable's slots
   1..5 will match the base's slots 1..5 (shared `UObject` virtuals). Scan
   forward for that repeat; the match position minus 1 is where the next vtable
   starts.
3. Diff. Ignore slot 0 (destructor, always differs). Inherited `UObject`
   virtuals are identical across all three. **The class-specific virtuals appear
   as a short run near the end.**
4. Identify the target: the slot where the abstract base points at a generic stub
   and *every* concrete subclass overrides it. Confirm with sizes — the real
   implementation will be hundreds or thousands of bytes while the stub is a
   couple of instructions.

Get exact bounds from `.pdata` via `fnrange()`. Never guess function extents from
`int3` padding.

## Reading the logic

**Log and debug strings are the best entry points.** Search the wide dump for a
subsystem's `Log<Name>` category, then for nearby format strings. Strings from
one translation unit cluster together in `.rdata`, so once you find one the whole
module's vocabulary is adjacent — often the complete set of outcomes a function
can produce. Finding `"No lair"`, `"No participants"`,
`"Success(CanCapture)"`, `"Success(CanNotCapture)"` in one block gave the entire
control-flow skeleton of a 1690-byte function before reading any of it.

To find the function from a string: get the string VA, then disassemble a window
of `.text` around related code and `grep` for the address. If the module is
unknown, do a full-`.text` scan in the background.

### Idioms to recognise

**UE's `SRand` / `FMath::RandHelper`** — memorise this; it marks every gameplay
random decision:

```asm
imul eax, [GSRandSeed], 0xbb38435   ; * 196314165
add  eax, 0x3619636b                ;  + 907633515
shr  eax, 9
or   eax, 0x3f800000                ; float in [1,2)
subss xmm, 1.0f                     ; -> [0,1)
mulss xmm, (float)N                 ; RandHelper(N)
cvttss2si
```

All uses share one global seed, so unrelated systems' rolls are interleaved.

**`TConsoleVariableData<T>::GetValueOnAnyThread()`** — a load of the cvar's value
pointer, two thread-check calls, then `mov eax,[base + 0 or 4]` (game vs render
thread copy). Treat as "read cvar".

**Console variable registration** via the `IConsoleManager` vtable. This is how
you get *default values*, since name, default, and help text are all arguments to
one call:

- slot `+0x18` — `RegisterConsoleVariable(name, int default, help, flags)`:
  the default is the immediate in `r8d`.
- slot `+0x30` — `RegisterConsoleVariableRef(name, T& var, help, flags)`:
  `r8` points at the variable's storage; read the default from there.

Cross-check with the help string, which sits next to the name in `.rdata` and
often states the units or the per-what.

**TMap lookup** — hash call, `and` with `[map+0xE8]-1` (bucket mask), index into
`[map+0xD8]`, element array at `[map+0xA0]` with a fixed stride, `-1` sentinel
for empty, `+0x68` next-in-chain. Recognise and move on.

**Chunked object pools** — `if (i < 0x400) direct index into inline array of
stride S; else walk to a heap chunk`. Gives you both the per-entry size and the
chunk size for free.

**Budgeted round-robin with delta compensation** — an important pattern to look
for in any "how much is actually simulated" question:

```c
budget = min(cvar, total);
scaledDelta = (float)total * DeltaTime / (float)budget;   // <-- the tell
cursor = persisted; if (cursor >= total) cursor = 0;
for (n = 0; n < budget; n++) { update(pool[cursor], scaledDelta);
                               cursor = (cursor + 1) % total; }
```

The `total/budget` delta scaling is the signature. It means nothing is culled and
average rates stay correct; only *temporal resolution* degrades as population
grows. Answer scaling questions with the update interval and the per-update jump,
not with "N are active".

## Constant provenance — always check before saying "hardcoded"

A float's **section and initialisation state** tell you where its value comes
from. This distinction has burned me and is worth the extra minute every time.

| Where | Meaning |
|---|---|
| `.rdata` | compile-time constant |
| `.data`, **within** `raw_size` | initialised at build; check for writers |
| `.data`, **beyond** `raw_size` (`va2off()` returns `None`) | zero-init at load; **must** be written at runtime — a config/prototype value whose number is *not in the binary* |

For the middle case, prove it by scanning all of `.text` for the address and
classifying every reference as load or store:

```
objdump -d -j .text -M intel game.exe | grep -n '0xADDRESS'
```

`movss xmm,[rip+..]` = read, `movss [rip+..],xmm` = write. **Only claim
"hardcoded" if there are zero writes.** Neighbouring slots in the same pool often
*do* have writers, which is a useful control that your scan works.

Caveat: absence of a direct store does not prove immutability for zero-init
addresses, because a config parser writes whole structs through a base pointer
and never names the field's address. Also, MSVC pools identical float literals,
so several unrelated call sites may share one address — do not infer that they
are one named setting.

## Establishing world units

Never assume centimetres. Cross-check at least twice:

1. An in-data comment such as `FarLairDistance = 100000.f // 1000m`.
2. A **spatial grid's total extent**. Recover the cell size from the reciprocal
   the code multiplies by, and the axis count from the clamp bound
   (`mov r9d, 0x4f` → 80 cells). Multiply. If the product matches the known
   playable map size, the scale is confirmed independently of any comment.

## Reporting discipline

Learned the hard way in the session that produced this skill.

- **Label every number's source.** Binary-derived, config-derived, or inferred.
  If the user has excluded a source (e.g. "no config files"), do not silently
  carry earlier values from it into a binary-based answer.
- **Separate the verified mechanism from the guessed meaning.** Confirming that
  a field exists and is read is not confirming what it controls. Say which you
  did.
- **State what you did not trace.** Finding a function by its log strings and
  reading it inward tells you how it works, not who calls it or how often. If
  the question was about scope or frequency, the caller chain is still unknown —
  say so rather than letting a plausible inference read as a finding.
- **Correct earlier claims plainly** when a check overturns them, and say what
  the check was. A verified 700 m and an assumed 25 m should not appear in the
  same list with the same confidence.
- Distances: report both raw units and the converted value.
