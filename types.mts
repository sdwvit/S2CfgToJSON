// noinspection JSUnusedGlobalSymbols

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
} from "./enums.mts";

import {
  Ability,
  MeshAttachment,
  Faction,
  Rank,
  Reaction,
  RGBA,
  SID,
  Vec2,
  Vec3,
  Vec4,
  WeatherSelection,
  Rot,
  VecRot,
  ItemGeneratorEntry,
  GroomCategory,
  FactionGoalType,
  VecRotTemp,
  Conditions,
  ContextualAction,
} from "./utility-types.mts";

import { GetStructType } from "./Struct.mts";

export type AbilityPrototype = GetStructType<{
  AbilityPreparationTime: number;
  AbilityProbability: string;
  AbilityTags: string[];
  AbilityType: EAbility;
  ActivateAnomalySyncTag: string;
  ActivationNiagaraPath: string;
  ActivationRadius: number;
  AdjustLocation: boolean;
  AgentToEnemyVisibilityParams: {
    CanSeeThroughOcluders: boolean;
    DistanceRange: Vec2;
    VisibilityTestChannel: ECollisionChannel;
  };
  AgentToWeaponVisibilityParams: {
    CanSeeThroughOcluders: boolean;
    DistanceRange: Vec2;
    OwnerEyesOffset: number;
    VisibilityTestChannel: ECollisionChannel;
    VisibilityTestRadius: number;
  };
  AimingDuration: number;
  AkEvents: {
    AkEvent: string;
    AkSwitches: string[];
  }[];
  Anomalies: {
    NiagaraPath: string;
    SID: string;
  }[];
  AnomalyLifetime: number;
  ApplyOnAgents: boolean;
  ApplyOnPlayer: boolean;
  ArmorDamage: number;
  ArmorPiercing: number;
  AttachVFXBoneNames: string[];
  AttackCollisionProfile: string;
  AttackConditionName: string;
  AttackConditions: {
    StartAttackMaxAngle: number;
    StartAttackMaxAngleToEnemyDirection: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMinDistance: number;
  };
  AttackParams: {};
  AttackSyncTag: string;
  bCanShootLevitatingObject: boolean;
  bIsControllerAttack: boolean;
  bIsFaustAttack: boolean;
  Bleeding: number;
  BleedingChanceIncrement: number;
  BlinkDelay: number;
  BlinkEffect: string;
  BlinkSoundEvent: string;
  BonesDamageSet: {
    DamageBone: EDamageBone;
  }[];
  bPullToOwner: boolean;
  bUseOwnerLocation: boolean;
  CalculateDamageOnlyFromPlayer: boolean;
  CameraFocusOffset: number;
  CameraModifierClass: string;
  CanBePerformedOnNPC: boolean;
  CanBePerformedOnPlayer: boolean;
  CanBeTriggeredByAnyEnemy: boolean;
  CancelAbilitiesWithTag: string[];
  CollisionProfileName: string;
  ConditionalCooldowns: {
    ConditionTag: string;
    TriggeredCooldowns: {
      bForce: boolean;
      CooldownTag: string;
      Duration: number;
    }[];
  }[];
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
  DamageParams: {
    ArmorDamage: number;
    ArmorPiercing: number;
    Bleeding: number;
    BleedingChanceIncrement: number;
    bShouldIgnoreArmor: boolean;
    Damage: number;
    DamageSource: EDamageSource;
    DamageType: EDamageType;
  };
  DamageRadius: number;
  DamageSource: EDamageSource;
  DamageType: EDamageType;
  DamageVolumeMultiplier: string;
  DebugTag: string;
  DisarmMode: EThrowQueueDisarmMode;
  DistanceRange: Vec2;
  DPS: number;
  DragDelay: number;
  Duration: number;
  Effects: {
    Chance: number;
    EffectPrototypeSID: string;
  }[];
  EffectsDistanced: {
    Chance: number;
    EffectPrototypeSID: string;
    MaxDistance: number;
    MinDistance: number;
  }[];
  EffectsRadius: number;
  EffectsTriggerInterval: number;
  EnemyVisibilityParams: {
    CanSeeThroughOcluders: boolean;
    DistanceRange: Vec2;
    OwnerEyesOffset: number;
    VisibilityTestChannel: ECollisionChannel;
    VisibilityTestRadius: number;
  };
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
  HitDamage: Vec2;
  HitDetectionAngle: number;
  HitDetectionDistance: number;
  HitReactionStartPhase: EAbilityStatePhase;
  IgnoredCalibersSet: {
    IgnoredCaliber: EAmmoCaliber;
  }[];
  LevitationAngularAccelerationRate: number;
  LevitationAngularVelocity: number;
  LevitationDisplacementFrequency: Vec3;
  LevitationHeight: Vec2;
  LevitationSpeed: number;
  LimitAngle: number;
  MaxActivationDistance: string;
  MaxAttacksInSeries: number;
  MaxCooldown: number;
  MaxDiscoveryRadius: number;
  MaxHeightAboveGround: number;
  MaxIntervalBetweenDamage: number;
  MaxLevitationDisplacement: Vec3;
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
  Montages: string[];
  MontagesMove: string[];
  NPCDamageMultiplier: number;
  OptionalObjTypeList: {};
  PlayerLookAtBoneName: string;
  PlayerLookAtEnterDuration: number;
  PlayerLookAtPresetName: string;
  PlayerPushForce: number;
  PossessedWeaponParams: {
    GroundOffset: number;
    MaxLevitationDisplacement: Vec3;
    MaxLevitationFrequency: Vec3;
    MovementSpeed: number;
    RotationSpeed: number;
    ShootingDuration: {
      Max: number;
      Min: number;
    };
  };
  PsyAbilityAimOffset: {
    AnimOffset: string;
    InterpolationSpeed: number;
    MaxAngle: number;
  };
  PsyAttackSyncTag: string;
  PullToOwner: boolean;
  PullToOwnerRadius: Vec2;
  RadialImpulse: number;
  Radius: number;
  RemoveCooldownTags: string[];
  RequiredObjTypeList: EObjType[];
  ShieldParams: {
    AttachToBone: string;
    BlueprintPath: string;
    IsStationary: boolean;
    MaxTimeSinceLastDamage: number;
    MinAccumulatedDamage: number;
    MinDistToEnemy: number;
    ShieldSpawnDelay: number;
  };
  ShiftbyX: number;
  ShouldIgnoreArmor: boolean;
  SID: string;
  SpawnAbilityBackSpawnAttempts: number;
  SpawnAbilityDistance: Vec2;
  SpawnAbilityFrontAngle: string;
  SpawnAbilityFrontSpawnAttempts: number;
  SpawnAbilityItemSIDs: string[];
  SpawnRadius: string;
  SquadLimit: number;
  SummonParams: {
    MaxInstancesInGroup: number;
    SpawnAngleDistribution: Vec2;
    SpawnAngleInitialOffset: Vec2;
    SpawnAroundEnemy: boolean;
    SpawnDelay: number;
    SpawnEffects: boolean;
    SpawnRadius: Vec2;
    SummonObjects: {
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
    }[];
    SwapPlaces: boolean;
  };
  SyncTag: string;
  TargetBone: string;
  ThrowAbilityCorpseTimeToHitSeconds: number;
  ThrowAbilityDamage: Vec2;
  ThrowAbilityDamageVolumeMultiplier: string;
  ThrowAbilityDistance: Vec2;
  ThrowAbilityFlyingSpeed: number;
  ThrowAbilityHeavyVolumeThreshold: number;
  ThrowAbilityLevitationAngularAccelerationRate: number;
  ThrowAbilityLevitationAngularVelocity: number;
  ThrowAbilityLevitationDisplacementFrequency: Vec3;
  ThrowAbilityLevitationHeight: Vec2;
  ThrowAbilityLevitationSpeed: number;
  ThrowAbilityMaxLevitationDisplacement: Vec3;
  ThrowAbilityThrowCorpses: boolean;
  ThrowAbilityThrowDelay: Vec2;
  ThrowAbilityTimeToHitSeconds: number;
  ThrowAbilityUnpossessSpeedPercent: number;
  ThrowDelay: Vec2;
  ThrowInterval: Vec2;
  ThrowProbability: string;
  ThrowSyncTag: string;
  TimeLimit: number;
  TimeToExplode: number;
  TimeToHitSeconds: number;
  TossLocationRadiusOffset: number;
  TriggeredCooldowns: {
    bForce: boolean;
    CooldownTag: string;
    Duration: number;
  }[];
  UnpossessSpeedPercent: number;
  UseCustomPayload: boolean;
  VisibilityTestChannel: ECollisionChannel;
  VisibilityTestRadius: number;
  VisibilityThresholdSeconds: number;
  VitalCooldownCurve: string;
  VitalThreshold: number;
  VitalType: EVitalType;
  WeaponToEnemyVisibilityParams: {
    CanSeeThroughOcluders: boolean;
    DistanceRange: Vec2;
    OwnerEyesOffset: number;
    VisibilityTestChannel: ECollisionChannel;
    VisibilityTestRadius: number;
  };
  WeaponVFX: string;
  ZombificationType: EZombificationType;
  ZSpawnOffset: number;
}>;

export type AimAssistConePrototype = GetStructType<{
  AimAssistWeightsSID: string;
  AngleCurvePath: string;
  HeightCurvePath: string;
  SID: string;
  TrackedBones: EDamageBone[];
}>;

export type AimAssistPresetPrototype = GetStructType<{
  LostTargetTrackingTime: number;
  MagnetismAimAssistConeSIDs: string[];
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
  WeightRules: {
    Type: EAimAssistWeightType;
    WeightModifier: number;
  }[];
}>;

export type ALifeDirectorScenarioPrototype = GetStructType<{
  ALifeScenarioNPCArchetypesLimitsPerPlayerRank: {
    Rank: ERank;
    Restrictions: {
      AgentType: EAgentType;
      MaxCount: number;
    }[];
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
  ScenarioGroups: {
    AllScenarios: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    CaptureLairs: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    ContextualActions: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Emission: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    EmptyGroup: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Global: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Global_LesserZone: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Hub: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    HumanVsMutants: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    HumanVsMutants_LesserZone: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Local: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Quiet: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
    Swamp_ScenarioGroups: {
      PostSpawnDirectorTimeoutMax: number;
      PostSpawnDirectorTimeoutMin: number;
      ScenarioSIDs: Record<string, { ScenarioWeight: number }>;
      SID: string;
      SpawnDelayMax: number;
      SpawnDelayMin: number;
    };
  };
  Scenarios: Record<
    string,
    {
      PlayerRequiredRank: ERank;
      ScenarioGroupsTarget: EALifeDirectorScenarioTarget;
      ScenarioSquads: {
        AgentPrototypeSID: string;
        AliveMultiplierMax: number;
        AliveMultiplierMin: number;
        bPlayerEnemy: boolean;
        DeadMultiplier: number;
        RelationGroup: number;
        WoundedMultiplier: number;
        AgentArchetype: EAgentArchetype;
      }[];
      SID: string;
    }
  >;
  SID: string;
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
  Factions: Record<
    Faction,
    {
      ALifeFactionGoals: Record<
        FactionGoalType,
        {
          MaxLairs: number;
          MinLairs: number;
          TacticType: EALifeFactionGoalType;
        }
      >;
      ALifeLairExpansionBattleChance: number;
      Faction: Faction;
    }
  >;
  SID: string;
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
  EffectPrototypeSIDs: string[];
  FittingWeaponsSIDs: string[];
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
  BonesToTrace: EObjSkeletalMeshTraceBone[];
  bTraceObjectsOnOverlap: boolean;
  BubblePrototype: {
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
  };
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
  IgnoredProjectileSIDs: string[];
  ImmuneObjPrototypeSIDs: string[];
  InteractionEffectPrototypeSIDs: string[];
  ItemDefaultVelocityMultiplier: number;
  LavaClotTTLMax: number;
  LavaClotTTLMin: number;
  LavaHitEffectPrototypeSIDs: string[];
  LavaItemHitEffectPrototypeSIDs: string[];
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
  ParticlePrototype: {
    CollisionRadiusMax: number;
    CollisionRadiusMin: number;
    DamageRadius: number;
    InitialSpeedInterpolationTime: number;
    InteractionEffectPrototypeSIDs: string[];
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
  };
  ParticleSpawnDelay: number;
  ParticleSpawnHeight: number;
  ParticleSpawnPredictionTime: number;
  PassiveEffectPrototypeSIDs: string[];
  PillowVFXLerpDuration: number;
  PlayerSpiralingPower: number;
  PlayerStanceChangeEffectPrototypeSIDs: {};
  PostInteractionEffectPrototypeSIDs: string[];
  PreInteractionEffectPrototypeSIDs: string[];
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
  ToxicCloudBoxCollision: Vec3;
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

export type ArmorPrototype = GetStructType<{
  ArmorSoundType: string;
  ArtifactSlots: number;
  BaseDurability: number;
  bBlockHead: boolean;
  bPreventFromLimping: boolean;
  Cost: number;
  EffectPrototypeSIDs: string[];
  Icon: string;
  IncreaseSpeedCoef: number;
  Invisible: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemSlotType: EInventoryEquipmentSlot;
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeshGenerator: {
    MeshGeneratorPrototypeSID: string;
    Weight: number;
  }[];
  MeshPrototypeSID: string;
  NoiseCoef: number;
  NpcMeshGenerator: {
    MeshGeneratorPrototypeSID: string;
    Weight: number;
  }[];
  PhysicsInteractionPrototypeSID: string;
  PreinstalledUpgrades: string[];
  Protection: {
    Burn: number;
    ChemicalBurn: number;
    Fall: number;
    PSY: number;
    Radiation: number;
    Shock: number;
    Strike: number;
  };
  ProtectionNPC: {
    Burn: number;
    ChemicalBurn: number;
    Fall: number;
    PSY: number;
    Radiation: number;
    Shock: number;
    Strike: number;
  };
  SectionSettings: {
    BottomPosition: number;
    LeftPosition: number;
    ModuleLineDirection: ELineDirection;
    RightPoition: number;
    SectionIsEnabled: boolean;
    TopPosition: number;
    UpgradeLineDirection: ELineDirection;
    UpgradeTargetPartType: EUpgradeTargetPartType;
  }[];
  SID: string;
  StaggerEffectPrototypeSID: string;
  Type: EItemType;
  UpgradePrototypeSIDs: string[];
  VoiceModulatorSID: string;
  Weight: number;
}>;

export type ArtifactPrototype = GetStructType<{
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
  EffectOnPickPrototypeSIDs: (string | Vec3)[];
  EffectPrototypeSIDs: string[];
  EffectsDisplayTypes: EEffectDisplayType[];
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
  NegativeEffectPrototypeSIDs: string[];
  ParticleOnImpact: string;
  ParticleOnShow: string;
  ParticleStateTransitionFadeIn: string;
  ParticleStateTransitionFadeInDelay: number;
  ParticleStateTransitionFadeOut: string;
  ParticleStateTransitionFadeOutDelay: number;
  Persistent: boolean;
  PhysicsInteractionPrototypeSID: string;
  PlayerDistance: number;
  PositiveEffectPrototypeSIDs: string[];
  Radius: number;
  Rarity: EArtifactRarity;
  ReturnDistanceValue: number;
  ShouldShowEffects: boolean[];
  SID: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StateTransitionDelay: number;
  Strafe: boolean;
  Type: EItemType;
  ViewOffset: Vec3;
  WakeUpEffectSIDs: string[];
  Weight: number;
  WeightDecreaseAmount: number;
  WeightDecreaseDelay: number;
  WeightDecreaseRate: number;
}>;

export type ArtifactSpawnerPrototype = GetStructType<{
  ExcludeRules: EArtifactSpawnerExcludeRule[];
  Experienced: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  ID: number;
  ListOfArtifacts: string[];
  Master: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  Newbie: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  SID: string;
  SingleArtifactSpawner: boolean;
  UseListOfArtifacts: boolean;
  Veteran: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
}>;

export type AttachMeshPrototype = GetStructType<{
  "3": {
    MaterialGroup: string;
    MaterialSlot: number;
    Variations: {
      MaterialPath: string;
      Weight: number;
    }[];
  };
  AdditionalCollisions: {
    BoxCollisions: {
      CollisionProfileName: string;
      ComponentName: string;
      Extent: Vec3;
      PhysicalMaterialPath: string;
      SocketName: string;
      TransformTranslation: Vec3;
    }[];
    CapsuleCollisions: {
      CollisionProfileName: string;
      ComponentName: string;
      HalfHeight: number;
      PhysicalMaterialPath: string;
      Radius: number;
      SocketName: string;
      TransformRotator: Rot;
      TransformTranslation: Vec3;
    }[];
  };
  AdditionalMesh: {
    BodyMeshSID: string;
    MaterialCount: number;
    MeshPath: string;
    SkeletonPath: string;
  }[];
  AnimPath: string;
  BodyMeshType: EBodyMeshType;
  ComponentTags: string[];
  FaceBlockingBlendMaskPrototypeSID: string;
  GroomBlockingMappingPrototypeSID: string;
  GroomPrototypeSID: string;
  IsSkeletal: boolean;
  ItemPrototypeSID: string;
  LODSyncMapping: number[];
  MaterialCount: number;
  MaterialLODs: {
    LODLevel: number;
    LODSectionIndex: number;
    MaterialPostfix: string;
  }[];
  Materials: {
    CustomData: {
      Chevron_index: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      Damage: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        Variations: {
          MaterialInstanceParameters: {
            ParameterName: string;
            TexturePath: string;
          }[];
          Weight: number;
        }[];
      };
      DamageIndex_01: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      DamageIndex_02: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      DamagePoss_01: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      DamagePoss_02: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      DamageRotation_Index_01: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      DamageRotation_Index_02: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      DamageScale_Index_01: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      DamageScale_Index_02: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      DefectIntensity_Index: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      Defects: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        Variations: {
          MaterialInstanceParameters: {
            ParameterName: string;
            TexturePath: string;
          }[];
          Weight: number;
        }[];
      };
      Dirt: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        Variations: {
          MaterialInstanceParameters: {
            ParameterName: string;
            TexturePath: string;
          }[];
          Weight: number;
        }[];
      };
      Dirt_Intensity: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      FrecklesDensity_Index: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      Normal_Intensity: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
      };
      SkinTone_Index: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        VariationCount: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
      Teeth: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          VariationIndex: number;
          Weight: number;
        }[];
      };
      TeethColor: {
        Distribution: ECustomDataDistribution;
        MaterialGroup: string;
        ParameterID: number;
        Variations: {
          ParameterValue: number;
          Weight: number;
        }[];
      };
    };
    MaterialGroup: string;
    MaterialSlot: number;
    Variations: {
      MaterialPath: string;
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  MeshPath: string;
  MeshType: EMeshSubType;
  OffsetX: number;
  OffsetY: number;
  OffsetZ: number;
  ParentMeshPath: string;
  RotationPitch: number;
  RotationRoll: number;
  RotationYaw: number;
  SID: string;
  ScaleX: number;
  ScaleY: number;
  ScaleZ: number;
  ShadowMeshPath: string;
  SkeletonPath: string;
  SocketName: string;
  SyncOption: string;
  VoiceModulatorSID: string;
  bHasClothSimulation: boolean;
  bHasExoskeleton: boolean;
  bReceiveAttachedDecals: boolean;
  bReceiveDecals: boolean;
  bRenderCustomDepthPass: boolean;
  bShouldUseParentBound: boolean;
  bUseCustomLODSync: boolean;
}>;

