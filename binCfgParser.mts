import { Struct, createDynamicClassInstance, parseValue } from "./Struct.mjs";

class BinaryCursor {
  private readonly bytes: Uint8Array;
  private readonly view: DataView;

  position = 0;

  get length() {
    return this.bytes.length;
  }

  constructor(input: ArrayBuffer | Uint8Array) {
    this.bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
    this.view = new DataView(
      this.bytes.buffer,
      this.bytes.byteOffset,
      this.bytes.byteLength,
    );
  }

  readByte(): number {
    this.ensureAvailable(1);
    return this.view.getUint8(this.position++);
  }

  readInt32(): number {
    this.ensureAvailable(4);
    const value = this.view.getInt32(this.position, true);
    this.position += 4;
    return value;
  }

  readUint32(): number {
    this.ensureAvailable(4);
    const value = this.view.getUint32(this.position, true);
    this.position += 4;
    return value;
  }

  readBytes(length: number): Uint8Array {
    this.ensureAvailable(length);
    const start = this.position;
    this.position += length;
    return this.bytes.subarray(start, this.position);
  }

  ensureAvailable(length: number) {
    if (this.position + length > this.length) {
      throw new Error("Unexpected end of binary cfg data.");
    }
  }
}

interface BinaryCfgConfig {
  values: number[];
  lastByte: number;
  position: number;
}

export function readBinaryCfg(bytes: ArrayBuffer | Uint8Array): Struct[] {
  const reader = new BinaryCursor(bytes);
  if (reader.length < 12) {
    return [];
  }

  const stringPool = readBinaryHeader(reader);
  skipPostPoolPadding(reader);

  const roots: Struct[] = [];
  while (reader.position < reader.length) {
    if (reader.position + 16 > reader.length) {
      break;
    }

    const childsCount = reader.readInt32();
    for (let currentChild = 0; currentChild < childsCount; currentChild++) {
      const root = readBinaryStruct(reader, stringPool);
      root.__internal__.isRoot = true;
      roots.push(root);
    }
  }

  return roots;
}

function readBinaryHeader(reader: BinaryCursor): string[] {
  reader.readUint32(); // version
  const stringCount = reader.readInt32();
  const stringPool: string[] = [];
  reader.readUint32(); // reserved

  for (let i = 0; i < stringCount - 1; i++) {
    if (reader.position + 4 > reader.length) {
      break;
    }

    let length = reader.readInt32();
    if (length === 0) {
      reader.position -= 4;
      break;
    }

    if (length < 0) {
      length = Math.abs(length);
      const stringBytes = reader.readBytes(length * 2);
      stringPool.push(
        Buffer.from(stringBytes.subarray(0, -2)).toString("utf16le"),
      );
      continue;
    }

    const stringBytes = reader.readBytes(length);
    stringPool.push(
      stringBytes.length > 1
        ? Buffer.from(stringBytes.subarray(0, -1)).toString("utf-8")
        : "",
    );
  }

  return stringPool;
}

function skipPostPoolPadding(reader: BinaryCursor): void {
  if (reader.position + 9 <= reader.length) {
    reader.readUint32();
    reader.readUint32();
    reader.readByte();
  }
}

function readBinaryCfgConfig(reader: BinaryCursor): BinaryCfgConfig {
  const position = reader.position;
  const values: number[] = [];
  let value = 0;

  while (
    reader.position + 4 <= reader.length &&
    (value = reader.readInt32()) > 0
  ) {
    values.push(value);
  }

  const lastByte = reader.readByte();
  return { values, lastByte, position };
}

function readBinaryStruct(reader: BinaryCursor, stringPool: string[]): Struct {
  const block = readBinaryCfgConfig(reader);
  const node = createDynamicClassInstance(
    getBinaryString(block.values[1], stringPool),
  );

  if (block.lastByte > 0 && [1, 5, 7].includes(block.lastByte)) {
    readBinaryLinkPair(reader);
  }

  const fieldsCount = reader.readInt32();
  for (let currentField = 0; currentField < fieldsCount; currentField++) {
    const fieldBlock = readBinaryCfgConfig(reader);
    if (fieldBlock.values.length <= 1) {
      continue;
    }

    const fieldName = getBinaryString(fieldBlock.values[0], stringPool);
    switch (fieldBlock.values.length) {
      case 2: {
        reader.position = fieldBlock.position;
        const nested = readBinaryStruct(reader, stringPool);
        node.addNode(nested, fieldName);
        break;
      }
      case 3:
      case 4:
        node.addNode(
          parseValue(getBinaryString(fieldBlock.values[2], stringPool).trim()),
          fieldName,
        );
        break;
    }
  }

  return node;
}

function getBinaryString(index: number, stringPool: string[]): string {
  return stringPool[index - 1] ?? "";
}

function readBinaryLinkPair(reader: BinaryCursor) {
  const parentLength = reader.readInt32();
  reader.readBytes(parentLength);
  const refLength = reader.readInt32();
  if (refLength > 0) {
    reader.readBytes(refLength);
  }
}
