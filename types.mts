// noinspection JSUnusedGlobalSymbols

import {
  EAttachSlot,
  EBoltActionWeaponState,
  EConnectionLineState,
  EInventoryEquipmentSlot,
  EItemType,
  ELineDirection,
  EUpgradeTargetPartType,
  EWeaponType,
  EFireType,
  EALifeDirectorScenarioTarget,
  ERank,
  EQuestConditionType,
  EConditionComparance,
  EChangeValueMode,
  EDialogAction,
  EGlobalVariableType,
  EJamType,
  EAnimationReloadTypes,
  EAmmoCaliber,
  EAmmoType,
  ECrosshairType,
  EMagazineMeshType,
  EAttachType,
  ESortGroup,
  EAgentType,
  EAgentArchetype,
  EEmotionalFaceMasks,
  EAimAssistPresetType,
  EEffectType,
  EDuplicateResolveType,
  EBeneficial,
  EDamageType,
  EDamageSource,
  EPsyNPCType,
  EStaminaAction,
  ECameraShakeEffectSubtype,
  EVitalType,
  EItemGenerationCategory,
  EUISound,
  EDamageBone,
  EGSCTeleportType,
  EGameDifficulty,
  EObjType,
  EObjAnim,
  ENPCType,
  EMutantAttackType,
  EEvadeActionType,
  EObjMesh,
  EIgnoreDamageType,
  EStateTag,
  EObjSkeletalMeshTraceBone,
  EWeightStatus,
  EThreatActionType,
  EWaterImmersionLevel,
  EUpgradeVerticalPosition,
  ECauseOfDeath,
  ESoundEffectSubtype,
  EInputAxisType,
  EActionType,
  EQuestNodeType,
  EOverrideDialogTopic,
  ETriggerReact,
  ERequiredSquadMembers,
  EMeshSubType,
} from "./enums.mjs";
import { Struct } from "./Struct.mjs";

export type Internal =
  | "__internal__"
  | "fork"
  | "removeNode"
  | "addNode"
  | "clone"
  | "forEach"
  | "filter"
  | "map"
  | "entries"
  | "toString";

export type DeeplyPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeeplyPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeeplyPartial<U>>
      : T[P] extends object
        ? DeeplyPartial<T[P]>
        : T[P];
};

export type DeeplyPartialStruct<T> = DeeplyPartial<
  T extends Struct ? Exclude<T, Internal> : T
>;

export interface DefaultEntries {
  rawName?: string;
  refurl?: string;
  refkey?: string | number;
  bskipref?: boolean;
  bpatch?: boolean;

  isArray?: boolean;
  useAsterisk?: boolean;
}

export type GetStructType<In> =
  In extends Array<any>
    ? Struct & { [key: `${number}`]: GetStructType<In[typeof key]> }
    : In extends Record<any, any>
      ? Struct & { [key in keyof In]: GetStructType<In[key]> }
      : In extends string
        ? In
        : In extends number
          ? number
          : In extends boolean
            ? boolean
            : In;

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

export type WeaponGeneralSetupPrototype = GetStructType<{
  SID: string;
  WeaponType: EWeaponType;
  WeaponDurabilityCurve: string;
  AimingTime: number;
  LeanAimingTime: number;
  AimingFOVModifier: number;
  AimingMovementSpeedModifier: number;
  AimVFXSocketMinAlpha: number;
  AimingCurve: string;
  AimingEffects: { Effects: string[]; PlayerOnlyEffects: string[] };
  BoltActionState: EBoltActionWeaponState;
  AmmoPerShot: string;
  ShootingAnimationNumberToSkip: number;
  FireInterval: number;
  FireIntervalModifiers: number[];
  RecoilInterval: number;
  FireTypes: EFireType[];
  FireQueueCount: number;
  DefaultFireType: EFireType;
  CameraRecoilPatternPath: string;
  CameraRecoilPatternBlendCurve: string;
  RecoilParams: {
    RecoilRadius: number;
    RecoilMaxPitch: number;
    RecoilPatternInterval: number;
    CameraAimRecoilPatternLoopStartKeyIndex: number;
    CameraHipRecoilPatternLoopStartKeyIndex: number;
    ShootingStateParams: {
      HipModifiers: {
        HipModifier: number;
        HipJumpModifier: number;
        HipCrouchModifier: number;
        HipFullCrouchModifier: number;
      };
      AimModifiers: {
        AimModifier: number;
        AimCrouchModifier: string;
        AimFullCrouchModifier: string;
      };
      MovementSpeedModifiers: { MovementSpeedModifier: number };
      HealthPointsModifiers: {
        HealthPointsModifier: number;
        HealthPercentThreshold: number;
      };
      RadiusNormalizationModifiers: {
        RadiusNormalizationDelay: number;
        RadiusNormalizationInterval: number;
      };
      RadiusExtensionModifiers: {
        PerIterationRadiusExtensionModifier: number;
        MaxRadiusExtensionModifier: number;
        RadiusExtensionBulletCount: number;
      };
    };
    CameraRecoilPatternPath: string;
    CameraRecoilPatternBlendCurve: string;
  };
  DispersionParams: {
    FirstShotDispersionRadius: number;
    ShootingStateParams: {
      AimModifiers: {
        AimModifier: string;
        AimCrouchModifier: string;
        AimFullCrouchModifier: string;
      };
      MovementSpeedModifiers: { MovementSpeedModifier: number };
      HipModifiers: {
        HipModifier: number;
        HipJumpModifier: number;
        HipCrouchModifier: string;
        HipFullCrouchModifier: string;
      };
      RadiusNormalizationModifiers: {
        RadiusNormalizationDelay: number;
        RadiusNormalizationInterval: number;
      };
      RadiusExtensionModifiers: {
        PerIterationRadiusExtensionModifier: number;
        MaxRadiusExtensionModifier: number;
        RadiusExtensionBulletCount: number;
      };
    };
  };
  ShootCameraShakePrototypeSID: string;
  SpeedCoef: number;
  ProjectileSpawnOffset: number;
  JamType: EJamType;
  MinJamChance: number;
  MaxJamChance: number;
  MinJamDurabilityThreshold: number;
  MaxJamDurabilityThreshold: number;
  WeaponJamParams: { JamChanceCoef: number; FullJamTime: number }[];
  PerBulletReloadingAmmoCount: number;
  AdditionalBulletsAfterReloadingCount: number;
  WeaponReloadTimePerAttachment: {
    AttachPrototypeSID: string;
    TacticalReloadTimeMultiplier: number;
    FullReloadTimeMultiplier: number;
    SingleBulletReloadTimeMultiplier: number;
    TwinReloadTimeMultiplier: number;
    TwinTacticalReloadTimeMultiplier: number;
    TwinAuxReloadTimeMultiplier: number;
    TwinTacticalAuxReloadTimeMultiplier: number;
    UnloadTime: number;
  }[];
  ReloadTypes: EAnimationReloadTypes[];
  MaxAmmo: number;
  AmmoCaliber: EAmmoCaliber;
  AmmoTypeProjectiles: {
    AmmoType: EAmmoType;
    ProjectilePrototypeSID: string;
  }[];
  CompatibleAttachments: {
    AttachPrototypeSID: string;
    Muzzle: string;
    AdditionalPlankMeshPrototypeSID: string;
    WeaponSpecificIcon: string;
    AdditionalPlankSocket: string;
    RequiredUpgradeIDs: string[];
    BlockingUpgradeIDs: string;
    Socket: string;
    IconPosX: number;
    IconPosY: number;
    MeshPrototypeSID: string;
    AimMuzzleVFXSocket: string;
    AimShellShutterVFXSocket: string;
    BlockingUpgradeIds: string[];
    AdditionalMeshes: { MeshPrototypeSID: string; Socket: string }[];
  }[];
  PreinstalledAttachmentsItemPrototypeSIDs: {
    AttachSID: string;
    bHiddenInInventory: boolean;
  }[];
  UpgradePrototypeSIDs: string[];
  FireEventOneShot: string;
  FireEventLoop: string;
  FireEventBreak: string;
  WeaponTypeSoundSwitch: string;
  LastBulletInClipEvent: string;
  WeaponJamEvent: string;
  ItemTypeSwitchValue: string;
  WeaponInWorldUnloadSound: string;
  AimingSound: string;
  SilencerRTPCParameter: string;
  FireIntervalRTPCParameter: string;
  MechModulatorRTPCParameter: string;
  DisplayBP: string;
  DefaultEjectMagazineSocketName: string;
  DefaultInsertMagazineSocketName: string;
  BulletsSockets: string[];
  bSpawnShell: boolean;
  LastShootIdle: boolean;
  BulletMeshPath: string;
  MaxHeatingValue: number;
  PerBulletHeatingValue: number;
  CooldownTime: number;
  LastClipBulletsCount: number;
  LastTotalBulletsCount: number;
  LastClipBulletsDamageModifier: number;
  LastTotalBulletsDamageModifier: number;
  CrosshairType: ECrosshairType;
  ShowCrosshair: boolean;
  LinearCurveStartShot: string;
  LinearCurveShotsToNormalize: string;
  ShowEquipmentTime: number;
  HideEquipmentTime: number;
  HoldBreathDrainModifier: number;
  HipMouseAimAssistPresetSID: string;
  HipGamepadAimAssistPresetSID: string;
  AimMouseAimAssistPresetSID: string;
  AimGamepadAimAssistPresetSID: string;
  MinDeadNPCLoadedAmmoCount: number;
  MaxDeadNPCLoadedAmmoCount: number;
  WeaponStaticMeshParts: {
    MeshPath: string;
    SocketName: string;
    Materials: { MaterialPath: string; MaterialSlot: number }[];
  }[];
  TacticalReloadTimeMultiplier: number;
  FullReloadTimeMultiplier: number;
  UnloadTime: number;
  SingleBulletReloadTimeMultiplier: number;
  ShouldOverrideCooldownAfterShots: boolean;
  NumberOfShotsBeforeDelay: number;
  PostShotDelay: number;
}>;

