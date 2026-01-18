import {
  EChangeValueMode,
  EConditionCheckType,
  EConditionComparance,
  EContextualActionBodyPart,
  EContextualActionEffectType,
  EContextualActionNeeds,
  EContextualActionNodeType,
  EContextualActionPreconditionType,
  ECustomDataDistribution,
  EGlobalVariableType,
  EItemGenerationCategory,
  EJournalEntity,
  EJournalState,
  EMainHandEquipmentType,
  EQuestConditionType,
  EQuestNodeState,
  ERank,
  ERelationLevel,
  ERepetitions,
  ERequiredSquadMembers,
  EThreatAwareness,
  ETriggerReact,
  EWeather,
} from "./enums.mts";

export type WeatherSelection =
  | "CalmBeforeEmission"
  | "Clearly"
  | "Cloudy"
  | "Emission"
  | "Fogy"
  | "LightRainy"
  | "Rainy"
  | "Stormy"
  | "Thundery"
  | "Underground";

export type Caliber =
  | "A012"
  | "A045"
  | "A545"
  | "A556"
  | "A762"
  | "A762NATO"
  | "A762Sniper"
  | "A918"
  | "A919"
  | "A939"
  | "AGA"
  | "AHEDP"
  | "APG7V"
  | "AVOG"
  | "None";

export type WeaponShootDistance = "Long" | "Medium" | "Short";
export type SID = string;
export type Rank = "Newbie" | "Experienced" | "Veteran" | "Master";
export type Newbie = "ERank::Newbie";
export type Experienced = "ERank::Experienced";
export type Veteran = "ERank::Veteran";
export type Master = "ERank::Master";
export type Permutations2<A, B> = A extends string
  ? B extends string
    ? A | B | `${A}, ${B}`
    : A
  : never;

export type Permutations3<A, B, C> = A extends string
  ? B extends string
    ? C extends string
      ? Permutations2<A, B> | Permutations2<B, C> | `${A}, ${B}, ${C}`
      : Permutations2<A, B>
    : A
  : never;

export type Reaction = "Enemy" | "Disaffection" | "Neutral" | "Friend" | "Self";

export type Faction =
  | "Humanoid"
  | "Player"
  | "Bandits"
  | "Monolith"
  | "FreeStalkers"
  | "Army"
  | "Duty"
  | "Freedom"
  | "Varta"
  | "Neutrals"
  | "Militaries"
  | "Noon"
  | "Scientists"
  | "Mercenaries"
  | "Flame"
  | "Law"
  | "Spark"
  | "Corpus"
  | "WildBandits"
  | "GarmataMilitaries"
  | "SphereMilitaries"
  | "NeutralBandits"
  | "VaranBandits"
  | "RooseveltBandits"
  | "ShahBandits"
  | "LokotBandits"
  | "DepoBandits"
  | "DepoVictims"
  | "DocentBandits"
  | "VaranStashBandits"
  | "Diggers"
  | "KosakBandits"
  | "AzimutVarta"
  | "UdavMercenaries"
  | "SafariHunters"
  | "AzimuthMilitaries"
  | "SultanBandits"
  | "ShevchenkoStalkers"
  | "VartaLesnichestvo"
  | "SparkLesnichestvo"
  | "IkarVarta"
  | "KabanBandits"
  | "CrazyGuardians"
  | "ArenaEnemy"
  | "ArenaFriend"
  | "DrozdMilitaries"
  | "EnemyVarta"
  | "NeutralMSOP"
  | "YanovCorpus"
  | "MoleStalkers"
  | "Mutant"
  | "Controller"
  | "Poltergeist"
  | "Bloodsucker"
  | "Zombie"
  | "Chimera"
  | "Burer"
  | "Pseudogiant"
  | "Anamorph"
  | "Sinister"
  | "Pseudobear"
  | "Snork"
  | "Pseudodog"
  | "Boar"
  | "Flesh"
  | "Beaver"
  | "Ratwolf"
  | "Deer"
  | "Rat"
  | "Tushkan"
  | "Stickman"
  | "Blinddog"
  | "Bayun"
  | "CorpusStorm"
  | "DocileLabMutants"
  | "VartaSIRCAA"
  | "YantarZombie"
  | "FriendlyBlinddog"
  | "Lessy"
  | "AlliedMutants"
  | "NoahLesya"
  | "KlenMercenaries"
  | "SIRCAA_Scientist"
  | "MALACHITE_Scientist"
  | "NoonFaustians"
  | "SQ89_SidorMercs"
  | "ScarBoss_Faction"
  | "KorshunovBoss_Faction"
  | "StrelokBoss_Faction"
  | "FaustBoss_Faction";

