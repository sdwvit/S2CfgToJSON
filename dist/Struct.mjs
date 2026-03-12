export * from "./types.mjs";
export * from "./enums.mjs";
const TAB = "   ";
const WILDCARD = "_wildcard";
const KEYWORDS = [
    "refurl", // a file path to override
    "refkey", // SID to override
    "bskipref", // ??? not sure
    "bpatch", // allows patching only specific keys
];
const REMOVE_NODE = "removenode";
const INTERNAL_PROPS = new Map([
    ["__internal__", "_"],
    ["fork", ""], // methods
    ["removeNode", ""], // methods
    ["addNode", ""], // methods
    ["clone", ""], // methods
    ["entries", ""], // methods
    ["forEach", ""], // methods
    ["filter", ""], // methods
    ["map", ""], // methods
    ["fromJson", ""], // methods
    ["toJson", ""], // methods
    ["toString", ""], // methods
    ["fromString", ""], // methods
]);
const INTERNAL_PROPS_INV = new Map(Array.from(INTERNAL_PROPS.entries()).map(([k, v]) => [v, k]));
const REF_INTERNAL_PROPS = new Map([
    ["rawName", "w"],
    ["refurl", "u"],
    ["refkey", "k"],
    ["bskipref", "s"],
    ["bpatch", "p"],
    ["isArray", "a"],
    ["isRoot", "r"],
    ["useAsterisk", "*"],
]);
const REF_INTERNAL_PROPS_INV = new Map(Array.from(REF_INTERNAL_PROPS.entries()).map(([k, v]) => [v, k]));
/**
 * This file is part of the Stalker 2 Modding Tools project.
 * This is a base class for all structs.
 */
