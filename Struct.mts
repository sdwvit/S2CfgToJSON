export * from "./types.mts";
export * from "./enums.mts";
import { DefaultEntries, GetStructType, Internal } from "./types.mts";

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
] as const);
const INTERNAL_PROPS_INV = new Map(
  Array.from(INTERNAL_PROPS.entries()).map(([k, v]) => [v, k]),
);
const REF_INTERNAL_PROPS = new Map([
  ["rawName", "w"],
  ["refurl", "u"],
  ["refkey", "k"],
  ["bskipref", "s"],
  ["bpatch", "p"],
  ["isArray", "a"],
  ["isRoot", "r"],
  ["useAsterisk", "*"],
] as const);
const REF_INTERNAL_PROPS_INV = new Map(
  Array.from(REF_INTERNAL_PROPS.entries()).map(([k, v]) => [v, k]),
);

/**
 * This file is part of the Stalker 2 Modding Tools project.
 * This is a base class for all structs.
 */
export class Struct {
  __internal__: Refs = new Refs();

  /**
   * Creates a new struct instance.
   */
  constructor(parentOrRaw?: string | Struct | object) {
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
      : createDynamicClassInstance(
          this.__internal__.rawName || this.constructor.name,
        );
    patch.__internal__.isRoot = this.__internal__.isRoot;
    patch.__internal__.isArray = this.__internal__.isArray;
    patch.__internal__.useAsterisk = this.__internal__.useAsterisk;

    function markAsbPatch(s: Struct) {
      s.__internal__.bpatch = true;
      Object.values(s)
        .filter((v) => v instanceof Struct)
        .forEach(markAsbPatch);
    }

    markAsbPatch(patch);
    return patch as this;
  }

  removeNode(key: keyof this) {
    if (this.__internal__.bpatch !== true) {
      throw new Error(
        "Cannot remove node from non-patch struct. Use fork() first.",
      );
    }
    this[key] = REMOVE_NODE as any;
    return this;
  }

  addNode(value: any, key?: string | number): this {
    if (key === undefined) {
      const nextIndex = Object.keys(this)
        .map((k) => parseInt(k))
        .filter((k) => !isNaN(k))
        .sort((a, b) => a - b)
        .pop();
      this[nextIndex !== undefined ? nextIndex + 1 : 0] = value;
    } else {
      if (value instanceof Struct) {
        value.__internal__.rawName = String(key);
      }
      this[key] = value;
    }
    return this;
  }

  clone() {
    const newInstance = new Struct() as typeof this;
    newInstance.__internal__ = new Refs(this.__internal__);
    this.forEach(([k, v]) => {
      if (v instanceof Struct) {
        newInstance[k] = v.clone();
      } else {
        newInstance[k] = v;
      }
    });
    return newInstance;
  }

  entries<
    K extends Exclude<keyof this, Internal>,
    V extends (typeof this)[K],
  >() {
    return Object.entries(this).filter(
      ([key]) => !INTERNAL_PROPS.has(key as any),
    ) as [K, V][];
  }

  forEach<K extends Exclude<keyof this, Internal>, V extends (typeof this)[K]>(
    callback: ([key, value]: [K, V], i: number, arr: [K, V][]) => void,
  ): void {
    this.entries().forEach(([key, value], i, arr) =>
      callback([key as K, value as V], i, arr as any),
    );
  }

  /**
   * Filters the struct entries based on a callback function. Returns a copy.
   * @param callback
   */
  filter<
    K extends Exclude<keyof this, Internal>,
    V extends (typeof this)[K],
    S extends this,
  >(callback: (value: [K, V], index: number, array: [K, V][]) => boolean): S {
    const clone = this.clone();
    clone.entries().forEach((entry, i, arr) => {
      if (!callback(entry as any, i, arr as any)) {
        delete clone[entry[0]];
      }
    });
    return clone as any;
  }

  /**
   * Maps the struct entries based on a callback function. Returns a copy.
   * @param callback
   */
  map<K extends Exclude<keyof this, Internal>, V extends (typeof this)[K]>(
    callback: ([key, value]: [K, V], i: number, arr: [K, V][]) => V,
  ): this {
    const clone = this.clone();
    clone.entries().forEach(([key, value], i, arr) => {
      clone[key] = callback([key as K, value as V], i, arr as any);
      if (clone[key] === null || clone[key] === undefined) {
        delete clone[key];
      }
    });
    return clone;
  }

  static fromJson<T>(
    obj: T,
    minified = false,
  ): T extends object ? GetStructType<T> : T {
    if (typeof obj === "object" && !!obj) {
      const instance = new Struct();
      Object.entries(obj).forEach(([key, value]) => {
        const nKey = fromMinifiedKey(key, minified);

        if (nKey === "__internal__") {
          instance[nKey] = new Refs(
            Object.fromEntries(
              Object.entries(value).map(([k, v]) => [
                fromMinifiedKey(k, minified),
                v,
              ]),
            ),
          );
        } else {
          instance[nKey] = Struct.fromJson(value, minified);
        }
      });
      return instance as any;
    }

    return obj as any;
  }

