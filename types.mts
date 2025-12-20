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
  bpatch?: boolean;
  bskipref?: boolean;
  isArray?: boolean;
  isRoot?: boolean;
  rawName?: string;
  refkey?: string | number;
  refurl?: string;
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
  AdditionalBulletsAfterReloadingCount: number;
  AimGamepadAimAssistPresetSID: string;
  AimMouseAimAssistPresetSID: string;
  AimVFXSocketMinAlpha: number;
  AimingCurve: string;
  AimingEffects: { Effects: string[]; PlayerOnlyEffects: string[] };
  AimingFOVModifier: number;
  AimingMovementSpeedModifier: number;
  AimingSound: string;
  AimingTime: number;
  AimingWeaponFOVCurve: string;
  AmmoCaliber: EAmmoCaliber;
  AmmoPerShot: number;
  AmmoTypeProjectiles: {
    AmmoType: EAmmoType;
    ProjectilePrototypeSID: string;
  }[];
  BoltActionState: EBoltActionWeaponState;
  BulletMeshPath: string;
  BulletsSockets: string[];
  CameraRecoilPatternBlendCurve: string;
  CameraRecoilPatternPath: string;
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
  CooldownTime: number;
  CrosshairType: ECrosshairType;
  DefaultEjectMagazineSocketName: string;
  DefaultFireType: EFireType;
  DefaultInsertMagazineSocketName: string;
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
  DisplayBP: string;
  FireEventBreak: string;
  FireEventLoop: string;
  FireEventOneShot: string;
  FireInterval: number;
  FireIntervalModifiers: string[];
  FireIntervalRTPCParameter: string;
  FireQueueCount: number;
  FireTypes: string[];
  FullReloadTimeMultiplier: number;
  HideEquipmentTime: number;
  HipGamepadAimAssistPresetSID: string;
  HipMouseAimAssistPresetSID: string;
  HoldBreathDrainModifier: number;
  ItemTypeSwitchValue: string;
  JamType: EJamType;
  LastBulletInClipEvent: string;
  LastClipBulletsCount: number;
  LastClipBulletsDamageModifier: number;
  LastShootIdle: boolean;
  LastTotalBulletsCount: number;
  LastTotalBulletsDamageModifier: number;
  LeanAimingRestoreTime: number;
  LeanAimingTime: number;
  LinearCurveShotsToNormalize: string;
  LinearCurveStartShot: string;
  MaxAmmo: number;
  MaxDeadNPCLoadedAmmoCount: number;
  MaxHeatingValue: number;
  MaxJamChance: number;
  MaxJamDurabilityThreshold: number;
  MechModulatorRTPCParameter: string;
  MinDeadNPCLoadedAmmoCount: number;
  MinJamChance: number;
  MinJamDurabilityThreshold: number;
  NumberOfShotsBeforeDelay: number;
  OffsetAimingConditionSID: string;
  OffsetAimingFOVModifier: number;
  OffsetAimingOffSound: string;
  OffsetAimingOnSound: string;
  OffsetAimingTime: number;
  OffsetAimingWeaponFOVCurve: string;
  PerBulletHeatingValue: number;
  PerBulletReloadingAmmoCount: number;
  PostShotDelay: number;
  PreinstalledAttachmentsItemPrototypeSIDs: {
    AttachSID: string;
    bHiddenInInventory: boolean;
  }[];
  ProjectileSpawnOffset: number;
  RecoilInterval: number;
  RecoilParams: {
    CameraAimRecoilPatternLoopStartKeyIndex: number;
    CameraHipRecoilPatternLoopStartKeyIndex: number;
    CameraRecoilPatternBlendCurve: string;
    CameraRecoilPatternPath: string;
    RecoilMaxPitch: number;
    RecoilPatternInterval: number;
    RecoilRadius: number;
    ShootingStateParams: {
      AimModifiers: {
        AimCrouchModifier: number;
        AimFullCrouchModifier: number;
        AimModifier: number;
      };
      HealthPointsModifiers: {
        HealthPercentThreshold: number;
        HealthPointsModifier: number;
      };
      HipModifiers: {
        HipCrouchModifier: number;
        HipFullCrouchModifier: number;
        HipJumpModifier: number;
        HipModifier: number;
      };
      MovementSpeedModifiers: {
        MovementSpeedModifier: number;
      };
      OffsetAimModifiers: {
        OffsetAimCrouchModifier: number;
        OffsetAimFullCrouchModifier: number;
        OffsetAimModifier: number;
      };
      RadiusExtensionModifiers: {
        MaxRadiusExtensionModifier: number;
        PerIterationRadiusExtensionModifier: number;
        RadiusExtensionBulletCount: number;
      };
      RadiusNormalizationModifiers: {
        RadiusNormalizationDelay: number;
        RadiusNormalizationInterval: number;
      };
    };
  };
  ReloadTypes: EAnimationReloadTypes[];
  SID: string;
  ShootCameraShakePrototypeSID: string;
  ShootingAnimationNumberToSkip: number;
  ShouldOverrideCooldownAfterShots: boolean;
  ShowCrosshair: boolean;
  ShowEquipmentTime: number;
  SilencerRTPCParameter: string;
  SingleBulletReloadTimeMultiplier: number;
  SpeedCoef: number;
  TacticalReloadTimeMultiplier: number;
  ToggleOffsetAimingConditionSID: string;
  UnloadTime: number;
  UpgradePrototypeSIDs: string[];
  WeaponDurabilityCurve: string;
  WeaponInWorldUnloadSound: string;
  WeaponJamEvent: string;
  WeaponJamParams: { JamChanceCoef: number; FullJamTime: number }[];
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
  WeaponStaticMeshParts: {
    MeshPath: string;
    SocketName: string;
    Materials: { MaterialPath: string; MaterialSlot: number }[];
  }[];
  WeaponType: EWeaponType;
  WeaponTypeSoundSwitch: string;
  bSpawnShell: boolean;
}>;

export type ALifeDirectorScenarioPrototype = GetStructType<{
  ALifeScenarioNPCArchetypesLimitsPerPlayerRank: {
    Rank: ERank;
    Restrictions: { AgentType: EAgentType; MaxCount: number }[];
  }[];
  DefaultALifeLairExpansionToPlayerTimeMax: number;
  DefaultALifeLairExpansionToPlayerTimeMin: number;
  DefaultEmissionScenarioGroup: string;
  DefaultEmptyScenarioGroup: string;
  DefaultExpansionSquadNumMax: number;
  DefaultExpansionSquadNumMin: number;
  DefaultPostSpawnDirectorTimeoutMax: number;
  DefaultPostSpawnDirectorTimeoutMin: number;
  DefaultScenarioGroup: string;
  DefaultShouldDespawnNPCs: boolean;
  DefaultSpawnDelayMax: number;
  DefaultSpawnDelayMin: number;
  FallbackMaxSpawnCount: number;
  FallbackNPCTypes: string[];
  ProhibitedAgentTypes: EAgentType[];
  RestrictedObjPrototypeSIDs: string[];
  SID: string;
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
}>;

interface IDialogPrototype {
  AKEventName: string;
  AKEventSubPath: string;
  Actions: { DialogAction: EDialogAction; DialogActionParam: Param }[];
  AnswerText: string;
  AssetsSubPath: string;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CanBeInterrupted: boolean;
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  DialogActions: { DialogAction: EDialogAction }[];
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
  DialogChainPrototypeSID: string;
  DialogMemberIndex: number;
  DialogMemberName: string;
  DialogMembersAnimations: {
    EmotionalState: EEmotionalFaceMasks;
    LookAtTarget: number;
    DialogAnimations: {
      GestureTiming: number[];
      DialogAnimationType: EDialogAnimationType;
    }[];
  }[];
  FaceAnimationAssetName: string;
  FaceAnimationSubPath: string;
  HasVOInSequence: boolean;
  LocalizedSequences: string[];
  LoopSequence: boolean;
  MainReply: boolean;
  NextDialogOptions: {
    AnswerTo: number;
    AvailableFromStart: boolean;
    Conditions: GetStructType<Condition[][]> & {
      ConditionCheckType: EConditionCheckType;
    };
    ExcludeBy: string[];
    IncludeBy: string[];
    MainReply: boolean;
    NextDialogSID: string;
    Terminate: boolean;
    VisibleOnFailedCondition: boolean;
  }[];
  NodePrototypeVersion: number;
  PreblendSequence: boolean;
  PreblendTime: number;
  RotationTime: number;
  SID: string;
  SelfLocation: string;
  ShowNextDialogOptionsAsAnswers: boolean;
  SpeechDuration: number;
  TargetLocation: string;
  Text: string;
  TopicAvailabilityConditions: (Condition[] & {
    ConditionComparance: EConditionComparance;
    ConditionType: EQuestConditionType;
    EmissionPrototypeSID: string;
  })[];
  Unskippable: boolean;
  VisibleOnFailedCondition: boolean;
  VoiceModulatorPrototypeID: string;
  WaitForSequenceToFinish: boolean;
}

export type DialogPrototype = GetStructType<IDialogPrototype>;

export type DifficultyPrototype = GetStructType<{
  AccumulatedDamageReductionCurveWeightMax: number;
  AccumulatedDamageReductionCurveWeightMaxDistance: number;
  AccumulatedDamageReductionCurveWeightMin: number;
  AccumulatedDamageReductionIncludesHealedHealth: boolean;
  AdditionalMechanicsEffects: string[];
  AgentCooldownMultipliers: {
    AgentPrototypeSID: string;
    CooldownMultipliers: {
      CooldownMultiplier: number;
      CooldownTag: string;
    }[];
  }[];
  AllowedSaveTypes: ESaveType[];
  Ammo_Cost: number;
  Anomaly_Damage: number;
  Armor_Anomaly: number;
  Armor_Cost: number;
  Armor_Durability: number;
  Armor_PSY: number;
  Armor_Radiation: number;
  Armor_Strike_Add: number;
  Artifact_Cost: number;
  AutosaveAfterQuests: string[];
  BlockSettings: boolean;
  BuyCondition: number;
  Consumable_Cost: number;
  CorpseSmartLoot: { GeneralNPC: string };
  DefaultAimAssistPresetType: EAimAssistPresetType;
  DescriptionSID: string;
  Effect_Bleeding: number;
  Effect_Degen_Bleeding: number;
  Effect_Satiety: number;
  Effect_Sleepiness: number;
  Explosion_BaseDamage: number;
  HipAccuracyMultiplier: number;
  Mutant_AttackCooldown: number;
  Mutant_BaseDamage: number;
  NPC_Armor_Strike_Add: number;
  NPC_AttackCooldown: number;
  NPC_HP: number;
  NPC_Weapon_BaseDamage: number;
  NPC_Weapon_Rank_Add: number;
  NightVisionGoggles_Cost: number;
  PlayerWeapon_HeadshotMultiplier: number;
  PsyPhantomNPCOverrides: {
    OverrideEffectPrototypeSID: string;
    PSYDelayBeforeNewSpawnCycleModifier: number;
    PsyPhantomNPCCountMultiplier: number;
    bPsyNPCApplyBleeding: boolean;
    PsyNPCDurabilityDamageMultiplier: number;
  }[];
  Radiation_AccumulationSpeed: number;
  Regen_HP: number;
  Repair_Cost: number;
  Reward_MainLine_Money: number;
  Reward_SideLine_Money: number;
  SID: string;
  SellCondition: number;
  ShowWarningPopup: boolean;
  TitleSID: string;
  TotalSaveLimits: { SubType: ESaveSubType; Limit: number }[];
  Upgrade_Cost: number;
  Weapon_BaseDamage: number;
  Weapon_Cost: number;
  Weapon_Durability: number;
  Weapon_DurabilityDamage: number;
  Weapon_JammingMultiplier: number;
  Weapon_Rank_Add: number;
  Weather_Emission_Weight: number;
  Weather_Storm_Weight: number;
  bShouldDisableCompass: boolean;
  bShouldDisableCrosshair: boolean;
  bShouldDisableDeadBodyMarkers: boolean;
  bShouldDisableStashMarkers: boolean;
}>;

