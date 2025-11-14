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
  DialogObjectLocation: Location[];
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
  TargetLocations: Location[];
  VolumeGuid: string;
  ShouldBeKilled: string;
  FullSquad: boolean;
  IncludeWoundedEvent: boolean;
  SpecificItemDespawn: boolean;
  GoalTargetQuestGuid: string;
  Location: string;
  NewTitle: number;
  NewDescription: number;
  IdlePosition: Location;
  LookAt: Location;
  MinimalReputationLevel: ERelationLevel;
  EffectLocation: Location;
  EffectPath: string;
  Continue: boolean;
  SoundLocation: Location;
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
  LookAtLocation: Location;
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
  ShootingPosition: Location;
  ShootTargetLocation: Location;
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
  RestLocation: Location;
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
    ReachPointLocation: Location;
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
  TargetLocation: Location;
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
  ViewOffset: Location;
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
  SoundLocation: Location;
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
  LookAtLocation: Location;
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
  ShootingPosition: Location;
  ShootTargetLocation: Location;
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
  DialogObjectLocation: Location[];
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
  TargetPoint: Location;
  ItemPrototypeSID: Param;
  ItemsCount: Param;
  WithEquipped: boolean;
  WithInventory: boolean;
  BoolValue: boolean;
  PointToLookAt: Location;
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

export type Location = GetStructType<{ X: number; Y: number; Z: number }>;

export type LocationAndRotation = GetStructType<
  Location & { Pitch: number; Yaw: number; Roll: number }
>;

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
    IsALifePoint: true;
    PossibleInhabitantFactions: Record<
      Faction,
      {
        Faction: Faction;
        SpawnSettingsPerPlayerRanks: Record<
          "Newbie" | "Experienced" | "Veteran" | "Master",
          {
            MaxSpawnQuantity: number;
            InitialSpawnQuantityPercent: number;
            InitialSpawnQuantityRespawnTimeSeconds: number;
            MaxSpawnQuantityRespawnTimeSeconds: number;
            WipeRespawnTimeoutSeconds: number;
            SpawnSettingsPerArchetypes: Record<
              string,
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