  toJson<T extends object>(minify = false): T {
    const obj = {};

    Object.entries(this).forEach(([key, value]) => {
      let nKey = maybeMinifyKey(key, minify);
      if (value instanceof Struct) {
        obj[nKey] = value.toJson(minify);
      } else if (value instanceof Refs) {
        obj[nKey] = Object.fromEntries(
          Object.entries(value).map(([k, v]) => [maybeMinifyKey(k, minify), v]),
        );
      } else {
        obj[nKey] = value;
      }
    });
    return obj as T;
  }

  toString(): string {
    if (!(this.__internal__ instanceof Refs)) {
      this.__internal__ = new Refs(this.__internal__);
    }

    let text: string = this.__internal__.isRoot
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
        const nameAlreadyRendered =
          value instanceof Struct && value.__internal__.isRoot;
        const useAsterisk =
          this.__internal__.isArray && this.__internal__.useAsterisk;
        let keyOrIndex = "";
        let equalsOrColon = "";
        let spaceOrNoSpace = "";
        if (!nameAlreadyRendered) {
          keyOrIndex = renderKeyName(key as string, useAsterisk) + " ";
          equalsOrColon = value instanceof Struct ? ":" : "=";
          spaceOrNoSpace = value === "" ? "" : " ";
        }

        return pad(`${keyOrIndex}${equalsOrColon}${spaceOrNoSpace}${value}`);
      })
      .join("\n");
    text += "\nstruct.end";
    return text;
  }

  static fromString<IntendedType>(text: string): (IntendedType & Struct)[] {
    return walk(text.trim().split("\n")) as any[];
  }
}

export class Refs implements DefaultEntries {
  rawName?: string;
  refurl?: string;
  refkey?: string | number;
  bskipref?: boolean;
  bpatch?: boolean;
  isArray?: boolean;
  isRoot?: boolean;
  useAsterisk?: boolean;

  constructor(ref?: string | Refs) {
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
        if (v === true) return k;
        if (k === "refkey") {
          return `${k}=${renderKeyName(`${v}`, this.useAsterisk)}`;
        }
        return `${k}=${v}`;
      })
      .join(";");
  }
}

const structHeadRegex = new RegExp(
  `^\s*((.*)\\s*:)?\\s*struct\\.begin\\s*({\\s*((${KEYWORDS.join("|")})\\s*(=.+)?)\\s*})?`,
);

function parseHead(line: string, index: number): Struct {
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

  return dummy as Struct;
}

export function pad(text: string): string {
  return `${TAB}${text.replace(/\n+/g, `\n${TAB}`)}`;
}

function isNumber(ref: string): boolean {
  return Number.isInteger(parseInt(ref)) || typeof ref === "number";
}

export function createDynamicClassInstance<T extends Struct = Struct>(
  rawName: string,
  index?: number,
): T {
  const name = parseStructName(rawName) || `UnnamedStruct${index}`;
  return new (new Function(
    "parent",
    "Refs",
    `return class ${name} extends parent {
      __internal__ = new Refs({ rawName: "${rawName.trim()}" });
    }`,
  )(Struct, Refs))() as T;
}

function parseKeyValue(line: string, parent: Struct, index: number): void {
  const match = line.match(/^(.*?)(\s*:\s*|\s*=\s*)(.*)$/);
  if (!match) {
    throw new Error(`Invalid key-value pair: ${line}`);
  }

  const key = parseKey(match[1].trim(), parent, index);

  parent[key] = parseValue(match[3].trim());
}

function walk(lines: string[]) {
  const roots: Struct[] = [];
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
        const key = parseKey(
          renderStructName(newStruct.constructor.name),
          current,
          index,
        );
        current[key] = newStruct;
      } else {
        newStruct.__internal__.isRoot = true;
        roots.push(newStruct);
      }
      stack.push(newStruct);
    } else if (line.includes("struct.end")) {
      stack.pop();
    } else if (line.includes("=") && current) {
      parseKeyValue(line, current, index);
    }
  }
  return roots;
}

export function parseKey(key: string, parent: Struct, index: number) {
  let normKey: string | number = key;

  if (key.startsWith("[") && key.endsWith("]")) {
    parent.__internal__.isArray = true;
    normKey = extractKeyFromBrackets(key);

    if (normKey === "*") {
      // parent.__internal__.useAsterisk = true; never use asterisk for space-saving reasons
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

function parseValue(value: string): string | number | boolean {
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
      return parseFloat(
        `${minus ? "-" : ""}${first || 0}${second ? `.${second}` : ""}`,
      );
    }
  } catch (e) {}
  return value;
}

function renderStructName(name: string): string {
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

function renderKeyName(key: string, useAsterisk?: boolean): string {
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

function extractKeyFromBrackets(key: string) {
  if (/\[(.+)]/.test(key)) {
    return key.match(/\[(.+)]/)[1];
  }
  return "";
}

function parseStructName(name: string): string {
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

function maybeMinifyKey(key: string, minify: boolean) {
  return minify &&
    (INTERNAL_PROPS.has(key as any) || REF_INTERNAL_PROPS.has(key as any))
    ? INTERNAL_PROPS.get(key as any) || REF_INTERNAL_PROPS.get(key as any)
    : key;
}

function fromMinifiedKey(key: string, minified: boolean) {
  if (!minified) return key;
  return (
    INTERNAL_PROPS_INV.get(key as any) ||
    REF_INTERNAL_PROPS_INV.get(key as any) ||
    key
  );
}
