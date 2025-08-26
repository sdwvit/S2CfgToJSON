// noinspection JSUnusedGlobalSymbols

import {
  EAttachSlot,
  EInventoryEquipmentSlot,
  EItemType,
  ELineDirection,
  EUpgradeTargetPartType,
} from "./enums.mjs";

export interface Struct<T extends Entries = {}> {
  isRoot?: boolean;
  refurl?: string;
  refkey?: string | number;
  bskipref?: boolean;
  _id: string;
  entries: T;
  toTs(): string;
}
export type DefaultEntries = { _isArray?: boolean; _useAsterisk?: boolean };

export type Value = Omit<Struct, "toTs"> | string | boolean | number;

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
        ? In
        : In extends number
          ? number
          : In extends boolean
            ? boolean
            : never;

export type ArmorPrototype = GetStructType<{
  SID: string;
  Icon: string;
  MeshPrototypeSID: string;
  BaseDurability: number;
  Weight: number;
  bBlockHead?: boolean;
  Cost: number;
  ItemGridWidth?: number;
  ItemGridHeight?: number;
  ArtifactSlots: number;
  Protection: {
    Burn: number;
    Shock: number;
    ChemicalBurn: number;
    Radiation: number;
    PSY: number;
    Strike: number;
    Fall: number;
  };
  ProtectionNPC: {
    Burn: number;
    Shock: number;
    ChemicalBurn: number;
    Radiation: number;
    PSY: number;
    Strike: number;
    Fall: number;
  };
  UpgradePrototypeSIDs: string[];
  SectionSettings: {
    SectionIsEnabled: boolean;
    UpgradeTargetPartType: EUpgradeTargetPartType;
    BottomPosition: number;
    RightPoition: number;
    LeftPosition: number;
    TopPosition: number;
    UpgradeLineDirection: ELineDirection;
    ModuleLineDirection: ELineDirection;
  }[];
  MeshGenerator: {
    MeshGeneratorPrototypeSID: string;
    Weight: number;
    Cost: number;
  }[];
  NpcMeshGenerator: {
    MeshGeneratorPrototypeSID: string;
    Weight: number;
  }[];
  Invisible?: boolean;
  Type: EItemType;
  ItemSlotType: EInventoryEquipmentSlot;
  MaxStackCount: number;
  bPreventFromLimping: boolean;
  IncreaseSpeedCoef: number;
  NoiseCoef: number;
  ArmorSoundType: string;
  StaggerEffectPrototypeSID: string;
  EffectPrototypeSIDs: string[];
  VoiceModulatorSID: string;
  ItemTypeSwitchValue: string;
  PhysicsInteractionPrototypeSID: string;
  PreinstalledUpgrades: string[];
  LocalizationSID: string;
}>;
