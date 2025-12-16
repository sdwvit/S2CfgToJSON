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
  EAnomalyElementType,
  EArtifactType,
  EArtifactRarity,
  EArchiartifactType,
  EEffectDisplayType,
  EAnomalyType,
  EConsumableType,
  EGrenadeType,
  EFastUseGroupType,
  EDetectorType,
  ESpawnType,
  EJournalEntity,
  EJournalState,
  EQuestNodeState,
  ERelationLevel,
  EThreatAwareness,
  EMainHandEquipmentType,
  EBrokenGameDataFilter,
  EDialogAnimationType,
  ERelationChangingEvent,
  EModifiedCharacterParam,
  EJournalAction,
  EQuestEventType,
  ESpawnNodeExcludeType,
  EGoalPriority,
  EWeaponState,
  EBehaviorType,
  EHideViewType,
  EMovementBehaviour,
  EWeather,
  EApplyRestrictionType,
  EAttractionPointType,
  Reactions,
  EDialogEventType,
  EConditionCheckType,
  ELoadingDestination,
  ESpaceRestrictionType,
  EEmissionStage,
  EAIMovementPose,
  EFlashlightAction,
  ESaveType,
  EModifyAbilitySequenceQuestNodeMode,
  EHealingType,
  ELairType,
  EAimAssistPresetType,
  ESaveSubType,
  ETriggerShape,
  EPillowAnomalyBiomeType,
  EALifeGroupPriorityType,
  ELairPreferredSpawnType,
  ERadiationPreset,
  ECombatTactics,
  EPhysicalMaterialType,
  EAudioRoomPresetBandwidth,
  EArmorScale,
  EItemInfoType,
  ERegion,
  ENiagaraProviderType,
  ELocalizationLanguage,
  ERadiationInnerOffsetPreset,
  EAgentRankMask,
  Caliber,
  Rank,
} from "./enums.mts";

import { Struct } from "./Struct.mjs";

export type Internal =
  | "__internal__"
  | "fork"
  | "removeNode"
  | "addNode"
  | "clone"
  | "entries"
  | "forEach"
  | "filter"
  | "map"
  | "fromJson"
  | "toJson"
  | "toString"
  | "fromString";

export interface DefaultEntries {
  rawName?: string;
  refurl?: string;
  refkey?: string | number;
  bskipref?: boolean;
  bpatch?: boolean;
  isRoot?: boolean;
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

export type WeaponGeneralSetupPrototype = GetStructType<{
  SID: string;
  WeaponType: EWeaponType;
  WeaponDurabilityCurve: string;
  AimingTime: number;
  OffsetAimingTime: number;
  LeanAimingTime: number;
  LeanAimingRestoreTime: number;
  AimingFOVModifier: number;
  OffsetAimingFOVModifier: number;
  AimingMovementSpeedModifier: number;
  AimVFXSocketMinAlpha: number;
  AimingCurve: string;
  AimingWeaponFOVCurve: string;
  OffsetAimingWeaponFOVCurve: string;
  AimingEffects: { Effects: string[]; PlayerOnlyEffects: string[] };
  OffsetAimingConditionSID: string;
  ToggleOffsetAimingConditionSID: string;
  BoltActionState: EBoltActionWeaponState;
  AmmoPerShot: number;
  ShootingAnimationNumberToSkip: number;
  FireInterval: number;
  FireIntervalModifiers: string[];
  RecoilInterval: number;
  FireTypes: string[];
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
        AimCrouchModifier: number;
        AimFullCrouchModifier: number;
      };
      OffsetAimModifiers: {
        OffsetAimModifier: number;
        OffsetAimCrouchModifier: number;
        OffsetAimFullCrouchModifier: number;
      };
      MovementSpeedModifiers: {
        MovementSpeedModifier: number;
      };
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
        AimModifier: number;
        AimCrouchModifier: number;
        AimFullCrouchModifier: number;
      };
      OffsetAimModifiers: {
        OffsetAimModifier: number;
        OffsetAimCrouchModifier: number;
        OffsetAimFullCrouchModifier: number;
      };
      MovementSpeedModifiers: { MovementSpeedModifier: number };
      HipModifiers: {
        HipModifier: number;
        HipJumpModifier: number;
        HipCrouchModifier: number;
        HipFullCrouchModifier: number;
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
  OffsetAimingOffSound: string;
  OffsetAimingOnSound: string;
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
      ScenarioSIDs: { [key: string]: { ScenarioWeight: number } };
      SpawnDelayMin: number;
      SpawnDelayMax: number;
      PostSpawnDirectorTimeoutMin: number;
      PostSpawnDirectorTimeoutMax: number;
    };
  };
}>;

interface IDialogPrototype {
  SID: string;
  DialogChainPrototypeSID: string;
  DialogMemberIndex: number;
  Unskippable: boolean;
  DialogMembersAnimations: {
    EmotionalState: EEmotionalFaceMasks;
    LookAtTarget: number;
    DialogAnimations: {
      GestureTiming: number[];
      DialogAnimationType: EDialogAnimationType;
    }[];
  }[];
  AKEventName: string;
  AKEventSubPath: string;
  FaceAnimationSubPath: string;
  FaceAnimationAssetName: string;
  NextDialogOptions: {
    NextDialogSID: string;
    Terminate: boolean;
    AvailableFromStart: boolean;
    VisibleOnFailedCondition: boolean;
    MainReply: boolean;
    AnswerTo: number;
    IncludeBy: string[];
    ExcludeBy: string[];
    Conditions: GetStructType<Condition[][]> & {
      ConditionCheckType: EConditionCheckType;
    };
  }[];
  HasVOInSequence: boolean;
  VisibleOnFailedCondition: boolean;
  MainReply: boolean;
  DialogActions: { DialogAction: EDialogAction }[];
  NodePrototypeVersion: number;
  Text: string;
  AnswerText: string;
  CanBeInterrupted: boolean;
  TopicAvailabilityConditions: (Condition[] & {
    ConditionType: EQuestConditionType;
    ConditionComparance: EConditionComparance;
    EmissionPrototypeSID: string;
  })[];
  LocalizedSequences: string[];
  LoopSequence: boolean;
  PreblendSequence: boolean;
  PreblendTime: number;
  BlendExpForEaseInOut: number;
  SpeechDuration: number;
  ShowNextDialogOptionsAsAnswers: boolean;
  WaitForSequenceToFinish: boolean;
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  DialogAnswerActions: {
    DialogAction: EDialogAction;
    DialogActionParam: Param;
    ItemsCount: Param;
    WithEquipped: boolean;
    GlobalVariablePrototypeSID: string;
    ChangeValueMode: EChangeValueMode;
    VariableValue: any;
    ConsumablePrototypeSID: Param;
  }[];
  DialogMemberName: string;
  AssetsSubPath: string;
  VoiceModulatorPrototypeID: string;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  TargetLocation: string;
  SelfLocation: string;
  RotationTime: number;
  Actions: { DialogAction: EDialogAction; DialogActionParam: Param }[];
}

export type DialogPrototype = GetStructType<IDialogPrototype>;

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
  TotalSaveLimits: { SubType: ESaveSubType; Limit: number }[];
  NightVisionGoggles_Cost: number;
  AllowedSaveTypes: ESaveType[];
  AutosaveAfterQuests: string[];
  bShouldDisableCrosshair: boolean;
  bShouldDisableCompass: boolean;
  bShouldDisableStashMarkers: boolean;
  bShouldDisableDeadBodyMarkers: boolean;
  AdditionalMechanicsEffects: string[];
  PlayerWeapon_HeadshotMultiplier: number;
  ShowWarningPopup: boolean;
  BlockSettings: boolean;
  AgentCooldownMultipliers: {
    AgentPrototypeSID: string;
    CooldownMultipliers: {
      CooldownTag: string;
      CooldownMultiplier: number;
    }[];
  }[];
  Weapon_JammingMultiplier: number;
  PsyPhantomNPCOverrides: {
    OverrideEffectPrototypeSID: string;
    PSYDelayBeforeNewSpawnCycleModifier: number;
    PsyPhantomNPCCountMultiplier: number;
    bPsyNPCApplyBleeding: boolean;
    PsyNPCDurabilityDamageMultiplier: number;
  }[];
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
  ItemGenerator: ItemGenerator[];
  RefreshTime: string;
}>;

export type Gamepass_ItemGenerator = GetStructType<{
  SID: string;
  ItemGenerator: ItemGenerator[];
}>;

export type _QuestReward = GetStructType<{
  SID: string;
  MoneyGenerator: { MinCount: number; MaxCount: number };
  SpecificRewardSound: EUISound;
}>;