export type AttachPrototype = GetStructType<{
  SID: string;
  Type: EItemType;
  MaxStackCount: number;
  Cost: number;
  Weight: number;
  AttachType: EAttachType;
  AttachInstallSound: string;
  AttachUninstallSound: string;
  CanHoldBreath: boolean;
  Magazine: {
    IsTwinMagazine: boolean;
    MaxAmmo: number;
    BindBulletsToAttach: boolean;
    HasMultipleMeshes: boolean;
    MeshArray: {
      MeshPrototypeSID: string;
      MagazineMeshType: EMagazineMeshType;
    }[];
    PhysicsInteractionPrototypeSID: string;
  };
  Scope: {
    ZoomCoefficients: number[];
    BaseZoomCoefficientIndex: number;
    ChangeZoomScopeSound: string;
    bOverrideAimingEffects: boolean;
    AimingEffects: { PlayerOnlyEffects: string[] };
    AimingCutoutRadius: number;
    AimingCutoutThreshold: number;
  };
  WeaponFlashlight: { FlashlightPrototypeID: number };
  IronSight: { MeshArray: { MeshPrototypeSID: string; Socket: string }[] };
  ShootingAttach: { WeaponPrototypeSID: string };
  Slot: EAttachSlot;
  InventoryActionTime: number;
  bPermanent: boolean;
  FPParticlesBasedOnHeating: {
    VFXGroupName: string;
    Shooting: {
      SocketName: string;
      PFXPath: string;
      MinHeatingValueToAppear: number;
    };
    PostShooting: {
      SocketName: string;
      PFXPath: string;
      MinHeatingValueToAppear: number;
    };
  }[];
  ItemTypeSwitchValue: string;
  PhysicsInteractionPrototypeSID: string;
  EffectPrototypeSIDs: string[];
  LayerImagePriority: number;
  SortGroup: ESortGroup;
  ItemGridWidth: number;
  SortPriority: number;
  Icon: string;
  MeshPrototypeSID: string;
  FittingWeaponsSIDs: string[];
  HideOnAttachPrototypeIDInstalled: string[];
  LaserSight: {
    MinLaserDistance: number;
    MaxLaserDistance: number;
    MinLaserTimeOnDrop: number;
    MaxLaserTimeOnDrop: number;
    LaserStartTraceOffset: string;
    LaserEndLightOffset: number;
    StartSocketName: string;
    VFXPath: string;
  };
  ItemGridHeight: number;
  LocalizationSID: string;
  MeshInWorldPrototypeSID: string;
}>;

export type ALifeDirectorScenarioPrototype = GetStructType<{
  SID: string;
  DefaultSpawnDelayMin: number;
  DefaultSpawnDelayMax: number;
  DefaultPostSpawnDirectorTimeoutMin: number;
  DefaultPostSpawnDirectorTimeoutMax: number;
  DefaultALifeLairExpansionToPlayerTimeMin: number;
  DefaultALifeLairExpansionToPlayerTimeMax: number;
  DefaultExpansionSquadNumMin: number;
  DefaultExpansionSquadNumMax: number;
  DefaultShouldDespawnNPCs: boolean;
  DefaultEmissionScenarioGroup: string;
  DefaultScenarioGroup: string;
  DefaultEmptyScenarioGroup: string;
  FallbackMaxSpawnCount: number;
  ALifeScenarioNPCArchetypesLimitsPerPlayerRank: {
    Rank: ERank;
    Restrictions: { AgentType: EAgentType; MaxCount: number }[];
  }[];
  RestrictedObjPrototypeSIDs: string[];
  ProhibitedAgentTypes: EAgentType[];
  FallbackNPCTypes: string[];
  Scenarios: {
    [key: string]: {
      SID: string;
      PlayerRequiredRank: ERank;
      ExpansionSquadNumMin: number;
      ExpansionSquadNumMax: number;
      ScenarioSquads: {
        AgentArchetype: EAgentArchetype;
        bPlayerEnemy: boolean;
        RelationGroup: number;
        AliveMultiplierMin: number;
        AliveMultiplierMax: number;
        WoundedMultiplier: number;
        DeadMultiplier: number;
      }[];
      ScenarioGroupsTarget: EALifeDirectorScenarioTarget;
    };
  };
  ScenarioGroups: {
    [key: string]: {
      SID: string;
      ScenarioSIDs: {
        [key: string]: { ScenarioWeight: number };
      };
      SpawnDelayMin: number;
      SpawnDelayMax: number;
      PostSpawnDirectorTimeoutMin: number;
      PostSpawnDirectorTimeoutMax: number;
    };
  };
}>;