export type AttachPrototype = GetStructType<{
  AttachInstallSound: string;
  AttachType: EAttachType;
  AttachUninstallSound: string;
  bPermanent: boolean;
  CanHoldBreath: boolean;
  Cost: number;
  EffectPrototypeSIDs: string[];
  FittingWeaponsSIDs: string[];
  FPParticlesBasedOnHeating: {
    PostShooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    Shooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    VFXGroupName: string;
  }[];
  HideOnAttachPrototypeIDInstalled: string[];
  Icon: string;
  InventoryActionTime: number;
  IronSight: {
    MeshArray: {
      MeshPrototypeSID: string;
      Socket: string;
    }[];
  };
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemTypeSwitchValue: string;
  LaserSight: {
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
  };
  LayerImagePriority: number;
  LocalizationSID: string;
  Magazine: {
    BindBulletsToAttach: boolean;
    HasMultipleMeshes: boolean;
    IsTwinMagazine: boolean;
    MaxAmmo: number;
    MeshArray: {
      MagazineMeshType: EMagazineMeshType;
      MeshPrototypeSID: string;
    }[];
    PhysicsInteractionPrototypeSID: string;
  };
  MaxStackCount: number;
  MeshInWorldPrototypeSID: string;
  MeshPrototypeSID: string;
  PhysicsInteractionPrototypeSID: string;
  Scope: {
    AimingCutoutRadius: number;
    AimingCutoutThreshold: number;
    AimingEffects: {
      PlayerOnlyEffects: string[];
    };
    BaseZoomCoefficientIndex: number;
    bOverrideAimingEffects: boolean;
    ChangeZoomScopeSound: string;
    ZoomCoefficients: number[];
  };
  ShootingAttach: {
    WeaponPrototypeSID: string;
  };
  SID: string;
  Slot: EAttachSlot;
  SortGroup: ESortGroup;
  SortPriority: number;
  Type: EItemType;
  WeaponFlashlight: {
    FlashlightPrototypeID: number;
  };
  Weight: number;
}>;

export type AudioRoomPrototype = GetStructType<{
  AudioRoomBakedReflection: string;
  AudioRoomBandwidth: string;
  LateReverb: {
    AuxBux: string;
    FadeRate: number;
    Priority: number;
    SendLevel: number;
  };
  Room: {
    AuxSendLevel: number;
    BeginRoomOverlapEvent: string;
    EndRoomOverlapEvent: string;
    Priority: number;
    RoomTone: string;
    TransmissionLoss: number;
  };
  SID: string;
}>;

export type AudioScattererPrototype = GetStructType<{
  AudioScattererMap: string;
  CheckTime: number;
  ID: number;
  ListOfBrushes: {
    "2DEvent": string;
    BrushColor: number;
    Event2DFadeOutTime: number;
    ListOf3DEvents: {
      "3DEvent": string;
      Height: number;
      MaxDistFromPlayer: number;
      MinDistFromPlayer: number;
      SpawnChanceOnDay: number;
      SpawnChanceOnNight: number;
    }[];
    SID: string;
    VisualizationColor: RGBA;
  }[];
  ScanRadiusFor2DEvents: number;
  SID: string;
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
  NegativeEffectPrototypeSIDs: string[];
  SID: string;
}>;

export type BenchmarkItemGeneratorPrototype = GetStructType<{
  ID: number;
  ItemGenerator: ItemGeneratorEntry[];
  SID: string;
}>;