export type Condition = {
  AITarget: string;
  AmmoRequired: number;
  AnyBody: boolean;
  BoolValue: boolean;
  ChangeValueMode: EChangeValueMode;
  CompletedNodeLauncherNames: string[];
  ConditionComparance: EConditionComparance;
  ConditionType: EQuestConditionType;
  DialogMemberIndex: number;
  EffectPrototypeSID: string;
  EmissionPrototypeSID: string;
  Equipment: EMainHandEquipmentType;
  Faction: string;
  GlobalVariablePrototypeSID: string;
  ItemPrototypeSID: {
    VariableType: EGlobalVariableType;
    VariableValue: string;
  };
  ItemsCount: {
    VariableType: EGlobalVariableType;
    VariableValue: number;
  };
  JournalEntity: EJournalEntity;
  JournalQuestSID: string;
  JournalQuestStageSID: string;
  JournalState: EJournalState;
  LinkedNodePrototypeSID: string;
  Money: {
    VariableType: EGlobalVariableType;
    VariableValue: number;
  };
  NodeState: EQuestNodeState;
  NotePrototypeSID: string;
  NumericValue: number;
  PointToLookAt: Vec3;
  RandomProbability: number;
  Rank: ERank;
  ReactType: ETriggerReact;
  Relationships: ERelationLevel;
  RequiredSquadMembers: ERequiredSquadMembers;
  TargetCharacter: string;
  TargetContextualActionPlaceholder: string;
  TargetCorpsePlaceholder: string;
  TargetItemContainer: string;
  TargetNPC: string;
  TargetNode: string;
  TargetPlaceholder: string;
  TargetPoint: Vec3;
  ThreatAwareness: EThreatAwareness;
  Trigger: string;
  VariableValue: number;
  Weather: EWeather;
  WithBodyArmor: boolean;
  WithEquipped: boolean;
  WithHeadArmor: boolean;
  WithInventory: boolean;
  bTriggersByAnybody: boolean;
};

export type Conditions = (
  | EConditionCheckType
  | (
      | EConditionComparance
      | EQuestConditionType
      | number
      | string
      | Vec3
      | Condition
    )[]
)[];