export type DialogPrototype = GetStructType<{
  SID: string;
  DialogChainPrototypeSID: string;
  DialogMemberIndex: number;
  Unskippable: boolean;
  DialogMembersAnimations: {
    EmotionalState: EEmotionalFaceMasks;
    LookAtTarget: number;
    DialogAnimations: string;
  }[];
  AKEventName: string;
  AKEventSubPath: string;
  NextDialogOptions: {
    [key: number]: {
      NextDialogSID: string;
      Terminate: boolean;
      AvailableFromStart: boolean;
      VisibleOnFailedCondition: boolean;
      MainReply: boolean;
      AnswerTo: string;
      IncludeBy: string;
      ExcludeBy: string;
      Conditions: {
        ConditionType: EQuestConditionType;
        ConditionComparance: EConditionComparance;
        LinkedNodePrototypeSID: string;
        CompletedNodeLauncherNames: never[];
      }[][];
    };
    True: {
      Conditions: {
        ConditionType: EQuestConditionType;
        ConditionComparance: EConditionComparance;
        GlobalVariablePrototypeSID: string;
        ChangeValueMode: EChangeValueMode;
        VariableValue: number;
        LinkedNodePrototypeSID: string;
        CompletedNodeLauncherNames: never[];
      }[][];
      NextDialogSID: string;
      Terminate: boolean;
    };
    False: { NextDialogSID: string; Terminate: boolean };
  };
  HasVOInSequence: boolean;
  DialogActions: {
    DialogAction: EDialogAction;
    DialogActionParam:
      | {
          VariableType: EGlobalVariableType;
          VariableValue: number | string | boolean;
        }
      | number;
    ItemsCount: {
      VariableType: EGlobalVariableType;
      VariableValue: number | string | boolean;
    };
    WithEquipped: boolean;
  }[];
  DialogAnswerActions: {
    DialogAction: EDialogAction;
    DialogActionParam:
      | {
          VariableType: EGlobalVariableType;
          VariableValue: number | string | boolean;
        }
      | number;
    ItemsCount: {
      VariableType: EGlobalVariableType;
      VariableValue: number | string | boolean;
    };
    WithEquipped: boolean;
  }[];
  NodePrototypeVersion: number;
  FaceAnimationSubPath: string;
  FaceAnimationAssetName: string;
  LocalizedSequences: never[];
  LoopSequence: boolean;
  PreblendSequence: boolean;
  PreblendTime: number;
  BlendExpForEaseInOut: number;
  SpeechDuration: number;
  ShowNextDialogOptionsAsAnswers: boolean;
  Conditions: {
    ConditionType: EQuestConditionType;
    ConditionComparance: EConditionComparance;
    LinkedNodePrototypeSID: string;
    CompletedNodeLauncherNames: never[];
  }[][];
  VisibleOnFailedCondition: boolean;
  MainReply: boolean;
}>;

export type DifficultyPrototype = GetStructType<{
  SID: string;
  NPC_HP: number;
  NPC_Armor_Strike_Add: number;
  Armor_Strike_Add: number;
  Armor_Anomaly: number;
  Armor_Radiation: number;
  Armor_PSY: number;
  Armor_Durability: number;
  NPC_Weapon_BaseDamage: number;
  Explosion_BaseDamage: number;
  Weapon_BaseDamage: number;
  Weapon_DurabilityDamage: number;
  Weapon_Durability: number;
  NPC_Weapon_Rank_Add: number;
  Weapon_Rank_Add: number;
  Effect_Satiety: number;
  Effect_Sleepiness: number;
  Effect_Bleeding: number;
  Effect_Degen_Bleeding: number;
  Regen_HP: number;
  Mutant_BaseDamage: number;
  Mutant_AttackCooldown: number;
  Weather_Storm_Weight: number;
  Weather_Emission_Weight: number;
  Consumable_Cost: number;
  Ammo_Cost: number;
  Armor_Cost: number;
  Weapon_Cost: number;
  Artifact_Cost: number;
  Repair_Cost: number;
  Reward_MainLine_Money: number;
  Reward_SideLine_Money: number;
  BuyCondition: number;
  SellCondition: number;
  NPC_AttackCooldown: number;
  TitleSID: string;
  DescriptionSID: string;
  Radiation_AccumulationSpeed: number;
  Anomaly_Damage: number;
  Upgrade_Cost: number;
  HipAccuracyMultiplier: number;
  AccumulatedDamageReductionCurveWeightMax: number;
  AccumulatedDamageReductionCurveWeightMin: number;
  AccumulatedDamageReductionCurveWeightMaxDistance: number;
  AccumulatedDamageReductionIncludesHealedHealth: boolean;
  CorpseSmartLoot: { GeneralNPC: string };
  DefaultAimAssistPresetType: EAimAssistPresetType;
}>;

export type EffectPrototype = GetStructType<{
  SID: string;
  Text: string;
  LocalizationSID: string;
  Hint: boolean;
  Icon: string;
  Duration: number;
  DelayMin: number;
  DelayMax: number;
  Charges: number;
  TimePerChargeMin: number;
  TimePerChargeMax: number;
  Type: EEffectType;
  ValueMin: number;
  ValueMax: number;
  ValueProviderSID: string;
  AssetPath: string;
  bIsPermanent: boolean;
  bIsSmooth: boolean;
  DuplicationType: EDuplicateResolveType;
  InstantFirstCharge: boolean;
  Positive: EBeneficial;
  AttachmentItemPrototypeSID: string;
  EffectCurvePath: string;
  IsCurvePercent: boolean;
  ShouldPauseByDialog: boolean;
  DialogIntensityMultiplier: number;
  DamageType: EDamageType;
  DamageSource: EDamageSource;
  ShouldIgnoreArmor: boolean;
  ArmorPiercing: number;
  MinSpeed: number;
  MaxSpeed: number;
  PsyNPCType: EPsyNPCType;
  PhantomPlayerMinDistance: number;
  PhantomPlayerMaxDistance: number;
  PhantomPhantomMinDistance: number;
  PhantomPhantomMaxDistance: number;
  DelayBeforeNewSpawnCycleMin: number;
  DelayBeforeNewSpawnCycleMax: number;
  TimeBetwenSpawnPhantomMin: number;
  TimeBetwenSpawnPhantomMax: number;
  TimeBetwenDespawnPhantomMin: number;
  TimeBetwenDespawnPhantomMax: number;
  MinSpawnPhantoms: number;
  MaxSpawnPhantoms: number;
  AvailableObjPrototypes: string[];
  Money: number;
  ShowUpgradeEffectValue: boolean;
  ShowUpgradeEffect: boolean;
  IsSaveable: boolean;
  ApplyExtraEffectPrototypeSIDs: string[];
  AffectedStaminaActionTypes: EStaminaAction[];
  CameraShakeEffectSubtype: ECameraShakeEffectSubtype;
  CameraShakePrototypeSID: string;
  Caliber: EAmmoCaliber;
  AttachType: EAttachType;
  ConditionComparance: EConditionComparance;
  TargetValue: number;
  VitalType: EVitalType;
  MechanicsEffect: {
    StartMechanicsValue: string;
    StopMechanicsValue: string;
    VitalBarType: EVitalType;
    ConditionComparance: EConditionComparance;
    ConditionEffects: {
      [key: string]: {
        ConditionValue: number;
        ApplicableEffects: { EffectSID: string; RemoveOnTransition: boolean }[];
      };
    };
  };
  SoundEffectSubtype: ESoundEffectSubtype;
  InterpolationTime: number;
  bIsLooped: boolean;
  StopEffectSID: string;
  ProcessorSID: string;
  bStartEffect: boolean;
  DialogBlendInDuration: number;
  DialogBlendOutDuration: number;
  MechanicsSourceEffectSID: string;
  AxisType: EInputAxisType;
  XAxisMinValue: number;
  XAxisMaxValue: number;
  YAxisMinValue: number;
  YAxisMaxValue: number;
  BlockAnimationTypes: EActionType[];
  InventoryEquipmentSlot: EInventoryEquipmentSlot;
  Param1: string;
  DurabilityDamageRange: { Min: number; Max: number };
  DragImpulseRangeNPC: { Min: number; Max: number };
  UseOnlyOnPlayer: boolean;
  Radius: number;
  FireTypes: EFireType[];
  AmmoTypeProjectiles: {
    AmmoType: EAmmoType;
    ProjectilePrototypeSID: string;
  }[];
  AmmoType: EAmmoType;
  OverrideWeaponPattern: string;
  ApplyToMainHandedEquipment: boolean;
  Delay: number;
  CauseOfDeath: ECauseOfDeath;
  TeleportType: EGSCTeleportType;
  TeleportGroupSID: string;
  TimePerCharge: number;
  FireIntervals: number[];
  Tag: string;
  EffectsToBlockIDs: string[];
  ArtifactEquipmentSlots: EInventoryEquipmentSlot[];
  ConditionSID: string;
  TrueEffectSID: string;
  FalseEffectSID: string;
}>;

