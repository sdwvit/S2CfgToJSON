export * from "./types.mjs";
export * from "./enums.mjs";
export type Internal = "__internal__" | "fork" | "removeNode" | "addNode" | "clone" | "entries" | "forEach" | "filter" | "map" | "toJson" | "toString";
export type InternalPlus = Internal | "fromString" | "fromJson";
export interface DefaultEntries {
    bpatch?: boolean;
    bskipref?: boolean;
    isArray?: boolean;
    isRoot?: boolean;
    rawName?: string;
    refkey?: string | number;
    refurl?: string;
    removenode?: boolean;
    useAsterisk?: boolean;
}
export type GetStructType<In> = In extends Array<infer T> ? Struct & {
    [K in `${number}`]: GetStructType<T>;
} : In extends Record<any, any> ? Struct & {
    [key in keyof In]: key extends Internal ? Struct[key] : GetStructType<In[key]>;
} : In extends string ? In : In extends number ? number : In extends boolean ? boolean : In;
/**
 * This file is part of the Stalker 2 Modding Tools project.
 * This is a base class for all structs.
 */
export declare class Struct implements Record<Internal, any> {
    __internal__: Refs;
    /**
     * Creates a new struct instance.
     */
    constructor(parentOrRaw?: string | Struct | object);
    fork(clone?: boolean): this;
    removeNode(key: Exclude<keyof this, Symbol>): this;
    addNode(value: any, key?: string | number): this;
    clone(): this;
    entries<K extends Exclude<keyof this, InternalPlus>, V extends (typeof this)[K]>(): [K, V][];
    forEach<K extends Exclude<keyof this, InternalPlus>, V extends (typeof this)[K]>(callback: ([key, value]: [K, V], i: number, arr: [K, V][]) => void): void;
    /**
     * Filters the struct entries based on a callback function. Returns a copy.
     * @param callback
     */
    filter<K extends Exclude<keyof this, InternalPlus>, V extends (typeof this)[K], S extends this>(callback: (value: [K, V], index: number, array: [K, V][]) => boolean): S;
    /**
     * Maps the struct entries based on a callback function. Returns a copy.
     * @param callback
     */
    map<K extends Exclude<keyof this, InternalPlus>, V extends (typeof this)[K]>(callback: ([key, value]: [K, V], i: number, arr: [K, V][]) => V): this;
    static fromJson<T>(obj: T, minified?: boolean): T extends object ? GetStructType<T> : T;
    toJson<T extends object>(minify?: boolean): T;
    toString(): string;
    static fromString<IntendedType>(text: string): (IntendedType & Struct)[];
}
export declare class Refs implements DefaultEntries {
    rawName?: string;
    refurl?: string;
    refkey?: string | number;
    bskipref?: boolean;
    bpatch?: boolean;
    isArray?: boolean;
    isRoot?: boolean;
    useAsterisk?: boolean;
    removenode?: boolean;
    constructor(ref?: string | Refs);
    toString(): string;
}
export declare function pad(text: string): string;
export declare function createDynamicClassInstance<T extends Struct = Struct>(rawName: string, index?: number): T;
export declare function parseKey(key: string, parent: Struct, index: number): string | number;