export type EffectPrototype = GetStructType<{
  AffectedStaminaActionTypes: EStaminaAction[];
  AmmoType: EAmmoType;
  AmmoTypeProjectiles: {
    AmmoType: EAmmoType;
    ProjectilePrototypeSID: string;
  }[];
  ApplyExtraEffectPrototypeSIDs: string[];
  ApplyToMainHandedEquipment: boolean;
  ArmorPiercing: number;
  ArtifactEquipmentSlots: EInventoryEquipmentSlot[];
  AssetPath: string;
  AttachType: EAttachType;
  AttachmentItemPrototypeSID: string;
  AvailableObjPrototypes: string[];
  AxisType: EInputAxisType;
  BlockAnimationTypes: EActionType[];
  Caliber: EAmmoCaliber;
  CameraShakeEffectSubtype: ECameraShakeEffectSubtype;
  CameraShakePrototypeSID: string;
  CauseOfDeath: ECauseOfDeath;
  Charges: number;
  ConditionComparance: EConditionComparance;
  ConditionSID: string;
  DamageSource: EDamageSource;
  DamageType: EDamageType;
  Delay: number;
  DelayBeforeNewSpawnCycleMax: number;
  DelayBeforeNewSpawnCycleMin: number;
  DelayMax: number;
  DelayMin: number;
  DialogBlendInDuration: number;
  DialogBlendOutDuration: number;
  DialogIntensityMultiplier: number;
  DragImpulseRangeNPC: { Min: number; Max: number };
  DuplicationType: EDuplicateResolveType;
  DurabilityDamageRange: { Min: number; Max: number };
  Duration: number;
  EffectCurvePath: string;
  EffectsToBlockIDs: string[];
  FalseEffectSID: string;
  FireIntervals: number[];
  FireTypes: EFireType[];
  Hint: boolean;
  Icon: string;
  InstantFirstCharge: boolean;
  InterpolationTime: number;
  InventoryEquipmentSlot: EInventoryEquipmentSlot;
  IsCurvePercent: boolean;
  IsSaveable: boolean;
  LocalizationSID: string;
  MaxSpawnPhantoms: number;
  MaxSpeed: number;
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
  MechanicsSourceEffectSID: string;
  MinSpawnPhantoms: number;
  MinSpeed: number;
  Money: number;
  OverrideWeaponPattern: string;
  Param1: string;
  PhantomPhantomMaxDistance: number;
  PhantomPhantomMinDistance: number;
  PhantomPlayerMaxDistance: number;
  PhantomPlayerMinDistance: number;
  Positive: EBeneficial;
  ProcessorSID: string;
  PsyNPCType: EPsyNPCType;
  Radius: number;
  SID: string;
  ShouldIgnoreArmor: boolean;
  ShouldPauseByDialog: boolean;
  ShowUpgradeEffect: boolean;
  ShowUpgradeEffectValue: boolean;
  SoundEffectSubtype: ESoundEffectSubtype;
  StopEffectSID: string;
  Tag: string;
  TargetValue: number;
  TeleportGroupSID: string;
  TeleportType: EGSCTeleportType;
  Text: string;
  TimeBetwenDespawnPhantomMax: number;
  TimeBetwenDespawnPhantomMin: number;
  TimeBetwenSpawnPhantomMax: number;
  TimeBetwenSpawnPhantomMin: number;
  TimePerCharge: number;
  TimePerChargeMax: number;
  TimePerChargeMin: number;
  TrueEffectSID: string;
  Type: EEffectType;
  UseOnlyOnPlayer: boolean;
  ValueMax: number;
  ValueMin: number;
  ValueProviderSID: string;
  VitalType: EVitalType;
  XAxisMaxValue: number;
  XAxisMinValue: number;
  YAxisMaxValue: number;
  YAxisMinValue: number;
  bIsLooped: boolean;
  bIsPermanent: boolean;
  bIsSmooth: boolean;
  bStartEffect: boolean;
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
  Abilities: {
    Human_PhantomAttack: { SID: string; ActivationTag: string };
    Human_MeleeAttack: { SID: string; ActivationTag: string };
    Human_MeleeAttack_Agent: { SID: string; ActivationTag: string };
    Human_ThrowGrenade: { SID: string; ActivationTag: string };
    Human_CombatPSYAttack: { SID: string; ActivationTag: string };
  };
  AdvanceParameters: {
    MaxDistance: number;
    DurationSeconds: number;
    Montage: string;
  };
  AimAssistParamsSID: string;
  Anim: EObjAnim;
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
  Blueprint: string;
  BoneDamageCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  CamperFeatureData: {
    CamperRadius: number;
    TimeToAssumeAsCamper: number;
    SyncTokenTag: string;
  };
  CanBeKnockedDown: boolean;
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
  CustomMeshGeneratorPrototypeSID: string;
  DoorTransitionSettings: {
    Default: { StartDistance: number; Animation: string };
    OneHandedWeaponCombat: { StartDistance: number; Animation: string };
    TwoHandedWeaponCombat: { StartDistance: number; Animation: string };
    OneHandedWeaponRelax: { StartDistance: number; Animation: string };
    TwoHandedWeaponRelax: { StartDistance: number; Animation: string };
  };
  EscapeParameters: {
    FailureChance: string;
    SquadLostFractionToEscape: string;
    EscapeRadius: number;
    AttackEscapeDelay: number;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
  };
  EvadeParameters: {
    AcceptableAngle: number;
    AccumulatedDamage: number;
    AnimationData: { Type: EEvadeActionType; Montage: string }[];
    ApproachDistance: number;
    DamageDetectionSeconds: number;
    RequiredAmmoThreshold: string;
  };
  Faction: string;
  FlairSensorPrototypeSID: string;
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
  FlashlightPrototypeSID: string;
  HumanAmbushParameters: {
    EntryDelay: number;
    ApproachableDistance: number;
    PathLengthThreshold: number;
    PathUpdateInterval: number;
  };
  IgnoreEmission: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  Mass: number;
  MeshGeneratorPrototypeSID: string;
  MovementParams: MovementParams;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  NeedsPresetSID: string;
  Protection: Protection;
  ReactOnApproachWithWeapon: boolean;
  SID: string;
  SequentialAbilities: string[];
  SequentialAbilitiesActionData: { bOrientsToTarget: boolean };
  SpawnPhantomParams: {
    PhantomAttackAbilityTag: string;
    PhantomBlueprint: string;
    PhantomAllowedEquipItems: string[];
    DelayBeforeMovement: number;
  };
  SuppressiveFireParameters: {
    LookAtBoneName: string;
    MaxTimeToLoseTarget: number;
    MaxAccumulatedDamage: number;
    TraceDistance: number;
  };
  SyncParameters: {
    AttackSyncTag: string;
    MovementSyncTag: string;
    AdvanceSyncTag: string;
    FlankSyncTag: string;
    EvadeSyncTag: string;
    SuppressiveFireSyncTag: string;
  };
  TradePrototypeSID: string;
  Type: EObjType;
  VitalParams: VitalParams;
}>;

export type MutantBase = GetStructType<{
  AgentType: EAgentType;
  Anim: EObjAnim;
  AnomalyRestrictionsIgnoreChance: number;
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
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
  Blueprint: string;
  CanProcessCorpses: boolean;
  CustomMeshGeneratorPrototypeSID: string;
  DoorTransitionSettings: {
    Default: { StartDistance: number; Animation: string };
  };
  Faction: string;
  FlairSensorPrototypeSID: string;
  HearingSensorPrototypeSID: string;
  ID: number;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
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
  ItemGeneratorPrototypeSID: string;
  Mass: number;
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  MovementParams: MovementParams;
  MutantEscapeParameters: {
    FailureChance: string;
    SquadLostFractionToEscape: string;
    EscapeRadius: number;
    AttackRadius: number;
    AttackEscapeDelay: number;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
  };
  NeedsPresetSID: string;
  Protection: Protection;
  SID: string;
  ShouldAvoidDangerPolygons: boolean;
  ShouldGenerateStashClues: boolean;
  ShouldTriggerAnomalies: boolean;
  SpawnPhantomParams: {
    PhantomBlueprint: string;
    PermanentEffects: string[];
    EffectsOnOverlap: string[];
  };
  StaminaPerAction: {
    Crouch: number;
    Walk: number;
    Run: number;
    Sprint: number;
    Climb: number;
    Jump: number;
  };
  ThreatPrototypeSID: string;
  Type: EObjType;
  VisionScannerPrototypeSID: string;
  VitalParams: VitalParams;
}>;

export type ObjPrototype = GetStructType<{
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
  AgentType: EAgentType;
  AimAssistParamsSID: string;
  AnomalyDetectorPrototypeSID: string;
  AnomalyRestrictionsIgnoreChance: number;
  ApplicableMechanicsEffects: string[];
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
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
  Blueprint: string;
  BoneBleedingCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  BoneDamageCoefficients: { DamageBone: EDamageBone; DamageCoef: number }[];
  BoneDamageMap: never[];
  CamperFeatureData: { CamperRadius: number; TimeToAssumeAsCamper: number };
  CanBeKnockedDown: boolean;
  CanDailyScheduleBeOverride: boolean;
  CanPeekOut: boolean;
  CanProcessCorpses: boolean;
  CriticalDamageAccumulationPeriod: number;
  CriticalDamageCoefThreshold: number;
  CriticalDamageCooldownMax: number;
  CriticalDamageCooldownMin: number;
  CriticalDamageThreshold: number;
  CrouchParamsSID: string;
  CustomAbilityDialogSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  DailyScheduleSID: string;
  DisableMovementWeightThreshold: {
    WeightStatus: EWeightStatus;
    BlockingMovement: EStateTag[];
  }[];
  EffectMaxParamsSID: string;
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
  Faction: string;
  FlairSensorPrototypeSID: string;
  FlashlightPrototypeSID: string;
  HearingSensorPrototypeSID: string;
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
  Hint: string;
  HoldBreathParamsSID: string;
  HumanInteractionParameters: { HealingWoundedDistance: number };
  HumanLookAtParameters: {
    LookAtDistance: number;
    MinlookAtTime: number;
    MaxlookAtTime: number;
    LookAtCooldown: number;
    PerformGreetingBark: boolean;
  };
  ID: number;
  Icon: string;
  IgnoreEmission: boolean;
  IgnoreWoundedRestriction: boolean;
  ImpactVFXSize: number;
  IsAffectingByMaxActorWithSimulation: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  MaxDialogInteractDistance: number;
  MaxReactionTimeToExplosion: number;
  MeleeAttackData: {
    StartAttackMinDistance: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMaxAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMaxAngleToEnemyDirection: number;
  };
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  MinDialogInteractDistance: number;
  MinReactionTimeToExplosion: number;
  MovementParams: MovementParams;
  MovementSensorSID: string;
  MovementVFXPrototypeSID: string;
  MusicManagerCombatScore: number;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  NeedsPresetSID: string;
  OfflineCombatWeight: number;
  OnHitParamsSID: string;
  PathFailedContextualAction: string;
  PostResurrectionEffects: string[];
  PrepareForEmissionContextualAction: string;
  ProcessCorpseObjectFeatureData: {
    CorpseInteractionBoneName: string;
    CorpseInteractionDistance: number;
  };
  ProcessCorpseSubjectFeatureData: {
    CorpseInteractionTimeout: number;
    CorpseInteractionApproachMaxPathLength: number;
    CorpseInteractionApproachLocationOffset: number;
    CorpseInteractionContextualAction: string;
  };
  Protection: Protection;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  RepairCostModifier: number;
  SID: string;
  SearchpointDetectorPrototypeSID: string;
  ShouldAvoidDangerPolygons: boolean;
  ShouldGenerateStashClues: boolean;
  ShouldHideUnequippedPrimaryWeapon: boolean;
  ShouldRenderTextureInsteadOfGroom: boolean;
  ShouldTriggerAnomalies: boolean;
  SimulateBattleParams: {
    SimulateCombatSpreadModifier: number;
    SimulateCombatDamageModifier: number;
  };
  SkeletalMeshTraceBoneMap: {
    Bone: EObjSkeletalMeshTraceBone;
    BoneName: string;
  }[];
  SleepParamsSID: string;
  SpaceRestrictorTag: string;
  SpawnPhantomParams: {
    PhantomBlueprint: string;
    PermanentEffects: string[];
    EffectsOnOverlap: string[];
    PhantomAttackAbilityTag: string;
  };
  SpendStaminaInSafeZone: boolean;
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
  StealthKillUnavailable: boolean;
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
  Text: string;
  ThreatPrototypeSID: string;
  TradePrototypeSID: string;
  TremblingWhileEmissionContextualAction: string;
  Type: EObjType;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VFXSize: number;
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
  VisionScannerPrototypeSID: string;
  VitalParams: VitalParams;
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
  WeatherParamsSID: string;
  WeightParamsSID: string;
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
  ZombieHearingSensorPrototypeSID: string;
  ZombieLayingIdleTime: number;
  ZombieVisionScannerPrototypeSID: string;
  npc_size: number;
}>;

export type StashPrototype = GetStructType<{
  CustomIconPath: string;
  ItemGenerators: {
    Rank: ERank;
    SmartLootParams: {
      AttachParams: { MaxPrice: number }[];
      ConsumablesParams: {
        ItemSetCount: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
        MaxSpawnChance: number;
        MinSpawnChance: number;
      }[];
      GrenadesParams: {
        ItemSetCount: number;
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
        MaxSpawnChance: number;
        MinSpawnChance: number;
      }[];
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
      PrimaryWeaponParams: {
        Items: {
          ItemPrototypeSID: string;
          MinCount: number;
          MaxCount: number;
          Weight: number;
          Chance: number;
        }[];
        MainWeaponAmmoCount: number;
        MaxSpawnChance: number;
        MinSpawnChance: number;
        PriorityCaliber: EAmmoCaliber;
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
    };
  }[];
  SID: string;
}>;

export type TradePrototype = GetStructType<{
  BuyDiscounts: { ConditionSID: string; Modifier: number }[];
  Money: number;
  RefreshConditionSID: string;
  SID: string;
  SellDiscounts: { ConditionSID: string; Modifier: number }[];
  TradeGenerators: {
    ConditionSID: string;
    ItemGeneratorPrototypeSID: string;
    BuyModifier: number;
    SellModifier: number;
    WeaponSellMinDurability: number;
    ArmorSellMinDurability: number;
    BuyLimitations: EItemType[];
  }[];
  TradeTimeLength: number;
  TradeTimeStart: number;
  bInfiniteMoney: boolean;
}>;

export type UpgradePrototype = GetStructType<{
  AttachPrototypeSIDs: string[];
  BaseCost: number;
  BlockingGlobalVariables: { GlobalVariableSID: string; Value: number }[];
  BlockingUpgradePrototypeSIDs: string[];
  ConnectionLines: EConnectionLineState[];
  DiscountCoefficient: number;
  EffectPrototypeSIDs: string[];
  HiddenWihoutItem: boolean;
  Hint: string;
  HorizontalPosition: number;
  ID: number;
  Icon: string;
  Image: string;
  InterchangeableUpgradePrototypeSIDs: string[];
  IsModification: boolean;
  LocalizationSID: string;
  RepairCostModifier: number;
  RequiredGlobalVariables: { GlobalVariableSID: string; Value: number }[];
  RequiredItemPrototypeSIDs: string[];
  RequiredUpgradePrototypeSIDs: string[];
  SID: string;
  Skills: string[];
  Text: string;
  UpgradeCancelSound: string;
  UpgradeModificationSound: string;
  UpgradeSound: string;
  UpgradeTargetPart: EUpgradeTargetPartType;
  VerticalPosition: EUpgradeVerticalPosition;
}>;

export type NPCWeaponSettingsPrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseDamage: number;
  BulletDropHeight: number;
  ChanceBleedingPerShot: string;
  CombatSynchronizationScore: { TokenTag: string; Score: string }[];
  DispersionRadius: number;
  DispersionRadiusMultiplierByDistanceCurve: string;
  DispersionRadiusZombieAddend: number;
  DistanceDropOffLength: number;
  DurabilityDamagePerShot: number;
  FireDistanceDropOff: number;
  MinBulletDistanceDamageModifier: number;
  SID: string;
  StaggerEffectPrototypeSID: string;
}>;