export type Ability =
  | "Human_CombatPSYAttack"
  | "Human_MeleeAttack_Agent"
  | "Human_PhantomAttack"
  | "AlertedAbility_BlindDog"
  | "AlertedAbility_Bloodsucker"
  | "AlertedAbility_Boar"
  | "AlertedAbility_Chimera"
  | "AlertedAbility_Flesh"
  | "AlertedAbility_PseudoDog"
  | "AlertedAbility_Snork"
  | "BerserkAbilityCamper"
  | "BerserkAbilityCamper_BlindDog"
  | "BerserkAbilityChaser"
  | "BerserkAbilityChaser_BlindDog"
  | "BerserkAbilityChaser_Deer"
  | "BerserkAbilityChaser_Pseudogiant"
  | "BlindDog_BiteAttack"
  | "BlindDog_BiteAttackAnyAngle"
  | "BlindDog_RunAttack_Left"
  | "BlindDog_RunAttack_Right"
  | "BlindDog_Shield"
  | "BlindDog_TurnAttack"
  | "BlindDog_TurnAttackAnyAngle"
  | "Bloodsucker_ClawAttack"
  | "Bloodsucker_JumpAttack"
  | "Bloodsucker_RunAttack_Left"
  | "Bloodsucker_RunAttack_Right"
  | "Bloodsucker_SpawnAnomaly"
  | "Bloodsucker_TurnAttack"
  | "Boar_ClawAttack"
  | "Boar_RunAttack_Left"
  | "Boar_RunAttack_Right"
  | "Boar_TurnAttack"
  | "Burer_ClawAttack"
  | "Burer_Shield"
  | "Burer_Throw"
  | "Burer_ThrowQueue_Grenades"
  | "Burer_WeaponDrag"
  | "Burer_WeaponRiseAndShoot"
  | "CancelBerserkCamper_BlindDog"
  | "CancelBerserkCamper_Bloodsucker"
  | "CancelBerserkCamper_Boar"
  | "CancelBerserkCamper_Burer"
  | "CancelBerserkCamper_Cat"
  | "CancelBerserkCamper_Chimera"
  | "CancelBerserkCamper_Controller"
  | "CancelBerserkCamper_Flesh"
  | "CancelBerserkCamper_PrologueBloodsucker"
  | "CancelBerserkCamper_Pseudodog"
  | "CancelBerserkCamper_Snork"
  | "CancelBerserkCamper_Tushkan"
  | "CancelBerserkCamperNoCooldowns"
  | "CancelBerserkChaser_BlindDog"
  | "CancelBerserkChaser_Bloodsucker"
  | "CancelBerserkChaser_Boar"
  | "CancelBerserkChaser_Burer"
  | "CancelBerserkChaser_Cat"
  | "CancelBerserkChaser_Chimera"
  | "CancelBerserkChaser_Controller"
  | "CancelBerserkChaser_Deer"
  | "CancelBerserkChaser_Flesh"
  | "CancelBerserkChaser_PrologueBloodsucker"
  | "CancelBerserkChaser_Pseudodog"
  | "CancelBerserkChaser_Pseudogiant"
  | "CancelBerserkChaser_Snork"
  | "CancelBerserkChaser_Tushkan"
  | "CancelCharge"
  | "Cat_BlinkTeleport"
  | "Cat_ClawAttack"
  | "Cat_EscapeIsolatedNavmesh"
  | "Cat_Evasion"
  | "Cat_FlyThrough"
  | "Cat_Jump"
  | "Cat_JumpAttack"
  | "Cat_JumpToEnemy"
  | "Cat_SleepinessAura"
  | "Cat_TurnAttack"
  | "ChargeAbility_Boar"
  | "ChargeAbility_Deer"
  | "ChargeAbility_Pseudogiant"
  | "Chimera_ClawAttack"
  | "Chimera_EscapeIsolatedNavmesh"
  | "Chimera_Evasion"
  | "Chimera_FlyThrough"
  | "Chimera_Jump"
  | "Chimera_JumpToEnemy"
  | "Chimera_LongJumpAttack"
  | "Chimera_RunAttack_Left"
  | "Chimera_RunAttack_Right"
  | "Chimera_ShortJumpAttack"
  | "Chimera_TurnAttack"
  | "CombatSummonAbility_Cat"
  | "CombatSummonAbility_Deer"
  | "CombatSummonAbility_PseudoDog"
  | "Controller_ClawAttack"
  | "Controller_Collar_PSYAttack"
  | "Controller_PSYAura"
  | "Controller_PSYStrike"
  | "Controller_RaiseDeadBody"
  | "Controller_RoarAbility"
  | "Controller_ZombifyNPC"
  | "Deer_ClawAttack"
  | "Deer_JumpAttack"
  | "Deer_TurnAttack"
  | "Faust_IntroPSYAttack"
  | "Flesh_ClawAttack"
  | "Flesh_JumpAttack"
  | "Flesh_TurnAttack"
  | "Granit_Shield"
  | "GrowlAbility_Cat"
  | "GrowlAbility_Chimera"
  | "GrowlAbility_Snork"
  | "GruntAbility"
  | "HowlAbility_BlindDog"
  | "HowlAbility_Pseudog"
  | "Human_MeleeAttack"
  | "Human_ThrowGrenade"
  | "Korshunov_Jump"
  | "Korshunov_JumpAttack"
  | "Korshunov_MeleeAttack"
  | "Korshunov_ThrowGrenade"
  | "PhantomAttack"
  | "Poltergeist_ActivateAnomaly"
  | "Poltergeist_AOEPassiveAttack"
  | "Poltergeist_Electro_AOEPassiveAttack"
  | "Poltergeist_Fire_AOEPassiveAttack"
  | "Poltergeist_Shield"
  | "Poltergeist_Throw"
  | "Poltergeist_Toxic_AOEPassiveAttack"
  | "PrologueBloodsucker_ClawAttack"
  | "PrologueBloodsucker_JumpAttack"
  | "PrologueBloodsucker_RunAttack_Left"
  | "PrologueBloodsucker_RunAttack_Right"
  | "PrologueBloodsucker_TurnAttack"
  | "PseudoDog_BiteAttack"
  | "PseudoDog_RunAttack_Left"
  | "PseudoDog_RunAttack_Right"
  | "PseudoDog_TurnAttack"
  | "PseudoDogSummon_BiteAttack"
  | "PseudoDogSummon_RunAttack_Left"
  | "PseudoDogSummon_RunAttack_Right"
  | "PseudoDogSummon_TurnAttack"
  | "Pseudogiant_ClawAttack"
  | "Pseudogiant_RoarAbility"
  | "Pseudogiant_RunAttack_Left"
  | "Pseudogiant_RunAttack_Right"
  | "Pseudogiant_ShockwaveAttack"
  | "Pseudogiant_Throw"
  | "Pseudogiant_TurnAttack"
  | "RetreatSummonAbility_PseudoDog"
  | "RoarAbility"
  | "RoarAbility_Deer"
  | "RoarAbility_PrologueBloodsucker"
  | "Snork_ClawAttack"
  | "Snork_EscapeIsolatedNavmesh"
  | "Snork_Evasion"
  | "Snork_FlyThrough"
  | "Snork_Jump"
  | "Snork_JumpAttack"
  | "Snork_JumpToEnemy"
  | "Snork_KickAttack"
  | "Snork_TurnAttack"
  | "SqueekAbility_Flesh"
  | "SqueekAbility_Tushkan"
  | "Strelok_MeleeAttack"
  | "Strelok_SpawnAnomaliesAbility"
  | "Strelok_SpawnEMIAbility"
  | "TrickSoundAmbush_Bayun_E10_MQ01"
  | "TrickSoundAmbush_Cat"
  | "TrickSoundMimicry_Bayun_E10_MQ01"
  | "TrickSoundMimicry_Cat"
  | "TrickSoundMockery_Bayun_E10_MQ01"
  | "TrickSoundMockery_Cat"
  | "Tushkan_ClawAttack"
  | "Tushkan_JumpAttack"
  | "WoundedPSYStrike"
  | "NoDamagePSYAttack";

