export type Value = Omit<Struct, "toTs"> | string | boolean | number;
const defaultEntries = new Set(["_isArray", "_useAsterisk"]);
type DefaultEntries = { _isArray?: boolean; _useAsterisk?: boolean };
export type Entries = Record<string | number, Value> & DefaultEntries;

export type GetTsType<In extends Struct, E = In["entries"]> = {
  [key in Exclude<keyof E, keyof DefaultEntries>]: E[key] extends Struct
    ? GetTsType<E[key]>
    : E[key];
};
type RKey<In> = Exclude<keyof In, keyof DefaultEntries>;

export type GetStructType<In> =
  In extends Array<any>
    ? Struct<{ [key: number]: GetStructType<In[number]> }>
    : In extends Record<any, any>
      ? Struct<{ [key in RKey<In>]: GetStructType<In[key]> }>
      : In extends string
        ? string
        : In extends number
          ? number
          : In extends boolean
            ? boolean
            : never;

/**
 * This file is part of the Stalker 2 Modding Tools project.
 * This is a base class for all structs.
 */
export abstract class Struct<T extends Entries = {}> {
  isRoot?: boolean;
  refurl?: string;
  refkey?: string | number;
  bskipref?: boolean;
  abstract _id: string;
  entries: T;

  static TAB = "   ";
  static pad(text: string): string {
    return `${Struct.TAB}${text.replace(/\n+/g, `\n${Struct.TAB}`)}`;
  }
  static WILDCARD = "_wildcard";
  static isNumber(ref: string): boolean {
    return Number.isInteger(parseInt(ref)) || typeof ref === "number";
  }
  static isArrayKey(key: string) {
    return key.includes("[") && key.includes("]");
  }
  static renderKeyName(ref: string, useAsterisk?: boolean): string {
    if (`${ref}`.startsWith("_")) {
      return Struct.renderKeyName(ref.slice(1), useAsterisk); // Special case for indexed structs
    }
    if (`${ref}`.includes("*") || useAsterisk) {
      return "[*]"; // Special case for wildcard structs
    }
    if (`${ref}`.includes("_dupe_")) {
      return Struct.renderKeyName(ref.slice(0, ref.indexOf("_dupe_")));
    }
    if (Struct.isNumber(ref)) {
      return `[${parseInt(ref)}]`;
    }
    return ref;
  }

  static renderStructName(name: string): string {
    if (name === Struct.WILDCARD) {
      return "[*]"; // Special case for wildcard structs
    }
    if (`${name}`.startsWith("_")) {
      return Struct.renderStructName(name.slice(1)); // Special case for indexed structs
    }
    if (Struct.isNumber(name)) {
      return `[${parseInt(name)}]`;
    }
    return name;
  }

  static extractKeyFromBrackets(key: string) {
    if (/\[(.+)]/.test(key)) {
      return key.match(/\[(.+)]/)[1];
    }
    return "";
  }

  static parseStructName(name: string): string {
    if (Struct.extractKeyFromBrackets(name) === "*") {
      return Struct.WILDCARD; // Special case for wildcard structs
    }
    if (Struct.isNumber(Struct.extractKeyFromBrackets(name))) {
      return `_${name.match(/\[(\d+)]/)[1]}`; // Special case for indexed structs
    }
    return name
      .replace(/\W/g, "_")
      .replace(/^\d+/, "_")
      .replace(/_+/g, "_")
      .replace(/^_+/, "");
  }

  static createDynamicClass = (name: string): new () => Struct =>
    new Function("parent", `return class ${name} extends parent {}`)(Struct);

  toString(): string {
    let text: string;
    text = this.isRoot ? `${this._id} : ` : "";
    text += "struct.begin";
    const refs = ["refurl", "refkey", "bskipref"]
      .map((k) => [k, this[k]])
      .filter(([_, v]) => v !== "" && v !== undefined && v !== false)
      .map(([k, v]) => {
        if (v === true) return k;
        return `${k}=${Struct.renderKeyName(v)}`;
      })
      .join(";");
    if (refs) {
      text += ` {${refs}}`;
    }
    text += "\n";
    // Add all keys
    text += Object.entries(this.entries || {})
      .filter(([key]) => key !== "_useAsterisk" && key !== "_isArray")
      .map(([key, value]) => {
        const keyOrIndex = Struct.renderKeyName(key, this.entries._useAsterisk);
        const equalsOrColon = value instanceof Struct ? ":" : "=";
        const spaceOrNoSpace = value === "" ? "" : " ";
        return Struct.pad(
          `${keyOrIndex} ${equalsOrColon}${spaceOrNoSpace}${value}`,
        );
      })
      .join("\n");
    text += "\nstruct.end";
    return text;
  }

