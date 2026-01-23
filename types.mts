// noinspection JSUnusedGlobalSymbols
// this file is up to date with game version 1.8

import {
  EAIConstraintType,
  EAIMovementPose,
  EALifeDirectorScenarioTarget,
  EALifeFactionGoalType,
  EALifeGroupPriorityType,
  EAbility,
  EAbilityStatePhase,
  EActionType,
  EAgentArchetype,
  EAgentRankMask,
  EAgentType,
  EAimAssistPresetType,
  EAimAssistWeightType,
  EAmmoCaliber,
  EAmmoType,
  EAnimationReloadTypes,
  EAnomalyElementType,
  EAnomalyType,
  EApplyRestrictionType,
  EArchiartifactType,
  EArmorScale,
  EArtifactRarity,
  EArtifactSpawnerExcludeRule,
  EArtifactType,
  EAttachSlot,
  EAttachType,
  EAttractionPointType,
  EAudioRoomPresetBandwidth,
  EAvailableCoverActionsSide,
  EAvailableCoverEnterTypes,
  EBehaviorType,
  EBeneficial,
  EBodyMeshType,
  EBoltActionWeaponState,
  EBoolProviderType,
  EBrokenGameDataFilter,
  ECalculateSignificance,
  ECameraShakeEffectSubtype,
  ECameraShakeGroupType,
  ECameraShakeType,
  ECauseOfDeath,
  EChangeValueMode,
  ECollisionChannel,
  ECollisionFormType,
  ECombatTactics,
  EConditionComparance,
  EConnectionLineState,
  EConsumableType,
  EContextualActionBodyPart,
  EContextualActionNeeds,
  EContextualActionNodeType,
  EContextualAgentType,
  ECrosshairType,
  ECustomDataDistribution,
  EDamageBone,
  EDamageSource,
  EDamageType,
  EDeadZoneType,
  EDestructionActionType,
  EDetectorType,
  EDialogAction,
  EDialogEventType,
  EDialogPriority,
  EDuplicateResolveType,
  EEffectDisplayType,
  EEffectSource,
  EEffectType,
  EEmissionAIEvent,
  EEmissionStage,
  EEmotionalFaceMasks,
  EEvadeActionType,
  EFaceBlockingBlendMasks,
  EFastUseGroupType,
  EFireType,
  EFlashlightAction,
  EFlashlightPriority,
  EFleeType,
  EFloatProviderType,
  EGSCTeleportType,
  EGameDifficulty,
  EGlobalVariableType,
  EGoalPriority,
  EGrenadeType,
  EGuardType,
  EHealingType,
  EHideViewType,
  EIgnoreDamageType,
  EInputAxisType,
  EInputController,
  EInputKey,
  EInputMappingContextPriority,
  EInteractFXType,
  EInventoryEquipmentSlot,
  EItemContainerType,
  EItemInfoType,
  EItemType,
  EJamType,
  EJournalAction,
  EJournalEntity,
  ELairPreferredSpawnType,
  ELairType,
  ELineDirection,
  ELoadingDestination,
  ELocalizationLanguage,
  EMagazineMeshType,
  EMainHandEquipmentType,
  EMappingContext,
  EMarkerType,
  EMeshSubType,
  EMisansceneNodeType,
  EModifiedCharacterParam,
  EModifyAbilitySequenceQuestNodeMode,
  EMovementBehaviour,
  EMusicState,
  EMutantAttackType,
  ENPCType,
  ENiagaraProviderType,
  ENoteType,
  ENotificationEventType,
  EObjAnim,
  EObjBoolParams,
  EObjFloatParams,
  EObjMesh,
  EObjSkeletalMeshTraceBone,
  EObjType,
  EOverrideDialogTopic,
  EOverweightLock,
  EPDATutorialCategory,
  EPassiveDetectorType,
  EPhysicalMaterialType,
  EPillowAnomalyBiomeType,
  EPlayerActionInputModifier,
  EPlayerActionInputTrigger,
  EPostEffectProcessorType,
  EPostProcessEffectType,
  EPsyNPCType,
  EQuestEventType,
  EQuestNodeType,
  ERadiationInnerOffsetPreset,
  ERadiationPreset,
  ERank,
  ERegion,
  ERelationChangingEvent,
  ERelationLevel,
  ERequiredSquadMembers,
  ESaveSubType,
  ESaveType,
  ESmartCoverType,
  ESortGroup,
  ESoundEffectSubtype,
  ESoundEventType,
  ESpaceRestrictionType,
  ESpawnNodeExcludeType,
  ESpawnType,
  ESpeechEventType,
  EStaminaAction,
  EStateTag,
  ESummonBehaviourOnSpawn,
  ESummonSpawnOrientation,
  EThreatActionType,
  EThreatType,
  EThrowQueueDisarmMode,
  ETriggerReact,
  ETriggerShape,
  EUISound,
  EUpgradeTargetPartType,
  EUpgradeVerticalPosition,
  EUserNotificationType,
  EVitalType,
  EWaterImmersionLevel,
  EWeaponState,
  EWeaponType,
  EWeather,
  EWeatherParam,
  EWeightStatus,
  EZombificationType,
  EDialogAnimationType,
  EItemGenerationCategory,
  EContextualActionEffectType,
  ERepetitions,
  EDistanceSelectorCondition,
  EContextualActionPreconditionType,
  EQuestConditionType,
  EJournalState,
  EQuestNodeState,
  EScenarioBranch,
  EThreatAwareness,
  EConditionCheckType,
  EQuestRewardType,
} from "./enums.mts";

import { GetStructType } from "./Struct.mts";
import {
  Archetype,
  Caliber,
  EffectConditionalEffect,
  Faction,
  FactionGoalType,
  HumanAbilityName,
  ObjectAbilityName,
  Rank,
  Reaction,
  ScenarioGroup,
  SID,
  StringArray,
  WeaponShootDistance,
  WeatherSelection,
} from "./utility-types.mts";

export type AbilityPrototype = GetStructType<{
  AbilityPreparationTime: number;
  AbilityProbability: string;
  AbilityTags: NPCPrototypeSkills;
  AbilityType: EAbility;
  ActivateAnomalySyncTag: string;
  ActivationNiagaraPath: string;
  ActivationRadius: number;
  AdjustLocation: boolean;
  AgentToEnemyVisibilityParams: AbilityPrototypeAgentToEnemyVisibilityParams;
  AgentToWeaponVisibilityParams: AbilityPrototypeEnemyVisibilityParams;
  AimingDuration: number;
  AkEvents: AbilityPrototypeAkEvents;
  Anomalies: AbilityPrototypeAnomalies;
  AnomalyLifetime: number;
  ApplyOnAgents: boolean;
  ApplyOnPlayer: boolean;
  ArmorDamage: number;
  ArmorPiercing: number;
  AttachVFXBoneNames: CoreVariableHead;
  AttackCollisionProfile: string;
  AttackConditionName: string;
  AttackConditions: ObjPrototypeMeleeAttackData;
  AttackParams: AssetLibraryUIIcons;
  AttackSyncTag: string;
  bCanShootLevitatingObject: boolean;
  bIsControllerAttack: boolean;
  bIsFaustAttack: boolean;
  Bleeding: number;
  BleedingChanceIncrement: number;
  BlinkDelay: number;
  BlinkEffect: string;
  BlinkSoundEvent: string;
  BonesDamageSet: AbilityPrototypeBonesDamageSet;
  bPullToOwner: boolean;
  bUseOwnerLocation: boolean;
  CalculateDamageOnlyFromPlayer: boolean;
  CameraFocusOffset: number;
  CameraModifierClass: string;
  CanBePerformedOnNPC: boolean;
  CanBePerformedOnPlayer: boolean;
  CanBeTriggeredByAnyEnemy: boolean;
  CancelAbilitiesWithTag: CoreVariableHead;
  CollisionProfileName: string;
  ConditionalCooldowns: AbilityPrototypeConditionalCooldowns;
  CooldownMax: number;
  CooldownMin: number;
  CooldownTag: string;
  CorpseTimeToHitSeconds: number;
  CriticalDamageThreshold: number;
  Damage: number;
  DamageAccumulatedToRoar: number;
  DamageAccumulationDurationSeconds: number;
  DamageCurve: string;
  DamageDistance: number;
  DamageParams: AbilityPrototypeDamageParams;
  DamageRadius: number;
  DamageSource: EDamageSource;
  DamageType: EDamageType;
  DamageVolumeMultiplier: string;
  DebugTag: string;
  DisarmMode: EThrowQueueDisarmMode;
  DistanceRange: AbilityPrototypeRadius;
  DPS: number;
  DragDelay: number;
  Duration: number;
  Effects: AbilityPrototypeEffects;
  EffectsDistanced: AbilityPrototypeEffectsDistanced;
  EffectsRadius: number;
  EffectsTriggerInterval: number;
  EnemyVisibilityParams: AbilityPrototypeEnemyVisibilityParams;
  FailureThrowVelocity: number;
  FloatingStartSound: string;
  FloatingStopSound: string;
  FloatingVFX: string;
  FlyingSpeed: number;
  FocusDuration: number;
  Frequency: number;
  GravityForce: number;
  GrenadeSID: string;
  HeavyVolumeThreshold: number;
  HitDamage: AbilityPrototypeRadius;
  HitDetectionAngle: number;
  HitDetectionDistance: number;
  HitReactionStartPhase: EAbilityStatePhase;
  IgnoredCalibersSet: AbilityPrototypeIgnoredCalibersSet;
  LevitationAngularAccelerationRate: number;
  LevitationAngularVelocity: number;
  LevitationDisplacementFrequency: AIGlobalRelativeLocation;
  LevitationHeight: AbilityPrototypeRadius;
  LevitationSpeed: number;
  LimitAngle: number;
  MaxActivationDistance: string;
  MaxAttacksInSeries: number;
  MaxCooldown: number;
  MaxDiscoveryRadius: number;
  MaxHeightAboveGround: number;
  MaxIntervalBetweenDamage: number;
  MaxLevitationDisplacement: AIGlobalRelativeLocation;
  MaxObjCount: number;
  MaxShootDelay: number;
  MaxShotsAmount: number;
  MaxSoundDist: number;
  MaxWeaponsToRise: number;
  MaxZDifference: number;
  MinAbilityDuration: string;
  MinActiveDuration: number;
  MinCooldown: number;
  MinHeightAboveGround: number;
  MinHitCatcherRadius: number;
  MinObjQueryTime: number;
  MinObjQueueWaitTime: number;
  MinShotsAmount: number;
  MinSoundDist: number;
  Montages: CoreVariableLegs;
  MontagesMove: CoreVariableHead;
  NPCDamageMultiplier: number;
  OptionalObjTypeList: AssetLibraryUIIcons;
  PlayerLookAtBoneName: string;
  PlayerLookAtEnterDuration: number;
  PlayerLookAtPresetName: string;
  PlayerPushForce: number;
  PossessedWeaponParams: AbilityPrototypePossessedWeaponParams;
  PsyAbilityAimOffset: AbilityPrototypePsyAbilityAimOffset;
  PsyAttackSyncTag: string;
  PullToOwner: boolean;
  PullToOwnerRadius: AbilityPrototypeRadius;
  RadialImpulse: number;
  Radius: number;
  RemoveCooldownTags: SingletonConstantArmy;
  RequiredObjTypeList: AbilityPrototypeRequiredObjTypeList;
  ShieldParams: AbilityPrototypeShieldParams;
  ShiftbyX: number;
  ShouldIgnoreArmor: boolean;
  SID: string;
  SpawnAbilityBackSpawnAttempts: number;
  SpawnAbilityDistance: AbilityPrototypeRadius;
  SpawnAbilityFrontAngle: string;
  SpawnAbilityFrontSpawnAttempts: number;
  SpawnAbilityItemSIDs: AbilityPrototypeSpawnAbilityItemSIDs;
  SpawnRadius: string;
  SquadLimit: number;
  SummonParams: AbilityPrototypeSummonParams;
  SyncTag: string;
  TargetBone: string;
  ThrowAbilityCorpseTimeToHitSeconds: number;
  ThrowAbilityDamage: AbilityPrototypeRadius;
  ThrowAbilityDamageVolumeMultiplier: string;
  ThrowAbilityDistance: AbilityPrototypeRadius;
  ThrowAbilityFlyingSpeed: number;
  ThrowAbilityHeavyVolumeThreshold: number;
  ThrowAbilityLevitationAngularAccelerationRate: number;
  ThrowAbilityLevitationAngularVelocity: number;
  ThrowAbilityLevitationDisplacementFrequency: AIGlobalRelativeLocation;
  ThrowAbilityLevitationHeight: AbilityPrototypeRadius;
  ThrowAbilityLevitationSpeed: number;
  ThrowAbilityMaxLevitationDisplacement: AIGlobalRelativeLocation;
  ThrowAbilityThrowCorpses: boolean;
  ThrowAbilityThrowDelay: AbilityPrototypeRadius;
  ThrowAbilityTimeToHitSeconds: number;
  ThrowAbilityUnpossessSpeedPercent: number;
  ThrowDelay: AbilityPrototypeRadius;
  ThrowInterval: AbilityPrototypeRadius;
  ThrowProbability: string;
  ThrowSyncTag: string;
  TimeLimit: number;
  TimeToExplode: number;
  TimeToHitSeconds: number;
  TossLocationRadiusOffset: number;
  TriggeredCooldowns: AbilityPrototypeTriggeredCooldowns;
  UnpossessSpeedPercent: number;
  UseCustomPayload: boolean;
  VisibilityTestChannel: ECollisionChannel;
  VisibilityTestRadius: number;
  VisibilityThresholdSeconds: number;
  VitalCooldownCurve: string;
  VitalThreshold: number;
  VitalType: EVitalType;
  WeaponToEnemyVisibilityParams: AbilityPrototypeEnemyVisibilityParams;
  WeaponVFX: string;
  ZombificationType: EZombificationType;
  ZSpawnOffset: number;
}>;

export type AbilityPrototypeAgentToEnemyVisibilityParams = GetStructType<{
  CanSeeThroughOcluders: boolean;
  DistanceRange: AbilityPrototypeRadius;
  VisibilityTestChannel: ECollisionChannel;
}>;

export type AbilityPrototypeAkEvents = GetStructType<
  AbilityPrototypeAkEventsItem[]
>;

export type AbilityPrototypeAkEventsItem = GetStructType<{
  AkEvent: string;
  AkSwitches: SingletonConstantArmy;
}>;

export type AbilityPrototypeAnomalies = GetStructType<
  AbilityPrototypeAnomaliesItem[]
>;

export type AbilityPrototypeAnomaliesItem = GetStructType<{
  NiagaraPath: string;
  SID: string;
}>;

export type AbilityPrototypeBonesDamageSet =
  GetStructType<AbilityPrototypeBonesDamageSetItem>;

export type AbilityPrototypeBonesDamageSetItem = GetStructType<{
  DamageBone: EDamageBone;
}>;

export type AbilityPrototypeConditionalCooldowns = GetStructType<
  AbilityPrototypeConditionalCooldownsItem[]
>;

export type AbilityPrototypeConditionalCooldownsItem = GetStructType<{
  ConditionTag: string;
  TriggeredCooldowns: AbilityPrototypeTriggeredCooldowns;
}>;

export type AbilityPrototypeDamageParams = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  Bleeding: number;
  BleedingChanceIncrement: number;
  bShouldIgnoreArmor: boolean;
  Damage: number;
  DamageSource: EDamageSource;
  DamageType: EDamageType;
}>;

export type AbilityPrototypeEffects = GetStructType<
  AbilityPrototypeEffectsItem[]
>;

export type AbilityPrototypeEffectsDistanced = GetStructType<
  AbilityPrototypeEffectsDistancedItem[]
>;

export type AbilityPrototypeEffectsDistancedItem = GetStructType<{
  Chance: number;
  EffectPrototypeSID: string;
  MaxDistance: number;
  MinDistance: number;
}>;

export type AbilityPrototypeEffectsItem = GetStructType<{
  Chance: number;
  EffectPrototypeSID: string;
  ShouldPauseByDialog: boolean;
}>;

export type AbilityPrototypeEnemyVisibilityParams = GetStructType<{
  CanSeeThroughOcluders: boolean;
  DistanceRange: AbilityPrototypeRadius;
  OwnerEyesOffset: number;
  VisibilityTestChannel: ECollisionChannel;
  VisibilityTestRadius: number;
}>;

export type AbilityPrototypeIgnoredCalibersSet = GetStructType<
  AbilityPrototypeIgnoredCalibersSetItem[]
>;

export type AbilityPrototypeIgnoredCalibersSetItem = GetStructType<{
  IgnoredCaliber: EAmmoCaliber;
}>;

export type AbilityPrototypePossessedWeaponParams = GetStructType<{
  GroundOffset: number;
  MaxLevitationDisplacement: AIGlobalRelativeLocation;
  MaxLevitationFrequency: AIGlobalRelativeLocation;
  MovementSpeed: number;
  RotationSpeed: number;
  ShootingDuration: ObjPrototypeExplorationRadius;
}>;

export type AbilityPrototypePsyAbilityAimOffset = GetStructType<{
  AnimOffset: string;
  InterpolationSpeed: number;
  MaxAngle: number;
}>;

export type AbilityPrototypeRadius = GetStructType<{
  X: number;
  Y: number;
}>;

export type AbilityPrototypeRequiredObjTypeList = GetStructType<EObjType[]>;

export type AbilityPrototypeShieldParams = GetStructType<{
  AttachToBone: string;
  BlueprintPath: string;
  IsStationary: boolean;
  MaxTimeSinceLastDamage: number;
  MinAccumulatedDamage: number;
  MinDistToEnemy: number;
  ShieldSpawnDelay: number;
}>;

export type AbilityPrototypeSpawnAbilityItemSIDs = StringArray;

export type AbilityPrototypeSummonObjects = GetStructType<
  AbilityPrototypeSummonObjectsItem[]
>;

export type AbilityPrototypeSummonObjectsItem = GetStructType<{
  ActorNeedsDestroyOnDeath: boolean;
  Behaviour: ESummonBehaviourOnSpawn;
  Chance: number;
  DiesWhenAbilityOwnerDies: boolean;
  DiesWhenAbilityOwnerLeavesCombat: boolean;
  MaxLifetime: number;
  OffscreenTimeToDie: number;
  Orientation: ESummonSpawnOrientation;
  OrientationOffset: number;
  PrototypeSID: string;
  PsyNPCType: EPsyNPCType;
}>;

export type AbilityPrototypeSummonParams = GetStructType<{
  MaxInstancesInGroup: number;
  SpawnAngleDistribution: AbilityPrototypeRadius;
  SpawnAngleInitialOffset: AbilityPrototypeRadius;
  SpawnAroundEnemy: boolean;
  SpawnDelay: number;
  SpawnEffects: boolean;
  SpawnRadius: AbilityPrototypeRadius;
  SummonObjects: AbilityPrototypeSummonObjects;
  SwapPlaces: boolean;
}>;

export type AbilityPrototypeTriggeredCooldowns = GetStructType<
  AbilityPrototypeTriggeredCooldownsItem[]
>;

export type AbilityPrototypeTriggeredCooldownsItem = GetStructType<{
  bForce: boolean;
  CooldownTag: string;
  Duration: number;
}>;

export type Achievement = GetStructType<
  AchievementAchievementGoalsItem[] & {
    AcceptableInterval: number;
    AnomalyPrototypeSID: string;
    ArmorSIDs: AchievementArmorSIDs;
    BleedingThreshold: number;
    Calibers: AchievementCalibers;
    DrunkennessThreshold: number;
    DrunknessThreshold: number;
    FoodSet: AchievementFoodSet;
    HeadshotDistance: number;
    HungerThreshold: number;
    Items: AchievementItems;
    MarkerTypes: AchievementMarkerTypes;
    MinHeight: number;
    MinSquadSize: number;
    MutantSID: string;
    MutantsSID: AchievementArmorSIDs;
    NumberOfWeapons: number;
    PsyThreshold: number;
    RadiationThreshold: number;
    RequiredCount: number;
    SleepinessThreshold: number;
    TargetSID: string;
    TimeWindow: number;
  }
>;

export type AchievementAchievementGoalsItem = GetStructType<{
  Goal: number;
  SID: string;
}>;

export type AchievementArmorSIDs = StringArray;

export type AchievementCalibers = GetStructType<EAmmoCaliber[]>;

export type AchievementFoodSet = GetStructType<AIGlobalMaterialsItem[]>;

export type AchievementItems = StringArray;

export type AchievementMarkerTypes = GetStructType<EMarkerType[]>;

export type AIGlobal = GetStructType<{
  ALifeSettings: AIGlobalALifeSettings;
  AllowCorpseProcessForQuestAgent: boolean;
  AllowWeaponPickupBasedOnPrice: boolean;
  AllowWeaponPickupWhenLooting: boolean;
  AnomalyRestrictionsSettings: AIGlobalAnomalyRestrictionsSettings;
  AudioRoomLoudnessMultiplierList: AIGlobalAudioRoomLoudnessMultiplierList;
  CharacterPoseSettings: AIGlobalCharacterPoseSettings;
  CombatTacticsSettings: AIGlobalCombatTacticsSettings;
  ContextualActionSettings: AIGlobalContextualActionSettings;
  CorpseBehaviorFactionRestrictions: NPCPrototypeSkills;
  CoverSettings: AIGlobalCoverSettings;
  DangerAreaSettings: AIGlobalDangerAreaSettings;
  DeadBodyToConsiderAsThreatDuration: number;
  DistanceToSwitchToWalkIn: number;
  DistanceToSwitchToWalkOut: number;
  FlashlightInteractDuration: number;
  FlashlightTimeOfDayOff: number;
  FlashlightTimeOfDayOn: number;
  FlashlightUseSettings: AIGlobalFlashlightUseSettings;
  FocusLocationSelectionSettings: AIGlobalFocusLocationSelectionSettings;
  ForceRunInsteadSprintDistanceFromPathStart: number;
  ForceRunInsteadSprintDistanceToNextPortal: number;
  ForceRunInsteadSprintDistanceToPathEnd: number;
  ForceRunInsteadSprintPortalRotationAngleThreshold: number;
  HearingSensorSettings: AIGlobalHearingSensorSettings;
  HideWeaponWarningBarkDelay: string;
  LuminanceSettings: AIGlobalLuminanceSettings;
  MaterialTranslucencyList: AIGlobalMaterialTranslucencyList;
  MaxAgentsCount: number;
  MaxHideWeaponWarningFollowDistance: string;
  MinALifeDespawnDistance: number;
  MinALifeSpawnDistance: number;
  MutantCorpseProcessFactionPerRank: AIGlobalMutantCorpseProcessFactionPerRank;
  OfflineUsingGameGraphMoveFactor: number;
  PhysMatSettings: AIGlobalPhysMatSettings;
  PlayerFlashlightVisionSettings: AIGlobalPlayerFlashlightVisionSettings;
  PreyLighterOffVisibilityCoef: number;
  PreyLighterOnVisibilityCoef: number;
  ReactionOnEmissionSettings: AIGlobalReactionOnEmissionSettings;
  RegionRank: AIGlobalRegionRank;
  SID: string;
  SoundEventTypeSpreadSpeedList: AssetLibraryUIIcons;
  ThreatsSettings: AIGlobalThreatsSettings;
  ThrowGrenadeSettings: AIGlobalThrowGrenadeSettings;
  TimeToSkipLairPeacefulSpawnAfterMemberDies: number;
  TouchSensorSettings: AIGlobalTouchSensorSettings;
  WeaponAttachmentsModifiersList: AIGlobalWeaponAttachmentsModifiersList;
  WeaponLootDistance: number;
  WeatherSettings: AIGlobalWeatherSettings;
}>;

export type AIGlobalALifeSettings = GetStructType<{
  OfflineCombatAreaLifetimeSeconds: number;
}>;

export type AIGlobalAllowedRanks = GetStructType<EAgentRankMask[]>;

export type AIGlobalAnomalyRestrictionsSettings = GetStructType<{
  AnomalyRestrictionsIgnoreChanceZombie: number;
  AnomalyRestrictionsUpdateIntervalSeconds: number;
}>;

export type AIGlobalArmy = GetStructType<{ [k in Rank]: number }>;

export type AIGlobalAudioRoomLoudnessMultiplierList = GetStructType<
  AIGlobalAudioRoomLoudnessMultiplierListItem[]
>;

export type AIGlobalAudioRoomLoudnessMultiplierListItem = GetStructType<{
  LoudnessMultiplier: number;
  Type: EAudioRoomPresetBandwidth;
}>;

export type AIGlobalAvailableGrenadesPerFaction = GetStructType<{
  Army: AIGlobalArmy;
  Bandits: AIGlobalBandits;
  Humanoid: AIGlobalBandits;
}>;

export type AIGlobalBandits = GetStructType<
  { [k in Rank]: number } & {
    ChangeChance: number;
    ConfidenceToAttack: number;
    ConfidenceToRetreat: number;
    UpdateIntervalSecondsMax: number;
    UpdateIntervalSecondsMin: number;
  }
>;

export type AIGlobalCharacterPoseSettings = GetStructType<
  AIGlobalCharacterPoseSettingsItem[]
>;

export type AIGlobalCharacterPoseSettingsItem = GetStructType<{
  NoiseCoef: number;
  Pose: EStateTag;
  VisibilityCoef: number;
}>;

export type AIGlobalCombatTacticsParamsPerFactions = GetStructType<{
  Bandits: AIGlobalBandits;
  Humanoid: AIGlobalBandits;
  Monolith: AIGlobalMutant;
  Mutant: AIGlobalMutant;
}>;

export type AIGlobalCombatTacticsSettings = GetStructType<{
  CombatTacticsParamsPerFactions: AIGlobalCombatTacticsParamsPerFactions;
}>;

export type AIGlobalContextualActionSettings = GetStructType<{
  ContextualActionGameGraphPathActuationDistance: number;
  ContextualActionInterruptAnimationScaleWhenThreatened: number;
  ContextualActionSearchDistance: number;
  ContextualActionSearchFriendDistance: number;
  DistanceToEquipWeaponBeforeContextualAction: number;
  DistanceToHideWeaponBeforeContextualAction: number;
  DistanceToTurnOffFlashlightBeforeContextualActionSquared: number;
  DistanceToTurnOnFlashlightBeforeContextualActionSquared: number;
}>;

export type AIGlobalCoverSettings = GetStructType<{
  MinBehindTreeCoverHeight: string;
  MinGenericCoverHeight: string;
  MinGenericCoverWidth: string;
  MinHighCoverHeight: string;
  MinLowCoverHeight: string;
  MinSmartWidth: string;
}>;

export type AIGlobalDangerAreaSettings = GetStructType<{
  DangerAreaCostMultiplier: number;
  DangerAreaLifetimeDistance: number;
  DangerAreaLifetimeSeconds: number;
  DangerAreaMaxNum: number;
  DangerAreaOverlapsForRestriction: number;
  DangerAreaPlayerDamageAccumulationSeconds: number;
  DangerAreaRadius: number;
}>;

export type AIGlobalEnvironmentLuminanceCoefficients = GetStructType<{
  RoomBaseCoefficients: AIGlobalRoomBaseCoefficients;
  TimeOfDayBaseLuminance: AIGlobalTimeOfDayBaseLuminance;
  WeatherLuminanceCoefficients: AIGlobalWeatherLuminanceCoefficients;
}>;

export type AIGlobalFlashlightUseSettings = GetStructType<{
  FlashlightMeshDespawnDelay: number;
  FlashlightMeshDespawnNPCToCameraAngleThreshold: number;
  FlashlightMeshDespawnPlayerCameraFOVDistance: number;
  FlashlightMinStateTime: number;
  FlashlightUseLuminanceThresholdDayOff: number;
  FlashlightUseLuminanceThresholdDayOn: number;
  FlashlightUseTracePoints: AIGlobalFlashlightUseTracePoints;
  MaxFlashlightAgentProcessPerUpdate: number;
  MaxFlashlightsUsedSimultaneously: number;
  MaxFlashlightUseTracesPerUpdate: number;
}>;

export type AIGlobalFlashlightUseTracePoints = GetStructType<
  AIGlobalFlashlightUseTracePointsItem[]
>;

export type AIGlobalFlashlightUseTracePointsItem = GetStructType<{
  RelativeLocation: AIGlobalRelativeLocation;
}>;

export type AIGlobalFocusLocationSelectionSettings = GetStructType<{
  FocusLocationStartLookingEarlyOffset: number;
}>;

export type AIGlobalHearingSensorSettings = GetStructType<{
  NonEnemySoundHearingCoef: number;
  SoundVisionValidationThreshold: number;
}>;

export type AIGlobalLuminanceSettings = GetStructType<{
  BaseLuminance: number;
  EnvironmentLuminanceCoefficients: AIGlobalEnvironmentLuminanceCoefficients;
  LightLuminanceByTimeOfDayCurve: string;
  LightSourceLuminanceMultiplier: number;
  MaxLightGatheringRadius: number;
  MaxLuminanceAgentProcessPerUpdate: number;
  MaxLuminanceTracesPerUpdate: number;
  MinAmbientLuminanceToSkipTraces: number;
  ShadowLuminanceByTimeOfDayCurve: string;
  ShadowOffsetByTimeOfDayCurve: string;
}>;

export type AIGlobalMaterials = GetStructType<AIGlobalMaterialsItem[]>;

export type AIGlobalMaterialsItem = GetStructType<{
  SID: string;
}>;

export type AIGlobalMaterialTranslucencyList = GetStructType<
  AIGlobalMaterialTranslucencyListItem[]
>;

export type AIGlobalMaterialTranslucencyListItem = GetStructType<{
  Materials: AIGlobalMaterials;
  Translucency: number;
}>;

export type AIGlobalMutant = GetStructType<{
  ChangeChance: number;
  ConfidenceToAttack: number;
  ConfidenceToRetreat: number;
  UpdateIntervalSecondsMax: number;
  UpdateIntervalSecondsMin: number;
}>;

export type AIGlobalMutantCorpseProcessFactionPerRank = GetStructType<
  AIGlobalMutantCorpseProcessFactionPerRankItem[]
>;

export type AIGlobalMutantCorpseProcessFactionPerRankItem = GetStructType<{
  AllowedRanks: AIGlobalAllowedRanks;
  Faction: string;
}>;

export type AIGlobalPhysMatSettings = GetStructType<
  AIGlobalPhysMatSettingsItem[]
>;

export type AIGlobalPhysMatSettingsItem = GetStructType<{
  CharacterNoiseCoef: number;
  MaterialType: EPhysicalMaterialType;
}>;

export type AIGlobalPlayerFlashlightVisionSettings = GetStructType<{
  FlashlightMaxVisionScorePerSecond: number;
  FlashlightMinVisionScorePerSecond: number;
  FlashlightVisionConeHalfAngle: number;
  FlashlightVisionConeLength: number;
  NumTracePointsPerVisionUpdate: number;
}>;

export type AIGlobalReactionOnEmissionSettings = GetStructType<{
  DistanceToAvoidPreparingForEmission: number;
  DistanceToShelterToWalk: number;
  InvulnerableAfterEmissionStart: number;
  MinCoveredDistanceToChangeMovementType: number;
  ReceivedDamageTimeToEnterCombatDuringEmission: number;
  ReceivedDamageToEnterCombatDuringEmission: number;
  SheltersSearchDistance: number;
  TransitionAlphaToPrepareForEmission: number;
}>;

export type AIGlobalRegionRank = GetStructType<AIGlobalRegionRankItem[]>;

export type AIGlobalRegionRankItem = GetStructType<{
  MaxRank: ERank;
  MinRank: ERank;
  Region: ERegion;
}>;

export type AIGlobalRelativeLocation = GetStructType<{
  X: number;
  Y: number;
  Z: number;
}>;

export type AIGlobalRoomBaseCoefficients = GetStructType<
  AIGlobalRoomBaseCoefficientsItem[]
>;

export type AIGlobalRoomBaseCoefficientsItem = GetStructType<{
  Coefficient: number;
  RoomType: EAudioRoomPresetBandwidth;
}>;

export type AIGlobalThreatsSettings = GetStructType<{
  CorpseSmellAfterDeathTimeout: number;
  EnemyReportDelaySeconds: number;
  FlairIdentifyAsEnemyOutsideFrontZoneMultiplier: number;
  LootingCorpsesDeathTimeInterval: number;
  ThreatReportDelaySeconds: number;
}>;

export type AIGlobalThrowGrenadeSettings = GetStructType<{
  AvailableGrenadesPerFaction: AIGlobalAvailableGrenadesPerFaction;
}>;

export type AIGlobalTimeOfDayBaseLuminance = GetStructType<
  AIGlobalTimeOfDayBaseLuminanceItem[]
>;

export type AIGlobalTimeOfDayBaseLuminanceItem = GetStructType<{
  Luminance: number;
  TimeFrom: number;
  TimeTill: number;
}>;

export type AIGlobalTouchSensorSettings = GetStructType<{
  TouchDistanceThreshold: number;
  TouchNonEnemyPlayerLookAtTime: number;
  TouchNonEnemyPlayerReactionTime: number;
  TouchSensorCooldown: number;
}>;

export type AIGlobalWeaponAttachmentsModifiersList = GetStructType<
  AIGlobalWeaponAttachmentsModifiersListItem[]
>;

export type AIGlobalWeaponAttachmentsModifiersListItem = GetStructType<{
  HearingDistanceModifier: number;
  ThreatPointsMultiplier: number;
  WeaponAttachmentSID: string;
}>;

export type AIGlobalWeatherLuminanceCoefficients = GetStructType<
  AIGlobalWeatherLuminanceCoefficientsItem[]
>;

export type AIGlobalWeatherLuminanceCoefficientsItem = GetStructType<{
  Coefficient: number;
  WeatherType: EWeather;
}>;

export type AIGlobalWeatherSettings = GetStructType<
  AIGlobalWeatherSettingsItem[]
>;

export type AIGlobalWeatherSettingsItem = GetStructType<{
  FlairCoef: number;
  HearingDistanceCoef: number;
  VisibilityCoef: number;
  WeatherSID: string;
}>;

export type AimAssistConePrototype = GetStructType<{
  AimAssistWeightsSID: string;
  AngleCurvePath: string;
  HeightCurvePath: string;
  SID: string;
  TrackedBones: AimAssistConePrototypeTrackedBones;
}>;

export type AimAssistConePrototypeTrackedBones = GetStructType<EDamageBone[]>;

export type AimAssistPresetPrototype = GetStructType<{
  LostTargetTrackingTime: number;
  MagnetismAimAssistConeSIDs: CoreVariableHead;
  MovingTrackingAimAssistConeSID: string;
  SID: string;
  SnappingAimAlphaThreshold: number;
  SnappingAimAssistConeSID: string;
  SnappingCameraHorizontalMovementTolerance: number;
  SnappingCameraRadiusTolerance: number;
  SnappingCameraVerticalMovementTolerance: number;
  SnappingRecoilModifier: number;
  SnappingTimeCurvePath: string;
  StationaryTrackingAimAssistConeSID: string;
  StickinessAimAssistConeSID: string;
}>;

export type AimAssistWeightsPrototype = GetStructType<{
  InitialWeight: number;
  MinWeight: number;
  SID: string;
  WeightRules: AimAssistWeightsPrototypeWeightRules;
}>;

export type AimAssistWeightsPrototypeWeightRules = GetStructType<
  AimAssistWeightsPrototypeWeightRulesItem[]
>;

export type AimAssistWeightsPrototypeWeightRulesItem = GetStructType<{
  Type: EAimAssistWeightType;
  WeightModifier: number;
}>;

export type ALifeDirectorScenarioPrototype = GetStructType<{
  ALifeScenarioNPCArchetypesLimitsPerPlayerRank: ALifeDirectorScenarioPrototypeALifeScenarioNPCArchetypesLimitsPerPlayerRank;
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
  FallbackNPCTypes: CoreVariableLegs;
  ProhibitedAgentTypes: ALifeDirectorScenarioPrototypeProhibitedAgentTypes;
  RestrictedObjPrototypeSIDs: ALifeDirectorScenarioPrototypeRestrictedObjPrototypeSIDs;
  ScenarioGroups: ALifeDirectorScenarioPrototypeScenarioGroups;
  Scenarios: ALifeDirectorScenarioPrototypeScenarios;
  SID: string;
}>;

export type ALifeDirectorScenarioPrototypeALifeScenarioNPCArchetypesLimitsPerPlayerRank =
  GetStructType<
    ALifeDirectorScenarioPrototypeALifeScenarioNPCArchetypesLimitsPerPlayerRankItem[]
  >;

export type ALifeDirectorScenarioPrototypeALifeScenarioNPCArchetypesLimitsPerPlayerRankItem =
  GetStructType<{
    Rank: ERank;
    Restrictions: ALifeDirectorScenarioPrototypeRestrictions;
  }>;

export type ALifeDirectorScenarioPrototypeHub = GetStructType<{
  PostSpawnDirectorTimeoutMax: number;
  PostSpawnDirectorTimeoutMin: number;
  ScenarioSIDs: ALifeDirectorScenarioPrototypeScenarioSIDs;
  SID: string;
  SpawnDelayMax: number;
  SpawnDelayMin: number;
}>;

export type ALifeDirectorScenarioPrototypeMutant_AttackEnemyLair =
  GetStructType<{
    ExpansionSquadNumMax: number;
    ExpansionSquadNumMin: number;
    PlayerRequiredRank: ERank;
    ScenarioGroupsTarget: EALifeDirectorScenarioTarget;
    ScenarioSquads: ALifeDirectorScenarioPrototypeScenarioSquads;
    ScenarioWeight: number;
    SID: string;
  }>;

export type ALifeDirectorScenarioPrototypeProhibitedAgentTypes = GetStructType<
  EAgentType[]
>;

export type ALifeDirectorScenarioPrototypeRestrictedObjPrototypeSIDs =
  StringArray;

export type ALifeDirectorScenarioPrototypeRestrictions = GetStructType<
  ALifeDirectorScenarioPrototypeRestrictionsItem[]
>;

export type ALifeDirectorScenarioPrototypeRestrictionsItem = GetStructType<{
  AgentType: EAgentType;
  MaxCount: number;
}>;

export type ALifeDirectorScenarioPrototypeScenarioGroups = GetStructType<{
  [key in ScenarioGroup]: ALifeDirectorScenarioPrototypeHub;
}>;

export type ALifeDirectorScenarioPrototypeScenarios = GetStructType<{
  [k in string]: ALifeDirectorScenarioPrototypeMutant_AttackEnemyLair;
}>;

export type ALifeDirectorScenarioPrototypeScenarioSIDs = GetStructType<{
  [k in string]: ALifeDirectorScenarioPrototypeMutant_AttackEnemyLair;
}>;

export type ALifeDirectorScenarioPrototypeScenarioSquads = GetStructType<
  ALifeDirectorScenarioPrototypeScenarioSquadsItem[]
>;

export type ALifeDirectorScenarioPrototypeScenarioSquadsItem = GetStructType<{
  AgentArchetype: EAgentArchetype;
  AgentPrototypeSID: string;
  AliveMultiplierMax: number;
  AliveMultiplierMin: number;
  bPlayerEnemy: boolean;
  DeadMultiplier: number;
  RelationGroup: number;
  WoundedMultiplier: number;
}>;

export type ALifePolicyPrototype = GetStructType<{
  CorpseRadius: number;
  FarLairDistance: string;
  FullWipeRefillCooldown: string;
  MaxCorpsePerRadius: string;
  MaxRefillDistance: number;
  MinRefillDistance: number;
  PartialWipeRefillCooldown: string;
  SeenLongAgoByPlayerSec: string;
  SID: string;
  StopExtinction: number;
  StopOfflineALifeCorpseDecomposition: number;
  TriggerExtinction: number;
  TriggerOfflineALifeCorpseDecomposition: number;
}>;

export type ALifePopulationManagerFactionPrototype = GetStructType<{
  ALifeLairExpansionRadius: number;
  ALifeLairExpansionTime: number;
  ALifeStartSimulation: string;
  Factions: ALifePopulationManagerFactionPrototypeFactions;
  SID: string;
}>;

export type ALifePopulationManagerFactionPrototypeALifeFactionGoals =
  GetStructType<{
    [key in FactionGoalType]: ALifePopulationManagerFactionPrototypeNormal;
  }>;

export type ALifePopulationManagerFactionPrototypeFactions = GetStructType<{
  [key in Faction]: ALifePopulationManagerFactionPrototypeRat;
}>;

export type ALifePopulationManagerFactionPrototypeNormal = GetStructType<{
  MaxLairs: number;
  MinLairs: number;
  TacticType: EALifeFactionGoalType;
}>;

export type ALifePopulationManagerFactionPrototypeRat = GetStructType<{
  ALifeFactionGoals: ALifePopulationManagerFactionPrototypeALifeFactionGoals;
  ALifeLairExpansionBattleChance: number;
  Faction: string;
}>;

export type AmmoPrototype = GetStructType<{
  AimDispersionMod: number;
  AmmoPackCount: number;
  AmmoType: EAmmoType;
  ArmorDamageMod: number;
  ArmorPiercingMod: number;
  BleedingMod: number;
  Caliber: EAmmoCaliber;
  CaliberSoundSwitch: string;
  Cost: number;
  CoverPiercingMod: number;
  CrosshairMod: ECrosshairType;
  DamageMod: number;
  DamageSource: EDamageSource;
  DispersionMod: number;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  FittingWeaponsSIDs: SingletonConstantArmy;
  FlatnessMod: number;
  FPShellFXPath: string;
  FractionCount: number;
  Icon: string;
  ImpulseToObjectsMod: number;
  ItemGridWidth: number;
  ItemTypeSwitchValue: string;
  MaxStackCount: number;
  MeshPrototypeSID: string;
  OffsetAimDispersionMod: number;
  PhysicsInteractionPrototypeSID: string;
  RecoilMod: number;
  ShellSoundEventPath: string;
  SID: string;
  TPShellFXPath: string;
  Type: EItemType;
  WeaponExhaustionMod: number;
  Weight: number;
}>;

export type AnimationBudgetPrototype = GetStructType<{
  AlwaysTickFalloffAggression: number;
  AutoCalculatedSignificanceMaxDistance: number;
  BudgetFactorBeforeAggressiveReducedWork: number;
  BudgetFactorBeforeReducedWork: number;
  BudgetFactorBeforeReducedWorkEpsilon: number;
  BudgetInMs: number;
  BudgetPressureBeforeEmergencyReducedWork: number;
  BudgetPressureSmoothingSpeed: number;
  CalculateSignificanceMethod: ECalculateSignificance;
  DistanceSignificanceMultiplier: number;
  InitialEstimatedWorkUnitTimeMs: number;
  InterpolationFalloffAggression: number;
  InterpolationMaxRate: number;
  InterpolationTickMultiplier: number;
  MaxInterpolatedComponents: number;
  MaxTickedOffsreenComponents: number;
  MaxTickRate: number;
  MinQuality: number;
  ReducedWorkThrottleMaxInFrames: number;
  ReducedWorkThrottleMaxPerFrame: number;
  ReducedWorkThrottleMinInFrames: number;
  ScreenSizeSignificanceMultiplier: number;
  SID: string;
  SignificanceMultiplierCurve: string;
  SignificanceMultiplierForInvisibleComponents: number;
  StateChangeThrottleInFrames: number;
  WorkUnitSmoothingSpeed: number;
}>;

export type AnomalyOverlapPrototype = GetStructType<{
  FirstAnomalyType: EAnomalyType;
  IsOverlapAllowed: boolean;
  SecondAnomalyType: EAnomalyType;
  SID: number;
}>;

export type AnomalyPrototype = GetStructType<{
  ActivateFeedbackRadius: number;
  ActivationDelay: string;
  ActivationSpeedThreshold: number;
  ActiveSwitchPath: string;
  AlphaAngleDeg: number;
  AngularDamping: number;
  AnomalyElementType: EAnomalyElementType;
  AnomalyInterpolationSpeed: number;
  AnomalySpeedToMaxArtifacts: number;
  AnomalyStuckTime: number;
  ArtifactEatingExplodeHeight: number;
  ArtifactEatingExplodeRadius: number;
  ArtifactEatingRadius: number;
  ArtifactEatingTime: number;
  ArtifactNavigationHeight: number;
  AuxBusPath: string;
  bBulletDestruction: boolean;
  bHasSpaceRestrictor: boolean;
  Blueprint: string;
  BoltActivationAngle: number;
  BoltAngularVelocityMultiplier: number;
  BoltLinearVelocityMultiplier: number;
  BonesToTrace: AnomalyPrototypeBonesToTrace;
  bTraceObjectsOnOverlap: boolean;
  BubblePrototype: AnomalyPrototypeBubblePrototype;
  BulletSpeedOverride: number;
  CharacterPushingImpulse: number;
  ClickerOtherAnomalyJumpChance: number;
  ClickerOuterRadius: number;
  ClickerOuterRadiusJumpChance: number;
  CloseArtifactRadius: number;
  CollisionFormType: ECollisionFormType;
  CollisionHeight: number;
  Cooldown: number;
  CullingDistance: string;
  DamageEffectSpawnChance: number;
  DefaultAnomalyRadius: number;
  DefaultHeightOffset: number;
  DestructibleDamage: number;
  DiamondAuxFilter: string;
  DiamondParticle: string;
  Duration: number;
  EMIDuration: number;
  EMIRadius: number;
  EpicenterRadius: number;
  EquipmentDamage: number;
  ExplosionActiveTime: number;
  FadeRate: number;
  FadeSwitchPath: string;
  FadeTime: number;
  FakeArtifactSpawnAmountMax: number;
  FakeArtifactSpawnAmountMin: number;
  FirstPersonSwitchPath: string;
  FlamePillarHeight: number;
  FlamePillarRadius: number;
  GrenadeAngularVelocityMultiplier: number;
  GrenadeLinearVelocityMultiplier: number;
  HuntDistance: number;
  IdleSwitchPath: string;
  IgnoredProjectileSIDs: NPCPrototypeSkills;
  ImmuneObjPrototypeSIDs: NPCPrototypeSkills;
  InteractionEffectPrototypeSIDs: CoreVariableTorso;
  ItemDefaultVelocityMultiplier: number;
  LavaClotTTLMax: number;
  LavaClotTTLMin: number;
  LavaHitEffectPrototypeSIDs: CoreVariableHead;
  LavaItemHitEffectPrototypeSIDs: NPCPrototypeSkills;
  LiftingHeight: number;
  LiftUpTime: number;
  LinearDamping: number;
  MaxArtifactsToUpSpeed: number;
  MovementLocationPriorityRadius: number;
  MovementSpeed: number;
  MoveToTargetUpdateDelay: number;
  ObjectDamageDistanceThreshold: number;
  OnlyDetectSlotsArtifacts: boolean;
  OutputBusVolume: number;
  OutputBusVolumeInterpolationTime: number;
  OverridePhysicsMaterial: string;
  ParticleChargeTime: number;
  ParticleCollisionRadius: number;
  ParticleCooldownTime: number;
  ParticleDamageRadius: number;
  ParticleMaxCount: string;
  ParticleMinDistanceToTarget: number;
  ParticlePrototype: AnomalyPrototypeParticlePrototype;
  ParticleSpawnDelay: number;
  ParticleSpawnHeight: number;
  ParticleSpawnPredictionTime: number;
  PassiveEffectPrototypeSIDs: CoreVariableHead;
  PillowVFXLerpDuration: number;
  PlayerSpiralingPower: number;
  PlayerStanceChangeEffectPrototypeSIDs: AssetLibraryUIIcons;
  PostInteractionEffectPrototypeSIDs: NPCPrototypeSkills;
  PreInteractionEffectPrototypeSIDs: NPCPrototypeSkills;
  PullForce: number;
  PushImpulse: number;
  PushingForce: number;
  PushingImpulse: number;
  Radius: number;
  RTPC_Anomaly_Flycatcher_InfluenceLevel: string;
  SFX_Anomaly_Flycatcher: string;
  ShouldLiftUpSimulatePhysics: boolean;
  SID: string;
  SoundEventPath: string;
  SpawnParticleBottomThreshold: number;
  SpawnParticleTopThreshold: number;
  SpeedRotationInPlace: number;
  "ST_GameState-Default": string;
  "ST_GameState-Flycatcher": string;
  TargetChaseTime: number;
  TargetLostDelay: number;
  ThirdPersonSwitchPath: string;
  TimeToCenter: number;
  ToxicCloudAppearTime: number;
  ToxicCloudBoxCollision: AIGlobalRelativeLocation;
  ToxicCloudDisappearChance: number;
  ToxicCloudDisappearCheck: number;
  ToxicCloudDisappearTime: number;
  TriggerSwitchPath: string;
  Type: EAnomalyType;
  VFXBlendInTime: number;
  VFXBlendOutTime: number;
  VFXHideRadius: number;
  VoidRadiusMax: number;
  VoidRadiusMin: number;
  WaterContactMaxApplicationDistance: number;
  WaterContactNiagaraSystemVFX: string;
  ZeroGravityRadius: number;
}>;

export type AnomalyPrototypeBonesToTrace = GetStructType<
  EObjSkeletalMeshTraceBone[]
>;

export type AnomalyPrototypeBubblePrototype = GetStructType<{
  BubbleFormationTime: number;
  DamageRadius: number;
  MaxHP: number;
  MaxSpeed: number;
  MinHP: number;
  MinSpeed: number;
  ReflectionOffset: number;
  SpeedGainTime: number;
  SpeedLossTime: number;
  TargetIgnoreTime: number;
  TargetLocationUpdateFrequency: number;
  TargetOffset: number;
}>;

export type AnomalyPrototypeParticlePrototype = GetStructType<{
  CollisionRadiusMax: number;
  CollisionRadiusMin: number;
  DamageRadius: number;
  InitialSpeedInterpolationTime: number;
  InteractionEffectPrototypeSIDs: CoreVariableTorso;
  MaxHP: number;
  MaxInitialSpeed: number;
  MaxSpeed: number;
  MaxTTL: number;
  MinHP: number;
  MinInitialSpeed: number;
  MinSpeed: number;
  MinTTL: number;
  ParticleAmountMax: number;
  ParticleAmountMin: number;
  ReflectionOffset: number;
  SpeedGainTime: number;
  SpeedLossTime: number;
  SpreadingRadius: number;
  TargetOffset: number;
}>;

export type ArmorPrototype = GetStructType<{
  ArmorSoundType: string;
  ArtifactSlots: number;
  BaseDurability: number;
  bBlockHead: boolean;
  bPreventFromLimping: boolean;
  Cost: number;
  EffectPrototypeSIDs: CoreVariableHead;
  Icon: string;
  IncreaseSpeedCoef: number;
  Invisible: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeshGenerator: ArmorPrototypeMeshGenerator;
  MeshPrototypeSID: string;
  NoiseCoef: number;
  NpcMeshGenerator: ArmorPrototypeNpcMeshGenerator;
  PhysicsInteractionPrototypeSID: string;
  PreinstalledUpgrades: NPCPrototypeSkills;
  Protection: ArmorPrototypeProtection;
  ProtectionNPC: ArmorPrototypeProtection;
  SectionSettings: ArmorPrototypeSectionSettings;
  SID: string;
  StaggerEffectPrototypeSID: string;
  Type: EItemType;
  UpgradePrototypeSIDs: ArmorPrototypeUpgradePrototypeSIDs;
  VoiceModulatorSID: string;
  Weight: number;
}>;

export type ArmorPrototypeMeshGenerator = GetStructType<
  ArmorPrototypeMeshGeneratorItem[]
>;

export type ArmorPrototypeMeshGeneratorItem = GetStructType<{
  MeshGeneratorPrototypeSID: string;
  Weight: number;
}>;

export type ArmorPrototypeNpcMeshGenerator = GetStructType<
  ArmorPrototypeMeshGeneratorItem[]
>;

export type ArmorPrototypeProtection = GetStructType<{
  Burn: number;
  ChemicalBurn: number;
  Fall: number;
  PSY: number;
  Radiation: number;
  Shock: number;
  Strike: number;
}>;

export type ArmorPrototypeSectionSettings = GetStructType<
  ArmorPrototypeSectionSettingsItem[]
>;

export type ArmorPrototypeSectionSettingsItem = GetStructType<{
  BottomPosition: number;
  LeftPosition: number;
  ModuleLineDirection: ELineDirection;
  RightPoition: number;
  SectionIsEnabled: boolean;
  TopPosition: number;
  UpgradeLineDirection: ELineDirection;
  UpgradeTargetPartType: EUpgradeTargetPartType;
}>;

export type ArmorPrototypeUpgradePrototypeSIDs = StringArray;

export type ArtifactPrototype = GetStructType<{
  AnomalyDamageDeflections: ArtifactPrototypeAnomalyDamageDeflections;
  AnomalyElementType: EAnomalyElementType;
  ArchiartifactType: EArchiartifactType;
  ArtifactSpawn: boolean;
  ArtifactType: EArtifactType;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  bUseCharge: string;
  ChargeFullDecreaseSound: string;
  ChargeFullIncreaseSound: string;
  ChargeThreshold: number;
  ChargingSound: string;
  ChargingSpeed: number;
  Cost: number;
  DamageToStaminaCoefficient: number;
  DamageToWeightCoefficient: number;
  DestroyOnPickup: boolean;
  DetectorRequired: boolean;
  DisableCollisionWhenHide: boolean;
  EffectOnPickPrototypeSIDs: ArtifactPrototypeEffectOnPickPrototypeSIDs;
  EffectPrototypeSIDs: CoreVariableTorso;
  EffectsDisplayTypes: ArtifactPrototypeEffectsDisplayTypes;
  EffectsDuration: number;
  FakeArtifactDissolveSound: string;
  FakeArtifactDissolveVFX: string;
  FakeArtifactDistortionSound: string;
  FakeArtifactDistortionVFX: string;
  FakeArtifactHaloVFX: string;
  HasPhysics: boolean;
  Icon: string;
  InactiveIcon: string;
  IsQuestItem: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
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
  MaxStackCount: number;
  MaxWeight: number;
  MeshPrototypeSID: string;
  MinimalDrunkenness: number;
  MinWeight: number;
  NegativeEffectPrototypeSIDs: NPCPrototypeSkills;
  ParticleOnImpact: string;
  ParticleOnShow: string;
  ParticleStateTransitionFadeIn: string;
  ParticleStateTransitionFadeInDelay: number;
  ParticleStateTransitionFadeOut: string;
  ParticleStateTransitionFadeOutDelay: number;
  Persistent: boolean;
  PhysicsInteractionPrototypeSID: string;
  PlayerDistance: number;
  PositiveEffectPrototypeSIDs: CoreVariableTorso;
  Radius: number;
  Rarity: EArtifactRarity;
  ReturnDistanceValue: number;
  ShouldShowEffects: ArtifactPrototypeShouldShowEffects;
  SID: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StateTransitionDelay: number;
  Strafe: boolean;
  Type: EItemType;
  ViewOffset: AIGlobalRelativeLocation;
  WakeUpEffectSIDs: NPCPrototypeSkills;
  Weight: number;
  WeightDecreaseAmount: number;
  WeightDecreaseDelay: number;
  WeightDecreaseRate: number;
}>;

export type ArtifactPrototypeAnomalyDamageDeflections = GetStructType<
  ArtifactPrototypeAnomalyDamageDeflectionsItem[]
>;

export type ArtifactPrototypeAnomalyDamageDeflectionsItem = GetStructType<{
  AnomalyType: EAnomalyType;
  ChargeQuantity: number;
  DamageDeflection: number;
  TimeToReduceCharge: number;
}>;

export type ArtifactPrototypeEffectOnPickPrototypeSIDs = GetStructType<
  string[] & {
    ViewOffset: AIGlobalRelativeLocation;
  }
>;

export type ArtifactPrototypeEffectsDisplayTypes = GetStructType<
  EEffectDisplayType[]
>;

export type ArtifactPrototypeShouldShowEffects = GetStructType<boolean[]>;

export type ArtifactSpawnerPrototype = GetStructType<
  { [k in Rank]: ArtifactSpawnerPrototypeMaster } & {
    ExcludeRules: ArtifactSpawnerPrototypeExcludeRules;
    ID: number;
    ListOfArtifacts: ArtifactSpawnerPrototypeListOfArtifacts;
    SID: string;
    SingleArtifactSpawner: boolean;
    UseListOfArtifacts: boolean;
  }
>;

export type ArtifactSpawnerPrototypeExcludeRules = GetStructType<
  EArtifactSpawnerExcludeRule[]
>;

export type ArtifactSpawnerPrototypeListOfArtifacts = StringArray;

export type ArtifactSpawnerPrototypeMaster = GetStructType<{
  Count: number;
  MaxCooldown: number;
  MinCooldown: number;
  Radius: number;
  RarityChance: ArtifactSpawnerPrototypeRarityChance;
  SpawnChanceBase: number;
  SpawnChanceBonus: number;
}>;

export type ArtifactSpawnerPrototypeRarityChance = GetStructType<{
  Common: number;
  Epic: number;
  Rare: number;
  Uncommon: number;
}>;

export type AssetLibrary = GetStructType<{
  AkEffectShareSet: AssetLibraryAkEffectShareSet;
  AKRtpc: AssetLibraryAKRtpc;
  AnimationBlueprints: AssetLibraryAnimationBlueprints;
  AnomalyBlueprint: string;
  Blueprint: AssetLibraryBlueprint;
  CharacterBlueprint: AssetLibraryCharacterBlueprint;
  CurveFloat: AssetLibraryCurveFloat;
  InteractableBlueprint: AssetLibraryInteractableBlueprint;
  ItemIcons: AssetLibraryUIIcons;
  Material: AssetLibraryUIIcons;
  MaterialInstanceConstant: AssetLibraryMaterialInstanceConstant;
  MaterialParameterCollection: AssetLibraryMaterialParameterCollection;
  NavModifiers: string;
  NiagaraSystems: AssetLibraryNiagaraSystems;
  NPCSpawnerBlueprint: string;
  ParticleSystems: AssetLibraryParticleSystems;
  ProjectileBlueprint: AssetLibraryProjectileBlueprint;
  SkeletalMesh: AssetLibrarySkeletalMesh;
  StaticMesh: AssetLibraryStaticMesh;
  Texture2D: string;
  TextureRenderTarget2D: AssetLibraryUIIcons;
  UIIcons: AssetLibraryUIIcons;
  UIWidgetBlueprint: AssetLibraryUIWidgetBlueprint;
}>;

export type AssetLibraryAkEffectShareSet = GetStructType<{
  Full: string;
  Medium: string;
  Narrow: string;
}>;

export type AssetLibraryAKRtpc = GetStructType<{
  CutsceneRTPCParameter: string;
  DeathRTPCParameter: string;
  DialogueRTPCParameter: string;
  DialogueVolumeRTPCParameter: string;
  DisableCopyrightedMusicRTPCParameter: string;
  EffectsVolumeRTPCParameter: string;
  MainVolumeRTPCParameter: string;
  MusicVolumeRTPCParameter: string;
  MuteAllRTPCParameter: string;
}>;

export type AssetLibraryAnimationBlueprints = GetStructType<{
  BoltAnimationBlueprint: string;
  InjectorAnimationBlueprint: string;
  KnifeAnimationBlueprint: string;
  PDAAnimationBlueprint: string;
}>;

export type AssetLibraryBlueprint = GetStructType<{
  Bolt: string;
  LevelTreesCollection: string;
  Lever: string;
  SceneCaptureCube: string;
  TripleLever: string;
}>;

export type AssetLibraryCharacterBlueprint = GetStructType<{
  Player: string;
}>;

export type AssetLibraryCurveFloat = GetStructType<{
  AimingWeaponDirtCurve: string;
  AimingWeaponFOVCurve: string;
  AmbientSoundCurve: string;
  CrouchCurve: string;
  DefaultDoorCurveBothWays: string;
  DefaultLeverCurve: string;
  DefaultLeverCurveReverse: string;
  EndTranslationWorldMapCurve: string;
  FadeoutScreenCurve: string;
  FlailAlphaCurve: string;
  InteractProgressBarCurve: string;
  LadderEnterCurve: string;
  LandPredictionAlphaCurve: string;
  MusicSoundCurve: string;
  StartTranslationWorldMapCurve: string;
  TranslationWorldMapCurve: string;
  ZoomCameraCurve: string;
}>;

export type AssetLibraryInteractableBlueprint = GetStructType<{
  ItemContainer: string;
  SkeletalItemContainer: string;
}>;

export type AssetLibraryMaterialInstanceConstant = GetStructType<{
  BoltMaterialPath: string;
  Clouds: string;
  PDAMaterial: string;
}>;

export type AssetLibraryMaterialParameterCollection = GetStructType<{
  Foliage: string;
  FOV: string;
  MPC_PPM: string;
}>;

export type AssetLibraryNiagaraSystems = GetStructType<{
  TwinkleIdle: string;
  TwinkleInterract: string;
}>;

export type AssetLibraryParticleSystems = GetStructType<{
  BodyExplodeParticle: string;
}>;

export type AssetLibraryProjectileBlueprint = GetStructType<{
  BP_A000D: string;
  BP_A000DTP: string;
}>;

export type AssetLibrarySkeletalMesh = GetStructType<{
  BoltSkeletal: string;
  GuitarSkeletal: string;
  InjectorSkeletal: string;
  InjectorSkeleton: string;
  KnifeSkeletal: string;
  PDASkeletal: string;
  SK_ful_sta_01: string;
}>;

export type AssetLibraryStaticMesh = GetStructType<{
  BoxTrigger: string;
  CylinderShape: string;
  CylinderTrigger: string;
  SphereTrigger: string;
}>;

export type AssetLibraryUIIcons = GetStructType<{}>;

export type AssetLibraryUIWidgetBlueprint = GetStructType<{
  AttachSelectorClass: string;
  BackgroundBlurViewClass: string;
  DebugHUDWidgetClass: string;
  DialogWidgetClass: string;
  FadeoutScreenWidgetClass: string;
  FastDialogClass: string;
  GamePauseMenuClass: string;
  GuitarPlayWidgetClass: string;
  HUDWidgetClass: string;
  InspectArtifactWidgetClass: string;
  InteractWidgetClass: string;
  InventoryWidgetClass: string;
  ItemSelectorClass: string;
  MainMenuWidgetClass: string;
  MarkerCompassWidgetClass: string;
  MarkerIconsDataTable: string;
  PDAClass: string;
  PlayVideoWidgetClass: string;
  RightClickMenuWidgetClass: string;
  SleepWidgetClass: string;
  SubtitleClass: string;
  TradeWidgetClass: string;
  UpgradesWidgetClass: string;
  WorldMapHubMarkerClass: string;
  WorldMapMarcerClass: string;
  WorldMapPlayerMarkerClass: string;
  WorldMapRegionMarkerClass: string;
}>;

export type AttachMeshPrototype = GetStructType<
  AttachMeshPrototypeTor_mer_01_a_PSYItem[] & {
    AdditionalCollisions: AttachMeshPrototypeAdditionalCollisions;
    AdditionalMesh: AttachMeshPrototypeAdditionalMesh;
    AnimPath: string;
    bHasClothSimulation: boolean;
    bHasExoskeleton: boolean;
    BodyMeshType: EBodyMeshType;
    bReceiveAttachedDecals: boolean;
    bReceiveDecals: boolean;
    bRenderCustomDepthPass: boolean;
    bShouldUseParentBound: boolean;
    bUseCustomLODSync: boolean;
    ComponentTags: NPCPrototypeSkills;
    FaceBlockingBlendMaskPrototypeSID: string;
    GroomBlockingMappingPrototypeSID: string;
    GroomPrototypeSID: string;
    IsSkeletal: boolean;
    ItemPrototypeSID: string;
    LODSyncMapping: AttachMeshPrototypeLODSyncMapping;
    MaterialCount: number;
    MaterialLODs: AttachMeshPrototypeMaterialLODs;
    Materials: AttachMeshPrototypeMaterials;
    MeshPath: string;
    MeshType: EMeshSubType;
    OffsetX: number;
    OffsetY: number;
    OffsetZ: number;
    ParentMeshPath: string;
    RotationPitch: number;
    RotationRoll: number;
    RotationYaw: number;
    ScaleX: number;
    ScaleY: number;
    ScaleZ: number;
    ShadowMeshPath: string;
    SID: string;
    SkeletonPath: string;
    SocketName: string;
    SyncOption: string;
    VoiceModulatorSID: string;
  }
>;

export type AttachMeshPrototypeAdditionalCollisions = GetStructType<{
  BoxCollisions: AttachMeshPrototypeBoxCollisions;
  CapsuleCollisions: AttachMeshPrototypeCapsuleCollisions;
}>;

export type AttachMeshPrototypeAdditionalMesh = GetStructType<
  AttachMeshPrototypeAdditionalMeshItem[]
>;

export type AttachMeshPrototypeAdditionalMeshItem = GetStructType<{
  BodyMeshSID: string;
  MaterialCount: number;
  MeshPath: string;
  SkeletonPath: string;
}>;

export type AttachMeshPrototypeBoxCollisions = GetStructType<
  AttachMeshPrototypeBoxCollisionsItem[]
>;

export type AttachMeshPrototypeBoxCollisionsItem = GetStructType<{
  CollisionProfileName: string;
  ComponentName: string;
  Extent: AIGlobalRelativeLocation;
  PhysicalMaterialPath: string;
  SocketName: string;
  TransformTranslation: AIGlobalRelativeLocation;
}>;

export type AttachMeshPrototypeCapsuleCollisions = GetStructType<
  AttachMeshPrototypeCapsuleCollisionsItem[]
>;

export type AttachMeshPrototypeCapsuleCollisionsItem = GetStructType<{
  CollisionProfileName: string;
  ComponentName: string;
  HalfHeight: number;
  PhysicalMaterialPath: string;
  Radius: number;
  SocketName: string;
  TransformRotator: SpawnActorPrototypeRotation;
  TransformTranslation: AIGlobalRelativeLocation;
}>;

export type AttachMeshPrototypeCustomData = GetStructType<{
  Chevron_index: AttachMeshPrototypeTeeth;
  Damage: AttachMeshPrototypeDirt;
  DamageIndex_01: AttachMeshPrototypeTeeth;
  DamageIndex_02: AttachMeshPrototypeTeeth;
  DamagePoss_01: AttachMeshPrototypeDamagePoss_01;
  DamagePoss_02: AttachMeshPrototypeDamagePoss_01;
  DamageRotation_Index_01: AttachMeshPrototypeDamagePoss_01;
  DamageRotation_Index_02: AttachMeshPrototypeDamagePoss_01;
  DamageScale_Index_01: AttachMeshPrototypeDamagePoss_01;
  DamageScale_Index_02: AttachMeshPrototypeTeeth;
  DefectIntensity_Index: AttachMeshPrototypeDamagePoss_01;
  Defects: AttachMeshPrototypeDirt;
  Dirt: AttachMeshPrototypeDirt;
  Dirt_Intensity: AttachMeshPrototypeDirt_Intensity;
  FrecklesDensity_Index: AttachMeshPrototypeTeeth;
  Normal_Intensity: AttachMeshPrototypeDamagePoss_01;
  SkinTone_Index: AttachMeshPrototypeDirt_Intensity;
  Teeth: AttachMeshPrototypeTeeth;
  TeethColor: AttachMeshPrototypeTeeth;
}>;

export type AttachMeshPrototypeDamagePoss_01 = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  ParameterID: number;
  VariationCount: number;
}>;

export type AttachMeshPrototypeDirt = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  Variations: AttachMeshPrototypeVariations;
}>;

export type AttachMeshPrototypeDirt_Intensity = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  ParameterID: number;
  VariationCount: number;
  Variations: AttachMeshPrototypeVariations;
}>;

export type AttachMeshPrototypeLODSyncMapping = GetStructType<number[]>;

export type AttachMeshPrototypeMaterialInstanceParameters = GetStructType<
  AttachMeshPrototypeMaterialInstanceParametersItem[]
>;

export type AttachMeshPrototypeMaterialInstanceParametersItem = GetStructType<{
  ParameterName: string;
  TexturePath: string;
}>;

export type AttachMeshPrototypeMaterialLODs = GetStructType<
  AttachMeshPrototypeMaterialLODsItem[]
>;

export type AttachMeshPrototypeMaterialLODsItem = GetStructType<{
  LODLevel: number;
  LODSectionIndex: number;
  MaterialPostfix: string;
}>;

export type AttachMeshPrototypeMaterials = GetStructType<
  AttachMeshPrototypeMaterialsItem[]
>;

export type AttachMeshPrototypeMaterialsItem = GetStructType<{
  CustomData: AttachMeshPrototypeCustomData;
  MaterialGroup: string;
  MaterialSlot: number;
  Variations: AttachMeshPrototypeVariations;
}>;

export type AttachMeshPrototypeTeeth = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  ParameterID: number;
  Variations: AttachMeshPrototypeVariations;
}>;

export type AttachMeshPrototypeTor_mer_01_a_PSYItem = GetStructType<{
  MaterialGroup: string;
  MaterialSlot: number;
  Variations: AttachMeshPrototypeVariations;
}>;

export type AttachMeshPrototypeVariations = GetStructType<
  AttachMeshPrototypeVariationsItem[]
>;

export type AttachMeshPrototypeVariationsItem = GetStructType<{
  MaterialInstanceParameters: AttachMeshPrototypeMaterialInstanceParameters;
  MaterialPath: string;
  ParameterValue: number;
  VariationIndex: number;
  Weight: number;
}>;

export type AttachPrototype = GetStructType<{
  AttachInstallSound: string;
  AttachType: EAttachType;
  AttachUninstallSound: string;
  bPermanent: boolean;
  CanHoldBreath: boolean;
  Cost: number;
  EffectPrototypeSIDs: SingletonConstantArmy;
  FittingWeaponsSIDs: SpawnActorPrototypeLockReceivers;
  FPParticlesBasedOnHeating: AttachPrototypeFPParticlesBasedOnHeating;
  HideOnAttachPrototypeIDInstalled: PDATutorialPrototypeImages;
  Icon: string;
  InventoryActionTime: number;
  IronSight: AttachPrototypeIronSight;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemTypeSwitchValue: string;
  LaserSight: AttachPrototypeLaserSight;
  LayerImagePriority: number;
  LocalizationSID: string;
  Magazine: AttachPrototypeMagazine;
  MaxStackCount: number;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  Scope: AttachPrototypeScope;
  ShootingAttach: AttachPrototypeShootingAttach;
  SID: string;
  Slot: EAttachSlot;
  SortGroup: ESortGroup;
  SortPriority: number;
  Type: EItemType;
  WeaponFlashlight: AttachPrototypeWeaponFlashlight;
  Weight: number;
}>;

export type AttachPrototypeAimingEffects = GetStructType<{
  PlayerOnlyEffects: NPCPrototypeSkills;
}>;

export type AttachPrototypeFPParticlesBasedOnHeating = GetStructType<
  AttachPrototypeFPParticlesBasedOnHeatingItem[]
>;

export type AttachPrototypeFPParticlesBasedOnHeatingItem = GetStructType<{
  PostShooting: AttachPrototypeShooting;
  Shooting: AttachPrototypeShooting;
  VFXGroupName: string;
}>;

export type AttachPrototypeIronSight = GetStructType<{
  MeshArray: AttachPrototypeMeshArray;
}>;

export type AttachPrototypeLaserSight = GetStructType<{
  LaserEndLightOffset: number;
  LaserStartTraceOffset: number;
  MaxLaserDistance: number;
  MaxLaserTimeOnDrop: number;
  MinLaserDistance: number;
  MinLaserTimeOnDrop: number;
  MinOffsetAimLaserDistance: number;
  PlayerVFXPath: string;
  StartSocketName: string;
  VFXPath: string;
}>;

export type AttachPrototypeMagazine = GetStructType<{
  BindBulletsToAttach: boolean;
  HasMultipleMeshes: boolean;
  IsTwinMagazine: boolean;
  MaxAmmo: number;
  MeshArray: AttachPrototypeMeshArray;
  PhysicsInteractionPrototypeSID: string;
}>;

export type AttachPrototypeMeshArray = GetStructType<
  AttachPrototypeMeshArrayItem[]
>;

export type AttachPrototypeMeshArrayItem = GetStructType<{
  MagazineMeshType: EMagazineMeshType;
  MeshPrototypeSID: string;
  Socket: string;
}>;

export type AttachPrototypeScope = GetStructType<{
  AimingCutoutRadius: number;
  AimingCutoutThreshold: number;
  AimingEffects: AttachPrototypeAimingEffects;
  BaseZoomCoefficientIndex: number;
  bOverrideAimingEffects: boolean;
  ChangeZoomScopeSound: string;
  ZoomCoefficients: AttachPrototypeZoomCoefficients;
}>;

export type AttachPrototypeShooting = GetStructType<{
  MinHeatingValueToAppear: number;
  PFXPath: string;
  SocketName: string;
}>;

export type AttachPrototypeShootingAttach = GetStructType<{
  WeaponPrototypeSID: string;
}>;

export type AttachPrototypeWeaponFlashlight = GetStructType<{
  FlashlightPrototypeID: number;
}>;

export type AttachPrototypeZoomCoefficients = GetStructType<number[]>;

export type AudioRoomPrototype = GetStructType<{
  AudioRoomBakedReflection: string;
  AudioRoomBandwidth: string;
  LateReverb: AudioRoomPrototypeLateReverb;
  Room: AudioRoomPrototypeRoom;
  SID: string;
}>;

export type AudioRoomPrototypeLateReverb = GetStructType<{
  AuxBux: string;
  FadeRate: number;
  Priority: number;
  SendLevel: number;
}>;

export type AudioRoomPrototypeRoom = GetStructType<{
  AuxSendLevel: number;
  BeginRoomOverlapEvent: string;
  EndRoomOverlapEvent: string;
  Priority: number;
  RoomTone: string;
  TransmissionLoss: number;
}>;

export type AudioScattererPrototype = GetStructType<{
  AudioScattererMap: string;
  CheckTime: number;
  ID: number;
  ListOfBrushes: AudioScattererPrototypeListOfBrushes;
  ScanRadiusFor2DEvents: number;
  SID: string;
}>;

export type AudioScattererPrototypeListOf3DEvents = GetStructType<
  AudioScattererPrototypeListOf3DEventsItem[]
>;

export type AudioScattererPrototypeListOf3DEventsItem = GetStructType<{
  "3DEvent": string;
  Height: number;
  MaxDistFromPlayer: number;
  MinDistFromPlayer: number;
  SpawnChanceOnDay: number;
  SpawnChanceOnNight: number;
}>;

export type AudioScattererPrototypeListOfBrushes = GetStructType<
  AudioScattererPrototypeListOfBrushesItem[]
>;

export type AudioScattererPrototypeListOfBrushesItem = GetStructType<{
  "2DEvent": string;
  BrushColor: number;
  Event2DFadeOutTime: number;
  ListOf3DEvents: AudioScattererPrototypeListOf3DEvents;
  SID: string;
  VisualizationColor: WeatherPrototypeColor1;
}>;

export type AutoSaveVariable = GetStructType<{
  AutoSaveIntervalTime: number;
  AutoSaveOnFailRetryIntervalTime: number;
}>;

export type BackpackPrototype = GetStructType<{
  AnimationPath: string;
  MeshPath: string;
  Priority: number;
  SID: string;
}>;

export type BarbedWirePrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BleedingChance: number;
  BleedingValue: number;
  bOverlappable: boolean;
  Damage: number;
  DamageDelay: number;
  ID: number;
  MovementSpeedDegradeDelay: number;
  NegativeEffectPrototypeSIDs: CoreVariableHead;
  SID: string;
}>;

export type BenchmarkItemGeneratorPrototype = GetStructType<{
  ID: number;
  ItemGenerator: BenchmarkItemGeneratorPrototypeItemGenerator;
  SID: string;
}>;

export type BenchmarkItemGeneratorPrototypeItemGenerator = GetStructType<
  BenchmarkItemGeneratorPrototypeItemGeneratorItem[]
>;

export type BenchmarkItemGeneratorPrototypeItemGeneratorItem = GetStructType<{
  bAllowSameCategoryGeneration: boolean;
  Category: EItemGenerationCategory;
  PossibleItems: BenchmarkItemGeneratorPrototypePossibleItems;
}>;

export type BenchmarkItemGeneratorPrototypePossibleItems = GetStructType<
  BenchmarkItemGeneratorPrototypePossibleItemsItem[]
>;

export type BenchmarkItemGeneratorPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxCount: number;
  AmmoMinCount: number;
  bRequireWeapon: string;
  Chance: number;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Weight: number;
}>;

export type BenchmarkMeshGeneratorPrototype = GetStructType<{
  Attachments: BenchmarkMeshGeneratorPrototypeAttachments;
  CustomData: BenchmarkMeshGeneratorPrototypeCustomData;
  Groom: BenchmarkMeshGeneratorPrototypeGroom;
  Materials: BenchmarkMeshGeneratorPrototypeMaterials;
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type BenchmarkMeshGeneratorPrototypeAttaches = GetStructType<
  BenchmarkMeshGeneratorPrototypeAttachesItem[]
>;

export type BenchmarkMeshGeneratorPrototypeAttachesItem = GetStructType<{
  BlockingBodyMeshes: DialogPrototypeLocalizedSequences;
  BlockingSlots: SingletonConstantZombie;
  BodyMeshSID: string;
  Weight: number;
}>;

export type BenchmarkMeshGeneratorPrototypeAttachments = GetStructType<
  BenchmarkMeshGeneratorPrototypeAttachmentsItem[]
>;

export type BenchmarkMeshGeneratorPrototypeAttachmentsItem = GetStructType<{
  Attaches: BenchmarkMeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type BenchmarkMeshGeneratorPrototypeCustomData = GetStructType<
  BenchmarkMeshGeneratorPrototypeMaterialsItem[]
>;

export type BenchmarkMeshGeneratorPrototypeGroom = GetStructType<
  BenchmarkMeshGeneratorPrototypeGroomItem[]
>;

export type BenchmarkMeshGeneratorPrototypeGroomItem = GetStructType<{
  CategoryName: string;
  Variations: BenchmarkMeshGeneratorPrototypeVariations;
}>;

export type BenchmarkMeshGeneratorPrototypeMaterials = GetStructType<
  BenchmarkMeshGeneratorPrototypeMaterialsItem[]
>;

export type BenchmarkMeshGeneratorPrototypeMaterialsItem = GetStructType<{
  MaterialGroup: string;
  Variations: BenchmarkMeshGeneratorPrototypeVariations;
}>;

export type BenchmarkMeshGeneratorPrototypeVariations = GetStructType<
  BenchmarkMeshGeneratorPrototypeVariationsItem[]
>;

export type BenchmarkMeshGeneratorPrototypeVariationsItem = GetStructType<{
  ParameterValue: number;
  VariationIndex: number;
  Weight: number;
}>;

export type BlueprintPrototype = GetStructType<{
  DestroyOnPickup: boolean;
  FittingWeaponsSIDs: NPCPrototypeSkills;
  Icon: string;
  Invisible: boolean;
  InvisibleInPlayerInventory: boolean;
  IsQuestItemPrototype: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  LocalizationSID: string;
  MeshPrototypeSID: string;
  SID: string;
  Type: EItemType;
  Weight: number;
}>;

export type BodyMeshPrototype = GetStructType<{
  AdditionalMesh: BodyMeshPrototypeAdditionalMesh;
  AnimPath: string;
  BodyMeshType: EBodyMeshType;
  GroomPrototypeSID: string;
  IsSkeletal: boolean;
  ItemPrototypeSID: string;
  Materials: BodyMeshPrototypeMaterials;
  MeshPath: string;
  MeshType: EMeshSubType;
  OffsetX: number;
  OffsetY: number;
  OffsetZ: number;
  RotationPitch: number;
  RotationRoll: number;
  RotationYaw: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  SID: string;
  SocketName: string;
}>;

export type BodyMeshPrototypeAdditionalMesh = GetStructType<
  BodyMeshPrototypeAdditionalMeshItem[]
>;

export type BodyMeshPrototypeAdditionalMeshItem = GetStructType<{
  MeshPath: string;
}>;

export type BodyMeshPrototypeMaterials = GetStructType<
  BodyMeshPrototypeMaterialsItem[]
>;

export type BodyMeshPrototypeMaterialsItem = GetStructType<{
  MaterialGroup: string;
  MaterialSlot: number;
  Variations: BodyMeshPrototypeVariations;
}>;

export type BodyMeshPrototypeVariations = GetStructType<
  BodyMeshPrototypeVariationsItem[]
>;

export type BodyMeshPrototypeVariationsItem = GetStructType<{
  MaterialPath: string;
  Weight: number;
}>;

export type BodyMeshSimulatePhysicsPrototype = GetStructType<{
  BonesToApplyPhysics: SingletonConstantArmy;
  SID: string;
}>;

export type BoltPrototype = GetStructType<{
  CrosshairType: ECrosshairType;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
}>;

export type BoolProviderPrototype = GetStructType<{
  bInvert: boolean;
  bPlayerTarget: boolean;
  ParamType: EObjBoolParams;
  SID: string;
  TraceHeight: number;
  Type: EBoolProviderType;
}>;

export type CameraManagerConstant = GetStructType<
  CameraManagerConstantFlagToMaterialItem[]
>;

export type CameraManagerConstantFlagToMaterialItem = GetStructType<{
  FlagValue: EPostProcessEffectType;
  MaterialObjectPath: string;
}>;

export type CameraShakeGroupPrototype = GetStructType<{
  BlendSpeed: number;
  MaxCount: number;
  SID: string;
  Type: ECameraShakeGroupType;
}>;

export type CameraShakePrototype = GetStructType<{
  CameraShakePath: string;
  GroupSID: string;
  IntensityProviderSID: string;
  InterpSpeed: number;
  NegativeInterpSpeed: number;
  PositiveInterpSpeed: number;
  Priority: number;
  Scale: number;
  SID: string;
  Type: ECameraShakeType;
  VitalType: EVitalType;
}>;

export type CharacterWeaponSettingsPrototype = GetStructType<{
  Accuracy: number;
  AccuracyUI: number;
  AlwaysPierce: boolean;
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseComfort: number;
  BaseDamage: number;
  BulletDropHeight: number;
  BulletDropLength: number;
  ChanceBleedingPerShot: number;
  CombatSynchronizationScore: CharacterWeaponSettingsPrototypeCombatSynchronizationScore;
  CoverPiercing: number;
  DamageUI: number;
  DispersionRadius: number;
  DispersionRadiusMultiplierByDistanceCurve: string;
  DistanceDropOffLength: number;
  DurabilityDamagePerShot: number;
  EffectiveFireDistanceMax: number;
  EffectiveFireDistanceMin: number;
  FireDistanceDispersion: number;
  FireDistanceDropOff: number;
  FireDistanceRecoilMax: number;
  FireDistanceRecoilMin: number;
  FireLoudness: number;
  HandlingUI: number;
  ImpulseToObjects: number;
  MinBulletDistanceArmorPiercingModifier: string;
  MinBulletDistanceDamageModifier: number;
  NPCToFriendlyDamageScaler: number;
  NPCToNPCDamageScaler: number;
  NPCToPlayerDamageScaler: number;
  RangeUI: number;
  RateOfFireUI: number;
  SID: string;
  StaggerEffectPrototypeSID: string;
  StealthReveal: number;
  UnequippedRelativeRotation: SpawnActorPrototypeRotation;
  UnequippedRelativeTranslation: AIGlobalRelativeLocation;
  UnequippedSocketName: string;
}>;

export type CharacterWeaponSettingsPrototypeCombatSynchronizationScore =
  GetStructType<NPCWeaponSettingsPrototypeCombatSynchronizationScoreItem[]>;

export type CluePrototype = GetStructType<{
  DefaultValue: string;
  Description: string;
  ID: number;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type CombatSynchronizationPrototype = GetStructType<
  { [k in Rank]: CombatSynchronizationPrototypeMaster } & {
    CombatEnteringUncheckedTags: NPCPrototypeSkills;
    DifficultySID: string;
    SID: string;
  }
>;

export type CombatSynchronizationPrototypeFilterGroups = GetStructType<
  CombatSynchronizationPrototypeFilterGroupsItem[]
>;

export type CombatSynchronizationPrototypeFilterGroupsItem = GetStructType<{
  AllowedTags: SingletonConstantZombie;
  CooldownMax: number;
  CooldownMin: number;
  MaxScore: number;
}>;

export type CombatSynchronizationPrototypeMaster = GetStructType<{
  FilterGroups: CombatSynchronizationPrototypeFilterGroups;
  SynchronizationPrimitives: CombatSynchronizationPrototypeSynchronizationPrimitives;
}>;

export type CombatSynchronizationPrototypeSynchronizationPrimitives =
  GetStructType<NPCWeaponSettingsPrototypeCombatSynchronizationScoreItem[]>;

export type ConstBoolProviderPrototype = GetStructType<{
  SID: string;
  Type: EBoolProviderType;
  Value: boolean;
}>;

export type ConstFloatProviderPrototype = GetStructType<{
  SID: string;
  Type: EFloatProviderType;
  Value: number;
}>;

export type ConstraintPrototype = GetStructType<{
  Constraints: ConstraintPrototypeConstraints;
  SID: string;
}>;

export type ConstraintPrototypeConstraints = GetStructType<
  ConstraintPrototypeConstraintsItem[]
>;

export type ConstraintPrototypeConstraintsItem = GetStructType<{
  ConstraintType: EAIConstraintType;
  Duration: number;
  MaxCount: number;
  Radius: number;
}>;

export type ConsumablePrototype = GetStructType<{
  AlternativeEffectPrototypeSIDs: UpgradePrototypeEffectPrototypeSIDs;
  AnimBlueprint: string;
  bIsUsesLeftHand: boolean;
  bIsUsesRightHand: boolean;
  ConsumableType: EConsumableType;
  ConsumeOnUse: boolean;
  Cost: number;
  EffectPrototypeSIDs: SpawnActorPrototypeLockReceivers;
  EffectsDisplayTypes: ConsumablePrototypeEffectsDisplayTypes;
  FastUseGroup: EFastUseGroupType;
  FastUsePrio: number;
  Icon: string;
  Icon1x1: string;
  InventoryActionTime: number;
  IsQuestItemPrototype: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemTags: NPCPrototypeSkills;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeshPath: string;
  MeshPrototypeSID: string;
  NegativeEffectPrototypeSIDs: ConsumablePrototypeNegativeEffectPrototypeSIDs;
  NegativeEffectsChance: number;
  PhysicsInteractionPrototypeSID: string;
  ShouldShowEffects: ConsumablePrototypeShouldShowEffects;
  SID: string;
  SocketName: string;
  SortGroup: ESortGroup;
  SortPriority: number;
  StaticMeshPrototypeSID: string;
  Type: EItemType;
  UIUseSound: EUISound;
  Usable: boolean;
  Weight: number;
}>;

export type ConsumablePrototypeEffectsDisplayTypes = GetStructType<
  EEffectDisplayType[]
>;

export type ConsumablePrototypeNegativeEffectPrototypeSIDs = GetStructType<
  ConsumablePrototypeNegativeEffectPrototypeSIDsItem[]
>;

export type ConsumablePrototypeNegativeEffectPrototypeSIDsItem = GetStructType<{
  Effect: string;
  Weight: number;
}>;

export type ConsumablePrototypeShouldShowEffects = GetStructType<boolean[]>;

export type ContextualActionBlueprintPrototype = GetStructType<{
  AnimationFinalFrameTransforms: ContextualActionBlueprintPrototypeAnimationFinalFrameTransforms;
  AttachReferenceNames: string;
  CanInteractWithPlayer: boolean;
  CompoundActorTags: string;
  ContextualAgentType: EContextualAgentType;
  DLC: string;
  Factions: string;
  InvolvedAgentCount: number;
  Needs: string;
  ShouldPlayInterruptAnimationInSpawnable: boolean;
  SID: string;
  SkeletalMesh: string;
  Skeleton: string;
  UsingWeapon: boolean;
}>;

export type ContextualActionBlueprintPrototypeAnimationFinalFrameTransforms =
  GetStructType<
    ContextualActionBlueprintPrototypeAnimationFinalFrameTransformsItem[]
  >;

export type ContextualActionBlueprintPrototypeAnimationFinalFrameTransformsItem =
  GetStructType<
    ContextualActionBlueprintPrototypeAnimationFinalFrameTransformsItemItem[]
  >;

export type ContextualActionBlueprintPrototypeAnimationFinalFrameTransformsItemItem =
  GetStructType<{
    Rotation: SpawnActorPrototypeRotation;
    Vector: AIGlobalRelativeLocation;
  }>;

export type ContextualActionBlueprintPrototypeNeeds = GetStructType<
  EContextualActionNeeds[]
>;

export type ContextualActionBodyPartsPrototype = GetStructType<{
  BodyParts: ContextualActionBodyPartsPrototypeBodyParts;
  SID: string;
}>;

export type ContextualActionBodyPartsPrototypeBodyParts = GetStructType<
  ContextualActionBodyPartsPrototypeBodyPartsItem[]
>;

export type ContextualActionBodyPartsPrototypeBodyPartsItem = GetStructType<{
  BodyPart: EContextualActionBodyPart;
  RestrictedItems: DialogPrototypeLocalizedSequences;
}>;

export type ContextualActionDialogSettingsPrototype = GetStructType<{
  MaxAnecdoteMembersCount: number;
  MaxDialogMembersCount: number;
  MinAnecdoteNeedValue: number;
  MinDialogNeedValue: number;
  MinMonologNeedValue: number;
  SID: string;
}>;

export type ContextualActionNodePrototype = GetStructType<{
  Effects: string;
  Enter: string;
  Execute: ContextualActionNodePrototypeExecute;
  Exit: string;
  Interrupt: string;
  NodePrototypeVersion: number;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
  SID: string;
}>;

export type ContextualActionNodePrototypeAnimationData = GetStructType<
  ContextualActionNodePrototypeAnimationDataItem[]
>;

export type ContextualActionNodePrototypeAnimationDataItem = GetStructType<{
  MontagePath: string;
  MontageSection: string;
}>;

export type ContextualActionNodePrototypeBodyParts = GetStructType<
  EContextualActionBodyPart[]
>;

export type ContextualActionNodePrototypeConditionalSelectorNodes =
  GetStructType<ContextualActionNodePrototypeConditionalSelectorNodesItem[]>;

export type ContextualActionNodePrototypeConditionalSelectorNodesItem =
  GetStructType<{
    AnimationData: ContextualActionNodePrototypeAnimationData;
    CanInteractWithPlayer: boolean;
    Effects: ContextualActionNodePrototypeEffects;
    Interrupt: ContextualActionNodePrototypeInterrupt;
    IsValidForQuestDialog: boolean;
    Need: EContextualActionNeeds;
    NodeType: EContextualActionNodeType;
    Preconditions: string;
    RandomSelectorNodes: ContextualActionNodePrototypeRandomSelectorNodes;
    Repetitions: ERepetitions;
    RepetitionsCount: number;
    SequentialSelectorNodes: ContextualActionNodePrototypeSequentialSelectorNodes;
    ShouldDisableDialogAnimations: boolean;
    ShouldPlayerCrouchDuringDialog: boolean;
    Weights: ContextualActionNodePrototypeWeights;
  }>;

export type ContextualActionNodePrototypeDistanceSelectorNodes = GetStructType<
  ContextualActionNodePrototypeDistanceSelectorNodesItem[]
>;

export type ContextualActionNodePrototypeDistanceSelectorNodesItem =
  GetStructType<{
    AnimationData: ContextualActionNodePrototypeAnimationData;
    CanInteractWithPlayer: boolean;
    Effects: string;
    Interrupt: ContextualActionNodePrototypeInterrupt;
    IsValidForQuestDialog: boolean;
    NodeType: EContextualActionNodeType;
    Preconditions: string;
    ShouldDisableDialogAnimations: boolean;
    ShouldPlayerCrouchDuringDialog: boolean;
  }>;

export type ContextualActionNodePrototypeEffects = GetStructType<
  ContextualActionNodePrototypeEffectsItem[]
>;

export type ContextualActionNodePrototypeEffectsItem = GetStructType<{
  ChangeValuePerSelector: number;
  ContextualActionNeed: EContextualActionNeeds;
  Type: EContextualActionEffectType;
}>;

export type ContextualActionNodePrototypeExecute = GetStructType<{
  AnimationData: ContextualActionNodePrototypeAnimationData;
  CanInteractWithPlayer: boolean;
  ConditionalSelectorNodes: ContextualActionNodePrototypeConditionalSelectorNodes;
  Effects: string;
  Interrupt: ContextualActionNodePrototypeInterrupt;
  IsValidForQuestDialog: boolean;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
  RandomSelectorNodes: ContextualActionNodePrototypeRandomSelectorNodes;
  Repetitions: ERepetitions;
  RepetitionsCount: number;
  SequentialSelectorNodes: ContextualActionNodePrototypeSequentialSelectorNodes;
  ShouldDisableDialogAnimations: boolean;
  ShouldPlayerCrouchDuringDialog: boolean;
  Weights: ContextualActionNodePrototypeWeights;
}>;

export type ContextualActionNodePrototypeExit = GetStructType<{
  DistanceSelectorCondition: EDistanceSelectorCondition;
  DistanceSelectorNodes: ContextualActionNodePrototypeDistanceSelectorNodes;
  Effects: string;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
}>;

export type ContextualActionNodePrototypeInterrupt = GetStructType<{
  AnimationData: ContextualActionNodePrototypeAnimationData;
  CanInteractWithPlayer: boolean;
  DistanceSelectorCondition: EDistanceSelectorCondition;
  DistanceSelectorNodes: ContextualActionNodePrototypeDistanceSelectorNodes;
  Effects: string;
  IsValidForQuestDialog: boolean;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
  ShouldDisableDialogAnimations: boolean;
  ShouldPlayerCrouchDuringDialog: boolean;
}>;

export type ContextualActionNodePrototypePreconditions = GetStructType<
  ContextualActionNodePrototypePreconditionsItem[]
>;

export type ContextualActionNodePrototypePreconditionsItem = GetStructType<{
  AllowedAgentType: number;
  AllowedFactions: NPCPrototypeSkills;
  AllowedUserRestriction: string;
  BodyParts: ContextualActionNodePrototypeBodyParts;
  GlobalVariableName: string;
  IsTargetWeather: boolean;
  ItemPrototypeSID: string;
  RequireMinRank: ERank;
  ShouldBeActive: boolean;
  ShouldBeTrue: boolean;
  Type: EContextualActionPreconditionType;
  Weather: ContextualActionNodePrototypeWeather;
}>;

export type ContextualActionNodePrototypeRandomSelectorNodes = GetStructType<
  ContextualActionNodePrototypeRandomSelectorNodesItem[]
>;

export type ContextualActionNodePrototypeRandomSelectorNodesItem =
  GetStructType<{
    AkAudioEvent: NPCPrototypeSkills;
    AnimationData: ContextualActionNodePrototypeAnimationData;
    CanInteractWithPlayer: boolean;
    Effects: string;
    Interrupt: ContextualActionNodePrototypeInterrupt;
    IsValidForQuestDialog: boolean;
    NodeType: EContextualActionNodeType;
    Preconditions: string;
    RandomSelectorNodes: ContextualActionNodePrototypeRandomSelectorNodes;
    Repetitions: ERepetitions;
    RepetitionsCount: number;
    SequentialSelectorNodes: ContextualActionNodePrototypeSequentialSelectorNodes;
    ShouldDisableDialogAnimations: boolean;
    ShouldPlayerCrouchDuringDialog: boolean;
    Weights: ContextualActionNodePrototypeWeights;
  }>;

export type ContextualActionNodePrototypeSequentialSelectorNodes =
  GetStructType<ContextualActionNodePrototypeSequentialSelectorNodesItem[]>;

export type ContextualActionNodePrototypeSequentialSelectorNodesItem =
  GetStructType<{
    AkAudioEvent: NPCPrototypeSkills;
    AnimationData: ContextualActionNodePrototypeAnimationData;
    CanInteractWithPlayer: boolean;
    ConditionalSelectorNodes: ContextualActionNodePrototypeConditionalSelectorNodes;
    Effects: string;
    IsValidForQuestDialog: boolean;
    NodeType: EContextualActionNodeType;
    Preconditions: string;
    RandomSelectorNodes: ContextualActionNodePrototypeRandomSelectorNodes;
    Repetitions: ERepetitions;
    RepetitionsCount: number;
    SequentialSelectorNodes: ContextualActionNodePrototypeSequentialSelectorNodes;
    ShouldDisableDialogAnimations: boolean;
    ShouldPlayerCrouchDuringDialog: boolean;
    Weights: ContextualActionNodePrototypeWeights;
  }>;

export type ContextualActionNodePrototypeWeather = GetStructType<EWeather[]>;

export type ContextualActionNodePrototypeWeights = GetStructType<
  ContextualActionNodePrototypeWeightsItem[]
>;

export type ContextualActionNodePrototypeWeightsItem = GetStructType<{
  Weight: number;
}>;

export type CookedMapsList = GetStructType<{
  FilePath: string;
  VisibleName: string;
}>;

export type CoreVariable = GetStructType<{
  AccumulateNPCToPlayerDamageSeconds: number;
  ActorCrouchHeight: number;
  AgentsDecalsPoolSize: number;
  AgentSpawnNavMeshQueryDistance: number;
  AimAlphaParamName: string;
  AimAssistBoneLocationOffset: number;
  AimAssistMaxOverlapsThreshold: number;
  AimAssistMinOverlapsThreshold: number;
  AimAssistSnappingBones: CoreVariableTorso;
  AimFOVRestoreTime: number;
  AimingWeaponDirtCurve: string;
  AimSocketName: string;
  AirPoltergeistSurfaceMaterial: string;
  AlifeCorpsesHardcap: number;
  ALifeGridUpdateDelay: number;
  ALifeGridVisionRadius: number;
  AnomalyAkComponentOffset: number;
  ArmorDeflectDamageCoefHuman: number;
  ArmorDeflectDamageCoefMutant: number;
  ArmorDeflectMaxChance: number;
  ArmorDeflectMinChance: number;
  ArmorDifferenceCoef: number;
  ArmorDurabilityParamsCoef: number;
  ArtifactOffsetFromAnomalyBorder: AIGlobalRelativeLocation;
  ArtifactSpawnAttemptsCount: number;
  ArtifactSpawnDistanceDelta: number;
  ArtifactSpawnHeightToNavmesh: number;
  ArtifactSpawnPityStructs: CoreVariableArtifactSpawnPityStructs;
  ArtifactStrafeMinDistance: number;
  ArtifactSurfaceMaterial: string;
  AsphaltSurfaceMaterial: string;
  AttentionConeAngle: number;
  AudioRoomPresetBandwidth: CoreVariableAudioRoomPresetBandwidth;
  AutoInteractionDistance: number;
  AutonomicTutorialWidgetClass: string;
  BackgroundBlurViewClass: string;
  bALifeTick: boolean;
  BaseActorHeight: number;
  BaseLookUpRate: number;
  BaseRepairCostModifier: number;
  BaseTurnRate: number;
  bAutoEquipArtifacts: boolean;
  bEnableDisassembleUI: boolean;
  bEnableHideInformationUI: boolean;
  bEnableWaterElement: boolean;
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
  BoltSkeletalMeshes: NPCPrototypeSkills;
  BoltStaticMeshes: NPCPrototypeSkills;
  BoneSurfaceMaterial: string;
  BoneToHitAreaMap: CoreVariableBoneToHitAreaMap;
  BP_DeveloperSpectator: string;
  BreadSurfaceMaterial: string;
  bResetArtifactLuckOnPickup: boolean;
  BrickSurfaceMaterial: string;
  BrokenGlassSurfaceMaterial: string;
  bShouldSaveDefaultLanguage: boolean;
  bStartWithLoadedWeapon: boolean;
  bStartWithMenu: boolean;
  CalmDamageFromPlayerCoef: number;
  CeramicSurfaceMaterial: string;
  ChanceToGetHealOverTimeWhenWounded: string;
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
  CooldownOnFallingWounded: string;
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
  CorpsesDecalsPoolSize: number;
  CorpseSeenOnlineTime: number;
  CorpseTimeout: number;
  CriticalDamageSoundCooldown: number;
  CriticalEffectStartUI: number;
  CriticalShotDamageSound: string;
  CutsceneFOVDefault: number;
  DamageInteractVFXs: CoreVariableDamageInteractVFXs;
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
  DefaultMapSize: AbilityPrototypeRadius;
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
  EffectsOnDestructWindowApplied: NPCPrototypeSkills;
  EffectsRemovedOnHealWounded: SingletonConstantZombie;
  EmissionCrowsFallFX: string;
  EmissionNeutralityTimer: number;
  EmissionStartLocation: AbilityPrototypeRadius;
  EnergeticOveruseParameter: string;
  EveningStartTime: number;
  ExplosionArmorDifferenceCoef: number;
  FactionRelationUpdateDelay: number;
  FadeoutScreenWidgetClass: string;
  FastbackState: string;
  FastDialogClass: string;
  FaustCloneCorpseTimeout: number;
  FaustCloneCountCap: number;
  FinalCreditsWithVideoClass: string;
  FirstTimeSettingsState: string;
  FlashlightCombatUseChance: AIGlobalArmy;
  FlashlightDialogIntensityLerpTime: number;
  FlashlightDialogIntensityPercent: number;
  FleshClothSurfaceMaterial: string;
  FleshCorpsesSurfaceMaterial: string;
  FleshIshPhysicalMaterials: CoreVariableFleshIshPhysicalMaterials;
  FleshMetalSurfaceMaterial: string;
  FleshRubberSurfaceMaterial: string;
  FleshSurfaceMaterial: string;
  FootstepsDecalFadeOutTime: number;
  FootStepsDecalsPoolSize: number;
  ForestGrassSurfaceMaterial: string;
  ForestPineSurfaceMaterial: string;
  FOVDefault: number;
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
  HandlessFOVAimModifier: number;
  HelmetDurabilityParamsCoef: number;
  HoldPreventFromDefaultInteractionPercent: number;
  HpThresholdToHealWound: number;
  HPThresholdToKill: number;
  HUDWidgetClass: string;
  IdleState: string;
  IdleSwayInterpolationSpeed: number;
  IKTraceDistance: number;
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
  InteractionDotsInnerConeAngle: number;
  InteractionDotsOuterConeAngle: number;
  InteractionDotsTraceRadius: number;
  InteractWidgetClass: string;
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
  ItemInfoAffectingEffects: CoreVariableItemInfoAffectingEffects;
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
  LimpEffectSIDToThresholdMap: CoreVariableLimpEffectSIDToThresholdMap;
  LoadingScreenWidgetClass: string;
  LocationAmbientState: string;
  LookGamepadInputCurves: CoreVariableTorso;
  LookUpGamepadInputCurve: string;
  LootMutantDeadBodySound: string;
  LootNPCDeadBodySound: string;
  LowDurabilityThreshold: number;
  LowerRightLocation: AbilityPrototypeRadius;
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
  MeshesDecalsPoolSize: number;
  MeshSoundPlacerDataTable: string;
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
  MoveGamepadInputCurves: CoreVariableTorso;
  MovementVFXArmorScale: CoreVariableMovementVFXArmorScale;
  MovementVFXFootStepDecalLifetime: number;
  MPC_Environment: string;
  MPC_Foliage: string;
  MPC_FOV: string;
  MPC_PPM: string;
  MusicManagerCombatEnemyAttackActionLifetimeSeconds: number;
  MusicManagerCombatScoreThreshold: number;
  MusicVolumeSlider: string;
  MutantLootAnimCollection: string;
  MutantLootAnimCollectionWithoutWidget: string;
  MutantLootContainerInteractRange: number;
  MutantLootInteractHeightMax: number;
  MutantLootInteractHeightMin: number;
  MutantLootParams: CoreVariableMutantLootParams;
  NarrowDynamicRangeState: string;
  NarrowTraceInteractionRadius: number;
  NewDLCPopupDisplayTime: number;
  NewDLCPopupWidgetClass: string;
  NiagaraProviderUpdateTimings: CoreVariableNiagaraProviderUpdateTimings;
  NightStartTime: number;
  NoiseIndicatorMaxHearingDistance: number;
  NoMusicAmbientState: string;
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
  PaperSurfaceMaterial: string;
  ParticleTraceLength: number;
  PathToInputActionAssets: string;
  PathToInputCurveAssets: string;
  PathToWaterObstructionTestTraceDist: number;
  PauseMenuOff_SFX: string;
  PauseMenuOn_SFX: string;
  PDAAnimationBlueprint: string;
  PDAClass: string;
  PermissibleAngleOfRotation: number;
  PersonalRelationUpdateDelay: number;
  PerspectiveThirdPersonRTPC: string;
  PhysicalMaterialFrictionCoefficients: CoreVariablePhysicalMaterialFrictionCoefficients;
  PlacesOfInterest: CoreVariablePlacesOfInterest;
  PlasticSurfaceMaterial: string;
  PlayerAudioLogVolumeDecreaseTime: number;
  PlayerBedSleepTime: number;
  PlayerDeathState: string;
  PlayerMeleeArmorDifferenceCoef: number;
  PlayerPrototypeSID: string;
  PlayerStartingCoords: AIGlobalRelativeLocation;
  PlayerStartingMoney: number;
  PlayVideoState: string;
  PlayVideoWidgetClass: string;
  PopupClass: string;
  PopupViewClass: string;
  PossessedWeaponFireIntervals: CoreVariablePossessedWeaponFireIntervals;
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
  RadiationInnerOffsetPresetValues: CoreVariableRadiationInnerOffsetPresetValues;
  RadiationPostEffectSID: string;
  RadiationPresetValues: CoreVariableRadiationPresetValues;
  RadioactivityParameter: string;
  RadioRange: number;
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
  ReputationRepairCostModifiers: CoreVariableReputationRepairCostModifiers;
  RestoreBackupClass: string;
  RightClickMenuWidgetClass: string;
  RockSurfaceMaterial: string;
  RubberSurfaceMaterial: string;
  SandSurfaceMaterial: string;
  ScopeMaterialInWorld: string;
  SignalStrength: CoreVariableSignalStrength;
  SimulatePhysicsDistance: number;
  SkeletalItemContainer: string;
  SkipHintClass: string;
  SkyLightUpdateDeltaTime: number;
  SlateSurfaceMaterial: string;
  SleepWidgetClass: string;
  SlowRunThreshold: number;
  SplashTutorialWidgetClass: string;
  StaminaFallingDamageCoef: number;
  StaminaRegenStateCoefs: CoreVariableStaminaRegenStateCoefs;
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
  StrikeGrenadeResistCoefs: CoreVariableStrikeGrenadeResistCoefs;
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
  UpgradesWidgetClass: string;
  UpgradeTooltipWidgetClass: string;
  UpgradeWidgetClass: string;
  UpperLeftLocation: AbilityPrototypeRadius;
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
  WeightAzimuthArrayPsyPhantom: CoreVariableWeightAzimuthArrayPsyPhantom;
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
  WorldWindDirectionInitial: AbilityPrototypeRadius;
  WoundCausingDamageSourceTypes: CoreVariableWoundCausingDamageSourceTypes;
  WoundedHealHoldInteractTime: number;
  WoundedStateHealthRegen: number;
  WoundHitAreasThresholds: CoreVariableWoundHitAreasThresholds;
  ZombieFactionUIDName: string;
}>;

export type CoreVariableAffectingEffectTypes = GetStructType<
  CoreVariableAffectingEffectTypesItem[]
>;

export type CoreVariableAffectingEffectTypesItem = GetStructType<{
  EffectType: EEffectType;
  Multiplier: number;
}>;

export type CoreVariableAGA = GetStructType<{
  FireInterval: number;
}>;

export type CoreVariableArtifactSpawnPityStructs = GetStructType<
  CoreVariableArtifactSpawnPityStructsItem[]
>;

export type CoreVariableArtifactSpawnPityStructsItem = GetStructType<{
  AttemptsCount: number;
  Rank: ERank;
  RarityLuckIncrease: CoreVariableRarityLuckIncrease;
}>;

export type CoreVariableAudioRoomPresetBandwidth = GetStructType<{
  Close: string;
  Custom: string;
  HalfOpen: string;
  Isolated: string;
  None: string;
  Open: string;
  PsyDome: string;
}>;

export type CoreVariableBoneToHitAreaMap = GetStructType<{
  Head: CoreVariableHead;
  Legs: CoreVariableLegs;
  Torso: CoreVariableTorso;
}>;

export type CoreVariableBurn = GetStructType<{
  VFXLifeTime: number;
  VFXPath: string;
}>;

export type CoreVariableDamageInteractVFXs = GetStructType<{
  Burn: CoreVariableBurn;
  ChemicalBurn: CoreVariableBurn;
  Shock: CoreVariableBurn;
  SteamBurn: CoreVariableBurn;
}>;

export type CoreVariableFleshIshPhysicalMaterials = GetStructType<
  EPhysicalMaterialType[]
>;

export type CoreVariableHead = StringArray;

export type CoreVariableItemInfoAffectingEffects = GetStructType<
  CoreVariableItemInfoAffectingEffectsItem[]
>;

export type CoreVariableItemInfoAffectingEffectsItem = GetStructType<{
  AffectingEffectTypes: CoreVariableAffectingEffectTypes;
  ItemInfoType: EItemInfoType;
}>;

export type CoreVariableLegs = StringArray;

export type CoreVariableLimpEffectSIDToThresholdMap = GetStructType<
  CoreVariableLimpEffectSIDToThresholdMapItem[]
>;

export type CoreVariableLimpEffectSIDToThresholdMapItem = GetStructType<{
  EffectSID: string;
  Threshold: number;
}>;

export type CoreVariableMovementVFXArmorScale = GetStructType<
  CoreVariableMovementVFXArmorScaleItem[]
>;

export type CoreVariableMovementVFXArmorScaleItem = GetStructType<{
  ArmorProtectionValue: number;
  ArmorScale: EArmorScale;
}>;

export type CoreVariableMutantLootParams = GetStructType<
  CoreVariableMutantLootParamsItem[]
>;

export type CoreVariableMutantLootParamsItem = GetStructType<{
  AgentType: EAgentType;
  CutDecalBoneName: string;
  CutRadiusModifier: number;
}>;

export type CoreVariableNiagaraProviderUpdateTimings = GetStructType<
  CoreVariableNiagaraProviderUpdateTimingsItem[]
>;

export type CoreVariableNiagaraProviderUpdateTimingsItem = GetStructType<{
  ProviderType: ENiagaraProviderType;
  UpdateTime: number;
}>;

export type CoreVariablePhysicalMaterialFrictionCoefficients = GetStructType<
  CoreVariablePhysicalMaterialFrictionCoefficientsItem[]
>;

export type CoreVariablePhysicalMaterialFrictionCoefficientsItem =
  GetStructType<{
    FrictionCoefficient: number;
    PhysicalMaterialType: EPhysicalMaterialType;
  }>;

export type CoreVariablePlacesOfInterest = GetStructType<
  CoreVariablePlacesOfInterestItem[]
>;

export type CoreVariablePlacesOfInterestItem = GetStructType<{
  SID: string;
  X: number;
  Y: number;
  Z: number;
}>;

export type CoreVariablePossessedWeaponFireIntervals = GetStructType<{
  [A012 in Caliber]: CoreVariableAGA;
}>;

export type CoreVariableRadiationInnerOffsetPresetValues = GetStructType<
  CoreVariableRadiationInnerOffsetPresetValuesItem[]
>;

export type CoreVariableRadiationInnerOffsetPresetValuesItem = GetStructType<{
  Preset: ERadiationInnerOffsetPreset;
  Value: number;
}>;

export type CoreVariableRadiationPresetValues = GetStructType<
  CoreVariableRadiationPresetValuesItem[]
>;

export type CoreVariableRadiationPresetValuesItem = GetStructType<{
  EffectPrototypeSIDs: NPCPrototypeSkills;
  GeigerRadiationIntensity: number;
  PostProcessRadiationIntensity: number;
  Preset: ERadiationPreset;
  RadiationPerSecondValue: number;
  RadioactivityValue: number;
}>;

export type CoreVariableRarityLuckIncrease = GetStructType<
  CoreVariableRarityLuckIncreaseItem[]
>;

export type CoreVariableRarityLuckIncreaseItem = GetStructType<{
  LuckIncrease: number;
  Rarity: EArtifactRarity;
}>;

export type CoreVariableReputationRepairCostModifiers = GetStructType<
  CoreVariableReputationRepairCostModifiersItem[]
>;

export type CoreVariableReputationRepairCostModifiersItem = GetStructType<{
  Modifier: number;
  RelationLevel: ERelationLevel;
}>;

export type CoreVariablesCustom = GetStructType<{
  bAllowDropOnClick: boolean;
  bGSCEnsure: boolean;
  bShowBrokenGameDataWindows: boolean;
  bStartWithMenu: boolean;
  InventoryPenaltyLessWeight: number;
  InventorySPDrainCoef: number;
  InventorySPOverweightDrainCoef: number;
  PathToBrokenGameData: string;
  StaminaFallingDamageCoef: number;
  TriggerDebugDrawDistance: number;
}>;

export type CoreVariableSignalStrength = GetStructType<number[]>;

export type CoreVariableStaminaRegenStateCoefs = GetStructType<
  CoreVariableStaminaRegenStateCoefsItem[]
>;

export type CoreVariableStaminaRegenStateCoefsItem = GetStructType<{
  StateTag: EStateTag;
  Value: number;
}>;

export type CoreVariableStrikeGrenadeResistCoefs = GetStructType<
  CoreVariableStrikeGrenadeResistCoefsItem[]
>;

export type CoreVariableStrikeGrenadeResistCoefsItem = GetStructType<{
  GrenadeDamageResist: number;
  ProtectionStrike: number;
}>;

export type CoreVariableTorso = StringArray;

export type CoreVariableWeightAzimuthArrayPsyPhantom = GetStructType<
  CoreVariableWeightAzimuthArrayPsyPhantomItem[]
>;

export type CoreVariableWeightAzimuthArrayPsyPhantomItem = GetStructType<{
  MaxAngle: number;
  MinAngle: number;
  Weight: number;
}>;

export type CoreVariableWoundCausingDamageSourceTypes = GetStructType<
  EDamageSource[]
>;

export type CoreVariableWoundHitAreasThresholds = GetStructType<{
  Default: number;
  Head: number;
  Legs: number;
  Torso: number;
}>;

export type CorpseClueStashPrototype = GetStructType<{
  AdditionalSearchRadius: number;
  AddSpawnChance: number;
  BaseSpawnChance: number;
  CorpseClueData: CorpseClueStashPrototypeCorpseClueData;
  Region: ERegion;
  SID: string;
}>;

export type CorpseClueStashPrototypeCorpseClueData = GetStructType<
  CorpseClueStashPrototypeCorpseClueDataItem[]
>;

export type CorpseClueStashPrototypeCorpseClueDataItem = GetStructType<{
  Rank: ERank;
  RankClue: CorpseClueStashPrototypeRankClue;
}>;

export type CorpseClueStashPrototypeRankClue = GetStructType<
  CorpseClueStashPrototypeRankClueItem[]
>;

export type CorpseClueStashPrototypeRankClueItem = GetStructType<{
  Rank: ERank;
  Weight: string;
}>;

export type CorpsePrototype = GetStructType<{
  AllowedAttachSuffixes: SingletonConstantZombie;
  BlockAttachSuffixes: NPCPrototypeSkills;
  BloodPoolMaterial: string;
  BloodPoolSeverity: number;
  BonesToHit: CoreVariableLegs;
  CauseOfDeath: ECauseOfDeath;
  DecalsMaterialSID: string;
  HitsCount: number;
  Pose: string;
  Severity: number;
  SID: string;
}>;

export type CoverEvaluatorPrototype = GetStructType<{
  AdvanceCoeff: number;
  BaseValue: number;
  CanUseCovers: boolean;
  DangerousCoverZoneCoeff: number;
  DefaultCoverSettings: CoverEvaluatorPrototypeDefaultCoverSettings;
  EnemyCoverageCoeff: string;
  ExplosiveSafeDistanceAddend: number;
  ExplosivesCoverageCoeff: number;
  ExplosivesCoverSettings: CoverEvaluatorPrototypeDefaultCoverSettings;
  FormationCoeff: number;
  FrequentlyUsedCoverCoeff: number;
  FrequentlyUsedNoCoverCoeff: number;
  LocationInDangerCoverThreshold: number;
  LocationInDangerExplosiveThreshold: number;
  LocationInDangerNoCoverThreshold: number;
  LowGroundCoeff: number;
  MaxCoverageByType: CoverEvaluatorPrototypeMaxCoverageByType;
  MaxCoverSegmentCoverageBase: number;
  MaxCoverSegmentCoveragePlayer: number;
  MaxPathLength: number;
  NewLocationAdvantageCoeff: string;
  NewLocationAdvantageCoeffsOverride: CoverEvaluatorPrototypeNewLocationAdvantageCoeffsOverride;
  PathLengthExponentBase: number;
  RestrictionDistance: number;
  ShouldApproachEnemy: boolean;
  SID: string;
  SquadMembersInDirectionCoeff: number;
  WeaponDistanceCoeff: number;
}>;

export type CoverEvaluatorPrototypeDefaultCoverSettings = GetStructType<{
  bUseCombatEffectiveFireDistance: boolean;
  bUseDistanceEvaluators: boolean;
  FrontLineHalfAngle: number;
  FrontlineInfluence: number;
  MaxDistanceToAlly: number;
  MaxDistanceToEnemy: number;
  MinDistanceToEnemy: number;
}>;

export type CoverEvaluatorPrototypeMaxCoverageByType = GetStructType<{
  BehindTreeCover: number;
  Generic: number;
  High: number;
  Low: number;
  NoCover: number;
  NoShootingPosition: number;
}>;

export type CoverEvaluatorPrototypeNewLocationAdvantageCoeffsOverride =
  GetStructType<{
    NoCover: number;
  }>;

export type Credit = GetStructType<{
  Roles: CreditRoles;
  SectionNameSID: string;
}>;

export type CreditNames = StringArray;

export type CreditRolesItem = GetStructType<{
  Names: CreditNames;
  RoleNameSID: string;
}>;

export type DailySchedulePrototype = GetStructType<{
  ScheduleIntervals: DailySchedulePrototypeScheduleIntervals;
  SID: string;
}>;

export type DailySchedulePrototypeAvailableNeeds = GetStructType<
  EContextualActionNeeds[]
>;

export type DailySchedulePrototypeScheduleIntervals = GetStructType<
  DailySchedulePrototypeScheduleIntervalsItem[]
>;

export type DailySchedulePrototypeScheduleIntervalsItem = GetStructType<{
  AvailableNeeds: DailySchedulePrototypeAvailableNeeds;
  IntervalEndTime: string;
  IntervalStartTime: string;
}>;

export type DamageSourcePrototype = GetStructType<{
  AudioSwitch: string;
  bIsLooped: boolean;
  bWithoutSFX: boolean;
  CriticalHitAudioEventPath: string;
  PlayAudioEvent: string;
  PlayerVoiceoverEventPath: string;
  SID: string;
  StopAudioEvent: string;
  VoiceOverAccumulationTime: number;
  VoiceOverCooldown: number;
  VoiceOverNeededDamage: number;
}>;

export type DebugItemGeneratorPrototype = GetStructType<{
  ItemGenerator: DebugItemGeneratorPrototypeItemGenerator;
  SID: string;
}>;

export type DebugItemGeneratorPrototypeItemGenerator = GetStructType<
  DebugItemGeneratorPrototypeItemGeneratorItem[]
>;

export type DebugItemGeneratorPrototypeItemGeneratorItem = GetStructType<{
  Category: EItemGenerationCategory;
  PlayerRank: ERank;
  PossibleItems: DebugItemGeneratorPrototypePossibleItems;
}>;

export type DebugItemGeneratorPrototypePossibleItems = GetStructType<
  DebugItemGeneratorPrototypePossibleItemsItem[]
>;

export type DebugItemGeneratorPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxCount: number;
  AmmoMinCount: number;
  Chance: number;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Weight: number;
}>;

export type DestructibleObjectPrototype = GetStructType<{
  bAllowPhaseSkipping: boolean;
  bHasSpaceRestrictor: boolean;
  Blueprint: string;
  bSimulatePhysics: boolean;
  DestructAudioEvent: string;
  ExplosionPrototypeSID: string;
  FallingVelocityThreshold: number;
  ID: number;
  ImpulseOverride: number;
  ImpulseToDamageCoef: number;
  MassMultiplier: number;
  MaxDamageForLoudness: number;
  MinDamageForLoudness: number;
  ObjectPhaseSettings: DestructibleObjectPrototypeObjectPhaseSettings;
  OriginalMesh: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  TileOffsetMax: number;
  TileOffsetMin: number;
  VFXVariation: number;
  WindowDestructVFX: string;
}>;

export type DestructibleObjectPrototypeAssetOptions = GetStructType<
  DestructibleObjectPrototypeAssetOptionsItem[]
>;

export type DestructibleObjectPrototypeAssetOptionsItem = GetStructType<{
  AssetPath: string;
  AssetWeight: number;
}>;

export type DestructibleObjectPrototypeDestructibleActions = GetStructType<
  DestructibleObjectPrototypeDestructibleActionsItem[]
>;

export type DestructibleObjectPrototypeDestructibleActionsItem = GetStructType<{
  ActionCompletionDelay: number;
  ActionType: EDestructionActionType;
  AssetOptions: string;
}>;

export type DestructibleObjectPrototypeIgnoredDamageTypes = GetStructType<
  EDamageType[]
>;

export type DestructibleObjectPrototypeObjectPhaseSettings = GetStructType<
  DestructibleObjectPrototypeObjectPhaseSettingsItem[]
>;

export type DestructibleObjectPrototypeObjectPhaseSettingsItem = GetStructType<{
  DamageDestroyThreshold: number;
  DamageIgnoranceThreshold: number;
  DestructibleActions: DestructibleObjectPrototypeDestructibleActions;
  IgnoredDamageTypes: DestructibleObjectPrototypeIgnoredDamageTypes;
}>;

export type DetectorPrototype = GetStructType<{
  AnimBlueprint: string;
  AnomalyDetectionRadius: number;
  AnomalyTexturePaths: DetectorPrototypeAnomalyTexturePaths;
  ArtifactSignalCurve: string;
  ArtifactTexturePath: string;
  CanvasMaterialPath: string;
  Cost: number;
  DangerLevelSoundParameter: string;
  DefaultArtifactRadius: number;
  DetectorType: EDetectorType;
  DetectorWorkCurve: string;
  DetectorWorkRadius: string;
  DetectorWorkSFX: string;
  DisplayUpdateInterval: number;
  ExclusionAnomalyList: CoreVariableLegs;
  ExclusionArtifactList: SingletonConstantArmy;
  Icon: string;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  MaxStackCount: number;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  MinDetectRadius: number;
  PhysicsInteractionPrototypeSID: string;
  RadiusDivider: number;
  RenderTargetResolution: number;
  ShowArtifactRadius: string;
  SID: string;
  SonarRadius: number;
  SpriteMaterialPath: string;
  Type: EItemType;
  Weight: number;
}>;

export type DetectorPrototypeAnomalyTexturePaths = GetStructType<
  DetectorPrototypeAnomalyTexturePathsItem[]
>;

export type DetectorPrototypeAnomalyTexturePathsItem = GetStructType<{
  AnomalyElementType: EAnomalyElementType;
  SpriteTexturePath: string;
}>;

export type DialogChainPrototype = GetStructType<{
  CanBeInterrupted: boolean;
  CanInterruptByCombat: boolean;
  CanInterruptByEmission: boolean;
  ContinueAfterInterrupt: boolean;
  DialogMembers: DialogChainPrototypeDialogMembers;
  DialogOnTheGo: boolean;
  DLC: string;
  ID: number;
  IsInteractive: boolean;
  IsPCDialogMember: boolean;
  SID: string;
  StartingDialogPrototypeSID: string;
}>;

export type DialogChainPrototypeDialogMembers = GetStructType<
  DialogChainPrototypeDialogMembersItem[]
>;

export type DialogChainPrototypeDialogMembersItem = GetStructType<{
  DialogMemberName: string;
  OptionalMember: boolean;
}>;

export type DialogPoolPrototype = GetStructType<{
  AvailableDialogs: DialogPoolPrototypeAvailableDialogs;
  DialogEventType: EDialogEventType;
  DialogMemberRestrictions: DialogPoolPrototypeDialogMemberRestrictions;
  OptionalMembersCount: number;
  RequiredMembersCount: number;
  RequiresGroup: boolean;
  SID: string;
}>;

export type DialogPoolPrototypeAvailableDialogs = StringArray;

export type DialogPoolPrototypeDialogMemberRestrictions = GetStructType<
  DialogPoolPrototypeDialogMemberRestrictionsItem[] & {
    ExcludedFactions: DialogPoolPrototypeExcludedFactions;
    ExcludedObjPrototypes: DialogPoolPrototypeExcludedObjPrototypes;
    FactionRestrictions: DialogPoolPrototypeFactionRestrictions;
    ObjPrototypeRestrictions: DialogPoolPrototypeObjPrototypeRestrictions;
  }
>;

export type DialogPoolPrototypeDialogMemberRestrictionsItem = GetStructType<{
  FactionRestrictions: DialogPoolPrototypeFactionRestrictions;
}>;

export type DialogPoolPrototypeExcludedFactions = StringArray;

export type DialogPoolPrototypeExcludedObjPrototypes = StringArray;

export type DialogPoolPrototypeFactionRestrictions = StringArray;

export type DialogPoolPrototypeObjPrototypeRestrictions = StringArray;

export type DialogPrototype = GetStructType<{
  Actions: DialogPrototypeActions;
  AKEventName: string;
  AKEventSubPath: string;
  Animation: string;
  AnswerText: string;
  AssetsSubPath: string;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CanBeInterrupted: boolean;
  Conditions: DialogPrototypeConditions;
  DialogActionParam: string;
  DialogActions: string;
  DialogAnswerActions: DialogPrototypeDialogAnswerActions;
  DialogChainPrototypeSID: string;
  DialogMemberIndex: number;
  DialogMemberName: string;
  DialogMembersAnimations: DialogPrototypeDialogMembersAnimations;
  DialogPriority: EDialogPriority;
  FaceAnimationAssetName: string;
  FaceAnimationSubPath: string;
  HasVOInSequence: boolean;
  Icon: string;
  ID: number;
  LocalizedSequences: DialogPrototypeLocalizedSequences;
  LookAtObjSID: string;
  LoopSequence: boolean;
  MainReply: boolean;
  NextDialogOptions: DialogPrototypeNextDialogOptions;
  NextDialogSID: string;
  NodePrototypeVersion: number;
  PreblendSequence: boolean;
  PreblendTime: number;
  RotationTime: number;
  SelfLocation: string;
  ShowDialogWindow: boolean;
  ShowNextDialogOptionsAsAnswers: boolean;
  SID: string;
  Sound: string;
  SpeechDuration: number;
  TargetLocation: string;
  Text: string;
  TopicAvailabilityConditions: DialogPrototypeTopicAvailabilityConditions;
  Unskippable: boolean;
  VisibleOnFailedCondition: boolean;
  VoiceModulatorPrototypeID: string;
  WaitForSequenceToFinish: boolean;
}>;

export type DialogPrototypeActions = GetStructType<
  DialogPrototypeActionsItem[]
>;

export type DialogPrototypeActionsItem = GetStructType<{
  DialogAction: EDialogAction;
  DialogActionParam: string;
}>;

export type DialogPrototypeConditions = GetStructType<
  DialogPrototypeConditionsItem[]
>;

export type DialogPrototypeConditionsItem = GetStructType<
  DialogPrototypeConditionsItemItem[] & {
    ConditionComparance: EConditionComparance;
    ConditionType: EQuestConditionType;
    NumericValue: number;
    TargetCharacter: string;
  }
>;

export type DialogPrototypeConditionsItemItem = GetStructType<{
  bTriggersByAnybody: boolean;
  ChangeValueMode: EChangeValueMode;
  CompletedNodeLauncherNames: NPCPrototypeSkills;
  ConditionComparance: EConditionComparance;
  ConditionType: EQuestConditionType;
  DialogMemberIndex: number;
  EmissionPrototypeSID: string;
  Equipment: EMainHandEquipmentType;
  Faction: string;
  FastTravelPrototypeSID: string;
  GlobalVariablePrototypeSID: string;
  ItemPrototypeSID: DialogPrototypeItemPrototypeSID;
  ItemsCount: DialogPrototypeMoney;
  JournalEntity: EJournalEntity;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  JournalState: EJournalState;
  LinkedNodePrototypeSID: string;
  LocationIndex: number;
  Money: DialogPrototypeMoney;
  NodeState: EQuestNodeState;
  NotePrototypeSID: string;
  NumericValue: number;
  RandomProbability: number;
  Rank: ERank;
  ReactType: ETriggerReact;
  Relationships: ERelationLevel;
  RequiredSquadMembers: ERequiredSquadMembers;
  TargetCharacter: string;
  TargetContextualActionPlaceholder: string;
  TargetItemContainer: string;
  TargetNode: string;
  TargetNPC: string;
  TargetPlaceholder: string;
  TargetPoint: AIGlobalRelativeLocation;
  Trigger: string;
  VariableValue: boolean;
  Weather: EWeather;
  WithEquipped: boolean;
  WithInventory: boolean;
}>;

export type DialogPrototypeDialogActions = GetStructType<
  DialogPrototypeDialogActionsItem[]
>;

export type DialogPrototypeDialogActionsItem = GetStructType<{
  ChangeValueMode: EChangeValueMode;
  ConsumablePrototypeSID: DialogPrototypeItemPrototypeSID;
  DialogAction: EDialogAction;
  DialogActionParam: DialogPrototypeMoney;
  GlobalVariablePrototypeSID: string;
  ItemsCount: DialogPrototypeMoney;
  VariableValue: number;
  WithEquipped: boolean;
}>;

export type DialogPrototypeDialogAnimations = GetStructType<
  DialogPrototypeDialogAnimationsItem[]
>;

export type DialogPrototypeDialogAnimationsItem = GetStructType<{
  DialogAnimationType: EDialogAnimationType;
  GestureTiming: DialogPrototypeGestureTiming;
}>;

export type DialogPrototypeDialogAnswerActions = GetStructType<
  DialogPrototypeDialogActionsItem[]
>;

export type DialogPrototypeDialogMembersAnimations = GetStructType<
  DialogPrototypeDialogMembersAnimationsItem[]
>;

export type DialogPrototypeDialogMembersAnimationsItem = GetStructType<{
  DialogAnimations: string;
  EmotionalState: EEmotionalFaceMasks;
  LookAtTarget: number;
}>;

export type DialogPrototypeFalse = GetStructType<{
  NextDialogSID: string;
  Terminate: boolean;
}>;

export type DialogPrototypeGestureTiming = GetStructType<(number | string)[]>;

export type DialogPrototypeItemPrototypeSID = GetStructType<{
  VariableType: EGlobalVariableType;
  VariableValue: string;
}>;

export type DialogPrototypeLocalizedSequences = StringArray;

export type DialogPrototypeMoney = GetStructType<{
  VariableType: EGlobalVariableType;
  VariableValue: number;
}>;

export type DialogPrototypeNextDialogOptions = GetStructType<
  DialogPrototypeNextDialogOptionsItem[] & {
    False: DialogPrototypeFalse;
    General_PC_DeclineFastTravel_Random: DialogPrototypePripyat_return_to_topics;
    Pripyat_return_to_topics: DialogPrototypePripyat_return_to_topics;
    True: DialogPrototypeTrue;
  }
>;

export type DialogPrototypeNextDialogOptionsItem = GetStructType<{
  AnswerTo: number;
  AvailableFromStart: boolean;
  Conditions: DialogPrototypeConditions;
  ExcludeBy: string;
  ImportantChoiceBranch: EScenarioBranch;
  IncludeBy: string;
  MainReply: boolean;
  NextDialogSID: string;
  Terminate: boolean;
  VisibleOnFailedCondition: boolean;
}>;

export type DialogPrototypePripyat_return_to_topics = GetStructType<{
  AnswerTo: number;
  AvailableFromStart: boolean;
  NextDialogSID: string;
  VisibleOnFailedCondition: boolean;
}>;

export type DialogPrototypeTopicAvailabilityConditions = GetStructType<
  DialogPrototypeTopicAvailabilityConditionsItem[]
>;

export type DialogPrototypeTopicAvailabilityConditionsItem = GetStructType<
  DialogPrototypeTopicAvailabilityConditionsItemItem[] & {
    ConditionComparance: EConditionComparance;
    ConditionType: EQuestConditionType;
    EmissionPrototypeSID: string;
    IncludePartialOverload: boolean;
  }
>;

export type DialogPrototypeTopicAvailabilityConditionsItemItem = GetStructType<{
  bTriggersByAnybody: boolean;
  ConditionComparance: EConditionComparance;
  ConditionType: EQuestConditionType;
  EmissionPrototypeSID: string;
  Faction: string;
  IncludePartialOverload: boolean;
  ItemPrototypeSID: DialogPrototypeItemPrototypeSID;
  ItemsCount: DialogPrototypeMoney;
  Money: DialogPrototypeMoney;
  NumericValue: number;
  Rank: ERank;
  ReactType: ETriggerReact;
  Relationships: ERelationLevel;
  RequiredSquadMembers: ERequiredSquadMembers;
  TargetCharacter: string;
  TargetContextualActionPlaceholder: string;
  TargetNPC: string;
  TargetPoint: AIGlobalRelativeLocation;
  ThreatAwareness: EThreatAwareness;
  Trigger: string;
  WithEquipped: boolean;
  WithInventory: boolean;
}>;

export type DialogPrototypeTrue = GetStructType<{
  Conditions: DialogPrototypeConditions;
  NextDialogSID: string;
  Terminate: boolean;
}>;

export type DifficultyPrototype = GetStructType<{
  AccumulatedDamageReductionCurveWeightMax: number;
  AccumulatedDamageReductionCurveWeightMaxDistance: number;
  AccumulatedDamageReductionCurveWeightMin: number;
  AccumulatedDamageReductionIncludesHealedHealth: boolean;
  AdditionalMechanicsEffects: CoreVariableTorso;
  AgentCooldownMultipliers: DifficultyPrototypeAgentCooldownMultipliers;
  AllowedSaveTypes: DifficultyPrototypeAllowedSaveTypes;
  Ammo_Cost: number;
  Anomaly_Damage: number;
  Armor_Anomaly: number;
  Armor_Cost: number;
  Armor_Durability: number;
  Armor_PSY: number;
  Armor_Radiation: number;
  Armor_Strike_Add: number;
  Artifact_Cost: number;
  AutosaveAfterQuests: DifficultyPrototypeAutosaveAfterQuests;
  BlockSettings: boolean;
  bShouldDisableCompass: boolean;
  bShouldDisableCrosshair: boolean;
  bShouldDisableDeadBodyMarkers: boolean;
  bShouldDisableStashMarkers: boolean;
  BuyCondition: number;
  Consumable_Cost: number;
  CorpseSmartLoot: DifficultyPrototypeCorpseSmartLoot;
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
  NightVisionGoggles_Cost: number;
  NPC_Armor_Strike_Add: number;
  NPC_AttackCooldown: number;
  NPC_HP: number;
  NPC_Weapon_BaseDamage: number;
  NPC_Weapon_Rank_Add: number;
  PlayerWeapon_HeadshotMultiplier: number;
  PsyPhantomNPCOverrides: DifficultyPrototypePsyPhantomNPCOverrides;
  Radiation_AccumulationSpeed: number;
  Regen_HP: number;
  Repair_Cost: number;
  Reward_MainLine_Money: number;
  Reward_SideLine_Money: number;
  SellCondition: number;
  ShowWarningPopup: boolean;
  SID: string;
  TitleSID: string;
  TotalSaveLimits: DifficultyPrototypeTotalSaveLimits;
  Upgrade_Cost: number;
  Weapon_BaseDamage: number;
  Weapon_Cost: number;
  Weapon_Durability: number;
  Weapon_DurabilityDamage: number;
  Weapon_JammingMultiplier: number;
  Weapon_Rank_Add: number;
  Weather_Emission_Weight: number;
  Weather_Storm_Weight: number;
}>;

export type DifficultyPrototypeAgentCooldownMultipliers = GetStructType<
  DifficultyPrototypeAgentCooldownMultipliersItem[]
>;

export type DifficultyPrototypeAgentCooldownMultipliersItem = GetStructType<{
  AgentPrototypeSID: string;
  CooldownMultipliers: DifficultyPrototypeCooldownMultipliers;
}>;

export type DifficultyPrototypeAllowedSaveTypes = GetStructType<ESaveType[]>;

export type DifficultyPrototypeAutosaveAfterQuests = StringArray;

export type DifficultyPrototypeCooldownMultipliers = GetStructType<
  DifficultyPrototypeCooldownMultipliersItem[]
>;

export type DifficultyPrototypeCooldownMultipliersItem = GetStructType<{
  CooldownMultiplier: number;
  CooldownTag: string;
}>;

export type DifficultyPrototypeCorpseSmartLoot = GetStructType<{
  GeneralNPC: string;
}>;

export type DifficultyPrototypePsyPhantomNPCOverrides = GetStructType<
  DifficultyPrototypePsyPhantomNPCOverridesItem[]
>;

export type DifficultyPrototypePsyPhantomNPCOverridesItem = GetStructType<{
  bPsyNPCApplyBleeding: boolean;
  OverrideEffectPrototypeSID: string;
  PSYDelayBeforeNewSpawnCycleModifier: number;
  PsyNPCDurabilityDamageMultiplier: number;
  PsyPhantomNPCCountMultiplier: number;
}>;

export type DifficultyPrototypeTotalSaveLimits = GetStructType<
  DifficultyPrototypeTotalSaveLimitsItem[]
>;

export type DifficultyPrototypeTotalSaveLimitsItem = GetStructType<{
  Limit: number;
  SubType: ESaveSubType;
}>;

export type DoorPrototype = GetStructType<{
  bConsumeItemCountOnOpen: number;
  Blueprint: string;
  bOpenInBothSides: boolean;
  ID: number;
  LockedByGlobalVariable: DoorPrototypeLockedByGlobalVariable;
  LockedByItemPrototype: DoorPrototypeLockedByItemPrototype;
  LockedByScenarioFlag: DoorPrototypeLockedByScenarioFlag;
  OpenCurve: string;
  SID: string;
}>;

export type DoorPrototypeLockedByGlobalVariable = GetStructType<
  DoorPrototypeLockedByScenarioFlagItem[]
>;

export type DoorPrototypeLockedByItemPrototype = GetStructType<
  DoorPrototypeLockedByItemPrototypeItem[]
>;

export type DoorPrototypeLockedByItemPrototypeItem = GetStructType<{
  ItemCount: number;
  ItemPrototypeSID: string;
}>;

export type DoorPrototypeLockedByScenarioFlag = GetStructType<
  DoorPrototypeLockedByScenarioFlagItem[]
>;

export type DoorPrototypeLockedByScenarioFlagItem = GetStructType<{
  GlobalVariableSID: string;
  Value: number;
}>;

export type EffectBoolProviderPrototype = GetStructType<{
  bPlayerTarget: boolean;
  EffectSID: string;
  SID: string;
  Type: EBoolProviderType;
}>;

export type EffectFloatProviderPrototype = GetStructType<{
  ConditionSID: string;
  FalseValueSID: string;
  SID: string;
  TrueValueSID: string;
  Type: EFloatProviderType;
  Value: number;
}>;

export type EffectPrototype = GetStructType<{
  AffectedStaminaActionTypes: EffectPrototypeAffectedStaminaActionTypes;
  AmmoType: EAmmoType;
  AmmoTypeProjectiles: EffectPrototypeAmmoTypeProjectiles;
  ApplyExtraEffectPrototypeSIDs: UpgradePrototypeEffectPrototypeSIDs;
  ApplyToMainHandedEquipment: boolean;
  ArmorPiercing: number;
  ArtifactEquipmentSlots: EffectPrototypeArtifactEquipmentSlots;
  AssetPath: string;
  AttachmentItemPrototypeSID: string;
  AttachType: EAttachType;
  AvailableObjPrototypes: DialogPrototypeLocalizedSequences;
  AxisType: EInputAxisType;
  bEnable: boolean;
  bIsLooped: boolean;
  bIsPermanent: boolean;
  bIsSmooth: boolean;
  BlockAnimationTypes: EffectPrototypeBlockAnimationTypes;
  bStartEffect: boolean;
  bUpdateValueEachTickNPC: boolean;
  bUpdateValueEachTickPlayer: boolean;
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
  DragImpulseRangeNPC: ObjPrototypeExplorationRadius;
  DuplicationType: EDuplicateResolveType;
  DurabilityDamageRange: ObjPrototypeExplorationRadius;
  Duration: number;
  EffectCurvePath: string;
  EffectLevel: string;
  EffectModifiers: EffectPrototypeEffectModifiers;
  EffectsToBlockIDs: CoreVariableLegs;
  FalseEffectSID: string;
  FireIntervals: CoreVariableSignalStrength;
  FireTypes: EffectPrototypeFireTypes;
  GadgetTypes: CoreVariableHead;
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
  MechanicsEffect: EffectPrototypeMechanicsEffect;
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
  ShouldIgnoreArmor: boolean;
  ShouldPauseByDialog: boolean;
  ShowUpgradeEffect: boolean;
  ShowUpgradeEffectValue: boolean;
  SID: string;
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
  ValueMax: string;
  ValueMin: string;
  ValueProviderSID: string;
  VitalType: EVitalType;
  XAxisMaxValue: number;
  XAxisMinValue: number;
  YAxisMaxValue: number;
  YAxisMinValue: number;
}>;

export type EffectPrototypeAffectedStaminaActionTypes = GetStructType<
  EStaminaAction[]
>;

export type EffectPrototypeAmmoTypeProjectiles = GetStructType<
  EffectPrototypeAmmoTypeProjectilesItem[]
>;

export type EffectPrototypeAmmoTypeProjectilesItem = GetStructType<{
  AmmoType: EAmmoType;
  ProjectilePrototypeSID: string;
}>;

export type EffectPrototypeApplicableEffects = GetStructType<
  EffectPrototypeApplicableEffectsItem[]
>;

export type EffectPrototypeApplicableEffectsItem = GetStructType<{
  EffectSID: string;
  RemoveOnTransition: boolean;
}>;

export type EffectPrototypeArtifactEquipmentSlots = GetStructType<
  EInventoryEquipmentSlot[]
>;

export type EffectPrototypeBlockAnimationTypes = GetStructType<EActionType[]>;

export type EffectPrototypeConditionEffects = GetStructType<{
  [BigSleepiness in EffectConditionalEffect]: EffectPrototypeLow;
}>;

export type EffectPrototypeEffectModifiers = GetStructType<
  EffectPrototypeEffectModifiersItem[]
>;

export type EffectPrototypeEffectModifiersItem = GetStructType<{
  DurationMultiplier: number;
  EffectPrototypeSID: string;
  ValueMultiplier: number;
}>;

export type EffectPrototypeFireTypes = GetStructType<EFireType[]>;

export type EffectPrototypeLow = GetStructType<{
  ApplicableEffects: string | EffectPrototypeApplicableEffects;
  ConditionValue: number;
}>;
export type EffectPrototypeMechanicsEffect = GetStructType<{
  ConditionComparance: EConditionComparance;
  ConditionEffects: EffectPrototypeConditionEffects;
  StartMechanicsValue: number;
  StopMechanicsValue: number;
  VitalBarType: EVitalType;
}>;

export type EffectSourcePriorityPrototype = GetStructType<{
  SID: string;
  SourcePriorities: EffectSourcePriorityPrototypeSourcePriorities;
}>;

export type EffectSourcePriorityPrototypeSourcePriorities = GetStructType<
  EffectSourcePriorityPrototypeSourcePrioritiesItem[]
>;

export type EffectSourcePriorityPrototypeSourcePrioritiesItem = GetStructType<{
  EffectSource: EEffectSource;
  Priority: number;
}>;

export type EmissionPrototype = GetStructType<{
  AIEvents: EmissionPrototypeAIEvents;
  AppliedEffects: CoreVariableHead;
  Assets: EmissionPrototypeAssets;
  DamageSettings: EmissionPrototypeDamageSettings;
  MaxEmissionKillDelayALife: number;
  MaxReactionOnEmissionTimeALife: number;
  MaxReactionOnEmissionTimeQuest: number;
  MinEmissionKillDelayALife: number;
  MinReactionOnEmissionTimeALife: number;
  MinReactionOnEmissionTimeQuest: number;
  OriginX: number;
  OriginY: number;
  SID: string;
  Stages: EmissionPrototypeStages;
  StartEmissionOnRedSkyDuringTranisition: boolean;
}>;

export type EmissionPrototypeAIEvents = GetStructType<
  EmissionPrototypeAIEventsItem[]
>;

export type EmissionPrototypeAIEventsItem = GetStructType<{
  AIEventStartTime: number;
  AIEventType: EEmissionAIEvent;
}>;

export type EmissionPrototypeAssets = GetStructType<{
  ActiveEmissionIntensitySoundParameter: string;
  ActiveEmissionSound: string;
  ActiveSecondEmissionSound: string;
  EmissionDamageCurve: string;
  EmissionVFX: string;
  EndEmissionSound: string;
  GeneratorsEndSequence: string;
  GeneratorsIdleSequence: string;
  GeneratorsStartSequence: string;
  StartEmissionSound: string;
}>;

export type EmissionPrototypeDamageSettings = GetStructType<{
  EmissionDamageBlendTime: number;
}>;

export type EmissionPrototypeStages = GetStructType<
  EmissionPrototypeStagesItem[]
>;

export type EmissionPrototypeStagesItem = GetStructType<{
  PhaseDuration: number;
  PhaseStartTime: number;
  StageID: EEmissionStage;
}>;

export type EnemyEvaluatorPrototype = GetStructType<{
  ChangeEnemyCooldown: number;
  CloseCombatMaxPenaltyDistance: number;
  DamageAccumulationDurationSeconds: number;
  DamageAccumulationMaxValue: string;
  DamageAccumulationMinValue: string;
  DistanceCoeff: number;
  NoAddedDamageCoeff: number;
  NotPlayerCoeff: number;
  NPCSelectedAsEnemyValue: number;
  NPCSelectedAsTargetByOtherCoeff: number;
  PlayerSelectedAsEnemyValue: number;
  PlayerSelectedAsTargetByOtherCoeff: number;
  RangedCombatMaxPenaltyDistance: number;
  RangeSearchPathToEnemies: number;
  SID: string;
}>;

export type ExplosionPrototype = GetStructType<{
  ArmorPenetrationNPC: number;
  ArmorPenetrationPlayer: number;
  ConcussionEffects: NPCPrototypeSkills;
  ConcussionRadius: number;
  DamageArmorNPC: number;
  DamageArmorPlayer: number;
  DamageDestructible: number;
  DamageNPC: number;
  DamagePlayer: number;
  DamageSource: EDamageSource;
  DefaultEffectSIDs: NPCPrototypeSkills;
  ExplosionAkSFX: string;
  ExplosionDamageCurve: string;
  ExplosionDefectAkSFX: string;
  ExplosionDefectNiagaraSystemVFX: string;
  ExplosionInAirNiagaraSystemVFX: string;
  ExplosionNiagaraSystemVFX: string;
  ExplosionParticleTraceSize: number;
  ExplosionUnderwaterNiagaraSystemVFX: string;
  ExplosionWaterDepthRTPC: string;
  ForceFeedbackRadius: number;
  ImpactPhysicalMaterialPrototypeSID: string;
  ImpulseDamageCurve: string;
  ImpulsePower: number;
  ImpulseRadius: number;
  NPCConcussionEffects: NPCPrototypeSkills;
  PhysicalMaterialEffects: ExplosionPrototypePhysicalMaterialEffects;
  Radius: number;
  SID: string;
}>;

export type ExplosionPrototypePhysicalMaterialEffects = GetStructType<
  ExplosionPrototypePhysicalMaterialEffectsItem[]
>;

export type ExplosionPrototypePhysicalMaterialEffectsItem = GetStructType<{
  EffectSIDs: NPCPrototypeSkills;
  PhysicalMaterialType: EPhysicalMaterialType;
}>;

export type FaceBlockingBlendMaskPrototype = GetStructType<{
  AllowedBlendShapes: FaceBlockingBlendMaskPrototypeAllowedBlendShapes;
  BlockingMasks: FaceBlockingBlendMaskPrototypeBlockingMasks;
  bShouldDisableAllBlendShapes: boolean;
  ForHairQualityUseGroomBlocking: number;
  GroomBlockingMappingPrototypeSID: string;
  SID: string;
}>;

export type FaceBlockingBlendMaskPrototypeAllowedBlendShapes = StringArray;

export type FaceBlockingBlendMaskPrototypeBlockingMasks = GetStructType<
  FaceBlockingBlendMaskPrototypeBlockingMasksItem[]
>;

export type FaceBlockingBlendMaskPrototypeBlockingMasksItem = GetStructType<{
  BlockingWeight: number;
  MaskType: EFaceBlockingBlendMasks;
}>;

export type FactionActionRestrictionPrototype = GetStructType<{
  Factions: WeaponPrototypePreinstalledUpgrades;
  ID: number;
  SID: string;
}>;

export type FastTravelLocationPrototype = GetStructType<{
  BlockingGlobalVariables: FastTravelLocationPrototypeBlockingGlobalVariables;
  LocationCategory: string;
  Name: string;
  PlayerLocation: FastTravelLocationPrototypePlayerLocation;
  RequiredGlobalVariables: FastTravelLocationPrototypeRequiredGlobalVariables;
  SID: string;
}>;

export type FastTravelLocationPrototypeBlockingGlobalVariables = GetStructType<
  InfotopicPrototypeBlockingGlobalVariablesItem[]
>;

export type FastTravelLocationPrototypePlayerLocation = GetStructType<{
  X: number;
  Y: number;
  Yaw: number;
  Z: number;
}>;

export type FastTravelLocationPrototypeRequiredGlobalVariables = GetStructType<
  InfotopicPrototypeBlockingGlobalVariablesItem[]
>;

export type FastTravelPrototype = GetStructType<{
  DiscountCoefficients: FastTravelPrototypeDiscountCoefficients;
  GuideDelay: number;
  Locations: FastTravelPrototypeLocations;
  MaxAccumulatedPointsForVitals: FastTravelPrototypeMaxAccumulatedPointsForVitals;
  OverweightLock: EOverweightLock;
  SID: string;
}>;

export type FastTravelPrototypeDiscountCoefficients = GetStructType<{
  GlobalVariableCoefficient: FastTravelPrototypeGlobalVariableCoefficient;
  RankDiscountCoefficient: AIGlobalArmy;
  ReputationDiscountCoefficient: FastTravelPrototypeReputationDiscountCoefficient;
}>;

export type FastTravelPrototypeGlobalVariableCoefficient = GetStructType<
  FastTravelPrototypeGlobalVariableCoefficientItem[]
>;

export type FastTravelPrototypeGlobalVariableCoefficientItem = GetStructType<{
  DiscountCoefficient: number;
  GlobalVariablePrototypeSID: string;
  TargetValue: number;
}>;

export type FastTravelPrototypeLocations = GetStructType<
  FastTravelPrototypeLocationsItem[]
>;

export type FastTravelPrototypeLocationsItem = GetStructType<{
  CurrentFastTravelLocationPrototypeSID: string;
  DestinationFastTravelLocationPrototypeSID: string;
  Name: string;
  RequiredItems: string;
  RequiredMoney: number;
}>;

export type FastTravelPrototypeMaxAccumulatedPointsForVitals = GetStructType<{
  Bleeding: number;
  Hunger: number;
  Radiation: number;
}>;

export type FastTravelPrototypeReputationDiscountCoefficient = GetStructType<{
  [key in Reaction]: number;
}>;

export type FastTravelPrototypeRequiredItems = GetStructType<
  FastTravelPrototypeRequiredItemsItem[]
>;

export type FastTravelPrototypeRequiredItemsItem = GetStructType<{
  RequiredItemPrototypeSID: string;
  RequiredItemsCount: number;
}>;

export type FlairSensorPrototype = GetStructType<{
  DetectionSpeed: number;
  DistancePenaltyCurve: string;
  FlairLocatedMultiplier: number;
  FrontDetectionSpeed: number;
  FrontSensingAngle: number;
  FrontSensingRadius: number;
  IsActive: boolean;
  LoseFlairFreezetime: number;
  LosePointsPerSecond: number;
  MaxFlairPoints: number;
  MinCombatSignificantFlairScore: number;
  MinSignificantFlairScore: number;
  ProcessingCorpseMultiplier: number;
  RelaxMultiplier: number;
  SensingRadius: number;
  SID: string;
}>;

export type FlashlightPrototype = GetStructType<{
  BrokenCooldownSeconds: number;
  DroppedBeforeBurnOutPauseTimeSeconds: number;
  DroppedBurnOutTimeSeconds: number;
  EffectSIDs: NPCPrototypeSkills;
  ExtraLightDistanceBasedParameters: FlashlightPrototypeExtraLightDistanceBasedParameters;
  FlashlightPriority: EFlashlightPriority;
  HeadBoneNameToCheckHitToFlashlight: string;
  ID: number;
  PathToFlashlightBurnOutAudioEvent: string;
  PathToFlashlightTurnOffAudioEvent: string;
  PathToFlashlightTurnOnAudioEvent: string;
  PathToInnerRadiusCurve: string;
  PathToOuterRadiusCurve: string;
  RadiusChangeSpeed: number;
  SID: string;
  SocketNamesMeshes: FlashlightPrototypeSocketNamesMeshes;
}>;

export type FlashlightPrototypeAdditionalMeshes = GetStructType<
  FlashlightPrototypeAdditionalMeshesItem[]
>;

export type FlashlightPrototypeAdditionalMeshesItem = GetStructType<{
  MeshPath: string;
  OffsetRotator: SpawnActorPrototypeRotation;
  OffsetVector: AIGlobalRelativeLocation;
}>;

export type FlashlightPrototypeExtraLightDistanceBasedParameters =
  GetStructType<FlashlightPrototypeExtraLightDistanceBasedParametersItem[]>;

export type FlashlightPrototypeExtraLightDistanceBasedParametersItem =
  GetStructType<{
    AttenuationRadius: number;
    Distance: number;
    Intencity: number;
    OuterConeAngle: number;
  }>;

export type FlashlightPrototypeFac_20_00_v2 = GetStructType<{
  AdditionalMeshes: FlashlightPrototypeAdditionalMeshes;
  MeshOffsetParams: FlashlightPrototypeMeshOffsetParams;
  MeshPath: string;
  RelatedMeshes: FlashlightPrototypeRelatedMeshes;
  SocketName: string;
  SpotlightOffsetParams: FlashlightPrototypeSpotlightOffsetParams;
}>;

export type FlashlightPrototypeMeshOffsetParams = GetStructType<{
  OffsetRotator: SpawnActorPrototypeRotation;
  OffsetVector: AIGlobalRelativeLocation;
}>;

export type FlashlightPrototypeRelatedMeshes = StringArray;

export type FlashlightPrototypeSocketNamesMeshes = GetStructType<
  FlashlightPrototypeFac_20_00_v2[]
>;

export type FlashlightPrototypeSpotlightOffsetParams = GetStructType<{
  OffsetRotator: SpawnActorPrototypeRotation;
  OffsetVector: AIGlobalRelativeLocation;
  SocketName: string;
}>;

export type FloatProviderPrototype = GetStructType<{
  bPlayerTarget: boolean;
  ConditionSID: string;
  DelayMax: number;
  DelayMin: number;
  FalseValueSID: string;
  FirstProviderSID: string;
  ParamType: EObjFloatParams;
  ProviderSIDs: CoreVariableHead;
  SecondProviderSID: string;
  SID: string;
  TimeFModValue: number;
  TrueValueSID: string;
  Type: EFloatProviderType;
  Value: number;
  ValueProviderSID: string;
  VitalType: EVitalType;
  WeatherParam: EWeatherParam;
}>;

export type GameLoadingVariable = GetStructType<{
  LoadingStepsProgress: SaveLoadVariableLoadingStepsProgress;
}>;

export type GDItemPrototype = GetStructType<{
  Cost: number;
  Icon: string;
  IsQuestItem: boolean;
  IsQuestItemPrototype: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  LocalizationSID: string;
  MeshPrototypeSID: string;
  SID: string;
  Type: EItemType;
  Weight: number;
}>;

export type GeneralNPCObjPrototype = GetStructType<{
  Abilities: GeneralNPCObjPrototypeAbilities;
  AdvanceParameters: GeneralNPCObjPrototypeAdvanceParameters;
  AimAssistParamsSID: string;
  Anim: EObjAnim;
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
  Blueprint: string;
  BoneDamageCoefficients: GeneralNPCObjPrototypeBoneDamageCoefficients;
  CamperFeatureData: ObjPrototypeCamperFeatureData;
  CanBeKnockedDown: boolean;
  CombatParameters: GeneralNPCObjPrototypeCombatParameters;
  CustomMeshGeneratorPrototypeSID: string;
  DoorTransitionSettings: GeneralNPCObjPrototypeDoorTransitionSettings;
  EscapeParameters: ObjPrototypeEscapeParameters;
  EvadeParameters: GeneralNPCObjPrototypeEvadeParameters;
  Faction: string;
  FlairSensorPrototypeSID: string;
  FlankParameters: GeneralNPCObjPrototypeFlankParameters;
  FlashlightPrototypeSID: string;
  HumanAmbushParameters: GeneralNPCObjPrototypeHumanAmbushParameters;
  IgnoreEmission: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  Mass: number;
  MeshGeneratorPrototypeSID: string;
  MovementParams: GeneralNPCObjPrototypeMovementParams;
  NeedsPresetSID: string;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  OfflineCombatWeight: number;
  Protection: ArmorPrototypeProtection;
  ReactOnApproachWithWeapon: boolean;
  SequentialAbilities: CoreVariableHead;
  SequentialAbilitiesActionData: ObjPrototypeSequentialAbilitiesActionData;
  SID: string;
  SpawnPhantomParams: GeneralNPCObjPrototypeSpawnPhantomParams;
  SuppressiveFireParameters: GeneralNPCObjPrototypeSuppressiveFireParameters;
  SyncParameters: ObjPrototypeSyncParameters;
  TradePrototypeSID: string;
  Type: EObjType;
  VitalParams: GeneralNPCObjPrototypeVitalParams;
}>;

export type GeneralNPCObjPrototypeAbilities = GetStructType<
  Record<HumanAbilityName, ObjPrototypeCat_Jump>
>;

export type GeneralNPCObjPrototypeAdvanceParameters = GetStructType<{
  DurationSeconds: number;
  MaxDistance: number;
  Montage: string;
}>;

export type GeneralNPCObjPrototypeAnimationData = GetStructType<
  ObjPrototypeAnimationDataItem[]
>;

export type GeneralNPCObjPrototypeBoneDamageCoefficients = GetStructType<
  ObjPrototypeBoneDamageCoefficientsItem[]
>;

export type GeneralNPCObjPrototypeCombatParameters = GetStructType<{
  CheckEnemyTime: number;
  CoverEvaluatorSID: string;
  DamageThresholdToChangeLocation: number;
  EarlyExitReloadTime: number;
  EnemyCouldBeVisibleMaxDistance: number;
  LoseEnemyVisibilityTime: number;
  MaxTimeInBadShootingPosition: number;
  NearbyDistanceWeaponNotReady: number;
  NearbyDistanceWeaponReady: number;
  RetreatToCoverDistance: number;
}>;

export type GeneralNPCObjPrototypeDoorTransitionSettings = GetStructType<{
  Default: ObjPrototypeDefault;
  OneHandedWeaponCombat: ObjPrototypeDefault;
  OneHandedWeaponRelax: ObjPrototypeDefault;
  TwoHandedWeaponCombat: ObjPrototypeDefault;
  TwoHandedWeaponRelax: ObjPrototypeDefault;
}>;

export type GeneralNPCObjPrototypeEvadeParameters = GetStructType<{
  AcceptableAngle: number;
  AccumulatedDamage: number;
  AnimationData: GeneralNPCObjPrototypeAnimationData;
  ApproachDistance: number;
  DamageDetectionSeconds: number;
  RequiredAmmoThreshold: string;
}>;

export type GeneralNPCObjPrototypeFlankParameters = GetStructType<{
  ActivationDelaySeconds: number;
  CostScale: number;
  DamageDetectionSeconds: number;
  ExtraSlotChance: string;
  ExtraSlotTime: number;
  FrontZone: GeneralNPCObjPrototypeFrontZone;
  Height: number;
  MaxAccumulatedDamage: number;
  MaxAdvancedLocationSelectionDuration: number;
  MaxPathCost: number;
  MaxPathLength: number;
  MaxSuccessDistance: number;
  MinPathLength: number;
  MinPathOffsetFromTarget: number;
  MinSuccessDistance: number;
  ScaleFactor: number;
}>;

export type GeneralNPCObjPrototypeFrontZone = GetStructType<
  AbilityPrototypeRadius[]
>;

export type GeneralNPCObjPrototypeHumanAmbushParameters = GetStructType<{
  ApproachableDistance: number;
  EntryDelay: number;
  PathLengthThreshold: number;
  PathUpdateInterval: number;
}>;

export type GeneralNPCObjPrototypeMovementParams = GetStructType<{
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

export type GeneralNPCObjPrototypeSpawnPhantomParams = GetStructType<{
  DelayBeforeMovement: number;
  PhantomAllowedEquipItems: NPCPrototypeSkills;
  PhantomAttackAbilityTag: string;
  PhantomBlueprint: string;
}>;

export type GeneralNPCObjPrototypeSuppressiveFireParameters = GetStructType<{
  LookAtBoneName: string;
  MaxAccumulatedDamage: number;
  MaxTimeToLoseTarget: number;
  TraceDistance: number;
}>;

export type GeneralNPCObjPrototypeVitalParams = GetStructType<{
  DegenBleeding: number;
  DegenPsyPoints: number;
  DegenRadiation: number;
  DegenSuppressionPoints: number;
  MaxHP: number;
  MaxSP: number;
  RegenHP: number;
  RegenHPDelayTimeSeconds: number;
}>;

export type GenericLairPrototype = GetStructType<{
  Preset: GenericLairPrototypePreset;
  SID: string;
}>;

export type GenericLairPrototypeMaster = GetStructType<{
  InitialSpawnQuantityPercent: number;
  InitialSpawnQuantityRespawnTimeSeconds: number;
  MaxSpawnQuantity: number;
  MaxSpawnQuantityRespawnTimeSeconds: number;
  SpawnSettingsPerArchetypes: GenericLairPrototypeSpawnSettingsPerArchetypes;
  WipeRespawnTimeoutSeconds: number;
}>;

export type GenericLairPrototypePossibleInhabitantFactions = GetStructType<{
  [key in Faction]: GenericLairPrototypeRat;
}>;

export type GenericLairPrototypePreset = GetStructType<{
  ALifeLairsSearchRadius: number;
  GameTimeOfflineToRerollLairData: number;
  InitialInhabitantFaction: string;
  IsALifePoint: boolean;
  LairType: ELairType;
  PossibleInhabitantFactions: GenericLairPrototypePossibleInhabitantFactions;
  RestingLairInstantSpawnScenarioChance: number;
  RestingLairLongDelaySpawnMax: number;
  RestingLairLongDelaySpawnMin: number;
  RestingLairMaxNPCCount: number;
  RestingLairMinNPCCount: number;
  RestingLairShortDelayedSpawnScenarioChance: number;
  RestingLairShortDelaySpawnMax: number;
  RestingLairShortDelaySpawnMin: number;
}>;

export type GenericLairPrototypeRat = GetStructType<{
  Faction: string;
  MinQuantityPerArchetype: number;
  SpawnSettingsPerPlayerRanks: GenericLairPrototypeSpawnSettingsPerPlayerRanks;
  SpawnWeight: number;
}>;

export type GenericLairPrototypeSpawnSettingsPerArchetypes = GetStructType<{
  [key in Archetype]: GenericLairPrototypeRat;
}>;

export type GenericLairPrototypeSpawnSettingsPerPlayerRanks = GetStructType<{
  [k in Rank]: GenericLairPrototypeMaster;
}>;

export type GreetingsPopupPrototype = GetStructType<{
  Background: string;
  EditionBitFlag: number;
  LocalizationSID: string;
  SID: string;
}>;

export type GrenadePrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseComfort: number;
  Blueprint: string;
  Cost: number;
  CrosshairType: ECrosshairType;
  EffectApplyDistanceCoefficient: number;
  ExplosionPrototypeSID: string;
  GrenadeAnimBlueprint: string;
  GrenadeExplosionHandLethal: string;
  GrenadeExplosionHandNonlethal: string;
  GrenadeExplosionLethalThreshold: string;
  GrenadeType: EGrenadeType;
  Icon: string;
  ImpulseStrength: number;
  InnerDamage: number;
  ItemTypeSwitchValue: string;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  NPCWeaponAttributes: string;
  OuterDamage: number;
  OuterWoundingRadius: number;
  PhysicsInteractionPrototypeSID: string;
  RollVelocityThreshold: number;
  SafeTimeAfterThrow: number;
  SID: string;
  SkeletalMeshPrototypeSID: string;
  StaticMeshPrototypeSID: string;
  TimeToExplode: number;
  Type: EItemType;
  Weight: number;
}>;

export type GroomBlockingMappingPrototype = GetStructType<{
  BlockingGrooms: SingletonConstantArmy;
  BlockingGroomSIDs: PDATutorialPrototypeImages;
  SID: string;
}>;

export type GroomGeneratorPrototype = GetStructType<{
  Category: GroomGeneratorPrototypeCategory;
  SID: string;
}>;

export type GroomGeneratorPrototypeAdditionalGrooms = GetStructType<
  GroomGeneratorPrototypeAdditionalGroomsItem[]
>;

export type GroomGeneratorPrototypeAdditionalGroomsItem = GetStructType<{
  GroomBindingPath: string;
  GroomPath: string;
  MaterialPath: string;
  Materials: GroomGeneratorPrototypeMaterials;
}>;

export type GroomGeneratorPrototypeCategory = GetStructType<
  GroomGeneratorPrototypeCategoryItem[]
>;

export type GroomGeneratorPrototypeCategoryItem = GetStructType<{
  CategoryName: string;
  FromHairQualityUseVariationReplacementMap: number;
  VariationReplacementMap: GroomGeneratorPrototypeVariationReplacementMap;
  Variations: GroomGeneratorPrototypeVariations;
}>;

export type GroomGeneratorPrototypeCustomData = GetStructType<
  GroomGeneratorPrototypeCustomDataItem[] & {
    ShortHair: GroomGeneratorPrototypeShortHair;
  }
>;

export type GroomGeneratorPrototypeCustomDataItem = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  ParameterID: number;
  Variations: GroomGeneratorPrototypeVariations;
}>;

export type GroomGeneratorPrototypeMaterialInstanceParameters = GetStructType<
  AttachMeshPrototypeMaterialInstanceParametersItem[]
>;

export type GroomGeneratorPrototypeMaterials = GetStructType<
  GroomGeneratorPrototypeMaterialsItem[]
>;

export type GroomGeneratorPrototypeMaterialsItem = GetStructType<{
  CustomData: GroomGeneratorPrototypeCustomData;
  MaterialGroup: string;
  MaterialSlot: number;
  Variations: GroomGeneratorPrototypeVariations;
}>;

export type GroomGeneratorPrototypeShortHair = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  Variations: GroomGeneratorPrototypeVariations;
}>;

export type GroomGeneratorPrototypeVariationReplacementMap = GetStructType<
  GroomGeneratorPrototypeVariationReplacementMapItem[]
>;

export type GroomGeneratorPrototypeVariationReplacementMapItem = GetStructType<{
  From: number;
  To: number;
}>;

export type GroomGeneratorPrototypeVariations = GetStructType<
  GroomGeneratorPrototypeVariationsItem[]
>;

export type GroomGeneratorPrototypeVariationsItem = GetStructType<{
  AdditionalGrooms: GroomGeneratorPrototypeAdditionalGrooms;
  bHasCustomData: boolean;
  CustomData: GroomGeneratorPrototypeCustomData;
  FromHairQualityRenderTextureInsteadOfGroom: number;
  GroomBindingPath: string;
  GroomPath: string;
  GroomSID: string;
  MaterialInstanceParameters: GroomGeneratorPrototypeMaterialInstanceParameters;
  MaterialPath: string;
  Materials: GroomGeneratorPrototypeMaterials;
  ParameterValue: number;
  VariationIndex: number;
  Weight: number;
}>;

export type HappyHoursPrototype = GetStructType<{
  HappyHoursRanges: HappyHoursPrototypeHappyHoursRanges;
  ID: number;
  SID: string;
}>;

export type HappyHoursPrototypeHappyHoursRanges = GetStructType<
  HappyHoursPrototypeHappyHoursRangesItem[]
>;

export type HappyHoursPrototypeHappyHoursRangesItem = GetStructType<{
  HappyHoursCheckDeviation: number;
  HappyHoursDeviation: number;
  HappyHoursTime: number;
}>;

export type HearingSensorPrototype = GetStructType<{
  HearingVolumeThreshold: string;
  ID: number;
  SID: string;
  SoundEvents: HearingSensorPrototypeSoundEvents;
}>;

export type HearingSensorPrototypeSoundEvents = GetStructType<
  HearingSensorPrototypeSoundEventsItem[]
>;

export type HearingSensorPrototypeSoundEventsItem = GetStructType<{
  HearingDistance: number;
  Type: ESoundEventType;
}>;

export type ImpactPhysicalMaterialPrototype = GetStructType<{
  ImpactPhysicalMaterialsResources: ImpactPhysicalMaterialPrototypeImpactPhysicalMaterialsResources;
  SID: string;
}>;

export type ImpactPhysicalMaterialPrototypeImpactPhysicalMaterialsResources =
  GetStructType<
    ImpactPhysicalMaterialPrototypeImpactPhysicalMaterialsResourcesItem[]
  >;

export type ImpactPhysicalMaterialPrototypeImpactPhysicalMaterialsResourcesItem =
  GetStructType<{
    AdditionalRoll: number;
    bRandomizeRoll: boolean;
    ImpactParticle: string;
    ImpactParticleSize: number;
    ImpactSurfaceDecals: CoreVariableTorso;
    ImpactSurfaceDecalSize: AIGlobalRelativeLocation;
    MaterialCoefficient: number;
    PhysicalMaterialType: EPhysicalMaterialType;
  }>;

export type InfotopicPrototype = GetStructType<{
  BlockingFactions: InfotopicPrototypeBlockingFactions;
  BlockingGlobalVariables: InfotopicPrototypeBlockingGlobalVariables;
  BlockingNPCs: InfotopicPrototypeBlockingNPCs;
  BlockingRegions: InfotopicPrototypeBlockingRegions;
  BlockingReputations: InfotopicPrototypeBlockingReputations;
  BlockingZoneSIDs: InfotopicPrototypeBlockingZoneSIDs;
  ID: number;
  InfotopicDialogs: InfotopicPrototypeInfotopicDialogs;
  LairSearchRadius: number;
  RandomWeight: number;
  RequiredFactions: InfotopicPrototypeRequiredFactions;
  RequiredGlobalVariables: InfotopicPrototypeRequiredGlobalVariables;
  RequiredLairs: InfotopicPrototypeRequiredLairs;
  RequiredNPCs: InfotopicPrototypeRequiredNPCs;
  RequiredRegions: InfotopicPrototypeBlockingRegions;
  RequiredReputations: InfotopicPrototypeRequiredReputations;
  RequiredZoneSIDs: InfotopicPrototypeRequiredZoneSIDs;
  SID: string;
  ZoneSearchRadius: number;
}>;

export type InfotopicPrototypeBlockingFactions = StringArray;

export type InfotopicPrototypeBlockingGlobalVariables = GetStructType<
  InfotopicPrototypeBlockingGlobalVariablesItem[]
>;

export type InfotopicPrototypeBlockingGlobalVariablesItem = GetStructType<{
  GlobalVariablePrototypeSID: string;
  GlobalVariableValue: number;
}>;

export type InfotopicPrototypeBlockingNPCs = GetStructType<{
  BlockingNPCObjPrototypeSID: string;
}>;

export type InfotopicPrototypeBlockingRegions = GetStructType<ERegion[]>;

export type InfotopicPrototypeBlockingReputations = GetStructType<
  InfotopicPrototypeBlockingReputationsItem[]
>;

export type InfotopicPrototypeBlockingReputationsItem = GetStructType<{
  Faction: string;
  Reputation: ERelationLevel;
}>;

export type InfotopicPrototypeBlockingZoneSIDs = GetStructType<{
  ZonePlaceholder: string;
}>;

export type InfotopicPrototypeInfotopicDialogs = StringArray;

export type InfotopicPrototypeRequiredFactions = StringArray;

export type InfotopicPrototypeRequiredGlobalVariables = GetStructType<
  InfotopicPrototypeBlockingGlobalVariablesItem[]
>;

export type InfotopicPrototypeRequiredLairs = GetStructType<{
  Faction: string;
}>;

export type InfotopicPrototypeRequiredNPCs = StringArray;

export type InfotopicPrototypeRequiredReputations = GetStructType<
  InfotopicPrototypeBlockingReputationsItem[]
>;

export type InfotopicPrototypeRequiredZoneSIDs = StringArray;

export type InputManagerConstant = GetStructType<{
  Actions: InputManagerConstantActions;
  ControllerType: EInputController;
}>;

export type InputManagerConstantActions = GetStructType<
  SingletonConstantActionsItem[]
>;

export type InputMappingContextPrototype = GetStructType<{
  AssetPath: string;
  CleanupInputSystemOnRemove: boolean;
  IgnorePreviousPressedKeysOnCapture: boolean;
  IgnorePreviousPressedKeysOnRemove: boolean;
  MappingId: EMappingContext;
  Priority: EInputMappingContextPriority;
  SID: string;
}>;

export type ItemContainerPrototype = GetStructType<{
  Blueprint: string;
  bOpeningInventory: boolean;
  CachePrototypeID: string;
  EmptyMeshPrototypeSID: string;
  ForcePhysics: boolean;
  ItemContainerType: EItemContainerType;
  MeshPrototypeSID: string;
  RespawnTimeSeconds: number;
  SID: string;
  StashCloseEvent: string;
  StashOpenEvent: string;
  StashTypeSoundSwitch: string;
}>;

export type ItemGeneratorPrototype = GetStructType<{
  GeneratedItems: NPCPrototypeSkills;
  ID: number;
  ItemGenerator: ItemGeneratorPrototypeItemGenerator;
  MoneyGenerator: QuestRewardsPrototypeMoneyGenerator;
  RefreshTime: string;
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type ItemGeneratorPrototypeHead = GetStructType<{
  bAllowSameCategoryGeneration: boolean;
  Category: EItemGenerationCategory;
  PlayerRank: ERank;
  PossibleItems: ItemGeneratorPrototypePossibleItems;
}>;

export type ItemGeneratorPrototypeItemGenerator = GetStructType<
  ItemGeneratorPrototypeItemGeneratorItem[] & {
    Attach: ItemGeneratorPrototypeHead;
    BodyArmor: ItemGeneratorPrototypeHead;
    Head: ItemGeneratorPrototypeHead;
    WeaponPrimary: ItemGeneratorPrototypeHead;
  }
>;

export type ItemGeneratorPrototypeItemGeneratorItem = GetStructType<{
  bAllowSameCategoryGeneration: boolean;
  Category: EItemGenerationCategory;
  Diff: EGameDifficulty;
  PlayerRank: ERank;
  PossibleItems: ItemGeneratorPrototypePossibleItems;
  RefreshTime: string;
  ReputationThreshold: number;
}>;

export type ItemGeneratorPrototypePossibleItems = GetStructType<
  ItemGeneratorPrototypePossibleItemsItem[]
>;

export type ItemGeneratorPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxcount: number;
  AmmoMaxCount: number;
  AmmoMinCount: number;
  Attaches: QuestRewardsPrototypeUpgrades;
  bRequireAmmo: boolean;
  bRequireWeapon: boolean;
  bUnloadedWeapon: boolean;
  Chance: number;
  ItemGeneratorPrototypeSID: string;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Upgrades: QuestRewardsPrototypeUpgrades;
  weight: number;
  Weight: number;
}>;

export type ItemPrototype = GetStructType<{
  BaseDurability: number;
  ConsumeOnUse: boolean;
  Cost: number;
  DestroyOnPickup: boolean;
  EffectOnPickPrototypeSIDs: NPCPrototypeSkills;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  EffectsDisplayTypes: AssetLibraryUIIcons;
  FittingWeaponsSIDs: AssetLibraryUIIcons;
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
  SectionPositions: NPCPrototypeSkills;
  ShouldShowEffects: NPCPrototypeSkills;
  SID: string;
  SortGroup: ESortGroup;
  SortPriority: number;
  Type: EItemType;
  Usable: boolean;
  Weight: number;
}>;

export type JournalQuestPrototype = GetStructType<{
  Description: string;
  Descriptions: SingletonConstantZombie;
  Image: string;
  ImagePath: string;
  LocationSID: string;
  MainQuest: boolean;
  Name: string;
  Region: ERegion;
  RewardTypes: string;
  SID: string;
  Stages: string;
}>;

export type JournalQuestPrototypeMain1 = GetStructType<{
  Description: string;
  Optional: number | boolean;
  SID: string;
}>;

export type JournalQuestPrototypeRewardTypes = GetStructType<
  EQuestRewardType[]
>;

export type JournalQuestPrototypeStages = GetStructType<{
  [key in string]: JournalQuestPrototypeMain1;
}>;

export type JournalQuestPrototypeUnnamedStruct8 = GetStructType<{
  Description: string;
  SID: number;
}>;

export type KeyboardLayoutPreset = GetStructType<{
  Aiming: KeyboardLayoutPresetAiming;
  AttachSelector: string;
  Bolt: string;
  Codelock: string;
  Cutscene: string;
  DeathScreen: string;
  Debug: string;
  Dialogue: string;
  DialogueOnTheGo: string;
  EditSafeZone: string;
  EULA: string;
  Exploration: KeyboardLayoutPresetExploration;
  Grenade: string;
  Guitar: string;
  ImportantChoice: string;
  InspectArtifact: KeyboardLayoutPresetInspectArtifact;
  Interactivity: string;
  Inventory: string;
  ItemSelector: KeyboardLayoutPresetItemSelector;
  Journal: string;
  Knife: string;
  Ladder: string;
  LoadingScreen: string;
  Map: string;
  Menu: string;
  MenuSettings: string;
  ModBrowser: string;
  NoInput: string;
  None: string;
  Note: string;
  PDA: string;
  PDA_Encyclopedia: string;
  PDA_Stats: string;
  PDATutorial: string;
  PlayerContextualAction: string;
  PlayMovie: string;
  Popup: string;
  Presentation: string;
  QuestNotification: string;
  RightClickContextualMenu: string;
  Sleep: string;
  StackSplitMenu: string;
  StealthKill: string;
  Subtitle: string;
  SystemNotifications: string;
  Trade: string;
  Upgrades: string;
  UpgradesNavigation: string;
  UpgradesPopup: string;
}>;

export type KeyboardLayoutPresetAiming = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetAttachSelector = GetStructType<
  KeyboardLayoutPresetGuitarItem[]
>;

export type KeyboardLayoutPresetCodelock = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetDialogue = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetDialogueOnTheGo = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetEditSafeZone = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetEULA = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetExploration = GetStructType<
  KeyboardLayoutPresetGuitarItem[]
>;

export type KeyboardLayoutPresetGuitar = GetStructType<
  KeyboardLayoutPresetGuitarItem[]
>;

export type KeyboardLayoutPresetGuitarItem = GetStructType<{
  bIsPlayerMappable: boolean;
  DefaultID: number;
  InputActionSID: string;
  Key: string;
  Modifiers: KeyboardLayoutPresetModifiers;
  OldKey: string;
  PlayerMappableOption: string;
  Triggers: KeyboardLayoutPresetTriggers;
}>;

export type KeyboardLayoutPresetImportantChoice = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetInspectArtifact = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetInventory = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetItemSelector = GetStructType<
  KeyboardLayoutPresetGuitarItem[]
>;

export type KeyboardLayoutPresetJournal = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetLadder = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetMap = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetMapItem = GetStructType<{
  bIsPlayerMappable: boolean;
  DefaultID: number;
  InputActionSID: string;
  Key: string;
  OldKey: string;
  PlayerMappableOption: string;
  Triggers: KeyboardLayoutPresetTriggers;
}>;

export type KeyboardLayoutPresetMenu = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetMenuSettings = GetStructType<
  KeyboardLayoutPresetGuitarItem[]
>;

export type KeyboardLayoutPresetModifiers = GetStructType<
  EPlayerActionInputModifier[]
>;

export type KeyboardLayoutPresetNote = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetPDATutorial = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetPlayerContextualAction = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetPopup = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetStackSplitMenu = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetTrade = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetTriggers = GetStructType<
  EPlayerActionInputTrigger[]
>;

export type KeyboardLayoutPresetUpgrades = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyboardLayoutPresetUpgradesPopup = GetStructType<
  KeyboardLayoutPresetMapItem[]
>;

export type KeyItemPrototype = GetStructType<{
  LocalizationSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  Weight: number;
}>;

export type LairPrototype = GetStructType<{
  ID: number;
  Preset: LairPrototypePreset;
  SID: string;
}>;

export type LairPrototypeMaster = GetStructType<{
  InitialSpawnQuantityPercent: number;
  InitialSpawnQuantityRespawnTimeSeconds: number;
  MaxSpawnQuantity: number;
  MaxSpawnQuantityRespawnTimeSeconds: number;
  SpawnSettingsPerArchetypes: LairPrototypeSpawnSettingsPerArchetypes;
  WipeRespawnTimeoutSeconds: number;
}>;

export type LairPrototypePossibleInhabitantFactions = GetStructType<
  LairPrototypePossibleInhabitantFactionsItem[]
>;

export type LairPrototypePossibleInhabitantFactionsItem = GetStructType<{
  Faction: string;
  SpawnSettingsPerPlayerRanks: LairPrototypeSpawnSettingsPerPlayerRanks;
}>;

export type LairPrototypePreset = GetStructType<{
  InitialInhabitantFaction: string;
  IsALifePoint: boolean;
  PossibleInhabitantFactions: LairPrototypePossibleInhabitantFactions;
}>;

export type LairPrototypeSpawnSettingsPerArchetypes = GetStructType<{
  GeneralNPC_Duty_CloseCombat: GenericLairPrototypeRat;
}>;

export type LairPrototypeSpawnSettingsPerPlayerRanks = GetStructType<{
  [k in Rank]: LairPrototypeMaster;
}>;

export type LevelStreamingPrototype = GetStructType<{
  HiddenLevels: CoreVariableHead;
  ID: number;
  SID: string;
}>;

export type LR_MeshGeneratorPrototype = GetStructType<{
  Attachments: LR_MeshGeneratorPrototypeAttachments;
  CustomData: LR_MeshGeneratorPrototypeCustomData;
  Groom: LR_MeshGeneratorPrototypeGroom;
  Materials: LR_MeshGeneratorPrototypeMaterials;
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type LR_MeshGeneratorPrototypeAttaches = GetStructType<
  LR_MeshGeneratorPrototypeAttachesItem[]
>;

export type LR_MeshGeneratorPrototypeAttachesItem = GetStructType<{
  BlockingBodyMeshes: MeshGeneratorPrototypeBlockingBodyMeshes;
  BlockingGroomSIDs: UpgradePrototypeEffectPrototypeSIDs;
  BlockingSlots: UpdatePopupPrototypeContentData;
  BodyMeshSID: string;
  Weight: number;
}>;

export type LR_MeshGeneratorPrototypeAttachments = GetStructType<
  LR_MeshGeneratorPrototypeAttachmentsItem[] & {
    [Bbe in string]: LR_MeshGeneratorPrototypeBbe;
  }
>;

export type LR_MeshGeneratorPrototypeAttachmentsItem = GetStructType<{
  Attaches: LR_MeshGeneratorPrototypeAttaches;
  IsSkeletal: boolean;
  Name: string;
  OffsetX: number;
  OffsetY: number;
  OffsetZ: number;
  RotationPitch: number;
  RotationRoll: number;
  RotationYaw: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  SlotName: string;
  SocketName: string;
}>;

export type LR_MeshGeneratorPrototypeBbe = GetStructType<{
  Attaches: LR_MeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type LR_MeshGeneratorPrototypeCustomData = GetStructType<
  LR_MeshGeneratorPrototypeDirt[]
>;

export type LR_MeshGeneratorPrototypeDirt = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  Variations: LR_MeshGeneratorPrototypeVariations;
}>;

export type LR_MeshGeneratorPrototypeGroom = GetStructType<
  LR_MeshGeneratorPrototypeGroomItem[]
>;

export type LR_MeshGeneratorPrototypeGroomItem = GetStructType<{
  CategoryName: string;
  Variations: LR_MeshGeneratorPrototypeVariations;
}>;

export type LR_MeshGeneratorPrototypeMaterials = GetStructType<
  LR_MeshGeneratorPrototypeMaterialsItem[]
>;

export type LR_MeshGeneratorPrototypeMaterialsItem = GetStructType<{
  MaterialGroup: string;
  Variations: LR_MeshGeneratorPrototypeVariations;
}>;

export type LR_MeshGeneratorPrototypeVariations = GetStructType<
  AttachMeshPrototypeVariationsItem[]
>;

export type MarkerPrototype = GetStructType<{
  Description: string;
  HubRadius: number;
  InitDiscoverState: string;
  MarkerExploreDistance: number;
  MarkerRadius: number;
  MarkerRevealDistance: number;
  MarkType: EMarkerType;
  RegionType: ERegion;
  SID: string;
  Title: string;
  WorldPosition: AIGlobalRelativeLocation;
}>;

export type MeleeWeaponPrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  Bleeding: number;
  BleedingChanceIncrement: number;
  CrosshairType: ECrosshairType;
  Damage: number;
  DamageModifiers: MeleeWeaponPrototypeDamageModifiers;
  HeavyAttackImpactSoundEvent: string;
  HitDetectionAngle: number;
  HitDetectionDistance: number;
  HitDetectionRadius: number;
  ImpactPhysicalMaterialPrototypeSID: string;
  ImpulseModifiers: MeleeWeaponPrototypeDamageModifiers;
  ImpulseStrength: number;
  LightAttackImpactSoundEvent: string;
  ShouldIgnoreArmor: boolean;
  SID: string;
  SourceEffects: MeleeWeaponPrototypeSourceEffects;
  TargetEffects: MeleeWeaponPrototypeTargetEffects;
}>;

export type MeleeWeaponPrototypeDamageModifiers = GetStructType<{
  HandOccupied: number;
  StrongAttack: number;
}>;

export type MeleeWeaponPrototypeSourceEffects = GetStructType<
  ObjPrototypeEffectsItem[]
>;

export type MeleeWeaponPrototypeTargetEffects = GetStructType<
  ObjPrototypeEffectsItem[]
>;

export type MeshGeneratorPrototype = GetStructType<{
  Attachments: MeshGeneratorPrototypeAttachments;
  CustomData: MeshGeneratorPrototypeCustomData;
  Groom: MeshGeneratorPrototypeGroom;
  Materials: MeshGeneratorPrototypeMaterials;
  ParentMeshGeneratorSID: string;
  QualityPresetsMeshGenerators: MeshGeneratorPrototypeQualityPresetsMeshGenerators;
  SID: string;
}>;

export type MeshGeneratorPrototypeAttaches = GetStructType<
  MeshGeneratorPrototypeAttachesItem[]
>;

export type MeshGeneratorPrototypeAttachesItem = GetStructType<{
  BlockingBodyMeshes: MeshGeneratorPrototypeBlockingBodyMeshes;
  BlockingGroomSIDs: UpgradePrototypeEffectPrototypeSIDs;
  BlockingSlots: UpdatePopupPrototypeContentData;
  BodyMeshSID: string;
  Weight: number;
}>;

export type MeshGeneratorPrototypeAttachments = GetStructType<
  MeshGeneratorPrototypeAttachmentsItem[] & {
    [Bbe in string]: MeshGeneratorPrototypeBbe;
  }
>;

export type MeshGeneratorPrototypeAttachmentsItem = GetStructType<{
  Attaches: MeshGeneratorPrototypeAttaches;
  IsSkeletal: boolean;
  Name: string;
  OffsetX: number;
  OffsetY: number;
  OffsetZ: number;
  RotationPitch: number;
  RotationRoll: number;
  RotationYaw: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  SlotName: string;
  SocketName: string;
}>;

export type MeshGeneratorPrototypeBbe = GetStructType<{
  Attaches: MeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type MeshGeneratorPrototypeBlockingBodyMeshes = StringArray;

export type MeshGeneratorPrototypeCustomData = GetStructType<
  MeshGeneratorPrototypeDirt[]
>;

export type MeshGeneratorPrototypeDirt = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  Variations: MeshGeneratorPrototypeVariations;
}>;

export type MeshGeneratorPrototypeGroom = GetStructType<
  MeshGeneratorPrototypeGroomItem[]
>;

export type MeshGeneratorPrototypeGroomItem = GetStructType<{
  CategoryName: string;
  Variations: MeshGeneratorPrototypeVariations;
}>;

export type MeshGeneratorPrototypeMaterials = GetStructType<
  MeshGeneratorPrototypeMaterialsItem[]
>;

export type MeshGeneratorPrototypeMaterialsItem = GetStructType<{
  MaterialGroup: string;
  Variations: MeshGeneratorPrototypeVariations;
}>;

export type MeshGeneratorPrototypeQualityPresetsMeshGenerators = GetStructType<
  MeshGeneratorPrototypeQualityPresetsMeshGeneratorsItem[]
>;

export type MeshGeneratorPrototypeQualityPresetsMeshGeneratorsItem =
  GetStructType<{
    MeshGeneratorSID: string;
    QualityPresetIndex: number;
  }>;

export type MeshGeneratorPrototypeVariations = GetStructType<
  MeshGeneratorPrototypeVariationsItem[]
>;

export type MeshGeneratorPrototypeVariationsItem = GetStructType<{
  bBlockedInVisualizer: boolean;
  VariationIndex: number;
  Weight: number;
}>;

export type MeshPrototype = GetStructType<{
  AdditionalMeshes: MeshPrototypeAdditionalMeshes;
  ID: number;
  MaterialPath: string;
  Materials: MeshPrototypeMaterials;
  MeshPath: string;
  MeshType: EMeshSubType;
  Pitch: number;
  Roll: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  SID: string;
  SizeX: number;
  SizeY: number;
  SizeZ: number;
  Yaw: number;
}>;

export type MeshPrototypeAdditionalMeshes = GetStructType<
  MeshPrototypeAdditionalMeshesItem[]
>;

export type MeshPrototypeAdditionalMeshesItem = GetStructType<{
  MeshPath: string;
  MeshPrototypeSID: string;
}>;

export type MeshPrototypeMaterials = GetStructType<
  MeshPrototypeMaterialsItem[]
>;

export type MeshPrototypeMaterialsItem = GetStructType<{
  MaterialPath: string;
  MaterialSlot: number;
}>;

export type MisansceneNodePrototype = GetStructType<{
  ActorID: number;
  ActorSID: string;
  ActorsSID: NPCPrototypeSkills;
  Chances: CoreVariableSignalStrength;
  Connections: MisansceneNodePrototypeConnections;
  MisansceneSID: string;
  NodeType: EMisansceneNodeType;
  Repetitions: number;
  SID: string;
  TargetGuid: string;
}>;

export type MisansceneNodePrototypeConnections = GetStructType<{
  Input: CoreVariableLegs;
  Output: SingletonConstantZombie;
}>;

export type MoneyPrototype = GetStructType<{
  Cost: number;
  DestroyOnPickup: boolean;
  EffectOnPickPrototypeSIDs: NPCPrototypeSkills;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  Icon: string;
  InvisibleInPlayerInventory: boolean;
  LocalizationSID: string;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  Type: EItemType;
  Weight: number;
}>;

export type MovementFXPrototype = GetStructType<{
  BackFootSoundEvent: string;
  DashVFXPath: string;
  FootstepFX: MovementFXPrototypeFootstepFX;
  FrontFootSoundEvent: string;
  ID: number;
  InteractLadderMetal: string;
  InteractLadderWood: string;
  InteractSoundEvent: MovementFXPrototypeInteractSoundEvent;
  MovementTypeJogging: string;
  MovementTypeRun: string;
  MovementTypeSprint: string;
  MovementTypeWalk: string;
  PhysicsSoundSID: string;
  PlayerCrouchEvent: string;
  PlayerJumpEvent: string;
  PlayerLandingEvent: string;
  PlayerLowCrouchEvent: string;
  PlayerStandEvent: string;
  SID: string;
  WaterMovement: MovementFXPrototypeWaterMovement;
}>;

export type MovementFXPrototypeFootstepFX = GetStructType<
  MovementFXPrototypeFootstepFXItem[]
>;

export type MovementFXPrototypeFootstepFXItem = GetStructType<
  MovementFXPrototypeFootstepFXItemItem[]
>;

export type MovementFXPrototypeFootstepFXItemItem = GetStructType<{
  BackFootDecal: string;
  FrontFootDecal: string;
  ImpactParticle: string;
  ImpactParticleRunSprint: string;
  ImpactSurfaceDecalSize: AIGlobalRelativeLocation;
  PhysicalMaterialType: EPhysicalMaterialType;
}>;

export type MovementFXPrototypeInteractSoundEvent = GetStructType<
  MovementFXPrototypeInteractSoundEventItem[]
>;

export type MovementFXPrototypeInteractSoundEventItem = GetStructType<{
  InteractionFX: EInteractFXType;
  SoundEvent: string;
}>;

export type MovementFXPrototypeWaterMovement = GetStructType<{
  ImpactSpawnIntervalSeconds: number;
  JumpWaterImpact: string;
  MovingThroughLowWaterImpactRunSprint: string;
  MovingThroughLowWaterImpactWalk: string;
  MovingThroughWaterImpact: string;
}>;

export type MovementSensorPrototype = GetStructType<{
  DetectionRadius: number;
  DetectionSpeed: number;
  DistancePenaltyCurve: string;
  Enabled: boolean;
  IdentificationThreshold: number;
  MinObjectSpeedRange: AbilityPrototypeRadius;
  SID: string;
}>;

export type MusicManagerPrototype = GetStructType<{
  CombatTracks: MusicManagerPrototypeCombatTracks;
  SID: string;
}>;

export type MusicManagerPrototypeCombatTracks = GetStructType<
  MusicManagerPrototypeCombatTracksItem[]
>;

export type MusicManagerPrototypeCombatTracksItem = GetStructType<{
  TrackSwitchValue: string;
}>;

export type MutantLootPrototype = GetStructType<{
  Cost: number;
  DestroyOnPickup: boolean;
  Icon: string;
  Invisible: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MeshPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  Type: EItemType;
  Weight: number;
}>;

export type NightVisionGogglesPrototype = GetStructType<{
  ActiveEffectSIDs: ObjAimAssistParamsPrototypeAdditionalBones;
  Cost: number;
  Icon: string;
  Icon1x1: string;
  Invisible: boolean;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeshPrototypeSID: string;
  NPCGogglesPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  TurnOffAudioEvent: string;
  TurnOnAudioEvent: string;
  Type: EItemType;
  Weight: number;
}>;

export type NotePrototype = GetStructType<{
  AudiologChainPrototypeSID: string;
  CustomIconPath: string;
  ID: number;
  NoteType: ENoteType;
  SID: string;
  Text: string;
  Title: string;
}>;

export type NotificationEventPrototype = GetStructType<{
  FactionBasedSoundEventInformation: NotificationEventPrototypeFactionBasedSoundEventInformation;
  ID: number;
  MaxNotificationEventOccurencePerSecond: number;
  MaxSoundSpreadingDistance: number;
  SID: string;
  Type: ENotificationEventType;
}>;

export type NotificationEventPrototypeFactionBasedSoundEventInformation =
  GetStructType<
    NotificationEventPrototypeFactionBasedSoundEventInformationItem[]
  >;

export type NotificationEventPrototypeFactionBasedSoundEventInformationItem =
  GetStructType<{
    Faction: string;
    FactionDetectionRadius: number;
  }>;

export type NPCName = GetStructType<{
  any_rank: NPCNamemaster;
  experienced: NPCNamemaster;
  master: NPCNamemaster;
  newbie: NPCNamemaster;
  veteran: NPCNamemaster;
}>;

export type NPCNameFirstNames = StringArray;

export type NPCNameLastNames = StringArray;

export type NPCNamemaster = GetStructType<{
  FirstNames: NPCNameFirstNames;
  LastNames: NPCNameLastNames;
}>;

export type NPCNeedsPresetPrototype = GetStructType<{
  GoalNeeds: NPCNeedsPresetPrototypeGoalNeeds;
  Needs: NPCNeedsPresetPrototypeNeeds;
  NeedsResolvers: NPCNeedsPresetPrototypeNeedsResolvers;
  SID: string;
}>;

export type NPCNeedsPresetPrototypeExpansionResolverFactory = GetStructType<{
  MaxSquadSize: number;
  MinSquadSize: number;
}>;

export type NPCNeedsPresetPrototypeGoalNeeds = GetStructType<
  NPCNeedsPresetPrototypeGoalNeedsItem[] & {
    bEmpty: boolean;
  }
>;

export type NPCNeedsPresetPrototypeGoalNeedsItem = GetStructType<{
  InitialNeedValue: number;
  MaxIncreasePerMinute: number;
  MinIncreasePerMinute: number;
  NeedSatisfactionThreshold: number;
  NeedTag: string;
}>;

export type NPCNeedsPresetPrototypeNeeds = GetStructType<
  NPCNeedsPresetPrototypeNeedsItem[]
>;

export type NPCNeedsPresetPrototypeNeedsItem = GetStructType<{
  IncreaseRateMax: number;
  IncreaseRateMin: number;
  MaxCount: number;
  NeedType: EContextualActionNeeds;
  Radius: number;
}>;

export type NPCNeedsPresetPrototypeNeedsResolvers = GetStructType<
  NPCNeedsPresetPrototypeNeedsResolversItem[] & {
    bEmpty: boolean;
  }
>;

export type NPCNeedsPresetPrototypeNeedsResolversItem = GetStructType<{
  ExpansionResolverFactory: NPCNeedsPresetPrototypeExpansionResolverFactory;
  IdentificationTag: string;
  OnCompleted: NPCNeedsPresetPrototypeOnCompleted;
  ResolverFactory: string;
  ReuniteWithLairResolverFactory: NPCNeedsPresetPrototypeExpansionResolverFactory;
}>;

export type NPCNeedsPresetPrototypeOnCompleted = GetStructType<
  NPCNeedsPresetPrototypeOnCompletedItem[]
>;

export type NPCNeedsPresetPrototypeOnCompletedItem = GetStructType<{
  NeedTag: string;
  SatisfactionAmount: number;
}>;

export type NPCNightVisionSetupPrototype = GetStructType<{
  AllowedAttachSuffixes: NPCPrototypeSkills;
  BlockAttachSuffixes: NPCNightVisionSetupPrototypeBlockAttachSuffixes;
  ID: number;
  IncompatibleSuffixes: ObjPrototypeCapsuleNames;
  MaterialEmissiveMultOverride: number;
  PointLightOffsets: NPCNightVisionSetupPrototypePointLightOffsets;
  SID: string;
  SocketNamesMeshes: NPCNightVisionSetupPrototypeSocketNamesMeshes;
  SpotlightBrightnessOverride: number;
}>;

export type NPCNightVisionSetupPrototypeBlockAttachSuffixes = StringArray;

export type NPCNightVisionSetupPrototypeMeshOffsetParams = GetStructType<
  NPCNightVisionSetupPrototypeMeshOffsetParamsItem[]
>;

export type NPCNightVisionSetupPrototypeMeshOffsetParamsItem = GetStructType<{
  MeshPath: string;
  OffsetRotator: SpawnActorPrototypeRotation;
  OffsetVector: AIGlobalRelativeLocation;
}>;

export type NPCNightVisionSetupPrototypePointLightOffsets = GetStructType<
  NPCNightVisionSetupPrototypePointLightOffsetsItem[]
>;

export type NPCNightVisionSetupPrototypePointLightOffsetsItem = GetStructType<{
  PointLightOffsetRotator: SpawnActorPrototypeRotation;
  PointLightOffsetVector: AIGlobalRelativeLocation;
}>;

export type NPCNightVisionSetupPrototypeRelatedMeshes = StringArray;

export type NPCNightVisionSetupPrototypeSocketNamesMeshes = GetStructType<
  NPCNightVisionSetupPrototypeSocketNamesMeshesItem[]
>;

export type NPCNightVisionSetupPrototypeSocketNamesMeshesItem = GetStructType<{
  HelmetAttachmentMesh: string;
  HelmetAttachmentOffsetRotator: SpawnActorPrototypeRotation;
  HelmetAttachmentOffsetVector: AIGlobalRelativeLocation;
  MeshOffsetParams: NPCNightVisionSetupPrototypeMeshOffsetParams;
  RelatedMeshes: NPCNightVisionSetupPrototypeRelatedMeshes;
  SocketName: string;
}>;

export type NPCPrototype = GetStructType<{
  BusyCommentDialogChain: string;
  BuyCoefficient: number;
  ByeDialogChain: string;
  CallPlayerCommentDialogChain: string;
  DefeatCommentDialogChain: string;
  DefeatTopicDialogChain: string;
  FastTravelPrototypeSID: string;
  HelloDialogChain: string;
  Money: number;
  NameTextKey: string;
  NPCMarker: string;
  NPCType: ENPCType;
  QuestNPC: boolean;
  ResumeCommentDialogChain: string;
  SellCoefficient: number;
  SID: string;
  Skills: NPCPrototypeSkills;
  ThreshHoldItemCondition: number;
  TradeTopicDialogChain: string;
  TravelTopicDialogChain: string;
  UpdateMarkerOnMap: boolean;
  Upgrades: NPCPrototypeUpgrades;
  UpgradeTopicDialogChain: string;
  UseGeneratedName: boolean;
  VoiceEN: string;
  VoiceUA: string;
}>;

export type NPCPrototypeSkills = StringArray;

export type NPCPrototypeUpgrades = GetStructType<NPCPrototypeUpgradesItem[]>;

export type NPCPrototypeUpgradesItem = GetStructType<{
  Enabled: boolean;
  UpgradePrototypeSID: string;
}>;

export type NPCSpawnerPrototype = GetStructType<{
  Blueprint: string;
  MinPopulationCountToRefresh: number;
  ObjPrototypeSIDs: CoreVariableTorso;
  QuantityMaxInSquad: number;
  QuantityMinInSquad: number;
  SID: string;
  SpawnRadius: number;
}>;

export type NPCWeaponAttributesPrototype = GetStructType<{
  AIParameters: NPCWeaponAttributesPrototypeAIParameters;
  AnimBlueprint: string;
  MuzzleSocketName: string;
  ParticlesBasedOnHeating: NPCWeaponAttributesPrototypeParticlesBasedOnHeating;
  ShellShutterSocketName: string;
  SID: string;
}>;

export type NPCWeaponAttributesPrototypeAIParameters = GetStructType<{
  BehaviorTypes: NPCWeaponAttributesPrototypeBehaviorTypes;
}>;

export type NPCWeaponAttributesPrototypeBehaviorTypes = GetStructType<
  {
    [k in Rank]: NPCWeaponAttributesPrototypeMaster;
  } & {
    Zombie: NPCWeaponAttributesPrototypeMaster;
  }
>;

export type NPCWeaponAttributesPrototypeMaster = GetStructType<
  { [k in WeaponShootDistance]: WeaponAttributesPrototypeLong } & {
    CharacterWeaponSettingsSID: string;
    CombatEffectiveFireDistanceMax: number;
    CombatEffectiveFireDistanceMin: number;

    NonAutomaticWeaponShotDelay: number;
  }
>;

export type NPCWeaponAttributesPrototypeParticlesBasedOnHeating = GetStructType<
  NPCWeaponAttributesPrototypeParticlesBasedOnHeatingItem[]
>;

export type NPCWeaponAttributesPrototypeParticlesBasedOnHeatingItem =
  GetStructType<{
    PostShooting: AttachPrototypeShooting;
    Shooting: AttachPrototypeShooting;
    VFXGroupName: string;
  }>;

export type NPCWeaponSettingsPrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseDamage: number;
  BulletDropHeight: number;
  ChanceBleedingPerShot: string;
  CombatSynchronizationScore: NPCWeaponSettingsPrototypeCombatSynchronizationScore;
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

export type NPCWeaponSettingsPrototypeCombatSynchronizationScore =
  GetStructType<NPCWeaponSettingsPrototypeCombatSynchronizationScoreItem[]>;

export type NPCWeaponSettingsPrototypeCombatSynchronizationScoreItem =
  GetStructType<{
    Score: number;
    TokenTag: string;
  }>;

export type ObjAimAssistParamsPrototype = GetStructType<{
  BoneClusters: ObjAimAssistParamsPrototypeBoneClusters;
  SID: string;
}>;

export type ObjAimAssistParamsPrototypeAdditionalBones = StringArray;

export type ObjAimAssistParamsPrototypeBoneClusters = GetStructType<
  ObjAimAssistParamsPrototypeBoneClustersItem[]
>;

export type ObjAimAssistParamsPrototypeBoneClustersItem = GetStructType<{
  AdditionalBones: ObjAimAssistParamsPrototypeAdditionalBones;
  MainBone: string;
  VisibilityBone: string;
}>;

export type ObjCrouchParamsPrototype = GetStructType<{
  CrouchEffectSIDs: NPCPrototypeSkills;
  SID: string;
}>;

export type ObjCustomAbilityDialogPrototype = GetStructType<{
  AbilityDialogues: ObjCustomAbilityDialogPrototypeAbilityDialogues;
  SID: string;
}>;

export type ObjCustomAbilityDialogPrototypeAbilityDialogues = GetStructType<
  ObjCustomAbilityDialogPrototypeAbilityDialoguesItem[]
>;

export type ObjCustomAbilityDialogPrototypeAbilityDialoguesItem =
  GetStructType<{
    AbilityTag: string;
    DialogueSIDs: NPCPrototypeSkills;
  }>;

export type ObjEffectMaxParamsPrototype = GetStructType<{
  MaxEffectValues: ObjEffectMaxParamsPrototypeMaxEffectValues;
  SID: string;
}>;

export type ObjEffectMaxParamsPrototypeMaxEffectValues = GetStructType<
  ObjEffectMaxParamsPrototypeMaxEffectValuesItem[]
>;

export type ObjEffectMaxParamsPrototypeMaxEffectValuesItem = GetStructType<{
  EffectSID: EEffectType;
  MaxValue: number;
}>;

export type ObjHoldBreathParamsPrototype = GetStructType<{
  HoldBreathCooldown: number;
  HoldBreathDrainPerSecond: number;
  HoldBreathMaxStamina: number;
  HoldBreathRegenPerSecond: string;
  HoldBreathStaminaThreshold: number;
  PostHoldBreathParameters: ObjHoldBreathParamsPrototypePostHoldBreathParameters;
  SID: string;
}>;

export type ObjHoldBreathParamsPrototypePostHoldBreathParameters =
  GetStructType<ObjHoldBreathParamsPrototypePostHoldBreathParametersItem[]>;

export type ObjHoldBreathParamsPrototypePostHoldBreathParametersItem =
  GetStructType<{
    EffectPrototypeSIDs: SingletonConstantArmy;
    Threshold: number;
  }>;

export type ObjOnHitParamsPrototype = GetStructType<{
  DamageTypeEffects: ObjOnHitParamsPrototypeDamageTypeEffects;
  DirectionalDamageEffects: ObjOnHitParamsPrototypeDirectionalDamageEffects;
  SID: string;
}>;

export type ObjOnHitParamsPrototypeDamageTypeEffects = GetStructType<
  ObjOnHitParamsPrototypeDamageTypeEffectsItem[]
>;

export type ObjOnHitParamsPrototypeDamageTypeEffectsItem = GetStructType<{
  DamageType: EDamageType;
  Effects: ObjOnHitParamsPrototypeEffects;
}>;

export type ObjOnHitParamsPrototypeDirectionalDamageEffects = GetStructType<
  ObjOnHitParamsPrototypeDirectionalDamageEffectsItem[]
>;

export type ObjOnHitParamsPrototypeDirectionalDamageEffectsItem = GetStructType<
  ObjOnHitParamsPrototypeDirectionalDamageEffectsItemItem[]
>;

export type ObjOnHitParamsPrototypeDirectionalDamageEffectsItemItem =
  GetStructType<{
    EffectSID: string;
    MaxDamage: number;
    MaxEffectValueModifier: number;
    MinDamage: number;
    MinEffectValueModifier: number;
  }>;

export type ObjOnHitParamsPrototypeEffects = GetStructType<
  ObjOnHitParamsPrototypeEffectsItem[]
>;

export type ObjOnHitParamsPrototypeEffectsItem = GetStructType<{
  AccumulationTime: number;
  EffectSID: string;
  MaxDamage: number;
  MaxEffectValueModifier: number;
  MinDamage: number;
  MinEffectValueModifier: number;
}>;

export type ObjPrototype = GetStructType<{
  Abilities: ObjPrototypeAbilities;
  AdvanceParameters: ObjPrototypeAdvanceParameters;
  AgentBehaviourParameters: ObjPrototypeAgentBehaviourParameters;
  AgentType: EAgentType;
  AimAssistParamsSID: string;
  AIVisionTargetParams: ObjPrototypeAIVisionTargetParams;
  Anim: EObjAnim;
  AnomalyDetectorPrototypeSID: string;
  AnomalyRestrictionsIgnoreChance: number;
  ApplicableMechanicsEffects: ObjPrototypeApplicableMechanicsEffects;
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
  AttackParams: ObjPrototypeAttackParams;
  BlinkTeleportActionData: ObjPrototypeBlinkTeleportActionData;
  Blueprint: string;
  BoneBleedingCoefficients: ObjPrototypeBoneBleedingCoefficients;
  BoneDamageCoefficients: ObjPrototypeBoneDamageCoefficients;
  BoneDamageMap: ObjPrototypeBoneDamageMap;
  CamperFeatureData: ObjPrototypeCamperFeatureData;
  CanBeKnockedDown: boolean;
  CanDailyScheduleBeOverride: boolean;
  CanPeekOut: boolean;
  CanProcessCorpses: boolean;
  ChangeCombatLocationActionData: ObjPrototypeChangeCombatLocationActionData;
  ChargeActionData: ObjPrototypeChargeActionData;
  ChaserFeatureData: ObjPrototypeChaserFeatureData;
  ClawAttackAnyAngleData: ObjPrototypeClawAttackAnyAngleData;
  ClawAttackData: ObjPrototypeClawAttackData;
  CombatParameters: ObjPrototypeCombatParameters;
  CombatSummonFeatureData: ObjPrototypeCombatSummonFeatureData;
  CriticalDamageAccumulationPeriod: number;
  CriticalDamageCoefThreshold: number;
  CriticalDamageCooldownMax: number;
  CriticalDamageCooldownMin: number;
  CriticalDamageThreshold: number;
  CrouchParamsSID: string;
  CustomAbilityDialogSID: string;
  CustomMeshGeneratorPrototypeSID: string;
  DailyScheduleSID: string;
  DamageAccumulatedToRetreat: number;
  DamageAccumulationDurationSeconds: number;
  DashParameters: ObjPrototypeDashParameters;
  DeathHandlerFeatureData: ObjPrototypeDeathHandlerFeatureData;
  DeathHitImpulseMultiplier: number;
  DeathVelocityImpulseMultiplier: number;
  DisableMovementWeightThreshold: ObjPrototypeDisableMovementWeightThreshold;
  DoorTransitionSettings: ObjPrototypeDoorTransitionSettings;
  EffectMaxParamsSID: string;
  EnemyValidationActionParams: ObjPrototypeEnemyValidationActionParams;
  EscapeIsolatedNavmeshActionData: ObjPrototypeEscapeIsolatedNavmeshActionData;
  EscapeParameters: ObjPrototypeEscapeParameters;
  EvadeParameters: ObjPrototypeEvadeParameters;
  Faction: string;
  FactoryClassName: string;
  FlairParams: ObjPrototypeFlairParams;
  FlairSensorPrototypeSID: string;
  FlankParameters: ObjPrototypeFlankParameters;
  FlankThreatActionData: ObjPrototypeFlankThreatActionData;
  FlashlightPrototypeSID: string;
  FlyThroughData: ObjPrototypeFlyThroughData;
  HearingSensorPrototypeSID: string;
  HideWeaponWarning: ObjPrototypeHideWeaponWarning;
  Hint: string;
  HoldBreathParamsSID: string;
  HumanAmbushParameters: ObjPrototypeHumanAmbushParameters;
  HumanInteractionParameters: ObjPrototypeHumanInteractionParameters;
  HumanLookAtParameters: ObjPrototypeHumanLookAtParameters;
  Icon: string;
  ID: number;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreWoundedRestriction: boolean;
  ImpactVFXSize: number;
  InstanceDamageData: ObjPrototypeInstanceDamageData;
  InvisibilityFeatureData: ObjPrototypeInvisibilityFeatureData;
  IsAffectingByMaxActorWithSimulation: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  JumpActionData: ObjPrototypeJumpActionData;
  JumpAttackData: ObjPrototypeJumpAttackData;
  JumpToEnemyActionData: ObjPrototypeJumpToEnemyActionData;
  KickAttackData: ObjPrototypeKickAttackData;
  LongJumpAttackData: ObjPrototypeLongJumpAttackData;
  Mass: number;
  MaxDialogInteractDistance: number;
  MaxReactionTimeToExplosion: number;
  MeleeAttackData: ObjPrototypeMeleeAttackData;
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  MinDialogInteractDistance: number;
  MinReactionTimeToExplosion: number;
  MovementParams: ObjPrototypeMovementParams;
  MovementSensorSID: string;
  MovementVFXPrototypeSID: string;
  MoveToEnemyActionData: ObjPrototypeMoveToEnemyActionData;
  MusicManagerCombatScore: number;
  MutantAmbushParameters: ObjPrototypeMutantAmbushParameters;
  MutantCoverSelectorFeatureData: ObjPrototypeMutantCoverSelectorFeatureData;
  MutantEscapeParameters: ObjPrototypeMutantEscapeParameters;
  NeedsPresetSID: string;
  npc_size: number;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  OfflineCombatWeight: number;
  OnHitParamsSID: string;
  PathFailedContextualAction: string;
  PeacefulChatterFeatureData: ObjPrototypePeacefulChatterFeatureData;
  PostResurrectionEffects: CoreVariableHead;
  PrepareForAttackActionData: ObjPrototypePrepareForAttackActionData;
  PrepareForEmissionContextualAction: string;
  ProcessCorpseObjectFeatureData: ObjPrototypeProcessCorpseObjectFeatureData;
  ProcessCorpseSubjectFeatureData: ObjPrototypeProcessCorpseSubjectFeatureData;
  Protection: ObjPrototypeProtection;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  RepairCostModifier: number;
  RetreatActionData: ObjPrototypeRetreatActionData;
  RetreatDuration: number;
  RetreatRadius: number;
  RoarActionData: ObjPrototypeRoarActionData;
  RunAttackData: ObjPrototypeRunAttackData;
  SearchpointDetectorPrototypeSID: string;
  SequentialAbilities: CoreVariableTorso;
  SequentialAbilitiesActionData: ObjPrototypeSequentialAbilitiesActionData;
  ShieldActionData: ObjPrototypeShieldActionData;
  ShieldFeatureData: ObjPrototypeShieldFeatureData;
  ShockwaveAttackData: ObjPrototypeKickAttackData;
  ShortJumpAttackData: ObjPrototypeJumpAttackData;
  ShouldAvoidDangerPolygons: boolean;
  ShouldGenerateStashClues: boolean;
  ShouldHideUnequippedPrimaryWeapon: boolean;
  ShouldRenderTextureInsteadOfGroom: boolean;
  ShouldTriggerAnomalies: boolean;
  SID: string;
  SideJumpActionData: ObjPrototypeSideJumpActionData;
  SimulateBattleParams: ObjPrototypeSimulateBattleParams;
  SkeletalMeshTraceBoneMap: ObjPrototypeSkeletalMeshTraceBoneMap;
  SleepinessActivationDistance: number;
  SleepinessDeactivationDistance: number;
  SleepParamsSID: string;
  SpaceRestrictorTag: string;
  SpawnPhantomParams: ObjPrototypeSpawnPhantomParams;
  SpendStaminaInSafeZone: boolean;
  StaminaPerAction: ObjPrototypeStaminaPerAction;
  StaminaPerActionLightOverweight: ObjPrototypeStaminaPerActionLightOverweight;
  StealthKillParams: ObjPrototypeStealthKillParams;
  StealthKillUnavailable: boolean;
  StealthParams: ObjPrototypeStealthParams;
  SuppressiveFireParameters: ObjPrototypeSuppressiveFireParameters;
  SyncParameters: ObjPrototypeSyncParameters;
  Text: string;
  ThreatPrototypeSID: string;
  ThrowActionData: ObjPrototypeThrowActionData;
  TradePrototypeSID: string;
  TremblingWhileEmissionContextualAction: string;
  Type: EObjType;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VaultingParams: ObjPrototypeVaultingParams;
  VFXSize: number;
  VisionScannerPrototypeSID: string;
  VitalParams: ObjPrototypeVitalParams;
  WaterContactInfo: ObjPrototypeWaterContactInfo;
  WeatherParamsSID: string;
  WeightParamsSID: string;
  ZombieBehaviourParameters: ObjPrototypeZombieBehaviourParameters;
  ZombieHearingSensorPrototypeSID: string;
  ZombieLayingIdleTime: number;
  ZombieVisionScannerPrototypeSID: string;
}>;

export type ObjPrototypeAbilities = GetStructType<{
  [key in ObjectAbilityName]: ObjPrototypeCat_Jump;
}>;

export type ObjPrototypeAdvanceParameters = GetStructType<{
  MaxAdvanceDurationSeconds: number;
  MaxDistanceToEnemy: number;
}>;

export type ObjPrototypeAgentBehaviourParameters = GetStructType<{
  WeaponHandling: ObjPrototypeWeaponHandling;
}>;

export type ObjPrototypeAIVisionTargetParams = GetStructType<{
  FriendlyTracePoints: ObjPrototypeFriendlyTracePoints;
  TracePoints: ObjPrototypeTracePoints;
}>;

export type ObjPrototypeAnimationData = GetStructType<
  ObjPrototypeAnimationDataItem[]
>;

export type ObjPrototypeAnimationDataItem = GetStructType<{
  Montage: string;
  Type: EEvadeActionType;
}>;

export type ObjPrototypeApplicableMechanicsEffects = StringArray;

export type ObjPrototypeAttackParams = GetStructType<{
  FireDispersionParams: ObjPrototypeFireDispersionParams;
  ForceDistance: number;
  MeleeAttackAcceptanceDistance: number;
  MeleeAttackHeight: number;
  MeleeAttackRadius: number;
  MeleeDamage: number;
  MutantAttackParams: ObjPrototypeMutantAttackParams;
}>;

export type ObjPrototypeAttacksConditions = GetStructType<
  ObjPrototypeAttacksConditionsItem[]
>;

export type ObjPrototypeAttacksConditionsItem = GetStructType<{
  AbilityTag: string;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
}>;

export type ObjPrototypeBlinkTeleportActionData = GetStructType<{
  bStartAmbushOnBlink: boolean;
  FinishAmbushTime: ObjPrototypeFinishAmbushTime;
}>;

export type ObjPrototypeBlockingMovement = GetStructType<EStateTag[]>;

export type ObjPrototypeBoneBleedingCoefficients = GetStructType<
  ObjPrototypeBoneDamageCoefficientsItem[]
>;

export type ObjPrototypeBoneDamageCoefficients = GetStructType<
  ObjPrototypeBoneDamageCoefficientsItem[]
>;

export type ObjPrototypeBoneDamageCoefficientsItem = GetStructType<{
  DamageBone: EDamageBone;
  DamageCoef: number;
}>;

export type ObjPrototypeBoneDamageMap = GetStructType<
  ObjPrototypeBoneDamageMapItem[]
>;

export type ObjPrototypeBoneDamageMapItem = GetStructType<{
  CapsuleNames: ObjPrototypeCapsuleNames;
  DamageBone: EDamageBone;
}>;

export type ObjPrototypeCamperFeatureData = GetStructType<{
  CamperRadius: number;
  SyncTokenTag: string;
  TimeToAssumeAsCamper: number;
}>;

export type ObjPrototypeCapsuleNames = StringArray;

export type ObjPrototypeCat_Jump = GetStructType<{
  ActivationTag: string;
  SID: string;
}>;

export type ObjPrototypeChangeCombatLocationActionData = GetStructType<{
  MoveToLocationFinishedAcceptableDistance: number;
  SearchSimpleLocationRadius: number;
}>;

export type ObjPrototypeChargeActionData = GetStructType<{
  AcceptableRadiusToTheEnd: number;
  DistToRunAfterTarget: number;
  Enabled: boolean;
  MaxDistToTarget: number;
  MinDistToTarget: number;
  SyncTag: string;
}>;

export type ObjPrototypeChaserFeatureData = GetStructType<{
  ChaserRadius: number;
  Enabled: boolean;
  RemainingHPToAssumeAsChaser: number;
  TimeToAssumeAsChaser: number;
}>;

export type ObjPrototypeClawAttackAnyAngleData = GetStructType<{
  AttacksConditions: ObjPrototypeAttacksConditions;
  AttackSyncTag: string;
  Enabled: boolean;
  HitOffset: number;
  StartAttackMaxDistance: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeClawAttackData = GetStructType<{
  AbilityTag: string;
  AttacksConditions: ObjPrototypeAttacksConditions;
  AttackSyncTag: string;
  Cooldown_Failed: number;
  Cooldown_SeriesFailed: number;
  Enabled: boolean;
  HitOffset: number;
  MaxZDiff: number;
  OrderActionMaxAngle: number;
  OrderActionMinAngle: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMaxDistanceTargetReachable: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeCombatBehaviour = GetStructType<{
  AddedShootingDistanceOnTheGo: number;
  MaxShootingAngle: number;
  MaxShootingStationaryDistance: number;
  MinShootingStationaryDistance: number;
}>;

export type ObjPrototypeCombatParameters = GetStructType<{
  CheckEnemyTime: number;
  CoverEvaluatorSID: string;
  DamageThresholdToChangeLocation: number;
  EarlyExitReloadTime: number;
  EnemyCouldBeVisibleMaxDistance: number;
  LoseEnemyVisibilityTime: number;
  MaxTimeInBadShootingPosition: number;
  NearbyDistanceWeaponNotReady: number;
  NearbyDistanceWeaponReady: number;
  RetreatToCoverDistance: number;
  UseFrontLineSearchPoint: boolean;
}>;

export type ObjPrototypeCombatSummonFeatureData = GetStructType<{
  bCheckLocationsBeforeStart: boolean;
  SummonAbilityTag: string;
}>;

export type ObjPrototypeDashParameters = GetStructType<{
  CollisionPreset: string;
  Montage: string;
  MovementSound: string;
  MovementVFX: string;
}>;

export type ObjPrototypeDeathHandlerFeatureData = GetStructType<{
  EffectsOnPlayer: ObjPrototypeEffectsOnPlayer;
}>;

export type ObjPrototypeDefault = GetStructType<{
  Animation: string;
  StartDistance: number;
}>;

export type ObjPrototypeDisableMovementWeightThreshold = GetStructType<
  ObjPrototypeDisableMovementWeightThresholdItem[]
>;

export type ObjPrototypeDisableMovementWeightThresholdItem = GetStructType<{
  BlockingMovement: ObjPrototypeBlockingMovement;
  WeightStatus: EWeightStatus;
}>;

export type ObjPrototypeDistanceConditions = GetStructType<{
  StartAttackMaxDistance: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeDoorTransitionSettings = GetStructType<{
  Default: ObjPrototypeDefault;
}>;

export type ObjPrototypeDualCurveEffects = GetStructType<
  ObjPrototypeDualCurveEffectsItem[]
>;

export type ObjPrototypeDualCurveEffectsItem = GetStructType<{
  DepthCurveMovingDeeper: string;
  DepthCurveMovingShallower: string;
  EffectSID: string;
}>;

export type ObjPrototypeEffectsItem = GetStructType<{
  Chance: number;
  EffectPrototypeSID: string;
}>;

export type ObjPrototypeEffectsOnPlayer = GetStructType<
  ObjPrototypeEffectsItem[]
>;

export type ObjPrototypeEnemyValidationActionParams = GetStructType<{
  GenerateValidationLocations: boolean;
  GroupSpreadingMinDistance: number;
  MinAdditionalValidationPoints: number;
  MinDistanceToValidationPoint: number;
  MinValidationTimeAtLocation: number;
  PointsSpreadDistance: number;
  PossibleContextualActions: NPCPrototypeSkills;
  WaitForContextualAction: boolean;
}>;

export type ObjPrototypeEscapeIsolatedNavmeshActionData = GetStructType<{
  AbilityActivationTag: string;
  bEnabled: boolean;
  JumpDistance: number;
}>;

export type ObjPrototypeEscapeParameters = GetStructType<{
  AttackEscapeDelay: number;
  EscapeRadius: number;
  FailureChance: string;
  InterruptEscapeAfterEnemyLostDelay: number;
  InterruptEscapeDelay: number;
  SquadLostFractionToEscape: string;
}>;

export type ObjPrototypeEvadeParameters = GetStructType<{
  AnimationData: ObjPrototypeAnimationData;
  MovementVFX: string;
}>;

export type ObjPrototypeExampleAttack = GetStructType<{
  ArmorPiercing: number;
  AttackRootMotionTravelDistance: number;
  Bleeding: number;
  BleedingChanceIncrement: number;
  Damage: number;
  DamageSource: EDamageSource;
  Effects: CoreVariableHead;
  MaxAttackAngle: number;
  MinAttackDistance: number;
  MutantAttackType: EMutantAttackType;
}>;

export type ObjPrototypeExplorationRadius = GetStructType<{
  Max: number;
  Min: number;
}>;

export type ObjPrototypeFatiguePerAction = GetStructType<{
  Climb: number;
  Crouch: number;
  Jump: number;
  Run: number;
  Sprint: number;
  Walk: number;
}>;

export type ObjPrototypeFinishAmbushTime = GetStructType<{
  MaxTime: number;
  MinTime: number;
}>;

export type ObjPrototypeFireDispersionParams = GetStructType<{
  CrouchMoveCoef: number;
  Default: number;
  DefaultAim: number;
  Jump: number;
  LowCrouchCoef: number;
  VelocityFactor: number;
}>;

export type ObjPrototypeFlairParams = GetStructType<{
  IsActive: boolean;
  SensingRadius: number;
}>;

export type ObjPrototypeFlankParameters = GetStructType<{
  ActivationDelaySeconds: number;
  CostScale: number;
  DamageDetectionSeconds: number;
  ExtraSlotChance: string;
  ExtraSlotTime: number;
  FrontZone: ObjPrototypeFrontZone;
  Height: number;
  MaxAccumulatedDamage: number;
  MaxPathLength: number;
  MinPathLength: number;
  ScaleFactor: number;
  SprintDistance: number;
  WalkDistance: number;
}>;

export type ObjPrototypeFlankThreatActionData = GetStructType<{
  FlankMaxAngle: number;
  FlankMaxRadius: number;
  FlankMinAngle: number;
  FlankMinRadius: number;
}>;

export type ObjPrototypeFlyThroughData = GetStructType<{
  AbilityTag: string;
  AttackSyncTag: string;
  Enabled: boolean;
  JumpMoveMontage: string;
  MaxJumpHeight: number;
  MinJumpHeight: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeFriendlyTracePoints = GetStructType<
  ObjPrototypeFriendlyTracePointsItem[]
>;

export type ObjPrototypeFriendlyTracePointsItem = GetStructType<{
  BaseScorePerSecond: number;
  BoneName: string;
  Label: string;
}>;

export type ObjPrototypeFrontZone = GetStructType<AbilityPrototypeRadius[]>;

export type ObjPrototypeHideWeaponWarning = GetStructType<{
  BarkDelay: number;
  CalmDownTime: number;
  DetectionDistance: number;
  FollowDistance: number;
  IgnoreAfterCombatTime: number;
  RequiredCombatAction: EThreatActionType;
  RequiredThreatAction: EThreatActionType;
  WarningAttemptsBeforeAlert: number;
}>;

export type ObjPrototypeHumanAmbushParameters = GetStructType<{
  EntryDelay: string;
}>;

export type ObjPrototypeHumanInteractionParameters = GetStructType<{
  HealingWoundedDistance: number;
}>;

export type ObjPrototypeHumanLookAtParameters = GetStructType<{
  LookAtCooldown: number;
  LookAtDistance: number;
  MaxlookAtTime: number;
  MinlookAtTime: number;
  PerformGreetingBark: boolean;
}>;

export type ObjPrototypeInstanceDamageData = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  AttackEffects: AssetLibraryUIIcons;
  Bleeding: number;
  BleedingChanceIncrement: number;
  bShouldIgnoreArmor: boolean;
  Damage: number;
  DamageSource: EDamageSource;
  DamageType: EDamageType;
  NPCDamageMultiplier: number;
}>;

export type ObjPrototypeInteractionData = GetStructType<
  ObjPrototypeInteractionDataItem[]
>;

export type ObjPrototypeInteractionDataItem = GetStructType<{
  AllowedCorpses: ObjPrototypeCapsuleNames;
  ApproachLocationOffset: number;
  ContextualAction: string;
}>;

export type ObjPrototypeInvisibilityEffects = GetStructType<
  ObjPrototypeEffectsItem[]
>;

export type ObjPrototypeInvisibilityFeatureData = GetStructType<{
  EnterInvisibilityAbility: string;
  InvisibilityDeadChangeDurationSeconds: number;
  InvisibilityEffects: ObjPrototypeInvisibilityEffects;
  InvisibilityEffectsThreshold: number;
  InvisibilityLossFromDamage: number;
  ToInvisibleSeconds: number;
  ToVisibleSeconds: number;
}>;

export type ObjPrototypeJumpActionData = GetStructType<{
  JumpDistance: number;
  MinDistanceToTarget: number;
  MinJumpDistance: number;
  ReducedPathCoefToJump: number;
}>;

export type ObjPrototypeJumpAttack = GetStructType<{
  ArmorPiercing: number;
  AttackRootMotionTravelDistance: number;
  Bleeding: number;
  BleedingChanceIncrement: number;
  Cooldown: number;
  Damage: number;
  DamageSource: EDamageSource;
  Effects: CoreVariableHead;
  MaxAttackAngle: number;
  MinAttackDistance: number;
  MutantAttackType: EMutantAttackType;
}>;

export type ObjPrototypeJumpAttackData = GetStructType<{
  AbilityTag: string;
  AttackSyncTag: string;
  Enabled: boolean;
  JumpOffset: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeJumpToEnemyActionData = GetStructType<{
  AbilityActivationTag: string;
  AngleRandomization: number;
  bEnabled: boolean;
  bInRadiusOnly: boolean;
  JumpDistance: number;
  MinDist: number;
  PredictionTime: number;
  RandomRadius: number;
  ReducedPathCoefToJump: number;
}>;

export type ObjPrototypeKickAttackData = GetStructType<{
  AbilityTag: string;
  AttackSyncTag: string;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeLongJumpAttackData = GetStructType<{
  AbilityTag: string;
  AttackSyncTag: string;
  Enabled: boolean;
  JumpOffset: number;
  JumpPredictionSeconds: number;
  MaxWarpingAngle: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeMeleeAttackData = GetStructType<{
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeMovementParams = GetStructType<{
  AimLookUpCoef: number;
  AimSpeedCoef: number;
  AimTurnCoef: number;
  AirControlCoef: number;
  BaseLookUpRate: number;
  BaseTurnRate: number;
  CanDash: boolean;
  ClimbSpeedCoef: number;
  CrouchSpeed: number;
  FatiguePerAction: ObjPrototypeFatiguePerAction;
  JoggingSpeed: number;
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

export type ObjPrototypeMoveToEnemyActionData = GetStructType<{
  BackStabSyncTag: string;
  BecomeVisibleDistance: number;
  Cooldown_MaxAttacksFinished: number;
  Cooldown_MaxDuration: number;
  Cooldown_TargetReached: number;
  EndPathAcceprableDistance: number;
  EndPathAcceptableDistance: number;
  MaxActionDuration: number;
  MaxAttacksFinished: number;
  MaxOutOfNavmeshDistance: number;
  MaxPotentialJumpHeight: number;
  MovementType: EMovementBehaviour;
  MoveToEnemySyncTag: string;
  PathBuilderVelocities: ObjPrototypePathBuilderVelocities;
  PotentialHitPointMaxHeightDiff: number;
}>;

export type ObjPrototypeMutantAmbushParameters = GetStructType<{
  AdditionalVisibilityTraceBones: CoreVariableHead;
  AttackAttemptsBeforeAmbush: number;
  bCheckTraceForFinishAction: boolean;
  bEnabled: boolean;
  bSpawnLockOnInitialize: boolean;
  DangerAreaLifetime: number;
  DangerAreaRadius: number;
  FinishRadius: number;
  LockLocationDefaultRadius: number;
  RemoveLockDistance: number;
}>;

export type ObjPrototypeMutantAttackParams = GetStructType<{
  ExampleAttack: ObjPrototypeExampleAttack;
  JumpAttack: ObjPrototypeJumpAttack;
}>;

export type ObjPrototypeMutantCoverSelectorFeatureData = GetStructType<{
  bReturnAnyCoverIfNoValidFound: boolean;
  CosThresholdForCovers: number;
  EffectiveDistanceToEnemy: number;
  ExplorationRadius: ObjPrototypeExplorationRadius;
  IgnoreCoversNearLastCoverDist: number;
  MinDistanceToEnemy: number;
  MinimalCoverSize: number;
  MinResampleDelay: number;
  ReceivedDamageToResample: number;
  ReceivedDamageToResampleTime: number;
  ResampleCooldown: number;
  SafeDistanceToEnemy: number;
  SafeDistanceToExplosives: number;
}>;

export type ObjPrototypeMutantEscapeParameters = GetStructType<{
  AttackEscapeDelay: number;
  AttackRadius: number;
  EscapeRadius: number;
  FailureChance: string;
  InterruptEscapeAfterEnemyLostDelay: number;
  InterruptEscapeDelay: number;
  SquadLostFractionToEscape: string;
}>;

export type ObjPrototypePathBuilderVelocities = GetStructType<
  ObjPrototypePathBuilderVelocitiesItem[]
>;

export type ObjPrototypePathBuilderVelocitiesItem = GetStructType<{
  AngularVelocity: number;
  LinearVelocity: number;
}>;

export type ObjPrototypePeacefulChatterFeatureData = GetStructType<{
  EndChatterRadius: number;
  StartChatterRadius: number;
}>;

export type ObjPrototypePerBoneIgnoreDispersionModifiers = GetStructType<
  ObjPrototypePerBoneIgnoreDispersionModifiersItem[]
>;

export type ObjPrototypePerBoneIgnoreDispersionModifiersItem = GetStructType<{
  BoneLabel: string;
  Max: number;
  Min: number;
}>;

export type ObjPrototypePrepareForAttackActionData = GetStructType<{
  AngleShiftOnRebuild: number;
  CircularPathFinishedAcceptableDistance: number;
  DistanceDifferenceToRebuild: number;
  ExpensiveCircleRadiusCoef: number;
  MaxCircleRadius: number;
  MaxCircleRadiusChangeTime: number;
  MaxDistanceToLocationAfterCircular: number;
  MinCircleRadius: number;
  MinCircleRadiusChangeTime: number;
  MinDistanceToLocationAfterCircular: number;
  MovementType: EMovementBehaviour;
  MoveToLocationFinishedAcceptableDistance: number;
  OwnerRotationCoef: number;
  RadiusRandomizationStep: number;
  TargetBackCoef: number;
}>;

export type ObjPrototypeProcessCorpseObjectFeatureData = GetStructType<{
  CorpseInteractionBoneName: string;
  CorpseInteractionDistance: number;
}>;

export type ObjPrototypeProcessCorpseSubjectFeatureData = GetStructType<{
  CorpseInteractionApproachMaxPathLength: number;
  CorpseInteractionTimeout: number;
  InteractionData: ObjPrototypeInteractionData;
}>;

export type ObjPrototypeProtection = GetStructType<{
  Burn: number;
  ChemicalBurn: number;
  Explosion: number;
  Fall: number;
  None: number;
  PSY: number;
  Radiation: number;
  Shock: number;
  Shot: number;
  Strike: number;
}>;

export type ObjPrototypeRetreatActionData = GetStructType<{
  AbilityTagToTrigger: string;
  DamageAccumulatedToRetreat: number;
  DamageAccumulationDurationSeconds: number;
  EndPathAcceptableDistance: number;
  HealthPercentToRetreat: number;
  MinRetreatActivationRadius: number;
  MovementType: EMovementBehaviour;
  OwnerSummoned_KillOnRetreatEnd: boolean;
  RetreatCooldown: number;
  RetreatRadius: number;
}>;

export type ObjPrototypeRoarActionData = GetStructType<{
  AbilityActionTag: string;
  bEnaable: boolean;
  Enabled: boolean;
  HPTriggerThreshold: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
  SyncTag: string;
}>;

export type ObjPrototypeRunAttackData = GetStructType<{
  AttackSyncTag: string;
  HitOffset: number;
  LeftAttackAbiltiyTag: string;
  MaxWarpingAngle: number;
  OrderActionMaxAngle: number;
  OrderActionMinAngle: number;
  RightAttackAbiltiyTag: string;
  RunAttackDistance: number;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
}>;

export type ObjPrototypeSequentialAbilitiesActionData = GetStructType<{
  bOrientsToTarget: boolean;
}>;

export type ObjPrototypeShieldActionData = GetStructType<{
  AbilityTag: string;
  Enabled: boolean;
  MaxAngleToEnemy: number;
  MaxDistance: number;
  MinDistance: number;
  SyncTag: string;
}>;

export type ObjPrototypeShieldFeatureData = GetStructType<{
  AbilityActivationTag: string;
  DamageAccumulationThreshold: number;
  DamageAccumulationTime: number;
}>;

export type ObjPrototypeSideJumpActionData = GetStructType<{
  Cooldown: number;
  DamageAccumulatedToActivate: number;
  JumpMoveMontages: CoreVariableHead;
  StartAttackMaxAngle: number;
  StartAttackMaxAngleToEnemyDirection: number;
  StartAttackMaxDistance: number;
  StartAttackMinAngle: number;
  StartAttackMinAngleToEnemyDirection: number;
  StartAttackMinDistance: number;
  TimeSinceLastAbilityEndedTimestampToActivateCooldown: number;
}>;

export type ObjPrototypeSimulateBattleParams = GetStructType<{
  SimulateCombatDamageModifier: number;
  SimulateCombatSpreadModifier: number;
}>;

export type ObjPrototypeSingleCurveEffects = GetStructType<
  ObjPrototypeSingleCurveEffectsItem[]
>;

export type ObjPrototypeSingleCurveEffectsItem = GetStructType<{
  DepthCurve: string;
  EffectSID: string;
}>;

export type ObjPrototypeSkeletalMeshTraceBoneMap = GetStructType<
  ObjPrototypeSkeletalMeshTraceBoneMapItem[]
>;

export type ObjPrototypeSkeletalMeshTraceBoneMapItem = GetStructType<{
  Bone: EObjSkeletalMeshTraceBone;
  BoneName: string;
}>;

export type ObjPrototypeSpawnPhantomParams = GetStructType<{
  DelayBeforeMovement: number;
  DistanceConditions: ObjPrototypeDistanceConditions;
  EffectsOnOverlap: CoreVariableHead;
  PermanentEffects: SingletonConstantZombie;
  PhantomAttackAbilityTag: string;
  PhantomBlueprint: string;
}>;

export type ObjPrototypeStaminaDisableThresholds = GetStructType<
  ObjPrototypeStaminaDisableThresholdsItem[]
>;

export type ObjPrototypeStaminaDisableThresholdsItem = GetStructType<{
  RegenerationDelay: number;
  StateTags: ObjPrototypeStateTags;
  Threshold: number;
}>;

export type ObjPrototypeStaminaPerAction = GetStructType<{
  Climb: number;
  Crouch: number;
  Jogging: number;
  Jump: number;
  LowCrouch: number;
  MeleeButstock: number;
  MeleeNormal: number;
  MeleeStrong: number;
  Run: number;
  Sprint: number;
  Vault: number;
  Walk: number;
}>;

export type ObjPrototypeStaminaPerActionLightOverweight = GetStructType<{
  Climb: number;
  Crouch: number;
  Jump: number;
  LowCrouch: number;
  MeleeButstock: number;
  MeleeNormal: number;
  MeleeStrong: number;
  Run: number;
  Sprint: number;
  Vault: number;
  Walk: number;
}>;

export type ObjPrototypeStateTags = GetStructType<EStateTag[]>;

export type ObjPrototypeStealthKillParams = GetStructType<{
  AvailabilityDelayTimeSeconds: string;
  BodyTraceOffset: number;
  BodyTraceRadius: number;
  HeadTraceRadius: number;
  MaxAngleFromBack: number;
  ShouldHaveEnoughSpace: boolean;
  SnapBackOffsetSitting: number;
  SnapBackOffsetSittingOnGround: number;
  SnapBackOffsetStanding: number;
  SnapDownOffsetSitting: number;
  SnapDownOffsetSittingOnGround: number;
  SnapDownOffsetStanding: number;
  SpaceTraceHeightModifier: number;
  SpaceTraceOffsetModifier: number;
  SpaceTraceRadiusModifier: number;
  StealthKillDistance: number;
  TargetPositionMaxOffsetAbove: number;
  TargetPositionMaxOffsetBelow: number;
}>;

export type ObjPrototypeStealthParams = GetStructType<{
  FlashLightCoef: number;
  NoiseCrouchCoef: number;
  NoiseJumpCoef: number;
  NoiseObstacleCoef: number;
  VisibilityCrouchCoef: number;
  VisibilityJumpCoef: number;
  VisibilityObstacleBodyCoef: number;
  VisibilityObstacleHeadCoef: number;
  VisibilitySizeFactor: number;
}>;

export type ObjPrototypeSuppressiveFireParameters = GetStructType<{
  LookAtBoneName: string;
  MaxAccumulatedDamage: number;
  MaxTimeToLoseTarget: number;
  NeedVisualConfirmation: boolean;
  TraceDistance: number;
}>;

export type ObjPrototypeSyncParameters = GetStructType<{
  AdvanceSyncTag: string;
  AttackSyncTag: string;
  EvadeSyncTag: string;
  FlankSyncTag: string;
  MovementSyncTag: string;
  SuppressiveFireSyncTag: string;
}>;

export type ObjPrototypeThrowActionData = GetStructType<{
  AbilityTag: string;
  Enabled: boolean;
  MaxAngleToEnemy: number;
  MaxDistance: number;
  MinDistance: number;
}>;

export type ObjPrototypeTracePoints = GetStructType<
  ObjPrototypeTracePointsItem[]
>;

export type ObjPrototypeTracePointsItem = GetStructType<{
  BaseScorePerSecond: number;
  BoneName: string;
  Label: string;
  RelativeLocation: AIGlobalRelativeLocation;
}>;

export type ObjPrototypeVaultingParams = GetStructType<{
  AboveObstaclesCheckHeight: number;
  DepthTraceRadiusModifier: number;
  FrontSearchRadiusModifier: number;
  HeightBetweenObjects: number;
  IsAllowed: boolean;
  LandingCorrectionAdditionalSize: number;
  LandingMaxSlope: number;
  LandingMinHeight: number;
  MaxAngle: number;
  MaxLandingDetectionIterations: number;
  MaxLandingOffset: number;
  MaxObstacleHeight: number;
  MaxTestDistance: number;
  MaxWindowDetectionIterations: number;
  MinForwardAxisInputValue: number;
  MinObstacleHeight: number;
  StartDistance: number;
  StartWithSprintPressed: boolean;
  VaultOverCrouchingHeight: number;
  VaultOverLandOffset: number;
  VaultOverMaxDepth: number;
  VaultOverStandingHeight: number;
  WidthBetweenObjects: number;
  WindowBackTraceHeightModifier: number;
  WindowBackTraceRadiusModifier: number;
}>;

export type ObjPrototypeVitalParams = GetStructType<{
  DegenBleeding: number;
  DegenDrunknessPoints: number;
  DegenPsyPoints: number;
  DegenRadiation: number;
  DegenSuppressionDelayTimeSeconds: number;
  DegenSuppressionPoints: number;
  MaxBleeding: number;
  MaxConcussionPoints: number;
  MaxDrunknessPoints: number;
  MaxFP: number;
  MaxHP: number;
  MaxHungerPoints: number;
  MaxOverDrunknessPoints: number;
  MaxRadiation: number;
  MaxSleepinessPoints: number;
  MaxSP: number;
  MaxSuppressionPoints: number;
  MaxThirstPoints: number;
  RegenFP: number;
  RegenHealthModifier: number;
  RegenHP: number;
  RegenHPDelayTimeSeconds: number;
  RegenHungerPoints: number;
  RegenPoppyFieldSleepiness: number;
  RegenSleepinessPoints: string;
  RegenSP: number;
  RegenThirstPoints: number;
  StaminaDisableThresholds: ObjPrototypeStaminaDisableThresholds;
}>;

export type ObjPrototypeWaterContactInfo = GetStructType<{
  DualCurveEffects: ObjPrototypeDualCurveEffects;
  ShallowSoundSwitch: string;
  SingleCurveEffects: ObjPrototypeSingleCurveEffects;
  StepVFXMaxBodyWaterImmersionDepth: number;
  WaterDepthRTPC: string;
  WaterImmersionLevels: ObjPrototypeWaterImmersionLevels;
}>;

export type ObjPrototypeWaterImmersionLevels = GetStructType<
  ObjPrototypeWaterImmersionLevelsItem[]
>;

export type ObjPrototypeWaterImmersionLevelsItem = GetStructType<{
  Effects: CoreVariableHead;
  LevelSoundSwitch: string;
  MinDepthThreshold: number;
  WaterLevel: EWaterImmersionLevel;
}>;

export type ObjPrototypeWeaponHandling = GetStructType<{
  FarFireQueueDelaySeconds: number;
  FireQueueDelayRandomizationFactor: number;
  MaxFireCountQueueScaler: number;
  MinFireCountQueueScaler: number;
  NearFireQueueDelaySeconds: number;
  PerBoneIgnoreDispersionModifiers: ObjPrototypePerBoneIgnoreDispersionModifiers;
  SwitchWeaponIfNoAmmo: boolean;
}>;

export type ObjPrototypeWeaponHandlingOverride = GetStructType<{
  FarFireQueueDelaySeconds: number;
  MaxFireCountQueueScaler: number;
  MinFireCountQueueScaler: number;
  NearFireQueueDelaySeconds: number;
  SwitchWeaponIfNoAmmo: boolean;
}>;

export type ObjPrototypeZombieAllowedEquipItems = GetStructType<{
  GunAK74_ST: ERank;
  GunAKU_PP: ERank;
  GunBucket_PP: ERank;
  GunD12_SG: ERank;
  GunDnipro_ST: ERank;
  GunFora_ST: ERank;
  GunG37_ST: ERank;
  GunGrim_ST: ERank;
  GunGvintar_ST: ERank;
  GunIntegral_PP: ERank;
  GunKharod_ST: ERank;
  GunKora_HG: ERank;
  GunLavina_ST: ERank;
  GunM16_ST: ERank;
  GunObrez_SG: ERank;
  GunRam2_SG: ERank;
  GunSPSA_SG: ERank;
  GunThreeLine_SP: ERank;
  GunTOZ_SG: ERank;
  GunViper_PP: ERank;
  GunZubr_PP: ERank;
}>;

export type ObjPrototypeZombieBehaviourParameters = GetStructType<{
  CombatBehaviour: ObjPrototypeCombatBehaviour;
  WeaponHandlingOverride: ObjPrototypeWeaponHandlingOverride;
  ZombieAllowedEquipItems: ObjPrototypeZombieAllowedEquipItems;
}>;

export type ObjSleepParamsPrototype = GetStructType<{
  AllowSleepThreshold: number;
  bAllowEmissionSleep: boolean;
  CantSleepEffectSIDs: CoreVariableLegs;
  MinSleepHours: number;
  PostSleepEffectSIDs: SingletonConstantZombie;
  PostSleepMultiplierEffectSIDs: NPCPrototypeSkills;
  SID: string;
  SleepEffectSIDs: CoreVariableTorso;
  SleepHoursMultiplier: number;
}>;

export type ObjWeatherParamsPrototype = GetStructType<{
  SID: string;
  WeatherAppliedEffectSIDs: ObjWeatherParamsPrototypeWeatherAppliedEffectSIDs;
}>;

export type ObjWeatherParamsPrototypeWeatherAppliedEffectSIDs = GetStructType<{
  LightRainy: NPCPrototypeSkills;
  Rainy: NPCPrototypeSkills;
  Thundery: NPCPrototypeSkills;
}>;

export type ObjWeightParamsPrototype = GetStructType<{
  InventoryPenaltyLessWeight: number;
  MaxInventoryMass: number;
  SID: string;
  WeightEffectParams: ObjWeightParamsPrototypeWeightEffectParams;
}>;

export type ObjWeightParamsPrototypeWeightEffectParams = GetStructType<
  ObjWeightParamsPrototypeWeightEffectParamsItem[]
>;

export type ObjWeightParamsPrototypeWeightEffectParamsItem = GetStructType<{
  EffectPrototypeSIDs: SingletonConstantZombie;
  Threshold: number;
}>;

export type OffsetAimingBoolProviderPrototype = GetStructType<{
  ProviderSID: string;
  ProviderSIDs: CoreVariableHead;
  SID: string;
  Type: EBoolProviderType;
}>;

export type PackOfItemsGroupPrototype = GetStructType<{
  ID: number;
  PackOfItemsSettings: PackOfItemsGroupPrototypePackOfItemsSettings;
  SID: string;
}>;

export type PackOfItemsGroupPrototypeItems = GetStructType<
  PackOfItemsGroupPrototypeItemsItem[]
>;

export type PackOfItemsGroupPrototypeItemsItem = GetStructType<{
  ItemPrototypeSID: string;
  MinDurability: number;
  Weight: number;
}>;

export type PackOfItemsGroupPrototypePackOfItemsSettings = GetStructType<
  PackOfItemsGroupPrototypePackOfItemsSettingsItem[]
>;

export type PackOfItemsGroupPrototypePackOfItemsSettingsItem = GetStructType<{
  Items: PackOfItemsGroupPrototypeItems;
  MaxDurability: number;
  MinDurability: number;
  PlayerRank: ERank;
}>;

export type PassiveDetectorPrototype = GetStructType<{
  DangerLevelSoundParameter: string;
  DetectorRadius: string;
  DetectorWorkCurve: string;
  DetectorWorkSFX: string;
  ExclusionAnomalyList: UpdatePopupPrototypeContentData;
  ID: number;
  SID: string;
  SignalCurve: string;
  Type: EPassiveDetectorType;
}>;

export type PDATutorialPrototype = GetStructType<{
  ExclusiveGamepadType: string;
  Id: number;
  Images: PDATutorialPrototypeImages;
  InputMappings: PDATutorialPrototypeInputMappings;
  ItemSIDs: CoreVariableTorso;
  MasterDifficultyEquivalentSid: string;
  RelevantPDANoteTutorial: string;
  SID: string;
  TextSid: string;
  TutorialCategory: EPDATutorialCategory;
  TutorialDetailsSID: string;
  TutorialNameSID: string;
  VisibleDifficulties: PDATutorialPrototypeVisibleDifficulties;
}>;

export type PDATutorialPrototypeImages = StringArray;

export type PDATutorialPrototypeInputMappings = GetStructType<
  PDATutorialPrototypeInputMappingsItem[]
>;

export type PDATutorialPrototypeInputMappingsItem = GetStructType<{
  GamepadInputAction: string;
  InputAction: string;
  InputMappingContext: EMappingContext;
  PCInputMappingNames: CoreVariableLegs;
  ShouldAnimate: boolean;
}>;

export type PDATutorialPrototypeVisibleDifficulties = GetStructType<
  EGameDifficulty[]
>;

export type PhysicsInteractionPrototype = GetStructType<{
  ApplyImpulseToHitLocationFromPlayer: boolean;
  DamageToVelocityMultiplier: number;
  DraggingParameterSwitch: string;
  HitDamageThreshold: number;
  HitParameterSwitch: string;
  HitVelocityThreshold: number;
  MaxDraggingRollingVelocityThreshold: number;
  MaxDraggingVelocityVolume: number;
  MaxHitVelocityVolume: number;
  MaxRollingVelocityVolume: number;
  MaxSoundDistance: number;
  MaxTimeout: number;
  MinDraggingRollingVelocityThreshold: number;
  MinDraggingVelocityVolume: number;
  MinHitVelocityVolume: number;
  MinRollingVelocityVolume: number;
  MinTimeout: number;
  PhysicalObjectAudioEventPlay: string;
  PhysicalObjectAudioEventStop: string;
  PhysicalObjectContinuousSpeedRTPC: string;
  PhysicalObjectInstantSpeedRTPC: string;
  PlayerPushImpulse: number;
  RollingParameterSwitch: string;
  SID: string;
  WaterAngularDampingModifier: number;
  WaterContactAudioEvent: string;
  WaterContactNiagaraSystemVFX: string;
  WaterDepthRTPC: string;
  WaterImpulseReduction: number;
  WaterLinearDampingModifier: number;
  WaterParticleSpeedThreshold: number;
}>;

export type PlayerMeshGeneratorPrototype = GetStructType<{
  Attachments: PlayerMeshGeneratorPrototypeAttachments;
  SID: string;
}>;

export type PlayerMeshGeneratorPrototypeAttaches = GetStructType<
  PlayerMeshGeneratorPrototypeAttachesItem[]
>;

export type PlayerMeshGeneratorPrototypeAttachesItem = GetStructType<{
  BodyMeshSID: string;
  Weight: number;
}>;

export type PlayerMeshGeneratorPrototypeAttachments = GetStructType<{
  BodyArmor: PlayerMeshGeneratorPrototypeBodyArmor;
}>;

export type PlayerMeshGeneratorPrototypeBodyArmor = GetStructType<{
  Attaches: PlayerMeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type PlayerWeaponAttributesPrototype = GetStructType<{
  AnimBlueprint: string;
  DefaultWeaponSettingsSID: string;
  DisplayBP: string;
  ParticlesBasedOnHeating: PlayerWeaponAttributesPrototypeParticlesBasedOnHeating;
  ShellShutterSocketName: string;
  SID: string;
}>;

export type PlayerWeaponAttributesPrototypeParticlesBasedOnHeating =
  GetStructType<PlayerWeaponAttributesPrototypeParticlesBasedOnHeatingItem[]>;

export type PlayerWeaponAttributesPrototypeParticlesBasedOnHeatingItem =
  GetStructType<{
    PostShooting: AttachPrototypeShooting;
    Shooting: AttachPrototypeShooting;
    VFXGroupName: string;
  }>;

export type PlayerWeaponSettingsPrototype = GetStructType<{
  Accuracy: number;
  AccuracyUI: number;
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseComfort: number;
  BaseDamage: number;
  BulletDropHeight: number;
  BulletDropLength: number;
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

export type PostEffectFloatProviderPrototype = GetStructType<{
  PostProcessParamSID: string;
  SID: string;
  Type: EFloatProviderType;
}>;

export type PostEffectProcessorPrototype = GetStructType<{
  bAddIntensity: boolean;
  bInverted: boolean;
  DuplicateResolveType: EDuplicateResolveType;
  Intensity: number;
  IntensityProviderSID: string;
  LerpInDuration: number;
  LerpOutDuration: number;
  NegativeInterpSpeed: number;
  ParamSID: string;
  PeakDuration: number;
  PositiveInterpSpeed: number;
  ProviderSIDs: CoreVariableHead;
  SID: string;
  SpeedProviderSID: string;
  Type: EPostEffectProcessorType;
}>;

export type PostProcessMaterialPrototype = GetStructType<{
  HDRMaterialPath: string;
  MaterialPath: string;
  Priority: number;
  SID: string;
}>;

export type PostProcessParamPrototype = GetStructType<{
  MaterialSID: string;
  ParameterName: string;
  SID: string;
}>;

export type ProjectilePrototype = GetStructType<{
  BlueprintFP: string;
  BlueprintTP: string;
  bUseImpactReflectionMethod: boolean;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  FlybyDotProductThreshold: number;
  FlybySound: string;
  ImpactBloodDecalMinSize: number;
  ImpactBloodDecals: SingletonConstantZombie;
  ImpactBloodDecalSize: AIGlobalRelativeLocation;
  ImpactEffectsMinDistance: number;
  ImpactPhysicalMaterialPrototypeSID: string;
  ImpactSound: string;
  MaxFlybyDistance: number;
  MaxFlyDistance: number;
  MaxSuppressionDistance: number;
  MinExplodeDistance: number;
  PenetrationSpawnChance: number;
  PenetrationTraceLenght: number;
  SID: string;
  Speed: number;
  SuppressionCenterBone: string;
  SuppressionEffectSIDs: NPCPrototypeSkills;
  SuppressionMinSpeed: number;
  TimeOfVisibilityEnabling: number;
}>;

export type PsyMeshGeneratorPrototype = GetStructType<{
  Attachments: PsyMeshGeneratorPrototypeAttachments;
  SID: string;
}>;

export type PsyMeshGeneratorPrototypeAttaches = GetStructType<
  PsyMeshGeneratorPrototypeAttachesItem[]
>;

export type PsyMeshGeneratorPrototypeAttachesItem = GetStructType<{
  BlockingSlots: SingletonConstantZombie;
  BodyMeshSID: string;
  Weight: number;
}>;

export type PsyMeshGeneratorPrototypeAttachments = GetStructType<
  PsyMeshGeneratorPrototypeCap[]
>;

export type PsyMeshGeneratorPrototypeCap = GetStructType<{
  Attaches: PsyMeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type QuestAnomalyPrototype = GetStructType<{
  AngularDamping: number;
  AnomalyElementType: EAnomalyElementType;
  CollisionHeight: number;
  DefaultHeightOffset: number;
  ExplosionActiveTime: number;
  ID: number;
  LiftForce: number;
  LinearDamping: number;
  ObjectMaxSize: number;
  PushForce: number;
  Radius: number;
  SID: string;
  Type: EAnomalyType;
  VelocityThreshold: number;
}>;

export type QuestArtifactPrototype = GetStructType<
  string[] & {
    AnomalyElementType: EAnomalyElementType;
    ArtifactType: EArtifactType;
    DetectorRequired: boolean;
    EffectPrototypeSIDs: NPCPrototypeSkills;
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
  }
>;

export type QuestArtifactSpawnerPrototype = GetStructType<{
  Experienced: QuestArtifactSpawnerPrototypeMaster;
  ID: number;
  ListOfArtifacts: NPCPrototypeSkills;
  Master: QuestArtifactSpawnerPrototypeMaster;
  Newbie: QuestArtifactSpawnerPrototypeMaster;
  SID: string;
  UseListOfArtifacts: boolean;
  Veteran: QuestArtifactSpawnerPrototypeMaster;
}>;

export type QuestArtifactSpawnerPrototypeMaster = GetStructType<{
  Count: number;
  MaxCooldown: number;
  MinCooldown: number;
  Radius: number;
  RarityChance: ArtifactSpawnerPrototypeRarityChance;
  SpawnChanceBase: number;
  SpawnChanceBonus: number;
}>;

export type QuestItemGeneratorPrototype = GetStructType<{
  ID: number;
  ItemGenerator: QuestItemGeneratorPrototypeItemGenerator;
  RefreshTime: string;
  SID: string;
}>;

export type QuestItemGeneratorPrototypeHead = GetStructType<{
  bAllowSameCategoryGeneration: boolean;
  Category: EItemGenerationCategory;
  PlayerRank: ERank;
  PossibleItems: QuestItemGeneratorPrototypePossibleItems;
}>;

export type QuestItemGeneratorPrototypeItemGenerator = GetStructType<
  QuestItemGeneratorPrototypeHead[]
>;

export type QuestItemGeneratorPrototypePossibleItems = GetStructType<
  QuestItemGeneratorPrototypePossibleItemsItem[]
>;

export type QuestItemGeneratorPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxcount: number;
  AmmoMaxCount: number;
  AmmoMinCount: number;
  bRequireWeapon: string;
  Chance: number;
  ItemGeneratorPrototypeSID: string;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Upgrades: QuestItemGeneratorPrototypeUpgrades;
  Weight: number;
}>;

export type QuestItemGeneratorPrototypeUpgrades = GetStructType<{
  Chance: number;
  MinCount: number;
  PossibleItems: string;
}>;

export type QuestItemPrototype = GetStructType<{
  AlternativeEffectPrototypeSIDs: CoreVariableLegs;
  AnomalyElementType: EAnomalyElementType;
  ArchiartifactType: EArchiartifactType;
  ArtifactType: EArtifactType;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  Cost: number;
  DetectorRequired: boolean;
  EffectPrototypeSIDs: CoreVariableLegs;
  EffectsDisplayTypes: QuestItemPrototypeEffectsDisplayTypes;
  Icon: string;
  Icon1x1: string;
  Invisible: boolean;
  InvisibleInPlayerInventory: boolean;
  IsQuestItem: boolean;
  IsQuestItemPrototype: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
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
  MaxStackCount: number;
  MeshInWorldPrototypeSID: string;
  MeshPath: string;
  MeshPrototypeSID: string;
  Name: string;
  PlayerDistance: number;
  Rarity: EArtifactRarity;
  RequireWeight: boolean;
  ReturnDistanceValue: number;
  ShouldShowEffects: QuestItemPrototypeShouldShowEffects;
  ShouldTriggerAnomalies: boolean;
  SID: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StaticMeshPrototypeSID: string;
  Strafe: boolean;
  Type: EItemType;
  Weight: number;
}>;

export type QuestItemPrototypeEffectsDisplayTypes = GetStructType<
  EEffectDisplayType[]
>;

export type QuestItemPrototypeShouldShowEffects = GetStructType<boolean[]>;

export type QuestMeshGeneratorPrototype = GetStructType<{
  Attachments: QuestMeshGeneratorPrototypeAttachments;
  CustomData: QuestMeshGeneratorPrototypeCustomData;
  Groom: QuestMeshGeneratorPrototypeGroom;
  Materials: QuestMeshGeneratorPrototypeMaterials;
  MergedMesh: string;
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type QuestMeshGeneratorPrototypeAttaches = GetStructType<
  QuestMeshGeneratorPrototypeAttachesItem[]
>;

export type QuestMeshGeneratorPrototypeAttachesItem = GetStructType<{
  BlockingBodyMeshes: MeshGeneratorPrototypeBlockingBodyMeshes;
  BlockingGrooms: SingletonConstantArmy;
  BlockingGroomSIDs: PDATutorialPrototypeImages;
  BlockingSlots: SpawnActorPrototypeLairTerritoryVolumes;
  BodyMeshSID: string;
  Weight: number;
}>;

export type QuestMeshGeneratorPrototypeAttachments = GetStructType<
  QuestMeshGeneratorPrototypeCap[]
>;

export type QuestMeshGeneratorPrototypeCap = GetStructType<{
  Attaches: QuestMeshGeneratorPrototypeAttaches;
  SlotName: string;
}>;

export type QuestMeshGeneratorPrototypeChevron_index = GetStructType<{
  Distribution: ECustomDataDistribution;
  MaterialGroup: string;
  Variations: QuestMeshGeneratorPrototypeVariations;
}>;

export type QuestMeshGeneratorPrototypeCustomData = GetStructType<
  QuestMeshGeneratorPrototypeChevron_index[]
>;

export type QuestMeshGeneratorPrototypeGroom = GetStructType<
  QuestMeshGeneratorPrototypeGroomItem[]
>;

export type QuestMeshGeneratorPrototypeGroomItem = GetStructType<{
  CategoryName: string;
  Variations: QuestMeshGeneratorPrototypeVariations;
}>;

export type QuestMeshGeneratorPrototypeMaterials = GetStructType<
  QuestMeshGeneratorPrototypeMaterialsItem[]
>;

export type QuestMeshGeneratorPrototypeMaterialsItem = GetStructType<{
  MaterialGroup: string;
  Variations: QuestMeshGeneratorPrototypeVariations;
}>;

export type QuestMeshGeneratorPrototypeVariations = GetStructType<
  QuestMeshGeneratorPrototypeVariationsItem[]
>;

export type QuestMeshGeneratorPrototypeVariationsItem = GetStructType<{
  VariationIndex: number;
  Weight: number;
}>;

export type QuestNodePrototypeAchievementUnlock = GetStructType<{
  AchievementSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::AchievementUnlock" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeActivateAnomaly = GetStructType<{
  Continue: boolean;
  Description: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ActivateAnomaly" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  StartQuest: boolean;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeActivateDataLayerCombination = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  DataLayerCombination: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ActivateDataLayerCombination" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeActivateInteractableObject = GetStructType<{
  InteractableQuestGuid: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ActivateInteractableObject" & EQuestNodeType;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeActivateRestrictor = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ActivateRestrictor" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  VolumeGuid: string;
}>;

export type QuestNodePrototypeAddNote = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::AddNote" & EQuestNodeType;
  NotePrototypeSID: string;
  PlayWhenReceived: boolean;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeAddOrRemoveFromSquad = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::AddOrRemoveFromSquad" & EQuestNodeType;
  QuestSID: string;
  Remove: boolean;
  SID: string;
  Squad: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeAddTechnicianSkillOrUpgrade = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NewTechnicianSkill: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::AddTechnicianSkillOrUpgrade" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
  UpgradeSIDs: QuestNodePrototypeUpgradeSIDs;
}>;

export type QuestNodePrototypeAddTutorialToPDA = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::AddTutorialToPDA" & EQuestNodeType;
  PDATutorialNoteSID: string;
  QuestSID: string;
  RequiredInputs: string;
  SID: string;
}>;

export type QuestNodePrototypeALifeDirectorZoneSwitch = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NewZoneState: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ALifeDirectorZoneSwitch" & EQuestNodeType;
  OverrideScenarioGroupSID: string;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeAudioLocalizedAssetsToLoad = GetStructType<
  QuestNodePrototypeAudioLocalizedAssetsToLoadItem[]
>;

export type QuestNodePrototypeAudioLocalizedAssetsToLoadItem = StringArray;

export type QuestNodePrototypeBridgeCleanUp = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodesToCleanUpResults: ObjPrototypeApplicableMechanicsEffects;
  NodeType: "EQuestNodeType::BridgeCleanUp" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeBridgeEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  LinkedNodePrototypeSID: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::BridgeEvent" & EQuestNodeType;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeCancelAllSideQuests = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::CancelAllSideQuests" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeChangeFaction = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ChangeFaction" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetFaction: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeChangeRelationships = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  FirstTargetSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ChangeRelationships" & EQuestNodeType;
  QuestSID: string;
  RelationshipValue: number;
  Repeatable: boolean;
  SecondTargetSID: string;
  SetFactionRelationshipAsPersonal: boolean;
  ShouldLockPersonalRelationship: boolean;
  SID: string;
  UseDeltaValue: boolean;
  UsePreset: boolean;
}>;

export type QuestNodePrototypeCondition = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Conditions: QuestNodePrototypeConditions;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Condition" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeConditions = GetStructType<
  QuestNodePrototypeConditionsItem[] & {
    ConditionCheckType: EConditionCheckType;
  }
>;

export type QuestNodePrototypeConditionsItem = GetStructType<
  QuestNodePrototypeConditionsItemItem[] & {
    ConditionComparance: EConditionComparance;
    ConditionType: EQuestConditionType;
    ItemPrototypeSID: string;
    NumericValue: number;
    TargetCharacter: string;
    TargetItemContainer: string;
    TargetPoint: AIGlobalRelativeLocation;
    WithEquipped: boolean;
    WithInventory: boolean;
  }
>;

export type QuestNodePrototypeConditionsItemItem = GetStructType<{
  AITarget: string;
  AmmoRequired: number;
  AnyBody: boolean;
  BoolValue: boolean;
  bTriggersByAnybody: boolean;
  ChangeValueMode: EChangeValueMode;
  CompletedNodeLauncherNames: CoreVariableHead;
  ConditionComparance: EConditionComparance;
  ConditionType: EQuestConditionType;
  EffectPrototypeSID: string;
  EmissionPrototypeSID: string;
  Equipment: EMainHandEquipmentType;
  Faction: string;
  GlobalVariablePrototypeSID: string;
  ItemPrototypeSID: DialogPrototypeItemPrototypeSID;
  ItemsCount: DialogPrototypeMoney;
  JournalEntity: EJournalEntity;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  JournalState: EJournalState;
  LinkedNodePrototypeSID: string;
  Money: DialogPrototypeMoney;
  NodeState: EQuestNodeState;
  NotePrototypeSID: string;
  NumericValue: number;
  PointToLookAt: AIGlobalRelativeLocation;
  QuickSlotConsumableType: EConsumableType;
  QuickSlotIndex: number;
  QuickSlotItemSID: string;
  Rank: ERank;
  ReactType: ETriggerReact;
  Relationships: ERelationLevel;
  RequiredSquadMembers: ERequiredSquadMembers;
  TargetCharacter: string;
  TargetContextualActionPlaceholder: string;
  TargetCorpsePlaceholder: string;
  TargetItemContainer: string;
  TargetNode: string;
  TargetNPC: string;
  TargetPlaceholder: string;
  TargetPoint: AIGlobalRelativeLocation;
  ThreatAwareness: EThreatAwareness;
  Trigger: string;
  VariableValue: boolean;
  Weather: EWeather;
  WithBodyArmor: boolean;
  WithEquipped: boolean;
  WithHeadArmor: boolean;
  WithInventory: boolean;
}>;

export type QuestNodePrototypeConnections = GetStructType<
  QuestNodePrototypeConnectionsItem[]
>;

export type QuestNodePrototypeConnectionsItem = GetStructType<{
  Name: string;
  SID: string;
}>;

export type QuestNodePrototypeConsoleCommand = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ConsoleCommand: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ConsoleCommand" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeContainer = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ContaineredQuestPrototypeSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Container" & EQuestNodeType;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeDeactivateZone = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NavModifier: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::DeactivateZone" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeDespawn = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Despawn" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  SpecificItemDespawn: boolean;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeDialogMembersItem = GetStructType<{
  DialogMemberGuid: string;
  TalkThroughRadio: boolean;
}>;

export type QuestNodePrototypeDialogObjectLocation = GetStructType<
  AIGlobalRelativeLocation[]
>;

export type QuestNodePrototypeDisabledEvents = GetStructType<
  EDialogEventType[]
>;

export type QuestNodePrototypeDisableNPCBark = GetStructType<{
  DisabledEvents: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::DisableNPCBark" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeDisableNPCInteraction = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::DisableNPCInteraction" & EQuestNodeType;
  QuestSID: string;
  RestrictDeadBodyDespawn: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDialogInteractions: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeEmissionScheduleControl = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::EmissionScheduleControl" & EQuestNodeType;
  PauseEmission: boolean;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeEmissionStart = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EmissionPrototypeSID: string;
  ForceEmission: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::EmissionStart" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  StartQuest: boolean;
  UseDefaultEmissionPrototype: boolean;
}>;

export type QuestNodePrototypeEnableDataLayer = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  DataLayerName: string;
  IsDataLayerEnabled: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::EnableDataLayer" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeEnd = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ExcludeAllNodesInContainer: boolean;
  Launchers: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::End" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeEquipItemInHands = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EquipmentItemSID: string;
  EquipmentTypeFilter: EMainHandEquipmentType;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::EquipItemInHands" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeFlashlightOnOff = GetStructType<{
  DisableFlashlightControl: boolean;
  FlashlightAction: EFlashlightAction;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::FlashlightOnOff" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeForceInteract = GetStructType<{
  IgnoreEnabledCheck: boolean;
  InteractableQuestGuid: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ForceInteract" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeGiveCache = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::GiveCache" & EQuestNodeType;
  QuestItemGeneratorSID: string;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeHideLoadingScreen = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::HideLoadingScreen" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeHideTutorial = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::HideTutorial" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  WidgetType: number;
}>;

export type QuestNodePrototypeIf = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Conditions: QuestNodePrototypeConditions;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::If" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeInfotopicLastPhrases = GetStructType<
  QuestNodePrototypeInfotopicLastPhrasesItem[]
>;

export type QuestNodePrototypeInfotopicLastPhrasesItem = GetStructType<{
  LastPhraseSID: string;
  NextLaunchedPhraseSID: string;
}>;

export type QuestNodePrototypeItemAdd = GetStructType<{
  AddToPlayerStash: boolean;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ItemsCount: number;
  ItemSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ItemAdd" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeItemRemove = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ItemsCount: number;
  ItemSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ItemRemove" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeLastPhrases = GetStructType<
  QuestNodePrototypeLastPhrasesItem[]
>;

export type QuestNodePrototypeLastPhrasesItem = GetStructType<{
  FinishNode: boolean;
  LastPhraseSID: string;
  NextLaunchedPhraseSID: string;
}>;

export type QuestNodePrototypeLaunchers = GetStructType<
  QuestNodePrototypeLaunchersItem[]
>;

export type QuestNodePrototypeLaunchersItem = GetStructType<{
  Connections: QuestNodePrototypeConnections;
  Excluding: boolean;
}>;

export type QuestNodePrototypeLoadAsset = GetStructType<{
  AssetsToLoad: string;
  AudioLocalizedAssetsToLoad: QuestNodePrototypeAudioLocalizedAssetsToLoad;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::LoadAsset" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeLookAt = GetStructType<{
  ActorBoneName: string;
  ApplyRestrictionType: EApplyRestrictionType | number;
  AttractionPointType: EAttractionPointType | number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CollisionChannel: number;
  Duration: number;
  EnteringDuration: number;
  Launchers: string;
  LookAtActorFName: string;
  LookAtLocation: AIGlobalRelativeLocation;
  LookAtPlaceholder: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::LookAt" & EQuestNodeType;
  PresetName: string;
  Priority: number;
  QuestSID: string;
  ReactionTime: number;
  Repeatable: boolean;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  SID: string;
  TargetQuestGuid: string;
  X: number;
  Y: number;
  Z: number;
}>;

export type QuestNodePrototypeMarkers = GetStructType<
  QuestNodePrototypeMarkersItem[]
>;

export type QuestNodePrototypeMarkersItem = GetStructType<{
  AddOnCondition: boolean;
  Conditions: QuestNodePrototypeConditions;
  MarkerLocation: AIGlobalRelativeLocation;
  MarkerRadius: number;
  MarkerTargetQuestGuid: string;
  RemoveOnCondition: boolean;
  ZoneSubMarkers: QuestNodePrototypeZoneSubMarkers;
}>;

export type QuestNodePrototypeMoveInventory = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  MoveFrom: string;
  MoveQuestItems: boolean;
  MoveTo: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::MoveInventory" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  WithEquipped: boolean;
}>;

export type QuestNodePrototypeNPCBark = GetStructType<{
  Event: EDialogEventType;
  Launchers: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::NPCBark" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeOnAbilityEndedEvent = GetStructType<{
  AbilityPrototypeSID: string;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnAbilityEndedEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnAbilityUsedEvent = GetStructType<{
  AbilityPrototypeSID: string;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnAbilityUsedEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnDialogStartEvent = GetStructType<{
  DialogToStart: string;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnDialogStartEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnEmissionFinishEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnEmissionFinishEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnEmissionStageActivated = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnEmissionStageActivated" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  StageID: EEmissionStage;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnEmissionStageFinished = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnEmissionStageFinished" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  StageID: EEmissionStage;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnEmissionStartEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnEmissionStartEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnFactionBecomeEnemyEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  Faction: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnFactionBecomeEnemyEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnFactionBecomeFriendEvent = GetStructType<{
  EventType: EQuestEventType;
  Faction: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnFactionBecomeFriendEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnGetCompatibleAttachEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnGetCompatibleAttachEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnHitEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  HitProducer: string;
  HitReceiver: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnHitEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnInfotopicFinishEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  InfotopicLastPhrases: QuestNodePrototypeInfotopicLastPhrases;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnInfotopicFinishEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnInteractEvent = GetStructType<{
  EventType: EQuestEventType;
  InteractableQuestGuid: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnInteractEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnJournalQuestEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnJournalQuestEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnKillerCheckEvent = GetStructType<{
  EventType: EQuestEventType;
  FullSquad: boolean;
  IncludeWoundedEvent: boolean;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnKillerCheckEvent" & EQuestNodeType;
  QuestSID: string;
  ShouldBeKilled: string;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnMoneyAmountReachedEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnMoneyAmountReachedEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetMoneyAmount: number;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnNPCBecomeEnemyEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnNPCBecomeEnemyEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnNPCBecomeFriendEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnNPCBecomeFriendEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnNPCCreateEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnNPCCreateEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnNPCDeathEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnNPCDeathEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnNPCDefeatEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnNPCDefeatEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnPlayerGetItemEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  ExpectedItemsCount: number;
  ItemPrototypeSID: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnPlayerGetItemEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
  WithEquipped: boolean;
  WithInventory: boolean;
}>;

export type QuestNodePrototypeOnPlayerLostItemEvent = GetStructType<{
  EventType: EQuestEventType;
  ExpectedItemsCount: number;
  FullAmount: boolean;
  ItemPrototypeSID: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnPlayerLostItemEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnPlayerNoticedEvent = GetStructType<{
  AIThreatState: number;
  EventType: EQuestEventType;
  LaunchOnQuestStart: number;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnPlayerNoticedEvent" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  ThreatSensor: number;
  TrackBeforeActive: number;
}>;

export type QuestNodePrototypeOnPlayerRankReachedEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnPlayerRankReachedEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetRank: ERank;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnSignalReceived = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnSignalReceived" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  SignalSenderGuid: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnTickEvent = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnTickEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TrackBeforeActive: boolean;
}>;

export type QuestNodePrototypeOnUpgradeInstallEvent = GetStructType<{
  EventType: EQuestEventType;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::OnUpgradeInstallEvent" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TrackBeforeActive: boolean;
  UpgradePrototypeSID: string;
}>;

export type QuestNodePrototypeOutputPinNames = GetStructType<
  (number | string)[]
>;

export type QuestNodePrototypeParams = GetStructType<
  QuestNodePrototypeParamsItem[]
>;

export type QuestNodePrototypeParamsItem = GetStructType<{
  ChangeValue: number;
  ChangeValueMode: EChangeValueMode;
  IgnoreDamageType: EIgnoreDamageType;
  ModifiedCharacterParam: EModifiedCharacterParam;
  Rank: ERank;
}>;

export type QuestNodePrototypePersonalRestriction = GetStructType<
  Record<SID, ESpaceRestrictionType>
>;

export type QuestNodePrototypePinWeights = GetStructType<number[]>;

export type QuestNodePrototypePlayEffect = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EffectLocation: AIGlobalRelativeLocation;
  EffectPath: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::PlayEffect" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypePlayPostProcess = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::PlayPostProcess" & EQuestNodeType;
  PostEffectProcessorSID: string;
  PostProcessParamValue: number;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypePlaySound = GetStructType<{
  AKEventPath: string;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  FinishOnAKEvent: boolean;
  Launchers: string;
  MasterAKEventForLoad: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::PlaySound" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  SoundLocation: AIGlobalRelativeLocation;
  SoundPath: string;
}>;

export type QuestNodePrototypePlayVideo = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  IsFinalVideo: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::PlayVideo" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TimeToStartNextNodeBeforeEnd: number;
  VideoAssetPath: string;
}>;

export type QuestNodePrototypeProtectLairNPCSquadItem = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ProtectLairNPCSquadItem" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeRandom = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Random" & EQuestNodeType;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  PinWeights: QuestNodePrototypePinWeights;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeReachPointComments = GetStructType<
  QuestNodePrototypeReachPointCommentsItem[]
>;

export type QuestNodePrototypeReachPointCommentsItem = GetStructType<{
  DialogMembers: ObjPrototypeCapsuleNames;
  ReachPointComment: string;
  ReachPointLocation: AIGlobalRelativeLocation;
}>;

export type QuestNodePrototypeReputationLocker = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: string;
  MinimalReputationLevel: ERelationLevel;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ReputationLocker" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetFaction: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeResetAI = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ResetAI" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeRestrictedFaction = GetStructType<{
  Bandits: ESpaceRestrictionType;
  FreeStalkers: ESpaceRestrictionType;
  Humanoid: ESpaceRestrictionType;
  Monolith: ESpaceRestrictionType;
  Mutant: ESpaceRestrictionType;
  Varta: ESpaceRestrictionType;
}>;

export type QuestNodePrototypeRestrictionArea = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::RestrictionArea" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeRestrictSave = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::RestrictSave" & EQuestNodeType;
  QuestSID: string;
  SaveTypes: QuestNodePrototypeSaveTypes;
  SID: string;
}>;

export type QuestNodePrototypeRotationAfterMoveTo = GetStructType<{
  Pitch: number;
  Roll: number;
  X: number;
  Y: number;
  Yaw: number;
  Z: number;
}>;

export type QuestNodePrototypeSaveGame = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SaveGame" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeSaveTypes = GetStructType<ESaveType[]>;

export type QuestNodePrototypeScheduledContainer = GetStructType<{
  ContaineredQuestPrototypeSID: string;
  EndHour: number;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ScheduledContainer" & EQuestNodeType;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  QuestSID: string;
  Repeatable: boolean;
  SelectedDaysOfWeek: number;
  SID: string;
  StartHour: number;
}>;

export type QuestNodePrototypeSearchPoint = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SearchPoint" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetLocation: AIGlobalRelativeLocation;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSendSignal = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SendSignal" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  SignalReceiverGuid: string;
}>;

export type QuestNodePrototypeSequenceStart = GetStructType<{
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  LocalizedSequences: DialogPrototypeLocalizedSequences;
  LoopSequence: number;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SequenceStart" & EQuestNodeType;
  PreblendSequence: boolean;
  PreblendTime: number;
  QuestSID: string;
  Repeatable: boolean;
  RotationTime: number;
  SelfLocation: string;
  SID: string;
  TargetLocation: string;
}>;

export type QuestNodePrototypeSetAIBehavior = GetStructType<{
  BehaviorType: EBehaviorType;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CanBeInterrupted: boolean;
  CanBeIterrupted: boolean;
  CanBeTeleported: boolean;
  ContextualActionLookAtPlayerRange: number;
  ContextualActionRange: number;
  ContinueWhileCombatComments: string;
  ContinueWhileMovingComments: string;
  CustomRestPlaceSelection: boolean;
  CustomSleepPlaceSelection: boolean;
  FailureByCombat: boolean;
  FailureByEmission: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  FailureByPlayerEncounter: boolean;
  FailureByPlayerKill: boolean;
  FailureByTargetLost: boolean;
  FailureByThreat: boolean;
  FinishBattleComments: string;
  FleeType: EFleeType;
  FollowStartRange: number;
  FollowStopRange: number;
  GoalPriority: EGoalPriority;
  GoalTargetQuestGuid: string;
  GuardOpponentFactions: CoreVariableHead;
  GuardTargetGuid: string;
  GuardType: EGuardType;
  GuardZoneShapesGuids: string;
  IdlePosition: AIGlobalRelativeLocation;
  IgnoreAnomalyFields: boolean;
  IgnoreCombat: boolean;
  IgnoreEmission: boolean;
  IgnoreRadiationFeilds: boolean;
  IgnoreThreat: boolean;
  ImmediatelyIdentifyEnemy: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  LeaveAnomalyZoneComments: string;
  LookAt: QuestNodePrototypeLookAt;
  MaxAcceptanceDistance: number;
  MinAcceptanceDistance: number;
  MinFleeTime: number;
  MinPanicTime: number;
  MovementPose: EAIMovementPose;
  MovementType: EMovementBehaviour;
  MoveToFailureRange: number;
  MoveToPath: string;
  MoveToPlayer: boolean;
  MoveToSuccessRange: number;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetAIBehavior" & EQuestNodeType;
  PatrolCycleCount: number;
  PatrolPlaceholderGUID: string;
  PlayerLeavesWhileCombatComments: string;
  PlayerLeavesWhileMovingComments: string;
  QuestSID: string;
  Radius: number;
  ReachAnomalyZoneComments: string;
  ReachPointComments: QuestNodePrototypeReachPointComments;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  Repeatable: boolean;
  RepeatableStayAnimation: boolean;
  RestLocation: AIGlobalRelativeLocation;
  RotationAfterMoveTo: QuestNodePrototypeRotationAfterMoveTo;
  ShootingPosition: AIGlobalRelativeLocation;
  ShootTargetLocation: AIGlobalRelativeLocation;
  ShotsQueueCount: number;
  SID: string;
  SimulateBattle: boolean;
  SleepLocation: AIGlobalRelativeLocation;
  StartBattleComments: string;
  StartPointID: number;
  StayAnimation: string;
  StayContextualAction: string;
  TargetLocations: QuestNodePrototypeTargetLocations;
  TargetQuestGuid: string;
  TargetQuestGuids: CoreVariableLegs;
  ThreatsReactRange: number;
  TimeToUseAbility: number;
  UseAbilityMovementType: EMovementBehaviour;
  UseAbilityPrototypeSID: string;
  UseAbilityTarget: string;
  UseSecondaryWeapon: boolean;
  WaitingPlayer: boolean;
  WaitingTime: number;
  WeaponReady: boolean;
  WeaponState: EWeaponState;
}>;

export type QuestNodePrototypeSetCharacterEffect = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EffectPrototypeSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetCharacterEffect" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetCharacterParam = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetCharacterParam" & EQuestNodeType;
  Params: QuestNodePrototypeParams;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetDialog = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CallPlayer: boolean;
  CallPlayerRadius: number;
  CanExitAnytime: boolean;
  ContinueThroughRadio: boolean;
  DialogChainPrototypeSID: string;
  DialogMembers: ObjPrototypeCapsuleNames;
  DialogObjectLocation: QuestNodePrototypeDialogObjectLocation;
  IsComment: boolean;
  LastPhrases: QuestNodePrototypeLastPhrases;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetDialog" & EQuestNodeType;
  NPCToStartDialog: number;
  OutputPinNames: QuestNodePrototypeOutputPinNames;
  OverrideDialogTopic: EOverrideDialogTopic;
  QuestSID: string;
  Repeatable: boolean;
  SeekPlayer: boolean;
  SID: string;
  StartForcedDialog: boolean;
  TalkThroughRadio: QuestNodePrototypeTalkThroughRadio;
  WaitAllDialogEndingsToFinish: boolean;
}>;

export type QuestNodePrototypeSetDurabilityParam = GetStructType<{
  Launchers: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetDurabilityParam" & EQuestNodeType;
  PistolDurabilityPercent: number;
  PrimaryWeaponDurabilityPercent: number;
  QuestSID: string;
  SecondaryWeaponDurabilityPercent: number;
  ShouldTargetPistol: boolean;
  ShouldTargetPrimaryWeapon: boolean;
  ShouldTargetSecondaryWeapon: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetFactionRestriction = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NavAreaClass: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetFactionRestriction" & EQuestNodeType;
  QuestSID: string;
  RestrictedFaction: QuestNodePrototypeRestrictedFaction;
  SID: string;
}>;

export type QuestNodePrototypeSetGlobalVariable = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ChangeValueMode: EChangeValueMode;
  GlobalVariablePrototypeSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetGlobalVariable" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  VariableValue: boolean;
}>;

export type QuestNodePrototypeSetHubOwner = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetHubOwner" & EQuestNodeType;
  OwnedHub: string;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetItemGenerator = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  EquipItems: boolean;
  ItemGeneratorSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetItemGenerator" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  ReplaceInventory: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetJournal = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  JournalAction: EJournalAction;
  JournalEntity: EJournalEntity;
  JournalQuestDescriptionIndex: number;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  Markers: QuestNodePrototypeMarkers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetJournal" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SetQuestActive: boolean;
  SID: string;
}>;

export type QuestNodePrototypeSetLocationName = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  Location: string;
  NewDescription: number;
  NewTitle: number;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetLocationName" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeSetMeshGenerator = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  MeshGeneratorSID: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetMeshGenerator" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetName = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NameSID: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetName" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetNPCSequentialAbility = GetStructType<{
  AbilityPrototypeSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetNPCSequentialAbility" & EQuestNodeType;
  QuestSID: string;
  SequentialAbilityModificationMode: EModifyAbilitySequenceQuestNodeMode;
  SequentialAbilityPriority: number;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetPersonalRestriction = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NavAreaClass: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetPersonalRestriction" & EQuestNodeType;
  PersonalRestriction: QuestNodePrototypePersonalRestriction;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeSetQuestGiver = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  MainQuest: boolean;
  MarkerDescription: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetQuestGiver" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetSpaceRestrictor = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetSpaceRestrictor" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSetTime = GetStructType<{
  InGameHours: number;
  InGameMinutes: number;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetTime" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TransitionTime: number;
}>;

export type QuestNodePrototypeSetTimer = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  InGameHours: number;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetTimer" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeSetWeather = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Force: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetWeather" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  TransitionTime: number;
  Weather: EWeather;
}>;

export type QuestNodePrototypeSetWounded = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  HealingType: EHealingType;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SetWounded" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
  WoundedOn: boolean;
}>;

export type QuestNodePrototypeShowFadeScreen = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  FadeTime: number;
  ImagePath: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ShowFadeScreen" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  ScreenText: string;
  SID: string;
}>;

export type QuestNodePrototypeShowLoadingScreen = GetStructType<{
  Launchers: string;
  LoadingScreenType: ELoadingDestination;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ShowLoadingScreen" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeShowMarker = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Discovered: boolean;
  Explored: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  MarkerSID: string;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ShowMarker" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeShowTutorialWidget = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ShowTutorialWidget" & EQuestNodeType;
  PDATutorialNoteSID: string;
  QuestSID: string;
  Repeatable: boolean;
  RequiredInputs: CoreVariableLegs;
  SID: string;
  TimerRate: number;
  TutorialHeadLocalizedSID: string;
  TutorialSID: string;
  TutorialTextLocalizedSID: string;
  WidgetType: number;
}>;

export type QuestNodePrototypeSpawn = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Spawn" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnAnomaly = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnAnomaly" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnAnomalySpawner = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnAnomalySpawner" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnArtifactSpawner = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnArtifactSpawner" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnDeadBody = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnDeadBody" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnItemContainer = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnItemContainer" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnLair = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnLair" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnSafeZone = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnSafeZone" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnSingleObj = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnSingleObj" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnSquad = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnSquad" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeSpawnTrigger = GetStructType<{
  IgnoreDamageType: EIgnoreDamageType;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::SpawnTrigger" & EQuestNodeType;
  QuestSID: string;
  SID: string;
  SpawnHidden: boolean;
  SpawnNodeExcludeType: ESpawnNodeExcludeType;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeStartBenchmark = GetStructType<{
  BenchRuns: number;
  CameraHeight: number;
  CircleRadius: number;
  InitialPitch: number;
  InitialYaw: number;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::StartBenchmark" & EQuestNodeType;
  ProfileCsv: boolean;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeSwitchQuestItemState = GetStructType<{
  ItemPrototypeSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::SwitchQuestItemState" & EQuestNodeType;
  QuestItem: boolean;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
}>;

export type QuestNodePrototypeTalkThroughRadio = GetStructType<boolean[]>;

export type QuestNodePrototypeTargetLocations = GetStructType<
  AIGlobalRelativeLocation[]
>;

export type QuestNodePrototypeTechnical = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: string;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Technical" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  StartDelay: number;
}>;

export type QuestNodePrototypeTeleportCharacter = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::TeleportCharacter" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  ShouldBlendViaFade: boolean;
  SID: string;
  TargetQuestGuid: string;
  TeleportLocationAndRotation: QuestNodePrototypeRotationAfterMoveTo;
  TeleportType: EGSCTeleportType;
}>;

export type QuestNodePrototypeTimeLock = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::TimeLock" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeToggleLairActivity = GetStructType<{
  Activate: boolean;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  ForceDespawn: boolean;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ToggleLairActivity" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeToggleNPCHidden = GetStructType<{
  HideViewType: EHideViewType;
  Launchers: QuestNodePrototypeLaunchers;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::ToggleNPCHidden" & EQuestNodeType;
  QuestSID: string;
  Repeatable: boolean;
  SID: string;
  TargetQuestGuid: string;
}>;

export type QuestNodePrototypeTrackJournal = GetStructType<{
  JournalQuestSID: string;
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::TrackJournal" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeTrackShelter = GetStructType<{
  Launchers: QuestNodePrototypeLaunchers;
  NodeType: "EQuestNodeType::TrackShelter" & EQuestNodeType;
  QuestSID: string;
  SID: string;
}>;

export type QuestNodePrototypeTrigger = GetStructType<{
  BrokenGameDataFilter: EBrokenGameDataFilter;
  bTriggersByAnybody: boolean;
  EventType: EQuestEventType;
  Launchers: QuestNodePrototypeLaunchers;
  LaunchOnQuestStart: boolean;
  NodePrototypeVersion: number;
  NodeType: "EQuestNodeType::Trigger" & EQuestNodeType;
  QuestSID: string;
  ReactType: ETriggerReact;
  Repeatable: boolean;
  RequiredSquadMembers: ERequiredSquadMembers;
  SID: string;
  TargetQuestGuid: string;
  TrackBeforeActive: boolean;
  TriggerAction: number;
  TriggerQuestGuid: string;
}>;

export type QuestNodePrototypeUpgradeSIDs = StringArray;

export type QuestNodePrototypeZoneSubMarkers = GetStructType<
  QuestNodePrototypeZoneSubMarkersItem[]
>;

export type QuestNodePrototypeZoneSubMarkersItem = GetStructType<{
  MarkerLocation: AIGlobalRelativeLocation;
  MarkerRadiusSquared: number;
}>;

export type QuestNPCGeneratorPrototype = GetStructType<{
  ItemGenerator: QuestNPCGeneratorPrototypeItemGenerator;
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type QuestNPCGeneratorPrototypeItemGenerator = GetStructType<
  QuestNPCGeneratorPrototypeItemGeneratorItem[]
>;

export type QuestNPCGeneratorPrototypeItemGeneratorItem = GetStructType<{
  Category: EItemGenerationCategory;
  PlayerRank: ERank;
  PossibleItems: QuestNPCGeneratorPrototypePossibleItems;
}>;

export type QuestNPCGeneratorPrototypePossibleItems = GetStructType<
  QuestNPCGeneratorPrototypePossibleItemsItem[]
>;

export type QuestNPCGeneratorPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxCount: number;
  AmmoMinCount: number;
  bRequireWeapon: boolean;
  bUnloadedWeapon: boolean;
  Chance: number;
  ItemGeneratorPrototypeSID: string;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Weight: number;
}>;

export type QuestObjPrototype = GetStructType<{
  Abilities: QuestObjPrototypeAbilities;
  AgentType: EAgentType;
  AttackParams: QuestObjPrototypeAttackParams;
  Blueprint: string;
  CanProcessCorpses: boolean;
  CustomMeshGeneratorPrototypeSID: string;
  DialogInteractDistance: number;
  DuplicateFacialAnimationNPCs: CoreVariableLegs;
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
  NeedsPresetSID: string;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  Protection: QuestObjPrototypeProtection;
  Rank: ERank;
  ReactOnNonEnemySounds: boolean;
  ShouldEnableAdamAppleAnimations: boolean;
  ShouldGenerateStashClues: boolean;
  SID: string;
  Text: string;
  TradePrototypeSID: string;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VitalParams: QuestObjPrototypeVitalParams;
}>;

export type QuestObjPrototypeAbilities = GetStructType<{
  NoDamagePSYAttack: ObjPrototypeCat_Jump;
}>;

export type QuestObjPrototypeAttackParams = GetStructType<{
  ForceDistance: number;
  MeleeAttackAcceptanceDistance: number;
  MeleeAttackHeight: number;
  MeleeAttackRadius: number;
  MeleeDamage: number;
}>;

export type QuestObjPrototypeProtection = GetStructType<{
  Strike: number;
}>;

export type QuestObjPrototypeStaminaDisableThresholds = GetStructType<
  QuestObjPrototypeStaminaDisableThresholdsItem[]
>;

export type QuestObjPrototypeStaminaDisableThresholdsItem = GetStructType<{
  RegenerationDelay: number;
  StateTags: ObjPrototypeStateTags;
  Threshold: number;
}>;

export type QuestObjPrototypeVitalParams = GetStructType<{
  DegenFoodPoint: number;
  DegenPsyPoints: number;
  DegenStamina: number;
  DegenWaterPoint: number;
  MaxFoodPoint: number;
  MaxFP: number;
  MaxHP: number;
  MaxSleepDesirePoint: string;
  MaxSP: number;
  MaxWaterPoint: number;
  RegenFP: number;
  RegenHP: number;
  RegenSleepDesirePoint: number;
  StaminaDisableThresholds: QuestObjPrototypeStaminaDisableThresholds;
}>;

export type QuestPrototype = GetStructType<{
  Description: string;
  DLC: string;
  Image: string;
  LocalQuest: boolean;
  MainQuest: boolean;
  Name: string;
  SID: string;
  StartQuestNodeSID: string;
}>;

export type QuestRewardsPrototype = GetStructType<{
  ItemGenerator: QuestRewardsPrototypeItemGenerator;
  MoneyGenerator: QuestRewardsPrototypeMoneyGenerator;
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type QuestRewardsPrototypeItemGenerator = GetStructType<
  QuestRewardsPrototypeItemGeneratorItem[]
>;

export type QuestRewardsPrototypeItemGeneratorItem = GetStructType<{
  bAllowSameCategoryGeneration: boolean;
  Category: EItemGenerationCategory;
  PossibleItems: QuestRewardsPrototypePossibleItems;
}>;

export type QuestRewardsPrototypeMoneyGenerator = GetStructType<{
  MaxCount: number;
  MinCount: number;
}>;

export type QuestRewardsPrototypePossibleItems = GetStructType<
  QuestRewardsPrototypePossibleItemsItem[]
>;

export type QuestRewardsPrototypePossibleItemsItem = GetStructType<{
  AmmoMaxCount: number;
  AmmoMinCount: number;
  bRequireWeapon: boolean;
  Chance: number;
  ItemGeneratorPrototypeSID: string;
  ItemPrototypeSID: string;
  MaxCount: number;
  MaxDurability: number;
  MinCount: number;
  MinDurability: number;
  Upgrades: QuestRewardsPrototypeUpgrades;
  Weight: number;
}>;

export type QuestRewardsPrototypeUpgrades = GetStructType<{
  Chance: number;
  MaxCount: number;
  MinCount: number;
  PossibleItems: string;
}>;

export type QuestStashBodyItemGeneratorPrototype = GetStructType<{
  ItemGenerator: QuestStashBodyItemGeneratorPrototypeItemGenerator;
  SID: string;
}>;

export type QuestStashBodyItemGeneratorPrototypeItemGenerator = GetStructType<
  QuestStashBodyItemGeneratorPrototypeItemGeneratorItem[]
>;

export type QuestStashBodyItemGeneratorPrototypeItemGeneratorItem =
  GetStructType<{
    bAllowSameCategoryGeneration: boolean;
    Category: EItemGenerationCategory;
    PlayerRank: ERank;
    PossibleItems: QuestStashBodyItemGeneratorPrototypePossibleItems;
  }>;

export type QuestStashBodyItemGeneratorPrototypePossibleItems = GetStructType<
  QuestStashBodyItemGeneratorPrototypePossibleItemsItem[]
>;

export type QuestStashBodyItemGeneratorPrototypePossibleItemsItem =
  GetStructType<{
    AmmoMaxCount: number;
    AmmoMinCount: number;
    Attaches: QuestRewardsPrototypeUpgrades;
    bRequireWeapon: boolean;
    Chance: number;
    ItemGeneratorPrototypeSID: string;
    ItemPrototypeSID: string;
    MaxCount: number;
    MaxDurability: number;
    MinCount: number;
    MinDurability: number;
    Upgrades: QuestRewardsPrototypeUpgrades;
    Weight: number;
  }>;

export type QuickSaveVariable = GetStructType<{
  QuickSaveOverwriteTime: number;
}>;

export type ref = GetStructType<
  (refFleshBoneDamageMapItem | refRiflesCompatibleAttachmentItem)[]
>;

export type refCapsuleNames = StringArray;

export type refFleshBoneDamageMapItem = GetStructType<{
  CapsuleNames: refCapsuleNames;
  DamageBone: EDamageBone;
}>;

export type refRiflesCompatibleAttachmentItem = GetStructType<{
  AttachID: string;
  IconPosX: string;
  IconPosY: string;
  Muzzle: string;
  Socket: string;
  UpgradeRequired: string;
}>;

export type RegionMusicPrototype = GetStructType<{
  AmbientStateMusicSwitchPath: string;
  MusicState: EMusicState;
  Region: ERegion;
  RegionSIDGlobalVariable: string;
  SID: string;
}>;

export type RelationPrototype = GetStructType<{
  CharacterReactions: RelationPrototypeCharacterReactions;
  ExpansionPolicies: RelationPrototypeExpansionPolicies;
  FactionReactions: RelationPrototypeFactionReactions;
  FactionRollbackCooldowns: RelationPrototypeFactionRollbackCooldowns;
  Factions: RelationPrototypeFactions;
  FactionsInvolvedDistance: number;
  HubReputationRollbackCooldownModifier: number;
  LairReputationRollbackCooldownModifier: number;
  MinRelationLevelToTrade: ERelationLevel;
  NegativeReactionsExcludedFactions: WeaponGeneralSetupPrototypeUpgradePrototypeSIDs;
  PositiveReactionsExcludedFactions: RelationPrototypePositiveReactionsExcludedFactions;
  RelationLevelRanges: RelationPrototypeRelationLevelRanges;
  Relations: RelationPrototypeRelations;
  RelationVersion: number;
  ReputationRollbackCooldown: number;
  ReputationRollbackRadius: number;
  SID: string;
}>;

export type RelationPrototypeAttackLairRestrictions = GetStructType<
  Record<`${Faction}->${Faction}`, boolean>
>;

export type RelationPrototypeCharacterReactions = GetStructType<
  RelationPrototypeFactionReactionsItem[]
>;

export type RelationPrototypeExpansionPolicies = GetStructType<{
  AttackLairRestrictions: RelationPrototypeAttackLairRestrictions;
}>;

export type RelationPrototypeFactionReactions = GetStructType<
  RelationPrototypeFactionReactionsItem[]
>;

export type RelationPrototypeFactionReactionsItem = GetStructType<{
  "Disaffection->Disaffection": number;
  "Disaffection->Enemy": number;
  "Disaffection->Friend": number;
  "Disaffection->Neutral": number;
  "Disaffection->Self": number;
  "Enemy->Disaffection": number;
  "Enemy->Enemy": number;
  "Enemy->Friend": number;
  "Enemy->Neutral": number;
  "Enemy->Self": number;
  "Friend->Disaffection": number;
  "Friend->Enemy": number;
  "Friend->Friend": number;
  "Friend->Neutral": number;
  "Friend->Self": number;
  "Neutral->Disaffection": number;
  "Neutral->Enemy": number;
  "Neutral->Friend": number;
  "Neutral->Neutral": number;
  "Neutral->Self": number;
  Type: ERelationChangingEvent;
}>;

export type RelationPrototypeFactionRollbackCooldowns = GetStructType<{
  ArenaFriend: number;
  Corpus: number;
  DepoBandits: number;
  Diggers: number;
  DocentBandits: number;
  DocileLabMutants: number;
  Duty: number;
  Freedom: number;
  NeutralBandits: number;
  NeutralMSOP: number;
  Neutrals: number;
  RooseveltBandits: number;
  Scientists: number;
  ShahBandits: number;
  ShevchenkoStalkers: number;
  SIRCAA_Scientist: number;
  SultanBandits: number;
  UdavMercenaries: number;
  VaranBandits: number;
}>;

export type RelationPrototypeFactions = GetStructType<Record<Faction, string>>;

export type RelationPrototypePositiveReactionsExcludedFactions = StringArray;

export type RelationPrototypeRelationLevelRanges = GetStructType<
  RelationPrototypeRelationLevelRangesItem[]
>;

export type RelationPrototypeRelationLevelRangesItem = GetStructType<{
  end: number;
  start: number;
}>;

export type RelationPrototypeRelations = GetStructType<
  Record<`${Faction}<->${Faction}`, number>
>;

export type RestrictorsPrototype = GetStructType<{
  OfflineRestrictors: RestrictorsPrototypeOfflineRestrictors;
  SID: string;
}>;

export type RestrictorsPrototypeOfflineRestrictors = GetStructType<
  RestrictorsPrototypeOfflineRestrictorsItem[]
>;

export type RestrictorsPrototypeOfflineRestrictorsItem = GetStructType<{
  Active: boolean;
  AreasMask: number;
  Center: string;
  Extents: string;
  GUID: string;
  Orientation0: string;
  Orientation1: string;
  Orientation2: string;
}>;

export type SaveLoadVariable = GetStructType<{
  BackupPath: string;
  CampaignsLimit: number;
  CampaignsSaveName: string;
  LoadingStepsProgress: SaveLoadVariableLoadingStepsProgress;
  MinSupportedSaveVersion: number;
  SaveDataPath: string;
  SaveGamesPath: string;
  SavesLimit: SaveLoadVariableSavesLimit;
  SaveThreatBlockRadius: number;
  SaveTypeCategories: SaveLoadVariableSaveTypeCategories;
  ThumbnailHeight: number;
  ThumbnailsPath: string;
  ThumbnailWidth: number;
}>;

export type SaveLoadVariableLoadingStepsProgress = GetStructType<{
  Complete: number;
  FinishingUp: number;
  InitializingManagers: number;
  LoadingManagersData: number;
  LoadingModelsData: number;
  LoadingNecessaryActors: number;
  LoadingStart: number;
  SpawningPlaceholders: number;
}>;

export type SaveLoadVariableSavesLimit = GetStructType<{
  Auto: number;
  ExitGame: number;
  FinishMainQuest: number;
  HubExit: number;
  Manual: number;
  ManualHub: number;
  Quest: number;
  Quick: number;
  StartMainQuest: number;
}>;

export type SaveLoadVariableSaveTypeCategories = GetStructType<
  SaveLoadVariableSaveTypeCategoriesItem[]
>;

export type SaveLoadVariableSaveTypeCategoriesItem = GetStructType<{
  Subtype: ESaveSubType;
  Types: SaveLoadVariableTypes;
}>;

export type SaveLoadVariableTypes = GetStructType<ESaveType[]>;

export type Script = GetStructType<{
  ID: number;
  RepetitionInterval: number;
  ScriptsArray: ScriptScriptsArray;
  SID: string;
}>;

export type ScriptScriptsArray = GetStructType<
  (ScriptScriptsArrayItem | string)[]
>;

export type ScriptScriptsArrayItem = GetStructType<{
  ScenarioFlagKey: string;
  ScenarioFlagValue: number;
  ScriptsSubArray: NPCPrototypeSkills;
}>;

export type SettingsVariablesPC = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SettingsVariablesPCLeftTrigger = GetStructType<{
  LowerThreshold: number;
  Type: EDeadZoneType;
  UpperThreshold: number;
}>;

export type SettingsVariablesPCLookSensitivityCurveKeysItem = GetStructType<{
  ArriveTangent: number;
  ArriveTangentWeight: number;
  LeaveTangent: number;
  LeaveTangentWeight: number;
  Time: number;
  Value: number;
}>;

export type SettingsVariablesPS5Base = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SettingsVariablesPS5Pro = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SettingsVariablesWin64 = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SettingsVariablesXSS = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SettingsVariablesXSX = GetStructType<
  SettingsVariablesPCLookSensitivityCurveKeysItem[] & {
    AimAssistMagnetismModifier: number;
    AimAssistSnappingModifier: number;
    AimAssistStickinessModifier: number;
    AimAssistTrackingModifier: number;
    LeftThumbstick: SettingsVariablesPCLeftTrigger;
    LeftTrigger: SettingsVariablesPCLeftTrigger;
    RightThumbstick: SettingsVariablesPCLeftTrigger;
    RightTrigger: SettingsVariablesPCLeftTrigger;
    SnappingAutomaticTargetChangeEnabled: boolean;
    SnappingCameraMovementToleranceEnabled: boolean;
    SnappingCameraRadiusToleranceEnabled: boolean;
    SnappingTime: number;
  }
>;

export type SingletonConstant = GetStructType<
  (EDialogEventType | SingletonConstantSpotLightIntensityItem)[] & {
    Army: SingletonConstantArmy;
    Bandits: CoreVariableTorso;
    bDebugLogAssetLoading: boolean;
    CallPlayer: number;
    Chatter: number;
    CloudOpacity: number;
    CloudSpeed: number;
    Combat_Action_Cover: number;
    Combat_Action_Detour: number;
    Combat_Action_EnemyDead: number;
    Combat_Action_EnemyGrenade: number;
    Combat_Action_EnemyHit: number;
    Combat_Action_FireSupression: number;
    Combat_Action_Flank: number;
    Combat_Action_FriendlyDead: number;
    Combat_Action_FriendlyFire: number;
    Combat_Action_FriendlyGrenade: number;
    Combat_Action_FriendlyHit: number;
    Combat_Action_Move: number;
    Combat_Action_Reload: number;
    Combat_EnemyFound: number;
    Combat_EnemyRetreat: number;
    Combat_EnemySearch: number;
    Combat_Over: number;
    Combat_SearchEnd: number;
    Combat_SelfRetreat: number;
    Combat_Start: number;
    Combat_Threats_AlertedSearch: number;
    Combat_Threats_AlertedSearchEnd: number;
    Combat_Threats_EnemySearch: number;
    Combat_Threats_ThreatDetected: number;
    Combat_Wounded_GoingToHeal: number;
    Combat_Wounded_Grunt_HealReceive: number;
    Combat_Wounded_Knocked: number;
    Combat_Zombie_Attack: number;
    Combat_Zombie_Moan: number;
    DefeatComment: number;
    Dualshock4: SingletonConstantKeyboard;
    Emission_LeaderEnd: number;
    Emission_LeaderStart: number;
    FreeStalkers: SingletonConstantArmy;
    Interact_Friendly: number;
    Interact_Neutral: number;
    Interact_NonFriendly: number;
    Joke: number;
    Keyboard: SingletonConstantKeyboard;
    Latitude: number;
    LightSourceFadingDurationHoursOnDayNightChange: number;
    Longitude: number;
    Monolith: CoreVariableTorso;
    MoonLightMaxBrightness: number;
    NorthOffsetAngle: number;
    NotifyExpireDuration: number;
    NotifyFadeInDuration: number;
    NotifyFadeOutDuration: number;
    Peaceful_CorpseHubComment: number;
    Peaceful_DropCorpse: number;
    Peaceful_LootingEnemyCorpse: number;
    Peaceful_LootingFriendlyCorpse: number;
    PointLight: SingletonConstantPointLight;
    ReflectionCubemapMipSize: number;
    ReflectionCubemapResolution: number;
    ReflectionFloorHeight: number;
    ReflectionManagerTickTime: number;
    ReflectionNonGeneratedLimit: number;
    ReflectionSphereGlobalGridDepth: number;
    ReflectionSphereGlobalGridHeight: number;
    ReflectionSphereGlobalGridWidth: number;
    ReflectionSphereGridLoadCoef: number;
    ReflectionSphereGridSizeX: number;
    ReflectionSphereGridSizeY: number;
    ReflectionSphereGridSizeZ: number;
    ReflectionSphereGridUnloadCoef: number;
    ReflectionSphereLocalGridDepth: number;
    ReflectionSphereLocalGridHeight: number;
    ReflectionSphereLocalGridWidth: number;
    ReflectionSpherePoolMaxSize: number;
    ReflectionSphereRadius: number;
    ReflectionUpdateDistancesSqr: SingletonConstantReflectionUpdateDistancesSqr;
    RunOn: number;
    SpeechEventCooldown: SingletonConstantSpeechEventCooldown;
    SpotLight: SingletonConstantSpotLight;
    StarsBrightness: number;
    StartDay: number;
    StartHour: number;
    StartMinute: number;
    StartMonth: number;
    StartSecond: number;
    StartYear: number;
    SunLightMaxBrightness: number;
    TimeZone: number;
    Zombie: SingletonConstantZombie;
  }
>;

export type SingletonConstantActions = GetStructType<
  SingletonConstantActionsItem[]
>;

export type SingletonConstantActionsItem = GetStructType<{
  ActionName: EInputKey;
  TimeThresholdHold: number;
}>;

export type SingletonConstantArmy = StringArray;

export type SingletonConstantKeyboard = GetStructType<{
  Actions: SingletonConstantActions;
  ControllerType: EInputController;
}>;

export type SingletonConstantPointLight = GetStructType<{
  Pitch: number;
  Roll: number;
  Temperature: number;
  X: number;
  Y: number;
  Yaw: number;
  Z: number;
}>;

export type SingletonConstantReflectionUpdateDistancesSqr = GetStructType<{
  High: number;
  Low: number;
  Medium: number;
  Minimal: number;
}>;

export type SingletonConstantSpeechEventCooldown = GetStructType<
  SingletonConstantSpeechEventCooldownItem[]
>;

export type SingletonConstantSpeechEventCooldownItem = GetStructType<{
  CooldownSec: number;
  EventType: ESpeechEventType;
}>;

export type SingletonConstantSpotLight = GetStructType<{
  Pitch: string;
  Roll: number;
  Temperature: number;
  X: number;
  Y: number;
  Yaw: string;
  Z: number;
}>;

export type SingletonConstantSpotLightIntensityItem = GetStructType<{
  Exposure: number;
  Value: number;
}>;

export type SingletonConstantZombie = StringArray;

export type SmartCoverPrototype = GetStructType<{
  SID: string;
  WeaponTypes: SmartCoverPrototypeWeaponTypes;
}>;

export type SmartCoverPrototypeEnterCoverOffsets = GetStructType<
  SmartCoverPrototypeEnterCoverOffsetsItem[]
>;

export type SmartCoverPrototypeEnterCoverOffsetsItem = GetStructType<{
  PerCoverTypeOffsets: SmartCoverPrototypePerCoverTypeOffsets;
  SmartCoverType: ESmartCoverType;
}>;

export type SmartCoverPrototypeLookFromCoverOffsets = GetStructType<
  SmartCoverPrototypeEnterCoverOffsetsItem[]
>;

export type SmartCoverPrototypePerCoverTypeOffsets = GetStructType<
  SmartCoverPrototypePerCoverTypeOffsetsItem[]
>;

export type SmartCoverPrototypePerCoverTypeOffsetsItem = GetStructType<{
  ActionSide: EAvailableCoverActionsSide;
  EnterCoverOffsetVector: string;
  EnterSide: EAvailableCoverActionsSide;
  EnterTypes: EAvailableCoverEnterTypes;
  HeadOffset: string;
  LookOutSide: EAvailableCoverActionsSide;
  RootOffset: string;
  WeaponOffset: string;
}>;

export type SmartCoverPrototypeWeaponTypes = GetStructType<
  SmartCoverPrototypeWeaponTypesItem[]
>;

export type SmartCoverPrototypeWeaponTypesItem = GetStructType<{
  EnterCoverOffsets: SmartCoverPrototypeEnterCoverOffsets;
  LookFromCoverOffsets: SmartCoverPrototypeLookFromCoverOffsets;
  WeaponType: EWeaponType;
}>;

export type SpawnActorPrototype = GetStructType<{
  ActiveLair: boolean;
  ALifeLairsSearchRadius: number;
  ALifeScenariosGroupSID: string;
  AllowedUserRestriction: string;
  AllowFactions: string;
  AllowNightVisionForQuestNPC: boolean;
  AllowSpawnInShelter: boolean;
  AllowSpawnOnIsolatedNavMesh: boolean;
  AmmoCount: number;
  AnomaliesPresets: SpawnActorPrototypeAnomaliesPresets;
  AttachmentSID: string;
  AttachReferences: string;
  AvrAgentDiameter: number;
  bDisableTickForWeatherController: boolean;
  bForceCodePhysicsDisabled: boolean;
  bForceWeather: boolean;
  bRandomChancesForSeparateItems: boolean;
  bRestrictorVolumeEnabled: boolean;
  BubbleInitialLocation: AIGlobalRelativeLocation;
  bUseCustomLocation: boolean;
  bWakeUpOnStart: boolean;
  CanAttack: boolean;
  CanBeCaptured: boolean;
  CanBeWounded: boolean;
  CanDefend: boolean;
  CanInteractWithPlayer: boolean;
  CenterLocationRotation: SpawnActorPrototypeCenterLocationRotation;
  ClickerAnomalyArtifactJumpPositions: string;
  CloseDoorRadius: number;
  ClueVariablePrototypeSID: string;
  CollisionSize: AIGlobalRelativeLocation;
  CombatTacticsOverride: ECombatTactics;
  CompoundAnimationReferences: string;
  ContextualActionAccessibility: number;
  ContextualActionPreconditions: string;
  ContextualActionSID: string;
  CorpsePrototypeSID: string;
  CorpseStashSID: string;
  DamageMultiplier: number;
  DataLayers: NPCPrototypeSkills;
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
  DLC: string;
  Durability: number;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  ElectroBakedData: SpawnActorPrototypeElectroBakedData;
  EnableSmartLootIfPossible: boolean;
  FactionGroup: SpawnActorPrototypeFactionGroup;
  FogDensity: number;
  FogDensitySecond: number;
  FogDensitySecondFogData: number;
  FreeformTriggerHeight: number;
  FreeformTriggerVertices: SpawnActorPrototypeFreeformTriggerVertices;
  GeigerCurve: string;
  GeigerRadiationIntensity: number;
  GeigerTriggerOffset: number;
  GlobalOnlineModifierDistance: number;
  GlobalOtherOnlineModifierDistance: number;
  HP: number;
  HubOwnerGuid: string;
  ID: number;
  IgnoreCollisionActors: string;
  InfiniteRespawn: boolean;
  InitialInhabitantFaction: string;
  InLocationRotation: SpawnActorPrototypeInLocationRotation;
  IsALifePoint: boolean;
  IsLootedOnDifficulties: string;
  ItemGeneratorSettings: string;
  Items: SpawnActorPrototypeItems;
  ItemSID: string;
  KillRestrictedFactions: boolean;
  LairPreferredSpawnType: ELairPreferredSpawnType;
  LairPrototypeSID: string;
  LairType: ELairType;
  LevelName: string;
  LightningBallLiveBoxExtent: AIGlobalRelativeLocation;
  LightningBallNavigationPoints: SpawnActorPrototypeLightningBallNavigationPoints;
  LightningBallPathUsage: boolean;
  LocationSID: string;
  LockReceivers: SpawnActorPrototypeLockReceivers;
  MainInfoTopicOwner: string;
  MarkerSID: string;
  MaximumCount: number;
  MaxRespawnCount: number;
  MaxSpawnRank: ERank;
  Mesh: string;
  MeshPath: string;
  MinPatrolNeed: number;
  MinSpawnRank: ERank;
  MoveSpeedMultiplier: number;
  NavModifierVolume: string;
  NavModifierVolumes: UpdatePopupPrototypeContentData;
  NodeCreationVersion: number;
  NodePrototypeVersion: number;
  OnlineModifierDistance: number;
  OverrideArtifactSpawnLocation: string;
  OverrideFaction: string;
  OverrideRank: boolean;
  OwningFaction: string;
  PackOfItemsPrototypeSID: string;
  Path: SpawnActorPrototypePath;
  PatrolPoints: SpawnActorPrototypePatrolPoints;
  PillowAnomalyBiomeType: EPillowAnomalyBiomeType;
  PlaceholderActorGuid: string;
  PlaceholderMapPath: string;
  PositionX: number;
  PositionY: number;
  PositionZ: number;
  PossibleInhabitantFactions: SpawnActorPrototypePossibleInhabitantFactions;
  PostEffectProcessorSID: string;
  PostProcessConfig: string;
  PostProcessRadiationCycleSpeed: number;
  PostProcessRadiationIntensity: number;
  PresetIndex: number;
  Priority: number;
  PSYControllerArtifactItemSID: string;
  PSYControllerArtifactLocation: AIGlobalRelativeLocation;
  PsyNPCType: EPsyNPCType;
  RadiationCycleSpeedPostEffectSID: string;
  RadiationPerSecondValue: number;
  Radioactivity: ERadiationPreset;
  RadioactivityValue: number;
  Rank: ERank;
  RespawnMembers: boolean;
  RespawnOnNPCCount: number;
  RespawnPoints: CoreVariableTorso;
  RestrictedFactions: SpawnActorPrototypeRestrictedFactions;
  RestrictionRadius: number;
  RotatorAnglePitch: number;
  RotatorAngleRoll: number;
  RotatorAngleYaw: number;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  ScenariosGroupPriority: EALifeGroupPriorityType;
  ShouldTraceOnOverlap: boolean;
  ShowOnCompass: boolean;
  ShowOnMap: boolean;
  SID: string;
  SignalReceivers: SpawnActorPrototypeSignalReceivers;
  SignalSenders: SpawnActorPrototypeSignalSenders;
  SimplifiedOverlap: boolean;
  SpawnedGenericMembers: SpawnActorPrototypeSpawnedGenericMembers;
  SpawnedPrototypeSID: string;
  SpawnedSquadMembersCount: number;
  SpawnInRadius: number;
  SpawnOnStart: boolean;
  SpawnType: ESpawnType;
  SquadMembersQuestSIDs: SpawnActorPrototypeSquadMembersQuestSIDs;
  StartPresetID: number;
  StartWaitTime: number;
  StashPrototypeSID: string;
  TeleportGroupSID: string;
  TextAboveActor: string;
  TileOffsetIndex: number;
  TriggerShape: ETriggerShape;
  UnlockDoorTime: number;
  UnlockReceivers: SpawnActorPrototypeLockReceivers;
  UpgradeSID: string;
  VolumeDailySchedulePresetSID: string;
  Volumes: SpawnActorPrototypeVolumes;
  VolumeSID: string;
  VolumetricCoverRestrictions: SpawnActorPrototypeVolumetricCoverRestrictions;
}>;

export type SpawnActorPrototypeAnomaliesLocationRotation = GetStructType<
  QuestNodePrototypeRotationAfterMoveTo[]
>;

export type SpawnActorPrototypeAnomaliesPresets = GetStructType<
  SpawnActorPrototypeAnomaliesPresetsItem[]
>;

export type SpawnActorPrototypeAnomaliesPresetsItem = GetStructType<
  string[] & {
    AnomaliesSpawnData: SpawnActorPrototypeAnomaliesSpawnData;
  }
>;

export type SpawnActorPrototypeAnomaliesSpawnData = GetStructType<
  SpawnActorPrototypeAnomaliesSpawnDataItem[]
>;

export type SpawnActorPrototypeAnomaliesSpawnDataItem = GetStructType<{
  AnomaliesLocationRotation: SpawnActorPrototypeAnomaliesLocationRotation;
  AnomalySID: string;
}>;

export type SpawnActorPrototypeAttachReferences = GetStructType<
  SpawnActorPrototypeAttachReferencesItem[]
>;

export type SpawnActorPrototypeAttachReferencesItem = GetStructType<{
  ActorGuid: string;
  AttachReference: string;
}>;

export type SpawnActorPrototypeCenterLocationRotation = GetStructType<
  SpawnActorPrototypeCenterLocationRotationItem[]
>;

export type SpawnActorPrototypeCenterLocationRotationItem = GetStructType<{
  Rotation: SpawnActorPrototypeRotation;
  Vector: AIGlobalRelativeLocation;
}>;

export type SpawnActorPrototypeContextualActionPreconditions = GetStructType<
  SpawnActorPrototypeContextualActionPreconditionsItem[]
>;

export type SpawnActorPrototypeContextualActionPreconditionsItem =
  GetStructType<{
    AllowedAgentType: number;
    AllowedFactions: NPCPrototypeSkills;
    AllowedUserRestriction: string;
    GlobalVariableName: string;
    IsTargetWeather: boolean;
    ItemPrototypeSID: string;
    ShouldBeActive: boolean;
    ShouldBeTrue: boolean;
    Type: EContextualActionPreconditionType;
    Weather: SpawnActorPrototypeWeather;
  }>;

export type SpawnActorPrototypeDestroyReceiver = GetStructType<{
  Guid: string;
}>;

export type SpawnActorPrototypeDestroySender = GetStructType<{
  Guid: string;
  Signals: string;
}>;

export type SpawnActorPrototypeElectroBakedData = GetStructType<
  SpawnActorPrototypeElectroBakedDataItem[]
>;

export type SpawnActorPrototypeElectroBakedDataItem = GetStructType<{
  ElectroNormalVector: string;
  ElectroTraceEndPoint: string;
  ElectroTraceStartPoint: string;
}>;

export type SpawnActorPrototypeFactionGroup = GetStructType<{
  Factions: SpawnActorPrototypeFactions;
  LairSID: string;
}>;

export type SpawnActorPrototypeFactions = GetStructType<
  SpawnActorPrototypeFactionsItem[]
>;

export type SpawnActorPrototypeFactionsItem = GetStructType<{
  Faction: string;
  SpawnBoxes: SpawnActorPrototypeSpawnBoxes;
}>;

export type SpawnActorPrototypeFreeformTriggerVertices = GetStructType<
  AbilityPrototypeRadius[]
>;

export type SpawnActorPrototypeInLocationRotation = GetStructType<
  SpawnActorPrototypeInLocationRotationItem[]
>;

export type SpawnActorPrototypeInLocationRotationItem = GetStructType<
  SpawnActorPrototypeCenterLocationRotationItem[]
>;

export type SpawnActorPrototypeItemGenerators = GetStructType<
  SpawnActorPrototypeItemGeneratorsItem[]
>;

export type SpawnActorPrototypeItemGeneratorSettings = GetStructType<
  SpawnActorPrototypeItemGeneratorSettingsItem[]
>;

export type SpawnActorPrototypeItemGeneratorSettingsItem = GetStructType<{
  ItemGenerators: SpawnActorPrototypeItemGenerators;
  PlayerRank: ERank;
}>;

export type SpawnActorPrototypeItemGeneratorsItem = GetStructType<{
  PrototypeSID: string;
}>;

export type SpawnActorPrototypeItems = GetStructType<
  SpawnActorPrototypeItemsItem[]
>;

export type SpawnActorPrototypeItemsItem = GetStructType<{
  ChanceToSpawn: number;
  DisablePhysicsAndCollision: boolean;
  MaxAmount: number;
  MinAmount: number;
  PrototypeSID: string;
}>;

export type SpawnActorPrototypeLairTerritoryVolumes = StringArray;

export type SpawnActorPrototypeLightningBallLocation = GetStructType<
  AIGlobalRelativeLocation[]
>;

export type SpawnActorPrototypeLightningBallNavigationPoints = GetStructType<
  SpawnActorPrototypeLightningBallNavigationPointsItem[]
>;

export type SpawnActorPrototypeLightningBallNavigationPointsItem =
  GetStructType<{
    LightningBallLocation: SpawnActorPrototypeLightningBallLocation;
    LightningBallNeighborLocations: SpawnActorPrototypeLightningBallNeighborLocations;
    LightningBallPatrolPoint: boolean;
  }>;

export type SpawnActorPrototypeLightningBallNeighborLocations = GetStructType<
  number[]
>;

export type SpawnActorPrototypeLockReceivers = StringArray;

export type SpawnActorPrototypeMaster = GetStructType<{
  InitialSpawnQuantityPercent: number;
  InitialSpawnQuantityRespawnTimeSeconds: number;
  MaxSpawnQuantity: number;
  MaxSpawnQuantityRespawnTimeSeconds: number;
  SpawnSettingsPerArchetypes: SpawnActorPrototypeSpawnSettingsPerArchetypes;
  WipeRespawnTimeoutSeconds: number;
}>;

export type SpawnActorPrototypePath = GetStructType<
  SpawnActorPrototypePathItem[]
>;

export type SpawnActorPrototypePathItem = GetStructType<{
  Location: string;
  MovementType: EMovementBehaviour;
}>;

export type SpawnActorPrototypePatrolPointLinks = GetStructType<
  SpawnActorPrototypePatrolPointLinksItem[]
>;

export type SpawnActorPrototypePatrolPointLinksItem = GetStructType<{
  DestinationPointIndex: number;
  Weight: number;
}>;

export type SpawnActorPrototypePatrolPoints = GetStructType<
  SpawnActorPrototypePatrolPointsItem[]
>;

export type SpawnActorPrototypePatrolPointsItem = GetStructType<{
  bIsEndPoint: boolean;
  ContextualActionSearchRadius: number;
  Location: string;
  PatrolPointLinks: string;
  StayTimeMax: number;
  StayTimeMin: number;
}>;

export type SpawnActorPrototypePossibleInhabitantFactions = GetStructType<
  SpawnActorPrototypePossibleInhabitantFactionsItem[]
>;

export type SpawnActorPrototypePossibleInhabitantFactionsItem = GetStructType<{
  Faction: string;
  SpawnSettingsPerPlayerRanks: SpawnActorPrototypeSpawnSettingsPerPlayerRanks;
}>;

export type SpawnActorPrototypeRestrictedFactions = StringArray;

export type SpawnActorPrototypeRotation = GetStructType<{
  Pitch: number;
  Roll: number;
  Yaw: number;
}>;

export type SpawnActorPrototypeSignalReceivers = GetStructType<{
  DestroyReceiver: SpawnActorPrototypeDestroyReceiver;
}>;

export type SpawnActorPrototypeSignalSenders = GetStructType<{
  DestroySender: SpawnActorPrototypeDestroySender;
}>;

export type SpawnActorPrototypeSpawnBoxes = GetStructType<
  SpawnActorPrototypeSpawnBoxesItem[]
>;

export type SpawnActorPrototypeSpawnBoxesItem = GetStructType<{
  Extent: string;
  Location: string;
}>;

export type SpawnActorPrototypeSpawnedGenericMembers = GetStructType<
  SpawnActorPrototypeSpawnedGenericMembersItem[]
>;

export type SpawnActorPrototypeSpawnedGenericMembersItem = GetStructType<{
  SpawnedPrototypeSID: string;
  SpawnedSquadMembersCount: number;
}>;

export type SpawnActorPrototypeSpawnSettingsPerArchetypes = GetStructType<
  Record<Archetype, GenericLairPrototypeRat>
>;

export type SpawnActorPrototypeSpawnSettingsPerPlayerRanks = GetStructType<{
  [k in Rank]: SpawnActorPrototypeMaster;
}>;

export type SpawnActorPrototypeSquadMembersQuestSIDs = StringArray;

export type SpawnActorPrototypeVolumes = GetStructType<
  SpawnActorPrototypeVolumesItem[] & {
    LairCoreVolumes: SingletonConstantArmy;
    LairTerritoryVolumes: SpawnActorPrototypeLairTerritoryVolumes;
    NavModifierVolumes: UpdatePopupPrototypeContentData;
  }
>;

export type SpawnActorPrototypeVolumesItem = GetStructType<{
  bShowMarker: boolean;
  Center: string;
  Extents: string;
  NumOfContextualActions: number;
  RestrictorVolume: string;
  Rotator: string;
  ShowMarker: boolean;
  SpaceRestrictorOffset: number;
  Volume: string;
}>;

export type SpawnActorPrototypeVolumetricCoverRestrictions = GetStructType<{
  bEnabled: boolean;
  Volumes: string;
}>;

export type SpawnActorPrototypeWeather = GetStructType<EWeather[]>;

export type SQ95_GlobalVariablePrototype = GetStructType<{
  DefaultValue: string;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type StashPrototype = GetStructType<{
  CustomIconPath: string;
  ItemGenerators: StashPrototypeItemGenerators;
  SID: string;
}>;

export type StashPrototypeAttachParams = GetStructType<
  StashPrototypeAttachParamsItem[]
>;

export type StashPrototypeAttachParamsItem = GetStructType<{
  MaxPrice: number;
}>;

export type StashPrototypeConsumablesParams = GetStructType<
  StashPrototypeGrenadesParamsItem[]
>;

export type StashPrototypeGrenadesParams = GetStructType<
  StashPrototypeGrenadesParamsItem[]
>;

export type StashPrototypeGrenadesParamsItem = GetStructType<{
  Items: StashPrototypeItems;
  ItemSetCount: number;
  MaxSpawnChance: number;
  MinSpawnChance: number;
}>;

export type StashPrototypeHealthParams = GetStructType<
  StashPrototypeHealthParamsItem[]
>;

export type StashPrototypeHealthParamsItem = GetStructType<{
  Curve: string;
  Items: StashPrototypeItems;
  MaxSpawnChance: number;
  MinSpawnChance: number;
}>;

export type StashPrototypeItemGenerators = GetStructType<
  StashPrototypeItemGeneratorsItem[]
>;

export type StashPrototypeItemGeneratorsItem = GetStructType<{
  Rank: ERank;
  SmartLootParams: StashPrototypeSmartLootParams;
}>;

export type StashPrototypeItems = GetStructType<StashPrototypeItemsItem[]>;

export type StashPrototypeItemsItem = GetStructType<{
  Chance: number;
  ItemPrototypeSID: string;
  MaxCount: number;
  MinCount: number;
  Weight: number;
}>;

export type StashPrototypePistolWeaponParams = GetStructType<
  StashPrototypePistolWeaponParamsItem[]
>;

export type StashPrototypePistolWeaponParamsItem = GetStructType<{
  Items: StashPrototypeItems;
  MainWeaponAmmoCount: number;
  MaxSpawnChance: number;
  MinSpawnChance: number;
  PriorityCaliber: EAmmoCaliber;
}>;

export type StashPrototypePrimaryWeaponParams = GetStructType<
  StashPrototypePistolWeaponParamsItem[]
>;

export type StashPrototypeSecondaryWeaponParams = GetStructType<
  StashPrototypePistolWeaponParamsItem[]
>;

export type StashPrototypeSmartLootParams = GetStructType<{
  AttachParams: StashPrototypeAttachParams;
  ConsumablesParams: StashPrototypeConsumablesParams;
  GrenadesParams: StashPrototypeGrenadesParams;
  HealthParams: StashPrototypeHealthParams;
  PistolWeaponParams: StashPrototypePistolWeaponParams;
  PrimaryWeaponParams: StashPrototypePrimaryWeaponParams;
  SecondaryWeaponParams: StashPrototypeSecondaryWeaponParams;
}>;

export type TeleportGroupPrototype = GetStructType<{
  MinTeleportDistance: number;
  SID: string;
}>;

export type TeleportPrototype = GetStructType<{
  EffectPrototypeSIDs: CoreVariableHead;
  SID: string;
  TeleportType: EGSCTeleportType;
}>;

export type TestNPCObjPrototype = GetStructType<{
  CustomMeshGeneratorPrototypeSID: string;
  Faction: string;
  ID: number;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  SID: string;
}>;

export type ThreatPrototype = GetStructType<{
  Actions: ThreatPrototypeActions;
  AlertedRadius: number;
  AlertedRadiusExpanded: number;
  bIdentifyEnemyByThreatLevel: boolean;
  DefaultThreatValueFreezeTimeSeconds: number;
  DefaultThreatValueLossPerSecond: number;
  ID: number;
  IdentifyAsEnemyRadius: number;
  IdentifyAsEnemyTime: number;
  MaxThreatLevelValue: number;
  MaxThreatLevelValueBeforeIndentification: number;
  ReachedThrealLevelSpeechCommands: AssetLibraryUIIcons;
  ShowThreatIndicator: boolean;
  SID: string;
  ThreatParams: ThreatPrototypeThreatParams;
}>;

export type ThreatPrototypeActions = GetStructType<
  ThreatPrototypeActionsItem[]
>;

export type ThreatPrototypeActionsItem = GetStructType<{
  ThreatLevelValueMax: number;
  ThreatLevelValueMin: number;
  ThreatValueFreezeTimeSeconds: number;
  ThreatValueLossPerSecond: number;
  Type: EThreatActionType;
}>;

export type ThreatPrototypeRelationLevels = GetStructType<ERelationLevel[]>;

export type ThreatPrototypeThreatParams = GetStructType<
  ThreatPrototypeThreatParamsItem[]
>;

export type ThreatPrototypeThreatParamsItem = GetStructType<{
  ConfidenceDropToZeroTimeSeconds: number;
  RelationLevels: ThreatPrototypeRelationLevels;
  SoundType: ESoundEventType;
  ThreatValue: number;
  Type: EThreatType;
}>;

export type TradePrototype = GetStructType<{
  bInfiniteMoney: boolean;
  BuyDiscounts: TradePrototypeBuyDiscounts;
  Money: number;
  RefreshConditionSID: string;
  SellDiscounts: TradePrototypeSellDiscounts;
  SID: string;
  TradeGenerators: TradePrototypeTradeGenerators;
  TradeTimeLength: number;
  TradeTimeStart: number;
}>;

export type TradePrototypeBuyDiscounts = GetStructType<
  TradePrototypeBuyDiscountsItem[]
>;

export type TradePrototypeBuyDiscountsItem = GetStructType<{
  ConditionSID: string;
  Modifier: number;
}>;

export type TradePrototypeBuyLimitations = GetStructType<EItemType[]>;

export type TradePrototypeSellDiscounts = GetStructType<
  TradePrototypeBuyDiscountsItem[]
>;

export type TradePrototypeTradeGenerators = GetStructType<
  TradePrototypeTradeGeneratorsItem[]
>;

export type TradePrototypeTradeGeneratorsItem = GetStructType<{
  ArmorSellMinDurability: number;
  BuyLimitations: TradePrototypeBuyLimitations;
  BuyModifier: number;
  ConditionSID: string;
  ItemGeneratorPrototypeSID: string;
  SellModifier: number;
  WeaponSellMinDurability: number;
}>;

export type TradeTestBoolProviderPrototype = GetStructType<{
  Days: number;
  Faction: string;
  Hours: number;
  ProviderSID: string;
  ProviderSIDs: CoreVariableHead;
  Ranks: TradeTestBoolProviderPrototypeRanks;
  ReputationThreshold: number;
  SID: string;
  Type: EBoolProviderType;
}>;

export type TradeTestBoolProviderPrototypeRanks = GetStructType<ERank[]>;

export type UpdatePopupPrototype = GetStructType<{
  SaveFileVersion: number;
  SID: string;
  TabData: UpdatePopupPrototypeTabData;
}>;

export type UpdatePopupPrototypeContentData = StringArray;

export type UpdatePopupPrototypeTabData = GetStructType<
  UpdatePopupPrototypeTabDataItem[]
>;

export type UpdatePopupPrototypeTabDataItem = GetStructType<{
  Background: string;
  ContentData: UpdatePopupPrototypeContentData;
  ContentSID: string;
  TabBackground: string;
  TabSID: string;
}>;

export type UpgradePrototype = GetStructType<{
  AttachPrototypeSIDs: SingletonConstantZombie;
  BaseCost: number;
  BlockingGlobalVariables: UpgradePrototypeBlockingGlobalVariables;
  BlockingUpgradePrototypeSIDs: NPCPrototypeSkills;
  ConnectionLines: UpgradePrototypeConnectionLines;
  DiscountCoefficient: number;
  EffectPrototypeSIDs: UpgradePrototypeEffectPrototypeSIDs;
  HiddenWihoutItem: boolean;
  Hint: string;
  HorizontalPosition: number;
  Icon: string;
  ID: number;
  Image: string;
  InterchangeableUpgradePrototypeSIDs: NPCPrototypeSkills;
  IsModification: boolean;
  LocalizationSID: string;
  RepairCostModifier: number;
  RequiredGlobalVariables: UpgradePrototypeRequiredGlobalVariables;
  RequiredItemPrototypeSIDs: NPCPrototypeSkills;
  RequiredUpgradePrototypeSIDs: CoreVariableHead;
  SID: string;
  Skills: NPCPrototypeSkills;
  Text: string;
  UpgradeCancelSound: string;
  UpgradeModificationSound: string;
  UpgradeSound: string;
  UpgradeTargetPart: EUpgradeTargetPartType;
  VerticalPosition: EUpgradeVerticalPosition;
}>;

export type UpgradePrototypeBlockingGlobalVariables = GetStructType<
  DoorPrototypeLockedByScenarioFlagItem[]
>;

export type UpgradePrototypeConnectionLines = GetStructType<
  EConnectionLineState[]
>;

export type UpgradePrototypeEffectPrototypeSIDs = StringArray;

export type UpgradePrototypeRequiredGlobalVariables = GetStructType<
  DoorPrototypeLockedByScenarioFlagItem[]
>;

export type UserNotificationPrototype = GetStructType<{
  ID: number;
  SID: string;
  Sound: string;
  Text: string;
  Title: string;
  Type: EUserNotificationType;
}>;

export type VisionScannerPrototype = GetStructType<{
  AnglePercentToScorePenaltyCurve: string;
  CentralVisionDistance: number;
  DaytimeDistanceAndAnglesVisibilityPercentModificationCurve: string;
  DistancePercentToScorePenaltyCurve: string;
  HorizontalVisionHalvedAngleDegrees: number;
  LoseTracePointDelta: number;
  LoseVisionAngleExtensionMultiplier: number;
  LoseVisionDistanceExtensionMultiplier: number;
  LostVisibilityFreezeTimeSeconds: number;
  LostVisibilityScorePerSecondLoss: number;
  LuminanceToDistanceFlashlightPenaltyFactor: number;
  LuminanceToDistanceIlluminatedPenaltyFactor: number;
  LuminanceToDistanceNVGPenaltyFactor: number;
  LuminanceToDistancePenaltyFactor: number;
  LuminanceToScoreFlashlightPenaltyFactor: number;
  LuminanceToScoreIlluminatedPenaltyFactor: number;
  LuminanceToScoreNVGPenaltyFactor: number;
  LuminanceToScorePenaltyFactor: number;
  MaxVisibilityScore: number;
  MinCombatHoldPositionSignificantVisibilityScore: VisionScannerPrototypeMinSignificantVisibilityScore;
  MinCombatSignificantVisibilityScore: VisionScannerPrototypeMinSignificantVisibilityScore;
  MinCombatSurpriseEnemyLocationSignificantVisibilityScore: VisionScannerPrototypeMinSignificantVisibilityScore;
  MinSignificantVisibilityScore: VisionScannerPrototypeMinSignificantVisibilityScore;
  PeripheralVisionDistance: number;
  SID: string;
  SurpriseEnemyLocationDistance: number;
  TooCloseVisionDistance: number;
  TooCloseVisionDistanceMultiplier: number;
  VerticalVisionHalvedAngleDegrees: number;
}>;

export type VisionScannerPrototypeMinSignificantVisibilityScore = GetStructType<
  number[]
>;

export type VisionTickPrototype = GetStructType<{
  NPCDeadBudget: number;
  NPCEnemyBudget: number;
  NPCNotEnemyBudget: number;
  OtherTargetsBudget: number;
  PlayerEnemyBudget: number;
  PlayerFlashlightBudget: number;
  PlayerNotEnemyBudget: number;
  PlayerSeesNPCBudget: number;
  PopulateTargetsDelay: number;
  SID: string;
}>;

export type VoiceModulatorPrototype = GetStructType<{
  AuxBusControlValue: number;
  AuxBusPath: string;
  ObjectOffSFX: string;
  ObjectOnSFX: string;
  PresetRTPCPath: string;
  PresetRTPCValue: number;
  SID: string;
}>;

export type WaterVariable = GetStructType<
  WaterVariableRainyWaterMaterialsItem[]
>;

export type WaterVariableRainyWaterMaterialsItem = GetStructType<{
  RainyWater: string;
  RegularWater: string;
}>;

export type WeaponAttributesPrototype = GetStructType<{
  AimShellShutterSocketName: string;
  AIParameters: WeaponAttributesPrototypeAIParameters;
  AnimBlueprint: string;
  DefaultWeaponSettingsSID: string;
  MuzzleSocketName: string;
  ParticlesBasedOnHeating: AssetLibraryUIIcons;
  ShellShutterSocketName: string;
  SID: string;
}>;

export type WeaponAttributesPrototypeAIParameters = GetStructType<{
  BehaviorTypes: WeaponAttributesPrototypeBehaviorTypes;
}>;

export type WeaponAttributesPrototypeBehaviorTypes = GetStructType<
  { [key in Rank]: WeaponAttributesPrototypeMaster } & {
    Zombie: WeaponAttributesPrototypeMaster;
  }
>;

export type WeaponAttributesPrototypeLong = GetStructType<{
  IgnoreDispersionMaxShots: number;
  IgnoreDispersionMinShots: number;
  MaxSecondsDelay: number;
  MaxShots: number;
  MinSecondsDelay: number;
  MinShots: number;
}>;

export type WeaponAttributesPrototypeMaster = GetStructType<
  { [k in WeaponShootDistance]: WeaponAttributesPrototypeLong } & {
    CharacterWeaponSettingsSID: string;
    CombatEffectiveFireDistanceMax: string;
    CombatEffectiveFireDistanceMin: string;
    NonAutomaticWeaponShotDelay: number;
  }
>;

export type WeaponFloatProviderPrototype = GetStructType<{
  ProviderSIDs: CoreVariableHead;
  SID: string;
  Type: EFloatProviderType;
  Value: number;
}>;

export type WeaponGeneralSetupPrototype = GetStructType<{
  AdditionalBulletsAfterReloadingCount: number;
  AimGamepadAimAssistPresetSID: string;
  AimingCurve: string;
  AimingEffects: WeaponGeneralSetupPrototypeAimingEffects;
  AimingFOVModifier: number;
  AimingMovementSpeedModifier: number;
  AimingSound: string;
  AimingTime: number;
  AimingWeaponFOVCurve: string;
  AimMouseAimAssistPresetSID: string;
  AimVFXSocketMinAlpha: number;
  AmmoCaliber: EAmmoCaliber;
  AmmoPerShot: string;
  AmmoTypeProjectiles: WeaponGeneralSetupPrototypeAmmoTypeProjectiles;
  BoltActionState: EBoltActionWeaponState;
  bSpawnShell: boolean;
  BulletMeshPath: string;
  BulletsSockets: SpawnActorPrototypeLockReceivers;
  CameraRecoilPatternBlendCurve: string;
  CameraRecoilPatternPath: string;
  CompatibleAttachments: WeaponGeneralSetupPrototypeCompatibleAttachments;
  CooldownTime: number;
  CrosshairType: ECrosshairType;
  DefaultEjectMagazineSocketName: string;
  DefaultFireType: EFireType;
  DefaultInsertMagazineSocketName: string;
  DispersionParams: WeaponGeneralSetupPrototypeDispersionParams;
  DisplayBP: string;
  FireEventBreak: string;
  FireEventLoop: string;
  FireEventOneShot: string;
  FireInterval: number;
  FireIntervalModifiers: WeaponGeneralSetupPrototypeFireIntervalModifiers;
  FireIntervalRTPCParameter: string;
  FireQueueCount: number;
  FireTypes: WeaponGeneralSetupPrototypeFireTypes;
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
  PreinstalledAttachmentsItemPrototypeSIDs: WeaponGeneralSetupPrototypePreinstalledAttachmentsItemPrototypeSIDs;
  ProjectileSpawnOffset: number;
  RecoilInterval: number;
  RecoilParams: WeaponGeneralSetupPrototypeRecoilParams;
  ReloadTypes: WeaponGeneralSetupPrototypeReloadTypes;
  ShootCameraShakePrototypeSID: string;
  ShootingAnimationNumberToSkip: number;
  ShouldOverrideCooldownAfterShots: boolean;
  ShowCrosshair: boolean;
  ShowEquipmentTime: number;
  SID: string;
  SilencerRTPCParameter: string;
  SingleBulletReloadTimeMultiplier: number;
  SpeedCoef: number;
  TacticalReloadTimeMultiplier: number;
  ToggleOffsetAimingConditionSID: string;
  UnloadTime: number;
  UpgradePrototypeSIDs: WeaponGeneralSetupPrototypeUpgradePrototypeSIDs;
  WeaponDurabilityCurve: string;
  WeaponInWorldUnloadSound: string;
  WeaponJamEvent: string;
  WeaponJamParams: WeaponGeneralSetupPrototypeWeaponJamParams;
  WeaponReloadTimePerAttachment: WeaponGeneralSetupPrototypeWeaponReloadTimePerAttachment;
  WeaponStaticMeshParts: WeaponGeneralSetupPrototypeWeaponStaticMeshParts;
  WeaponType: EWeaponType;
  WeaponTypeSoundSwitch: string;
}>;

export type WeaponGeneralSetupPrototypeAdditionalMeshes = GetStructType<
  WeaponGeneralSetupPrototypeAdditionalMeshesItem[]
>;

export type WeaponGeneralSetupPrototypeAdditionalMeshesItem = GetStructType<{
  MeshPrototypeSID: string;
  Socket: string;
}>;

export type WeaponGeneralSetupPrototypeAimingEffects = GetStructType<{
  Effects: NPCPrototypeSkills;
  PlayerOnlyEffects: NPCPrototypeSkills;
}>;

export type WeaponGeneralSetupPrototypeAimModifiers = GetStructType<{
  AimCrouchModifier: number;
  AimFullCrouchModifier: number;
  AimModifier: number;
}>;

export type WeaponGeneralSetupPrototypeAmmoTypeProjectiles = GetStructType<
  EffectPrototypeAmmoTypeProjectilesItem[]
>;

export type WeaponGeneralSetupPrototypeCompatibleAttachments = GetStructType<
  WeaponGeneralSetupPrototypeCompatibleAttachmentsItem[]
>;

export type WeaponGeneralSetupPrototypeCompatibleAttachmentsItem =
  GetStructType<{
    AdditionalMeshes: WeaponGeneralSetupPrototypeAdditionalMeshes;
    AdditionalPlankMeshPrototypeSID: string;
    AdditionalPlankSocket: string;
    AimMuzzleVFXSocket: string;
    AimShellShutterVFXSocket: string;
    AttachPrototypeSID: string;
    BlockingUpgradeIds: NPCPrototypeSkills;
    BlockingUpgradeIDs: string;
    IconPosX: number;
    IconPosY: number;
    MeshPrototypeSID: string;
    Muzzle: string;
    RequiredUpgradeIDs: NPCPrototypeSkills;
    Socket: string;
    WeaponSpecificIcon: string;
  }>;

export type WeaponGeneralSetupPrototypeDispersionParams = GetStructType<{
  FirstShotDispersionRadius: number;
  ShootingStateParams: WeaponGeneralSetupPrototypeShootingStateParams;
}>;

export type WeaponGeneralSetupPrototypeFireIntervalModifiers = GetStructType<
  number[]
>;

export type WeaponGeneralSetupPrototypeFireTypes = GetStructType<EFireType[]>;

export type WeaponGeneralSetupPrototypeHealthPointsModifiers = GetStructType<{
  HealthPercentThreshold: number;
  HealthPointsModifier: number;
}>;

export type WeaponGeneralSetupPrototypeHipModifiers = GetStructType<{
  HipCrouchModifier: number;
  HipFullCrouchModifier: number;
  HipJumpModifier: number;
  HipModifier: number;
}>;

export type WeaponGeneralSetupPrototypeMaterials = GetStructType<
  MeshPrototypeMaterialsItem[]
>;

export type WeaponGeneralSetupPrototypeMovementSpeedModifiers = GetStructType<{
  MovementSpeedModifier: number;
}>;

export type WeaponGeneralSetupPrototypeOffsetAimModifiers = GetStructType<{
  OffsetAimCrouchModifier: number;
  OffsetAimFullCrouchModifier: number;
  OffsetAimModifier: number;
}>;

export type WeaponGeneralSetupPrototypePreinstalledAttachmentsItemPrototypeSIDs =
  GetStructType<
    WeaponGeneralSetupPrototypePreinstalledAttachmentsItemPrototypeSIDsItem[]
  >;

export type WeaponGeneralSetupPrototypePreinstalledAttachmentsItemPrototypeSIDsItem =
  GetStructType<{
    AttachSID: string;
    bHiddenInInventory: boolean;
  }>;

export type WeaponGeneralSetupPrototypeRadiusExtensionModifiers =
  GetStructType<{
    MaxRadiusExtensionModifier: number;
    PerIterationRadiusExtensionModifier: number;
    RadiusExtensionBulletCount: number;
  }>;

export type WeaponGeneralSetupPrototypeRadiusNormalizationModifiers =
  GetStructType<{
    RadiusNormalizationDelay: number;
    RadiusNormalizationInterval: number;
  }>;

export type WeaponGeneralSetupPrototypeRecoilParams = GetStructType<{
  CameraAimRecoilPatternLoopStartKeyIndex: number;
  CameraHipRecoilPatternLoopStartKeyIndex: number;
  CameraRecoilPatternBlendCurve: string;
  CameraRecoilPatternPath: string;
  RecoilMaxPitch: number;
  RecoilPatternInterval: number;
  RecoilRadius: number;
  ShootingStateParams: WeaponGeneralSetupPrototypeShootingStateParams;
}>;

export type WeaponGeneralSetupPrototypeReloadTypes = GetStructType<
  EAnimationReloadTypes[]
>;

export type WeaponGeneralSetupPrototypeShootingStateParams = GetStructType<{
  AimModifiers: WeaponGeneralSetupPrototypeAimModifiers;
  HealthPointsModifiers: WeaponGeneralSetupPrototypeHealthPointsModifiers;
  HipModifiers: WeaponGeneralSetupPrototypeHipModifiers;
  MovementSpeedModifiers: WeaponGeneralSetupPrototypeMovementSpeedModifiers;
  OffsetAimModifiers: WeaponGeneralSetupPrototypeOffsetAimModifiers;
  RadiusExtensionModifiers: WeaponGeneralSetupPrototypeRadiusExtensionModifiers;
  RadiusNormalizationModifiers: WeaponGeneralSetupPrototypeRadiusNormalizationModifiers;
}>;

export type WeaponGeneralSetupPrototypeUpgradePrototypeSIDs = StringArray;

export type WeaponGeneralSetupPrototypeWeaponJamParams = GetStructType<
  WeaponGeneralSetupPrototypeWeaponJamParamsItem[]
>;

export type WeaponGeneralSetupPrototypeWeaponJamParamsItem = GetStructType<{
  FullJamTime: number;
  JamChanceCoef: number;
}>;

export type WeaponGeneralSetupPrototypeWeaponReloadTimePerAttachment =
  GetStructType<WeaponGeneralSetupPrototypeWeaponReloadTimePerAttachmentItem[]>;

export type WeaponGeneralSetupPrototypeWeaponReloadTimePerAttachmentItem =
  GetStructType<{
    AttachPrototypeSID: string;
    FullReloadTimeMultiplier: number;
    SingleBulletReloadTimeMultiplier: number;
    TacticalReloadTimeMultiplier: number;
    TwinAuxReloadTimeMultiplier: number;
    TwinReloadTimeMultiplier: number;
    TwinTacticalAuxReloadTimeMultiplier: number;
    TwinTacticalReloadTimeMultiplier: number;
    UnloadTime: number;
  }>;

export type WeaponGeneralSetupPrototypeWeaponStaticMeshParts = GetStructType<
  WeaponGeneralSetupPrototypeWeaponStaticMeshPartsItem[]
>;

export type WeaponGeneralSetupPrototypeWeaponStaticMeshPartsItem =
  GetStructType<{
    Materials: WeaponGeneralSetupPrototypeMaterials;
    MeshPath: string;
    SocketName: string;
  }>;

export type WeaponPrototype = GetStructType<{
  BaseDurability: number;
  Cost: number;
  EffectPrototypeSIDs: NPCPrototypeSkills;
  GeneralWeaponSetup: string;
  Icon: string;
  IsQuestItem: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeleeWeaponSID: string;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  NPCWeaponAttributes: string;
  PhysicsInteractionPrototypeSID: string;
  PlayerWeaponAttributes: string;
  PreinstalledUpgrades: WeaponPrototypePreinstalledUpgrades;
  SectionSettings: WeaponPrototypeSectionSettings;
  SID: string;
  Type: EItemType;
  Weight: number;
}>;

export type WeaponPrototypePreinstalledUpgrades = StringArray;

export type WeaponPrototypeSectionSettings = GetStructType<
  ArmorPrototypeSectionSettingsItem[]
>;

export type WeatherChainPrototype = GetStructType<{
  SID: string;
  SourceWeather: EWeather;
  TargetWeather: EWeather;
  TransitionSteps: WeatherChainPrototypeTransitionSteps;
}>;

export type WeatherChainPrototypeTransitionSteps = GetStructType<
  WeatherChainPrototypeTransitionStepsItem[]
>;

export type WeatherChainPrototypeTransitionStepsItem = GetStructType<{
  WeatherChains: WeatherChainPrototypeWeatherChains;
  WeatherChainWeight: number;
}>;

export type WeatherChainPrototypeWeatherChains = GetStructType<
  WeatherChainPrototypeWeatherChainsItem[]
>;

export type WeatherChainPrototypeWeatherChainsItem = GetStructType<{
  WeatherTransitionTimeMultiplier: number;
  WeatherType: EWeather;
}>;

export type WeatherPrototype = GetStructType<{
  AltitudeCurveIndex: number;
  SID: string;
  WeatherParams: WeatherPrototypeWeatherParams;
  WeatherTransitions: WeatherPrototypeWeatherTransitions;
}>;

export type WeatherPrototypeBloom = GetStructType<{
  BloomIntensity: number;
  BloomThreshold: number;
}>;

export type WeatherPrototypeClouds = GetStructType<{
  CiNAmount: number;
  CiNContrast: number;
  CiNDensity: number;
  CinSubShape: number;
  CirrusContrast: number;
  CirrusDecay: number;
  CirrusDensity: number;
  CloudSpeed: number;
  CloudSpeedXY: AbilityPrototypeRadius;
  CloudsPhaseShift: number;
  CloudsTile: number;
  CNContrast: number;
  CNDecay: number;
  CNDensity: number;
  CNDetailAmount: number;
  CNDetailContrast: number;
  CNMaxDensity: number;
  CNSize: number;
  Color1: WeatherPrototypeColor1;
  Color2: WeatherPrototypeColor1;
  GlobalDensity: number;
  StratusAmount: number;
  StratusContrast: number;
  StratusDetailAmount: number;
  StratusDetailContrast: number;
  VolumetricMSContribution: number;
  VolumetricMSEccentricity: number;
  VolumetricMSOcclusion: number;
  VolumetricPhaseBlend: number;
  VolumetricPhaseG: number;
  VolumetricPhaseG2: number;
  VTCloudDetailScale: number;
  VTCloudScale: number;
}>;

export type WeatherPrototypeColor1 = GetStructType<{
  A: number;
  B: number;
  G: number;
  R: number;
}>;

export type WeatherPrototypeColorGain = GetStructType<{
  W: number;
  X: number;
  Y: number;
  Z: number;
}>;

export type WeatherPrototypeColorGrading = GetStructType<{
  ColorContrast: WeatherPrototypeColorGain;
  ColorGain: WeatherPrototypeColorGain;
  ColorGamma: WeatherPrototypeColorGain;
  ColorOffset: WeatherPrototypeColorGain;
  ColorSaturation: WeatherPrototypeColorGain;
  Highlights: WeatherPrototypeHighlights;
  Midtones: WeatherPrototypeMidtones;
  Shadows: WeatherPrototypeShadows;
}>;

export type WeatherPrototypeFilm = GetStructType<{
  FilmBlackClip: number;
  FilmChannelMixerBlue: WeatherPrototypeColor1;
  FilmChannelMixerGreen: WeatherPrototypeColor1;
  FilmChannelMixerRed: WeatherPrototypeColor1;
  FilmContrast: number;
  FilmDynamicRange: number;
  FilmHealAmount: number;
  FilmSaturation: number;
  FilmShadowTint: WeatherPrototypeColor1;
  FilmShadowTintAmount: number;
  FilmShadowTintBlend: number;
  FilmShoulder: number;
  FilmSlope: number;
  FilmToe: number;
  FilmToeAmount: number;
  FilmWhiteClip: number;
  FilmWhitePoint: WeatherPrototypeColor1;
}>;

export type WeatherPrototypeHighlights = GetStructType<{
  ColorContrast: WeatherPrototypeColorGain;
  ColorCorrectionHighlightsMin: number;
  ColorGain: WeatherPrototypeColorGain;
  ColorGamma: WeatherPrototypeColorGain;
  ColorOffset: WeatherPrototypeColorGain;
  ColorSaturation: WeatherPrototypeColorGain;
}>;

export type WeatherPrototypeMidtones = GetStructType<{
  ColorContrast: WeatherPrototypeColorGain;
  ColorGain: WeatherPrototypeColorGain;
  ColorGamma: WeatherPrototypeColorGain;
  ColorOffset: WeatherPrototypeColorGain;
  ColorSaturation: WeatherPrototypeColorGain;
}>;

export type WeatherPrototypeShadows = GetStructType<{
  ColorContrast: WeatherPrototypeColorGain;
  ColorCorrectionShadowsMax: number;
  ColorGain: WeatherPrototypeColorGain;
  ColorGamma: WeatherPrototypeColorGain;
  ColorOffset: WeatherPrototypeColorGain;
  ColorSaturation: WeatherPrototypeColorGain;
}>;

export type WeatherPrototypeSkyAtmosphere = GetStructType<{
  AerialPespectiveViewDistanceScale: number;
  HeightFogContribution: number;
  MieAbsorption: WeatherPrototypeColor1;
  MieAbsorptionScale: number;
  MieAnisotropy: number;
  MieExponentialDistribution: number;
  MieScattering: WeatherPrototypeColor1;
  MieScatteringScale: number;
  MultiScatteringFactor: number;
  OtherAbsorption: WeatherPrototypeColor1;
  OtherAbsorptionScale: number;
  RayleighExponentialDistribution: number;
  RayleighScattering: WeatherPrototypeColor1;
  RayleighScatteringScale: number;
  SkyLuminanceFactor: WeatherPrototypeColor1;
}>;

export type WeatherPrototypeSkyLight = GetStructType<{
  Intensity: number;
  MinOcclusion: number;
  OcclusionExponent: number;
  VolumetricScatteringIntensity: number;
}>;

export type WeatherPrototypeSun = GetStructType<{
  BloomMaxBrightness: number;
  BloomScale: number;
  BloomThreshold: number;
  Intensity: number;
  Temperature: number;
  VolumetricScatteringIntensity: number;
}>;

export type WeatherPrototypeWeatherParams = GetStructType<
  WeatherPrototypeWeatherParamsItem[]
>;

export type WeatherPrototypeWeatherParamsItem = GetStructType<{
  AutoExposureBias: number;
  Bloom: WeatherPrototypeBloom;
  CloudLuminanceMultiplier: number;
  Clouds: WeatherPrototypeClouds;
  ColorGrading: WeatherPrototypeColorGrading;
  Film: WeatherPrototypeFilm;
  FogDensity: number;
  FogHeightFalloff: number;
  FogHeightOffset: number;
  FogInscatteringColor: WeatherPrototypeColor1;
  Moon: WeatherPrototypeSun;
  MoonPhase: number;
  MoonScale: AIGlobalRelativeLocation;
  SecondFogDensity: number;
  SecondFogHeightFalloff: number;
  SkyAtmosphere: WeatherPrototypeSkyAtmosphere;
  SkyLight: WeatherPrototypeSkyLight;
  SoundCue: string;
  Sun: WeatherPrototypeSun;
  SunMoonDiskLuminanceMultiplier: number;
  Time: number;
  VolumetricFogAlbedo: WeatherPrototypeColor1;
  VolumetricFogEmissive: WeatherPrototypeColor1;
  VolumetricFogExtinctionScale: number;
}>;

export type WeatherPrototypeWeatherTransitions = GetStructType<
  WeatherPrototypeWeatherTransitionsItem[]
>;

export type WeatherPrototypeWeatherTransitionsItem = GetStructType<{
  bIsDirectTransition: boolean;
  BlendChance: number;
  Timer24Normalized: number;
  WeatherPrototypeSID: string;
}>;

export type WeatherSelectionPrototype = GetStructType<
  {
    EmissionPrototypeSID: string;
    Priority: number;
    SID: string;
  } & Record<WeatherSelection, WeatherSelectionPrototypeFogy>
>;

export type WeatherSelectionPrototypeFogy = GetStructType<{
  bAllowInDialogueTransition: boolean;
  BlendWeight: number;
  BlendWeightIncrease: number;
  MaximumCooldownWeatherAmount: number;
  MaximumRepeatAmount: number;
  WeatherDurationMax: number;
  WeatherDurationMin: number;
}>;

export type CreditRoles = GetStructType<CreditRolesItem[]>;