export type DynamicItemGenerator = GetStructType<{
  SID: string;
  ItemGenerator: {
    [key: number]: {
      Category: EItemGenerationCategory;
      PlayerRank: ERank;
      bAllowSameCategoryGeneration: boolean;
      ReputationThreshold: number;
      RefreshTime: string;
      PossibleItems: {
        ItemPrototypeSID: string;
        Weight: number;
        MinDurability: number;
        MaxDurability: number;
        AmmoMinCount: number;
        AmmoMaxCount: number;
        ItemGeneratorPrototypeSID: string;
        Chance: number;
        MinCount: number;
        MaxCount: number;
      }[];
    };
    Head: {
      Category: EItemGenerationCategory;
      PlayerRank: ERank;
      bAllowSameCategoryGeneration: boolean;
      PossibleItems: {
        ItemPrototypeSID: string;
        Chance: number;
        Weight: number;
      }[];
    };
    BodyArmor: {
      Category: EItemGenerationCategory;
      PlayerRank: ERank;
      bAllowSameCategoryGeneration: boolean;
      PossibleItems: { ItemPrototypeSID: string; Weight: number }[];
    };
    Attach: {
      Category: EItemGenerationCategory;
      PlayerRank: ERank;
      bAllowSameCategoryGeneration: boolean;
      PossibleItems: { ItemPrototypeSID: string; Chance: number }[];
    };
    WeaponPrimary: {
      Category: EItemGenerationCategory;
      PlayerRank: ERank;
      bAllowSameCategoryGeneration: boolean;
      PossibleItems: {
        ItemPrototypeSID: string;
        Chance: number;
        MinDurability: number;
        MaxDurability: number;
      }[];
    };
  };
  RefreshTime: string;
}>;

export type Gamepass_ItemGenerator = GetStructType<{
  SID: string;
  ItemGenerator: {
    Category: EItemGenerationCategory;
    Diff: EGameDifficulty;
    bAllowSameCategoryGeneration: boolean;
    PossibleItems: {
      ItemPrototypeSID: string;
      Chance: number;
      MinCount: number;
      MaxCount: number;
      ItemGeneratorPrototypeSID: string;
      Weight: number;
      MinDurability: number;
      MaxDurability: number;
      AmmoMinCount: number;
      AmmoMaxCount: number;
      bRequireWeapon: boolean;
    }[];
    PlayerRank: ERank;
  }[];
}>;
export type _QuestReward = GetStructType<{
  SID: string;
  MoneyGenerator: { MinCount: number; MaxCount: number };
  SpecificRewardSound: EUISound;
}>;

export type ItemGeneratorPrototype = GetStructType<{
  SID: string;
  SpecificRewardSound: EUISound;
  ItemGenerator: {
    Category: EItemGenerationCategory;
    PossibleItems: {
      ItemPrototypeSID: string;
      Chance: number;
      ItemGeneratorPrototypeSID: string;
      MinDurability: number;
      MaxDurability: number;
      MinCount: number;
      MaxCount: number;
      AmmoMinCount: number;
      AmmoMaxCount: number;
    }[];
    bAllowSameCategoryGeneration: boolean;
  }[];
  MoneyGenerator: { MinCount: number; MaxCount: number };
  ID: number;
}>;