export class Struct {
    __internal__ = new Refs();
    /**
     * Creates a new struct instance.
     */
    constructor(parentOrRaw) {
        if (parentOrRaw instanceof Struct) {
            Object.assign(this, parentOrRaw.clone());
        }
        if (typeof parentOrRaw === "string") {
            Object.assign(this, Struct.fromString(parentOrRaw)[0]);
        }
        if (typeof parentOrRaw === "object" && parentOrRaw !== null) {
            Object.assign(this, Struct.fromJson(parentOrRaw));
        }
    }
    fork(clone = false) {
        const patch = clone
            ? this.clone()
            : createDynamicClassInstance(this.__internal__.rawName || this.constructor.name);
        patch.__internal__.isRoot = this.__internal__.isRoot;
        patch.__internal__.isArray = this.__internal__.isArray;
        patch.__internal__.useAsterisk = this.__internal__.useAsterisk;
        function markAsbPatch(s) {
            s.__internal__.bpatch = true;
            Object.values(s)
                .filter((v) => v instanceof Struct)
                .forEach(markAsbPatch);
        }
        markAsbPatch(patch);
        return patch;
    }
    removeNode(key) {
        if (this.__internal__.bpatch !== true) {
            throw new Error("Cannot remove node from non-patch struct. Use fork() first.");
        }
        if (this[key] instanceof Struct) {
            this[key].__internal__.removenode = true;
        }
        else {
            console.warn(`Attempting to remove node on non-struct value. Old value: '${this.__internal__.rawName}.${key}' = ${this[key]}. Assigning 'empty' instead.`);
            this[key] = "empty";
        }
        return this;
    }
    addNode(value, key) {
        if (key === undefined) {
            const nextIndex = Object.keys(this)
                .map((k) => parseInt(k))
                .filter((k) => !isNaN(k))
                .sort((a, b) => a - b)
                .pop();
            this[nextIndex !== undefined ? nextIndex + 1 : 0] = value;
        }
        else {
            if (value instanceof Struct) {
                value.__internal__.rawName = String(key);
            }
            this[key] = value;
        }
        return this;
    }
    clone() {
        const newInstance = new Struct();
        newInstance.__internal__ = new Refs(this.__internal__);
        this.forEach(([k, v]) => {
            if (v instanceof Struct) {
                newInstance[k] = v.clone();
            }
            else {
                newInstance[k] = v;
            }
        });
        return newInstance;
    }
    entries() {
        return Object.entries(this).filter(([key]) => !INTERNAL_PROPS.has(key));
    }
    forEach(callback) {
        this.entries().forEach(([key, value], i, arr) => callback([key, value], i, arr));
    }
    /**
     * Filters the struct entries based on a callback function. Returns a copy.
     * @param callback
     */
    filter(callback) {
        const clone = this.clone();
        clone.entries().forEach((entry, i, arr) => {
            if (!callback(entry, i, arr)) {
                delete clone[entry[0]];
            }
        });
        return clone;
    }
    /**
     * Maps the struct entries based on a callback function. Returns a copy.
     * @param callback
     */
    map(callback) {
        const clone = this.clone();
        clone.entries().forEach(([key, value], i, arr) => {
            clone[key] = callback([key, value], i, arr);
            if (clone[key] === null || clone[key] === undefined) {
                delete clone[key];
            }
        });
        return clone;
    }
    static fromJson(obj, minified = false) {
        if (typeof obj === "object" && !!obj) {
            const instance = new Struct();
            Object.entries(obj).forEach(([key, value]) => {
                const nKey = fromMinifiedKey(key, minified);
                if (nKey === "__internal__") {
                    instance[nKey] = new Refs(Object.fromEntries(Object.entries(value).map(([k, v]) => [
                        fromMinifiedKey(k, minified),
                        v,
                    ])));
                }
                else {
                    instance[nKey] = Struct.fromJson(value, minified);
                }
            });
            return instance;
        }
        return obj;
    }
    toJson(minify = false) {
        const obj = {};
        Object.entries(this).forEach(([key, value]) => {
            let nKey = maybeMinifyKey(key, minify);
            if (value instanceof Struct) {
                obj[nKey] = value.toJson(minify);
            }
            else if (value instanceof Refs) {
                obj[nKey] = Object.fromEntries(Object.entries(value).map(([k, v]) => [maybeMinifyKey(k, minify), v]));
            }
            else {
                obj[nKey] = value;
            }
        });
        return obj;
    }
    toString() {
        if (!(this.__internal__ instanceof Refs)) {
            this.__internal__ = new Refs(this.__internal__);
        }
        let text = this.__internal__.isRoot
            ? `${this.__internal__.rawName} : `
            : "";
        text += "struct.begin";
        const refs = this.__internal__.toString();
        if (refs) {
            text += ` {${refs}}`;
        }
        text += "\n";
        // Add all keys
        text += this.entries()
            .map(([key, value]) => {
            const nameAlreadyRendered = value instanceof Struct && value.__internal__.isRoot;
            const useAsterisk = this.__internal__.isArray && this.__internal__.useAsterisk;
            let keyOrIndex = "";
            let equalsOrColon = "";
            let spaceOrNoSpace = "";
            if (!nameAlreadyRendered) {
                keyOrIndex = renderKeyName(key, useAsterisk) + " ";
                equalsOrColon = value instanceof Struct ? ":" : "=";
                spaceOrNoSpace = value === "" ? "" : " ";
            }
            const renderedValue = value instanceof Struct && value.__internal__.removenode
                ? REMOVE_NODE
                : value;
            return pad(`${keyOrIndex}${equalsOrColon}${spaceOrNoSpace}${renderedValue}`);
        })
            .join("\n");
        text += "\nstruct.end";
        return text;
    }
    static fromString(text) {
        return walk(text.trim().split("\n"));
    }
}
export class Refs {
    rawName;
    refurl;
    refkey;
    bskipref;
    bpatch;
    isArray;
    isRoot;
    useAsterisk;
    removenode;
    constructor(ref) {
        if (typeof ref === "string") {
            ref
                .split(";")
                .map((ref) => ref.trim())
                .filter(Boolean)
                .reduce((acc, ref) => {
                const [key, value] = ref.split("=");
                if (KEYWORDS.includes(key.trim())) {
                    acc[key.trim()] = value ? value.trim() : true;
                }
                return acc;
            }, this);
        }
        if (typeof ref === "object") {
            Object.assign(this, ref);
        }
    }
    toString() {
        return KEYWORDS.map((k) => [k, this[k]])
            .filter(([_, v]) => v !== "" && v !== undefined && v !== false)
            .map(([k, v]) => {
            if (v === true)
                return k;
            if (k === "refkey") {
                return `${k}=${renderKeyName(`${v}`, this.useAsterisk)}`;
            }
            return `${k}=${v}`;
        })
            .join(";");
    }
}
const structHeadRegex = new RegExp(`^\\s*((.*)\\s*:)?\\s*struct\\.begin\\s*({\\s*((${KEYWORDS.join("|")})\\s*(=.+)?)\\s*})?`);
function parseHead(line, index) {
    const match = line.match(structHeadRegex);
    if (!match) {
        throw new Error(`Invalid struct head: ${line}`);
    }
    const dummy = createDynamicClassInstance(match[2]?.trim() || "", index);
    if (match[3]) {
        const parsed = new Refs(match[4]);
        dummy.__internal__.refurl = parsed.refurl;
        dummy.__internal__.refkey = parsed.refkey;
        dummy.__internal__.bskipref = parsed.bskipref;
        dummy.__internal__.bpatch = parsed.bpatch;
    }
    return dummy;
}
export function pad(text) {
    return `${TAB}${text.replace(/\n+/g, `\n${TAB}`)}`;
}
function isNumber(ref) {
    return Number.isInteger(parseInt(ref)) || typeof ref === "number";
}
export function createDynamicClassInstance(rawName, index) {
    const parsedName = parseStructName(rawName) || `UnnamedStruct${index}`;
    const name = makeSafeClassName(parsedName);
    return new (new Function("parent", "Refs", `return class ${name} extends parent {
      __internal__ = new Refs({ rawName: "${rawName.trim()}" });
    }`)(Struct, Refs))();
}
function parseKeyValue(line, parent, index) {
    const match = line.match(/^(.*?)(\s*:\s*|\s*=\s*)(.*)$/);
    if (!match) {
        throw new Error(`Invalid key-value pair: ${line}`);
    }
    const key = parseKey(match[1].trim(), parent, index);
    parent[key] = parseValue(match[3].trim());
}
function walk(lines) {
    const roots = [];
    const stack = [];
    let index = 0;
    while (index < lines.length) {
        const line = lines[index++].trim();
        if (line.startsWith("#") || line.startsWith("//")) {
            continue; // Skip comments
        }
        const current = stack[stack.length - 1];
        if (line.includes("struct.begin")) {
            const newStruct = parseHead(line, index);
            if (current) {
                const key = parseKey(renderStructName(newStruct.constructor.name), current, index);
                current[key] = newStruct;
            }
            else {
                newStruct.__internal__.isRoot = true;
                roots.push(newStruct);
            }
            stack.push(newStruct);
        }
        else if (line.includes("struct.end")) {
            stack.pop();
        }
        else if (line.includes("=") && current) {
            parseKeyValue(line, current, index);
        }
    }
    return roots;
}
export function parseKey(key, parent, index) {
    let normKey = key;
    if (key.startsWith("[") && key.endsWith("]")) {
        parent.__internal__.isArray = true;
        normKey = extractKeyFromBrackets(key);
        if (normKey === "*") {
            parent.__internal__.useAsterisk = true;
            return Object.keys(parent).length - 1;
        }
        if (parent[normKey] !== undefined) {
            return `${normKey}_dupe_${index}`;
        }
        return normKey;
    }
    if (parent[normKey] !== undefined) {
        return `${normKey}_dupe_${index}`;
    }
    return normKey;
}
function parseValue(value) {
    if (value === "true" || value === "false") {
        return value === "true";
    }
    try {
        // understand +- 0.1f / 1. / 0.f / .1 / .1f -> ((\d*)\.?(\d+)|(\d+)\.?(\d*))f?
        const matches = value.match(/^(-?)(\d*)\.?(\d*)f?$/);
        const minus = matches[1];
        const first = matches[2];
        const second = matches[3];
        if (first || second) {
            return parseFloat(`${minus ? "-" : ""}${first || 0}${second ? `.${second}` : ""}`);
        }
    }
    catch (e) { }
    return value;
}
function renderStructName(name) {
    if (name === WILDCARD) {
        return "[*]"; // Special case for wildcard structs
    }
    if (`${name}`.startsWith("_")) {
        return renderStructName(name.slice(1)); // Special case for indexed structs
    }
    if (isNumber(name)) {
        return `[${parseInt(name)}]`;
    }
    return name;
}
function renderKeyName(key, useAsterisk) {
    if (`${key}`.startsWith("_")) {
        return renderKeyName(key.slice(1), useAsterisk); // Special case for indexed structs
    }
    if (`${key}`.includes("*") || useAsterisk) {
        return "[*]"; // Special case for wildcard structs
    }
    if (`${key}`.includes("_dupe_")) {
        return renderKeyName(key.slice(0, key.indexOf("_dupe_")));
    }
    if (isNumber(key)) {
        return `[${parseInt(key)}]`;
    }
    return key;
}
function extractKeyFromBrackets(key) {
    if (/\[(.+)]/.test(key)) {
        return key.match(/\[(.+)]/)[1];
    }
    return "";
}
function parseStructName(name) {
    if (extractKeyFromBrackets(name) === "*") {
        return WILDCARD; // Special case for wildcard structs
    }
    if (isNumber(extractKeyFromBrackets(name))) {
        return `_${name.match(/\[(\d+)]/)[1]}`; // Special case for indexed structs
    }
    return name
        .replace(/\W/g, "_")
        .replace(/^\d+/, "_")
        .replace(/_+/g, "_")
        .replace(/^_+/, "");
}
const RESERVED_IDENTIFIERS = new Set([
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "enum",
    "await",
    "implements",
    "package",
    "protected",
    "static",
    "interface",
    "private",
    "public",
    "let",
]);
function makeSafeClassName(name) {
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ||
        RESERVED_IDENTIFIERS.has(name)) {
        return `_${name}`;
    }
    return name;
}
function maybeMinifyKey(key, minify) {
    return minify &&
        (INTERNAL_PROPS.has(key) || REF_INTERNAL_PROPS.has(key))
        ? INTERNAL_PROPS.get(key) || REF_INTERNAL_PROPS.get(key)
        : key;
}
function fromMinifiedKey(key, minified) {
    if (!minified)
        return key;
    return (INTERNAL_PROPS_INV.get(key) ||
        REF_INTERNAL_PROPS_INV.get(key) ||
        key);
}