export type Vec2 = { X: number; Y: number };
export type Vec3 = Vec2 & { Z: number };
export type Vec4 = Vec3 & { W: number };

export type Rot = { Pitch: number; Roll: number; Yaw: number };
export type VecRot = Vec3 & Rot;
export type VecRotTemp = VecRot & { Temperature: number };
export type RGBA = { A: number; B: number; G: number; R: number };

export type MeshAttachment =
  | "Bbe"
  | "Bbe_a"
  | "BodyArmor"
  | "Bpa"
  | "Bpa_c_d_e"
  | "Cap"
  | "Clo"
  | "Face"
  | "Fbe"
  | "Fbe_a"
  | "Fbe_a_b"
  | "Fbe_a_b_c"
  | "Fbe_b"
  | "Fbe_b_c"
  | "Fbe_c"
  | "Fbe_c_d_e"
  | "Fbe_c_d_e_f"
  | "Fbe_d"
  | "Fbe_d_e"
  | "Fbe_e"
  | "Fbe_f"
  | "Fbe_g_h"
  | "Fbe_l_p"
  | "Fbe_m_q"
  | "Fbe_n_s"
  | "Fbe_o_r"
  | "Gla"
  | "Han"
  | "Hands"
  | "Hea"
  | "Hea_a"
  | "Hea_a_e_f"
  | "Hea_b"
  | "Hea_b_c_d_e_f_g_h"
  | "Hea_c"
  | "Head"
  | "Lch"
  | "Leg"
  | "Lhi"
  | "Lhi_a"
  | "Lhi_a_c"
  | "Lhi_a_g"
  | "Lhi_b"
  | "Lhi_b_d"
  | "Lhi_b_d_f"
  | "Lhi_c"
  | "Lhi_d"
  | "Lhi_e"
  | "Lhi_h_l"
  | "Lhi_j_k"
  | "Mas"
  | "Rch"
  | "Rch_c_d"
  | "Rhi"
  | "Rhi_a"
  | "Rhi_a_b"
  | "Rhi_a_c"
  | "Rhi_a_d"
  | "Rhi_b"
  | "Rhi_b_c"
  | "Rhi_b_d"
  | "Rhi_c"
  | "Rhi_c_b_ab"
  | "Rhi_d"
  | "Rhi_e"
  | "Rhi_h_l"
  | "Rhi_j_k"
  | "Tor"
  | "Faust_Body"
  | "Faust_Clo"
  | "Faust_Face"
  | "Faust_Fbe"
  | "Faust_Lhi";