  toTs(pretty = false): string {
    const collect = (struct: Struct) => {
      const obj = {};
      if (struct.entries) {
        Object.entries(struct.entries)
          .filter(([key]) => !defaultEntries.has(key))
          .forEach(([key, value]) => {
            if (value instanceof Struct) {
              obj[key] = collect(value);
            } else {
              obj[key] = value;
            }
          });
      }
      return obj;
    };
    return JSON.stringify(collect(this), null, pretty ? 2 : 0);
  }

  static addEntry(
    parent: Struct<DefaultEntries>,
    key: string,
    value: Value,
    index: number,
  ) {
    parent.entries ||= {};

    const getKey = () => {
      let normKey: string | number = key;
      if (Struct.isArrayKey(key)) {
        parent.entries._isArray = true;
        normKey = Struct.extractKeyFromBrackets(key);

        if (normKey === "*") {
          parent.entries._useAsterisk = true;
          return Object.keys(parent.entries).length;
        }

        if (parent.entries[normKey] !== undefined) {
          return `${normKey}_dupe_${index}`;
        }
        return normKey;
      }
      if (parent.entries[normKey] !== undefined) {
        return `${normKey}_dupe_${index}`;
      }
      return normKey;
    };

    parent.entries[getKey()] = value;
  }

  static fromString<IntendedType extends Partial<Struct> = Struct>(
    text: string,
  ): IntendedType[] {
    const lines = text.trim().split("\n");

    const parseHead = (line: string, index: number): Struct => {
      const match = line.match(
        /^(.*)\s*:\s*struct\.begin\s*({\s*((refurl|refkey|bskipref)\s*(=.+)?)\s*})?/,
      );
      if (!match) {
        throw new Error(`Invalid struct head: ${line}`);
      }
      let name =
        Struct.parseStructName(match[1].trim()) || `UnnamedStruct${index}`;

      const dummy = new (Struct.createDynamicClass(name))();
      dummy._id = match[1].trim();
      if (match[3]) {
        const refs = match[3]
          .split(";")
          .map((ref) => ref.trim())
          .filter(Boolean)
          .reduce(
            (acc, ref) => {
              const [key, value] = ref.split("=");
              acc[key.trim()] = value ? value.trim() : true;
              return acc;
            },
            {} as { refurl?: string; refkey?: string; bskipref?: boolean },
          );
        if (refs.refurl) dummy.refurl = refs.refurl;
        if (refs.refkey) dummy.refkey = refs.refkey;
        if (refs.bskipref) dummy.bskipref = refs.bskipref;
      }
      return dummy as Struct;
    };

    const parseKeyValue = (line: string, parent: Struct): void => {
      const match = line.match(/^(.*?)(\s*:\s*|\s*=\s*)(.*)$/);
      if (!match) {
        throw new Error(`Invalid key-value pair: ${line}`);
      }
      const key = match[1].trim();
      let value: string | number = match[3].trim();
      try {
        // understand 0.1f / 1. / 0.f / .1 / .1f -> ((\d*)\.?(\d+)|(\d+)\.?(\d*))f?
        const matches = value.match(/^(\d*)\.?(\d*)f?$/);
        const first = matches[1];
        const second = matches[2];
        if (first || second) {
          value = parseFloat(`${first || 0}${second ? `.${second}` : ""}`);
        } else {
          value = JSON.parse(value);
        }
      } catch (e) {}
      Struct.addEntry(parent, key, value, index);
    };
    let index = 0;

    const walk = () => {
      const roots: Struct[] = [];
      const stack = [];
      while (index < lines.length) {
        const line = lines[index++].trim();
        if (line.startsWith("#") || line.startsWith("//")) {
          continue; // Skip comments
        }
        const current = stack[stack.length - 1];
        if (line.includes("struct.begin")) {
          const newStruct = parseHead(line, index);
          if (current) {
            const key = Struct.renderStructName(newStruct.constructor.name);
            Struct.addEntry(current, key, newStruct, index);
          } else {
            newStruct.isRoot = true;
            roots.push(newStruct);
          }
          stack.push(newStruct);
        } else if (line.includes("struct.end")) {
          stack.pop();
        } else if (line.includes("=") && current) {
          parseKeyValue(line, current);
        }
      }
      return roots;
    };

    return walk() as IntendedType[];
  }
}