export type GeneralNPCObjPrototype = GetStructType<{
  SID: string;
  Mass: number;
  Type: EObjType;
  Anim: EObjAnim;
  CanBeKnockedDown: boolean;
  Faction: string;
  FlashlightPrototypeSID: string;
  ItemGeneratorPrototypeSID: string;
  NPCPrototypeSID: string;
  TradePrototypeSID: string;
  MeshGeneratorPrototypeSID: string;
  AimAssistParamsSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  ArmorDifferenceCoefProjectiles: number;
  ArmorDifferenceCoefMeleeAttacks: number;
  BoneDamageCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  Abilities: {
    Human_PhantomAttack: { SID: string; ActivationTag: string };
    Human_MeleeAttack: { SID: string; ActivationTag: string };
    Human_MeleeAttack_Agent: { SID: string; ActivationTag: string };
    Human_ThrowGrenade: { SID: string; ActivationTag: string };
    Human_CombatPSYAttack: { SID: string; ActivationTag: string };
  };
  SequentialAbilities: string[];
  SpawnPhantomParams: {
    PhantomAttackAbilityTag: string;
    PhantomBlueprint: string;
    PhantomAllowedEquipItems: string[];
    DelayBeforeMovement: number;
  };
  CamperFeatureData: {
    CamperRadius: number;
    TimeToAssumeAsCamper: number;
    SyncTokenTag: string;
  };
  SequentialAbilitiesActionData: { bOrientsToTarget: boolean };
  AdvanceParameters: {
    MaxDistance: number;
    DurationSeconds: number;
    Montage: string;
  };
  FlankParameters: {
    MaxPathLength: number;
    MinPathLength: number;
    ActivationDelaySeconds: number;
    DamageDetectionSeconds: number;
    MaxAccumulatedDamage: number;
    ExtraSlotChance: string;
    ExtraSlotTime: number;
    CostScale: number;
    ScaleFactor: number;
    MaxSuccessDistance: number;
    MinSuccessDistance: number;
    MinPathOffsetFromTarget: number;
    MaxAdvancedLocationSelectionDuration: number;
    MaxPathCost: number;
    Height: number;
    FrontZone: { X: number; Y: number }[];
  };
  EvadeParameters: {
    DamageDetectionSeconds: number;
    AccumulatedDamage: number;
    AcceptableAngle: number;
    ApproachDistance: number;
    RequiredAmmoThreshold: string;
    AnimationData: { Type: EEvadeActionType; Montage: string }[];
  };
  SuppressiveFireParameters: {
    LookAtBoneName: string;
    MaxTimeToLoseTarget: number;
    MaxAccumulatedDamage: number;
    TraceDistance: number;
  };
  EscapeParameters: {
    FailureChance: string;
    SquadLostFractionToEscape: string;
    EscapeRadius: number;
    AttackEscapeDelay: number;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
  };
  HumanAmbushParameters: {
    EntryDelay: number;
    ApproachableDistance: number;
    PathLengthThreshold: number;
    PathUpdateInterval: number;
  };
  SyncParameters: {
    AttackSyncTag: string;
    MovementSyncTag: string;
    AdvanceSyncTag: string;
    FlankSyncTag: string;
    EvadeSyncTag: string;
    SuppressiveFireSyncTag: string;
  };
  CombatParameters: {
    CoverEvaluatorSID: string;
    NearbyDistanceWeaponReady: number;
    NearbyDistanceWeaponNotReady: number;
    CheckEnemyTime: number;
    RetreatToCoverDistance: number;
    DamageThresholdToChangeLocation: string;
    EarlyExitReloadTime: number;
    MaxTimeInBadShootingPosition: number;
    LoseEnemyVisibilityTime: number;
    EnemyCouldBeVisibleMaxDistance: number;
  };
  DoorTransitionSettings: {
    Default: { StartDistance: number; Animation: string };
    OneHandedWeaponCombat: { StartDistance: number; Animation: string };
    TwoHandedWeaponCombat: { StartDistance: number; Animation: string };
    OneHandedWeaponRelax: { StartDistance: number; Animation: string };
    TwoHandedWeaponRelax: { StartDistance: number; Animation: string };
  };
  MovementParams: {
    WalkSpeed: number;
    RunSpeed: number;
    CrouchSpeed: number;
    LowCrouchSpeed: number;
    SprintSpeed: number;
    ClimbSpeedCoef: number;
    JumpSpeedCoef: number;
    LimpSpeedCoef: number;
    RunDiagonalBackCoef: number;
    WalkDiagonalBackCoef: number;
    WalkBackCoef: number;
    RunBackCoef: number;
    MoveBackCrouchCoef: number;
    MoveBackLowCrouchCoef: number;
    AirControlCoef: number;
    WalkTransitionCoef: number;
    BaseTurnRate: number;
    BaseLookUpRate: number;
    MaxSlowdownValue: number;
    StaggerAngle: number;
    CanDash: boolean;
    MovementSpeedCoef: number;
  };
  ReactOnApproachWithWeapon: boolean;
  FlairSensorPrototypeSID: string;
  VitalParams: {
    MaxHP: number;
    MaxSP: number;
    DegenBleeding: number;
    DegenRadiation: number;
    DegenPsyPoints: number;
    DegenSuppressionPoints: number;
    RegenHP: number;
    RegenHPDelayTimeSeconds: number;
  };
  Protection: {
    Burn: number;
    Shock: number;
    ChemicalBurn: number;
    Radiation: number;
    PSY: number;
    Strike: number;
    Fall: number;
  };
  NPCType: ENPCType;
  NeedsPresetSID: string;
  IgnoreEmission: boolean;
  IsZombie: boolean;
  Blueprint: string;
  IsAffectingByMaxAttaches: boolean;
}>;

export type MutantBase = GetStructType<{
  SID: string;
  Blueprint: string;
  Mass: number;
  ShouldAvoidDangerPolygons: boolean;
  ArmorDifferenceCoefProjectiles: number;
  ArmorDifferenceCoefMeleeAttacks: number;
  Anim: EObjAnim;
  Type: EObjType;
  NeedsPresetSID: string;
  HearingSensorPrototypeSID: string;
  Faction: string;
  AgentType: EAgentType;
  AnomalyRestrictionsIgnoreChance: number;
  CanProcessCorpses: boolean;
  StaminaPerAction: {
    Crouch: number;
    Walk: number;
    Run: number;
    Sprint: number;
    Climb: number;
    Jump: number;
  };
  VitalParams: {
    MaxHP: number;
    MaxFP: number;
    MaxBleeding: number;
    MaxRadiation: number;
    MaxSleepinessPoints: string;
    MaxHungerPoints: number;
    MaxThirstPoints: number;
    MaxSuppressionPoints: number;
    RegenHungerPoints: number;
    RegenThirstPoints: number;
    DegenBleeding: number;
    DegenRadiation: number;
    RegenSleepinessPoints: number;
    RegenHP: number;
    RegenFP: number;
  };
  MovementParams: {
    WalkSpeed: number;
    RunSpeed: number;
    SprintSpeed: number;
    ClimbSpeedCoef: number;
    JumpSpeedCoef: number;
    AimSpeedCoef: number;
    AirControlCoef: number;
    BaseTurnRate: number;
    BaseLookUpRate: number;
    AimTurnCoef: number;
    AimLookUpCoef: number;
    CrouchSpeed: number;
    LowCrouchSpeed: number;
    RunDiagonalBackCoef: number;
    WalkDiagonalBackCoef: number;
    WalkBackCoef: number;
    RunBackCoef: number;
    MoveBackCrouchCoef: number;
    MoveBackLowCrouchCoef: number;
  };
  AttackParams: {
    MeleeDamage: number;
    MeleeAttackAcceptanceDistance: number;
    MeleeAttackHeight: number;
    MeleeAttackRadius: number;
    ForceDistance: number;
    MutantAttackParams: {
      JumpAttack: {
        MutantAttackType: EMutantAttackType;
        DamageSource: EDamageSource;
        MinAttackDistance: number;
        MaxAttackAngle: number;
        AttackRootMotionTravelDistance: number;
        Damage: number;
        ArmorPiercing: number;
        Bleeding: number;
        BleedingChanceIncrement: number;
        Cooldown: number;
        Effects: { EffectPrototypeSID: string; Chance: number }[];
      };
      ExampleAttack: {
        MutantAttackType: EMutantAttackType;
        DamageSource: EDamageSource;
        MinAttackDistance: number;
        MaxAttackAngle: number;
        AttackRootMotionTravelDistance: number;
        Damage: number;
        ArmorPiercing: number;
        Bleeding: number;
        BleedingChanceIncrement: number;
        Effects: { EffectPrototypeSID: string; Chance: number }[];
      };
    };
    FireDispersionParams: {
      Default: number;
      DefaultAim: number;
      VelocityFactor: number;
      CrouchMoveCoef: string;
      LowCrouchCoef: string;
      Jump: number;
    };
  };
  Protection: {
    Burn: number;
    Shock: number;
    ChemicalBurn: number;
    Radiation: number;
    PSY: number;
    Strike: number;
    Fall: number;
  };
  SpawnPhantomParams: {
    PhantomBlueprint: string;
    PermanentEffects: string[];
    EffectsOnOverlap: string[];
  };
  ItemGeneratorPrototypeSID: string;
  MeshGeneratorPrototypeSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  ThreatPrototypeSID: string;
  VisionScannerPrototypeSID: string;
  Mesh: EObjMesh;
  FlairSensorPrototypeSID: string;
  ShouldGenerateStashClues: boolean;
  MutantEscapeParameters: {
    FailureChance: string;
    SquadLostFractionToEscape: string;
    EscapeRadius: number;
    AttackRadius: number;
    AttackEscapeDelay: number;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
  };
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  ShouldTriggerAnomalies: boolean;
  InstanceDamageData: {
    Damage: number;
    ArmorDamage: number;
    ArmorPiercing: number;
    Bleeding: number;
    BleedingChanceIncrement: number;
    DamageSource: EDamageSource;
    DamageType: EDamageType;
    NPCDamageMultiplier: number;
    bShouldIgnoreArmor: boolean;
    AttackEffects: never[];
  };
  DoorTransitionSettings: {
    Default: { StartDistance: number; Animation: string };
  };
  ID: number;
}>;