export type ItemGeneratorEntry = {
  Category: EItemGenerationCategory;
  bAllowSameCategoryGeneration: boolean;
  PossibleItems: {
    AmmoMaxCount: number;
    AmmoMinCount: number;
    Chance: number;
    ItemPrototypeSID: string;
    MaxCount: number;
    MaxDurability: number;
    MinCount: number;
    MinDurability: number;
    Weight: number;
    bRequireWeapon: boolean;
    ItemGeneratorPrototypeSID: string;
    Upgrades: {
      Chance: number;
      MaxCount: number;
      MinCount: number;
      PossibleItems: string;
    };
  }[];
};

type GroomVariation = {
  AdditionalGrooms: GroomVariation[];
  CustomData: {
    ShortHair: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
    };
  };
  FromHairQualityRenderTextureInsteadOfGroom: number;
  GroomBindingPath: string;
  GroomPath: string;
  GroomSID: string;
  MaterialPath: string;
  Materials: {
    CustomData: {
      Distribution: ECustomDataDistribution;
      MaterialGroup: string;
      ParameterID: number;
      Variations: {
        ParameterValue: number;
        Weight: number;
        MaterialInstanceParameters: {
          ParameterName: string;
          TexturePath: string;
        }[];
      }[];
    }[];
    MaterialGroup: string;
    MaterialSlot: number;
    Variations: {
      MaterialPath: string;
      VariationIndex: number;
      Weight: number;
    }[];
  }[];
  VariationIndex: number;
  Weight: number;
  bHasCustomData: boolean;
};

export type GroomCategory = {
  CategoryName: string;
  FromHairQualityUseVariationReplacementMap: number;
  VariationReplacementMap: {
    From: number;
    To: number;
  }[];
  Variations: GroomVariation[];
};

export type FactionGoalType = "Aggressive" | "Defensive" | "Normal";

export type ContextualAction = {
  AnimationData: { MontagePath: string; MontageSection: string }[];
  CanInteractWithPlayer: boolean;
  ConditionalSelectorNodes: ContextualAction[];
  Effects: string;
  Interrupt: ContextualAction;
  IsValidForQuestDialog: boolean;
  NodeType: EContextualActionNodeType;
  Preconditions: string;
  RandomSelectorNodes: ContextualAction[];
  Repetitions: ERepetitions;
  RepetitionsCount: number;
  SequentialSelectorNodes: ContextualAction[];
  ShouldDisableDialogAnimations: boolean;
  ShouldPlayerCrouchDuringDialog: boolean;
  Weights: { Weight: number }[];
};

export type Protection = {
  Burn: number;
  ChemicalBurn: number;
  Fall: number;
  PSY: number;
  Radiation: number;
  Shock: number;
  Strike: number;
};