export type ItemGeneratorPrototype = GetStructType<{
  SID: string;
  SpecificRewardSound: EUISound;
  ItemGenerator: ItemGenerator[];
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
  MovementParams: MovementParams;
  ReactOnApproachWithWeapon: boolean;
  FlairSensorPrototypeSID: string;
  VitalParams: VitalParams;
  Protection: Protection;
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
  VitalParams: VitalParams;
  MovementParams: MovementParams;
  AttackParams: {
    MeleeDamage: number;
    MeleeAttackAcceptanceDistance: number;
    MeleeAttackHeight: number;
    MeleeAttackRadius: number;
    ForceDistance: number;
    MutantAttackParams: Record<
      string,
      {
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
      }
    >;
    FireDispersionParams: {
      Default: number;
      DefaultAim: number;
      VelocityFactor: number;
      CrouchMoveCoef: string;
      LowCrouchCoef: string;
      Jump: number;
    };
  };
  Protection: Protection;
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
  VitalParams: VitalParams;
  MovementParams: MovementParams;
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
  Protection: Protection;
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
    ZombieAllowedEquipItems: Record<string, ERank>;
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
  SID: string;
  QuestSID: string;
  NodeType: EQuestNodeType;
  StartDelay: number;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: {
    Excluding: boolean;
    Connections: { SID: string; Name: string }[];
  }[];
  ExcludeAllNodesInContainer: boolean;
  TargetQuestGuid: string;
  ReplaceInventory: boolean;
  EquipItems: boolean;
  ItemGeneratorSID: string;
  TeleportLocationAndRotation: LocationAndRotation;
  TeleportType: EGSCTeleportType;
  ShouldBlendViaFade: boolean;
  EventType: EQuestEventType;
  TrackBeforeActive: boolean;
  OutputPinNames: string[];
  LastPhrases: {
    FinishNode: boolean;
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  DialogChainPrototypeSID: string;
  DialogMembers: string[];
  TalkThroughRadio: boolean[];
  DialogObjectLocation: Location3Axis[];
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
  IgnoreDamageType: EIgnoreDamageType;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  JournalEntity: EJournalEntity;
  JournalAction: EJournalAction;
  JournalQuestSID: string;
  JournalQuestDescriptionIndex: number;
  SetQuestActive: boolean;
  Repeatable: boolean;
  ContaineredQuestPrototypeSID: string;
  TriggerQuestGuid: string;
  bTriggersByAnybody: boolean;
  TriggerAction: number;
  RequiredSquadMembers: ERequiredSquadMembers;
  ReactType: ETriggerReact;
  LinkedNodePrototypeSID: string;
  GoalPriority: EGoalPriority;
  IgnoreRadiationFeilds: boolean;
  IgnoreAnomalyFields: boolean;
  IgnoreEmission: boolean;
  IgnoreCombat: boolean;
  IgnoreThreat: boolean;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  FailureByEmission: boolean;
  FailureByCombat: boolean;
  FailureByThreat: boolean;
  FailureByTargetLost: boolean;
  FailureByPlayerKill: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  ThreatsReactRange: number;
  CanBeInterrupted: boolean;
  WeaponState: EWeaponState;
  UseSecondaryWeapon: boolean;
  BehaviorType: EBehaviorType;
  MovementType: EMovementBehaviour;
  StayContextualAction: string;
  CanBeTeleported: boolean;
  SimulateBattle: boolean;
  ImmediatelyIdentifyEnemy: boolean;
  TargetQuestGuids: string[];
  FirstTargetSID: string;
  SecondTargetSID: string;
  UseDeltaValue: boolean;
  UsePreset: boolean;
  RelationshipValue: number;
  SetFactionRelationshipAsPersonal: boolean;
  ShouldLockPersonalRelationship: boolean;
  JournalQuestStageSID: string;
  Markers: string;
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  ConsoleCommand: string;
  RestrictDialogInteractions: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyDespawn: boolean;
  HitProducer: string;
  HitReceiver: string;
  WoundedOn: boolean;
  HealingType: EHealingType;
  PinWeights: number[];
  GlobalVariablePrototypeSID: string;
  ChangeValueMode: EChangeValueMode;
  VariableValue: any;
  AIThreatState: number;
  Activate: boolean;
  ForceDespawn: boolean;
  ScreenText: string;
  FadeTime: number;
  ImagePath: string;
  HideViewType: EHideViewType;
  ItemPrototypeSID: string;
  ExpectedItemsCount: number;
  WithEquipped: boolean;
  NotePrototypeSID: string;
  PlayWhenReceived: boolean;
  SignalReceiverGuid: string;
  StartHour: number;
  EndHour: number;
  SelectedDaysOfWeek: number;
  InGameHours: number;
  LocalizedSequences: string[];
  LoopSequence: boolean;
  PreblendSequence: boolean;
  PreblendTime: number;
  BlendExpForEaseInOut: number;
  MainQuest: boolean;
  MarkerDescription: string;
  Squad: string;
  Remove: boolean;
  MoveToPath: string;
  MoveToSuccessRange: number;
  MoveToFailureRange: number;
  SignalSenderGuid: string;
  EquipmentTypeFilter: EMainHandEquipmentType;
  EquipmentItemSID: string;
  TargetFaction: string;
  InteractableQuestGuid: string;
  TargetLocations: Location3Axis[];
  VolumeGuid: string;
  ShouldBeKilled: string;
  FullSquad: boolean;
  IncludeWoundedEvent: boolean;
  SpecificItemDespawn: boolean;
  GoalTargetQuestGuid: string;
  Location: string;
  NewTitle: number;
  NewDescription: number;
  IdlePosition: Location3Axis;
  LookAt: Location3Axis;
  MinimalReputationLevel: ERelationLevel;
  EffectLocation: Location3Axis;
  EffectPath: string;
  Continue: boolean;
  SoundLocation: Location3Axis;
  AKEventPath: string;
  MasterAKEventForLoad: string;
  FinishOnAKEvent: boolean;
  RotationAfterMoveTo: LocationAndRotation;
  ContextualActionLookAtPlayerRange: number;
  SoundPath: string;
  RepeatableStayAnimation: boolean;
  StayAnimation: string;
  NavModifier: string;
  Params: {
    ModifiedCharacterParam: EModifiedCharacterParam;
    ChangeValueMode: EChangeValueMode;
    IgnoreDamageType: EIgnoreDamageType;
    ChangeValue: number;
    Rank: ERank;
  }[];
  ThreatSensor: number;
  ContextualActionRange: number;
  QuestItem: boolean;
  AbilityPrototypeSID: string;
  SequentialAbilityPriority: number;
  SequentialAbilityModificationMode: EModifyAbilitySequenceQuestNodeMode;
  LookAtLocation: Location3Axis;
  Duration: number;
  EnteringDuration: number;
  LookAtActorFName: string;
  AttractionPointType: EAttractionPointType;
  ActorBoneName: string;
  ReactionTime: number;
  Priority: number;
  CollisionChannel: number;
  ApplyRestrictionType: EApplyRestrictionType;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  PresetName: string;
  ItemSID: string;
  ItemsCount: number;
  PauseEmission: boolean;
  EmissionPrototypeSID: string;
  UseDefaultEmissionPrototype: boolean;
  StartQuest: boolean;
  ForceEmission: boolean;
  NavAreaClass: string;
  PersonalRestriction: Record<string, ESpaceRestrictionType>;
  SaveTypes: ESaveType[];
  AchievementSID: string;
  DataLayerName: string;
  IsDataLayerEnabled: boolean;
  OwnedHub: string;
  InGameMinutes: number;
  NodesToCleanUpResults: string[];
  InfotopicLastPhrases: {
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  TimerRate: number;
  WidgetType: number;
  TutorialHeadLocalizedSID: string;
  TutorialTextLocalizedSID: string;
  PDATutorialNoteSID: string;
  TutorialSID: string;
  RequiredInputs: string[];
  ShootingPosition: Location3Axis;
  ShootTargetLocation: Location3Axis;
  ShotsQueueCount: number;
  PostEffectProcessorSID: string;
  PostProcessParamValue: number;
  NewZoneState: boolean;
  OverrideScenarioGroupSID: string;
  IgnoreEnabledCheck: boolean;
  FlashlightAction: EFlashlightAction;
  MeshGeneratorSID: string;
  Faction: string;
  PatrolPlaceholderGUID: string;
  PatrolCycleCount: number;
  StartPointID: number;
  MarkerSID: string;
  Explored: boolean;
  EffectPrototypeSID: string;
  DisableFlashlightControl: boolean;
  AddToPlayerStash: boolean;
  MovementPose: EAIMovementPose;
  CustomRestPlaceSelection: boolean;
  RestLocation: Location3Axis;
  QuestItemGeneratorSID: string;
  LookAtPlaceholder: string;
  MoveFrom: string;
  MoveTo: string;
  MoveQuestItems: boolean;
  StageID: EEmissionStage;
  WaitingPlayer: boolean;
  Radius: number;
  WaitingTime: number;
  PlayerLeavesWhileMovingComments: string[];
  PlayerLeavesWhileCombatComments: string[];
  ContinueWhileMovingComments: string[];
  ContinueWhileCombatComments: string;
  StartBattleComments: string;
  FinishBattleComments: string;
  ReachAnomalyZoneComments: string;
  LeaveAnomalyZoneComments: string;
  ReachPointComments: {
    ReachPointComment: string;
    ReachPointLocation: Location3Axis;
    DialogMembers: string;
  }[];
  TargetMoneyAmount: number;
  Event: EDialogEventType;
  FollowStartRange: number;
  FollowStopRange: number;
  Weather: EWeather;
  Force: boolean;
  DisabledEvents: EDialogEventType[];
  DataLayerCombination: string;
  AssetsToLoad: string[];
  AudioLocalizedAssetsToLoad: string[][];
  UseAbilityPrototypeSID: string;
  UseAbilityTarget: string;
  TimeToUseAbility: number;
  UseAbilityMovementType: EMovementBehaviour;
  TransitionTime: number;
  FullAmount: boolean;
  ShouldTargetPrimaryWeapon: boolean;
  PrimaryWeaponDurabilityPercent: number;
  ShouldTargetSecondaryWeapon: boolean;
  SecondaryWeaponDurabilityPercent: number;
  ShouldTargetPistol: boolean;
  PistolDurabilityPercent: number;
  CameraHeight: number;
  CircleRadius: number;
  InitialPitch: number;
  InitialYaw: number;
  BenchRuns: number;
  ProfileCsv: boolean;
  TargetRank: ERank;
  DialogToStart: string;
  LoadingScreenType: ELoadingDestination;
  WithInventory: boolean;
  Discovered: boolean;
  VideoAssetPath: string;
  TimeToStartNextNodeBeforeEnd: number;
  IsFinalVideo: boolean;
  UpgradePrototypeSID: string;
  UpgradeSIDs: string[];
  NewTechnicianSkill: string;
  RestrictedFaction: Record<Faction, ESpaceRestrictionType>;
  NameSID: string;
  MoveToPlayer: boolean;
  TargetLocation: Location3Axis;
  CustomSleepPlaceSelection: boolean;
}>;

export type MeshPrototype = GetStructType<{
  SID: string;
  MeshPath: string;
  MaterialPath: string;
  MeshType: EMeshSubType;
  ID: number;
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
      MinHeatingValueToAppear: number;
    };
    PostShooting: {
      SocketName: string;
      PFXPath: string;
      MinHeatingValueToAppear: number;
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

type IItemPrototype = {
  SID: string;
  Hint: string;
  Icon: string;
  IconBig: string;
  MeshPrototypeSID: string;
  BaseDurability: number;
  MaxStackCount: number;
  ConsumeOnUse: boolean;
  Usable: boolean;
  HasPhysics: boolean;
  Invisible: boolean;
  InvisibleInPlayerInventory: boolean;
  Weight: number;
  ItemGridWidth: number;
  ItemGridHeight: number;
  ItemSlotType: EInventoryEquipmentSlot;
  Type: EItemType;
  SortGroup: ESortGroup;
  SortPriority: number;
  EffectPrototypeSIDs: string[];
  ShouldShowEffects: boolean[];
  SectionPositions: string[];
  Cost: number;
  DestroyOnPickup: boolean;
  IgnoreEquippedWeight: boolean;
  EffectOnPickPrototypeSIDs: string[];
  EffectsDisplayTypes: EEffectDisplayType[];
  ItemTypeSwitchValue: string;
  PhysicsInteractionPrototypeSID: string;
  FittingWeaponsSIDs: string[];
};

export type ItemPrototype = GetStructType<IItemPrototype>;

interface IAmmoPrototype extends IItemPrototype {
  Caliber: EAmmoCaliber;
  FractionCount: number;
  AmmoType: EAmmoType;
  CrosshairMod: ECrosshairType;
  DamageSource: EDamageSource;
  ArmorPiercingMod: number;
  CoverPiercingMod: number;
  ArmorDamageMod: number;
  WeaponExhaustionMod: number;
  DamageMod: number;
  BleedingMod: number;
  AmmoPackCount: number;
  ImpulseToObjectsMod: number;
  FlatnessMod: number;
  RecoilMod: number;
  DispersionMod: number;
  AimDispersionMod: number;
  OffsetAimDispersionMod: number;
  FPShellFXPath: string;
  TPShellFXPath: string;
  ShellSoundEventPath: string;
  CaliberSoundSwitch: string;
}

export type AmmoPrototype = GetStructType<IAmmoPrototype>;

interface IArtifactPrototype extends IItemPrototype {
  AnomalyElementType: EAnomalyElementType;
  ArtifactType: EArtifactType;
  ArchiartifactType: EArchiartifactType;
  JumpDistance: number;
  JumpAmount: number;
  JumpDelay: number;
  JumpSeriesDelay: number;
  JumpHeight: number;
  JumpForce: number;
  JumpSpeedCoef: number;
  LifeTime: number;
  PlayerDistance: number;
  ReturnDistanceValue: number;
  StateTransitionDelay: number;
  Radius: number;
  Rarity: EArtifactRarity;
  DetectorRequired: boolean;
  LifeTimeDependant: boolean;
  Persistent: boolean;
  DisableCollisionWhenHide: boolean;
  Strafe: boolean;
  ArtifactSpawn: boolean;
  ParticleStateTransitionFadeOutDelay: number;
  ParticleStateTransitionFadeInDelay: number;
  ParticleOnShow: string;
  ParticleStateTransitionFadeOut: string;
  ParticleStateTransitionFadeIn: string;
  FakeArtifactDistortionVFX: string;
  FakeArtifactDissolveVFX: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  FakeArtifactDistortionSound: string;
  FakeArtifactDissolveSound: string;
  ChargingSound: string;
  JumpSound: string;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  ParticleOnImpact: string;
  FakeArtifactHaloVFX: string;
  ViewOffset: Location3Axis;
  LocalizationSID: string;
  DamageToStaminaCoefficient: number;
  DamageToWeightCoefficient: number;
  MinWeight: number;
  MaxWeight: number;
  WeightDecreaseDelay: number;
  WeightDecreaseRate: number;
  WeightDecreaseAmount: number;
  MinimalDrunkenness: number;
  InactiveIcon: string;
  EffectsDuration: number;
  WakeUpEffectSIDs: string[];
  PositiveEffectPrototypeSIDs: string[];
  NegativeEffectPrototypeSIDs: string[];
  MaxCharge: number;
  ChargeThreshold: number;
  ChargingSpeed: number;
  bUseCharge: boolean;
  AnomalyDamageDeflections: {
    AnomalyType: EAnomalyType;
    ChargeQuantity: number;
    DamageDeflection: number;
    TimeToReduceCharge: number;
  }[];
  ChargeFullDecreaseSound: string;
  ChargeFullIncreaseSound: string;
  IsQuestItem: boolean;
}

export type ArtifactPrototype = GetStructType<IArtifactPrototype>;

interface IArmorPrototype extends IItemPrototype {
  ArtifactSlots: number;
  bBlockHead: boolean;
  bPreventFromLimping: boolean;
  IncreaseSpeedCoef: number;
  NoiseCoef: number;
  ArmorSoundType: string;
  StaggerEffectPrototypeSID: string;
  Protection: Protection;
  ProtectionNPC: Protection;
  UpgradePrototypeSIDs: string[];
  MeshGenerator: { MeshGeneratorPrototypeSID: string }[];
  NpcMeshGenerator: { MeshGeneratorPrototypeSID: string }[];
  VoiceModulatorSID: string;
  PreinstalledUpgrades: string[];
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
  LocalizationSID: string;
}

export type ArmorPrototype = GetStructType<IArmorPrototype>;

interface IBlueprintPrototype extends IItemPrototype {
  LocalizationSID: string;
  IsQuestItemPrototype: boolean;
}

export type BlueprintPrototype = GetStructType<IBlueprintPrototype>;

interface IAttachPrototype extends IItemPrototype {
  AttachType: EAttachType;
  AttachInstallSound: string;
  AttachUninstallSound: string;
  CanHoldBreath: boolean;
  Magazine: {
    IsTwinMagazine: boolean;
    MaxAmmo: number;
    BindBulletsToAttach: boolean;
    HasMultipleMeshes: boolean;
    MeshArray: { MagazineMeshType: EMagazineMeshType }[];
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
  IronSight: { MeshArray: { Socket: string }[] };
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
  LayerImagePriority: number;
  HideOnAttachPrototypeIDInstalled: string[];
  LaserSight: {
    MinLaserDistance: number;
    MinOffsetAimLaserDistance: number;
    MaxLaserDistance: number;
    MinLaserTimeOnDrop: number;
    MaxLaserTimeOnDrop: number;
    LaserStartTraceOffset: number;
    LaserEndLightOffset: number;
    StartSocketName: string;
    VFXPath: string;
    PlayerVFXPath: string;
  };
  LocalizationSID: string;
  MeshInWorldPrototypeSID: string;
}

export type AttachPrototype = GetStructType<IAttachPrototype>;

interface IConsumablePrototype extends IItemPrototype {
  Icon1x1: string;
  ConsumableType: EConsumableType;
  UIUseSound: EUISound;
  InventoryActionTime: number;
  bIsUsesLeftHand: boolean;
  bIsUsesRightHand: boolean;
  SocketName: string;
  MeshPath: string;
  AnimBlueprint: string;
  AlternativeEffectPrototypeSIDs: string[];
  NegativeEffectPrototypeSIDs: { Effect: string }[];
  NegativeEffectsChance: number;
  IsQuestItemPrototype: boolean;
  ItemTags: string[];
  FastUseGroup: EFastUseGroupType;
  FastUsePrio: number;
  StaticMeshPrototypeSID: string;
}

export type ConsumablePrototype = GetStructType<IConsumablePrototype>;

interface IDetectorPrototype extends IItemPrototype {
  DetectorType: EDetectorType;
  ShowArtifactRadius: number;
  AnimBlueprint: string;
  DisplayUpdateInterval: number;
  DangerLevelSoundParameter: string;
  MinDetectRadius: number;
  DetectorWorkRadius: number;
  DetectorWorkSFX: string;
  DetectorWorkCurve: string;
  ArtifactSignalCurve: string;
  ExclusionArtifactList: string[];
  MeshInWorldPrototypeSID: string;
  DefaultArtifactRadius: number;
  RadiusDivider: number;
  SonarRadius: number;
  AnomalyDetectionRadius: number;
  RenderTargetResolution: number;
  CanvasMaterialPath: string;
  SpriteMaterialPath: string;
  ArtifactTexturePath: string;
  AnomalyTexturePaths: {
    AnomalyElementType: EAnomalyElementType;
    SpriteTexturePath: string;
  }[];
  ExclusionAnomalyList: string[];
}

export type DetectorPrototype = GetStructType<IDetectorPrototype>;

interface IGDItemPrototype extends IItemPrototype {
  IsQuestItemPrototype: boolean;
  IsQuestItem: boolean;
  LocalizationSID: string;
}

export type GDItemPrototype = GetStructType<IGDItemPrototype>;

interface IGrenadePrototype extends IItemPrototype {
  GrenadeType: EGrenadeType;
  CrosshairType: ECrosshairType;
  Blueprint: string;
  TimeToExplode: number;
  SafeTimeAfterThrow: number;
  GrenadeExplosionLethalThreshold: `${number}%`;
  GrenadeExplosionHandNonlethal: `${number}%`;
  GrenadeExplosionHandLethal: `${number}%`;
  BaseComfort: number;
  StaticMeshPrototypeSID: string;
  GrenadeAnimBlueprint: string;
  ExplosionPrototypeSID: string;
  ImpulseStrength: number;
  EffectApplyDistanceCoefficient: number;
  RollVelocityThreshold: number;
  NPCWeaponAttributes: string;
  ArmorDamage: number;
  ArmorPiercing: number;
  MeshInWorldPrototypeSID: string;
  OuterWoundingRadius: number;
  InnerDamage: number;
  OuterDamage: number;
  SkeletalMeshPrototypeSID: string;
}

export type GrenadePrototype = GetStructType<IGrenadePrototype>;

interface IKeyItemPrototype extends IItemPrototype {
  LocalizationSID: string;
}

export type KeyItemPrototype = GetStructType<IKeyItemPrototype>;

interface IMoneyPrototype extends IItemPrototype {
  LocalizationSID: string;
  MeshInWorldPrototypeSID: string;
}

export type MoneyPrototype = GetStructType<IMoneyPrototype>;

interface IMutantLootPrototype extends IItemPrototype {
  LocalizationSID: string;
}

export type MutantLootPrototype = GetStructType<IMutantLootPrototype>;

interface INightVisionGogglesPrototype extends IItemPrototype {
  Icon1x1: string;
  ActiveEffectSIDs: string[];
  TurnOnAudioEvent: string;
  TurnOffAudioEvent: string;
  LocalizationSID: string;
  NPCGogglesPrototypeSID: string;
}

export type NightVisionGogglesPrototype =
  GetStructType<INightVisionGogglesPrototype>;

interface IQuestItemPrototype extends IItemPrototype {
  IsQuestItemPrototype: boolean;
  IsQuestItem: boolean;
  ShouldTriggerAnomalies: boolean;
  RequireWeight: boolean;
  Icon1x1: string;
  MeshPath: string;
  AlternativeEffectPrototypeSIDs: string[];
  Name: string;
  JumpDistance: number;
  JumpAmount: number;
  JumpDelay: number;
  JumpSeriesDelay: number;
  JumpHeight: number;
  JumpForce: number;
  JumpSpeedCoef: number;
  LandingForce: number;
  LifeTime: number;
  PlayerDistance: number;
  ReturnDistanceValue: number;
  DetectorRequired: boolean;
  Strafe: boolean;
  Blueprint: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  ArtifactTypeSwitch: string;
  MeshInWorldPrototypeSID: string;
  StaticMeshPrototypeSID: string;
  LocalizationSID: string;
}

export type QuestItemPrototype = GetStructType<IQuestItemPrototype>;

interface IWeaponPrototype extends IItemPrototype {
  MeleeWeaponSID: string;
  MeshInWorldPrototypeSID: string;
  GeneralWeaponSetup: string;
  PlayerWeaponAttributes: string;
  NPCWeaponAttributes: string;
  PreinstalledUpgrades: string[];
  SectionSettings: {
    SectionIsEnabled: boolean;
    UpgradeTargetPartType: EUpgradeTargetPartType;
    BottomPosition: number;
    RightPoition: number;
    LeftPosition: number;
    TopPosition: number;
    UpgradeLineDirection: ELineDirection;
  }[];
  LocalizationSID: string;
  IsQuestItem: boolean;
}

export type WeaponPrototype = GetStructType<IWeaponPrototype>;

export type SpawnActorPrototype = GetStructType<{
  SID: string;
  SpawnOnStart: boolean;
  PositionX: number;
  PositionY: number;
  PositionZ: number;
  RotatorAngleYaw: number;
  RotatorAnglePitch: number;
  RotatorAngleRoll: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  TextAboveActor: string;
  DLC: string;
  LevelName: string;
  PlaceholderActorGuid: string;
  PlaceholderMapPath: string;
  MeshPath: string;
  SpawnedPrototypeSID: string;
  SpawnType: ESpawnType;
  bForceCodePhysicsDisabled: boolean;
  bWakeUpOnStart: boolean;
  StashPrototypeSID: string;
  ItemGeneratorSettings: {
    PlayerRank: ERank;
    ItemGenerators: { PrototypeSID: string }[];
  }[];
  TileOffsetIndex: number;
  ItemSID: string;
  Durability: number;
  DisablePhysicsAndCollision: boolean;
  bRandomChancesForSeparateItems: boolean;
  ClueVariablePrototypeSID: string;
  PackOfItemsPrototypeSID: string;
  UpgradeSID: string;
  AttachmentSID: string;
  NodePrototypeVersion: number;
  NodeCreationVersion: number;
  DataLayers: string[];
  Rank: ERank;
  SignalReceivers: { DestroyReceiver: { Guid: string } };
  SignalSenders: { DestroySender: { Guid: string; Signals: string[] } };
  DisablePhysics: boolean;
  DisableCollision: boolean;
  DisableDespawn: boolean;
  DisableLoot: boolean;
  DisableDrag: boolean;
  CorpseStashSID: string;
  DeadPose: string;
  AmmoCount: number;
  OverrideRank: boolean;
  HP: number;
  DamageMultiplier: number;
  MoveSpeedMultiplier: number;
  PsyNPCType: EPsyNPCType;
  CanBeWounded: boolean;
  AllowSpawnOnIsolatedNavMesh: boolean;
  SquadMembersQuestSIDs: string;
  SpawnInRadius: number;
  SpawnedGenericMembers: {
    SpawnedSquadMembersCount: number;
    SpawnedPrototypeSID: string;
  }[];
  RespawnMembers: boolean;
  IsLootedOnDifficulties: string;
  OverrideFaction: Faction;
  TriggerShape: ETriggerShape;
  ContextualActionSID: string;
  CanInteractWithPlayer: boolean;
  ContextualActionPreconditions: string;
  CompoundAnimationReferences: string;
  AttachReferences: string;
  InLocationRotation: {
    Vector: Location3Axis;
    Rotation: Rotation;
  }[][];
  CenterLocationRotation: {
    Vector: Location3Axis;
    Rotation: Rotation;
  }[];
  GeigerTriggerOffset: number;
  Radioactivity: ERadiationPreset;
  PostEffectProcessorSID: string;
  RadiationCycleSpeedPostEffectSID: string;
  NavModifierVolume: string;
  StartPresetID: number;
  AnomaliesPresets: string[][];
  EffectPrototypeSIDs: string[];
  LairPrototypeSID: string;
  LairType: ELairType;
  CanBeCaptured: boolean;
  CanAttack: boolean;
  CanDefend: boolean;
  InitialInhabitantFaction: string;
  ActiveLair: boolean;
  LairPreferredSpawnType: ELairPreferredSpawnType;
  Volumes: {
    Volume: string;
    ShowMarker: boolean;
    NumOfContextualActions: number;
    RestrictorVolume: string;
    SpaceRestrictorOffset: number;
  }[] & {
    LairCoreVolumes: string[];
    LairTerritoryVolumes: string[];
    NavModifierVolumes: string[];
  };
  RestrictionRadius: number;
  bRestrictorVolumeEnabled: boolean;
  MaxSpawnRank: ERank;
  MinSpawnRank: ERank;
  CorpsePrototypeSID: string;
  DecalsMaterialSID: string;
  ShouldTraceOnOverlap: boolean;
  BubbleInitialLocation: Location3Axis;
  ElectroBakedData: {
    ElectroTraceStartPoint: string;
    ElectroTraceEndPoint: string;
    ElectroNormalVector: string;
  }[];
  DisableSpawnAndStrafeInThisAnomaly: boolean;
  OverrideArtifactSpawnLocation: string;
  bUseCustomLocation: boolean;
  RestrictedFactions: string[];
  HubOwnerGuid: string;
  MarkerSID: string;
  LockReceivers: string[];
  UnlockReceivers: string[];
  CloseDoorRadius: number;
  UnlockDoorTime: number;
  PillowAnomalyBiomeType: EPillowAnomalyBiomeType;
  FreeformTriggerHeight: number;
  FreeformTriggerVertices: Location2Axis[];
  ContextualActionAccessibility: number;
  AllowedUserRestriction: string;
  IgnoreCollisionActors: string;
  VolumeSID: string;
  Priority: number;
  bForceWeather: boolean;
  bDisableTickForWeatherController: boolean;
  PostProcessConfig: string;
  ScenariosGroupPriority: EALifeGroupPriorityType;
  ALifeScenariosGroupSID: string;
  SimplifiedOverlap: boolean;
  PossibleInhabitantFactions: {
    Faction: string;
    SpawnSettingsPerPlayerRanks: Record<
      Rank,
      {
        MaxSpawnQuantity: number;
        InitialSpawnQuantityPercent: number;
        InitialSpawnQuantityRespawnTimeSeconds: number;
        MaxSpawnQuantityRespawnTimeSeconds: number;
        WipeRespawnTimeoutSeconds: number;
        SpawnSettingsPerArchetypes: Record<
          Faction,
          { MinQuantityPerArchetype: number; SpawnWeight: number }
        >;
      }
    >;
  }[];
  RadioactivityValue: number;
  RadiationPerSecondValue: number;
  GeigerRadiationIntensity: number;
  PostProcessRadiationIntensity: number;
  PostProcessRadiationCycleSpeed: number;
  ALifeLairsSearchRadius: number;
  CollisionSize: Location3Axis;
  LightningBallLiveBoxExtent: Location3Axis;
  LightningBallPathUsage: boolean;
  LightningBallNavigationPoints: {
    LightningBallLocation: string[];
    LightningBallPatrolPoint: boolean;
    LightningBallNeighborLocations: number[];
  }[];
  ClickerAnomalyArtifactJumpPositions: string;
  GeigerCurve: string;
  AllowSpawnInShelter: boolean;
  StartWaitTime: number;
  MaximumCount: number;
  MinPatrolNeed: number;
  AvrAgentDiameter: number;
  AllowFactions: string;
  PatrolPoints: {
    Location: string;
    StayTimeMin: number;
    StayTimeMax: number;
    bIsEndPoint: boolean;
    ContextualActionSearchRadius: number;
    PatrolPointLinks: { DestinationPointIndex: number; Weight: number }[];
  }[];
  OnlineModifierDistance: number;
  GlobalOnlineModifierDistance: number;
  GlobalOtherOnlineModifierDistance: number;
  FogDensity: number;
  FogDensitySecondFogData: number;
  FogDensitySecond: number;
  VolumeDailySchedulePresetSID: string;
  DisableRagdollForQuestProtection: boolean;
  Path: { Location: string }[];
  LocationSID: string;
  MaxRespawnCount: number;
  InfiniteRespawn: boolean;
  RespawnOnNPCCount: number;
  RespawnPoints: string[];
  NavModifierVolumes: string[];
  EnableSmartLootIfPossible: boolean;
  AllowNightVisionForQuestNPC: boolean;
  CombatTacticsOverride: ECombatTactics;
  MainInfoTopicOwner: string;
  KillRestrictedFactions: boolean;
  Items: {
    PrototypeSID: string;
    MinAmount: number;
    MaxAmount: number;
    DisablePhysicsAndCollision: boolean;
  }[];
  ShowOnMap: boolean;
  ShowOnCompass: boolean;
  VolumetricCoverRestrictions: { bEnabled: boolean; Volumes: string };
  TeleportGroupSID: string;
}>;

type Faction = string;

export type RelationPrototype = GetStructType<{
  SID: string;
  FactionsInvolvedDistance: number;
  ReputationRollbackRadius: number;
  ReputationRollbackCooldown: number;
  RelationVersion: number;
  RelationLevelRanges: { start: number; end: number }[];
  MinRelationLevelToTrade: ERelationLevel;
  CharacterReactions: ({ Type: ERelationChangingEvent } & {
    [key in `${Reactions}->${Reactions}`]: number;
  })[];
  FactionReactions: ({ Type: ERelationChangingEvent } & {
    [key in `${Reactions}->${Reactions}`]: number;
  })[];
  Factions: Record<Faction, Faction>;
  Relations: { [key in `${Faction}<->${Faction}`]: number };
  PositiveReactionsExcludedFactions: `${Faction}<->${Faction}`[];
  NegativeReactionsExcludedFactions: `${Faction}<->${Faction}`[];
  FactionRollbackCooldowns: Record<Faction, number>;
}>;

export type BarbedWirePrototype = GetStructType<{
  ID: number;
  SID: string;
  Damage: number;
  DamageDelay: number;
  BleedingChance: number;
  BleedingValue: number;
  ArmorDamage: number;
  ArmorPiercing: number;
  MovementSpeedDegradeDelay: number;
  bOverlappable: boolean;
  NegativeEffectPrototypeSIDs: string[];
}>;

export type DialogPoolPrototype = GetStructType<{
  SID: string;
  NodePrototypeVersion: number;
  QuestSID: string;
  NodeType: EQuestNodeType;
  StartDelay: number;
  LaunchOnQuestStart: boolean;
  ExcludeAllNodesInContainer: boolean;
  TargetQuestGuid: string;
  TriggerQuestGuid: string;
  bTriggersByAnybody: boolean;
  TriggerAction: number;
  RequiredSquadMembers: ERequiredSquadMembers;
  ReactType: ETriggerReact;
  TrackBeforeActive: boolean;
  ItemSID: string;
  ItemsCount: number;
  AddToPlayerStash: boolean;
  JournalEntity: EJournalEntity;
  JournalAction: EJournalAction;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  Markers: string;
  EventType: EQuestEventType;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Params: {
    ModifiedCharacterParam: EModifiedCharacterParam;
    ChangeValueMode: EChangeValueMode;
    ChangeValue: number;
  }[];
  InGameHours: number;
  InGameMinutes: number;
  ReplaceInventory: boolean;
  EquipItems: boolean;
  ItemGeneratorSID: string;
  JournalQuestDescriptionIndex: number;
  SetQuestActive: boolean;
  IgnoreDamageType: EIgnoreDamageType;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  Repeatable: boolean;
  TeleportLocationAndRotation: LocationAndRotation;
  TeleportType: EGSCTeleportType;
  ShouldBlendViaFade: boolean;
  GoalPriority: EGoalPriority;
  IgnoreRadiationFeilds: boolean;
  IgnoreAnomalyFields: boolean;
  IgnoreEmission: boolean;
  IgnoreCombat: boolean;
  IgnoreThreat: boolean;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  FailureByEmission: boolean;
  FailureByCombat: boolean;
  FailureByThreat: boolean;
  FailureByTargetLost: boolean;
  FailureByPlayerKill: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  ThreatsReactRange: number;
  CanBeInterrupted: boolean;
  WeaponState: EWeaponState;
  UseSecondaryWeapon: boolean;
  BehaviorType: EBehaviorType;
  SimulateBattle: boolean;
  ImmediatelyIdentifyEnemy: boolean;
  TargetQuestGuids: string[];
  DialogChainPrototypeSID: string;
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
  EquipmentTypeFilter: EMainHandEquipmentType;
  EquipmentItemSID: string;
  HideViewType: EHideViewType;
  MovementType: EMovementBehaviour;
  RotationAfterMoveTo: LocationAndRotation;
  MoveToPath: string;
  MoveToSuccessRange: number;
  MoveToFailureRange: number;
  ContaineredQuestPrototypeSID: string;
  SignalSenderGuid: string;
  ItemPrototypeSID: string;
  ExpectedItemsCount: number;
  WithEquipped: boolean;
  LocalizedSequences: string[];
  LoopSequence: boolean;
  PreblendSequence: boolean;
  PreblendTime: number;
  BlendExpForEaseInOut: number;
  NotePrototypeSID: string;
  PlayWhenReceived: boolean;
  SoundLocation: Location3Axis;
  AKEventPath: string;
  MasterAKEventForLoad: string;
  FinishOnAKEvent: boolean;
  DataLayerName: string;
  IsDataLayerEnabled: boolean;
  Continue: boolean;
  SignalReceiverGuid: string;
  SpecificItemDespawn: boolean;
  PauseEmission: boolean;
  StayContextualAction: string;
  CanBeTeleported: boolean;
  VolumeGuid: number;
  MarkerSID: string;
  Explored: boolean;
  Weather: EWeather;
  Force: boolean;
  VideoAssetPath: string;
  TimeToStartNextNodeBeforeEnd: number;
  IsFinalVideo: boolean;
  GlobalVariablePrototypeSID: string;
  ChangeValueMode: EChangeValueMode;
  VariableValue: any;
  NewZoneState: boolean;
  OverrideScenarioGroupSID: string;
  HitProducer: string;
  HitReceiver: string;
  QuestItem: boolean;
  RestrictDialogInteractions: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyDespawn: boolean;
  LookAtLocation: Location3Axis;
  Duration: number;
  EnteringDuration: number;
  LookAtActorFName: string;
  AttractionPointType: EAttractionPointType;
  ActorBoneName: string;
  ReactionTime: number;
  Priority: number;
  CollisionChannel: number;
  ApplyRestrictionType: EApplyRestrictionType;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  PresetName: string;
  ShootingPosition: Location3Axis;
  ShootTargetLocation: Location3Axis;
  ShotsQueueCount: number;
  AIThreatState: number;
  AssetsToLoad: string[];
  AudioLocalizedAssetsToLoad: string[][];
  FirstTargetSID: string;
  SecondTargetSID: string;
  UseDeltaValue: boolean;
  UsePreset: boolean;
  RelationshipValue: number;
  SetFactionRelationshipAsPersonal: boolean;
  ShouldLockPersonalRelationship: boolean;
  DataLayerCombination: string;
  DLC: string;
  OutputPinNames: string[];
  Launchers: {
    Excluding: boolean;
    Connections: { SID: string; Name: string }[];
  }[];
  LastPhrases: {
    FinishNode: boolean;
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  DialogMembers: string[];
  TalkThroughRadio: boolean[];
  DialogObjectLocation: Location3Axis[];
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  DialogEventType: EDialogEventType;
  RequiresGroup: boolean;
  RequiredMembersCount: number;
  OptionalMembersCount: number;
  DialogMemberRestrictions: {
    FactionRestrictions: { Faction: Faction };
    ExcludedFactions: { Faction: Faction };
    ObjPrototypeRestrictions: { NPCPrototypeSID: string };
    ExcludedObjPrototypes: { NPCPrototypeSID: string };
  };
  AvailableDialogs: string[];
}>;

export type Condition = GetStructType<{
  DialogMemberIndex: number;
  RandomProbability: number;
  Money: number | Param;
  GlobalVariablePrototypeSID: string;
  ChangeValueMode: EChangeValueMode;
  VariableValue: any;
  Rank: ERank;
  Faction: string;
  Relationships: ERelationLevel;
  Equipment: EMainHandEquipmentType;
  ConditionType: EQuestConditionType;
  ConditionComparance: EConditionComparance;
  TargetPlaceholder: string;
  LinkedNodePrototypeSID: string;
  CompletedNodeLauncherNames: never[];
  TargetNPC: string;
  TargetContextualActionPlaceholder: string;
  TargetCharacter: string;
  Trigger: string;
  bTriggersByAnybody: boolean;
  ReactType: ETriggerReact;
  RequiredSquadMembers: ERequiredSquadMembers;
  NumericValue: number;
  TargetPoint: Location3Axis;
  ItemPrototypeSID: Param;
  ItemsCount: Param;
  WithEquipped: boolean;
  WithInventory: boolean;
  BoolValue: boolean;
  PointToLookAt: Location3Axis;
  JournalEntity: EJournalEntity;
  JournalState: EJournalState;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  TargetNode: string;
  NodeState: EQuestNodeState;
  IncludePartialOverload: boolean;
  ThreatAwareness: EThreatAwareness;
  EmissionPrototypeSID: string;
}>;

export type Location2Axis = GetStructType<{ X: number; Y: number }>;

export type Location3Axis = Location2Axis & GetStructType<{ Z: number }>;

export type Rotation = GetStructType<{
  Pitch: number;
  Yaw: number;
  Roll: number;
}>;
export type LocationAndRotation = Location3Axis & Rotation;

export type Param = GetStructType<{
  VariableType: EGlobalVariableType;
  VariableValue: any;
}>;

export type Protection = GetStructType<{
  Strike: number;
  Radiation: number;
  Burn: number;
  Shock: number;
  ChemicalBurn: number;
  PSY: number;
  Fall: number;
}>;

export type MovementParams = GetStructType<{
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
  AimSpeedCoef: number;
  AimTurnCoef: number;
  AimLookUpCoef: number;
}>;

export type PossibleItem = GetStructType<{
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
  bRequireWeapon: boolean;
}>;

export type ItemGenerator = GetStructType<{
  Category: EItemGenerationCategory;
  PlayerRank: ERank;
  bAllowSameCategoryGeneration: boolean;
  ReputationThreshold: number;
  RefreshTime: string;
  PossibleItems: PossibleItem[];
  Diff: EGameDifficulty;
}>;

export type VitalParams = GetStructType<{
  MaxHP: number;
  MaxSP: number;
  MaxFP: number;
  RegenFP: number;
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
}>;

export type DialogChainPrototype = GetStructType<{
  SID: string;
  DLC: string;
  StartingDialogPrototypeSID: string;
  DialogOnTheGo: boolean;
  CanBeInterrupted: boolean;
  ContinueAfterInterrupt: boolean;
  IsInteractive: boolean;
  DialogMembers: { DialogMemberName: string; OptionalMember: boolean }[];
  IsPCDialogMember: boolean;
}>;

export type MeshGeneratorPrototype = GetStructType<{
  SID: string;
  ParentMeshGeneratorSID: string;
  Attachments: Record<
    string | `${number}`,
    { SlotName: string; Attaches: { BodyMeshSID: string; Weight: number }[] }
  >;
  Materials: { MaterialGroup: string; Variations: Variation[] }[];
  CustomData: { MaterialGroup: string; Variations: Variation[] }[];
  Groom: { CategoryName: string; Variations: Variation[] }[];
  MergedMesh: string;
}>;

export type Variation = { VariationIndex: number; Weight: number };

export type LairPrototype = GetStructType<{
  SID: string;
  Preset: {
    InitialInhabitantFaction: string;
    IsALifePoint: boolean;
    PossibleInhabitantFactions: Record<
      Faction,
      {
        Faction: Faction;
        SpawnSettingsPerPlayerRanks: Record<
          Rank,
          {
            MaxSpawnQuantity: number;
            InitialSpawnQuantityPercent: number;
            InitialSpawnQuantityRespawnTimeSeconds: number;
            MaxSpawnQuantityRespawnTimeSeconds: number;
            WipeRespawnTimeoutSeconds: number;
            SpawnSettingsPerArchetypes: Record<
              Faction,
              { MinQuantityPerArchetype: number; SpawnWeight: number }
            >;
          }
        >;
      }
    >;
    LairType: ELairType;
    RestingLairInstantSpawnScenarioChance: number;
    RestingLairShortDelayedSpawnScenarioChance: number;
    RestingLairMinNPCCount: number;
    RestingLairMaxNPCCount: number;
    RestingLairShortDelaySpawnMin: number;
    RestingLairShortDelaySpawnMax: number;
    RestingLairLongDelaySpawnMin: number;
    RestingLairLongDelaySpawnMax: number;
    ALifeLairsSearchRadius: number;
    GameTimeOfflineToRerollLairData: number;
  };
}>;

export type AIGlobal = GetStructType<{
  MaxHideWeaponWarningFollowDistance: number;
  HideWeaponWarningBarkDelay: number;
  FlashlightTimeOfDayOn: number;
  FlashlightTimeOfDayOff: number;
  FlashlightInteractDuration: number;
  PreyLighterOnVisibilityCoef: number;
  PreyLighterOffVisibilityCoef: number;
  MinALifeSpawnDistance: number;
  MinALifeDespawnDistance: number;
  MaxAgentsCount: number;
  DistanceToSwitchToWalkIn: number;
  DistanceToSwitchToWalkOut: number;
  ForceRunInsteadSprintDistanceFromPathStart: number;
  ForceRunInsteadSprintDistanceToPathEnd: number;
  ForceRunInsteadSprintDistanceToNextPortal: number;
  ForceRunInsteadSprintPortalRotationAngleThreshold: number;
  TimeToSkipLairPeacefulSpawnAfterMemberDies: number;
  OfflineUsingGameGraphMoveFactor: number;
  AllowCorpseProcessForQuestAgent: boolean;
  DeadBodyToConsiderAsThreatDuration: number;
  WeaponLootDistance: number;
  AllowWeaponPickupWhenLooting: boolean;
  AllowWeaponPickupBasedOnPrice: boolean;
  CorpseBehaviorFactionRestrictions: string[];
  HearingSensorSettings: {
    NonEnemySoundHearingCoef: number;
    SoundVisionValidationThreshold: number;
  };
  TouchSensorSettings: {
    TouchDistanceThreshold: number;
    TouchNonEnemyPlayerLookAtTime: number;
    TouchNonEnemyPlayerReactionTime: number;
    TouchSensorCooldown: number;
  };
  WeatherSettings: {
    WeatherSID: string;
    VisibilityCoef: number;
    HearingDistanceCoef: number;
    FlairCoef: number;
  }[];
  PlayerFlashlightVisionSettings: {
    FlashlightVisionConeLength: number;
    FlashlightVisionConeHalfAngle: number;
    FlashlightMinVisionScorePerSecond: number;
    FlashlightMaxVisionScorePerSecond: number;
    NumTracePointsPerVisionUpdate: number;
  };
  LuminanceSettings: {
    BaseLuminance: number;
    MinAmbientLuminanceToSkipTraces: number;
    MaxLightGatheringRadius: number;
    LightSourceLuminanceMultiplier: number;
    MaxLuminanceTracesPerUpdate: number;
    MaxLuminanceAgentProcessPerUpdate: number;
    LightLuminanceByTimeOfDayCurve: string;
    ShadowLuminanceByTimeOfDayCurve: string;
    ShadowOffsetByTimeOfDayCurve: string;
    EnvironmentLuminanceCoefficients: {
      WeatherLuminanceCoefficients: {
        WeatherType: EWeather;
        Coefficient: number;
      }[];
      RoomBaseCoefficients: {
        RoomType: EAudioRoomPresetBandwidth;
        Coefficient: number;
      }[];
      TimeOfDayBaseLuminance: {
        TimeFrom: number;
        TimeTill: number;
        Luminance: number;
      }[];
    };
  };
  FlashlightUseSettings: {
    FlashlightUseLuminanceThresholdDayOn: number;
    FlashlightUseLuminanceThresholdDayOff: number;
    MaxFlashlightsUsedSimultaneously: number;
    MaxFlashlightUseTracesPerUpdate: number;
    MaxFlashlightAgentProcessPerUpdate: number;
    FlashlightMeshDespawnDelay: number;
    FlashlightMeshDespawnPlayerCameraFOVDistance: number;
    FlashlightMeshDespawnNPCToCameraAngleThreshold: number;
    FlashlightMinStateTime: number;
    FlashlightUseTracePoints: { RelativeLocation: Location3Axis }[];
  };
  CharacterPoseSettings: {
    Pose: EStateTag;
    VisibilityCoef: number;
    NoiseCoef: number;
  }[];
  PhysMatSettings: {
    MaterialType: EPhysicalMaterialType;
    CharacterNoiseCoef: number;
  }[];
  MaterialTranslucencyList: {
    Translucency: number;
    Materials: { SID: string }[];
  }[];
  CoverSettings: {
    MinGenericCoverHeight: number;
    MinBehindTreeCoverHeight: number;
    MinLowCoverHeight: number;
    MinHighCoverHeight: number;
    MinSmartWidth: number;
    MinGenericCoverWidth: number;
  };
  FocusLocationSelectionSettings: {
    FocusLocationStartLookingEarlyOffset: number;
  };
  ReactionOnEmissionSettings: {
    DistanceToShelterToWalk: number;
    MinCoveredDistanceToChangeMovementType: number;
    DistanceToAvoidPreparingForEmission: number;
    InvulnerableAfterEmissionStart: number;
    ReceivedDamageToEnterCombatDuringEmission: number;
    ReceivedDamageTimeToEnterCombatDuringEmission: number;
    TransitionAlphaToPrepareForEmission: number;
    SheltersSearchDistance: number;
  };
  ContextualActionSettings: {
    ContextualActionSearchDistance: number;
    ContextualActionSearchFriendDistance: number;
    ContextualActionGameGraphPathActuationDistance: number;
    ContextualActionInterruptAnimationScaleWhenThreatened: number;
    DistanceToHideWeaponBeforeContextualAction: number;
    DistanceToEquipWeaponBeforeContextualAction: number;
    DistanceToTurnOffFlashlightBeforeContextualActionSquared: number;
    DistanceToTurnOnFlashlightBeforeContextualActionSquared: number;
  };
  SoundEventTypeSpreadSpeedList: {};
  AudioRoomLoudnessMultiplierList: {
    Type: EAudioRoomPresetBandwidth;
    LoudnessMultiplier: number;
  }[];
  WeaponAttachmentsModifiersList: {
    WeaponAttachmentSID: string;
    HearingDistanceModifier: number;
    ThreatPointsMultiplier: number;
  }[];
  AnomalyRestrictionsSettings: {
    AnomalyRestrictionsUpdateIntervalSeconds: number;
    AnomalyRestrictionsIgnoreChanceZombie: number;
  };
  ThreatsSettings: {
    ThreatReportDelaySeconds: number;
    EnemyReportDelaySeconds: number;
    LootingCorpsesDeathTimeInterval: number;
    CorpseSmellAfterDeathTimeout: number;
    FlairIdentifyAsEnemyOutsideFrontZoneMultiplier: number;
  };
  DangerAreaSettings: {
    DangerAreaRadius: number;
    DangerAreaLifetimeSeconds: number;
    DangerAreaLifetimeDistance: number;
    DangerAreaCostMultiplier: number;
    DangerAreaOverlapsForRestriction: number;
    DangerAreaPlayerDamageAccumulationSeconds: number;
    DangerAreaMaxNum: number;
  };
  ALifeSettings: {
    OfflineCombatAreaLifetimeSeconds: number;
  };
  ThrowGrenadeSettings: {
    AvailableGrenadesPerFaction: Record<Faction, Record<Rank, number>>;
  };
  CombatTacticsSettings: {
    CombatTacticsParamsPerFactions: Record<
      Faction,
      {
        UpdateIntervalSecondsMin: number;
        UpdateIntervalSecondsMax: number;
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
      }
    >;
  };
  RegionRank: {
    Region: ERegion;
    MinRank: ERank;
    MaxRank: ERank;
  }[];
  MutantCorpseProcessFactionPerRank: {
    Faction: string;
    AllowedRanks: EAgentRankMask[];
  }[];
  SID: string;
}>;

export type CoreVariable = GetStructType<{
  LaunchConfig: string;
  ALifeGridUpdateDelay: number;
  ALifeGridVisionRadius: number;
  SimulatePhysicsDistance: number;
  GenericModelGridVisionRadius: number;
  AgentSpawnNavMeshQueryDistance: number;
  bALifeTick: boolean;
  CorpseTimeout: number;
  PsyNPCCorpseTimeout: number;
  FaustCloneCorpseTimeout: number;
  FaustCloneCountCap: number;
  LairSearchingRadius: number;
  StartYear: number;
  StartMonth: number;
  StartDay: number;
  StartHour: number;
  StartMinute: number;
  StartSecond: number;
  ItemSelectorTimeDilationCoefficient: number;
  SkyLightUpdateDeltaTime: number;
  RealToGameTimeCoef: number;
  MaxRecoilPitchDifference: number;
  WorldMapActualWidth: number;
  WorldMapActualHeight: number;
  ParticleTraceLength: number;
  NewDLCPopupDisplayTime: number;
  ArmorDifferenceCoef: number;
  IdleSwayInterpolationSpeed: number;
  StaminaRegenStateCoefs: {
    StateTag: EStateTag;
    Value: number;
  }[];
  SlowRunThreshold: number;
  WoundedHealHoldInteractTime: number;
  WoundedStateHealthRegen: number;
  DelayBetweenMoaning: number;
  ChanceToGetHealOverTimeWhenWounded: number;
  HpThresholdToHealWound: number;
  CooldownOnFallingWounded: number;
  UnkillableNPCWoundedStateResurrectionTime: number;
  BoneToHitAreaMap: {
    Head: string[];
    Torso: string[];
    Legs: string[];
  };
  DamageInteractVFXs: {
    Burn: {
      VFXPath: string;
      VFXLifeTime: number;
    };
    Shock: {
      VFXPath: string;
      VFXLifeTime: number;
    };
    ChemicalBurn: {
      VFXPath: string;
      VFXLifeTime: number;
    };
    SteamBurn: {
      VFXPath: string;
      VFXLifeTime: number;
    };
  };
  PossessedWeaponFireIntervals: Record<Caliber, { FireInterval: number }>;
  RainImpactParticle: string;
  WeatherTimeCoefficientCurvePath: string;
  SystemNotificationSpecificReward: string;
  WoundHitAreasThresholds: {
    Head: number;
    Torso: number;
    Legs: number;
    Default: number;
  };
  WoundCausingDamageSourceTypes: EDamageSource[];
  BoltSkeletalMeshes: string[];
  BoltStaticMeshes: string[];
  EffectsRemovedOnHealWounded: string[];
  EffectsOnDestructWindowApplied: string[];
  HoldPreventFromDefaultInteractionPercent: number;
  InventorySPDrainCoef: number;
  InventorySPOverweightDrainCoef: number;
  InventoryPenaltyLessWeight: number;
  bAutoEquipArtifacts: boolean;
  MediumEffectStartUI: number;
  CriticalEffectStartUI: number;
  BoltPrototypeSID: string;
  KnifePrototypeSID: string;
  ItemDropHeight: number;
  UntouchedDespawnItemTime: number;
  DespawnItemTime: number;
  WeaponDropForce: number;
  ItemDropDistance: number;
  VitalBaseBleedingValue: number;
  VitalMaxPoppyFieldSleepiness: number;
  VitalMaxPsyPoints: number;
  VitalPsyTickTime: number;
  StaminaFallingDamageCoef: number;
  LimpEffectSIDToThresholdMap: {
    EffectSID: string;
    Threshold: number;
  }[];
  DialogLookAtConstraint: number;
  DialogDistance: number;
  RadiusWithAmountOfActorWithSimulation: number;
  ThreatConfidenceDropToZeroDeviation: number;
  StartCombatCooldown: number;
  StartThreatCooldown: number;
  MinDeadThreatForgetTime: number;
  MaxDeadThreatForgetTime: number;
  GuitarPlayThreatLoudness: number;
  ObjPhysicsHitTimeDelay: number;
  ObjPhysicsHitSqareMinVelocity: number;
  WaterParticleMinInterval: number;
  ViewPitchUpLimit: number;
  ViewPitchDownLimit: number;
  ClimbViewYawLimit: number;
  ClimbViewPitchLimit: number;
  ClimbUpSpeed: number;
  ClimbDownSpeed: number;
  ClimbEnterUpSpeed: number;
  ClimbEnterDownSpeed: number;
  ClimbExitUpSpeed: number;
  ClimbFastAscendingSpeedScale: number;
  ClimbMediumAscendingSpeedScale: number;
  JumpFromLadderRepulseForce: number;
  LadderEnterUpZOffset: number;
  LadderEnterUpXOffset: number;
  CheckCombatStateInterval: number;
  HPThresholdToKill: number;
  LastBulletStartScalingPlayerHPPercent: number;
  LastBulletBaseDamageMultiplier: number;
  ItemCostMinPercent: number;
  BaseRepairCostModifier: number;
  ReputationRepairCostModifiers: {
    RelationLevel: ERelationLevel;
    Modifier: number;
  }[];
  MinimalSubtitlesDuration: number;
  MaxSubtitlesRange: number;
  RadioRange: number;
  StrikeGrenadeResistCoefs: {
    ProtectionStrike: number;
    GrenadeDamageResist: number;
  }[];
  ThrowGrenadePathMaxTime: number;
  ThrowGrenadePathSimFrequency: number;
  MovementVFXFootStepDecalLifetime: number;
  FootstepsDecalFadeOutTime: number;
  MovementVFXArmorScale: {
    ArmorScale: EArmorScale;
    ArmorProtectionValue: number;
  }[];
  DestructibleNoiseTimeout: number;
  NoiseIndicatorMaxHearingDistance: number;
  LightningBallAnomalyAppearanceTime: number;
  FOVDefault: number;
  CutsceneFOVDefault: number;
  DialogFOVDefault: number;
  DialogDofMaxFocusDistance: number;
  DialogDepthOfFieldFstop: number;
  DialogDepthOfFieldSensorWidth: number;
  HandlessFOVAimModifier: number;
  BaseTurnRate: number;
  BaseLookUpRate: number;
  BaseActorHeight: number;
  MaxInteractionDistance: number;
  NarrowTraceInteractionRadius: number;
  WideTraceInteractionDistance: number;
  WideTraceInteractionRadius: number;
  InteractionDotsTraceRadius: number;
  InteractionDotsInnerConeAngle: number;
  InteractionDotsOuterConeAngle: number;
  MaxNumberOfVisibleInteractionDots: number;
  AutoInteractionDistance: number;
  ItemContainerInteractRange: number;
  MutantLootContainerInteractRange: number;
  DragDeadBodyInteractRange: number;
  PutDeadBodyDistance: number;
  DeadBodyPickUpTime: number;
  DeadBodyStaminaJumpMultiplier: number;
  DeadBodyDragAnimationRagdollTransitionSpeed: number;
  DeadBodyInvalidationTime: number;
  DraggingCorpseSpeedCoef: number;
  CorpseOfflineSquaredDistance: number;
  CorpseOfflineTimeConditionSquaredDistance: number;
  CorpseOfflineCountConditionSquaredDistance: number;
  CorpseConditionOnlineCount: number;
  CorpseOnlineTime: number;
  CorpseLootedOnlineTime: number;
  CorpseSeenOnlineTime: number;
  CorpseALifeOnlineTime: number;
  CorpseDespawnToOfflineTimeCoef: number;
  CorpseOffscreenLifetime: number;
  CorpseRagdollQuestProtectionCheckTime: number;
  CorpseRagdollQuestProtectionEnableTime: number;
  DistanceToDestroyCorpsesIfOverpopulated: number;
  AlifeCorpsesHardcap: number;
  MutantLootAnimCollection: string;
  MutantLootAnimCollectionWithoutWidget: string;
  UseMutantLootWithoutWidget: boolean;
  MutantLootParams: {
    AgentType: EAgentType;
    CutRadiusModifier: number;
    CutDecalBoneName: string;
  }[];
  MutantLootInteractHeightMin: number;
  MutantLootInteractHeightMax: number;
  ArtifactStrafeMinDistance: number;
  ItemCollisionEnableDelay: number;
  ActorCrouchHeight: number;
  PlayerPrototypeSID: string;
  DefaultItemGeneratorTemplate: string;
  PlayerStartingCoords: Location3Axis;
  BleedingTimer: number;
  BleedingTimerDrop: number;
  BleedingChanceNonPenetrationMod: number;
  BleedingPointsNonPenetrationMod: number;
  BleedingChanceStackMaxSize: number;
  CriticalDamageSoundCooldown: number;
  CriticalShotDamageSound: string;
  MaxFallingVelocity: number;
  MinFallingVelocity: number;
  ClampedMaxFallingVelocity: number;
  ClampedMinFallingVelocity: number;
  MaxFallHeight: number;
  IKTraceDistance: number;
  ThrowSpeedMultiplierMin: number;
  ThrowSpeedMultiplierMax: number;
  DeltaShiftStartThrowPosition: number;
  TorqueOfThrowingItem: number;
  BoltLifetime: number;
  MaxPostProcessCount: number;
  InfotopicRefreshHours: number;
  MarkerShowingDistance: number;
  MarkerExploringDistance: number;
  MarkerRevealingDistance: number;
  bEnableDisassembleUI: boolean;
  bEnableHideInformationUI: boolean;
  AgentsDecalsPoolSize: number;
  MeshesDecalsPoolSize: number;
  CorpsesDecalsPoolSize: number;
  FootStepsDecalsPoolSize: number;
  bStartWithMenu: boolean;
  MaxDialogActionsCount: number;
  CommentRange: number;
  AttentionConeAngle: number;
  UIFloatPrecision: number;
  DurabilityRound: number;
  LowDurabilityThreshold: number;
  bShouldSaveDefaultLanguage: boolean;
  DefaultSaveLanguage: ELocalizationLanguage;
  bEnableWaterElement: boolean;
  RadiusSearchTargetToLook: number;
  RadiusSearchPlaceToSit: number;
  TargetToLookViewingAngle: number;
  PermissibleAngleOfRotation: number;
  MaxAngleOfRotation: number;
  WaitingTimeToRotationCamera: number;
  TimeComeBackRotation: number;
  CoefTimeForInterp: number;
  SignalStrength: number[];
  ProjectileGaranteedVFXSpawnDistance: number;
  ProjectileMaxVFXSpawnDistance: number;
  ProjectileDecalLifeSpan: number;
  ProjectileDecalLifeSpanOnCorpse: number;
  ProjectileDecalMaxSaveCountOnCorpse: number;
  ProjectileDecalFadeOutTime: number;
  ProjectileExplosionOffset: number;
  ImpactParticleVFXCritName: string;
  ImpactParticleVFXSizeName: string;
  ImpactParticleVFXSpreadName: string;
  ImpactParticleVFXHeadshotName: string;
  ImpactParticleVFXNpcSizeName: string;
  FleshIshPhysicalMaterials: EPhysicalMaterialType[];
  DefaultMouseSensitivityModifier: number;
  LowerRightLocation: Location2Axis;
  UpperLeftLocation: Location2Axis;
  DefaultMapSize: Location2Axis;
  MinHeightToShowMarkerHeightIndicatorAbove: number;
  MinHeightToShowMarkerHeightIndicatorBelow: number;
  CalmDamageFromPlayerCoef: number;
  ArmorDeflectDamageCoefHuman: number;
  ArmorDeflectDamageCoefMutant: number;
  ArmorDeflectMinChance: number;
  ArmorDeflectMaxChance: number;
  ExplosionArmorDifferenceCoef: number;
  PlayerMeleeArmorDifferenceCoef: number;
  StrikeAnomalyArmorDifferenceCoef: number;
  AccumulateNPCToPlayerDamageSeconds: number;
  DeferredDeathMaxTime: number;
  PlayerStartingMoney: number;
  InhaleExhaleTime: number;
  InhaleExhaleTimeMin: number;
  InhaleExhaleTimeMax: number;
  TraceCheckLengthOnSpawn: number;
  MinDistanceToFloorOnSpawn: number;
  MaxTimeSpentOnLoading: number;
  bStartWithLoadedWeapon: boolean;
  DisassemblyWeaponDurabilityRangeMin: number;
  DisassemblyWeaponDurabilityRangeMax: number;
  ItemDurabilityStackDifference: number;
  EmissionNeutralityTimer: number;
  EmissionStartLocation: Location2Axis;
  DegenSuppressionDelayTimeSeconds: number;
  ObjRadiationSphereMinRadius: number;
  ObjRadiationSphereMaxRadius: number;
  RadiationCurveIconAnim: string;
  RadiationPostEffectSID: string;
  RadiationPresetValues: {
    Preset: ERadiationPreset;
    RadioactivityValue: number;
    RadiationPerSecondValue: number;
    GeigerRadiationIntensity: number;
    PostProcessRadiationIntensity: number;
  }[];
  RadiationInnerOffsetPresetValues: {
    Preset: ERadiationInnerOffsetPreset;
    Value: number;
  }[];
  WeightAzimuthArrayPsyPhantom: {
    MinAngle: number;
    MaxAngle: number;
    Weight: number;
  }[];
  PlacesOfInterest: ({ SID: number } & Location3Axis)[];
  GameMusicEvent: string;
  RegionAmbientState: string;
  LocationAmbientState: string;
  NoMusicAmbientState: string;
  MusicVolumeSlider: string;
  CombatStateAction: string;
  CombatStateActionEnd: string;
  DefaultState: string;
  FastbackState: string;
  PlayVideoState: string;
  PlayerDeathState: string;
  IdleState: string;
  MainMenuState: string;
  FirstTimeSettingsState: string;
  FullDynamicRangeState: string;
  MediumDynamicRangeState: string;
  NarrowDynamicRangeState: string;
  MusicManagerCombatScoreThreshold: number;
  MusicManagerCombatEnemyAttackActionLifetimeSeconds: number;
  MPC_FOV: string;
  MPC_PPM: string;
  MPC_Foliage: string;
  MPC_Environment: string;
  GaussGunHit: string;
  GaussGunTrace: string;
  GaussGunReload: string;
  GeigerSFXStart: string;
  GeigerSFXStop: string;
  GeigerCurve: string;
  RadioactivityParameter: string;
  EnergeticOveruseParameter: string;
  PauseMenuOn_SFX: string;
  PauseMenuOff_SFX: string;
  MarkerSettingsAsset: string;
  LootNPCDeadBodySound: string;
  LootMutantDeadBodySound: string;
  GameLoadingScreenStart: string;
  GameLoadingScreenStop: string;
  WorldMapTexture: string;
  WorldMapRegionTexture: string;
  LevelTreesCollection: string;
  BoltBlueprint: string;
  BP_DeveloperSpectator: string;
  StaticItemContainer: string;
  SkeletalItemContainer: string;
  KnifeAnimationBlueprint: string;
  BoltAnimationBlueprint: string;
  PDAAnimationBlueprint: string;
  LandPredictionAlphaCurve: string;
  LadderEnterCurve: string;
  DefaultLeverCurve: string;
  DefaultLeverCurveReverse: string;
  AimingWeaponDirtCurve: string;
  ToggleButtonCurve: string;
  DeadZonesConfig: string;
  MoveGamepadInputCurve: string;
  LookUpGamepadInputCurve: string;
  PathToInputActionAssets: string;
  PathToInputCurveAssets: string;
  MoveGamepadInputCurves: string[];
  LookGamepadInputCurves: string[];
  KnifeSkeletal: string;
  GuitarSkeletal: string;
  WaterElementWidgetClass: string;
  MainMenuWidgetClass: string;
  RightClickMenuWidgetClass: string;
  PDAClass: string;
  InventoryWidgetClass: string;
  InteractWidgetClass: string;
  InteractDotsWidgetClass: string;
  DebugHUDWidgetClass: string;
  ItemSelectorClass: string;
  FastDialogClass: string;
  ImportantDialogClass: string;
  DialogWidgetClass: string;
  SubtitleClass: string;
  SkipHintClass: string;
  FadeoutScreenWidgetClass: string;
  GamePauseMenuClass: string;
  SleepWidgetClass: string;
  TradeWidgetClass: string;
  UpgradesWidgetClass: string;
  HUDWidgetClass: string;
  UpgradeWidgetClass: string;
  UpgradeTooltipWidgetClass: string;
  MarkerWorldMapWidgetClass: string;
  MarkerCompassWidgetClass: string;
  ThreatPointerWidgetClass: string;
  WorldMapScene: string;
  WorldMapRegionMarkerClass: string;
  WorldMapLocationMarkerClass: string;
  WorldMapHubMarkerClass: string;
  PlayVideoWidgetClass: string;
  FinalCreditsWithVideoClass: string;
  AutonomicTutorialWidgetClass: string;
  ReferenceTutorialWidgetClass: string;
  ReferenceTutorialLeftWidgetClass: string;
  SplashTutorialWidgetClass: string;
  NewDLCPopupWidgetClass: string;
  MeshSoundPlacerDataTable: string;
  BodyExplodeParticle: string;
  DoorBlueprint: string;
  PopupViewClass: string;
  PopupClass: string;
  DemoPopupClass: string;
  UpdatePopupClass: string;
  RestoreBackupClass: string;
  LoadingScreenWidgetClass: string;
  VideoLoadingScreenWidgetClass: string;
  DefaultTimedLoadingScreenWidgetClass: string;
  WhiteBridgeLoadingScreenWidgetClass: string;
  TeleportLoadingScreenWidgetClass: string;
  InspectArtifactWidgetClass: string;
  GuitarPlayWidgetClass: string;
  BackgroundBlurViewClass: string;
  DetectorMPC: string;
  StaticParticlesDataTable: string;
  DynamicParticlesDataTable: string;
  EmissionCrowsFallFX: string;
  BoltCrosshairType: ECrosshairType;
  DefaultSurfaceMaterial: string;
  DirtSurfaceMaterial: string;
  GrassSurfaceMaterial: string;
  BrickSurfaceMaterial: string;
  GlassSurfaceMaterial: string;
  SandSurfaceMaterial: string;
  RockSurfaceMaterial: string;
  AsphaltSurfaceMaterial: string;
  ClothSurfaceMaterial: string;
  LeatherSurfaceMaterial: string;
  RubberSurfaceMaterial: string;
  PaperSurfaceMaterial: string;
  PlasticSurfaceMaterial: string;
  FleshSurfaceMaterial: string;
  FleshClothSurfaceMaterial: string;
  FleshMetalSurfaceMaterial: string;
  FleshRubberSurfaceMaterial: string;
  WoodThinSurfaceMaterial: string;
  WoodSolidSurfaceMaterial: string;
  MetalThinSurfaceMaterial: string;
  MetalSolidSurfaceMaterial: string;
  MetalGridSurfaceMaterial: string;
  SlateSurfaceMaterial: string;
  WaterSurfaceMaterial: string;
  ChemicalSurfaceMaterial: string;
  BreadSurfaceMaterial: string;
  MeatSurfaceMaterial: string;
  VegetableSurfaceMaterial: string;
  TreeSurfaceMaterial: string;
  ForestGrassSurfaceMaterial: string;
  PuddleSurfaceMaterial: string;
  GravelSurfaceMaterial: string;
  BrokenGlassSurfaceMaterial: string;
  GroundSurfaceMaterial: string;
  AirPoltergeistSurfaceMaterial: string;
  TreeNoParticlesSurfaceMaterial: string;
  GlassNoParticlesSurfaceMaterial: string;
  BoneSurfaceMaterial: string;
  FleshCorpsesSurfaceMaterial: string;
  ClothCorpsesSurfaceMaterial: string;
  LeavesSurfaceMaterial: string;
  ForestPineSurfaceMaterial: string;
  CeramicSurfaceMaterial: string;
  ArtifactSurfaceMaterial: string;
  StaminaWeightCurve: string;
  ControllerSpeakerDiegeticMixState: string;
  ControllerSpeakerDiegeticSoloState: string;
  ControllerSpeakerDiegeticOffState: string;
  ControllerSpeakerHazardsMixState: string;
  ControllerSpeakerHazardsSoloState: string;
  ControllerSpeakerHazardsOffState: string;
  ControllerSpeakerInteractiveObjectsMixState: string;
  ControllerSpeakerInteractiveObjectsSoloState: string;
  ControllerSpeakerInteractiveObjectsOffState: string;
  ControllerSpeakerInterfaceMixState: string;
  ControllerSpeakerInterfaceSoloState: string;
  ControllerSpeakerInterfaceOffState: string;
  ControllerSpeakerRadioMixState: string;
  ControllerSpeakerRadioSoloState: string;
  ControllerSpeakerRadioOffState: string;
  ControllerSpeakerRadioAUXBus: string;
  MotionOnState: string;
  MotionOffState: string;
  AnomalyAkComponentOffset: number;
  ObjRootAkComponentOffset: number;
  PhysicalMaterialFrictionCoefficients: {
    PhysicalMaterialType: EPhysicalMaterialType;
    FrictionCoefficient: number;
  }[];
  PerspectiveThirdPersonRTPC: string;
  ScopeMaterialInWorld: string;
  DropItemSFX: string;
  WorldWindDirectionInitial: Location2Axis;
  FlashlightCombatUseChance: Record<Rank, number>;
  FlashlightDialogIntensityPercent: number;
  FlashlightDialogIntensityLerpTime: number;
  FactionRelationUpdateDelay: number;
  PersonalRelationUpdateDelay: number;
  DawnStartTime: number;
  DayStartTime: number;
  EveningStartTime: number;
  NightStartTime: number;
  AimAssistBoneLocationOffset: number;
  AimAssistMinOverlapsThreshold: number;
  AimAssistMaxOverlapsThreshold: number;
  AimAssistSnappingBones: string[];
  AimSocketName: string;
  OpticCutoutSocketName: string;
  OpticCutoutLocationParamName: string;
  OpticCutoutRadiusParamName: string;
  OpticCutoutThresholdParamName: string;
  AimAlphaParamName: string;
  OpticCutoutEnabledParamName: string;
  OffsetAimingDefaultSocketName: string;
  OffsetAimingChangeTime: number;
  AimFOVRestoreTime: number;
  UnfocusableTargetLooseTime: number;
  UnfocusableWeaponTraceDistance: number;
  UnfocusableKnifeTraceDistance: number;
  UnfocusableMinSweepRadius: number;
  UnfocusableFOVAngle: number;
  OnlineDirectorModelsPerTick: number;
  TriggersToUpdatePerTick: number;
  TopazDisplayMaterialIndex: number;
  TopazDiodsMaterialIndex: number;
  TopazDisplayEnableParamName: string;
  TopazDisplayPhaseParamName: string;
  TopazDisplayCaribsParamName: string;
  TopazDisplayTimeParamName: string;
  TopazDisplaySievertsParamName: string;
  TopazDisplayHueParamName: string;
  TopazDiodsEnableParamName: string;
  TopazDiodsProgressParamName: string;
  AudioRoomPresetBandwidth: {
    None: string;
    Custom: string;
    Close: string;
    HalfOpen: string;
    Open: string;
    Isolated: string;
    PsyDome: string;
  };
  UnderwaterTestTraceDist: number;
  PathToWaterObstructionTestTraceDist: number;
  WaterWetnessDryingConstValue: number;
  WaterWetnessDryingConstValueNotInWater: number;
  WaterParticleDepthThreshold: number;
  WaterParticleSizeMultiplier: number;
  WetnessDryingConstValue: number;
  WetnessTraceHeight: number;
  WetnessProximityUpdateDistance: number;
  ArmorDurabilityParamsCoef: number;
  HelmetDurabilityParamsCoef: number;
  ItemInfoAffectingEffects: {
    ItemInfoType: EItemInfoType;
    AffectingEffectTypes: {
      EffectType: EEffectType;
      Multiplier: number;
    }[];
  }[];
  WeaponInfoMaxDamage: number;
  WeaponInfoMaxPiercing: number;
  WeaponInfoMaxFireInterval: number;
  WeaponInfoMinFireInterval: number;
  WeaponInfoMaxFireDistance: number;
  WeaponInfoMaxAccuracy: number;
  ArtifactOffsetFromAnomalyBorder: Location3Axis;
  ArtifactSpawnDistanceDelta: number;
  ArtifactSpawnAttemptsCount: number;
  ArtifactSpawnHeightToNavmesh: number;
  ArtifactSpawnPityStructs: {
    Rank: ERank;
    AttemptsCount: number;
    RarityLuckIncrease: {
      Rarity: EArtifactRarity;
      LuckIncrease: number;
    }[];
  }[];
  bResetArtifactLuckOnPickup: boolean;
  GenericTeleportScreenHideDelay: number;
  GenericTeleportScreenShowDelay: number;
  DefaultTeleportScreenHideDelay: number;
  DefaultTeleportScreenShowDelay: number;
  PlayerBedSleepTime: number;
  PlayerAudioLogVolumeDecreaseTime: number;
  NiagaraProviderUpdateTimings: {
    ProviderType: ENiagaraProviderType;
    UpdateTime: number;
  }[];
  RegenerateItemsOnRankUpdateRadius: number;
  RegenerateItemsOnRankUpdateTimer: number;
  VitalMaxEnergeticOveruse: number;
  VitalMaxEnergeticTolerance: number;
  VitalEnergeticOveruseDegen: number;
  VitalEnergeticToleranceDegen: number;
  VitalEnergeticToleranceDegenDelay: number;
  VitalEnergeticOveruseSoundForwardMultiplier: number;
  ZombieFactionUIDName: string;
}>;

export type CluePrototype = GetStructType<{
  ID: number;
  SID: string;
  Description: string;
  Type: EGlobalVariableType;
  DefaultValue: string;
}>;

export type QuestItemGeneratorPrototype = GetStructType<{
  SID: string;
  ItemGenerator: Record<string, ItemGenerator> | ItemGenerator[];
  ID: number;
  RefreshTime: number;
}>;

export type GenericLairPrototype = GetStructType<{
  SID: string;
  Preset: {
    InitialInhabitantFaction: string;
    IsALifePoint: boolean;
    PossibleInhabitantFactions: Record<
      Faction,
      {
        Faction: string;
        SpawnSettingsPerPlayerRanks: Record<
          Rank,
          {
            MaxSpawnQuantity: number;
            InitialSpawnQuantityPercent: number;
            InitialSpawnQuantityRespawnTimeSeconds: number;
            MaxSpawnQuantityRespawnTimeSeconds: number;
            WipeRespawnTimeoutSeconds: number;
            SpawnSettingsPerArchetypes: Record<
              Faction,
              {
                MinQuantityPerArchetype: number;
                SpawnWeight: number;
              }
            >;
          }
        >;
      }
    >;
    LairType: ELairType;
    RestingLairInstantSpawnScenarioChance: number;
    RestingLairShortDelayedSpawnScenarioChance: number;
    RestingLairMinNPCCount: number;
    RestingLairMaxNPCCount: number;
    RestingLairShortDelaySpawnMin: number;
    RestingLairShortDelaySpawnMax: number;
    RestingLairLongDelaySpawnMin: number;
    RestingLairLongDelaySpawnMax: number;
    ALifeLairsSearchRadius: number;
    GameTimeOfflineToRerollLairData: number;
  };
}>;

export type QuestArtifactPrototype = GetStructType<{
  SID: string;
  IsQuestItem: boolean;
  ID: number;
  AnomalyElementType: EAnomalyElementType;
  ArtifactType: EArtifactType;
  FakeArtifactDistortionVFX: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  EffectPrototypeSIDs: string[];
  JumpDistance: number;
  JumpAmount: number;
  JumpDelay: number;
  JumpSeriesDelay: number;
  JumpHeight: number;
  JumpForce: number;
  JumpSpeedCoef: number;
  LandingForce: number;
  LifeTime: number;
  PlayerDistance: number;
  ReturnDistanceValue: number;
  DetectorRequired: boolean;
  Rarity: EArtifactRarity;
}>;

export type QuestObjPrototype = GetStructType<{
  SID: string;
  UnkillableByALife: boolean;
  MaxInventoryMass: number;
  InventoryPenaltyLessWeight: number;
  ItemGeneratorPrototypeSID: string;
  NeedsPresetSID: string;
  ReactOnNonEnemySounds: boolean;
  TradePrototypeSID: string;
  UseGroomReplacement: boolean;
  IsAffectingByMaxActorWithSimulation: boolean;
  IgnoreDamageType: EIgnoreDamageType;
  CanProcessCorpses: boolean;
  Faction: string;
  NPCPrototypeSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  IsAffectingByMaxAttaches: boolean;
  ShouldGenerateStashClues: boolean;
  ID: number;
  Rank: ERank;
  IgnoreEmission: boolean;
  MovementVFXPrototypeSID: string;
  DialogInteractDistance: number;
  Abilities: {
    NoDamagePSYAttack: {
      SID: string;
      ActivationTag: string;
    };
  };
  NPCType: ENPCType;
  MinDialogInteractDistance: number;
  MaxDialogInteractDistance: number;
  Mesh: EObjMesh;
  FlashlightPrototypeSID: string;
  ShouldEnableAdamAppleAnimations: boolean;
  Text: string;
  Hint: string;
  VitalParams: {
    MaxHP: number;
    MaxFP: number;
    MaxSleepDesirePoint: number;
    MaxFoodPoint: number;
    MaxWaterPoint: number;
    DegenFoodPoint: number;
    DegenWaterPoint: number;
    RegenSleepDesirePoint: number;
    RegenFP: number;
    DegenPsyPoints: number;
    DegenStamina: number;
    StaminaDisableThresholds: {
      Threshold: number;
      RegenerationDelay: number;
      StateTags: EStateTag[];
    }[];
    MaxSP: number;
    RegenHP: number;
  };
  AttackParams: {
    MeleeDamage: number;
    MeleeAttackAcceptanceDistance: number;
    MeleeAttackHeight: number;
    MeleeAttackRadius: number;
    ForceDistance: number;
  };
  Blueprint: string;
  MeshGeneratorPrototypeSID: string;
  AgentType: EAgentType;
  IsZombie: boolean;
  IgnoreWoundedRestriction: boolean;
  Protection: {
    Strike: number;
  };
  DuplicateFacialAnimationNPCs: string[];
}>;

export type RSQ00_Rewar = GetStructType<{
  SID: string;
  MoneyGenerator: {
    MinCount: number;
    MaxCount: number;
  };
}>;