export type ObjPrototype = GetStructType<{
  ID: number;
  SID: string;
  Text: string;
  Hint: string;
  Icon: string;
  Blueprint: string;
  Type: EObjType;
  Faction: string;
  NPCType: ENPCType;
  NPCPrototypeSID: string;
  TradePrototypeSID: string;
  IgnoreEmission: boolean;
  CanBeKnockedDown: boolean;
  SpendStaminaInSafeZone: boolean;
  ShouldTriggerAnomalies: boolean;
  AnomalyRestrictionsIgnoreChance: number;
  UnkillableByALife: boolean;
  CanPeekOut: boolean;
  ShouldHideUnequippedPrimaryWeapon: boolean;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  StealthKillUnavailable: boolean;
  ShouldAvoidDangerPolygons: boolean;
  SpaceRestrictorTag: string;
  OfflineCombatWeight: number;
  MusicManagerCombatScore: number;
  RepairCostModifier: number;
  MinDialogInteractDistance: number;
  MaxDialogInteractDistance: number;
  ArmorDifferenceCoefProjectiles: number;
  ArmorDifferenceCoefMeleeAttacks: number;
  CriticalDamageCoefThreshold: number;
  VFXSize: number;
  npc_size: number;
  ImpactVFXSize: number;
  IgnoreWoundedRestriction: boolean;
  StaminaPerAction: {
    LowCrouch: number;
    Crouch: number;
    Walk: number;
    Run: number;
    Sprint: number;
    Climb: number;
    Jump: number;
    MeleeNormal: number;
    MeleeStrong: number;
    MeleeButstock: number;
    Vault: number;
  };
  IsZombie: boolean;
  ZombieLayingIdleTime: number;
  VitalParams: {
    MaxHP: number;
    MaxSP: number;
    MaxBleeding: number;
    MaxRadiation: number;
    MaxDrunknessPoints: number;
    MaxOverDrunknessPoints: number;
    MaxSleepinessPoints: number;
    MaxHungerPoints: number;
    MaxThirstPoints: number;
    MaxSuppressionPoints: number;
    RegenHungerPoints: number;
    RegenThirstPoints: number;
    DegenBleeding: number;
    DegenRadiation: number;
    DegenPsyPoints: number;
    DegenSuppressionPoints: number;
    DegenDrunknessPoints: number;
    RegenSleepinessPoints: string;
    RegenHP: number;
    RegenHPDelayTimeSeconds: number;
    DegenSuppressionDelayTimeSeconds: number;
    RegenSP: number;
    RegenPoppyFieldSleepiness: number;
    RegenHealthModifier: number;
    StaminaDisableThresholds: {
      Threshold: number;
      RegenerationDelay: number;
      StateTags: EStateTag[];
    }[];
  };
  MovementParams: {
    WalkSpeed: number;
    RunSpeed: number;
    CrouchSpeed: number;
    LowCrouchSpeed: number;
    SprintSpeed: number;
    ClimbSpeedCoef: number;
    JumpSpeedCoef: number;
    LimpSpeedCoef: number;
    RunDiagonalBackCoef: number;
    WalkDiagonalBackCoef: number;
    WalkBackCoef: number;
    RunBackCoef: number;
    MoveBackCrouchCoef: number;
    MoveBackLowCrouchCoef: number;
    AirControlCoef: number;
    WalkTransitionCoef: number;
    BaseTurnRate: number;
    BaseLookUpRate: number;
    MaxSlowdownValue: number;
    StaggerAngle: number;
    CanDash: boolean;
    MovementSpeedCoef: number;
  };
  VaultingParams: {
    MaxAngle: number;
    MaxTestDistance: number;
    StartDistance: number;
    HeightBetweenObjects: number;
    WidthBetweenObjects: number;
    VaultOverMaxDepth: number;
    VaultOverLandOffset: number;
    MinObstacleHeight: number;
    MaxObstacleHeight: number;
    IsAllowed: boolean;
    MinForwardAxisInputValue: number;
    StartWithSprintPressed: boolean;
    FrontSearchRadiusModifier: number;
    DepthTraceRadiusModifier: number;
    WindowBackTraceRadiusModifier: number;
    WindowBackTraceHeightModifier: number;
    LandingMinHeight: number;
    MaxWindowDetectionIterations: number;
    MaxLandingDetectionIterations: number;
    MaxLandingOffset: number;
    LandingCorrectionAdditionalSize: number;
    LandingMaxSlope: number;
    VaultOverStandingHeight: number;
    VaultOverCrouchingHeight: number;
    AboveObstaclesCheckHeight: number;
  };
  HideWeaponWarning: {
    RequiredThreatAction: EThreatActionType;
    RequiredCombatAction: EThreatActionType;
    DetectionDistance: number;
    FollowDistance: number;
    BarkDelay: number;
    CalmDownTime: number;
    IgnoreAfterCombatTime: number;
    WarningAttemptsBeforeAlert: number;
  };
  CanProcessCorpses: boolean;
  ShouldGenerateStashClues: boolean;
  ProcessCorpseSubjectFeatureData: {
    CorpseInteractionTimeout: number;
    CorpseInteractionApproachMaxPathLength: number;
    CorpseInteractionApproachLocationOffset: number;
    CorpseInteractionContextualAction: string;
  };
  ProcessCorpseObjectFeatureData: {
    CorpseInteractionBoneName: string;
    CorpseInteractionDistance: number;
  };
  HumanInteractionParameters: { HealingWoundedDistance: number };
  HumanLookAtParameters: {
    LookAtDistance: number;
    MinlookAtTime: number;
    MaxlookAtTime: number;
    LookAtCooldown: number;
    PerformGreetingBark: boolean;
  };
  StealthParams: {
    FlashLightCoef: number;
    VisibilitySizeFactor: number;
    VisibilityCrouchCoef: number;
    VisibilityJumpCoef: number;
    VisibilityObstacleHeadCoef: number;
    VisibilityObstacleBodyCoef: number;
    NoiseObstacleCoef: number;
    NoiseCrouchCoef: number;
    NoiseJumpCoef: number;
  };
  MeleeAttackData: {
    StartAttackMinDistance: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMaxAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMaxAngleToEnemyDirection: number;
  };
  AttackParams: {
    MutantAttackParams: {
      ExampleAttack: {
        MutantAttackType: EMutantAttackType;
        MinAttackDistance: number;
        MaxAttackAngle: number;
        AttackRootMotionTravelDistance: number;
        Damage: number;
        ArmorPiercing: number;
        Bleeding: number;
        BleedingChanceIncrement: number;
        Effects: { EffectPrototypeSID: string; Chance: number }[];
      };
    };
    FireDispersionParams: {
      Default: number;
      DefaultAim: number;
      VelocityFactor: number;
      CrouchMoveCoef: string;
      LowCrouchCoef: string;
      Jump: number;
    };
  };
  StealthKillParams: {
    StealthKillDistance: number;
    TargetPositionMaxOffsetAbove: number;
    TargetPositionMaxOffsetBelow: number;
    HeadTraceRadius: number;
    BodyTraceRadius: number;
    BodyTraceOffset: number;
    ShouldHaveEnoughSpace: boolean;
    SnapBackOffsetStanding: number;
    SnapDownOffsetStanding: number;
    SnapBackOffsetSitting: number;
    SnapDownOffsetSitting: number;
    SnapBackOffsetSittingOnGround: number;
    SnapDownOffsetSittingOnGround: number;
    MaxAngleFromBack: number;
    SpaceTraceRadiusModifier: number;
    SpaceTraceHeightModifier: number;
    SpaceTraceOffsetModifier: number;
    AvailabilityDelayTimeSeconds: string;
  };
  Protection: {
    Burn: number;
    Shock: number;
    ChemicalBurn: number;
    Radiation: number;
    PSY: number;
    Strike: number;
    Fall: number;
  };
  ItemGeneratorPrototypeSID: string;
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  BoneDamageMap: never[];
  BoneDamageCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  BoneBleedingCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  SkeletalMeshTraceBoneMap: {
    Bone: EObjSkeletalMeshTraceBone;
    BoneName: string;
  }[];
  MovementVFXPrototypeSID: string;
  FlashlightPrototypeSID: string;
  AnomalyDetectorPrototypeSID: string;
  SearchpointDetectorPrototypeSID: string;
  VisionScannerPrototypeSID: string;
  ZombieVisionScannerPrototypeSID: string;
  ThreatPrototypeSID: string;
  NeedsPresetSID: string;
  DailyScheduleSID: string;
  CanDailyScheduleBeOverride: boolean;
  HearingSensorPrototypeSID: string;
  ZombieHearingSensorPrototypeSID: string;
  MovementSensorSID: string;
  FlairSensorPrototypeSID: string;
  MinReactionTimeToExplosion: number;
  MaxReactionTimeToExplosion: number;
  CamperFeatureData: { CamperRadius: number; TimeToAssumeAsCamper: number };
  SpawnPhantomParams: {
    PhantomBlueprint: string;
    PermanentEffects: string[];
    EffectsOnOverlap: string[];
    PhantomAttackAbilityTag: string;
  };
  AIVisionTargetParams: {
    TracePoints: {
      BoneName: string;
      Label: string;
      BaseScorePerSecond: number;
      RelativeLocation: { X: number; Y: number; Z: string };
    }[];
    FriendlyTracePoints: {
      BoneName: string;
      Label: string;
      BaseScorePerSecond: number;
    }[];
  };
  EnemyValidationActionParams: {
    MinDistanceToValidationPoint: number;
    PointsSpreadDistance: number;
    MinValidationTimeAtLocation: number;
    GroupSpreadingMinDistance: number;
    MinAdditionalValidationPoints: number;
    WaitForContextualAction: boolean;
    PossibleContextualActions: never[];
    GenerateValidationLocations: boolean;
  };
  SimulateBattleParams: {
    SimulateCombatSpreadModifier: number;
    SimulateCombatDamageModifier: number;
  };
  AgentType: EAgentType;
  PrepareForEmissionContextualAction: string;
  TremblingWhileEmissionContextualAction: string;
  PathFailedContextualAction: string;
  DisableMovementWeightThreshold: {
    WeightStatus: EWeightStatus;
    BlockingMovement: EStateTag[];
  }[];
  SleepParamsSID: string;
  HoldBreathParamsSID: string;
  WeightParamsSID: string;
  EffectMaxParamsSID: string;
  CustomAbilityDialogSID: string;
  WeatherParamsSID: string;
  CrouchParamsSID: string;
  OnHitParamsSID: string;
  AimAssistParamsSID: string;
  AgentBehaviourParameters: {
    WeaponHandling: {
      MinFireCountQueueScaler: number;
      MaxFireCountQueueScaler: number;
      FarFireQueueDelaySeconds: number;
      NearFireQueueDelaySeconds: number;
      FireQueueDelayRandomizationFactor: number;
      SwitchWeaponIfNoAmmo: boolean;
      PerBoneIgnoreDispersionModifiers: {
        BoneLabel: string;
        Min: number;
        Max: number;
      }[];
    };
  };
  ZombieBehaviourParameters: {
    WeaponHandlingOverride: {
      MinFireCountQueueScaler: number;
      MaxFireCountQueueScaler: number;
      FarFireQueueDelaySeconds: number;
      NearFireQueueDelaySeconds: number;
      SwitchWeaponIfNoAmmo: boolean;
    };
    CombatBehaviour: {
      MinShootingStationaryDistance: number;
      MaxShootingStationaryDistance: number;
      AddedShootingDistanceOnTheGo: number;
      MaxShootingAngle: number;
    };
    ZombieAllowedEquipItems: {
      GunAKU_PP: ERank;
      GunViper_PP: ERank;
      GunObrez_SG: ERank;
      GunAK74_ST: ERank;
      GunM16_ST: ERank;
      GunBucket_PP: ERank;
      GunTOZ_SG: ERank;
      GunG37_ST: ERank;
      GunFora_ST: ERank;
      GunGvintar_ST: ERank;
      GunGrim_ST: ERank;
      GunSPSA_SG: ERank;
      GunIntegral_PP: ERank;
      GunLavina_ST: ERank;
      GunKharod_ST: ERank;
      GunDnipro_ST: ERank;
      GunZubr_PP: ERank;
      GunD12_SG: ERank;
      GunRam2_SG: ERank;
      GunKora_HG: ERank;
      GunThreeLine_SP: ERank;
    };
  };
  PostResurrectionEffects: string[];
  WaterContactInfo: {
    StepVFXMaxBodyWaterImmersionDepth: number;
    ShallowSoundSwitch: string;
    WaterDepthRTPC: string;
    WaterImmersionLevels: {
      WaterLevel: EWaterImmersionLevel;
      LevelSoundSwitch: string;
      MinDepthThreshold: number;
      Effects: string[];
    }[];
    SingleCurveEffects: { EffectSID: string; DepthCurve: string }[];
    DualCurveEffects: {
      EffectSID: string;
      DepthCurveMovingDeeper: string;
      DepthCurveMovingShallower: string;
    }[];
  };
  CriticalDamageAccumulationPeriod: number;
  CriticalDamageThreshold: number;
  CriticalDamageCooldownMin: number;
  CriticalDamageCooldownMax: number;
  UseGroomReplacement: boolean;
  IsAffectingByMaxActorWithSimulation: boolean;
  IsAffectingByMaxAttaches: boolean;
  ShouldRenderTextureInsteadOfGroom: boolean;
  ApplicableMechanicsEffects: string[];
}>;