export type QuestNodePrototype = GetStructType<{
  AIThreatState: number;
  AKEventPath: string;
  AbilityPrototypeSID: string;
  AchievementSID: string;
  Activate: boolean;
  ActorBoneName: string;
  AddToPlayerStash: boolean;
  ApplyRestrictionType: EApplyRestrictionType;
  AssetsToLoad: string[];
  AttractionPointType: EAttractionPointType;
  AudioLocalizedAssetsToLoad: string[][];
  BehaviorType: EBehaviorType;
  BenchRuns: number;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CallPlayer: boolean;
  CallPlayerRadius: number;
  CameraHeight: number;
  CanBeInterrupted: boolean;
  CanBeTeleported: boolean;
  CanExitAnytime: boolean;
  ChangeValueMode: EChangeValueMode;
  CircleRadius: number;
  CollisionChannel: number;
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  ConsoleCommand: string;
  ContaineredQuestPrototypeSID: string;
  ContextualActionLookAtPlayerRange: number;
  ContextualActionRange: number;
  Continue: boolean;
  ContinueThroughRadio: boolean;
  ContinueWhileCombatComments: string;
  ContinueWhileMovingComments: string[];
  CustomRestPlaceSelection: boolean;
  CustomSleepPlaceSelection: boolean;
  DataLayerCombination: string;
  DataLayerName: string;
  DialogChainPrototypeSID: string;
  DialogMembers: string[];
  DialogObjectLocation: Location3Axis[];
  DialogToStart: string;
  DisableFlashlightControl: boolean;
  DisabledEvents: EDialogEventType[];
  Discovered: boolean;
  Duration: number;
  EffectLocation: Location3Axis;
  EffectPath: string;
  EffectPrototypeSID: string;
  EmissionPrototypeSID: string;
  EndHour: number;
  EnteringDuration: number;
  EquipItems: boolean;
  EquipmentItemSID: string;
  EquipmentTypeFilter: EMainHandEquipmentType;
  Event: EDialogEventType;
  EventType: EQuestEventType;
  ExcludeAllNodesInContainer: boolean;
  ExpectedItemsCount: number;
  Explored: boolean;
  Faction: string;
  FadeTime: number;
  FailureByCombat: boolean;
  FailureByEmission: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  FailureByPlayerKill: boolean;
  FailureByTargetLost: boolean;
  FailureByThreat: boolean;
  FinishBattleComments: string;
  FinishOnAKEvent: boolean;
  FirstTargetSID: string;
  FlashlightAction: EFlashlightAction;
  FollowStartRange: number;
  FollowStopRange: number;
  Force: boolean;
  ForceDespawn: boolean;
  ForceEmission: boolean;
  FullAmount: boolean;
  FullSquad: boolean;
  GlobalVariablePrototypeSID: string;
  GoalPriority: EGoalPriority;
  GoalTargetQuestGuid: string;
  HealingType: EHealingType;
  HideViewType: EHideViewType;
  HitProducer: string;
  HitReceiver: string;
  IdlePosition: Location3Axis;
  IgnoreAnomalyFields: boolean;
  IgnoreCombat: boolean;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreEnabledCheck: boolean;
  IgnoreRadiationFeilds: boolean;
  IgnoreThreat: boolean;
  ImagePath: string;
  ImmediatelyIdentifyEnemy: boolean;
  InGameHours: number;
  InGameMinutes: number;
  IncludeWoundedEvent: boolean;
  InfotopicLastPhrases: {
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  InitialPitch: number;
  InitialYaw: number;
  InteractableQuestGuid: string;
  IsComment: boolean;
  IsDataLayerEnabled: boolean;
  IsFinalVideo: boolean;
  ItemGeneratorSID: string;
  ItemPrototypeSID: string;
  ItemSID: string;
  ItemsCount: number;
  JournalAction: EJournalAction;
  JournalEntity: EJournalEntity;
  JournalQuestDescriptionIndex: number;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  LastPhrases: {
    FinishNode: boolean;
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  LaunchOnQuestStart: boolean;
  Launchers: {
    Excluding: boolean;
    Connections: { SID: string; Name: string }[];
  }[];
  LeaveAnomalyZoneComments: string;
  LinkedNodePrototypeSID: string;
  LoadingScreenType: ELoadingDestination;
  LocalizedSequences: string[];
  Location: string;
  LookAt: Location3Axis;
  LookAtActorFName: string;
  LookAtLocation: Location3Axis;
  LookAtPlaceholder: string;
  LoopSequence: boolean;
  MainQuest: boolean;
  MarkerDescription: string;
  MarkerSID: string;
  Markers: string;
  MasterAKEventForLoad: string;
  MeshGeneratorSID: string;
  MinimalReputationLevel: ERelationLevel;
  MoveFrom: string;
  MoveQuestItems: boolean;
  MoveTo: string;
  MoveToFailureRange: number;
  MoveToPath: string;
  MoveToPlayer: boolean;
  MoveToSuccessRange: number;
  MovementPose: EAIMovementPose;
  MovementType: EMovementBehaviour;
  NPCToStartDialog: number;
  NameSID: string;
  NavAreaClass: string;
  NavModifier: string;
  NewDescription: number;
  NewTechnicianSkill: string;
  NewTitle: number;
  NewZoneState: boolean;
  NodePrototypeVersion: number;
  NodeType: EQuestNodeType;
  NodesToCleanUpResults: string[];
  NotePrototypeSID: string;
  OutputPinNames: string[];
  OverrideDialogTopic: EOverrideDialogTopic;
  OverrideScenarioGroupSID: string;
  OwnedHub: string;
  PDATutorialNoteSID: string;
  Params: {
    ModifiedCharacterParam: EModifiedCharacterParam;
    ChangeValueMode: EChangeValueMode;
    IgnoreDamageType: EIgnoreDamageType;
    ChangeValue: number;
    Rank: ERank;
  }[];
  PatrolCycleCount: number;
  PatrolPlaceholderGUID: string;
  PauseEmission: boolean;
  PersonalRestriction: Record<string, ESpaceRestrictionType>;
  PinWeights: number[];
  PistolDurabilityPercent: number;
  PlayWhenReceived: boolean;
  PlayerLeavesWhileCombatComments: string[];
  PlayerLeavesWhileMovingComments: string[];
  PostEffectProcessorSID: string;
  PostProcessParamValue: number;
  PreblendSequence: boolean;
  PreblendTime: number;
  PresetName: string;
  PrimaryWeaponDurabilityPercent: number;
  Priority: number;
  ProfileCsv: boolean;
  QuestItem: boolean;
  QuestItemGeneratorSID: string;
  QuestSID: string;
  Radius: number;
  ReachAnomalyZoneComments: string;
  ReachPointComments: {
    ReachPointComment: string;
    ReachPointLocation: Location3Axis;
    DialogMembers: string;
  }[];
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  ReactType: ETriggerReact;
  ReactionTime: number;
  RelationshipValue: number;
  Remove: boolean;
  Repeatable: boolean;
  RepeatableStayAnimation: boolean;
  ReplaceInventory: boolean;
  RequiredInputs: string[];
  RequiredSquadMembers: ERequiredSquadMembers;
  RestLocation: Location3Axis;
  RestrictDeadBodyDespawn: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDialogInteractions: boolean;
  RestrictedFaction: Record<Faction, ESpaceRestrictionType>;
  RotationAfterMoveTo: LocationAndRotation;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  SID: string;
  SaveTypes: ESaveType[];
  ScreenText: string;
  SecondTargetSID: string;
  SecondaryWeaponDurabilityPercent: number;
  SeekPlayer: boolean;
  SelectedDaysOfWeek: number;
  SequentialAbilityModificationMode: EModifyAbilitySequenceQuestNodeMode;
  SequentialAbilityPriority: number;
  SetFactionRelationshipAsPersonal: boolean;
  SetQuestActive: boolean;
  ShootTargetLocation: Location3Axis;
  ShootingPosition: Location3Axis;
  ShotsQueueCount: number;
  ShouldBeKilled: string;
  ShouldBlendViaFade: boolean;
  ShouldLockPersonalRelationship: boolean;
  ShouldTargetPistol: boolean;
  ShouldTargetPrimaryWeapon: boolean;
  ShouldTargetSecondaryWeapon: boolean;
  SignalReceiverGuid: string;
  SignalSenderGuid: string;
  SimulateBattle: boolean;
  SoundLocation: Location3Axis;
  SoundPath: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  SpecificItemDespawn: boolean;
  Squad: string;
  StageID: EEmissionStage;
  StartBattleComments: string;
  StartDelay: number;
  StartForcedDialog: boolean;
  StartHour: number;
  StartPointID: number;
  StartQuest: boolean;
  StayAnimation: string;
  StayContextualAction: string;
  TalkThroughRadio: boolean[];
  TargetFaction: string;
  TargetLocation: Location3Axis;
  TargetLocations: Location3Axis[];
  TargetMoneyAmount: number;
  TargetQuestGuid: string;
  TargetQuestGuids: string[];
  TargetRank: ERank;
  TeleportLocationAndRotation: LocationAndRotation;
  TeleportType: EGSCTeleportType;
  ThreatSensor: number;
  ThreatsReactRange: number;
  TimeToStartNextNodeBeforeEnd: number;
  TimeToUseAbility: number;
  TimerRate: number;
  TrackBeforeActive: boolean;
  TransitionTime: number;
  TriggerAction: number;
  TriggerQuestGuid: string;
  TutorialHeadLocalizedSID: string;
  TutorialSID: string;
  TutorialTextLocalizedSID: string;
  UpgradePrototypeSID: string;
  UpgradeSIDs: string[];
  UseAbilityMovementType: EMovementBehaviour;
  UseAbilityPrototypeSID: string;
  UseAbilityTarget: string;
  UseDefaultEmissionPrototype: boolean;
  UseDeltaValue: boolean;
  UsePreset: boolean;
  UseSecondaryWeapon: boolean;
  VariableValue: any;
  VideoAssetPath: string;
  VolumeGuid: string;
  WaitAllDialogEndingsToFinish: boolean;
  WaitingPlayer: boolean;
  WaitingTime: number;
  WeaponState: EWeaponState;
  Weather: EWeather;
  WidgetType: number;
  WithEquipped: boolean;
  WithInventory: boolean;
  WoundedOn: boolean;
  bTriggersByAnybody: boolean;
}>;

export type MeshPrototype = GetStructType<{
  ID: number;
  MaterialPath: string;
  MeshPath: string;
  MeshType: EMeshSubType;
  SID: string;
}>;

export type WeaponAttributesPrototype = GetStructType<{
  AnimBlueprint: string;
  DefaultWeaponSettingsSID: string;
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
  SID: string;
}>;

export type CharacterWeaponSettingsPrototype = GetStructType<{
  AccuracyUI: number;
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseComfort: number;
  BaseDamage: number;
  BulletDropHeight: number;
  ChanceBleedingPerShot: string;
  CoverPiercing: number;
  DamageUI: number;
  DispersionRadius: number;
  DistanceDropOffLength: number;
  DurabilityDamagePerShot: number;
  EffectiveFireDistanceMax: number;
  EffectiveFireDistanceMin: number;
  FireDistanceDropOff: number;
  FireLoudness: number;
  HandlingUI: number;
  MinBulletDistanceArmorPiercingModifier: number;
  MinBulletDistanceDamageModifier: number;
  RangeUI: number;
  RateOfFireUI: number;
  SID: string;
}>;

type IItemPrototype = {
  BaseDurability: number;
  ConsumeOnUse: boolean;
  Cost: number;
  DestroyOnPickup: boolean;
  EffectOnPickPrototypeSIDs: string[];
  EffectPrototypeSIDs: string[];
  EffectsDisplayTypes: EEffectDisplayType[];
  FittingWeaponsSIDs: string[];
  HasPhysics: boolean;
  Hint: string;
  Icon: string;
  IconBig: string;
  IgnoreEquippedWeight: boolean;
  Invisible: boolean;
  InvisibleInPlayerInventory: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  MaxStackCount: number;
  MeshPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  SectionPositions: string[];
  ShouldShowEffects: boolean[];
  SortGroup: ESortGroup;
  SortPriority: number;
  Type: EItemType;
  Usable: boolean;
  Weight: number;
};

export type ItemPrototype = GetStructType<IItemPrototype>;

interface IAmmoPrototype extends IItemPrototype {
  AimDispersionMod: number;
  AmmoPackCount: number;
  AmmoType: EAmmoType;
  ArmorDamageMod: number;
  ArmorPiercingMod: number;
  BleedingMod: number;
  Caliber: EAmmoCaliber;
  CaliberSoundSwitch: string;
  CoverPiercingMod: number;
  CrosshairMod: ECrosshairType;
  DamageMod: number;
  DamageSource: EDamageSource;
  DispersionMod: number;
  FPShellFXPath: string;
  FlatnessMod: number;
  FractionCount: number;
  ImpulseToObjectsMod: number;
  OffsetAimDispersionMod: number;
  RecoilMod: number;
  ShellSoundEventPath: string;
  TPShellFXPath: string;
  WeaponExhaustionMod: number;
}

export type AmmoPrototype = GetStructType<IAmmoPrototype>;

interface IArtifactPrototype extends IItemPrototype {
  AnomalyDamageDeflections: {
    AnomalyType: EAnomalyType;
    ChargeQuantity: number;
    DamageDeflection: number;
    TimeToReduceCharge: number;
  }[];
  AnomalyElementType: EAnomalyElementType;
  ArchiartifactType: EArchiartifactType;
  ArtifactSpawn: boolean;
  ArtifactType: EArtifactType;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  ChargeFullDecreaseSound: string;
  ChargeFullIncreaseSound: string;
  ChargeThreshold: number;
  ChargingSound: string;
  ChargingSpeed: number;
  DamageToStaminaCoefficient: number;
  DamageToWeightCoefficient: number;
  DetectorRequired: boolean;
  DisableCollisionWhenHide: boolean;
  EffectsDuration: number;
  FakeArtifactDissolveSound: string;
  FakeArtifactDissolveVFX: string;
  FakeArtifactDistortionSound: string;
  FakeArtifactDistortionVFX: string;
  FakeArtifactHaloVFX: string;
  InactiveIcon: string;
  IsQuestItem: boolean;
  JumpAmount: number;
  JumpDelay: number;
  JumpDistance: number;
  JumpForce: number;
  JumpHeight: number;
  JumpSeriesDelay: number;
  JumpSound: string;
  JumpSpeedCoef: number;
  LifeTime: number;
  LifeTimeDependant: boolean;
  LocalizationSID: string;
  MaxCharge: number;
  MaxWeight: number;
  MinWeight: number;
  MinimalDrunkenness: number;
  NegativeEffectPrototypeSIDs: string[];
  ParticleOnImpact: string;
  ParticleOnShow: string;
  ParticleStateTransitionFadeIn: string;
  ParticleStateTransitionFadeInDelay: number;
  ParticleStateTransitionFadeOut: string;
  ParticleStateTransitionFadeOutDelay: number;
  Persistent: boolean;
  PlayerDistance: number;
  PositiveEffectPrototypeSIDs: string[];
  Radius: number;
  Rarity: EArtifactRarity;
  ReturnDistanceValue: number;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StateTransitionDelay: number;
  Strafe: boolean;
  ViewOffset: Location3Axis;
  WakeUpEffectSIDs: string[];
  WeightDecreaseAmount: number;
  WeightDecreaseDelay: number;
  WeightDecreaseRate: number;
  bUseCharge: boolean;
}

export type ArtifactPrototype = GetStructType<IArtifactPrototype>;

interface IArmorPrototype extends IItemPrototype {
  ArmorSoundType: string;
  ArtifactSlots: number;
  IncreaseSpeedCoef: number;
  LocalizationSID: string;
  MeshGenerator: { MeshGeneratorPrototypeSID: string }[];
  NoiseCoef: number;
  NpcMeshGenerator: { MeshGeneratorPrototypeSID: string }[];
  PreinstalledUpgrades: string[];
  Protection: Protection;
  ProtectionNPC: Protection;
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
  StaggerEffectPrototypeSID: string;
  UpgradePrototypeSIDs: string[];
  VoiceModulatorSID: string;
  bBlockHead: boolean;
  bPreventFromLimping: boolean;
}

export type ArmorPrototype = GetStructType<IArmorPrototype>;

interface IBlueprintPrototype extends IItemPrototype {
  IsQuestItemPrototype: boolean;
  LocalizationSID: string;
}

export type BlueprintPrototype = GetStructType<IBlueprintPrototype>;

interface IAttachPrototype extends IItemPrototype {
  AttachInstallSound: string;
  AttachType: EAttachType;
  AttachUninstallSound: string;
  CanHoldBreath: boolean;
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
  HideOnAttachPrototypeIDInstalled: string[];
  InventoryActionTime: number;
  IronSight: { MeshArray: { Socket: string }[] };
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
  LayerImagePriority: number;
  LocalizationSID: string;
  Magazine: {
    IsTwinMagazine: boolean;
    MaxAmmo: number;
    BindBulletsToAttach: boolean;
    HasMultipleMeshes: boolean;
    MeshArray: { MagazineMeshType: EMagazineMeshType }[];
  };
  MeshInWorldPrototypeSID: string;
  Scope: {
    ZoomCoefficients: number[];
    BaseZoomCoefficientIndex: number;
    ChangeZoomScopeSound: string;
    bOverrideAimingEffects: boolean;
    AimingEffects: { PlayerOnlyEffects: string[] };
    AimingCutoutRadius: number;
    AimingCutoutThreshold: number;
  };
  ShootingAttach: { WeaponPrototypeSID: string };
  Slot: EAttachSlot;
  WeaponFlashlight: { FlashlightPrototypeID: number };
  bPermanent: boolean;
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
  AnimBlueprint: string;
  AnomalyDetectionRadius: number;
  AnomalyTexturePaths: {
    AnomalyElementType: EAnomalyElementType;
    SpriteTexturePath: string;
  }[];
  ArtifactSignalCurve: string;
  ArtifactTexturePath: string;
  CanvasMaterialPath: string;
  DangerLevelSoundParameter: string;
  DefaultArtifactRadius: number;
  DetectorType: EDetectorType;
  DetectorWorkCurve: string;
  DetectorWorkRadius: number;
  DetectorWorkSFX: string;
  DisplayUpdateInterval: number;
  ExclusionAnomalyList: string[];
  ExclusionArtifactList: string[];
  MeshInWorldPrototypeSID: string;
  MinDetectRadius: number;
  RadiusDivider: number;
  RenderTargetResolution: number;
  ShowArtifactRadius: number;
  SonarRadius: number;
  SpriteMaterialPath: string;
}

export type DetectorPrototype = GetStructType<IDetectorPrototype>;

interface IGDItemPrototype extends IItemPrototype {
  IsQuestItem: boolean;
  IsQuestItemPrototype: boolean;
  LocalizationSID: string;
}

export type GDItemPrototype = GetStructType<IGDItemPrototype>;

interface IGrenadePrototype extends IItemPrototype {
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseComfort: number;
  Blueprint: string;
  CrosshairType: ECrosshairType;
  EffectApplyDistanceCoefficient: number;
  ExplosionPrototypeSID: string;
  GrenadeAnimBlueprint: string;
  GrenadeExplosionHandLethal: `${number}%`;
  GrenadeExplosionHandNonlethal: `${number}%`;
  GrenadeExplosionLethalThreshold: `${number}%`;
  GrenadeType: EGrenadeType;
  ImpulseStrength: number;
  InnerDamage: number;
  MeshInWorldPrototypeSID: string;
  NPCWeaponAttributes: string;
  OuterDamage: number;
  OuterWoundingRadius: number;
  RollVelocityThreshold: number;
  SafeTimeAfterThrow: number;
  SkeletalMeshPrototypeSID: string;
  StaticMeshPrototypeSID: string;
  TimeToExplode: number;
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
  ActiveEffectSIDs: string[];
  Icon1x1: string;
  LocalizationSID: string;
  NPCGogglesPrototypeSID: string;
  TurnOffAudioEvent: string;
  TurnOnAudioEvent: string;
}

export type NightVisionGogglesPrototype =
  GetStructType<INightVisionGogglesPrototype>;

interface IQuestItemPrototype extends IItemPrototype {
  AlternativeEffectPrototypeSIDs: string[];
  ArtifactTypeSwitch: string;
  Blueprint: string;
  DetectorRequired: boolean;
  Icon1x1: string;
  IsQuestItem: boolean;
  IsQuestItemPrototype: boolean;
  JumpAmount: number;
  JumpDelay: number;
  JumpDistance: number;
  JumpForce: number;
  JumpHeight: number;
  JumpSeriesDelay: number;
  JumpSpeedCoef: number;
  LandingForce: number;
  LifeTime: number;
  LocalizationSID: string;
  MeshInWorldPrototypeSID: string;
  MeshPath: string;
  Name: string;
  PlayerDistance: number;
  RequireWeight: boolean;
  ReturnDistanceValue: number;
  ShouldTriggerAnomalies: boolean;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StaticMeshPrototypeSID: string;
  Strafe: boolean;
}

export type QuestItemPrototype = GetStructType<IQuestItemPrototype>;

interface IWeaponPrototype extends IItemPrototype {
  GeneralWeaponSetup: string;
  IsQuestItem: boolean;
  LocalizationSID: string;
  MeleeWeaponSID: string;
  MeshInWorldPrototypeSID: string;
  NPCWeaponAttributes: string;
  PlayerWeaponAttributes: string;
  PreinstalledUpgrades: string[];
  SectionSettings: {
    BottomPosition: number;
    LeftPosition: number;
    RightPoition: number;
    SectionIsEnabled: boolean;
    TopPosition: number;
    UpgradeLineDirection: ELineDirection;
    UpgradeTargetPartType: EUpgradeTargetPartType;
  }[];
}

export type WeaponPrototype = GetStructType<IWeaponPrototype>;

export type SpawnActorPrototype = GetStructType<{
  ALifeLairsSearchRadius: number;
  ALifeScenariosGroupSID: string;
  ActiveLair: boolean;
  AllowFactions: string;
  AllowNightVisionForQuestNPC: boolean;
  AllowSpawnInShelter: boolean;
  AllowSpawnOnIsolatedNavMesh: boolean;
  AllowedUserRestriction: string;
  AmmoCount: number;
  AnomaliesPresets: string[][];
  AttachReferences: string;
  AttachmentSID: string;
  AvrAgentDiameter: number;
  BubbleInitialLocation: Location3Axis;
  CanAttack: boolean;
  CanBeCaptured: boolean;
  CanBeWounded: boolean;
  CanDefend: boolean;
  CanInteractWithPlayer: boolean;
  CenterLocationRotation: {
    Rotation: Rotation;
    Vector: Location3Axis;
  }[];
  ClickerAnomalyArtifactJumpPositions: string;
  CloseDoorRadius: number;
  ClueVariablePrototypeSID: string;
  CollisionSize: Location3Axis;
  CombatTacticsOverride: ECombatTactics;
  CompoundAnimationReferences: string;
  ContextualActionAccessibility: number;
  ContextualActionPreconditions: string;
  ContextualActionSID: string;
  CorpsePrototypeSID: string;
  CorpseStashSID: string;
  DLC: string;
  DamageMultiplier: number;
  DataLayers: string[];
  DeadPose: string;
  DecalsMaterialSID: string;
  DisableCollision: boolean;
  DisableDespawn: boolean;
  DisableDrag: boolean;
  DisableLoot: boolean;
  DisablePhysics: boolean;
  DisablePhysicsAndCollision: boolean;
  DisableRagdollForQuestProtection: boolean;
  DisableSpawnAndStrafeInThisAnomaly: boolean;
  Durability: number;
  EffectPrototypeSIDs: string[];
  ElectroBakedData: {
    ElectroNormalVector: string;
    ElectroTraceEndPoint: string;
    ElectroTraceStartPoint: string;
  }[];
  EnableSmartLootIfPossible: boolean;
  FogDensity: number;
  FogDensitySecond: number;
  FogDensitySecondFogData: number;
  FreeformTriggerHeight: number;
  FreeformTriggerVertices: Location2Axis[];
  GeigerCurve: string;
  GeigerRadiationIntensity: number;
  GeigerTriggerOffset: number;
  GlobalOnlineModifierDistance: number;
  GlobalOtherOnlineModifierDistance: number;
  HP: number;
  HubOwnerGuid: string;
  IgnoreCollisionActors: string;
  InLocationRotation: {
    Rotation: Rotation;
    Vector: Location3Axis;
  }[][];
  InfiniteRespawn: boolean;
  InitialInhabitantFaction: string;
  IsLootedOnDifficulties: string;
  ItemGeneratorSettings: {
    ItemGenerators: { PrototypeSID: string }[];
    PlayerRank: ERank;
  }[];
  ItemSID: string;
  Items: {
    DisablePhysicsAndCollision: boolean;
    MaxAmount: number;
    MinAmount: number;
    PrototypeSID: string;
  }[];
  KillRestrictedFactions: boolean;
  LairPreferredSpawnType: ELairPreferredSpawnType;
  LairPrototypeSID: string;
  LairType: ELairType;
  LevelName: string;
  LightningBallLiveBoxExtent: Location3Axis;
  LightningBallNavigationPoints: {
    LightningBallLocation: string[];
    LightningBallNeighborLocations: number[];
    LightningBallPatrolPoint: boolean;
  }[];
  LightningBallPathUsage: boolean;
  LocationSID: string;
  LockReceivers: string[];
  MainInfoTopicOwner: string;
  MarkerSID: string;
  MaxRespawnCount: number;
  MaxSpawnRank: ERank;
  MaximumCount: number;
  MeshPath: string;
  MinPatrolNeed: number;
  MinSpawnRank: ERank;
  MoveSpeedMultiplier: number;
  NavModifierVolume: string;
  NavModifierVolumes: string[];
  NodeCreationVersion: number;
  NodePrototypeVersion: number;
  OnlineModifierDistance: number;
  OverrideArtifactSpawnLocation: string;
  OverrideFaction: Faction;
  OverrideRank: boolean;
  PackOfItemsPrototypeSID: string;
  Path: { Location: string }[];
  PatrolPoints: {
    ContextualActionSearchRadius: number;
    Location: string;
    PatrolPointLinks: { DestinationPointIndex: number; Weight: number }[];
    StayTimeMax: number;
    StayTimeMin: number;
    bIsEndPoint: boolean;
  }[];
  PillowAnomalyBiomeType: EPillowAnomalyBiomeType;
  PlaceholderActorGuid: string;
  PlaceholderMapPath: string;
  PositionX: number;
  PositionY: number;
  PositionZ: number;
  PossibleInhabitantFactions: {
    Faction: string;
    SpawnSettingsPerPlayerRanks: Record<
      Rank,
      {
        InitialSpawnQuantityPercent: number;
        InitialSpawnQuantityRespawnTimeSeconds: number;
        MaxSpawnQuantity: number;
        MaxSpawnQuantityRespawnTimeSeconds: number;
        SpawnSettingsPerArchetypes: Record<
          Faction,
          { MinQuantityPerArchetype: number; SpawnWeight: number }
        >;
        WipeRespawnTimeoutSeconds: number;
      }
    >;
  }[];
  PostEffectProcessorSID: string;
  PostProcessConfig: string;
  PostProcessRadiationCycleSpeed: number;
  PostProcessRadiationIntensity: number;
  Priority: number;
  PsyNPCType: EPsyNPCType;
  RadiationCycleSpeedPostEffectSID: string;
  RadiationPerSecondValue: number;
  Radioactivity: ERadiationPreset;
  RadioactivityValue: number;
  Rank: ERank;
  RespawnMembers: boolean;
  RespawnOnNPCCount: number;
  RespawnPoints: string[];
  RestrictedFactions: string[];
  RestrictionRadius: number;
  RotatorAnglePitch: number;
  RotatorAngleRoll: number;
  RotatorAngleYaw: number;
  SID: string;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  ScenariosGroupPriority: EALifeGroupPriorityType;
  ShouldTraceOnOverlap: boolean;
  ShowOnCompass: boolean;
  ShowOnMap: boolean;
  SignalReceivers: { DestroyReceiver: { Guid: string } };
  SignalSenders: { DestroySender: { Guid: string; Signals: string[] } };
  SimplifiedOverlap: boolean;
  SpawnInRadius: number;
  SpawnOnStart: boolean;
  SpawnType: ESpawnType;
  SpawnedGenericMembers: {
    SpawnedPrototypeSID: string;
    SpawnedSquadMembersCount: number;
  }[];
  SpawnedPrototypeSID: string;
  SquadMembersQuestSIDs: string;
  StartPresetID: number;
  StartWaitTime: number;
  StashPrototypeSID: string;
  TeleportGroupSID: string;
  TextAboveActor: string;
  TileOffsetIndex: number;
  TriggerShape: ETriggerShape;
  UnlockDoorTime: number;
  UnlockReceivers: string[];
  UpgradeSID: string;
  VolumeDailySchedulePresetSID: string;
  VolumeSID: string;
  Volumes: {
    NumOfContextualActions: number;
    RestrictorVolume: string;
    ShowMarker: boolean;
    SpaceRestrictorOffset: number;
    Volume: string;
  }[] & {
    LairCoreVolumes: string[];
    LairTerritoryVolumes: string[];
    NavModifierVolumes: string[];
  };
  VolumetricCoverRestrictions: { bEnabled: boolean; Volumes: string };
  bDisableTickForWeatherController: boolean;
  bForceCodePhysicsDisabled: boolean;
  bForceWeather: boolean;
  bRandomChancesForSeparateItems: boolean;
  bRestrictorVolumeEnabled: boolean;
  bUseCustomLocation: boolean;
  bWakeUpOnStart: boolean;
}>;

type Faction = string;

export type RelationPrototype = GetStructType<{
  CharacterReactions: ({ Type: ERelationChangingEvent } & {
    [key in `${Reactions}->${Reactions}`]: number;
  })[];
  FactionReactions: ({ Type: ERelationChangingEvent } & {
    [key in `${Reactions}->${Reactions}`]: number;
  })[];
  FactionRollbackCooldowns: Record<Faction, number>;
  Factions: Record<Faction, Faction>;
  FactionsInvolvedDistance: number;
  MinRelationLevelToTrade: ERelationLevel;
  NegativeReactionsExcludedFactions: `${Faction}<->${Faction}`[];
  PositiveReactionsExcludedFactions: `${Faction}<->${Faction}`[];
  RelationLevelRanges: { start: number; end: number }[];
  RelationVersion: number;
  Relations: { [key in `${Faction}<->${Faction}`]: number };
  ReputationRollbackCooldown: number;
  ReputationRollbackRadius: number;
  SID: string;
}>;

export type BarbedWirePrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BleedingChance: number;
  BleedingValue: number;
  Damage: number;
  DamageDelay: number;
  ID: number;
  MovementSpeedDegradeDelay: number;
  NegativeEffectPrototypeSIDs: string[];
  SID: string;
  bOverlappable: boolean;
}>;

export type DialogPoolPrototype = GetStructType<{
  AIThreatState: number;
  AKEventPath: string;
  ActorBoneName: string;
  AddToPlayerStash: boolean;
  ApplyRestrictionType: EApplyRestrictionType;
  AssetsToLoad: string[];
  AttractionPointType: EAttractionPointType;
  AudioLocalizedAssetsToLoad: string[][];
  AvailableDialogs: string[];
  BehaviorType: EBehaviorType;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CallPlayer: boolean;
  CallPlayerRadius: number;
  CanBeInterrupted: boolean;
  CanBeTeleported: boolean;
  CanExitAnytime: boolean;
  ChangeValueMode: EChangeValueMode;
  CollisionChannel: number;
  Conditions: GetStructType<Condition[][]> & {
    ConditionCheckType: EConditionCheckType;
  };
  ContaineredQuestPrototypeSID: string;
  Continue: boolean;
  ContinueThroughRadio: boolean;
  DLC: string;
  DataLayerCombination: string;
  DataLayerName: string;
  DialogChainPrototypeSID: string;
  DialogEventType: EDialogEventType;
  DialogMemberRestrictions: {
    ExcludedFactions: { Faction: Faction };
    ExcludedObjPrototypes: { NPCPrototypeSID: string };
    FactionRestrictions: { Faction: Faction };
    ObjPrototypeRestrictions: { NPCPrototypeSID: string };
  };
  DialogMembers: string[];
  DialogObjectLocation: Location3Axis[];
  Duration: number;
  EnteringDuration: number;
  EquipItems: boolean;
  EquipmentItemSID: string;
  EquipmentTypeFilter: EMainHandEquipmentType;
  EventType: EQuestEventType;
  ExcludeAllNodesInContainer: boolean;
  ExpectedItemsCount: number;
  Explored: boolean;
  FailureByCombat: boolean;
  FailureByEmission: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  FailureByPlayerKill: boolean;
  FailureByTargetLost: boolean;
  FailureByThreat: boolean;
  FinishOnAKEvent: boolean;
  FirstTargetSID: string;
  Force: boolean;
  GlobalVariablePrototypeSID: string;
  GoalPriority: EGoalPriority;
  HideViewType: EHideViewType;
  HitProducer: string;
  HitReceiver: string;
  IgnoreAnomalyFields: boolean;
  IgnoreCombat: boolean;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreRadiationFeilds: boolean;
  IgnoreThreat: boolean;
  ImmediatelyIdentifyEnemy: boolean;
  InGameHours: number;
  InGameMinutes: number;
  IsComment: boolean;
  IsDataLayerEnabled: boolean;
  IsFinalVideo: boolean;
  ItemGeneratorSID: string;
  ItemPrototypeSID: string;
  ItemSID: string;
  ItemsCount: number;
  JournalAction: EJournalAction;
  JournalEntity: EJournalEntity;
  JournalQuestDescriptionIndex: number;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  LastPhrases: {
    FinishNode: boolean;
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  LaunchOnQuestStart: boolean;
  Launchers: {
    Excluding: boolean;
    Connections: { SID: string; Name: string }[];
  }[];
  LocalizedSequences: string[];
  LookAtActorFName: string;
  LookAtLocation: Location3Axis;
  LoopSequence: boolean;
  MarkerSID: string;
  Markers: string;
  MasterAKEventForLoad: string;
  MoveToFailureRange: number;
  MoveToPath: string;
  MoveToSuccessRange: number;
  MovementType: EMovementBehaviour;
  NPCToStartDialog: number;
  NewZoneState: boolean;
  NodePrototypeVersion: number;
  NodeType: EQuestNodeType;
  NotePrototypeSID: string;
  OptionalMembersCount: number;
  OutputPinNames: string[];
  OverrideDialogTopic: EOverrideDialogTopic;
  OverrideScenarioGroupSID: string;
  Params: {
    ModifiedCharacterParam: EModifiedCharacterParam;
    ChangeValueMode: EChangeValueMode;
    ChangeValue: number;
  }[];
  PauseEmission: boolean;
  PlayWhenReceived: boolean;
  PreblendSequence: boolean;
  PreblendTime: number;
  PresetName: string;
  Priority: number;
  QuestItem: boolean;
  QuestSID: string;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  ReactType: ETriggerReact;
  ReactionTime: number;
  RelationshipValue: number;
  Repeatable: boolean;
  ReplaceInventory: boolean;
  RequiredMembersCount: number;
  RequiredSquadMembers: ERequiredSquadMembers;
  RequiresGroup: boolean;
  RestrictDeadBodyDespawn: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDialogInteractions: boolean;
  RotationAfterMoveTo: LocationAndRotation;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  SID: string;
  SecondTargetSID: string;
  SeekPlayer: boolean;
  SetFactionRelationshipAsPersonal: boolean;
  SetQuestActive: boolean;
  ShootTargetLocation: Location3Axis;
  ShootingPosition: Location3Axis;
  ShotsQueueCount: number;
  ShouldBlendViaFade: boolean;
  ShouldLockPersonalRelationship: boolean;
  SignalReceiverGuid: string;
  SignalSenderGuid: string;
  SimulateBattle: boolean;
  SoundLocation: Location3Axis;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  SpecificItemDespawn: boolean;
  StartDelay: number;
  StartForcedDialog: boolean;
  StayContextualAction: string;
  TalkThroughRadio: boolean[];
  TargetQuestGuid: string;
  TargetQuestGuids: string[];
  TeleportLocationAndRotation: LocationAndRotation;
  TeleportType: EGSCTeleportType;
  ThreatsReactRange: number;
  TimeToStartNextNodeBeforeEnd: number;
  TrackBeforeActive: boolean;
  TriggerAction: number;
  TriggerQuestGuid: string;
  UseDeltaValue: boolean;
  UsePreset: boolean;
  UseSecondaryWeapon: boolean;
  VariableValue: any;
  VideoAssetPath: string;
  VolumeGuid: number;
  WaitAllDialogEndingsToFinish: boolean;
  WeaponState: EWeaponState;
  Weather: EWeather;
  WithEquipped: boolean;
  bTriggersByAnybody: boolean;
}>;

export type Condition = GetStructType<{
  BoolValue: boolean;
  ChangeValueMode: EChangeValueMode;
  CompletedNodeLauncherNames: never[];
  ConditionComparance: EConditionComparance;
  ConditionType: EQuestConditionType;
  DialogMemberIndex: number;
  EmissionPrototypeSID: string;
  Equipment: EMainHandEquipmentType;
  Faction: string;
  GlobalVariablePrototypeSID: string;
  IncludePartialOverload: boolean;
  ItemPrototypeSID: Param;
  ItemsCount: Param;
  JournalEntity: EJournalEntity;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  JournalState: EJournalState;
  LinkedNodePrototypeSID: string;
  Money: number | Param;
  NodeState: EQuestNodeState;
  NumericValue: number;
  PointToLookAt: Location3Axis;
  RandomProbability: number;
  Rank: ERank;
  ReactType: ETriggerReact;
  Relationships: ERelationLevel;
  RequiredSquadMembers: ERequiredSquadMembers;
  TargetCharacter: string;
  TargetContextualActionPlaceholder: string;
  TargetItemContainer: string;
  TargetNPC: string;
  TargetNode: string;
  TargetPlaceholder: string;
  TargetPoint: Location3Axis;
  ThreatAwareness: EThreatAwareness;
  Trigger: string;
  VariableValue: any;
  WithEquipped: boolean;
  WithInventory: boolean;
  bTriggersByAnybody: boolean;
}>;

export type Location2Axis = GetStructType<{ X: number; Y: number }>;

export type Location3Axis = Location2Axis & GetStructType<{ Z: number }>;

export type Rotation = GetStructType<{
  Pitch: number;
  Roll: number;
  Yaw: number;
}>;
export type LocationAndRotation = Location3Axis & Rotation;

export type Param = GetStructType<{
  VariableType: EGlobalVariableType;
  VariableValue: any;
}>;

export type Protection = GetStructType<{
  Burn: number;
  ChemicalBurn: number;
  Fall: number;
  PSY: number;
  Radiation: number;
  Shock: number;
  Strike: number;
}>;

export type MovementParams = GetStructType<{
  AimLookUpCoef: number;
  AimSpeedCoef: number;
  AimTurnCoef: number;
  AirControlCoef: number;
  BaseLookUpRate: number;
  BaseTurnRate: number;
  CanDash: boolean;
  ClimbSpeedCoef: number;
  CrouchSpeed: number;
  JumpSpeedCoef: number;
  LimpSpeedCoef: number;
  LowCrouchSpeed: number;
  MaxSlowdownValue: number;
  MoveBackCrouchCoef: number;
  MoveBackLowCrouchCoef: number;
  MovementSpeedCoef: number;
  RunBackCoef: number;
  RunDiagonalBackCoef: number;
  RunSpeed: number;
  SprintSpeed: number;
  StaggerAngle: number;
  WalkBackCoef: number;
  WalkDiagonalBackCoef: number;
  WalkSpeed: number;
  WalkTransitionCoef: number;
}>;

export type PossibleItem = GetStructType<{
  AmmoMaxCount: number;
  AmmoMinCount: number;
  Chance: number;
  ItemGeneratorPrototypeSID: string;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Weight: number;
  bRequireWeapon: boolean;
}>;

export type ItemGenerator = GetStructType<{
  Category: EItemGenerationCategory;
  Diff: EGameDifficulty;
  PlayerRank: ERank;
  PossibleItems: PossibleItem[];
  RefreshTime: string;
  ReputationThreshold: number;
  bAllowSameCategoryGeneration: boolean;
}>;

export type VitalParams = GetStructType<{
  DegenBleeding: number;
  DegenDrunknessPoints: number;
  DegenPsyPoints: number;
  DegenRadiation: number;
  DegenSuppressionDelayTimeSeconds: number;
  DegenSuppressionPoints: number;
  MaxBleeding: number;
  MaxDrunknessPoints: number;
  MaxFP: number;
  MaxHP: number;
  MaxHungerPoints: number;
  MaxOverDrunknessPoints: number;
  MaxRadiation: number;
  MaxSP: number;
  MaxSleepinessPoints: number;
  MaxSuppressionPoints: number;
  MaxThirstPoints: number;
  RegenFP: number;
  RegenHP: number;
  RegenHPDelayTimeSeconds: number;
  RegenHealthModifier: number;
  RegenHungerPoints: number;
  RegenPoppyFieldSleepiness: number;
  RegenSP: number;
  RegenSleepinessPoints: string;
  RegenThirstPoints: number;
  StaminaDisableThresholds: {
    RegenerationDelay: number;
    StateTags: EStateTag[];
    Threshold: number;
  }[];
}>;

export type DialogChainPrototype = GetStructType<{
  CanBeInterrupted: boolean;
  ContinueAfterInterrupt: boolean;
  DLC: string;
  DialogMembers: { DialogMemberName: string; OptionalMember: boolean }[];
  DialogOnTheGo: boolean;
  IsInteractive: boolean;
  IsPCDialogMember: boolean;
  SID: string;
  StartingDialogPrototypeSID: string;
}>;

export type MeshGeneratorPrototype = GetStructType<{
  Attachments: Record<
    string | `${number}`,
    { Attaches: { BodyMeshSID: string; Weight: number }[]; SlotName: string }
  >;
  CustomData: { MaterialGroup: string; Variations: Variation[] }[];
  Groom: { CategoryName: string; Variations: Variation[] }[];
  Materials: { MaterialGroup: string; Variations: Variation[] }[];
  MergedMesh: string;
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type Variation = { VariationIndex: number; Weight: number };

export type LairPrototype = GetStructType<{
  Preset: {
    ALifeLairsSearchRadius: number;
    GameTimeOfflineToRerollLairData: number;
    InitialInhabitantFaction: string;
    IsALifePoint: boolean;
    LairType: ELairType;
    PossibleInhabitantFactions: Record<
      Faction,
      {
        Faction: Faction;
        SpawnSettingsPerPlayerRanks: Record<
          Rank,
          {
            InitialSpawnQuantityPercent: number;
            InitialSpawnQuantityRespawnTimeSeconds: number;
            MaxSpawnQuantity: number;
            MaxSpawnQuantityRespawnTimeSeconds: number;
            SpawnSettingsPerArchetypes: Record<
              Faction,
              { MinQuantityPerArchetype: number; SpawnWeight: number }
            >;
            WipeRespawnTimeoutSeconds: number;
          }
        >;
      }
    >;
    RestingLairInstantSpawnScenarioChance: number;
    RestingLairLongDelaySpawnMax: number;
    RestingLairLongDelaySpawnMin: number;
    RestingLairMaxNPCCount: number;
    RestingLairMinNPCCount: number;
    RestingLairShortDelaySpawnMax: number;
    RestingLairShortDelaySpawnMin: number;
    RestingLairShortDelayedSpawnScenarioChance: number;
  };
  SID: string;
}>;

export type AIGlobal = GetStructType<{
  ALifeSettings: {
    OfflineCombatAreaLifetimeSeconds: number;
  };
  AllowCorpseProcessForQuestAgent: boolean;
  AllowWeaponPickupBasedOnPrice: boolean;
  AllowWeaponPickupWhenLooting: boolean;
  AnomalyRestrictionsSettings: {
    AnomalyRestrictionsIgnoreChanceZombie: number;
    AnomalyRestrictionsUpdateIntervalSeconds: number;
  };
  AudioRoomLoudnessMultiplierList: {
    LoudnessMultiplier: number;
    Type: EAudioRoomPresetBandwidth;
  }[];
  CharacterPoseSettings: {
    NoiseCoef: number;
    Pose: EStateTag;
    VisibilityCoef: number;
  }[];
  CombatTacticsSettings: {
    CombatTacticsParamsPerFactions: Record<
      Faction,
      {
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
        UpdateIntervalSecondsMax: number;
        UpdateIntervalSecondsMin: number;
      }
    >;
  };
  ContextualActionSettings: {
    ContextualActionGameGraphPathActuationDistance: number;
    ContextualActionInterruptAnimationScaleWhenThreatened: number;
    ContextualActionSearchDistance: number;
    ContextualActionSearchFriendDistance: number;
    DistanceToEquipWeaponBeforeContextualAction: number;
    DistanceToHideWeaponBeforeContextualAction: number;
    DistanceToTurnOffFlashlightBeforeContextualActionSquared: number;
    DistanceToTurnOnFlashlightBeforeContextualActionSquared: number;
  };
  CorpseBehaviorFactionRestrictions: string[];
  CoverSettings: {
    MinBehindTreeCoverHeight: number;
    MinGenericCoverHeight: number;
    MinGenericCoverWidth: number;
    MinHighCoverHeight: number;
    MinLowCoverHeight: number;
    MinSmartWidth: number;
  };
  DangerAreaSettings: {
    DangerAreaCostMultiplier: number;
    DangerAreaLifetimeDistance: number;
    DangerAreaLifetimeSeconds: number;
    DangerAreaMaxNum: number;
    DangerAreaOverlapsForRestriction: number;
    DangerAreaPlayerDamageAccumulationSeconds: number;
    DangerAreaRadius: number;
  };
  DeadBodyToConsiderAsThreatDuration: number;
  DistanceToSwitchToWalkIn: number;
  DistanceToSwitchToWalkOut: number;
  FlashlightInteractDuration: number;
  FlashlightTimeOfDayOff: number;
  FlashlightTimeOfDayOn: number;
  FlashlightUseSettings: {
    FlashlightMeshDespawnDelay: number;
    FlashlightMeshDespawnNPCToCameraAngleThreshold: number;
    FlashlightMeshDespawnPlayerCameraFOVDistance: number;
    FlashlightMinStateTime: number;
    FlashlightUseLuminanceThresholdDayOff: number;
    FlashlightUseLuminanceThresholdDayOn: number;
    FlashlightUseTracePoints: { RelativeLocation: Location3Axis }[];
    MaxFlashlightAgentProcessPerUpdate: number;
    MaxFlashlightUseTracesPerUpdate: number;
    MaxFlashlightsUsedSimultaneously: number;
  };
  FocusLocationSelectionSettings: {
    FocusLocationStartLookingEarlyOffset: number;
  };
  ForceRunInsteadSprintDistanceFromPathStart: number;
  ForceRunInsteadSprintDistanceToNextPortal: number;
  ForceRunInsteadSprintDistanceToPathEnd: number;
  ForceRunInsteadSprintPortalRotationAngleThreshold: number;
  HearingSensorSettings: {
    NonEnemySoundHearingCoef: number;
    SoundVisionValidationThreshold: number;
  };
  HideWeaponWarningBarkDelay: number;
  LuminanceSettings: {
    BaseLuminance: number;
    EnvironmentLuminanceCoefficients: {
      RoomBaseCoefficients: {
        Coefficient: number;
        RoomType: EAudioRoomPresetBandwidth;
      }[];
      TimeOfDayBaseLuminance: {
        Luminance: number;
        TimeFrom: number;
        TimeTill: number;
      }[];
      WeatherLuminanceCoefficients: {
        Coefficient: number;
        WeatherType: EWeather;
      }[];
    };
    LightLuminanceByTimeOfDayCurve: string;
    LightSourceLuminanceMultiplier: number;
    MaxLightGatheringRadius: number;
    MaxLuminanceAgentProcessPerUpdate: number;
    MaxLuminanceTracesPerUpdate: number;
    MinAmbientLuminanceToSkipTraces: number;
    ShadowLuminanceByTimeOfDayCurve: string;
    ShadowOffsetByTimeOfDayCurve: string;
  };
  MaterialTranslucencyList: {
    Materials: { SID: string }[];
    Translucency: number;
  }[];
  MaxAgentsCount: number;
  MaxHideWeaponWarningFollowDistance: number;
  MinALifeDespawnDistance: number;
  MinALifeSpawnDistance: number;
  MutantCorpseProcessFactionPerRank: {
    AllowedRanks: EAgentRankMask[];
    Faction: string;
  }[];
  OfflineUsingGameGraphMoveFactor: number;
  PhysMatSettings: {
    CharacterNoiseCoef: number;
    MaterialType: EPhysicalMaterialType;
  }[];
  PlayerFlashlightVisionSettings: {
    FlashlightMaxVisionScorePerSecond: number;
    FlashlightMinVisionScorePerSecond: number;
    FlashlightVisionConeHalfAngle: number;
    FlashlightVisionConeLength: number;
    NumTracePointsPerVisionUpdate: number;
  };
  PreyLighterOffVisibilityCoef: number;
  PreyLighterOnVisibilityCoef: number;
  ReactionOnEmissionSettings: {
    DistanceToAvoidPreparingForEmission: number;
    DistanceToShelterToWalk: number;
    InvulnerableAfterEmissionStart: number;
    MinCoveredDistanceToChangeMovementType: number;
    ReceivedDamageTimeToEnterCombatDuringEmission: number;
    ReceivedDamageToEnterCombatDuringEmission: number;
    SheltersSearchDistance: number;
    TransitionAlphaToPrepareForEmission: number;
  };
  RegionRank: {
    MaxRank: ERank;
    MinRank: ERank;
    Region: ERegion;
  }[];
  SID: string;
  SoundEventTypeSpreadSpeedList: {};
  ThreatsSettings: {
    CorpseSmellAfterDeathTimeout: number;
    EnemyReportDelaySeconds: number;
    FlairIdentifyAsEnemyOutsideFrontZoneMultiplier: number;
    LootingCorpsesDeathTimeInterval: number;
    ThreatReportDelaySeconds: number;
  };
  ThrowGrenadeSettings: {
    AvailableGrenadesPerFaction: Record<Faction, Record<Rank, number>>;
  };
  TimeToSkipLairPeacefulSpawnAfterMemberDies: number;
  TouchSensorSettings: {
    TouchDistanceThreshold: number;
    TouchNonEnemyPlayerLookAtTime: number;
    TouchNonEnemyPlayerReactionTime: number;
    TouchSensorCooldown: number;
  };
  WeaponAttachmentsModifiersList: {
    HearingDistanceModifier: number;
    ThreatPointsMultiplier: number;
    WeaponAttachmentSID: string;
  }[];
  WeaponLootDistance: number;
  WeatherSettings: {
    FlairCoef: number;
    HearingDistanceCoef: number;
    VisibilityCoef: number;
    WeatherSID: string;
  }[];
}>;

export type CoreVariable = GetStructType<{
  ALifeGridUpdateDelay: number;
  ALifeGridVisionRadius: number;
  AccumulateNPCToPlayerDamageSeconds: number;
  ActorCrouchHeight: number;
  AgentSpawnNavMeshQueryDistance: number;
  AgentsDecalsPoolSize: number;
  AimAlphaParamName: string;
  AimAssistBoneLocationOffset: number;
  AimAssistMaxOverlapsThreshold: number;
  AimAssistMinOverlapsThreshold: number;
  AimAssistSnappingBones: string[];
  AimFOVRestoreTime: number;
  AimSocketName: string;
  AimingWeaponDirtCurve: string;
  AirPoltergeistSurfaceMaterial: string;
  AlifeCorpsesHardcap: number;
  AnomalyAkComponentOffset: number;
  ArmorDeflectDamageCoefHuman: number;
  ArmorDeflectDamageCoefMutant: number;
  ArmorDeflectMaxChance: number;
  ArmorDeflectMinChance: number;
  ArmorDifferenceCoef: number;
  ArmorDurabilityParamsCoef: number;
  ArtifactOffsetFromAnomalyBorder: Location3Axis;
  ArtifactSpawnAttemptsCount: number;
  ArtifactSpawnDistanceDelta: number;
  ArtifactSpawnHeightToNavmesh: number;
  ArtifactSpawnPityStructs: {
    AttemptsCount: number;
    Rank: ERank;
    RarityLuckIncrease: {
      LuckIncrease: number;
      Rarity: EArtifactRarity;
    }[];
  }[];
  ArtifactStrafeMinDistance: number;
  ArtifactSurfaceMaterial: string;
  AsphaltSurfaceMaterial: string;
  AttentionConeAngle: number;
  AudioRoomPresetBandwidth: {
    Close: string;
    Custom: string;
    HalfOpen: string;
    Isolated: string;
    None: string;
    Open: string;
    PsyDome: string;
  };
  AutoInteractionDistance: number;
  AutonomicTutorialWidgetClass: string;
  BP_DeveloperSpectator: string;
  BackgroundBlurViewClass: string;
  BaseActorHeight: number;
  BaseLookUpRate: number;
  BaseRepairCostModifier: number;
  BaseTurnRate: number;
  BleedingChanceNonPenetrationMod: number;
  BleedingChanceStackMaxSize: number;
  BleedingPointsNonPenetrationMod: number;
  BleedingTimer: number;
  BleedingTimerDrop: number;
  BodyExplodeParticle: string;
  BoltAnimationBlueprint: string;
  BoltBlueprint: string;
  BoltCrosshairType: ECrosshairType;
  BoltLifetime: number;
  BoltPrototypeSID: string;
  BoltSkeletalMeshes: string[];
  BoltStaticMeshes: string[];
  BoneSurfaceMaterial: string;
  BoneToHitAreaMap: {
    Head: string[];
    Legs: string[];
    Torso: string[];
  };
  BreadSurfaceMaterial: string;
  BrickSurfaceMaterial: string;
  BrokenGlassSurfaceMaterial: string;
  CalmDamageFromPlayerCoef: number;
  CeramicSurfaceMaterial: string;
  ChanceToGetHealOverTimeWhenWounded: number;
  CheckCombatStateInterval: number;
  ChemicalSurfaceMaterial: string;
  ClampedMaxFallingVelocity: number;
  ClampedMinFallingVelocity: number;
  ClimbDownSpeed: number;
  ClimbEnterDownSpeed: number;
  ClimbEnterUpSpeed: number;
  ClimbExitUpSpeed: number;
  ClimbFastAscendingSpeedScale: number;
  ClimbMediumAscendingSpeedScale: number;
  ClimbUpSpeed: number;
  ClimbViewPitchLimit: number;
  ClimbViewYawLimit: number;
  ClothCorpsesSurfaceMaterial: string;
  ClothSurfaceMaterial: string;
  CoefTimeForInterp: number;
  CombatStateAction: string;
  CombatStateActionEnd: string;
  CommentRange: number;
  ControllerSpeakerDiegeticMixState: string;
  ControllerSpeakerDiegeticOffState: string;
  ControllerSpeakerDiegeticSoloState: string;
  ControllerSpeakerHazardsMixState: string;
  ControllerSpeakerHazardsOffState: string;
  ControllerSpeakerHazardsSoloState: string;
  ControllerSpeakerInteractiveObjectsMixState: string;
  ControllerSpeakerInteractiveObjectsOffState: string;
  ControllerSpeakerInteractiveObjectsSoloState: string;
  ControllerSpeakerInterfaceMixState: string;
  ControllerSpeakerInterfaceOffState: string;
  ControllerSpeakerInterfaceSoloState: string;
  ControllerSpeakerRadioAUXBus: string;
  ControllerSpeakerRadioMixState: string;
  ControllerSpeakerRadioOffState: string;
  ControllerSpeakerRadioSoloState: string;
  CooldownOnFallingWounded: number;
  CorpseALifeOnlineTime: number;
  CorpseConditionOnlineCount: number;
  CorpseDespawnToOfflineTimeCoef: number;
  CorpseLootedOnlineTime: number;
  CorpseOfflineCountConditionSquaredDistance: number;
  CorpseOfflineSquaredDistance: number;
  CorpseOfflineTimeConditionSquaredDistance: number;
  CorpseOffscreenLifetime: number;
  CorpseOnlineTime: number;
  CorpseRagdollQuestProtectionCheckTime: number;
  CorpseRagdollQuestProtectionEnableTime: number;
  CorpseSeenOnlineTime: number;
  CorpseTimeout: number;
  CorpsesDecalsPoolSize: number;
  CriticalDamageSoundCooldown: number;
  CriticalEffectStartUI: number;
  CriticalShotDamageSound: string;
  CutsceneFOVDefault: number;
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
  DawnStartTime: number;
  DayStartTime: number;
  DeadBodyDragAnimationRagdollTransitionSpeed: number;
  DeadBodyInvalidationTime: number;
  DeadBodyPickUpTime: number;
  DeadBodyStaminaJumpMultiplier: number;
  DeadZonesConfig: string;
  DebugHUDWidgetClass: string;
  DefaultItemGeneratorTemplate: string;
  DefaultLeverCurve: string;
  DefaultLeverCurveReverse: string;
  DefaultMapSize: Location2Axis;
  DefaultMouseSensitivityModifier: number;
  DefaultSaveLanguage: ELocalizationLanguage;
  DefaultState: string;
  DefaultSurfaceMaterial: string;
  DefaultTeleportScreenHideDelay: number;
  DefaultTeleportScreenShowDelay: number;
  DefaultTimedLoadingScreenWidgetClass: string;
  DeferredDeathMaxTime: number;
  DegenSuppressionDelayTimeSeconds: number;
  DelayBetweenMoaning: number;
  DeltaShiftStartThrowPosition: number;
  DemoPopupClass: string;
  DespawnItemTime: number;
  DestructibleNoiseTimeout: number;
  DetectorMPC: string;
  DialogDepthOfFieldFstop: number;
  DialogDepthOfFieldSensorWidth: number;
  DialogDistance: number;
  DialogDofMaxFocusDistance: number;
  DialogFOVDefault: number;
  DialogLookAtConstraint: number;
  DialogWidgetClass: string;
  DirtSurfaceMaterial: string;
  DisassemblyWeaponDurabilityRangeMax: number;
  DisassemblyWeaponDurabilityRangeMin: number;
  DistanceToDestroyCorpsesIfOverpopulated: number;
  DoorBlueprint: string;
  DragDeadBodyInteractRange: number;
  DraggingCorpseSpeedCoef: number;
  DropItemSFX: string;
  DurabilityRound: number;
  DynamicParticlesDataTable: string;
  EffectsOnDestructWindowApplied: string[];
  EffectsRemovedOnHealWounded: string[];
  EmissionCrowsFallFX: string;
  EmissionNeutralityTimer: number;
  EmissionStartLocation: Location2Axis;
  EnergeticOveruseParameter: string;
  EveningStartTime: number;
  ExplosionArmorDifferenceCoef: number;
  FOVDefault: number;
  FactionRelationUpdateDelay: number;
  FadeoutScreenWidgetClass: string;
  FastDialogClass: string;
  FastbackState: string;
  FaustCloneCorpseTimeout: number;
  FaustCloneCountCap: number;
  FinalCreditsWithVideoClass: string;
  FirstTimeSettingsState: string;
  FlashlightCombatUseChance: Record<Rank, number>;
  FlashlightDialogIntensityLerpTime: number;
  FlashlightDialogIntensityPercent: number;
  FleshClothSurfaceMaterial: string;
  FleshCorpsesSurfaceMaterial: string;
  FleshIshPhysicalMaterials: EPhysicalMaterialType[];
  FleshMetalSurfaceMaterial: string;
  FleshRubberSurfaceMaterial: string;
  FleshSurfaceMaterial: string;
  FootStepsDecalsPoolSize: number;
  FootstepsDecalFadeOutTime: number;
  ForestGrassSurfaceMaterial: string;
  ForestPineSurfaceMaterial: string;
  FullDynamicRangeState: string;
  GameLoadingScreenStart: string;
  GameLoadingScreenStop: string;
  GameMusicEvent: string;
  GamePauseMenuClass: string;
  GaussGunHit: string;
  GaussGunReload: string;
  GaussGunTrace: string;
  GeigerCurve: string;
  GeigerSFXStart: string;
  GeigerSFXStop: string;
  GenericModelGridVisionRadius: number;
  GenericTeleportScreenHideDelay: number;
  GenericTeleportScreenShowDelay: number;
  GlassNoParticlesSurfaceMaterial: string;
  GlassSurfaceMaterial: string;
  GrassSurfaceMaterial: string;
  GravelSurfaceMaterial: string;
  GroundSurfaceMaterial: string;
  GuitarPlayThreatLoudness: number;
  GuitarPlayWidgetClass: string;
  GuitarSkeletal: string;
  HPThresholdToKill: number;
  HUDWidgetClass: string;
  HandlessFOVAimModifier: number;
  HelmetDurabilityParamsCoef: number;
  HoldPreventFromDefaultInteractionPercent: number;
  HpThresholdToHealWound: number;
  IKTraceDistance: number;
  IdleState: string;
  IdleSwayInterpolationSpeed: number;
  ImpactParticleVFXCritName: string;
  ImpactParticleVFXHeadshotName: string;
  ImpactParticleVFXNpcSizeName: string;
  ImpactParticleVFXSizeName: string;
  ImpactParticleVFXSpreadName: string;
  ImportantDialogClass: string;
  InfotopicRefreshHours: number;
  InhaleExhaleTime: number;
  InhaleExhaleTimeMax: number;
  InhaleExhaleTimeMin: number;
  InspectArtifactWidgetClass: string;
  InteractDotsWidgetClass: string;
  InteractWidgetClass: string;
  InteractionDotsInnerConeAngle: number;
  InteractionDotsOuterConeAngle: number;
  InteractionDotsTraceRadius: number;
  InventoryPenaltyLessWeight: number;
  InventorySPDrainCoef: number;
  InventorySPOverweightDrainCoef: number;
  InventoryWidgetClass: string;
  ItemCollisionEnableDelay: number;
  ItemContainerInteractRange: number;
  ItemCostMinPercent: number;
  ItemDropDistance: number;
  ItemDropHeight: number;
  ItemDurabilityStackDifference: number;
  ItemInfoAffectingEffects: {
    AffectingEffectTypes: {
      EffectType: EEffectType;
      Multiplier: number;
    }[];
    ItemInfoType: EItemInfoType;
  }[];
  ItemSelectorClass: string;
  ItemSelectorTimeDilationCoefficient: number;
  JumpFromLadderRepulseForce: number;
  KnifeAnimationBlueprint: string;
  KnifePrototypeSID: string;
  KnifeSkeletal: string;
  LadderEnterCurve: string;
  LadderEnterUpXOffset: number;
  LadderEnterUpZOffset: number;
  LairSearchingRadius: number;
  LandPredictionAlphaCurve: string;
  LastBulletBaseDamageMultiplier: number;
  LastBulletStartScalingPlayerHPPercent: number;
  LaunchConfig: string;
  LeatherSurfaceMaterial: string;
  LeavesSurfaceMaterial: string;
  LevelTreesCollection: string;
  LightningBallAnomalyAppearanceTime: number;
  LimpEffectSIDToThresholdMap: {
    EffectSID: string;
    Threshold: number;
  }[];
  LoadingScreenWidgetClass: string;
  LocationAmbientState: string;
  LookGamepadInputCurves: string[];
  LookUpGamepadInputCurve: string;
  LootMutantDeadBodySound: string;
  LootNPCDeadBodySound: string;
  LowDurabilityThreshold: number;
  LowerRightLocation: Location2Axis;
  MPC_Environment: string;
  MPC_FOV: string;
  MPC_Foliage: string;
  MPC_PPM: string;
  MainMenuState: string;
  MainMenuWidgetClass: string;
  MarkerCompassWidgetClass: string;
  MarkerExploringDistance: number;
  MarkerRevealingDistance: number;
  MarkerSettingsAsset: string;
  MarkerShowingDistance: number;
  MarkerWorldMapWidgetClass: string;
  MaxAngleOfRotation: number;
  MaxDeadThreatForgetTime: number;
  MaxDialogActionsCount: number;
  MaxFallHeight: number;
  MaxFallingVelocity: number;
  MaxInteractionDistance: number;
  MaxNumberOfVisibleInteractionDots: number;
  MaxPostProcessCount: number;
  MaxRecoilPitchDifference: number;
  MaxSubtitlesRange: number;
  MaxTimeSpentOnLoading: number;
  MeatSurfaceMaterial: string;
  MediumDynamicRangeState: string;
  MediumEffectStartUI: number;
  MeshSoundPlacerDataTable: string;
  MeshesDecalsPoolSize: number;
  MetalGridSurfaceMaterial: string;
  MetalSolidSurfaceMaterial: string;
  MetalThinSurfaceMaterial: string;
  MinDeadThreatForgetTime: number;
  MinDistanceToFloorOnSpawn: number;
  MinFallingVelocity: number;
  MinHeightToShowMarkerHeightIndicatorAbove: number;
  MinHeightToShowMarkerHeightIndicatorBelow: number;
  MinimalSubtitlesDuration: number;
  MotionOffState: string;
  MotionOnState: string;
  MoveGamepadInputCurve: string;
  MoveGamepadInputCurves: string[];
  MovementVFXArmorScale: {
    ArmorProtectionValue: number;
    ArmorScale: EArmorScale;
  }[];
  MovementVFXFootStepDecalLifetime: number;
  MusicManagerCombatEnemyAttackActionLifetimeSeconds: number;
  MusicManagerCombatScoreThreshold: number;
  MusicVolumeSlider: string;
  MutantLootAnimCollection: string;
  MutantLootAnimCollectionWithoutWidget: string;
  MutantLootContainerInteractRange: number;
  MutantLootInteractHeightMax: number;
  MutantLootInteractHeightMin: number;
  MutantLootParams: {
    AgentType: EAgentType;
    CutDecalBoneName: string;
    CutRadiusModifier: number;
  }[];
  NarrowDynamicRangeState: string;
  NarrowTraceInteractionRadius: number;
  NewDLCPopupDisplayTime: number;
  NewDLCPopupWidgetClass: string;
  NiagaraProviderUpdateTimings: {
    ProviderType: ENiagaraProviderType;
    UpdateTime: number;
  }[];
  NightStartTime: number;
  NoMusicAmbientState: string;
  NoiseIndicatorMaxHearingDistance: number;
  ObjPhysicsHitSqareMinVelocity: number;
  ObjPhysicsHitTimeDelay: number;
  ObjRadiationSphereMaxRadius: number;
  ObjRadiationSphereMinRadius: number;
  ObjRootAkComponentOffset: number;
  OffsetAimingChangeTime: number;
  OffsetAimingDefaultSocketName: string;
  OnlineDirectorModelsPerTick: number;
  OpticCutoutEnabledParamName: string;
  OpticCutoutLocationParamName: string;
  OpticCutoutRadiusParamName: string;
  OpticCutoutSocketName: string;
  OpticCutoutThresholdParamName: string;
  PDAAnimationBlueprint: string;
  PDAClass: string;
  PaperSurfaceMaterial: string;
  ParticleTraceLength: number;
  PathToInputActionAssets: string;
  PathToInputCurveAssets: string;
  PathToWaterObstructionTestTraceDist: number;
  PauseMenuOff_SFX: string;
  PauseMenuOn_SFX: string;
  PermissibleAngleOfRotation: number;
  PersonalRelationUpdateDelay: number;
  PerspectiveThirdPersonRTPC: string;
  PhysicalMaterialFrictionCoefficients: {
    FrictionCoefficient: number;
    PhysicalMaterialType: EPhysicalMaterialType;
  }[];
  PlacesOfInterest: ({ SID: number } & Location3Axis)[];
  PlasticSurfaceMaterial: string;
  PlayVideoState: string;
  PlayVideoWidgetClass: string;
  PlayerAudioLogVolumeDecreaseTime: number;
  PlayerBedSleepTime: number;
  PlayerDeathState: string;
  PlayerMeleeArmorDifferenceCoef: number;
  PlayerPrototypeSID: string;
  PlayerStartingCoords: Location3Axis;
  PlayerStartingMoney: number;
  PopupClass: string;
  PopupViewClass: string;
  PossessedWeaponFireIntervals: Record<Caliber, { FireInterval: number }>;
  ProjectileDecalFadeOutTime: number;
  ProjectileDecalLifeSpan: number;
  ProjectileDecalLifeSpanOnCorpse: number;
  ProjectileDecalMaxSaveCountOnCorpse: number;
  ProjectileExplosionOffset: number;
  ProjectileGaranteedVFXSpawnDistance: number;
  ProjectileMaxVFXSpawnDistance: number;
  PsyNPCCorpseTimeout: number;
  PuddleSurfaceMaterial: string;
  PutDeadBodyDistance: number;
  RadiationCurveIconAnim: string;
  RadiationInnerOffsetPresetValues: {
    Preset: ERadiationInnerOffsetPreset;
    Value: number;
  }[];
  RadiationPostEffectSID: string;
  RadiationPresetValues: {
    GeigerRadiationIntensity: number;
    PostProcessRadiationIntensity: number;
    Preset: ERadiationPreset;
    RadiationPerSecondValue: number;
    RadioactivityValue: number;
  }[];
  RadioRange: number;
  RadioactivityParameter: string;
  RadiusSearchPlaceToSit: number;
  RadiusSearchTargetToLook: number;
  RadiusWithAmountOfActorWithSimulation: number;
  RainImpactParticle: string;
  RealToGameTimeCoef: number;
  ReferenceTutorialLeftWidgetClass: string;
  ReferenceTutorialWidgetClass: string;
  RegenerateItemsOnRankUpdateRadius: number;
  RegenerateItemsOnRankUpdateTimer: number;
  RegionAmbientState: string;
  ReputationRepairCostModifiers: {
    Modifier: number;
    RelationLevel: ERelationLevel;
  }[];
  RestoreBackupClass: string;
  RightClickMenuWidgetClass: string;
  RockSurfaceMaterial: string;
  RubberSurfaceMaterial: string;
  SandSurfaceMaterial: string;
  ScopeMaterialInWorld: string;
  SignalStrength: number[];
  SimulatePhysicsDistance: number;
  SkeletalItemContainer: string;
  SkipHintClass: string;
  SkyLightUpdateDeltaTime: number;
  SlateSurfaceMaterial: string;
  SleepWidgetClass: string;
  SlowRunThreshold: number;
  SplashTutorialWidgetClass: string;
  StaminaFallingDamageCoef: number;
  StaminaRegenStateCoefs: {
    StateTag: EStateTag;
    Value: number;
  }[];
  StaminaWeightCurve: string;
  StartCombatCooldown: number;
  StartDay: number;
  StartHour: number;
  StartMinute: number;
  StartMonth: number;
  StartSecond: number;
  StartThreatCooldown: number;
  StartYear: number;
  StaticItemContainer: string;
  StaticParticlesDataTable: string;
  StrikeAnomalyArmorDifferenceCoef: number;
  StrikeGrenadeResistCoefs: {
    GrenadeDamageResist: number;
    ProtectionStrike: number;
  }[];
  SubtitleClass: string;
  SystemNotificationSpecificReward: string;
  TargetToLookViewingAngle: number;
  TeleportLoadingScreenWidgetClass: string;
  ThreatConfidenceDropToZeroDeviation: number;
  ThreatPointerWidgetClass: string;
  ThrowGrenadePathMaxTime: number;
  ThrowGrenadePathSimFrequency: number;
  ThrowSpeedMultiplierMax: number;
  ThrowSpeedMultiplierMin: number;
  TimeComeBackRotation: number;
  ToggleButtonCurve: string;
  TopazDiodsEnableParamName: string;
  TopazDiodsMaterialIndex: number;
  TopazDiodsProgressParamName: string;
  TopazDisplayCaribsParamName: string;
  TopazDisplayEnableParamName: string;
  TopazDisplayHueParamName: string;
  TopazDisplayMaterialIndex: number;
  TopazDisplayPhaseParamName: string;
  TopazDisplaySievertsParamName: string;
  TopazDisplayTimeParamName: string;
  TorqueOfThrowingItem: number;
  TraceCheckLengthOnSpawn: number;
  TradeWidgetClass: string;
  TreeNoParticlesSurfaceMaterial: string;
  TreeSurfaceMaterial: string;
  TriggersToUpdatePerTick: number;
  UIFloatPrecision: number;
  UnderwaterTestTraceDist: number;
  UnfocusableFOVAngle: number;
  UnfocusableKnifeTraceDistance: number;
  UnfocusableMinSweepRadius: number;
  UnfocusableTargetLooseTime: number;
  UnfocusableWeaponTraceDistance: number;
  UnkillableNPCWoundedStateResurrectionTime: number;
  UntouchedDespawnItemTime: number;
  UpdatePopupClass: string;
  UpgradeTooltipWidgetClass: string;
  UpgradeWidgetClass: string;
  UpgradesWidgetClass: string;
  UpperLeftLocation: Location2Axis;
  UseMutantLootWithoutWidget: boolean;
  VegetableSurfaceMaterial: string;
  VideoLoadingScreenWidgetClass: string;
  ViewPitchDownLimit: number;
  ViewPitchUpLimit: number;
  VitalBaseBleedingValue: number;
  VitalEnergeticOveruseDegen: number;
  VitalEnergeticOveruseSoundForwardMultiplier: number;
  VitalEnergeticToleranceDegen: number;
  VitalEnergeticToleranceDegenDelay: number;
  VitalMaxEnergeticOveruse: number;
  VitalMaxEnergeticTolerance: number;
  VitalMaxPoppyFieldSleepiness: number;
  VitalMaxPsyPoints: number;
  VitalPsyTickTime: number;
  WaitingTimeToRotationCamera: number;
  WaterElementWidgetClass: string;
  WaterParticleDepthThreshold: number;
  WaterParticleMinInterval: number;
  WaterParticleSizeMultiplier: number;
  WaterSurfaceMaterial: string;
  WaterWetnessDryingConstValue: number;
  WaterWetnessDryingConstValueNotInWater: number;
  WeaponDropForce: number;
  WeaponInfoMaxAccuracy: number;
  WeaponInfoMaxDamage: number;
  WeaponInfoMaxFireDistance: number;
  WeaponInfoMaxFireInterval: number;
  WeaponInfoMaxPiercing: number;
  WeaponInfoMinFireInterval: number;
  WeatherTimeCoefficientCurvePath: string;
  WeightAzimuthArrayPsyPhantom: {
    MaxAngle: number;
    MinAngle: number;
    Weight: number;
  }[];
  WetnessDryingConstValue: number;
  WetnessProximityUpdateDistance: number;
  WetnessTraceHeight: number;
  WhiteBridgeLoadingScreenWidgetClass: string;
  WideTraceInteractionDistance: number;
  WideTraceInteractionRadius: number;
  WoodSolidSurfaceMaterial: string;
  WoodThinSurfaceMaterial: string;
  WorldMapActualHeight: number;
  WorldMapActualWidth: number;
  WorldMapHubMarkerClass: string;
  WorldMapLocationMarkerClass: string;
  WorldMapRegionMarkerClass: string;
  WorldMapRegionTexture: string;
  WorldMapScene: string;
  WorldMapTexture: string;
  WorldWindDirectionInitial: Location2Axis;
  WoundCausingDamageSourceTypes: EDamageSource[];
  WoundHitAreasThresholds: {
    Default: number;
    Head: number;
    Legs: number;
    Torso: number;
  };
  WoundedHealHoldInteractTime: number;
  WoundedStateHealthRegen: number;
  ZombieFactionUIDName: string;
  bALifeTick: boolean;
  bAutoEquipArtifacts: boolean;
  bEnableDisassembleUI: boolean;
  bEnableHideInformationUI: boolean;
  bEnableWaterElement: boolean;
  bResetArtifactLuckOnPickup: boolean;
  bShouldSaveDefaultLanguage: boolean;
  bStartWithLoadedWeapon: boolean;
  bStartWithMenu: boolean;
}>;

export type CluePrototype = GetStructType<{
  DefaultValue: string;
  Description: string;
  ID: number;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type QuestItemGeneratorPrototype = GetStructType<{
  ID: number;
  ItemGenerator: Record<string, ItemGenerator> | ItemGenerator[];
  RefreshTime: number;
  SID: string;
}>;

export type GenericLairPrototype = GetStructType<{
  Preset: {
    ALifeLairsSearchRadius: number;
    GameTimeOfflineToRerollLairData: number;
    InitialInhabitantFaction: string;
    IsALifePoint: boolean;
    LairType: ELairType;
    PossibleInhabitantFactions: Record<
      Faction,
      {
        Faction: string;
        SpawnSettingsPerPlayerRanks: Record<
          Rank,
          {
            InitialSpawnQuantityPercent: number;
            InitialSpawnQuantityRespawnTimeSeconds: number;
            MaxSpawnQuantity: number;
            MaxSpawnQuantityRespawnTimeSeconds: number;
            SpawnSettingsPerArchetypes: Record<
              Faction,
              {
                MinQuantityPerArchetype: number;
                SpawnWeight: number;
              }
            >;
            WipeRespawnTimeoutSeconds: number;
          }
        >;
      }
    >;
    RestingLairInstantSpawnScenarioChance: number;
    RestingLairLongDelaySpawnMax: number;
    RestingLairLongDelaySpawnMin: number;
    RestingLairMaxNPCCount: number;
    RestingLairMinNPCCount: number;
    RestingLairShortDelaySpawnMax: number;
    RestingLairShortDelaySpawnMin: number;
    RestingLairShortDelayedSpawnScenarioChance: number;
  };
  SID: string;
}>;

export type QuestArtifactPrototype = GetStructType<{
  AnomalyElementType: EAnomalyElementType;
  ArtifactType: EArtifactType;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  DetectorRequired: boolean;
  EffectPrototypeSIDs: string[];
  FakeArtifactDistortionVFX: string;
  ID: number;
  IsQuestItem: boolean;
  JumpAmount: number;
  JumpDelay: number;
  JumpDistance: number;
  JumpForce: number;
  JumpHeight: number;
  JumpSeriesDelay: number;
  JumpSpeedCoef: number;
  LandingForce: number;
  LifeTime: number;
  PlayerDistance: number;
  Rarity: EArtifactRarity;
  ReturnDistanceValue: number;
  SID: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
}>;

export type QuestObjPrototype = GetStructType<{
  Abilities: {
    NoDamagePSYAttack: {
      ActivationTag: string;
      SID: string;
    };
  };
  AgentType: EAgentType;
  AttackParams: {
    ForceDistance: number;
    MeleeAttackAcceptanceDistance: number;
    MeleeAttackHeight: number;
    MeleeAttackRadius: number;
    MeleeDamage: number;
  };
  Blueprint: string;
  CanProcessCorpses: boolean;
  CustomMeshGeneratorPrototypeSID: string;
  DialogInteractDistance: number;
  DuplicateFacialAnimationNPCs: string[];
  Faction: string;
  FlashlightPrototypeSID: string;
  Hint: string;
  ID: number;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreWoundedRestriction: boolean;
  InventoryPenaltyLessWeight: number;
  IsAffectingByMaxActorWithSimulation: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  MaxDialogInteractDistance: number;
  MaxInventoryMass: number;
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  MinDialogInteractDistance: number;
  MovementVFXPrototypeSID: string;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  NeedsPresetSID: string;
  Protection: {
    Strike: number;
  };
  Rank: ERank;
  ReactOnNonEnemySounds: boolean;
  SID: string;
  ShouldEnableAdamAppleAnimations: boolean;
  ShouldGenerateStashClues: boolean;
  Text: string;
  TradePrototypeSID: string;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VitalParams: {
    DegenFoodPoint: number;
    DegenPsyPoints: number;
    DegenStamina: number;
    DegenWaterPoint: number;
    MaxFP: number;
    MaxFoodPoint: number;
    MaxHP: number;
    MaxSP: number;
    MaxSleepDesirePoint: number;
    MaxWaterPoint: number;
    RegenFP: number;
    RegenHP: number;
    RegenSleepDesirePoint: number;
    StaminaDisableThresholds: {
      Threshold: number;
      RegenerationDelay: number;
      StateTags: EStateTag[];
    }[];
  };
}>;

export type RSQ00_Rewar = GetStructType<{
  MoneyGenerator: {
    MaxCount: number;
    MinCount: number;
  };
  SID: string;
}>;