export type BenchmarkMeshGeneratorPrototype = GetStructType<{
  Attachments: MeshAttachment[];
  CustomData: {
    MaterialGroup: string;
    Variations: {
      ParameterValue: number;
      Weight: number;
    }[];
  }[];
  Groom: {
    CategoryName: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  Materials: {
    MaterialGroup: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type BlueprintPrototype = GetStructType<{
  DestroyOnPickup: boolean;
  FittingWeaponsSIDs: string[];
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
  AdditionalMesh: {
    MeshPath: string;
  }[];
  AnimPath: string;
  BodyMeshType: EBodyMeshType;
  GroomPrototypeSID: string;
  IsSkeletal: boolean;
  ItemPrototypeSID: string;
  Materials: {
    MaterialGroup: string;
    MaterialSlot: number;
    Variations: {
      MaterialPath: string;
      Weight: number;
    }[];
  }[];
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

export type BodyMeshSimulatePhysicsPrototype = GetStructType<{
  BonesToApplyPhysics: string[];
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
  CombatSynchronizationScore: {
    Score: number;
    TokenTag: string;
  }[];
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
  UnequippedRelativeRotation: Rot;
  UnequippedRelativeTranslation: Vec3;
  UnequippedSocketName: string;
}>;

export type CluePrototype = GetStructType<{
  DefaultValue: string;
  Description: string;
  ID: number;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type CombatSynchronizationPrototype = GetStructType<{
  CombatEnteringUncheckedTags: string[];
  DifficultySID: string;
  Experienced: {
    FilterGroups: {
      AllowedTags: string[];
      CooldownMin: number;
      MaxScore: number;
    }[];
    SynchronizationPrimitives: {
      Score: number;
      TokenTag: string;
    }[];
  };
  Master: {
    FilterGroups: {
      AllowedTags: string[];
      CooldownMax: number;
      MaxScore: number;
    }[];
    SynchronizationPrimitives: {
      Score: number;
      TokenTag: string;
    }[];
  };
  Newbie: {
    FilterGroups: {
      AllowedTags: string[];
      CooldownMax: number;
      MaxScore: number;
    }[];
    SynchronizationPrimitives: {
      Score: number;
      TokenTag: string;
    }[];
  };
  SID: string;
  Veteran: {
    FilterGroups: {
      AllowedTags: string[];
      CooldownMax: number;
      MaxScore: number;
    }[];
    SynchronizationPrimitives: {
      Score: number;
      TokenTag: string;
    }[];
  };
}>;

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
  Constraints: {
    ConstraintType: EAIConstraintType;
    Duration: number;
    MaxCount: number;
    Radius: number;
  }[];
  SID: string;
}>;

export type ConsumablePrototype = GetStructType<{
  AlternativeEffectPrototypeSIDs: string[];
  AnimBlueprint: string;
  bIsUsesLeftHand: boolean;
  bIsUsesRightHand: boolean;
  ConsumableType: EConsumableType;
  ConsumeOnUse: boolean;
  Cost: number;
  EffectPrototypeSIDs: string[];
  EffectsDisplayTypes: EEffectDisplayType[];
  FastUseGroup: EFastUseGroupType;
  FastUsePrio: number;
  Icon: string;
  Icon1x1: string;
  InventoryActionTime: number;
  IsQuestItemPrototype: boolean;
  ItemGridHeight: number;
  ItemGridWidth: number;
  ItemTags: string[];
  ItemTypeSwitchValue: string;
  LocalizationSID: string;
  MaxStackCount: number;
  MeshPath: string;
  MeshPrototypeSID: string;
  NegativeEffectPrototypeSIDs: {
    Effect: string;
    Weight: number;
  }[];
  NegativeEffectsChance: number;
  PhysicsInteractionPrototypeSID: string;
  ShouldShowEffects: boolean[];
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

export type ContextualActionBlueprintPrototype = GetStructType<{
  AnimationFinalFrameTransforms: {
    Rotation: Rot;
    Vector: Vec3;
  }[][];
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

export type ContextualActionBodyPartsPrototype = GetStructType<{
  BodyParts: {
    BodyPart: EContextualActionBodyPart;
    RestrictedItems: string[];
  }[];
  SID: string;
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
  Execute: ContextualAction;
  Exit: string;
  Interrupt: string;
  NodePrototypeVersion: number;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
  SID: string;
}>;

export type CorpseClueStashPrototype = GetStructType<{
  AdditionalSearchRadius: number;
  AddSpawnChance: number;
  BaseSpawnChance: number;
  CorpseClueData: {
    Rank: ERank;
    RankClue: {
      Rank: ERank;
      Weight: string;
    }[];
  }[];
  Region: ERegion;
  SID: string;
}>;

export type CorpsePrototype = GetStructType<{
  AllowedAttachSuffixes: string[];
  BlockAttachSuffixes: string[];
  BloodPoolMaterial: string;
  BloodPoolSeverity: number;
  BonesToHit: string[];
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
  DefaultCoverSettings: {
    bUseCombatEffectiveFireDistance: boolean;
    bUseDistanceEvaluators: boolean;
    FrontLineHalfAngle: number;
    FrontlineInfluence: number;
    MaxDistanceToAlly: number;
    MaxDistanceToEnemy: number;
    MinDistanceToEnemy: number;
  };
  EnemyCoverageCoeff: string;
  ExplosiveSafeDistanceAddend: number;
  ExplosivesCoverageCoeff: number;
  ExplosivesCoverSettings: {
    bUseCombatEffectiveFireDistance: boolean;
    bUseDistanceEvaluators: boolean;
    FrontLineHalfAngle: number;
    FrontlineInfluence: number;
    MaxDistanceToAlly: number;
    MaxDistanceToEnemy: number;
    MinDistanceToEnemy: number;
  };
  FormationCoeff: number;
  FrequentlyUsedCoverCoeff: number;
  FrequentlyUsedNoCoverCoeff: number;
  LocationInDangerCoverThreshold: number;
  LocationInDangerExplosiveThreshold: number;
  LocationInDangerNoCoverThreshold: number;
  LowGroundCoeff: number;
  MaxCoverageByType: {
    BehindTreeCover: number;
    Generic: number;
    High: number;
    Low: number;
    NoCover: number;
    NoShootingPosition: number;
  };
  MaxCoverSegmentCoverageBase: number;
  MaxCoverSegmentCoveragePlayer: number;
  MaxPathLength: number;
  NewLocationAdvantageCoeff: string;
  NewLocationAdvantageCoeffsOverride: {
    NoCover: number;
  };
  PathLengthExponentBase: number;
  RestrictionDistance: number;
  ShouldApproachEnemy: boolean;
  SID: string;
  SquadMembersInDirectionCoeff: number;
  WeaponDistanceCoeff: number;
}>;

export type DailySchedulePrototype = GetStructType<{
  ScheduleIntervals: {
    AvailableNeeds: EContextualActionNeeds[];
    IntervalEndTime: string;
    IntervalStartTime: string;
  }[];
  SID: string;
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
  ItemGenerator: ItemGeneratorEntry[];
  SID: string;
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
  ObjectPhaseSettings: {
    DamageDestroyThreshold: number;
    DamageIgnoranceThreshold: number;
    DestructibleActions: {
      ActionCompletionDelay: number;
      ActionType: EDestructionActionType;
      AssetOptions:
        | string
        | {
            AssetPath: string;
            AssetWeight: number;
          }[];
    }[];
    IgnoredDamageTypes: EDamageType[];
  }[];
  OriginalMesh: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  TileOffsetMax: number;
  TileOffsetMin: number;
  VFXVariation: number;
  WindowDestructVFX: string;
}>;

export type DetectorPrototype = GetStructType<{
  AnimBlueprint: string;
  AnomalyDetectionRadius: number;
  AnomalyTexturePaths: {
    AnomalyElementType: EAnomalyElementType;
    SpriteTexturePath: string;
  }[];
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
  ExclusionAnomalyList: string[];
  ExclusionArtifactList: string[];
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

export type DialogChainPrototype = GetStructType<{
  CanBeInterrupted: boolean;
  CanInterruptByCombat: boolean;
  CanInterruptByEmission: boolean;
  ContinueAfterInterrupt: boolean;
  DialogMembers: {
    DialogMemberName: string;
    OptionalMember: boolean;
  }[];
  DialogOnTheGo: boolean;
  DLC: string;
  ID: number;
  IsInteractive: boolean;
  IsPCDialogMember: boolean;
  SID: string;
  StartingDialogPrototypeSID: string;
}>;

export type DialogPoolPrototype = GetStructType<{
  AvailableDialogs: string[];
  DialogEventType: EDialogEventType;
  DialogMemberRestrictions: {
    "0": {
      FactionRestrictions: string[];
    };
    ExcludedFactions: {
      Faction: Faction;
    };
    ExcludedObjPrototypes: {
      NPCPrototypeSID: string;
    };
    FactionRestrictions: {
      "0": string;
      Faction: Faction;
    };
    ObjPrototypeRestrictions: {
      "0": string;
      NPCPrototypeSID: string;
    };
  };
  OptionalMembersCount: number;
  RequiredMembersCount: number;
  RequiresGroup: boolean;
  SID: string;
}>;

export type DialogPrototype = GetStructType<{
  Actions: {
    DialogAction: EDialogAction;
    DialogActionParam: string;
  }[];
  AKEventName: string;
  AKEventSubPath: string;
  Animation: string;
  AnswerText: string;
  AssetsSubPath: string;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  CanBeInterrupted: boolean;
  Conditions: Conditions;
  DialogActionParam: string;
  DialogActions: string;
  DialogAnswerActions: {
    ChangeValueMode: EChangeValueMode;
    ConsumablePrototypeSID: {
      VariableType: EGlobalVariableType;
      VariableValue: string;
    };
    DialogAction: EDialogAction;
    DialogActionParam: {
      VariableType: EGlobalVariableType;
      VariableValue: number;
    };
    GlobalVariablePrototypeSID: string;
    ItemsCount: {
      VariableType: EGlobalVariableType;
      VariableValue: number;
    };
    VariableValue: number;
    WithEquipped: boolean;
  }[];
  DialogChainPrototypeSID: string;
  DialogMemberIndex: number;
  DialogMemberName: string;
  DialogMembersAnimations: {
    DialogAnimations: string;
    EmotionalState: EEmotionalFaceMasks;
    LookAtTarget: number;
  }[];
  DialogPriority: EDialogPriority;
  FaceAnimationAssetName: string;
  FaceAnimationSubPath: string;
  HasVOInSequence: boolean;
  Icon: string;
  ID: number;
  LocalizedSequences: string[];
  LookAtObjSID: string;
  LoopSequence: boolean;
  MainReply: boolean;
  NextDialogOptions: {
    AnswerTo: number;
    AvailableFromStart: boolean;
    Conditions: Conditions;
    ExcludeBy: string;
    IncludeBy: string;
    MainReply: boolean;
    NextDialogSID: string;
    Terminate: boolean;
    VisibleOnFailedCondition: boolean;
  }[];
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
  TopicAvailabilityConditions: Conditions;
  Unskippable: boolean;
  VisibleOnFailedCondition: boolean;
  VoiceModulatorPrototypeID: string;
  WaitForSequenceToFinish: boolean;
}>;

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
  bShouldDisableCompass: boolean;
  bShouldDisableCrosshair: boolean;
  bShouldDisableDeadBodyMarkers: boolean;
  bShouldDisableStashMarkers: boolean;
  BuyCondition: number;
  Consumable_Cost: number;
  CorpseSmartLoot: {
    GeneralNPC: string;
  };
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
  PsyPhantomNPCOverrides: {
    bPsyNPCApplyBleeding: boolean;
    OverrideEffectPrototypeSID: string;
    PSYDelayBeforeNewSpawnCycleModifier: number;
    PsyNPCDurabilityDamageMultiplier: number;
    PsyPhantomNPCCountMultiplier: number;
  }[];
  Radiation_AccumulationSpeed: number;
  Regen_HP: number;
  Repair_Cost: number;
  Reward_MainLine_Money: number;
  Reward_SideLine_Money: number;
  SellCondition: number;
  ShowWarningPopup: boolean;
  SID: string;
  TitleSID: string;
  TotalSaveLimits: {
    Limit: number;
    SubType: ESaveSubType;
  }[];
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

export type DoorPrototype = GetStructType<{
  bConsumeItemCountOnOpen: number;
  Blueprint: string;
  bOpenInBothSides: boolean;
  ID: number;
  LockedByGlobalVariable: {
    GlobalVariableSID: string;
    Value: number;
  }[];
  LockedByItemPrototype: {
    ItemCount: number;
    ItemPrototypeSID: string;
  }[];
  LockedByScenarioFlag: {
    GlobalVariableSID: string;
    Value: number;
  }[];
  OpenCurve: string;
  SID: string;
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
  AttachmentItemPrototypeSID: string;
  AttachType: EAttachType;
  AvailableObjPrototypes: string[];
  AxisType: EInputAxisType;
  bEnable: boolean;
  bIsLooped: boolean;
  bIsPermanent: boolean;
  bIsSmooth: boolean;
  BlockAnimationTypes: EActionType[];
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
  DragImpulseRangeNPC: {
    Max: number;
    Min: number;
  };
  DuplicationType: EDuplicateResolveType;
  DurabilityDamageRange: {
    Max: number;
    Min: number;
  };
  Duration: number;
  EffectCurvePath: string;
  EffectLevel: string;
  EffectModifiers: {
    DurationMultiplier: number;
    EffectPrototypeSID: string;
    ValueMultiplier: number;
  }[];
  EffectsToBlockIDs: string[];
  FalseEffectSID: string;
  FireIntervals: number[];
  FireTypes: EFireType[];
  GadgetTypes: string[];
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
    ConditionComparance: EConditionComparance;
    ConditionEffects: {
      BigSleepiness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      DeadlyRadiation: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      Disabled: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      DisableHungerNegative: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      DisableRadiationNegative: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      DisableSleepinessNegative: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      FullHP: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      HighFallHeight: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      HighOverDrunkness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LightRadiation: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LightRadiation_2: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      Low: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowBleeding: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowDrunkness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowFallHeight: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowHPThreshold: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowHunger: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowSleepiness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      LowSPThreshold: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      Medium: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      MediumBleeding: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      MediumDrunkness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      MediumHunger: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      MediumRadiation: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      MediumSleepiness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      No: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NoBleeding: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NoDrunkness: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      None: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NoOverDrunkness: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NormalHPThreshold: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NormalSP: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      NoSleepiness: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      PhaseFour: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      PhaseOne: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      PhaseThree: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      PhaseTwo: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel10: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel4: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel5: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel6: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel7: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel8: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      RadiationLevel9: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      SmallSleepiness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      Strong: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongBleeding: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongDrunkness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongHunger: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongHungerNegative: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongRadiation: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongRadiationNegative: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongSleepiness: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      StrongSleepinessNegative: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      VeryLowHunger: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
      VeryLowSleepiness: {
        ApplicableEffects: string;
        ConditionValue: number;
      };
      Weak: {
        ApplicableEffects: {
          EffectSID: string;
          RemoveOnTransition: boolean;
        }[];
        ConditionValue: number;
      };
    };
    StartMechanicsValue: number;
    StopMechanicsValue: number;
    VitalBarType: EVitalType;
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

export type EffectSourcePriorityPrototype = GetStructType<{
  SID: string;
  SourcePriorities: {
    EffectSource: EEffectSource;
    Priority: number;
  }[];
}>;

export type EmissionPrototype = GetStructType<{
  AIEvents: {
    AIEventStartTime: number;
    AIEventType: EEmissionAIEvent;
  }[];
  AppliedEffects: string[];
  Assets: {
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
  };
  DamageSettings: {
    EmissionDamageBlendTime: number;
  };
  MaxEmissionKillDelayALife: number;
  MaxReactionOnEmissionTimeALife: number;
  MaxReactionOnEmissionTimeQuest: number;
  MinEmissionKillDelayALife: number;
  MinReactionOnEmissionTimeALife: number;
  MinReactionOnEmissionTimeQuest: number;
  OriginX: number;
  OriginY: number;
  SID: string;
  Stages: {
    PhaseDuration: number;
    PhaseStartTime: number;
    StageID: EEmissionStage;
  }[];
  StartEmissionOnRedSkyDuringTranisition: boolean;
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
  ConcussionEffects: string[];
  ConcussionRadius: number;
  DamageArmorNPC: number;
  DamageArmorPlayer: number;
  DamageDestructible: number;
  DamageNPC: number;
  DamagePlayer: number;
  DamageSource: EDamageSource;
  DefaultEffectSIDs: string[];
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
  NPCConcussionEffects: string[];
  PhysicalMaterialEffects: {
    EffectSIDs: string[];
    PhysicalMaterialType: EPhysicalMaterialType;
  }[];
  Radius: number;
  SID: string;
}>;

export type FaceBlockingBlendMaskPrototype = GetStructType<{
  AllowedBlendShapes: string[];
  BlockingMasks: {
    BlockingWeight: number;
    MaskType: EFaceBlockingBlendMasks;
  }[];
  bShouldDisableAllBlendShapes: boolean;
  ForHairQualityUseGroomBlocking: number;
  GroomBlockingMappingPrototypeSID: string;
  SID: string;
}>;

export type FactionActionRestrictionPrototype = GetStructType<{
  Factions: string[];
  ID: number;
  SID: string;
}>;

export type FastTravelLocationPrototype = GetStructType<{
  BlockingGlobalVariables: {
    GlobalVariablePrototypeSID: string;
    GlobalVariableValue: number;
  }[];
  LocationCategory: string;
  Name: string;
  PlayerLocation: Vec3 & { Yaw: number };
  RequiredGlobalVariables: {
    GlobalVariablePrototypeSID: string;
    GlobalVariableValue: number;
  }[];
  SID: string;
}>;

export type FastTravelPrototype = GetStructType<{
  DiscountCoefficients: {
    GlobalVariableCoefficient: {
      DiscountCoefficient: number;
      GlobalVariablePrototypeSID: string;
      TargetValue: number;
    }[];
    RankDiscountCoefficient: {
      Experienced: number;
      Master: number;
      Newbie: number;
      Veteran: number;
    };
    ReputationDiscountCoefficient: {
      Disaffection: number;
      Enemy: number;
      Friend: number;
      Neutral: number;
    };
  };
  GuideDelay: number;
  Locations: {
    CurrentFastTravelLocationPrototypeSID: string;
    DestinationFastTravelLocationPrototypeSID: string;
    Name: string;
    RequiredItems: string;
    RequiredMoney: number;
  }[];
  MaxAccumulatedPointsForVitals: {
    Bleeding: number;
    Hunger: number;
    Radiation: number;
  };
  OverweightLock: EOverweightLock;
  SID: string;
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
  EffectSIDs: string[];
  ExtraLightDistanceBasedParameters: {
    AttenuationRadius: number;
    Distance: number;
    Intencity: number;
    OuterConeAngle: number;
  }[];
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
  SocketNamesMeshes: {
    AdditionalMeshes:
      | string
      | {
          MeshPath: string;
          OffsetRotator: Rot;
          OffsetVector: Vec3;
        }[];
    MeshOffsetParams: {
      OffsetRotator: Rot;
      OffsetVector: Vec3;
    };
    MeshPath: string;
    RelatedMeshes:
      | {
          RelatedMeshAsset: string;
        }
      | string[];
    SocketName: string;
    SpotlightOffsetParams: {
      OffsetRotator: Rot;
      OffsetVector: Vec3;
      SocketName: string;
    };
  }[];
}>;

export type FloatProviderPrototype = GetStructType<{
  bPlayerTarget: boolean;
  ConditionSID: string;
  DelayMax: number;
  DelayMin: number;
  FalseValueSID: string;
  FirstProviderSID: string;
  ParamType: EObjFloatParams;
  ProviderSIDs: string[];
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
  Abilities: Record<
    Ability,
    {
      ActivationTag: string;
      SID: string;
    }
  >;
  AdvanceParameters: {
    DurationSeconds: number;
    MaxDistance: number;
    Montage: string;
  };
  AimAssistParamsSID: string;
  Anim: EObjAnim;
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
  Blueprint: string;
  BoneDamageCoefficients: {
    DamageBone: EDamageBone;
    DamageCoef: number;
  }[];
  CamperFeatureData: {
    CamperRadius: number;
    SyncTokenTag: string;
    TimeToAssumeAsCamper: number;
  };
  CanBeKnockedDown: boolean;
  CombatParameters: {
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
  };
  CustomMeshGeneratorPrototypeSID: string;
  DoorTransitionSettings: {
    Default: {
      Animation: string;
      StartDistance: number;
    };
    OneHandedWeaponCombat: {
      Animation: string;
      StartDistance: number;
    };
    OneHandedWeaponRelax: {
      Animation: string;
      StartDistance: number;
    };
    TwoHandedWeaponCombat: {
      Animation: string;
      StartDistance: number;
    };
    TwoHandedWeaponRelax: {
      Animation: string;
      StartDistance: number;
    };
  };
  EscapeParameters: {
    AttackEscapeDelay: number;
    EscapeRadius: number;
    FailureChance: string;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
    SquadLostFractionToEscape: string;
  };
  EvadeParameters: {
    AcceptableAngle: number;
    AccumulatedDamage: number;
    AnimationData: {
      Montage: string;
      Type: EEvadeActionType;
    }[];
    ApproachDistance: number;
    DamageDetectionSeconds: number;
    RequiredAmmoThreshold: string;
  };
  Faction: Faction;
  FlairSensorPrototypeSID: string;
  FlankParameters: {
    ActivationDelaySeconds: number;
    CostScale: number;
    DamageDetectionSeconds: number;
    ExtraSlotChance: string;
    ExtraSlotTime: number;
    FrontZone: Vec2[];
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
  };
  FlashlightPrototypeSID: string;
  HumanAmbushParameters: {
    ApproachableDistance: number;
    EntryDelay: number;
    PathLengthThreshold: number;
    PathUpdateInterval: number;
  };
  IgnoreEmission: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  Mass: number;
  MeshGeneratorPrototypeSID: string;
  MovementParams: {
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
  };
  NeedsPresetSID: string;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  OfflineCombatWeight: number;
  Protection: {
    Burn: number;
    ChemicalBurn: number;
    Fall: number;
    PSY: number;
    Radiation: number;
    Shock: number;
    Strike: number;
  };
  ReactOnApproachWithWeapon: boolean;
  SequentialAbilities: string[];
  SequentialAbilitiesActionData: {
    bOrientsToTarget: boolean;
  };
  SID: string;
  SpawnPhantomParams: {
    DelayBeforeMovement: number;
    PhantomAllowedEquipItems: string[];
    PhantomAttackAbilityTag: string;
    PhantomBlueprint: string;
  };
  SuppressiveFireParameters: {
    LookAtBoneName: string;
    MaxAccumulatedDamage: number;
    MaxTimeToLoseTarget: number;
    TraceDistance: number;
  };
  SyncParameters: {
    AdvanceSyncTag: string;
    AttackSyncTag: string;
    EvadeSyncTag: string;
    FlankSyncTag: string;
    MovementSyncTag: string;
    SuppressiveFireSyncTag: string;
  };
  TradePrototypeSID: string;
  Type: EObjType;
  VitalParams: {
    DegenBleeding: number;
    DegenPsyPoints: number;
    DegenRadiation: number;
    DegenSuppressionPoints: number;
    MaxHP: number;
    MaxSP: number;
    RegenHP: number;
    RegenHPDelayTimeSeconds: number;
  };
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
    RestingLairShortDelayedSpawnScenarioChance: number;
    RestingLairShortDelaySpawnMax: number;
    RestingLairShortDelaySpawnMin: number;
  };
  SID: string;
}>;

export type GlobalVariablePrototype = GetStructType<{
  DefaultValue: string;
  Description: string;
  ID: number;
  SID: string;
  Type: EGlobalVariableType;
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
  BlockingGrooms: string[];
  BlockingGroomSIDs: string[];
  SID: string;
}>;

export type GroomGeneratorPrototype = GetStructType<{
  Category: GroomCategory[];
  SID: string;
}>;

export type HappyHoursPrototype = GetStructType<{
  HappyHoursRanges: {
    HappyHoursCheckDeviation: number;
    HappyHoursDeviation: number;
    HappyHoursTime: number;
  }[];
  ID: number;
  SID: string;
}>;

export type HearingSensorPrototype = GetStructType<{
  HearingVolumeThreshold: string;
  ID: number;
  SID: string;
  SoundEvents: {
    HearingDistance: number;
    Type: ESoundEventType;
  }[];
}>;

export type ImpactPhysicalMaterialPrototype = GetStructType<{
  ImpactPhysicalMaterialsResources: {
    AdditionalRoll: number;
    ImpactParticle: string;

    ImpactParticleSize: number;

    ImpactSurfaceDecalSize: Vec3;
    ImpactSurfaceDecals: string[];

    MaterialCoefficient: number;

    PhysicalMaterialType: EPhysicalMaterialType;
    bRandomizeRoll: boolean;
  }[];
  SID: string;
}>;

export type InfotopicPrototype = GetStructType<{
  BlockingFactions: string[];
  BlockingGlobalVariables: {
    GlobalVariablePrototypeSID: string;
    GlobalVariableValue: number;
  }[];
  BlockingNPCs: {
    BlockingNPCObjPrototypeSID: string;
  };
  BlockingRegions: ERegion[];
  BlockingReputations: {
    Faction: Faction;
    Reputation: ERelationLevel;
  }[];
  BlockingZoneSIDs: {
    ZonePlaceholder: string;
  };
  ID: number;
  InfotopicDialogs: string[];
  LairSearchRadius: number;
  RandomWeight: number;
  RequiredFactions: string[];
  RequiredGlobalVariables: {
    GlobalVariablePrototypeSID: string;
    GlobalVariableValue: number;
  }[];
  RequiredLairs: {
    Faction: Faction;
  };
  RequiredNPCs: string[];
  RequiredRegions: ERegion[];
  RequiredReputations: {
    Faction: Faction;
    Reputation: ERelationLevel;
  }[];
  RequiredZoneSIDs: string[];
  SID: string;
  ZoneSearchRadius: number;
}>;

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
  GeneratedItems: string[];
  ID: number;
  ItemGenerator: ItemGeneratorEntry[];
  MoneyGenerator: {
    MaxCount: number;
    MinCount: number;
  };
  RefreshTime: string;
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type ItemPrototype = GetStructType<{
  BaseDurability: number;
  ConsumeOnUse: boolean;
  Cost: number;
  DestroyOnPickup: boolean;
  EffectOnPickPrototypeSIDs: string[];
  EffectPrototypeSIDs: string[];
  EffectsDisplayTypes: {};
  FittingWeaponsSIDs: {};
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
  SectionPositions: string[];
  ShouldShowEffects: string[];
  SID: string;
  SortGroup: ESortGroup;
  SortPriority: number;
  Type: EItemType;
  Usable: boolean;
  Weight: number;
}>;

export type JournalQuestPrototype = GetStructType<{
  Description: string;
  Descriptions: string[];
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

export type KeyItemPrototype = GetStructType<{
  LocalizationSID: string;
  PhysicsInteractionPrototypeSID: string;
  SID: string;
  Weight: number;
}>;

export type LairPrototype = GetStructType<{
  ID: number;
  Preset: {
    InitialInhabitantFaction: string;
    IsALifePoint: boolean;
    PossibleInhabitantFactions: {
      Faction: Faction;
      SpawnSettingsPerPlayerRanks: {
        Experienced: {
          InitialSpawnQuantityPercent: number;
          InitialSpawnQuantityRespawnTimeSeconds: number;
          MaxSpawnQuantity: number;
          MaxSpawnQuantityRespawnTimeSeconds: number;
          SpawnSettingsPerArchetypes: {
            GeneralNPC_Duty_CloseCombat: {
              MinQuantityPerArchetype: number;
              SpawnWeight: number;
            };
          };
          WipeRespawnTimeoutSeconds: number;
        };
        Master: {
          InitialSpawnQuantityPercent: number;
          InitialSpawnQuantityRespawnTimeSeconds: number;
          MaxSpawnQuantity: number;
          MaxSpawnQuantityRespawnTimeSeconds: number;
          SpawnSettingsPerArchetypes: {
            GeneralNPC_Duty_CloseCombat: {
              MinQuantityPerArchetype: number;
              SpawnWeight: number;
            };
          };
          WipeRespawnTimeoutSeconds: number;
        };
        Newbie: {
          InitialSpawnQuantityPercent: number;
          InitialSpawnQuantityRespawnTimeSeconds: number;
          MaxSpawnQuantity: number;
          MaxSpawnQuantityRespawnTimeSeconds: number;
          SpawnSettingsPerArchetypes: {
            GeneralNPC_Duty_CloseCombat: {
              MinQuantityPerArchetype: number;
              SpawnWeight: number;
            };
          };
          WipeRespawnTimeoutSeconds: number;
        };
        Veteran: {
          InitialSpawnQuantityPercent: number;
          InitialSpawnQuantityRespawnTimeSeconds: number;
          MaxSpawnQuantity: number;
          MaxSpawnQuantityRespawnTimeSeconds: number;
          SpawnSettingsPerArchetypes: {
            GeneralNPC_Duty_CloseCombat: {
              MinQuantityPerArchetype: number;
              SpawnWeight: number;
            };
          };
          WipeRespawnTimeoutSeconds: number;
        };
      };
    }[];
  };
  SID: string;
}>;

export type LevelStreamingPrototype = GetStructType<{
  HiddenLevels: string[];
  ID: number;
  SID: string;
}>;

export type LR_MeshGeneratorPrototype = GetStructType<{
  Attachments: Record<
    MeshAttachment,
    {
      Attaches: {
        BlockingBodyMeshes: string[];
        BlockingSlots: string[];
        BodyMeshSID: string;
        Weight: number;
      }[];
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
    }
  >;
  CustomData: {
    "0": {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Chevron_index: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Damage: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageIndex_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageIndex_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamagePoss_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamagePoss_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageRotation_Index_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageRotation_Index_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageScale_Index_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageScale_Index_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DefectIntensity_Index: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Defects: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Dirt: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Dirt_Intensity: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        bBlockedInVisualizer: boolean;
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Teeth: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    TeethColor: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
  };
  Groom: {
    CategoryName: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  Materials: {
    MaterialGroup: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

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
  WorldPosition: Vec3;
}>;

export type MeleeWeaponPrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  Bleeding: number;
  BleedingChanceIncrement: number;
  CrosshairType: ECrosshairType;
  Damage: number;
  DamageModifiers: {
    HandOccupied: number;
    StrongAttack: number;
  };
  HeavyAttackImpactSoundEvent: string;
  HitDetectionAngle: number;
  HitDetectionDistance: number;
  HitDetectionRadius: number;
  ImpactPhysicalMaterialPrototypeSID: string;
  ImpulseModifiers: {
    HandOccupied: number;
    StrongAttack: number;
  };
  ImpulseStrength: number;
  LightAttackImpactSoundEvent: string;
  ShouldIgnoreArmor: boolean;
  SID: string;
  SourceEffects: {
    Chance: number;
    EffectPrototypeSID: string;
  }[];
  TargetEffects: {
    Chance: number;
    EffectPrototypeSID: string;
  }[];
}>;

export type MeshGeneratorPrototype = GetStructType<{
  Attachments: Record<
    MeshAttachment,
    {
      Attaches: {
        BlockingBodyMeshes: string[];
        BlockingSlots: string[];
        BodyMeshSID: string;
        Weight: number;
      }[];
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
    }
  >;
  CustomData: {
    "0": {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Chevron_index: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Damage: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageIndex_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageIndex_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamagePoss_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamagePoss_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageRotation_Index_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageRotation_Index_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageScale_Index_01: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DamageScale_Index_02: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    DefectIntensity_Index: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Defects: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Dirt: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;

        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
    Dirt_Intensity: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        bBlockedInVisualizer: boolean;
        VariationIndex: number;
        Weight: number;
      }[];
    };
    Teeth: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
      }[];
    };
    TeethColor: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      Variations: {
        VariationIndex: number;
        Weight: number;
        bBlockedInVisualizer: boolean;
      }[];
    };
  };
  Groom: {
    CategoryName: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  Materials: {
    MaterialGroup: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  ParentMeshGeneratorSID: string;
  QualityPresetsMeshGenerators: {
    MeshGeneratorSID: string;
    QualityPresetIndex: number;
  }[];
  SID: string;
}>;

export type MeshPrototype = GetStructType<
  {
    AdditionalMeshes: {
      MeshPath: string;
      MeshPrototypeSID: string;
    }[];
    ID: number;
    MaterialPath: string;
    Materials: {
      MaterialPath: string;
      MaterialSlot: number;
    }[];
    MeshPath: string;
    MeshType: EMeshSubType;
    ScaleX: number;
    ScaleY: number;
    ScaleZ: number;
    SID: string;
    SizX: number;
    SizeY: number;
    SizeZ: number;
  } & Rot
>;

export type MisansceneNodePrototype = GetStructType<{
  ActorID: number;
  ActorSID: string;
  ActorsSID: string[];
  Chances: number[];
  Connections: {
    Input: string[];
    Output: string[];
  };
  MisansceneSID: string;
  NodeType: EMisansceneNodeType;
  Repetitions: number;
  SID: string;
  TargetGuid: string;
}>;

export type MoneyPrototype = GetStructType<{
  Cost: number;
  DestroyOnPickup: boolean;
  EffectOnPickPrototypeSIDs: string[];
  EffectPrototypeSIDs: string[];
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
  FootstepFX: {
    BackFootDecal: string;
    FrontFootDecal: string;
    ImpactParticle: string;
    ImpactParticleRunSprint: string;
    ImpactSurfaceDecalSize: Vec3;
    PhysicalMaterialType: EPhysicalMaterialType;
  }[][];
  FrontFootSoundEvent: string;
  ID: number;
  InteractLadderMetal: string;
  InteractLadderWood: string;
  InteractSoundEvent: {
    InteractionFX: EInteractFXType;
    SoundEvent: string;
  }[];
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
  WaterMovement: {
    ImpactSpawnIntervalSeconds: number;
    JumpWaterImpact: string;
    MovingThroughLowWaterImpactRunSprint: string;
    MovingThroughLowWaterImpactWalk: string;
    MovingThroughWaterImpact: string;
  };
}>;

export type MovementSensorPrototype = GetStructType<{
  DetectionRadius: number;
  DetectionSpeed: number;
  DistancePenaltyCurve: string;
  Enabled: boolean;
  IdentificationThreshold: number;
  MinObjectSpeedRange: Vec2;
  SID: string;
}>;

export type MusicManagerPrototype = GetStructType<{
  CombatTracks: {
    TrackSwitchValue: string;
  }[];
  SID: string;
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
  ActiveEffectSIDs: string[];
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
  FactionBasedSoundEventInformation: {
    Faction: Faction;
    FactionDetectionRadius: number;
  }[];
  ID: number;
  MaxNotificationEventOccurencePerSecond: number;
  MaxSoundSpreadingDistance: number;
  SID: string;
  Type: ENotificationEventType;
}>;

export type NPCNeedsPresetPrototype = GetStructType<{
  GoalNeeds: (
    | boolean
    | {
        InitialNeedValue: number;
        MaxIncreasePerMinute: number;
        MinIncreasePerMinute: number;
        NeedSatisfactionThreshold: number;
        NeedTag: string;
      }
  )[];
  Needs: {
    IncreaseRateMax: number;
    IncreaseRateMin: number;
    MaxCount: number;
    NeedType: EContextualActionNeeds;
    Radius: number;
  }[];
  NeedsResolvers: (
    | boolean
    | {
        ExpansionResolverFactory: {
          MaxSquadSize: number;
          MinSquadSize: number;
        };
        IdentificationTag: string;
        OnCompleted: {
          NeedTag: string;
          SatisfactionAmount: number;
        }[];
        ResolverFactory: string;
        ReuniteWithLairResolverFactory: {
          MaxSquadSize: number;
          MinSquadSize: number;
        };
      }
  )[];
  SID: string;
}>;

export type NPCNightVisionSetupPrototype = GetStructType<{
  AllowedAttachSuffixes: string[];
  BlockAttachSuffixes: string[];
  ID: number;
  IncompatibleSuffixes: string[];
  MaterialEmissiveMultOverride: number;
  PointLightOffsets: {
    PointLightOffsetRotator: Rot;
    PointLightOffsetVector: Vec3;
  }[];
  SID: string;
  SocketNamesMeshes: {
    HelmetAttachmentMesh: string;
    HelmetAttachmentOffsetRotator: Rot;
    HelmetAttachmentOffsetVector: Vec3;
    MeshOffsetParams: {
      MeshPath: string;
      OffsetRotator: Rot;
      OffsetVector: Vec3;
    }[];
    RelatedMeshes:
      | string[]
      | {
          RelatedMeshAsset: string;
        };
    SocketName: string;
  }[];
  SpotlightBrightnessOverride: number;
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
  Skills: string[];
  ThreshHoldItemCondition: number;
  TradeTopicDialogChain: string;
  TravelTopicDialogChain: string;
  UpdateMarkerOnMap: boolean;
  Upgrades: {
    Enabled: boolean;
    UpgradePrototypeSID: string;
  }[];
  UpgradeTopicDialogChain: string;
  UseGeneratedName: boolean;
  VoiceEN: string;
  VoiceUA: string;
}>;

export type NPCSpawnerPrototype = GetStructType<{
  Blueprint: string;
  MinPopulationCountToRefresh: number;
  ObjPrototypeSIDs: string[];
  QuantityMaxInSquad: number;
  QuantityMinInSquad: number;
  SID: string;
  SpawnRadius: number;
}>;

export type NPCWeaponAttributesPrototype = GetStructType<{
  AIParameters: {
    BehaviorTypes: {
      Experienced: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: number;
        CombatEffectiveFireDistanceMin: number;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Master: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: number;
        CombatEffectiveFireDistanceMin: number;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Newbie: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: number;
        CombatEffectiveFireDistanceMin: number;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Veteran: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: number;
        CombatEffectiveFireDistanceMin: number;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Zombie: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: number;
        CombatEffectiveFireDistanceMin: number;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxShots: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxShots: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxShots: number;
          MinShots: number;
        };
      };
    };
  };
  AnimBlueprint: string;
  MuzzleSocketName: string;
  ParticlesBasedOnHeating: {
    PostShooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    Shooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    VFXGroupName: string;
  }[];
  ShellShutterSocketName: string;
  SID: string;
}>;

export type NPCWeaponSettingsPrototype = GetStructType<{
  ArmorDamage: number;
  ArmorPiercing: number;
  BaseBleeding: number;
  BaseDamage: number;
  BulletDropHeight: number;
  ChanceBleedingPerShot: string;
  CombatSynchronizationScore: {
    Score: number;
    TokenTag: string;
  }[];
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

export type ObjAimAssistParamsPrototype = GetStructType<{
  BoneClusters: {
    AdditionalBones: string[];
    MainBone: string;
    VisibilityBone: string;
  }[];
  SID: string;
}>;

export type ObjCrouchParamsPrototype = GetStructType<{
  CrouchEffectSIDs: string[];
  SID: string;
}>;

export type ObjCustomAbilityDialogPrototype = GetStructType<{
  AbilityDialogues: {
    AbilityTag: string;
    DialogueSIDs: string[];
  }[];
  SID: string;
}>;

export type ObjEffectMaxParamsPrototype = GetStructType<{
  MaxEffectValues: {
    EffectSID: EEffectType;
    MaxValue: number;
  }[];
  SID: string;
}>;

export type ObjHoldBreathParamsPrototype = GetStructType<{
  HoldBreathCooldown: number;
  HoldBreathDrainPerSecond: number;
  HoldBreathMaxStamina: number;
  HoldBreathRegenPerSecond: string;
  HoldBreathStaminaThreshold: number;
  PostHoldBreathParameters: {
    EffectPrototypeSIDs: string[];
    Threshold: number;
  }[];
  SID: string;
}>;

export type ObjOnHitParamsPrototype = GetStructType<{
  DamageTypeEffects: {
    DamageType: EDamageType;
    Effects: {
      AccumulationTime: number;
      EffectSID: string;
      MaxDamage: number;
      MaxEffectValueModifier: number;
      MinDamage: number;
      MinEffectValueModifier: number;
    }[];
  }[];
  DirectionalDamageEffects: {
    EffectSID: string;
    MaxDamage: number;
    MaxEffectValueModifier: number;
    MinDamage: number;
    MinEffectValueModifier: number;
  }[][];
  SID: string;
}>;

export type ObjPrototype = GetStructType<{
  AIVisionTargetParams: {
    FriendlyTracePoints: {
      BaseScorePerSecond: number;
      BoneName: string;
      Label: string;
    }[];
    TracePoints: {
      BaseScorePerSecond: number;
      BoneName: string;
      Label: string;
      RelativeLocation: Vec3;
    }[];
  };
  Abilities: Record<
    Ability,
    {
      ActivationTag: string;
      SID: string;
    }
  >;
  AdvanceParameters: {
    MaxAdvanceDurationSeconds: number;
    MaxDistanceToEnemy: number;
  };
  AgentBehaviourParameters: {
    WeaponHandling: {
      FarFireQueueDelaySeconds: number;
      FireQueueDelayRandomizationFactor: number;
      MaxFireCountQueueScaler: number;
      MinFireCountQueueScaler: number;
      NearFireQueueDelaySeconds: number;
      PerBoneIgnoreDispersionModifiers: {
        BoneLabel: string;
        Max: number;
        Min: number;
      }[];
      SwitchWeaponIfNoAmmo: boolean;
    };
  };
  AgentType: EAgentType;
  AimAssistParamsSID: string;
  Anim: EObjAnim;
  AnomalyDetectorPrototypeSID: string;
  AnomalyRestrictionsIgnoreChance: number;
  ApplicableMechanicsEffects: string[];
  ArmorDifferenceCoefMeleeAttacks: number;
  ArmorDifferenceCoefProjectiles: number;
  AttackParams: {
    FireDispersionParams: {
      CrouchMoveCoef: number;
      Default: number;
      DefaultAim: number;
      Jump: number;
      LowCrouchCoef: number;
      VelocityFactor: number;
    };
    ForceDistance: number;
    MeleeAttackAcceptanceDistance: number;
    MeleeAttackHeight: number;
    MeleeAttackRadius: number;
    MeleeDamage: number;
    MutantAttackParams: {
      ExampleAttack: {
        ArmorPiercing: number;
        AttackRootMotionTravelDistance: number;
        Bleeding: number;
        BleedingChanceIncrement: number;
        Damage: number;
        DamageSource: EDamageSource;
        Effects: {
          Chance: number;
          EffectPrototypeSID: string;
        }[];
        MaxAttackAngle: number;
        MinAttackDistance: number;
        MutantAttackType: EMutantAttackType;
      };
      JumpAttack: {
        ArmorPiercing: number;
        AttackRootMotionTravelDistance: number;
        Bleeding: number;
        BleedingChanceIncrement: number;
        Cooldown: number;
        Damage: number;
        DamageSource: EDamageSource;
        Effects: {
          Chance: number;
          EffectPrototypeSID: string;
        }[];
        MaxAttackAngle: number;
        MinAttackDistance: number;
        MutantAttackType: EMutantAttackType;
      };
    };
  };
  BlinkTeleportActionData: {
    bStartAmbushOnBlink: boolean;
    FinishAmbushTime: {
      MaxTime: number;
      MinTime: number;
    };
  };
  Blueprint: string;
  BoneBleedingCoefficients: {
    DamageBone: EDamageBone;
    DamageCoef: number;
  }[];
  BoneDamageCoefficients: {
    DamageBone: EDamageBone;
    DamageCoef: number;
  }[];
  BoneDamageMap: {
    "0": {
      CapsuleNames: string[];
      DamageBone: EDamageBone;
    };
    "1": {
      CapsuleNames: string[];
      DamageBone: EDamageBone;
    };
  };
  CamperFeatureData: {
    CamperRadius: number;
    SyncTokenTag: string;
    TimeToAssumeAsCamper: number;
  };
  CanBeKnockedDown: boolean;
  CanDailyScheduleBeOverride: boolean;
  CanPeekOut: boolean;
  CanProcessCorpses: boolean;
  ChangeCombatLocationActionData: {
    MoveToLocationFinishedAcceptableDistance: number;
    SearchSimpleLocationRadius: number;
  };
  ChargeActionData: {
    AcceptableRadiusToTheEnd: number;
    DistToRunAfterTarget: number;
    Enabled: boolean;
    MaxDistToTarget: number;
    MinDistToTarget: number;
    SyncTag: string;
  };
  ChaserFeatureData: {
    ChaserRadius: number;
    Enabled: boolean;
    RemainingHPToAssumeAsChaser: number;
    TimeToAssumeAsChaser: number;
  };
  ClawAttackAnyAngleData: {
    AttacksConditions: {
      AbilityTag: string;
      StartAttackMaxAngle: number;
      StartAttackMaxAngleToEnemyDirection: number;
      StartAttackMinAngle: number;
      StartAttackMinAngleToEnemyDirection: number;
    }[];
    AttackSyncTag: string;
    Enabled: boolean;
    HitOffset: number;
    StartAttackMaxDistance: number;
    StartAttackMinDistance: number;
  };
  ClawAttackData: {
    AbilityTag: string;
    AttacksConditions: {
      AbilityTag: string;
      StartAttackMaxAngle: number;
      StartAttackMaxAngleToEnemyDirection: number;
      StartAttackMinAngle: number;
      StartAttackMinAngleToEnemyDirection: number;
    }[];
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
  };
  CombatParameters: {
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
  };
  CombatSummonFeatureData: {
    bCheckLocationsBeforeStart: boolean;
    SummonAbilityTag: string;
  };
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
  DashParameters: {
    CollisionPreset: string;
    Montage: string;
    MovementSound: string;
    MovementVFX: string;
  };
  DeathHandlerFeatureData: {
    EffectsOnPlayer: {
      Chance: number;
      EffectPrototypeSID: string;
    }[];
  };
  DeathHitImpulseMultiplier: number;
  DeathVelocityImpulseMultiplier: number;
  DisableMovementWeightThreshold: {
    BlockingMovement: EStateTag[];
    WeightStatus: EWeightStatus;
  }[];
  DoorTransitionSettings: {
    Default: {
      Animation: string;
      StartDistance: number;
    };
  };
  EffectMaxParamsSID: string;
  EnemyValidationActionParams: {
    GenerateValidationLocations: boolean;
    GroupSpreadingMinDistance: number;
    MinAdditionalValidationPoints: number;
    MinDistanceToValidationPoint: number;
    MinValidationTimeAtLocation: number;
    PointsSpreadDistance: number;
    PossibleContextualActions: {};
    WaitForContextualAction: boolean;
  };
  EscapeIsolatedNavmeshActionData: {
    AbilityActivationTag: string;
    bEnabled: boolean;
    JumpDistance: number;
  };
  EscapeParameters: {
    AttackEscapeDelay: number;
    EscapeRadius: number;
    FailureChance: string;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
    SquadLostFractionToEscape: string;
  };
  EvadeParameters: {
    AnimationData: {
      Montage: string;
      Type: EEvadeActionType;
    }[];
    MovementVFX: string;
  };
  Faction: Faction;
  FactoryClassName: string;
  FlairParams: {
    IsActive: boolean;
    SensingRadius: number;
  };
  FlairSensorPrototypeSID: string;
  FlankParameters: {
    ActivationDelaySeconds: number;
    CostScale: number;
    DamageDetectionSeconds: number;
    ExtraSlotChance: string;
    ExtraSlotTime: number;
    FrontZone: Vec2[];
    Height: number;
    MaxAccumulatedDamage: number;
    MaxPathLength: number;
    MinPathLength: number;
    ScaleFactor: number;
    SprintDistance: number;
    WalkDistance: number;
  };
  FlankThreatActionData: {
    FlankMaxAngle: number;
    FlankMaxRadius: number;
    FlankMinAngle: number;
    FlankMinRadius: number;
  };
  FlashlightPrototypeSID: string;
  FlyThroughData: {
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
  };
  HearingSensorPrototypeSID: string;
  HideWeaponWarning: {
    BarkDelay: number;
    CalmDownTime: number;
    DetectionDistance: number;
    FollowDistance: number;
    IgnoreAfterCombatTime: number;
    RequiredCombatAction: EThreatActionType;
    RequiredThreatAction: EThreatActionType;
    WarningAttemptsBeforeAlert: number;
  };
  Hint: string;
  HoldBreathParamsSID: string;
  HumanAmbushParameters: {
    EntryDelay: string;
  };
  HumanInteractionParameters: {
    HealingWoundedDistance: number;
  };
  HumanLookAtParameters: {
    LookAtCooldown: number;
    LookAtDistance: number;
    MaxlookAtTime: number;
    MinlookAtTime: number;
    PerformGreetingBark: boolean;
  };
  ID: number;
  Icon: string;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreWoundedRestriction: boolean;
  ImpactVFXSize: number;
  InstanceDamageData: {
    ArmorDamage: number;
    ArmorPiercing: number;
    AttackEffects: {};
    Bleeding: number;
    BleedingChanceIncrement: number;
    bShouldIgnoreArmor: boolean;
    Damage: number;
    DamageSource: EDamageSource;
    DamageType: EDamageType;
    NPCDamageMultiplier: number;
  };
  InvisibilityFeatureData: {
    EnterInvisibilityAbility: string;
    InvisibilityDeadChangeDurationSeconds: number;
    InvisibilityEffects: {
      Chance: number;
      EffectPrototypeSID: string;
    }[];
    InvisibilityEffectsThreshold: number;
    InvisibilityLossFromDamage: number;
    ToInvisibleSeconds: number;
    ToVisibleSeconds: number;
  };
  IsAffectingByMaxActorWithSimulation: boolean;
  IsAffectingByMaxAttaches: boolean;
  IsZombie: boolean;
  ItemGeneratorPrototypeSID: string;
  JumpActionData: {
    JumpDistance: number;
    MinDistanceToTarget: number;
    MinJumpDistance: number;
    ReducedPathCoefToJump: number;
  };
  JumpAttackData: {
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
  };
  JumpToEnemyActionData: {
    AbilityActivationTag: string;
    AngleRandomization: number;
    bEnabled: boolean;
    bInRadiusOnly: boolean;
    JumpDistance: number;
    MinDist: number;
    PredictionTime: number;
    RandomRadius: number;
    ReducedPathCoefToJump: number;
  };
  KickAttackData: {
    AbilityTag: string;
    AttackSyncTag: string;
    StartAttackMaxAngle: number;
    StartAttackMaxAngleToEnemyDirection: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMinDistance: number;
  };
  LongJumpAttackData: {
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
  };
  Mass: number;
  MaxDialogInteractDistance: number;
  MaxReactionTimeToExplosion: number;
  MeleeAttackData: {
    StartAttackMaxAngle: number;
    StartAttackMaxAngleToEnemyDirection: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMinDistance: number;
  };
  Mesh: EObjMesh;
  MeshGeneratorPrototypeSID: string;
  MinDialogInteractDistance: number;
  MinReactionTimeToExplosion: number;
  MoveToEnemyActionData: {
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
    PathBuilderVelocities: {
      AngularVelocity: number;
      LinearVelocity: number;
    }[];
    PotentialHitPointMaxHeightDiff: number;
  };
  MovementParams: {
    AimLookUpCoef: number;
    AimSpeedCoef: number;
    AimTurnCoef: number;
    AirControlCoef: number;
    BaseLookUpRate: number;
    BaseTurnRate: number;
    CanDash: boolean;
    ClimbSpeedCoef: number;
    CrouchSpeed: number;
    FatiguePerAction: {
      Climb: number;
      Crouch: number;
      Jump: number;
      Run: number;
      Sprint: number;
      Walk: number;
    };
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
  };
  MovementSensorSID: string;
  MovementVFXPrototypeSID: string;
  MusicManagerCombatScore: number;
  MutantAmbushParameters: {
    AdditionalVisibilityTraceBones: string[];
    AttackAttemptsBeforeAmbush: number;
    bCheckTraceForFinishAction: boolean;
    bEnabled: boolean;
    bSpawnLockOnInitialize: boolean;
    DangerAreaLifetime: number;
    DangerAreaRadius: number;
    FinishRadius: number;
    LockLocationDefaultRadius: number;
    RemoveLockDistance: number;
  };
  MutantCoverSelectorFeatureData: {
    bReturnAnyCoverIfNoValidFound: boolean;
    CosThresholdForCovers: number;
    EffectiveDistanceToEnemy: number;
    ExplorationRadius: {
      Max: number;
      Min: number;
    };
    IgnoreCoversNearLastCoverDist: number;
    MinDistanceToEnemy: number;
    MinimalCoverSize: number;
    MinResampleDelay: number;
    ReceivedDamageToResample: number;
    ReceivedDamageToResampleTime: number;
    ResampleCooldown: number;
    SafeDistanceToEnemy: number;
    SafeDistanceToExplosives: number;
  };
  MutantEscapeParameters: {
    AttackEscapeDelay: number;
    AttackRadius: number;
    EscapeRadius: number;
    FailureChance: string;
    InterruptEscapeAfterEnemyLostDelay: number;
    InterruptEscapeDelay: number;
    SquadLostFractionToEscape: string;
  };
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  NeedsPresetSID: string;
  OfflineCombatWeight: number;
  OnHitParamsSID: string;
  PathFailedContextualAction: string;
  PeacefulChatterFeatureData: {
    EndChatterRadius: number;
    StartChatterRadius: number;
  };
  PostResurrectionEffects: string[];
  PrepareForAttackActionData: {
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
  };
  PrepareForEmissionContextualAction: string;
  ProcessCorpseObjectFeatureData: {
    CorpseInteractionBoneName: string;
    CorpseInteractionDistance: number;
  };
  ProcessCorpseSubjectFeatureData: {
    CorpseInteractionApproachMaxPathLength: number;
    CorpseInteractionTimeout: number;
    InteractionData: {
      AllowedCorpses: string[];
      ApproachLocationOffset: number;
      ContextualAction: string;
    }[];
  };
  Protection: {
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
  };
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  RepairCostModifier: number;
  RetreatActionData: {
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
  };
  RetreatDuration: number;
  RetreatRadius: number;
  RoarActionData: {
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
  };
  RunAttackData: {
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
  };
  SID: string;
  SearchpointDetectorPrototypeSID: string;
  SequentialAbilities: string[];
  SequentialAbilitiesActionData: {
    bOrientsToTarget: boolean;
  };
  ShieldActionData: {
    AbilityTag: string;
    Enabled: boolean;
    MaxAngleToEnemy: number;
    MaxDistance: number;
    MinDistance: number;
    SyncTag: string;
  };
  ShieldFeatureData: {
    AbilityActivationTag: string;
    DamageAccumulationThreshold: number;
    DamageAccumulationTime: number;
  };
  ShockwaveAttackData: {
    AbilityTag: string;
    AttackSyncTag: string;
    StartAttackMaxAngle: number;
    StartAttackMaxAngleToEnemyDirection: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMinDistance: number;
  };
  ShortJumpAttackData: {
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
  };
  ShouldAvoidDangerPolygons: boolean;
  ShouldGenerateStashClues: boolean;
  ShouldHideUnequippedPrimaryWeapon: boolean;
  ShouldRenderTextureInsteadOfGroom: boolean;
  ShouldTriggerAnomalies: boolean;
  SideJumpActionData: {
    Cooldown: number;
    DamageAccumulatedToActivate: number;
    JumpMoveMontages: string[];
    StartAttackMaxAngle: number;
    StartAttackMaxAngleToEnemyDirection: number;
    StartAttackMaxDistance: number;
    StartAttackMinAngle: number;
    StartAttackMinAngleToEnemyDirection: number;
    StartAttackMinDistance: number;
    TimeSinceLastAbilityEndedTimestampToActivateCooldown: number;
  };
  SimulateBattleParams: {
    SimulateCombatDamageModifier: number;
    SimulateCombatSpreadModifier: number;
  };
  SkeletalMeshTraceBoneMap: {
    Bone: EObjSkeletalMeshTraceBone;
    BoneName: string;
  }[];
  SleepParamsSID: string;
  SleepinessActivationDistance: number;
  SleepinessDeactivationDistance: number;
  SpaceRestrictorTag: string;
  SpawnPhantomParams: {
    DelayBeforeMovement: number;
    DistanceConditions: {
      StartAttackMaxDistance: number;
      StartAttackMinDistance: number;
    };
    EffectsOnOverlap: string[];
    PermanentEffects: string[];
    PhantomAttackAbilityTag: string;
    PhantomBlueprint: string;
  };
  SpendStaminaInSafeZone: boolean;
  StaminaPerAction: {
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
  };
  StaminaPerActionLightOverweight: {
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
  };
  StealthKillParams: {
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
  };
  StealthKillUnavailable: boolean;
  StealthParams: {
    FlashLightCoef: number;
    NoiseCrouchCoef: number;
    NoiseJumpCoef: number;
    NoiseObstacleCoef: number;
    VisibilityCrouchCoef: number;
    VisibilityJumpCoef: number;
    VisibilityObstacleBodyCoef: number;
    VisibilityObstacleHeadCoef: number;
    VisibilitySizeFactor: number;
  };
  SuppressiveFireParameters: {
    LookAtBoneName: string;
    MaxAccumulatedDamage: number;
    MaxTimeToLoseTarget: number;
    NeedVisualConfirmation: boolean;
    TraceDistance: number;
  };
  SyncParameters: {
    AdvanceSyncTag: string;
    AttackSyncTag: string;
    EvadeSyncTag: string;
    FlankSyncTag: string;
    MovementSyncTag: string;
    SuppressiveFireSyncTag: string;
  };
  Text: string;
  ThreatPrototypeSID: string;
  ThrowActionData: {
    AbilityTag: string;
    Enabled: boolean;
    MaxAngleToEnemy: number;
    MaxDistance: number;
    MinDistance: number;
  };
  TradePrototypeSID: string;
  TremblingWhileEmissionContextualAction: string;
  Type: EObjType;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VFXSize: number;
  VaultingParams: {
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
  };
  VisionScannerPrototypeSID: string;
  VitalParams: {
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
    StaminaDisableThresholds: {
      RegenerationDelay: number;
      StateTags: EStateTag[];
      Threshold: number;
    }[];
  };
  WaterContactInfo: {
    DualCurveEffects: {
      DepthCurveMovingDeeper: string;
      DepthCurveMovingShallower: string;
      EffectSID: string;
    }[];
    ShallowSoundSwitch: string;
    SingleCurveEffects: {
      DepthCurve: string;
      EffectSID: string;
    }[];
    StepVFXMaxBodyWaterImmersionDepth: number;
    WaterDepthRTPC: string;
    WaterImmersionLevels: {
      Effects: string[];
      LevelSoundSwitch: string;
      MinDepthThreshold: number;
      WaterLevel: EWaterImmersionLevel;
    }[];
  };
  WeatherParamsSID: string;
  WeightParamsSID: string;
  ZombieBehaviourParameters: {
    CombatBehaviour: {
      AddedShootingDistanceOnTheGo: number;
      MaxShootingAngle: number;
      MaxShootingStationaryDistance: number;
      MinShootingStationaryDistance: number;
    };
    WeaponHandlingOverride: {
      FarFireQueueDelaySeconds: number;
      MaxFireCountQueueScaler: number;
      MinFireCountQueueScaler: number;
      NearFireQueueDelaySeconds: number;
      SwitchWeaponIfNoAmmo: boolean;
    };
    ZombieAllowedEquipItems: Record<SID, ERank>;
  };
  ZombieHearingSensorPrototypeSID: string;
  ZombieLayingIdleTime: number;
  ZombieVisionScannerPrototypeSID: string;
  npc_size: number;
}>;

export type ObjSleepParamsPrototype = GetStructType<{
  AllowSleepThreshold: number;
  bAllowEmissionSleep: boolean;
  CantSleepEffectSIDs: string[];
  MinSleepHours: number;
  PostSleepEffectSIDs: string[];
  PostSleepMultiplierEffectSIDs: string[];
  SID: string;
  SleepEffectSIDs: string[];
  SleepHoursMultiplier: number;
}>;

export type ObjWeatherParamsPrototype = GetStructType<{
  SID: string;
  WeatherAppliedEffectSIDs: {
    LightRainy: string[];
    Rainy: string[];
    Thundery: string[];
  };
}>;

export type ObjWeightParamsPrototype = GetStructType<{
  InventoryPenaltyLessWeight: number;
  MaxInventoryMass: number;
  SID: string;
  WeightEffectParams: {
    EffectPrototypeSIDs: string[];
    Threshold: number;
  }[];
}>;

export type OffsetAimingBoolProviderPrototype = GetStructType<{
  ProviderSID: string;
  ProviderSIDs: string[];
  SID: string;
  Type: EBoolProviderType;
}>;

export type PackOfItemsGroupPrototype = GetStructType<{
  ID: number;
  PackOfItemsSettings: {
    Items: {
      ItemPrototypeSID: string;
      MinDurability: number;
      Weight: number;
    }[];
    MaxDurability: number;
    MinDurability: number;
    PlayerRank: ERank;
  }[];
  SID: string;
}>;

export type PassiveDetectorPrototype = GetStructType<{
  DangerLevelSoundParameter: string;
  DetectorRadius: string;
  DetectorWorkCurve: string;
  DetectorWorkSFX: string;
  ExclusionAnomalyList: string[];
  ID: number;
  SID: string;
  SignalCurve: string;
  Type: EPassiveDetectorType;
}>;

export type PDATutorialPrototype = GetStructType<{
  ExclusiveGamepadType: string;
  Id: number;
  Images: string[];
  InputMappings: {
    GamepadInputAction: string;
    InputAction: string;
    InputMappingContext: EMappingContext;
    PCInputMappingNames: string[];
    ShouldAnimate: boolean;
  }[];
  ItemSIDs: string[];
  MasterDifficultyEquivalentSid: string;
  RelevantPDANoteTutorial: string;
  SID: string;
  TextSid: string;
  TutorialCategory: EPDATutorialCategory;
  TutorialDetailsSID: string;
  TutorialNameSID: string;
  VisibleDifficulties: EGameDifficulty[];
}>;

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
  Attachments: Record<
    MeshAttachment,
    {
      Attaches: {
        BlockingBodyMeshes: string[];
        BlockingSlots: string[];
        BodyMeshSID: string;
        Weight: number;
      }[];
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
    }
  >;
  SID: string;
}>;

export type PlayerWeaponAttributesPrototype = GetStructType<{
  AnimBlueprint: string;
  DefaultWeaponSettingsSID: string;
  DisplayBP: string;
  ParticlesBasedOnHeating: {
    PostShooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    Shooting: {
      MinHeatingValueToAppear: number;
      PFXPath: string;
      SocketName: string;
    };
    VFXGroupName: string;
  }[];
  SID: string;
  ShellShutterSocketName: string;
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
  ProviderSIDs: string[];
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
  EffectPrototypeSIDs: string[];
  FlybyDotProductThreshold: number;
  FlybySound: string;
  ImpactBloodDecalMinSize: number;
  ImpactBloodDecals: string[];
  ImpactBloodDecalSize: Vec3;
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
  SuppressionEffectSIDs: string[];
  SuppressionMinSpeed: number;
  TimeOfVisibilityEnabling: number;
}>;

export type PsyMeshGeneratorPrototype = GetStructType<{
  Attachments: Record<
    MeshAttachment,
    {
      Attaches: {
        BlockingBodyMeshes: string[];
        BlockingSlots: string[];
        BodyMeshSID: string;
        Weight: number;
      }[];
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
    }
  >;
  SID: string;
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
  (
    | EAnomalyElementType
    | EArtifactRarity
    | EArtifactType
    | boolean
    | number
    | string
    | string[]
  )[]
>;

export type QuestArtifactSpawnerPrototype = GetStructType<{
  Experienced: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  ID: number;
  ListOfArtifacts: string[];
  Master: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  Newbie: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
  SID: string;
  UseListOfArtifacts: boolean;
  Veteran: {
    Count: number;
    MaxCooldown: number;
    MinCooldown: number;
    Radius: number;
    RarityChance: {
      Common: number;
      Epic: number;
      Rare: number;
      Uncommon: number;
    };
    SpawnChanceBase: number;
    SpawnChanceBonus: number;
  };
}>;

export type QuestDependencyPrototype = GetStructType<{
  DefaultValue: string;
  Description: string;
  ID: number;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type QuestItemGeneratorPrototype = GetStructType<{
  ID: number;
  ItemGenerator: ItemGeneratorEntry[];
  RefreshTime: string;
  SID: string;
}>;

export type QuestItemPrototype = GetStructType<{
  AlternativeEffectPrototypeSIDs: string[];
  AnomalyElementType: EAnomalyElementType;
  ArchiartifactType: EArchiartifactType;
  ArtifactType: EArtifactType;
  ArtifactTypeSwitch: string;
  Blueprint: string;
  Cost: number;
  DetectorRequired: boolean;
  EffectPrototypeSIDs: string[];
  EffectsDisplayTypes: EEffectDisplayType[];
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
  ShouldShowEffects: boolean[];
  ShouldTriggerAnomalies: boolean;
  SID: string;
  SoundStateTransitionOnHide: string;
  SoundStateTransitionOnShow: string;
  StaticMeshPrototypeSID: string;
  Strafe: boolean;
  Type: EItemType;
  Weight: number;
}>;

export type QuestMeshGeneratorPrototype = GetStructType<{
  Attachments: {
    Attaches: {
      BlockingBodyMeshes: string[];
      BlockingGroomSIDs: string[];
      BlockingGrooms: string[];
      BlockingSlots: string[];
      BodyMeshSID: string;
      Weight: number;
    }[];
    SlotName: string;
  }[];
  CustomData: {
    MaterialGroup: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  Groom: {
    CategoryName: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  Materials: {
    MaterialGroup: string;
    Variations: {
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  MergedMesh: string;
  ParentMeshGeneratorSID: string;
  SID: string;
}>;

export type QuestNodePrototype = GetStructType<{
  AbilityPrototypeSID: string;
  AchievementSID: string;
  Activate: boolean;
  ActorBoneName: string;
  AddToPlayerStash: boolean;
  AIThreatState: number;
  AKEventPath: string;
  ApplyRestrictionType: EApplyRestrictionType;
  AssetsToLoad: string;
  AttractionPointType: EAttractionPointType;
  AudioLocalizedAssetsToLoad: string[][];
  BehaviorType: EBehaviorType;
  BenchRuns: number;
  BlendExpForEaseInOut: number;
  BrokenGameDataFilter: EBrokenGameDataFilter;
  bTriggersByAnybody: boolean;
  CallPlayer: boolean;
  CallPlayerRadius: number;
  CameraHeight: number;
  CanBeInterrupted: boolean;
  CanBeIterrupted: boolean;
  CanBeTeleported: boolean;
  CanExitAnytime: boolean;
  ChangeValueMode: EChangeValueMode;
  CircleRadius: number;
  CollisionChannel: number;
  Conditions: Conditions;
  ConsoleCommand: string;
  ContaineredQuestPrototypeSID: string;
  ContextualActionLookAtPlayerRange: number;
  ContextualActionRange: number;
  Continue: boolean;
  ContinueThroughRadio: boolean;
  ContinueWhileCombatComments: string;
  ContinueWhileMovingComments: string;
  CustomRestPlaceSelection: boolean;
  CustomSleepPlaceSelection: boolean;
  DataLayerCombination: string;
  DataLayerName: string;
  Description: string;
  DialogChainPrototypeSID: string;
  DialogMembers: string[];
  DialogObjectLocation: Vec3[];
  DialogToStart: string;
  DisabledEvents: string;
  DisableFlashlightControl: boolean;
  Discovered: boolean;
  Duration: number;
  EffectLocation: Vec3;
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
  Faction: Faction;
  FadeTime: number;
  FailureByCombat: boolean;
  FailureByEmission: boolean;
  FailureByHumanKil: boolean;
  FailureByMutantKill: boolean;
  FailureByPlayerEncounter: boolean;
  FailureByPlayerKill: boolean;
  FailureByTargetLost: boolean;
  FailureByThreat: boolean;
  FinishBattleComments: string;
  FinishOnAKEvent: boolean;
  FirstTargetSID: string;
  FlashlightAction: EFlashlightAction;
  FleeType: EFleeType;
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
  GuardOpponentFactions: string[];
  GuardTargetGuid: string;
  GuardType: EGuardType;
  GuardZoneShapesGuids: string;
  HealingType: EHealingType;
  HideViewType: EHideViewType;
  HitProducer: string;
  HitReceiver: string;
  IdlePosition: Vec3;
  IgnoreAnomalyFields: boolean;
  IgnoreCombat: boolean;
  IgnoreDamageType: EIgnoreDamageType;
  IgnoreEmission: boolean;
  IgnoreEnabledCheck: boolean;
  IgnoreRadiationFeilds: boolean;
  IgnoreThreat: boolean;
  ImagePath: string;
  ImmediatelyIdentifyEnemy: boolean;
  IncludeWoundedEvent: boolean;
  InfotopicLastPhrases: {
    LastPhraseSID: string;
    NextLaunchedPhraseSID: string;
  }[];
  InGameHours: number;
  InGameMinutes: number;
  InitialPitch: number;
  InitialYaw: number;
  InteractableQuestGuid: string;
  IsComment: boolean;
  IsDataLayerEnabled: boolean;
  IsFinalVideo: boolean;
  ItemGeneratorSID: string;
  ItemPrototypeSID: string;
  ItemsCount: number;
  ItemSID: string;
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
  Launchers: {
    Connections: {
      Name: string;
      SID: string;
    }[];
    Excluding: boolean;
  }[];
  LaunchOnQuestStart: boolean;
  LeaveAnomalyZoneComments: string;
  LinkedNodePrototypeSID: string;
  LoadingScreenType: ELoadingDestination;
  LocalizedSequences: string[];
  Location: string;
  LookAt: Vec3;
  LookAtActorFName: string;
  LookAtLocation: Vec3;
  LookAtPlaceholder: string;
  LoopSequence: boolean;
  MainQuest: boolean;
  MarkerDescription: string;
  Markers: string;
  MarkerSID: string;
  MasterAKEventForLoad: string;
  MaxAcceptanceDistance: number;
  MeshGeneratorSID: string;
  MinAcceptanceDistance: number;
  MinFleeTime: number;
  MinimalReputationLevel: ERelationLevel;
  MinPanicTime: number;
  MoveFrom: string;
  MovementPose: EAIMovementPose;
  MovementType: EMovementBehaviour;
  MoveQuestItems: boolean;
  MoveTo: string;
  MoveToFailureRange: number;
  MoveToPath: string;
  MoveToPlayer: boolean;
  MoveToSuccessRange: number;
  NameSID: string;
  NavAreaClass: string;
  NavModifier: string;
  NewDescription: number;
  NewTechnicianSkill: string;
  NewTitle: number;
  NewZoneState: boolean;
  NodePrototypeVersion: number;
  NodesToCleanUpResults: string[];
  NodeType: EQuestNodeType;
  NotePrototypeSID: string;
  NPCToStartDialog: number;
  OutputPinNames: (number | string)[];
  OverrideDialogTopic: EOverrideDialogTopic;
  OverrideScenarioGroupSID: string;
  OwnedHub: string;
  Params: {
    ChangeValue: number;
    ChangeValueMode: EChangeValueMode;
    IgnoreDamageType: EIgnoreDamageType;
    ModifiedCharacterParam: EModifiedCharacterParam;
    Rank: ERank;
  }[];
  PatrolCycleCount: number;
  PatrolPlaceholderGUID: string;
  PauseEmission: boolean;
  PDATutorialNoteSID: string;
  PersonalRestriction: Record<SID, ESpaceRestrictionType>;
  PinWeights: number[];
  PistolDurabilityPercent: number;
  PlayerLeavesWhileCombatComments: string;
  PlayerLeavesWhileMovingComments: string;
  PlayWhenReceived: boolean;
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
    DialogMembers: string;
    ReachPointComment: string;
    ReachPointLocation: Vec3;
  }[];
  ReactionTime: number;
  ReactOnApproachWithWeapon: boolean;
  ReactOnNonEnemySounds: boolean;
  ReactType: ETriggerReact;
  RelationshipValue: number;
  Remove: boolean;
  Repeatable: boolean;
  RepeatableStayAnimation: boolean;
  ReplaceInventory: boolean;
  RequiredInputs: string;
  RequiredSquadMembers: ERequiredSquadMembers;
  RestLocation: Vec3;
  RestrictDeadBodyDespawn: boolean;
  RestrictDeadBodyLootInteraction: boolean;
  RestrictDeadBodyMovementInteraction: boolean;
  RestrictDefeatStateInteraction: boolean;
  RestrictDefeatStateMovementInteraction: boolean;
  RestrictDialogInteractions: boolean;
  RestrictedFaction: Record<Faction, ESpaceRestrictionType>;
  RotationAfterMoveTo: VecRot;
  RotationFreemoveEdge: number;
  RotationStopEdge: number;
  RotationTime: number;
  SaveTypes: ESaveType[];
  ScreenText: string;
  SecondaryWeaponDurabilityPercent: number;
  SecondTargetSID: string;
  SeekPlayer: boolean;
  SelectedDaysOfWeek: number;
  SelfLocation: string;
  SequentialAbilityModificationMode: EModifyAbilitySequenceQuestNodeMode;
  SequentialAbilityPriority: number;
  SetFactionRelationshipAsPersonal: boolean;
  SetQuestActive: boolean;
  ShootingPosition: Vec3;
  ShootTargetLocation: Vec3;
  ShotsQueueCount: number;
  ShouldBeKilled: string;
  ShouldBlendViaFade: boolean;
  ShouldLockPersonalRelationship: boolean;
  ShouldTargetPistol: boolean;
  ShouldTargetPrimaryWeapon: boolean;
  ShouldTargetSecondaryWeapon: boolean;
  SID: string;
  SignalReceiverGuid: string;
  SignalSenderGuid: string;
  SimulateBattle: boolean;
  SleepLocation: Vec3;
  SoundLocation: Vec3;
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
  TargetLocation: Vec3;
  TargetLocations: Vec3[];
  TargetMoneyAmount: number;
  TargetQuestGuid: string;
  TargetQuestGuids: string[];
  TargetRank: ERank;
  TeleportLocationAndRotation: VecRot;
  TeleportType: EGSCTeleportType;
  ThreatSensor: number;
  ThreatsReactRange: number;
  TimerRate: number;
  TimeToStartNextNodeBeforeEnd: number;
  TimeToUseAbility: number;
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
  VariableValue: boolean;
  VideoAssetPath: string;
  VolumeGuid: string;
  WaitAllDialogEndingsToFinish: boolean;
  WaitingPlayer: boolean;
  WaitingTime: number;
  WeaponReady: boolean;
  WeaponState: EWeaponState;
  Weather: EWeather;
  WidgetType: number;
  WithEquipped: boolean;
  WithInventory: boolean;
  WoundedOn: boolean;
}>;

export type QuestNPCGeneratorPrototype = GetStructType<{
  ItemGenerator: ItemGeneratorEntry[];
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type QuestObjPrototype = GetStructType<{
  Abilities: Record<
    Ability,
    {
      ActivationTag: string;
      SID: string;
    }
  >;
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
  Faction: Faction;
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
  Protection: {
    Strike: number;
  };
  Rank: ERank;
  ReactOnNonEnemySounds: boolean;
  ShouldEnableAdamAppleAnimations: boolean;
  ShouldGenerateStashClues: boolean;
  SID: string;
  Text: string;
  TradePrototypeSID: string;
  UnkillableByALife: boolean;
  UseGroomReplacement: boolean;
  VitalParams: {
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
    StaminaDisableThresholds: {
      RegenerationDelay: number;
      StateTags: EStateTag[];
      Threshold: number;
    }[];
  };
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
  ItemGenerator: ItemGeneratorEntry[];
  MoneyGenerator: {
    MaxCount: number;
    MinCount: number;
  };
  SID: string;
  SpecificRewardSound: EUISound;
}>;

export type QuestStashBodyItemGeneratorPrototype = GetStructType<{
  ItemGenerator: ItemGeneratorEntry[];
  SID: string;
}>;

export type RegionMusicPrototype = GetStructType<{
  AmbientStateMusicSwitchPath: string;
  MusicState: EMusicState;
  Region: ERegion;
  RegionSIDGlobalVariable: string;
  SID: string;
}>;

export type RelationPrototype = GetStructType<{
  CharacterReactions: (Record<`${Reaction}->${Reaction}`, number> & {
    Type: ERelationChangingEvent;
  })[];
  ExpansionPolicies: {
    AttackLairRestrictions: Record<`${Faction}->${Faction}`, boolean>;
  };
  FactionReactions: (Record<`${Reaction}->${Reaction}`, number> & {
    Type: ERelationChangingEvent;
  })[];
  FactionRollbackCooldowns: Record<Faction, number>;
  Factions: Record<Faction, string>;
  FactionsInvolvedDistance: number;
  HubReputationRollbackCooldownModifier: number;
  LairReputationRollbackCooldownModifier: number;
  MinRelationLevelToTrade: ERelationLevel;
  NegativeReactionsExcludedFactions: string[];
  PositiveReactionsExcludedFactions: string[];
  RelationLevelRanges: {
    end: number;
    start: number;
  }[];
  Relations: Record<`${Faction}<->${Faction}`, number>;
  RelationVersion: number;
  ReputationRollbackCooldown: number;
  ReputationRollbackRadius: number;
  SID: string;
}>;

export type RestrictorsPrototype = GetStructType<{
  OfflineRestrictors: {
    Active: boolean;
    AreasMask: number;
    Center: string;
    Extents: string;
    GUID: string;
    Orientation0: string;
    Orientation1: string;
    Orientation2: string;
  }[];
  SID: string;
}>;

export type SmartCoverPrototype = GetStructType<{
  SID: string;
  WeaponTypes: {
    EnterCoverOffsets: {
      PerCoverTypeOffsets:
        | string
        | {
            EnterCoverOffsetVector: string;
            EnterSide: EAvailableCoverActionsSide;
            EnterTypes: EAvailableCoverEnterTypes;
          }[];
      SmartCoverType: ESmartCoverType;
    }[];
    LookFromCoverOffsets: {
      PerCoverTypeOffsets:
        | string
        | {
            ActionSide: EAvailableCoverActionsSide;
            HeadOffset: string;
            LookOutSide: EAvailableCoverActionsSide;
            RootOffset: string;
            WeaponOffset: string;
          }[];
      SmartCoverType: ESmartCoverType;
    }[];
    WeaponType: EWeaponType;
  }[];
}>;

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
  BubbleInitialLocation: Vec3;
  CanAttack: boolean;
  CanBeCaptured: boolean;
  CanBeWounded: boolean;
  CanDefend: boolean;
  CanInteractWithPlayer: boolean;
  CenterLocationRotation: {
    Rotation: Rot;
    Vector: Vec3;
  }[];
  ClickerAnomalyArtifactJumpPositions: string;
  CloseDoorRadius: number;
  ClueVariablePrototypeSID: string;
  CollisionSize: Vec3;
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
  FactionGroup: {
    Factions: {
      Faction: Faction;
      SpawnBoxes: {
        Extent: string;
        Location: string;
      }[];
    }[];
    LairSID: string;
  };
  FogDensity: number;
  FogDensitySecond: number;
  FogDensitySecondFogData: number;
  FreeformTriggerHeight: number;
  FreeformTriggerVertices: Vec2[];
  GeigerCurve: string;
  GeigerRadiationIntensity: number;
  GeigerTriggerOffset: number;
  GlobalOnlineModifierDistance: number;
  GlobalOtherOnlineModifierDistance: number;
  HP: number;
  HubOwnerGuid: string;
  ID: number;
  IgnoreCollisionActors: string;
  InLocationRotation: {
    Rotation: Rot;
    Vector: Vec3;
  }[][];
  InfiniteRespawn: boolean;
  InitialInhabitantFaction: string;
  IsALifePoint: boolean;
  IsLootedOnDifficulties: string;
  ItemGeneratorSettings: string;
  ItemSID: string;
  Items: {
    ChanceToSpawn: number;
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
  LightningBallLiveBoxExtent: Vec3;
  LightningBallNavigationPoints: {
    LightningBallLocation: Vec3[];
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
  Mesh: string;
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
  OverrideFaction: string;
  OverrideRank: boolean;
  OwningFaction: string;
  PSYControllerArtifactItemSID: string;
  PSYControllerArtifactLocation: Vec3;
  PackOfItemsPrototypeSID: string;
  Path: {
    Location: string;
    MovementType: EMovementBehaviour;
  }[];
  PatrolPoints: {
    ContextualActionSearchRadius: number;
    Location: string;
    PatrolPointLinks:
      | string
      | {
          DestinationPointIndex: number;
          Weight: number;
        }[];
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
          {
            MinQuantityPerArchetype: number;
            SpawnWeight: number;
          }
        >;
        WipeRespawnTimeoutSeconds: number;
      }
    >;
  }[];
  PostEffectProcessorSID: string;
  PostProcessConfig: string;
  PostProcessRadiationCycleSpeed: number;
  PostProcessRadiationIntensity: number;
  PresetIndex: number;
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
  SignalReceivers: {
    DestroyReceiver: {
      Guid: string;
    };
  };
  SignalSenders: {
    DestroySender: {
      Guid: string;
      Signals: string;
    };
  };
  SimplifiedOverlap: boolean;
  SpawnInRadius: number;
  SpawnOnStart: boolean;
  SpawnType: ESpawnType;
  SpawnedGenericMembers: {
    SpawnedSquadMembersCount: number;
    SpawnedPrototypeSID: SID;
  }[];
  SpawnedPrototypeSID: string;
  SpawnedSquadMembersCount: number;
  SquadMembersQuestSIDs: string[];
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
  }[];
  VolumetricCoverRestrictions: {
    bEnabled: boolean;
    Volumes: string;
  };
  bDisableTickForWeatherController: boolean;
  bForceCodePhysicsDisabled: boolean;
  bForceWeather: boolean;
  bRandomChancesForSeparateItems: boolean;
  bRestrictorVolumeEnabled: boolean;
  bUseCustomLocation: boolean;
  bWakeUpOnStart: boolean;
}>;

export type SQ95_GlobalVariablePrototype = GetStructType<{
  DefaultValue: string;
  SID: string;
  Type: EGlobalVariableType;
}>;

export type StashPrototype = GetStructType<{
  CustomIconPath: string;
  ItemGenerators: {
    Rank: ERank;
    SmartLootParams: {
      AttachParams: {
        MaxPrice: number;
      }[];
      ConsumablesParams: {
        ItemSetCount: number;
        Items: {
          Chance: number;
          ItemPrototypeSID: string;
          MaxCount: number;
          MinCount: number;
          Weight: number;
        }[];
        MaxSpawnChance: number;
        MinSpawnChance: number;
      }[];
      GrenadesParams: {
        ItemSetCount: number;
        Items: {
          Chance: number;
          ItemPrototypeSID: string;
          MaxCount: number;
          MinCount: number;
          Weight: number;
        }[];
        MaxSpawnChance: number;
        MinSpawnChance: number;
      }[];
      HealthParams: {
        Curve: string;
        Items: {
          Chance: number;
          ItemPrototypeSID: string;
          MaxCount: number;
          MinCount: number;
        }[];
        MaxSpawnChance: number;
        MinSpawnChance: number;
      }[];

      PistolWeaponParams: {
        Items: {
          ItemPrototypeSID: string;
          MaxCount: number;

          MinCount: number;

          Weight: number;
        }[];
        MainWeaponAmmoCount: number;

        MaxSpawnChance: number;
        MinSpawnChance: number;

        PriorityCaliber: EAmmoCaliber;
      }[];

      PrimaryWeaponParams: {
        Items: {
          Chance: number;
          ItemPrototypeSID: string;
          MaxCount: number;
          MinCount: number;
          Weight: number;
        }[];
        MainWeaponAmmoCount: number;
        MaxSpawnChance: number;
        MinSpawnChance: number;
        PriorityCaliber: EAmmoCaliber;
      }[];
      SecondaryWeaponParams: {
        Items: {
          Chance: number;
          ItemPrototypeSID: string;
          MaxCount: number;
          MinCount: number;
          Weight: number;
        }[];
        MainWeaponAmmoCount: number;
        MaxSpawnChance: number;
        MinSpawnChance: number;
        PriorityCaliber: EAmmoCaliber;
      }[];
    };
  }[];
  SID: string;
}>;

export type TeleportGroupPrototype = GetStructType<{
  MinTeleportDistance: number;
  SID: string;
}>;

export type TeleportPrototype = GetStructType<{
  EffectPrototypeSIDs: string[];
  SID: string;
  TeleportType: EGSCTeleportType;
}>;

export type TestNPCObjPrototype = GetStructType<{
  CustomMeshGeneratorPrototypeSID: string;
  Faction: Faction;
  ID: number;
  NPCPrototypeSID: string;
  NPCType: ENPCType;
  SID: string;
}>;

export type ThreatPrototype = GetStructType<{
  Actions: {
    ThreatLevelValueMax: number;
    ThreatLevelValueMin: number;
    ThreatValueFreezeTimeSeconds: number;
    ThreatValueLossPerSecond: number;
    Type: EThreatActionType;
  }[];
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
  ReachedThrealLevelSpeechCommands: {};
  ShowThreatIndicator: boolean;
  SID: string;
  ThreatParams: {
    ConfidenceDropToZeroTimeSeconds: number;
    RelationLevels: ERelationLevel[];
    SoundType: ESoundEventType;
    ThreatValue: number;
    Type: EThreatType;
  }[];
}>;

export type TradePrototype = GetStructType<{
  bInfiniteMoney: boolean;
  BuyDiscounts: {
    ConditionSID: string;
    Modifier: number;
  }[];
  Money: number;
  RefreshConditionSID: string;
  SellDiscounts: {
    ConditionSID: string;
    Modifier: number;
  }[];
  SID: string;
  TradeGenerators: {
    ArmorSellMinDurability: number;
    BuyLimitations: EItemType[];
    BuyModifier: number;
    ConditionSID: string;
    ItemGeneratorPrototypeSID: string;
    SellModifier: number;
    WeaponSellMinDurability: number;
  }[];
  TradeTimeLength: number;
  TradeTimeStart: number;
}>;

export type TradeTestBoolProviderPrototype = GetStructType<{
  Days: number;
  Faction: Faction;
  Hours: number;
  ProviderSID: string;
  ProviderSIDs: string[];
  Ranks: ERank[];
  ReputationThreshold: number;
  SID: string;
  Type: EBoolProviderType;
}>;

export type UpdatePopupPrototype = GetStructType<{
  SaveFileVersion: number;
  SID: string;
  TabData: {
    Background: string;
    ContentData: string[];
    ContentSID: string;
    TabBackground: string;
    TabSID: string;
  }[];
}>;

export type UpgradePrototype = GetStructType<{
  AttachPrototypeSIDs: string[];
  BaseCost: number;
  BlockingGlobalVariables: {
    GlobalVariableSID: string;
    Value: number;
  }[];
  BlockingUpgradePrototypeSIDs: string[];
  ConnectionLines: EConnectionLineState[];
  DiscountCoefficient: number;
  EffectPrototypeSIDs: string[];
  HiddenWihoutItem: boolean;
  Hint: string;
  HorizontalPosition: number;
  Icon: string;
  ID: number;
  Image: string;
  InterchangeableUpgradePrototypeSIDs: string[];
  IsModification: boolean;
  LocalizationSID: string;
  RepairCostModifier: number;
  RequiredGlobalVariables: {
    GlobalVariableSID: string;
    Value: number;
  }[];
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
  MinCombatHoldPositionSignificantVisibilityScore: number[];
  MinCombatSignificantVisibilityScore: number[];
  MinCombatSurpriseEnemyLocationSignificantVisibilityScore: number[];
  MinSignificantVisibilityScore: number[];
  PeripheralVisionDistance: number;
  SID: string;
  SurpriseEnemyLocationDistance: number;
  TooCloseVisionDistance: number;
  TooCloseVisionDistanceMultiplier: number;
  VerticalVisionHalvedAngleDegrees: number;
}>;

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

export type WeaponAttributesPrototype = GetStructType<{
  AimShellShutterSocketName: string;
  AIParameters: {
    BehaviorTypes: {
      Experienced: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: string;
        CombatEffectiveFireDistanceMin: string;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Master: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: string;
        CombatEffectiveFireDistanceMin: string;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Newbie: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: string;
        CombatEffectiveFireDistanceMin: string;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Veteran: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: string;
        CombatEffectiveFireDistanceMin: string;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
      Zombie: {
        CharacterWeaponSettingsSID: string;
        CombatEffectiveFireDistanceMax: string;
        CombatEffectiveFireDistanceMin: string;
        Long: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        Medium: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
        NonAutomaticWeaponShotDelay: number;
        Short: {
          IgnoreDispersionMaxShots: number;
          IgnoreDispersionMinShots: number;
          MaxSecondsDelay: number;
          MaxShots: number;
          MinSecondsDelay: number;
          MinShots: number;
        };
      };
    };
  };
  AnimBlueprint: string;
  DefaultWeaponSettingsSID: string;
  MuzzleSocketName: string;
  ParticlesBasedOnHeating: {};
  ShellShutterSocketName: string;
  SID: string;
}>;

export type WeaponFloatProviderPrototype = GetStructType<{
  ProviderSIDs: string[];
  SID: string;
  Type: EFloatProviderType;
  Value: number;
}>;

export type WeaponGeneralSetupPrototype = GetStructType<{
  AdditionalBulletsAfterReloadingCount: number;
  AimGamepadAimAssistPresetSID: string;
  AimMouseAimAssistPresetSID: string;
  AimVFXSocketMinAlpha: number;
  AimingCurve: string;
  AimingEffects: {
    Effects: string[];
    PlayerOnlyEffects: string[];
  };
  AimingFOVModifier: number;
  AimingMovementSpeedModifier: number;
  AimingSound: string;
  AimingTime: number;
  AimingWeaponFOVCurve: string;
  AmmoCaliber: EAmmoCaliber;
  AmmoPerShot: string;
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
    AdditionalMeshes: {
      MeshPrototypeSID: string;
      Socket: string;
    }[];
    AdditionalPlankMeshPrototypeSID: string;
    AdditionalPlankSocket: string;
    AimMuzzleVFXSocket: string;
    AimShellShutterVFXSocket: string;
    AttachPrototypeSID: string;
    BlockingUpgradeIDs: string;
    BlockingUpgradeIds: string[];
    IconPoX: number;
    IconPosY: number;
    MeshPrototypeSID: string;
    Muzzle: string;
    RequiredUpgradeIDs: string[];
    Socket: string;
    WeaponSpecificIcon: string;
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
        AimCrouchModifier: number;
        AimFullCrouchModifier: number;
        AimModifier: number;
      };
      HipModifiers: {
        HipCrouchModifier: number;
        HipFullCrouchModifier: string;
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
  DisplayBP: string;
  FireEventBreak: string;
  FireEventLoop: string;
  FireEventOneShot: string;
  FireInterval: number;
  FireIntervalModifiers: number[];
  FireIntervalRTPCParameter: string;
  FireQueueCount: number;
  FireTypes: EFireType[];
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
  WeaponJamParams: {
    FullJamTime: number;
    JamChanceCoef: number;
  }[];
  WeaponReloadTimePerAttachment: {
    AttachPrototypeSID: string;
    FullReloadTimeMultiplier: number;
    SingleBulletReloadTimeMultiplier: number;
    TacticalReloadTimeMultiplier: number;
    TwinAuxReloadTimeMultiplier: number;
    TwinReloadTimeMultiplier: number;
    TwinTacticalAuxReloadTimeMultiplier: number;
    TwinTacticalReloadTimeMultiplier: number;
    UnloadTime: number;
  }[];
  WeaponStaticMeshParts: {
    Materials: {
      MaterialPath: string;
      MaterialSlot: number;
    }[];
    MeshPath: string;
    SocketName: string;
  }[];
  WeaponType: EWeaponType;
  WeaponTypeSoundSwitch: string;
  bSpawnShell: boolean;
}>;

export type WeaponPrototype = GetStructType<{
  BaseDurability: number;
  Cost: number;
  EffectPrototypeSIDs: string[];
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
  PreinstalledUpgrades: string[];
  SID: string;
  SectionSettings: {
    BottomPosition: number;
    LeftPosition: number;
    ModuleLineDirection: ELineDirection;
    RightPoition: number;
    SectionIsEnabled: boolean;
    TopPosition: number;
    UpgradeLineDirection: ELineDirection;
    UpgradeTargetPartType: EUpgradeTargetPartType;
  }[];
  Type: EItemType;
  Weight: number;
}>;

export type WeatherChainPrototype = GetStructType<{
  SID: string;
  SourceWeather: EWeather;
  TargetWeather: EWeather;
  TransitionSteps: {
    WeatherChains: {
      WeatherTransitionTimeMultiplier: number;
      WeatherType: EWeather;
    }[];
    WeatherChainWeight: number;
  }[];
}>;

export type WeatherPrototype = GetStructType<{
  AltitudeCurveIndex: number;
  SID: string;
  WeatherParams: {
    AutoExposureBias: number;
    Bloom: {
      BloomIntensity: number;
      BloomThreshold: number;
    };
    CloudLuminanceMultiplier: number;
    Clouds: {
      CNContrast: number;

      CNDecay: number;
      CNDensity: number;

      CNDetailAmount: number;
      CNDetailContrast: number;

      CNMaxDensity: number;
      CNSize: number;

      CiNAmount: number;
      CiNContrast: number;

      CiNDensity: number;
      CinSubShape: number;

      CirrusContrast: number;
      CirrusDecay: number;

      CirrusDensity: number;
      CloudSpeed: number;

      CloudSpeedXY: Vec2;
      CloudsPhaseShift: number;

      CloudsTile: number;
      Color1: RGBA;

      Color2: RGBA;
      GlobalDensity: number;

      StratusAmount: number;
      StratusContrast: number;

      StratusDetailAmount: number;
      StratusDetailContrast: number;

      VTCloudDetailScale: number;
      VTCloudScale: number;

      VolumetricMSContribution: number;
      VolumetricMSEccentricity: number;

      VolumetricMSOcclusion: number;
      VolumetricPhaseBlend: number;

      VolumetricPhaseG: number;
      VolumetricPhaseG2: number;
    };
    ColorGrading: {
      ColorContrast: Vec4;
      ColorGain: Vec4;
      ColorGamma: Vec4;
      ColorOffset: Vec4;
      ColorSaturation: Vec4;
      Highlights: {
        ColorContrast: Vec4;
        ColorCorrectionHighlightsMin: number;
        ColorGain: Vec4;
        ColorGamma: Vec4;
        ColorOffset: Vec4;
        ColorSaturation: Vec4;
      };
      Midtones: {
        ColorContrast: Vec4;
        ColorGain: Vec4;
        ColorGamma: Vec4;
        ColorOffset: Vec4;
        ColorSaturation: Vec4;
      };
      Shadows: {
        ColorContrast: Vec4;
        ColorCorrectionShadowsMax: number;
        ColorGain: Vec4;
        ColorGamma: Vec4;
        ColorOffset: Vec4;
        ColorSaturation: Vec4;
      };
    };
    Film: {
      FilmBlackClip: number;
      FilmChannelMixerBlue: RGBA;
      FilmChannelMixerGreen: RGBA;
      FilmChannelMixerRed: RGBA;
      FilmContrast: number;
      FilmDynamicRange: number;
      FilmHealAmount: number;
      FilmSaturation: number;
      FilmShadowTint: RGBA;
      FilmShadowTintAmount: number;
      FilmShadowTintBlend: number;
      FilmShoulder: number;
      FilmSlope: number;
      FilmToe: number;
      FilmToeAmount: number;
      FilmWhiteClip: number;
      FilmWhitePoint: RGBA;
    };
    FogDensity: number;
    FogHeightFalloff: number;
    FogHeightOffset: number;
    FogInscatteringColor: RGBA;
    Moon: {
      BloomMaxBrightness: number;
      BloomScale: number;
      BloomThreshold: number;
      Intensity: number;
      Temperature: number;
      VolumetricScatteringIntensity: number;
    };
    MoonPhase: number;
    MoonScale: Vec3;
    SecondFogDensity: number;
    SecondFogHeightFalloff: number;
    SkyAtmosphere: {
      AerialPespectiveViewDistanceScale: number;

      HeightFogContribution: number;
      MieAbsorption: RGBA;

      MieAbsorptionScale: number;
      MieAnisotropy: number;

      MieExponentialDistribution: number;
      MieScattering: RGBA;

      MieScatteringScale: number;
      MultiScatteringFactor: number;

      OtherAbsorption: RGBA;
      OtherAbsorptionScale: number;

      RayleighExponentialDistribution: number;
      RayleighScattering: RGBA;

      RayleighScatteringScale: number;

      SkyLuminanceFactor: RGBA;
    };
    SkyLight: {
      Intensity: number;
      MinOcclusion: number;
      OcclusionExponent: number;
      VolumetricScatteringIntensity: number;
    };
    SoundCue: string;
    Sun: {
      BloomMaxBrightness: number;
      BloomScale: number;
      BloomThreshold: number;
      Intensity: number;
      Temperature: number;
      VolumetricScatteringIntensity: number;
    };
    SunMoonDiskLuminanceMultiplier: number;
    Time: number;
    VolumetricFogAlbedo: RGBA;
    VolumetricFogEmissive: RGBA;
    VolumetricFogExtinctionScale: number;
  }[];
  WeatherTransitions: {
    bIsDirectTransition: boolean;
    BlendChance: number;
    Timer24Normalized: number;
    WeatherPrototypeSID: string;
  }[];
}>;

export type WeatherSelectionPrototype = GetStructType<
  {
    EmissionPrototypeSID: string;
    Priority: number;
    SID: string;
  } & {
    [k in WeatherSelection]: {
      bAllowInDialogueTransition: boolean;
      BlendWeight: number;
      BlendWeightIncrease: number;
      MaximumCooldownWeatherAmount: number;
      MaximumRepeatAmount: number;
      WeatherDurationMax: number;
      WeatherDurationMin: number;
    };
  }
>;

export type Achievement = GetStructType<
  {
    Goal: number;
    SID: string;
  }[] & {
    AcceptableInterval: number;
    AnomalyPrototypeSID: string;
    ArmorSIDs: string[];
    BleedingThreshold: number;
    Calibers: EAmmoCaliber[];
    DrunkennessThreshold: number;
    DrunknessThreshold: number;
    FoodSet: {
      SID: string;
    }[];
    HeadshotDistance: number;
    HungerThreshold: number;
    Items: string[];
    MarkerTypes: EMarkerType[];
    MinHeight: number;
    MinSquadSize: number;
    MutantSID: string;
    MutantsSID: string[];
    NumberOfWeapons: number;
    PsyThreshold: number;
    RadiationThreshold: number;
    RequiredCount: number;
    SleepinessThreshold: number;
    TargetSID: string;
    TimeWindow: number;
  }
>;

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
    CombatTacticsParamsPerFactions: {
      Bandits: {
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
        UpdateIntervalSecondsMax: number;
        UpdateIntervalSecondsMin: number;
      };
      Humanoid: {
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
        UpdateIntervalSecondsMax: number;
        UpdateIntervalSecondsMin: number;
      };
      Monolith: {
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
        UpdateIntervalSecondsMax: number;
        UpdateIntervalSecondsMin: number;
      };
      Mutant: {
        ChangeChance: number;
        ConfidenceToAttack: number;
        ConfidenceToRetreat: number;
        UpdateIntervalSecondsMax: number;
        UpdateIntervalSecondsMin: number;
      };
    };
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
    MinBehindTreeCoverHeight: string;
    MinGenericCoverHeight: string;
    MinGenericCoverWidth: string;
    MinHighCoverHeight: string;
    MinLowCoverHeight: string;
    MinSmartWidth: string;
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
    FlashlightUseTracePoints: {
      RelativeLocation: {
        X: number;
        Y: number;
        Z: number;
      };
    }[];
    MaxFlashlightAgentProcessPerUpdate: number;
    MaxFlashlightsUsedSimultaneously: number;
    MaxFlashlightUseTracesPerUpdate: number;
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
  HideWeaponWarningBarkDelay: string;
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
    Materials: {
      SID: string;
    }[];
    Translucency: number;
  }[];
  MaxAgentsCount: number;
  MaxHideWeaponWarningFollowDistance: string;
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
    AvailableGrenadesPerFaction: {
      Army: {
        Experienced: number;
        Master: number;
        Newbie: number;
        Veteran: number;
      };
      Bandits: {
        Experienced: number;
        Master: number;
        Newbie: number;
        Veteran: number;
      };
      Humanoid: {
        Experienced: number;
        Master: number;
        Newbie: number;
        Veteran: number;
      };
    };
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

export type AssetLibrary = GetStructType<{
  AkEffectShareSet: {
    Full: string;
    Medium: string;
    Narrow: string;
  };
  AKRtpc: {
    CutsceneRTPCParameter: string;
    DeathRTPCParameter: string;
    DialogueRTPCParameter: string;
    DialogueVolumeRTPCParameter: string;
    DisableCopyrightedMusicRTPCParameter: string;
    EffectsVolumeRTPCParameter: string;
    MainVolumeRTPCParameter: string;
    MusicVolumeRTPCParameter: string;
    MuteAllRTPCParameter: string;
  };
  AnimationBlueprints: {
    BoltAnimationBlueprint: string;
    InjectorAnimationBlueprint: string;
    KnifeAnimationBlueprint: string;
    PDAAnimationBlueprint: string;
  };
  AnomalyBlueprint: string;
  Blueprint: {
    Bolt: string;
    LevelTreesCollection: string;
    Lever: string;
    SceneCaptureCube: string;
    TripleLever: string;
  };
  CharacterBlueprint: {
    Player: string;
  };
  CurveFloat: {
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
  };
  InteractableBlueprint: {
    ItemContainer: string;
    SkeletalItemContainer: string;
  };
  ItemIcons: {};
  Material: {};
  MaterialInstanceConstant: {
    BoltMaterialPath: string;
    Clouds: string;
    PDAMaterial: string;
  };
  MaterialParameterCollection: {
    Foliage: string;
    FOV: string;
    MPC_PPM: string;
  };
  NavModifiers: string;
  NiagaraSystems: {
    TwinkleIdle: string;
    TwinkleInterract: string;
  };
  NPCSpawnerBlueprint: string;
  ParticleSystems: {
    BodyExplodeParticle: string;
  };
  ProjectileBlueprint: {
    BP_A000D: string;
    BP_A000DTP: string;
  };
  SkeletalMesh: {
    BoltSkeletal: string;
    GuitarSkeletal: string;
    InjectorSkeletal: string;
    InjectorSkeleton: string;
    KnifeSkeletal: string;
    PDASkeletal: string;
    SK_ful_sta_01: string;
  };
  StaticMesh: {
    BoxTrigger: string;
    CylinderShape: string;
    CylinderTrigger: string;
    SphereTrigger: string;
  };
  Texture2D: string;
  TextureRenderTarget2D: {};
  UIIcons: {};
  UIWidgetBlueprint: {
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
  };
}>;

export type AutoSaveVariable = GetStructType<{
  AutoSaveIntervalTime: number;
  AutoSaveOnFailRetryIntervalTime: number;
}>;

export type BrokenConfigWhiteList = GetStructType<{}>;

export type CameraManagerConstant = GetStructType<
  {
    FlagValue: EPostProcessEffectType;
    MaterialObjectPath: string;
  }[]
>;

export type CookedMapsList = GetStructType<{
  FilePath: string;
  VisibleName: string;
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
  ArtifactOffsetFromAnomalyBorder: Vec3;
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
  CorpseSeenOnlineTime: number;
  CorpseTimeout: number;
  CorpsesDecalsPoolSize: number;
  CriticalDamageSoundCooldown: number;
  CriticalEffectStartUI: number;
  CriticalShotDamageSound: string;
  CutsceneFOVDefault: number;
  DamageInteractVFXs: {
    Burn: {
      VFXLifeTime: number;
      VFXPath: string;
    };
    ChemicalBurn: {
      VFXLifeTime: number;
      VFXPath: string;
    };
    Shock: {
      VFXLifeTime: number;
      VFXPath: string;
    };
    SteamBurn: {
      VFXLifeTime: number;
      VFXPath: string;
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
  DefaultMapSize: {
    X: number;
    Y: number;
  };
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
  EmissionStartLocation: {
    X: number;
    Y: number;
  };
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
  FlashlightCombatUseChance: {
    Experienced: number;
    Master: number;
    Newbie: number;
    Veteran: number;
  };
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
  LowerRightLocation: Vec2;
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
  PlacesOfInterest: (Vec3 & {
    SID: SID;
  })[];
  PlasticSurfaceMaterial: string;
  PlayVideoState: string;
  PlayVideoWidgetClass: string;
  PlayerAudioLogVolumeDecreaseTime: number;
  PlayerBedSleepTime: number;
  PlayerDeathState: string;
  PlayerMeleeArmorDifferenceCoef: number;
  PlayerPrototypeSID: string;
  PlayerStartingCoords: Vec3;
  PlayerStartingMoney: number;
  PopupClass: string;
  PopupViewClass: string;
  PossessedWeaponFireIntervals: {
    A012: {
      FireInterval: number;
    };
    A045: {
      FireInterval: number;
    };
    A762NATO: {
      FireInterval: number;
    };
    A762Sniper: {
      FireInterval: number;
    };
    A918: {
      FireInterval: number;
    };
    A919: {
      FireInterval: number;
    };
    AGA: {
      FireInterval: number;
    };
    AHEDP: {
      FireInterval: number;
    };
    APG7V: {
      FireInterval: number;
    };
    AVOG: {
      FireInterval: number;
    };
  };
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
    EffectPrototypeSIDs: string[];
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
  UpperLeftLocation: {
    X: number;
    Y: number;
  };
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
  WorldWindDirectionInitial: {
    X: number;
    Y: number;
  };
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

export type Credit = GetStructType<{
  Roles: {
    Names: (number | string)[];
    RoleNameSID: string;
  }[];
  SectionNameSID: string;
}>;

export type GameLoadingVariable = GetStructType<{
  LoadingStepsProgress: {
    Complete: number;
    FinishingUp: number;
    InitializingManagers: number;
    LoadingManagersData: number;
    LoadingModelsData: number;
    LoadingNecessaryActors: number;
    LoadingStart: number;
    SpawningPlaceholders: number;
  };
}>;

export type InputManagerConstant = GetStructType<{
  Actions: {
    ActionName: EInputKey;
    TimeThresholdHold: number;
  }[];
  ControllerType: EInputController;
}>;

export type KeyboardLayoutPreset = GetStructType<{
  Aiming: {
    bIsPlayerMappable: boolean;
    DefaultID: number;
    InputActionSID: string;
    Key: string;
    OldKey: string;
    PlayerMappableOption: string;
    Triggers: EPlayerActionInputTrigger[];
  }[];
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
  Exploration: {
    DefaultID: number;
    InputActionSID: string;
    Key: string;
    Modifiers: EPlayerActionInputModifier[];
    OldKey: string;
    PlayerMappableOption: string;
    Triggers: EPlayerActionInputTrigger[];
    bIsPlayerMappable: boolean;
  }[];
  Grenade: string;
  Guitar: string;
  ImportantChoice: string;
  InspectArtifact: {
    bIsPlayerMappable: boolean;
    DefaultID: number;
    InputActionSID: string;
    Key: string;
    OldKey: string;
    PlayerMappableOption: string;
    Triggers: EPlayerActionInputTrigger[];
  }[];
  Interactivity: string;
  Inventory: string;
  ItemSelector: {
    DefaultID: number;
    InputActionSID: string;
    Key: string;
    Modifiers: EPlayerActionInputModifier[];
    OldKey: string;
    PlayerMappableOption: string;
    Triggers: EPlayerActionInputTrigger[];
    bIsPlayerMappable: boolean;
  }[];
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

export type NPCName = GetStructType<{
  any_rank: {
    FirstNames: string[];
    LastNames: string[];
  };
  experienced: {
    FirstNames: string[];
    LastNames: string[];
  };
  master: {
    FirstNames: string[];
    LastNames: string[];
  };
  newbie: {
    FirstNames: string[];
    LastNames: string[];
  };
  veteran: {
    FirstNames: string[];
    LastNames: string[];
  };
}>;

export type QuickSaveVariable = GetStructType<{
  QuickSaveOverwriteTime: number;
}>;

export type ref = GetStructType<
  {
    AttachID: string;
    CapsuleNames: string[];
    DamageBone: EDamageBone;
    IconPosX: string;
    IconPosY: string;
    Muzzle: string;
    Socket: string;
    UpgradeRequired: string;
  }[]
>;

export type SaveLoadVariable = GetStructType<{
  BackupPath: string;
  CampaignsLimit: number;
  CampaignsSaveName: string;
  LoadingStepsProgress: {
    Complete: number;
    FinishingUp: number;
    InitializingManagers: number;
    LoadingManagersData: number;
    LoadingModelsData: number;
    LoadingNecessaryActors: number;
    LoadingStart: number;
    SpawningPlaceholders: number;
  };
  MinSupportedSaveVersion: number;
  SaveDataPath: string;
  SaveGamesPath: string;
  SavesLimit: {
    Auto: number;
    ExitGame: number;
    FinishMainQuest: number;
    HubExit: number;
    Manual: number;
    ManualHub: number;
    Quest: number;
    Quick: number;
    StartMainQuest: number;
  };
  SaveThreatBlockRadius: number;
  SaveTypeCategories: {
    Subtype: ESaveSubType;
    Types: ESaveType[];
  }[];
  ThumbnailHeight: number;
  ThumbnailsPath: string;
  ThumbnailWidth: number;
}>;

export type Script = GetStructType<{
  ID: number;
  RepetitionInterval: number;
  ScriptsArray: (
    | string
    | {
        ScenarioFlagKey: string;
        ScenarioFlagValue: number;
        ScriptsSubArray: string[];
      }
  )[];
  SID: string;
}>;

export type SettingsVariablesPC = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SettingsVariablesPS5Base = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SettingsVariablesPS5Pro = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SettingsVariablesWin64 = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SettingsVariablesXSS = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SettingsVariablesXSX = GetStructType<{
  "0": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "1": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  "2": {
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
    Time: number;
    Value: number;
  };
  AimAssistMagnetismModifier: number;
  AimAssistSnappingModifier: number;
  AimAssistStickinessModifier: number;
  AimAssistTrackingModifier: number;
  LeftThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  LeftTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightThumbstick: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  RightTrigger: {
    LowerThreshold: number;
    Type: EDeadZoneType;
    UpperThreshold: number;
  };
  SnappingAutomaticTargetChangeEnabled: boolean;
  SnappingCameraMovementToleranceEnabled: boolean;
  SnappingCameraRadiusToleranceEnabled: boolean;
  SnappingTime: number;
}>;

export type SingletonConstant = GetStructType<{
  "0": {
    Exposure: number;
    Value: number;
  };
  "1": {
    Exposure: number;
    Value: number;
  };
  "10": {
    Exposure: number;
    Value: number;
  };
  "11": {
    Exposure: number;
    Value: number;
  };
  "12": EDialogEventType;
  "13": EDialogEventType;
  "14": EDialogEventType;
  "15": EDialogEventType;
  "16": EDialogEventType;
  "17": EDialogEventType;
  "18": EDialogEventType;
  "19": EDialogEventType;
  "2": {
    Exposure: number;
    Value: number;
  };
  "20": EDialogEventType;
  "21": EDialogEventType;
  "22": EDialogEventType;
  "3": {
    Exposure: number;
    Value: number;
  };
  "4": {
    Exposure: number;
    Value: number;
  };
  "5": {
    Exposure: number;
    Value: number;
  };
  "6": {
    Exposure: number;
    Value: number;
  };
  "7": {
    Exposure: number;
    Value: number;
  };
  "8": {
    Exposure: number;
    Value: number;
  };
  "9": {
    Exposure: number;
    Value: number;
  };
  Army: string[];
  Bandits: string[];
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
  Dualshock4: {
    Actions: {
      ActionName: EInputKey;
      TimeThresholdHold: number;
    }[];
    ControllerType: EInputController;
  };
  Emission_LeaderEnd: number;
  Emission_LeaderStart: number;
  FreeStalkers: string[];
  Interact_Friendly: number;
  Interact_Neutral: number;
  Interact_NonFriendly: number;
  Joke: number;
  Keyboard: {
    Actions: {
      ActionName: EInputKey;
      TimeThresholdHold: number;
    }[];
    ControllerType: EInputController;
  };
  Latitude: number;
  LightSourceFadingDurationHoursOnDayNightChange: number;
  Longitude: number;
  Monolith: string[];
  MoonLightMaxBrightness: number;
  NorthOffsetAngle: number;
  NotifyExpireDuration: number;
  NotifyFadeInDuration: number;
  NotifyFadeOutDuration: number;
  Peaceful_CorpseHubComment: number;
  Peaceful_DropCorpse: number;
  Peaceful_LootingEnemyCorpse: number;
  Peaceful_LootingFriendlyCorpse: number;
  PointLight: VecRotTemp;
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
  ReflectionUpdateDistancesSqr: {
    High: number;
    Low: number;
    Medium: number;
    Minimal: number;
  };
  RunOn: number;
  SpeechEventCooldown: {
    CooldownSec: number;
    EventType: ESpeechEventType;
  }[];
  SpotLight: VecRotTemp;
  StarsBrightness: number;
  StartDay: number;
  StartHour: number;
  StartMinute: number;
  StartMonth: number;
  StartSecond: number;
  StartYear: number;
  SunLightMaxBrightness: number;
  TimeZone: number;
  Zombie: string[];
  bDebugLogAssetLoading: boolean;
}>;

export type WaterVariable = GetStructType<
  {
    RainyWater: string;
    RegularWater: string;
  }[]
>;