export type StashPrototype = GetStructType<{
  SID: string;
  CustomIconPath: string;
  ItemGenerators: {
    Rank: ERank;
    SmartLootParams: {
      HealthParams: {
        Curve: string;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          Chance: number;
          MinCount: number;
          MaxCount: number;
        }[];
      }[];
      AttachParams: { MaxPrice: number }[];
      PrimaryWeaponParams: {
        PriorityCaliber: EAmmoCaliber;
        MainWeaponAmmoCount: number;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
      }[];
      SecondaryWeaponParams: {
        PriorityCaliber: EAmmoCaliber;
        MainWeaponAmmoCount: number;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
      }[];
      PistolWeaponParams: {
        PriorityCaliber: EAmmoCaliber;
        MainWeaponAmmoCount: number;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
        }[];
      }[];
      ConsumablesParams: {
        ItemSetCount: number;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
      }[];
      GrenadesParams: {
        ItemSetCount: number;
        MinSpawnChance: number;
        MaxSpawnChance: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
      }[];
    };
  }[];
}>;

export type TradePrototype = GetStructType<{
  SID: string;
  TradeTimeStart: number;
  TradeTimeLength: number;
  Money: number;
  bInfiniteMoney: boolean;
  RefreshConditionSID: string;
  TradeGenerators: {
    ConditionSID: string;
    ItemGeneratorPrototypeSID: string;
    BuyModifier: number;
    SellModifier: number;
    WeaponSellMinDurability: number;
    ArmorSellMinDurability: number;
    BuyLimitations: EItemType[];
  }[];
  BuyDiscounts: { ConditionSID: string; Modifier: number }[];
  SellDiscounts: { ConditionSID: string; Modifier: number }[];
}>;

export type UpgradePrototype = GetStructType<{
  ID: number;
  SID: string;
  Text: string;
  Hint: string;
  Image: string;
  Icon: string;
  BaseCost: number;
  HorizontalPosition: number;
  VerticalPosition: EUpgradeVerticalPosition;
  DiscountCoefficient: number;
  RepairCostModifier: number;
  IsModification: boolean;
  HiddenWihoutItem: boolean;
  AttachPrototypeSIDs: string[];
  UpgradeSound: string;
  UpgradeModificationSound: string;
  UpgradeCancelSound: string;
  UpgradeTargetPart: EUpgradeTargetPartType;
  EffectPrototypeSIDs: string[];
  RequiredUpgradePrototypeSIDs: string[];
  RequiredItemPrototypeSIDs: string[];
  BlockingUpgradePrototypeSIDs: string[];
  InterchangeableUpgradePrototypeSIDs: string[];
  RequiredGlobalVariables: { GlobalVariableSID: string; Value: number }[];
  BlockingGlobalVariables: { GlobalVariableSID: string; Value: number }[];
  Skills: string[];
  ConnectionLines: EConnectionLineState[];
  LocalizationSID: string;
}>;

export type NPCWeaponSettingsPrototype = GetStructType<{
  SID: string;
  BaseDamage: number;
  ArmorDamage: number;
  BaseBleeding: number;
  ChanceBleedingPerShot: string;
  DispersionRadius: number;
  DispersionRadiusZombieAddend: number;
  DispersionRadiusMultiplierByDistanceCurve: string;
  FireDistanceDropOff: number;
  MinBulletDistanceDamageModifier: number;
  DistanceDropOffLength: number;
  StaggerEffectPrototypeSID: string;
  DurabilityDamagePerShot: number;
  BulletDropHeight: number;
  ArmorPiercing: number;
  CombatSynchronizationScore: { TokenTag: string; Score: string }[];
}>;

export type QuestNodePrototype = GetStructType<{
  InGameHours?: number;
  SID: string;
  NodePrototypeVersion: number;
  QuestSID: string;
  NodeType: EQuestNodeType;
  StartDelay: number;
  LaunchOnQuestStart: boolean;

  Repeatable: boolean;
  OutputPinNames: string[];
  Launchers: {
    Excluding: boolean;
    Connections: {
      SID: string;
      Name: string;
    };
  }[];
  LastPhrases: {
    FinishNode: boolean;
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  DialogChainPrototypeSID: string;
  DialogMembers: string[];
  TalkThroughRadio: boolean[];
  DialogObjectLocation: {
    X: number;
    Y: number;
    Z: number;
  };
  NPCToStartDialog: number;
  StartForcedDialog: boolean;
  WaitAllDialogEndingsToFinish: boolean;
  IsComment: boolean;
  OverrideDialogTopic: EOverrideDialogTopic;
  CanExitAnytime: boolean;
  ContinueThroughRadio: boolean;
  CallPlayer: boolean;
  SeekPlayer: boolean;
  CallPlayerRadius: number;
  ExcludeAllNodesInContainer: boolean;
  GlobalVariablePrototypeSID: string;
  ChangeValueMode: EChangeValueMode;
  VariableValue: any;
  PinWeights: number[];
  Conditions: {
    ConditionType: EQuestConditionType;
    ConditionComparance: EConditionComparance;
    LinkedNodePrototypeSID: string;
    CompletedNodeLauncherNames: never[];
    TargetNPC: string;
    TargetContextualActionPlaceholder: string;
    TargetCharacter: string;
    Trigger: string;
    bTriggersByAnybody: boolean;
    ReactType: ETriggerReact;
    RequiredSquadMembers: ERequiredSquadMembers;
  }[][];
}>;

export type MeshPrototype = GetStructType<{
  SID: string;
  MeshPath: string;
  MaterialPath: string;
  MeshType: EMeshSubType;
  ID: number;
}>;

export type WeaponPrototype = GetStructType<{
  SID: string;
  MeshPrototypeSID: string;
  MeshInWorldPrototypeSID: string;
  Weight: number;
  Cost: number;
  GeneralWeaponSetup: string;
  PlayerWeaponAttributes: string;
  NPCWeaponAttributes: string;
  BaseDurability: number;
  Icon: string;
  SectionSettings: {
    SectionIsEnabled: true;
    UpgradeTargetPartType: EUpgradeTargetPartType;
    BottomPosition: number;
    RightPoition: number;
    LeftPosition: number;
    TopPosition: number;
    ModuleLineDirection: ELineDirection;
  }[];
}>;

export type WeaponAttributesPrototype = GetStructType<{
  SID: string;
  DefaultWeaponSettingsSID: string;
  AnimBlueprint: string;
  ParticlesBasedOnHeating: {
    VFXGroupName: string;
    Shooting: {
      SocketName: string;
      PFXPath: string;
      MinHeatingValueToAppear: 0;
    };
    PostShooting: {
      SocketName: string;
      PFXPath: string;
      MinHeatingValueToAppear: 5;
    };
  }[];
}>;

export type CharacterWeaponSettingsPrototype = GetStructType<{
  SID: string;
  DurabilityDamagePerShot: number;
  ArmorDamage: number;
  ArmorPiercing: number;
  CoverPiercing: number;
  BaseDamage: number;
  BaseBleeding: number;
  ChanceBleedingPerShot: string;
  EffectiveFireDistanceMin: number;
  EffectiveFireDistanceMax: number;
  FireDistanceDropOff: number;
  MinBulletDistanceDamageModifier: number;
  MinBulletDistanceArmorPiercingModifier: number;
  DispersionRadius: number;
  BaseComfort: number;
  FireLoudness: number;
  AccuracyUI: number;
  RateOfFireUI: number;
  HandlingUI: number;
  DamageUI: number;
  RangeUI: number;
  DistanceDropOffLength: number;
  BulletDropHeight: number;
}>;
