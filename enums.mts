// noinspection JSUnusedGlobalSymbols

export type EAIConstraintType = `EAIConstraintType::${"PrepareForEmission"}`;

export type EAIMovementPose = `EAIMovementPose::${"Stand"}`;

export type EALifeDirectorScenarioTarget = `EALifeDirectorScenarioTarget::${
  | "AllyLair"
  | "AttackEnemyLair"
  | "ContextualAction"
  | "None"
  | "Player"
  | "TargetEachOther"}`;

export type EALifeFactionGoalType = `EALifeFactionGoalType::${
  | "Aggressive"
  | "Defensive"
  | "Normal"}`;

export type EAbility = `EAbility::${
  | "AOEAttackPassive"
  | "ActivateAnomaly"
  | "AoEAttack"
  | "Attack"
  | "AuraEffect"
  | "Berserk"
  | "BlinkTeleport"
  | "Charge"
  | "Empty"
  | "HumanMeleeAttack"
  | "LongJump"
  | "PSYStrike"
  | "Roar"
  | "Shield"
  | "StrelokSpecial"
  | "Summon"
  | "Throw"
  | "ThrowGrenade"
  | "ThrowQueue"
  | "TrickSound"
  | "WeaponDrag"
  | "WeaponRiseAndShoot"
  | "Zombification"}`;

export type EAbilityStatePhase = `EAbilityStatePhase::${"Complete"}`;

export type EAgentArchetype = `EAgentArchetype::${"Human" | "Mutant"}`;

export type EAgentType = `EAgentType::${
  | "BlindDog"
  | "Blinddog"
  | "Bloodsucker"
  | "Boar"
  | "Burer"
  | "Cat"
  | "Chimera"
  | "Controller"
  | "Deer"
  | "Flesh"
  | "Human"
  | "MutantGeneric"
  | "PluginAgent"
  | "Poltergeist"
  | "PseudoDog"
  | "Pseudogiant"
  | "RatSwarm"
  | "Snork"
  | "Tushkan"}`;

export type EAimAssistPresetType = `EAimAssistPresetType::${
  | "Default"
  | "Full"
  | "GetCount"}`;

export type EAimAssistWeightType = `EAimAssistWeightType::${
  | "Angle"
  | "DistanceFromApex"}`;

export type EAmmoCaliber = `EAmmoCaliber::${
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
  | "None"}`;

export type EAmmoType = `EAmmoType::${
  | "ArmorPiercing"
  | "Default"
  | "Expanding"
  | "None"
  | "Supersonic"}`;

export type EAnimationReloadTypes = `EAnimationReloadTypes::${
  | "Full"
  | "SingleBullet"
  | "Tactical"
  | "Unload"}`;

export type EAnomalyElementType = `EAnomalyElementType::${
  | "Chemical"
  | "Electro"
  | "Fire"
  | "Gravity"
  | "None"
  | "PSY"}`;

export type EAnomalyType = `EAnomalyType::${
  | "CarouselAnomaly"
  | "ChemicalAnomaly"
  | "ClassicFireAnomaly"
  | "ClickerAnomaly"
  | "DiamondAnomaly"
  | "ElectroAnomaly"
  | "ExpulsionAnomaly"
  | "FlycatcherAnomaly"
  | "LavaLampAnomaly"
  | "LightningBallAnomaly"
  | "None"
  | "PSYAnomaly"
  | "PSYControllerAnomaly"
  | "PSYEmitterAnomaly"
  | "PillowAnomaly"
  | "RazorAnomaly"
  | "SoapBubbleAnomaly"
  | "ToxicCloudAnomaly"}`;

export type EApplyRestrictionType = `EApplyRestrictionType::${"LeaveSame"}`;

export type EArchiartifactType = `EArchiartifactType::${
  | "Ball"
  | "Bolt"
  | "Flower"
  | "Kettle"
  | "None"
  | "Nut"
  | "Water"}`;

export type EArmorScale = `EArmorScale::${
  | "HeavyArmor"
  | "LightArmor"
  | "MediumArmor"}`;

export type EArtifactRarity = `EArtifactRarity::${
  | "Common"
  | "Epic"
  | "Rare"
  | "Uncommon"}`;

export type EArtifactSpawnerExcludeRule = `EArtifactSpawnerExcludeRule::${
  | "ExcludeArchiArtifacts"
  | "ExcludeQuestArtifacts"}`;

export type EArtifactType = `EArtifactType::${
  | "Chemical"
  | "Electro"
  | "Fake"
  | "Fire"
  | "Gravity"
  | "None"
  | "PSY"}`;

export type EAspectRatio = `EAspectRatio::${"Auto"}`;

export type EAttachSlot = `EAttachSlot::${
  | "Barrel"
  | "Flashlight"
  | "Handguard"
  | "Lasersight"
  | "Magazine"
  | "None"
  | "PlankScope"
  | "Scope"}`;

export type EAttachType = `EAttachType::${
  | "GetCount"
  | "GrenadeLauncher"
  | "Grip"
  | "IronSight"
  | "Lasersight"
  | "Magazine"
  | "Muzzle"
  | "PlankScope"
  | "Scope"
  | "Shotgun"
  | "Silencer"}`;

export type EAttractionPointType = `EAttractionPointType::${
  | "ExitLookAt"
  | "FollowCharacterBone"
  | "FollowObject"
  | "StaticLocation"}`;

export type EAudioRoomPresetBandwidth = `EAudioRoomPresetBandwidth::${
  | "Close"
  | "Custom"
  | "HalfOpen"
  | "Isolated"
  | "None"
  | "Open"}`;

export type EAvailableCoverActionsSide = `EAvailableCoverActionsSide::${
  | "Center"
  | "Left"
  | "Right"}`;

export type EAvailableCoverEnterTypes = `EAvailableCoverEnterTypes::${
  | "Long"
  | "Short"}`;

export type EBehaviorType = `EBehaviorType::${
  | "Berserk"
  | "Confused"
  | "Escort"
  | "Flee"
  | "Follow"
  | "Guard"
  | "Kill"
  | "MoveTo"
  | "Pacifist"
  | "Panic"
  | "Patrol"
  | "Rest"
  | "ShootTarget"
  | "Sleep"
  | "Stay"
  | "UseAbility"}`;

export type EBeneficial = `EBeneficial::${"Negative" | "None" | "Positive"}`;

export type EBodyMeshType = `EBodyMeshType::${"Attach" | "Face"}`;

export type EBoltActionWeaponState = `EBoltActionWeaponState::${
  | "NoBoltAction"
  | "ReadyToShoot"}`;

export type EBoolProviderType = `EBoolProviderType::${
  | "And"
  | "And provider - Player has Experienced rank AND at least 500 Reputation with Duty"
  | "Constant"
  | "FactionRelation"
  | "None"
  | "Not"
  | "Not provider - Player doesn't have Experienced rank and has less than 500 Reputation with Duty"
  | "Or"
  | "Or provider - Player has Experienced rank OR at least 500 Reputation with Duty"
  | "PlayerRank"
  | "PlayerUnderRoof"
  | "TargetHasEffectBoolProvider"
  | "TargetInShelter"
  | "TargetRank"
  | "TargetRelation"
  | "TraderRegenerationDays"
  | "TraderRegenerationHours"}`;

export type EBrokenGameDataFilter =
  `EBrokenGameDataFilter::${"UnderDraftComment"}`;

export type ECalculateSignificance = `ECalculateSignificance::${"ScreenSize"}`;

export type ECameraShakeEffectSubtype =
  `ECameraShakeEffectSubtype::${"None // MP: There is no camera shake asset mentioned, so I will disable it for now"}`;

export type ECameraShakeGroupType = `ECameraShakeGroupType::${
  | "MaxCount"
  | "None"
  | "Priority"}`;

export type ECameraShakeType = `ECameraShakeType::${
  | "Constant"
  | "FloatProvider"
  | "None"
  | "Vital"}`;

export type ECauseOfDeath = `ECauseOfDeath::${"Range"}`;

export type EChangeValueMode = `EChangeValueMode::${
  | "Add"
  | "Set"
  | "Subtract"}`;

export type ECollisionChannel = `ECollisionChannel::${"ECC_Visibility"}`;

export type ECollisionFormType = `ECollisionFormType::${"Box" | "Cylinder"}`;

export type EColorBlindMode = `EColorBlindMode::${"None"}`;

export type EConditionCheckType = `EConditionCheckType::${"And" | "Or"}`;

export type EConditionComparance = `EConditionComparance::${
  | "Equal"
  | "Greater"
  | "GreaterOrEqual"
  | "Less"
  | "LessOrEqual"
  | "NotEqual"}`;

export type EConnectionLineState = `EConnectionLineState::${
  | "Down"
  | "Middle"
  | "None"
  | "Top"}`;

export type EConsumableType = `EConsumableType::${
  | "Food"
  | "Guitar"
  | "Medicine"
  | "None"}`;

export type EContextualActionBodyPart = `EContextualActionBodyPart::${
  | "Back"
  | "Head"
  | "Skirt"}`;

export type EContextualActionEffectType =
  `EContextualActionEffectType::${"ChangeNeedValue"}`;

export type EContextualActionNeeds = `EContextualActionNeeds::${
  | "Anecdote"
  | "Detector"
  | "Dialog"
  | "Drink"
  | "Eat"
  | "Emission"
  | "Fight"
  | "Guard"
  | "Guitar"
  | "Idle"
  | "Monolog"
  | "PDA"
  | "Patrolling"
  | "Quest"
  | "Rest"
  | "RunOnTalking"
  | "Sleep"
  | "Smoke"
  | "WeaponCleaning"
  | "Work"}`;

export type EContextualActionNodeType = `EContextualActionNodeType::${
  | "Animation"
  | "ConditionalSelector"
  | "DistanceSelector"
  | "RandomSelector"
  | "SequentialSelector"
  | "SoundDependentAnimation"
  | "Start"}`;

export type EContextualActionPreconditionType =
  `EContextualActionPreconditionType::${
    | "AllowedAgentType"
    | "AvailableBodyPart"
    | "Faction"
    | "GlobalVariable"
    | "ItemInInventory"
    | "NPCPrototype"
    | "Rank"
    | "Weather"}`;

export type EContextualAgentType = `EContextualAgentType::${
  | "BlindDog"
  | "Bloodsucker"
  | "Boar"
  | "Burer"
  | "Cat"
  | "Chimera"
  | "Controller"
  | "Deer"
  | "Flesh"
  | "Human"
  | "PseudoDog"
  | "Pseudogiant"
  | "Snork"
  | "Tushkan"
  | "Zombie"}`;

export type ECrosshairType = `ECrosshairType::${
  | "Arc"
  | "Circle"
  | "Circle // Circle Point Cross Arc"
  | "Cross"
  | "Cross // Circle Point Cross Arc"
  | "Empty"
  | "Point"
  | "Point // Circle Point Cross Arc"}`;

export type ECrosshairTypeSetting = `ECrosshairTypeSetting::${"Regular"}`;

export type ECustomDataDistribution = `ECustomDataDistribution::${
  | "Custom"
  | "Uniform"}`;

export type EDamageBone = `EDamageBone::${"Body" | "Head" | "Limbs"}`;

export type EDamageSource = `EDamageSource::${
  | "AnomalyStrike"
  | "BiteLarge"
  | "BiteRat"
  | "BiteSmall"
  | "Buckshot"
  | "Bullet"
  | "BulletHeavy"
  | "Carousel"
  | "Chemical"
  | "CutLarge"
  | "CutSmall"
  | "Electricity"
  | "Explosion"
  | "Fire"
  | "Hunger"
  | "IronWind"
  | "None"
  | "PSY"
  | "PoltergeistChemicalCollisionAttack"
  | "PoltergeistCommonCollisionAttack"
  | "PoltergeistElectroCollisionAttack"
  | "PoltergeistFireCollisionAttack"
  | "RamLarge"
  | "RamSmall"
  | "ShockWave"
  | "WeaponButt"}`;

export type EDamageType = `EDamageType::${
  | "Burn"
  | "ChemicalBurn"
  | "Fall"
  | "Hunger"
  | "PSY"
  | "Physics"
  | "Radiation"
  | "Shock"
  | "Strike"}`;

export type EDeadZoneType = `EDeadZoneType::${"Radial"}`;

export type EDestructionActionType = `EDestructionActionType::${
  | "Destroy"
  | "Explode"
  | "NoActionSelected"
  | "PlaySound"
  | "PlayVisualEffect"
  | "SetNewMesh"
  | "SpawnItems"}`;

export type EDetectorType = `EDetectorType::${
  | "Bear"
  | "Echo"
  | "Gilka"
  | "None"
  | "Veles"}`;

export type EDialogAction = `EDialogAction::${
  | "Attack"
  | "Bribe"
  | "Bye"
  | "Drink"
  | "Eat"
  | "FactionRelationshipCheck"
  | "FastTravel"
  | "GetItem"
  | "GetMoney"
  | "GiveItem"
  | "GiveMedkit"
  | "Guide"
  | "GuideSelection"
  | "GuideUI"
  | "Heal"
  | "Hit"
  | "Laugh"
  | "OpenTradeMenu"
  | "OpenUpgradeMenu"
  | "RankCheck"
  | "Reward"
  | "SetGlobalVariable"
  | "ShowItem"
  | "ShowMoney"
  | "SideQuest"
  | "TerminateDialog"
  | "Threat"
  | "TimedAnswer"}`;

export type EDialogAnimationType = `EDialogAnimationType::${
  | "AgathaIdleListeningStiff1"
  | "AgathaIdleListeningStiff2"
  | "AgathaIdleListeningStiff3"
  | "AgathaIdleTalkingStiff1"
  | "AgathaIdleTalkingStiff2"
  | "AgathaNodUsual"
  | "AgathaSmokeIdleListeningStiff2"
  | "AgathaSmokeIdleListeningStiff4"
  | "AgathaSmokeIdleListeningStiff5"
  | "AgathaSmokeIdleTalkingStiff1"
  | "AgathaSmokeIdleTalkingStiff2"
  | "AgathaSmokeIdleTalkingStiff3"
  | "AgathaSmokeIdleTalkingStiff4"
  | "AgathaSmokeIdleTalkingStiff5"
  | "AgathaSmokeNodUsual1"
  | "AgathaSmokeNodUsual2"
  | "AgathaSmokeUniqueSmoking1"
  | "AgathaSmokeUniqueSmoking2"
  | "BerezaHippieUsual"
  | "BerezaIdleTalkingHandUsual"
  | "BerezaIdleWaitingHand"
  | "BerezaTalkingAgree"
  | "BerezaTalkingHandWave"
  | "BerezaTalkingNegative"
  | "DoroznukIdleListeningUsual1"
  | "DoroznukIdleTalkingUsual"
  | "DoroznukIdleWaiting1"
  | "DoroznukIdleWaiting2"
  | "DoroznukTalkingAgree"
  | "DoroznukTalkingDoubt"
  | "DoroznukTalkingExpressive"
  | "DoroznukTalkingFingerExpressive"
  | "DoroznukTalkingHandWave"
  | "DoroznukTalkingNegative"
  | "DoroznukTalkingPointdown"
  | "DoroznukTalkingUsual1"
  | "DoroznukTalkingUsual2"
  | "DrunkIdleListening"
  | "DrunkIdleListening2"
  | "DrunkIdleListening3"
  | "DrunkTalkingFingerExpressive"
  | "DrunkTalkingFingerExpressive2"
  | "DrunkTalkingForwardUsual"
  | "DrunkTalkingLong"
  | "DrunkTalkingLong1"
  | "DrunkTalkingLong2"
  | "DrunkTalkingLong3"
  | "EDialogAnimationType_MAX"
  | "HarpiaIdleListeningStiff1"
  | "HarpiaIdleListeningUsual"
  | "HarpiaIdleTalkingArmOnGunUsual"
  | "HarpiaIdleTalkingUsual1"
  | "HarpiaIdleTalkingUsual2"
  | "HarpiaNodExpressive"
  | "HarpiaTalkingLongUsual"
  | "Idle"
  | "KalinaIdleListeningStiff"
  | "KalinaIdleListeningUsual"
  | "KalinaIdleTalkingUsual"
  | "KalinaTalkingArmsUsual1"
  | "KalinaTalkingArmsUsual2"
  | "KalinaTalkingFingerExpressive"
  | "KalinaTalkingGoAwayExpressive"
  | "KalinaTalkingLongUsual"
  | "NPCAllInPosition"
  | "NPCAngerTalkingExpressive"
  | "NPCAngerTalkingUsual_NEW"
  | "NPCApprovalListeningStiff"
  | "NPCApprovalListeningUsual"
  | "NPCApprovalTalkingExpressive"
  | "NPCApprovalTalkingUsual"
  | "NPCArguingArmsExpressive"
  | "NPCArguingQuestionExpressive"
  | "NPCArquingTreatExpressiveLong_NEW"
  | "NPCCallTalkingExpressive"
  | "NPCCallTalkingUsual"
  | "NPCCallTalkingUsual2_NEW"
  | "NPCDisappointmentTalkingExpressive"
  | "NPCDisappointmentWaveStiff"
  | "NPCDisapprovalDoubtExpressive"
  | "NPCDisapprovalDoubtStiff"
  | "NPCDisapprovalListeningBusyUsual_NEW"
  | "NPCDisapprovalListeningExpressive"
  | "NPCDisapprovalListeningUsual1"
  | "NPCDisapprovalListeningUsual2"
  | "NPCDisapprovalTalkingExpressive"
  | "NPCDisapprovalTalkingStiff1"
  | "NPCDisapprovalTalkingStiff2"
  | "NPCDisapprovalTalkingStiff3"
  | "NPCDisapprovalTalkingUsual"
  | "NPCDisapprovalTalkingUsual2"
  | "NPCDisapprovalThreatExpressive1"
  | "NPCDisapprovalThreatExpressive2"
  | "NPCDrinkPills"
  | "NPCDrinkToast"
  | "NPCFacepalm"
  | "NPCFarewellTalkingExpressive"
  | "NPCFarewellTalkingStiff"
  | "NPCFarewellTalkingUsual"
  | "NPCFeelingSick"
  | "NPCGive"
  | "NPCGive2"
  | "NPCGreetingTalkingExpressive"
  | "NPCGreetingTalkingStiff"
  | "NPCGreetingTalkingUsual1"
  | "NPCGreetingTalkingUsual2"
  | "NPCHandToForehead"
  | "NPCIdleListeningUsual1"
  | "NPCIdleListeningUsual2"
  | "NPCIdleListeningUsual3"
  | "NPCIdleListeningUsual4"
  | "NPCIdleTalkingArmsUsual"
  | "NPCIdleTalkingCrossedArmRight"
  | "NPCIdleTalkingExpressive"
  | "NPCIdleTalkingExpressive1"
  | "NPCIdleTalkingExpressive2"
  | "NPCIdleTalkingHeadswayStiff"
  | "NPCIdleTalkingStiff1"
  | "NPCIdleTalkingStiff2"
  | "NPCIdleTalkingStiff3"
  | "NPCIdleTalkingUsual1"
  | "NPCIdleTalkingUsual2"
  | "NPCIdleTalkingUsual3"
  | "NPCIdleTalkingUsual4"
  | "NPCIdleTalkingUsual5"
  | "NPCIdleTalkingUsual6"
  | "NPCIdleWaitingCrossedArms"
  | "NPCIdleWaitingExpressive2"
  | "NPCIdleWaitingHand"
  | "NPCIdleWaitingStomachHands"
  | "NPCIdleWaitingUsual1"
  | "NPCIdleWaitingUsual2"
  | "NPCPSYListeningVoicesExpressive1"
  | "NPCPSYListeningVoicesExpressive2"
  | "NPCPointBack"
  | "NPCPointHimself"
  | "NPCPointPlayer"
  | "NPCPointdown_NEW"
  | "NPCQuietly"
  | "NPCReconciliationTalkingStiff"
  | "NPCReconciliationTalkingUsual"
  | "NPCReconcillationTalkingExpressive"
  | "NPCReconcillationTalkingUsual"
  | "NPCSalute"
  | "NPCScaredTalkingStiff1"
  | "NPCScaredTalkingStiff2"
  | "NPCScaredTalkingUsual"
  | "NPCTake1"
  | "NPCThinkingStiff"
  | "NPCUsePDA"
  | "NPCWoundedArmLeft"
  | "NPCWoundedArmRight"
  | "NPCWoundedDisappointment"
  | "NPCWoundedGratitude"
  | "NPCWoundedSorry"
  | "None"
  | "PlayerAgree"
  | "PlayerApplause"
  | "PlayerApproval"
  | "PlayerArmSwingLeft"
  | "PlayerArmSwingRight"
  | "PlayerBackOn"
  | "PlayerBothhandsStatement"
  | "PlayerConvince"
  | "PlayerDisapproval"
  | "PlayerDisapprovalRight"
  | "PlayerDrinkVodka"
  | "PlayerFingerCrunching"
  | "PlayerFingerpointOpenpalm"
  | "PlayerFku"
  | "PlayerGiveItem"
  | "PlayerHeadshakeRefuse"
  | "PlayerHello"
  | "PlayerMoney"
  | "PlayerNod"
  | "PlayerOpenHandsExpressive"
  | "PlayerOpenpalmRight"
  | "PlayerPeace"
  | "PlayerPlayerSalute"
  | "PlayerPoindownLeft"
  | "PlayerPoindownRight"
  | "PlayerPointForward"
  | "PlayerPointNPCLeft"
  | "PlayerPointUp"
  | "PlayerRefuse"
  | "PlayerShowBadge"
  | "PlayerShowItem"
  | "PlayerTakeItem"
  | "PlayerWavingHandExpressive"
  | "PlayerWavingHands"
  | "PlayerWhatever"
  | "SidorovichNotebook"
  | "StriderTouchneck"
  | "TalkWalkieTalkie_E02_SQ01"
  | "TalkWalkieTalkie_E03_MQ03_1"
  | "TalkWalkieTalkie_E05_MQ01"
  | "TalkWalkieTalkie_E05_MQ05"
  | "TalkWalkieTalkie_E05_SQ01_2"
  | "TalkWalkieTalkie_E06_MQ01_1"
  | "TalkWalkieTalkie_E06_MQ01_2"
  | "TalkWalkieTalkie_E06_MQ01_3"
  | "TalkWalkieTalkie_E06_MQ02"
  | "TalkWalkieTalkie_E07_MQ01"
  | "TalkWalkieTalkie_E07_MQ01_2"
  | "TalkWalkieTalkie_E08_MQ03"
  | "TalkWalkieTalkie_E08_MQ04"
  | "TalkWalkieTalkie_E08_MQ05"
  | "TalkWalkieTalkie_E14_MQ01"
  | "TalkWalkieTalkie_E14_MQ1_2"
  | "TalkWalkieTalkie_E14_MQ1_3"
  | "TalkWalkieTalkie_SQ13"
  | "TalkWalkieTalkie_SQ18"}`;

export type EDialogEventCategory = `EDialogEventCategory::${
  | "Combat"
  | "HitReaction"}`;

export type EDialogEventType = `EDialogEventType::${
  | "CallPlayer"
  | "Chatter"
  | "Combat_Action_Cover"
  | "Combat_Action_Detour"
  | "Combat_Action_EnemyDead"
  | "Combat_Action_EnemyGrenade"
  | "Combat_Action_EnemyHit"
  | "Combat_Action_FireSupression"
  | "Combat_Action_Flank"
  | "Combat_Action_FriendlyDead"
  | "Combat_Action_FriendlyFire"
  | "Combat_Action_FriendlyGrenade"
  | "Combat_Action_FriendlyHit"
  | "Combat_Action_Move"
  | "Combat_Action_Reload"
  | "Combat_EnemyFound"
  | "Combat_EnemyRetreat"
  | "Combat_EnemySearch"
  | "Combat_Over"
  | "Combat_SearchEnd"
  | "Combat_SelfRetreat"
  | "Combat_Start"
  | "Combat_Threats_AlertedSearch"
  | "Combat_Threats_AlertedSearchEnd"
  | "Combat_Threats_EnemySearch"
  | "Combat_Threats_ThreatDetected"
  | "Combat_Wounded_GoingToHeal"
  | "Combat_Wounded_Grunt_HealReceive"
  | "Combat_Wounded_HealingGratitude"
  | "Combat_Wounded_Knocked"
  | "Combat_Zombie_Attack"
  | "Combat_Zombie_Moan"
  | "Count"
  | "DefeatComment"
  | "DialogAction_Laugh"
  | "Emission_LeaderEnd"
  | "Emission_LeaderStart"
  | "HitReaction_AgonyDeath"
  | "HitReaction_Anomaly"
  | "HitReaction_AverageDeath"
  | "HitReaction_Bullet"
  | "HitReaction_CarouselDeath"
  | "HitReaction_Explosion"
  | "HitReaction_InstaDeath"
  | "HitReaction_Melee"
  | "HitReaction_Mutant"
  | "HitReaction_Transformation"
  | "HitReaction_WheezingDeath"
  | "Interact_Bump"
  | "Interact_Busy"
  | "Interact_Friendly"
  | "Interact_HideWeapon"
  | "Interact_Neutral"
  | "Interact_NonFriendly"
  | "Interact_SpeakToLeader"
  | "Joke"
  | "Peaceful_CorpseHubComment"
  | "Peaceful_DropCorpse"
  | "Peaceful_LootingEnemyCorpse"
  | "Peaceful_LootingFriendlyCorpse"
  | "Relax_EmissionFirstMessage"
  | "Relax_EmissionSecondMessage"
  | "Relax_EmissionThirdMessage"
  | "RunOn"}`;

export type EDialogPriority = `EDialogPriority::${"None"}`;

export type EDistanceSelectorCondition = `EDistanceSelectorCondition::${
  | "MinIn"
  | "MinOut"}`;

export type EDuplicateResolveType = `EDuplicateResolveType::${
  | "KeepAll"
  | "KeepNew"
  | "KeepOld"}`;

export type EEffectDisplayType = `EEffectDisplayType::${
  | "EffectLevel"
  | "ValueAndTime"}`;

export type EEffectSource = `EEffectSource::${
  | "Armor"
  | "Artifact"
  | "Consumable"
  | "Debug"
  | "Obj"
  | "Other"
  | "Weapon"}`;

export type EEffectType = `EEffectType::${
  | "Accuracy"
  | "AddAttachment"
  | "AdditionalInventoryWeight"
  | "AimingMovementSpeed"
  | "AimingTime"
  | "AmmoPerShot"
  | "ArmorItemWeight"
  | "ArmorPiercing"
  | "ArtifactSlots"
  | "BaseDamage"
  | "Bleeding"
  | "BulletDropLength"
  | "BulletSpeedSlowdown"
  | "CameraShake"
  | "ChangeCaliber"
  | "Comfort"
  | "Composite"
  | "Damage"
  | "DegenBleeding"
  | "DegenRadiation"
  | "Dispersion"
  | "DispersionMaxRadiusExtension"
  | "DispersionPerIterationRadiusExtension"
  | "DistanceDropOffLength"
  | "EffectiveFireDistance"
  | "FireInterval"
  | "Health"
  | "HoldBreathDrain"
  | "HungerPoints"
  | "IdleSwayXModifier"
  | "IdleSwayYModifier"
  | "Invulnerability"
  | "MaxDurability"
  | "MinBulletDistanceDamage"
  | "MovementSpeed"
  | "None"
  | "OpenSlotForAttachments"
  | "PenaltyLessWeight"
  | "ProtectionBurn"
  | "ProtectionChemical"
  | "ProtectionPSY"
  | "ProtectionRadiation"
  | "ProtectionShock"
  | "ProtectionStrike"
  | "Radiation"
  | "Recoil"
  | "RecoilRadiusNormalizationInterval"
  | "RegenStamina"
  | "SPDrain"
  | "ShowEquipmentTime"
  | "SleepinessPoints"
  | "VelocityDamage"
  | "WeaponItemWeight"}`;

export type EEmissionAIEvent = `EEmissionAIEvent::${
  | "EmissionActive"
  | "EmissionDanger"
  | "EmissionEnd"
  | "EmissionStart"}`;

export type EEmissionStage = `EEmissionStage::${
  | "ActivateQuest"
  | "Active"
  | "AfterTheStorm"
  | "BeforeTheStorm"
  | "ShockWave"}`;

export type EEmotionalFaceMasks = `EEmotionalFaceMasks::${
  | "Angry"
  | "Happy"
  | "None"
  | "Sad"
  | "Scared"
  | "Surprised"}`;

export type EEvadeActionType = `EEvadeActionType::${"Back" | "Left" | "Right"}`;

export type EFaceBlockingBlendMasks = `EFaceBlockingBlendMasks::${
  | "Cheeks"
  | "Chin"
  | "Eyes"
  | "Forehead"
  | "LeftCheek"
  | "LeftEye"
  | "LeftTemple"
  | "Mouth"
  | "Nose"
  | "OralCavity"
  | "RightCheek"
  | "RightEye"
  | "RightTemple"
  | "Temples"
  | "Throat"}`;

export type EFastUseGroupType = `EFastUseGroupType::${"Secondary"}`;

export type EFireType = `EFireType::${"Automatic" | "Queue" | "SemiAutomatic"}`;

export type EFlashlightAction = `EFlashlightAction::${
  | "Disable"
  | "TurnOff"
  | "TurnOn"}`;

export type EFlashlightPriority = `EFlashlightPriority::${
  | "Chest"
  | "FlashlightWeaponAttachment"
  | "Head"}`;

export type EFleeType = `EFleeType::${
  | "FleeFromCurrentLocation"
  | "FleeFromPlayer"}`;

export type EFloatProviderType = `EFloatProviderType::${
  | "Add"
  | "Blink"
  | "Conditional"
  | "Constant"
  | "Multiply"
  | "None"
  | "ObjParam"
  | "PlayerVital"
  | "PostEffect"
  | "Weather"}`;

export type EGSCTeleportType = `EGSCTeleportType::${
  | "Classic"
  | "Default"
  | "Immersive"
  | "Instant"
  | "None"
  | "Quest"}`;

export type EGameDifficulty = `EGameDifficulty::${"Easy" | "Hard" | "Medium"}`;

export type EGlobalVariableType = `EGlobalVariableType::${
  | "Bool"
  | "Int"
  | "String"}`;

export type EGoalPriority = `EGoalPriority::${
  | "HigherThanALife"
  | "HigherThanAnomaly"
  | "HigherThanCombat"
  | "HigherThanEmission"
  | "HigherThanThreat"}`;

export type EGrenadeType = `EGrenadeType::${"F1" | "None" | "RGD5"}`;

export type EGuardType = `EGuardType::${
  | "GuardPlayer"
  | "GuardTarget"
  | "GuardZone"}`;

export type EHealingType = `EHealingType::${
  | "Dialog"
  | "HoldComponent"
  | "Quest"}`;

export type EHideViewType = `EHideViewType::${"ForceHide" | "Hide" | "Unhide"}`;

export type EIgnoreDamageType = `EIgnoreDamageType::${
  | "IgnorePSY"
  | "Invulnerable"
  | "None"
  | "Unfocusable"
  | "Unkillable"}`;

export type EInputController = `EInputController::${
  | "Dualshock4"
  | "KeyboardAndMouse"}`;

export type EInputKey = `EInputKey::${
  | "Circle"
  | "Cross"
  | "LeftShoulder"
  | "LeftThumbstickButton"
  | "LeftTrigger"
  | "None"
  | "RightShoulder"
  | "RightThumbstickButton"
  | "RightTrigger"
  | "Square"
  | "Triangle"}`;

export type EInputMappingContextPriority = `EInputMappingContextPriority::${
  | "Exclusive"
  | "High"
  | "Low"
  | "Lowest"
  | "Medium"}`;

export type EInteractFXType = `EInteractFXType::${
  | "LadderEndInteractBot"
  | "LadderEndInteractTop"
  | "LadderIdle"
  | "LadderMevementFastEnd"
  | "LadderMovementFast"
  | "LadderMovementFoot"
  | "LadderMovementHand"
  | "LadderMovementJump"
  | "LadderStartInteractBottom"
  | "LadderStartInteractTop"}`;

export type EInventoryEquipmentSlot = `EInventoryEquipmentSlot::${
  | "Artifact1"
  | "Body"
  | "Detector"
  | "Head"
  | "None"
  | "Pistol"
  | "PrimaryWeapon"}`;

export type EItemContainerType = `EItemContainerType::${
  | "PackOfItems"
  | "Stash"}`;

export type EItemGenerationCategory = `EItemGenerationCategory::${
  | "Ammo"
  | "Artifact"
  | "Attach"
  | "BodyArmor"
  | "Consumable"
  | "Detector"
  | "Head"
  | "Junk"
  | "Mask"
  | "None"
  | "SubItemGenerator"
  | "WeaponPistol"
  | "WeaponPrimary"
  | "WeaponSecondary"}`;

export type EItemInfoType = `EItemInfoType::${
  | "Accuracy"
  | "Damage"
  | "Handling"
  | "Range"
  | "RateOfFire"}`;

export type EItemType = `EItemType::${
  | "Ammo"
  | "Armor"
  | "Artifact"
  | "Attach"
  | "Consumable"
  | "Detector"
  | "Grenade"
  | "MutantLoot"
  | "None"
  | "Other"
  | "Weapon"
  | "NightVisionGoggles"}`;

export type EJamType = `EJamType::${"FirstShotMisfire" | "Jam" | "Misfire"}`;

export type EJournalAction = `EJournalAction::${
  | "Cancel"
  | "Fail"
  | "Finish"
  | "Start"}`;

export type EJournalEntity = `EJournalEntity::${"Quest" | "QuestStage"}`;

export type EJournalState = `EJournalState::${
  | "Active"
  | "Cancelled"
  | "Failed"
  | "Finished"
  | "Pending"}`;

export type ELairType = `ELairType::${"RestingLair" | "ALifeLair"}`;

export type ELineDirection = `ELineDirection::${"Left" | "Right"}`;

export type ELoadingDestination = `ELoadingDestination::${
  | "BridgeBetweenCutscenes"
  | "IntroductionLogo"
  | "None"
  | "WhiteBridgeBetweenCutscenes"}`;

export type ELocalizationLanguage = `ELocalizationLanguage::${"English"}`;

export type EMagazineMeshType = `EMagazineMeshType::${
  | "Empty"
  | "Full"
  | "LeftEmpty"
  | "RightEmpty"}`;

export type EMainHandEquipmentType = `EMainHandEquipmentType::${
  | "Bolt"
  | "Grenade"
  | "Item"
  | "Knife"
  | "None"
  | "Pistol"
  | "PrimaryWeapon"
  | "SecondaryWeapon"}`;

export type EMappingContext = `EMappingContext::${
  | "Aiming"
  | "AttachSelector"
  | "Bolt"
  | "Codelock"
  | "Cutscene"
  | "Debug"
  | "Dialogue"
  | "DialogueOnTheGo"
  | "EULA"
  | "EditSafeZone"
  | "Exploration"
  | "Grenade"
  | "Guitar"
  | "ImportantChoice"
  | "InspectArtifact"
  | "Interactivity"
  | "Inventory"
  | "ItemSelector"
  | "Journal"
  | "Knife"
  | "Ladder"
  | "LoadingScreen"
  | "Map"
  | "Menu"
  | "MenuSettings"
  | "ModBrowser"
  | "ModioReport"
  | "NoInput"
  | "None"
  | "Note"
  | "PDATutorial"
  | "PDA_Encyclopedia"
  | "PDA_Stats"
  | "PlayMovie"
  | "PlayerContextualAction"
  | "Popup"
  | "Presentation"
  | "QuestNotification"
  | "RightClickContextualMenu"
  | "Sleep"
  | "StackSplitMenu"
  | "StealthKill"
  | "Subtitle"
  | "SystemNotifications"
  | "Trade"
  | "Upgrades"
  | "UpgradesNavigation"
  | "UpgradesPopup"}`;

export type EMarkerState = `EMarkerState::${"Default" | "Explored"}`;

export type EMarkerType = `EMarkerType::${
  | "ArchAnomaly"
  | "Bed"
  | "Guide"
  | "Hub"
  | "Location"
  | "Medic"
  | "None"
  | "PlayerStorage"
  | "RegionMarker"
  | "Technician"
  | "Trader"}`;

export type EMeshSubType = `EMeshSubType::${"Skeletal" | "Static"}`;

export type EMisansceneNodeType = `EMisansceneNodeType::${
  | "Action"
  | "Start"
  | "Switch"}`;

export type EModifiedCharacterParam = `EModifiedCharacterParam::${
  | "Bleeding"
  | "HP"
  | "HPPercent"
  | "HungerPoints"
  | "IgnoreDamageType"
  | "InventoryWeight"
  | "Money"
  | "Radiation"
  | "Rank"
  | "SP"
  | "Sleepiness"
  | "Zombie"}`;

export type EModifyAbilitySequenceQuestNodeMode =
  `EModifyAbilitySequenceQuestNodeMode::${"AddAbility" | "RemoveAbility"}`;

export type EMovementBehaviour = `EMovementBehaviour::${
  | "Idle"
  | "Run"
  | "Sprint"
  | "Walk"}`;

export type EMusicState = `EMusicState::${"Region"}`;

export type EMutantAttackType = `EMutantAttackType::${"JumpAttack" | "None"}`;

export type ENPCType = `ENPCType::${
  | "Guide"
  | "None"
  | "Repairman"
  | "Technician"
  | "Trader"}`;

export type ENiagaraProviderType = `ENiagaraProviderType::${
  | "EyeAdaptationProvider"
  | "PlayerLocationProvider"
  | "TerrainOffsetProvider"
  | "TimeOfDayProvider"
  | "WindProvider"}`;

export type ENoteType = `ENoteType::${"Audio" | "Data" | "Notes"}`;

export type ENotificationEventType = `ENotificationEventType::${
  | "AnomalyActivated"
  | "EmissionFinished"
  | "EmissionStarted"
  | "GrenadeExploded"
  | "GrenadeLaunched"
  | "None"
  | "ShotAppeared"
  | "ShotHit"}`;

export type EObjAnim = `EObjAnim::${"Actor"}`;

export type EObjFloatParams = `EObjFloatParams::${"AimAlpha" | "Wetness"}`;

export type EObjMesh = `EObjMesh::${"Actor" | "None"}`;

export type EObjSkeletalMeshTraceBone = `EObjSkeletalMeshTraceBone::${
  | "Chest"
  | "EveryBone"
  | "Head"
  | "LArm"
  | "LKnee"
  | "LLeg"
  | "Pelvis"
  | "RArm"
  | "RKnee"
  | "RLeg"}`;

export type EObjType = `EObjType::${"Grenade" | "Invalid" | "NPC"}`;

export type EOutputDeviceEffect = `EOutputDeviceEffect::${"Medium" | "Narrow"}`;

export type EOverrideDialogTopic = `EOverrideDialogTopic::${
  | "Busy"
  | "Bye"
  | "CallPlayerComment"
  | "Defeat"
  | "DefeatComment"
  | "Forced"
  | "Hello"
  | "Info"
  | "None"
  | "Resume"
  | "Trade"
  | "Travel"
  | "Upgrade"}`;

export type EOverweightLock = `EOverweightLock::${"Full"}`;

export type EPDATutorialCategory = `EPDATutorialCategory::${
  | "Earning"
  | "Fight"
  | "Navigation"
  | "Survival"}`;

export type EPassiveDetectorType = `EPassiveDetectorType::${
  | "Anomaly"
  | "None"
  | "Searchpoint"}`;

export type EPerformanceBoostDLSSFGMode =
  `EPerformanceBoostDLSSFGMode::${"Off"}`;

export type EPerformanceBoostFFXFIMode = `EPerformanceBoostFFXFIMode::${"Off"}`;

export type EPerformanceBoostInputLatencyReflex =
  `EPerformanceBoostInputLatencyReflex::${"Off"}`;

export type EPerformanceBoostUpscalingMethod =
  `EPerformanceBoostUpscalingMethod::${"TSR"}`;

export type EPhysicalMaterialType = `EPhysicalMaterialType::${
  | "AirPoltergeist"
  | "ArmoredGlass"
  | "Artifact"
  | "Asphalt"
  | "Bone"
  | "Bread"
  | "Brick"
  | "BrokenGlass"
  | "Ceramic"
  | "Chemical"
  | "Cloth"
  | "ClothCorpses"
  | "Default"
  | "Dirt"
  | "FaustInvulnerable"
  | "Flesh"
  | "FleshCloth"
  | "FleshCorpses"
  | "FleshMetal"
  | "FleshRubber"
  | "ForestGrass"
  | "ForestPine"
  | "Glass"
  | "GlassNoParticles"
  | "Grass"
  | "Gravel"
  | "Ground"
  | "Leather"
  | "Leaves"
  | "Meat"
  | "MetalGrid"
  | "MetalSolid"
  | "MetalThin"
  | "Paper"
  | "Plastic"
  | "Puddle"
  | "Rock"
  | "Rubber"
  | "Sand"
  | "Slate"
  | "Tree"
  | "TreeNoParticles"
  | "Vegetable"
  | "Water"
  | "WoodSolid"
  | "WoodThin"}`;

export type EPlayerActionInputModifier = `EPlayerActionInputModifier::${
  | "Negate"
  | "Scalar"
  | "SwizzleAxis"}`;

export type EPlayerActionInputTrigger = `EPlayerActionInputTrigger::${
  | "Down"
  | "HoldWithActivationDelay"
  | "Pressed"
  | "Pulse"
  | "Released"
  | "Tap"}`;

export type EPlayerActionInputTypeCustom = `EPlayerActionInputTypeCustom::${
  | "HoldOnly"
  | "ToggleOrHold"}`;

export type EPostEffectProcessorType = `EPostEffectProcessorType::${
  | "Constant"
  | "Cyclical"
  | "FloatProvider"
  | "Lerp"
  | "None"
  | "Raw"}`;

export type EPostProcessEffectType = `EPostProcessEffectType::${
  | "Blur"
  | "Burn"
  | "Chemical"
  | "ConcussionBlur"
  | "DamageBlood"
  | "Drunkness"
  | "Expulsion"
  | "LeakingBlood"
  | "PsyField"
  | "Radiation"
  | "Rain"
  | "Vignette"}`;

export type EPsyNPCType = `EPsyNPCType::${"None" | "PsyNPC" | "PsyPhantom"}`;

export type EQuestConditionType = `EQuestConditionType::${
  | "AITarget"
  | "ArmorState"
  | "Awareness"
  | "Bleeding"
  | "Bridge"
  | "ContextualAction"
  | "CorpseCarry"
  | "DistanceToNPC"
  | "DistanceToPoint"
  | "Effect"
  | "Emission"
  | "EquipmentInHands"
  | "FactionRelationship"
  | "FastTravelMoney"
  | "GlobalVariable"
  | "HP"
  | "HPPercent"
  | "HasItemInQuickSlot"
  | "HungerPoints"
  | "InventoryWeight"
  | "IsAlive"
  | "IsCreated"
  | "IsDialogMemberValid"
  | "IsEnoughAmmo"
  | "IsOnline"
  | "IsWeaponJammed"
  | "IsWounded"
  | "ItemInContainer"
  | "ItemInInventory"
  | "JournalState"
  | "LookAtAngle"
  | "Money"
  | "NodeState"
  | "Note"
  | "PersonalRelationship"
  | "PlayerOverload"
  | "Psy"
  | "Radiation"
  | "Random"
  | "Rank"
  | "Stamina"
  | "Trigger"
  | "Weather"}`;

export type EQuestEventType = `EQuestEventType::${
  | "OnAbilityEnded"
  | "OnAbilityUsed"
  | "OnBecomeEnemy"
  | "OnBecomeFriend"
  | "OnDialogFinished"
  | "OnEmissionFinished"
  | "OnEmissionStageFinished"
  | "OnEmissionStageStarted"
  | "OnEmissionStarted"
  | "OnFactionBecomeEnemy"
  | "OnFactionBecomeFriend"
  | "OnGetCompatibleAttachment"
  | "OnHit"
  | "OnInteract"
  | "OnJournalQuestCancel"
  | "OnJournalQuestFail"
  | "OnJournalQuestFinish"
  | "OnJournalQuestStageCancel"
  | "OnJournalQuestStageFail"
  | "OnJournalQuestStageFinish"
  | "OnJournalQuestStageStart"
  | "OnJournalQuestStart"
  | "OnModelCreate"
  | "OnMoneyAmountReached"
  | "OnObjDeath"
  | "OnObjDefeat"
  | "OnPlayerGetItem"
  | "OnPlayerLostItem"
  | "OnPlayerNoticed"
  | "OnQuestInteractionFinish"
  | "OnQuestNodeChangeState"
  | "OnQuestNodeFinish"
  | "OnSignalReceived"
  | "OnTick"
  | "OnTriggerEnter"
  | "OnTriggerExit"}`;

export type EQuestNodeState = `EQuestNodeState::${
  | "Activated"
  | "Excluded"
  | "Finished"
  | "None"}`;

export type EQuestNodeType = `EQuestNodeType::${
  | "ALifeDirectorZoneSwitch"
  | "AchievementUnlock"
  | "ActivateAnomaly"
  | "ActivateInteractableObject"
  | "ActivateRestrictor"
  | "AddNote"
  | "AddOrRemoveFromSquad"
  | "AddTechnicianSkillOrUpgrade"
  | "BridgeCleanUp"
  | "BridgeEvent"
  | "CancelAllSideQuests"
  | "ChangeFaction"
  | "ChangeRelationships"
  | "Condition"
  | "ConsoleCommand"
  | "Container"
  | "DeactivateZone"
  | "Despawn"
  | "DisableNPCBark"
  | "DisableNPCInteraction"
  | "EmissionScheduleControl"
  | "EmissionStart"
  | "EnableDataLayer"
  | "End"
  | "EquipItemInHands"
  | "FlashlightOnOff"
  | "ForceInteract"
  | "GiveCache"
  | "HideLoadingScreen"
  | "HideTutorial"
  | "If"
  | "ItemAdd"
  | "ItemRemove"
  | "LoadAsset"
  | "LookAt"
  | "MoveInventory"
  | "NPCBark"
  | "OnAbilityEndedEvent"
  | "OnAbilityUsedEvent"
  | "OnDialogStartEvent"
  | "OnEmissionFinishEvent"
  | "OnEmissionStageActivated"
  | "OnEmissionStageFinished"
  | "OnEmissionStartEvent"
  | "OnFactionBecomeEnemyEvent"
  | "OnFactionBecomeFriendEvent"
  | "OnGetCompatibleAttachEvent"
  | "OnHitEvent"
  | "OnInfotopicFinishEvent"
  | "OnInteractEvent"
  | "OnJournalQuestEvent"
  | "OnKillerCheckEvent"
  | "OnMoneyAmountReachedEvent"
  | "OnNPCBecomeEnemyEvent"
  | "OnNPCBecomeFriendEvent"
  | "OnNPCCreateEvent"
  | "OnNPCDeathEvent"
  | "OnNPCDefeatEvent"
  | "OnPlayerGetItemEvent"
  | "OnPlayerLostItemEvent"
  | "OnPlayerNoticedEvent"
  | "OnSignalReceived"
  | "OnTickEvent"
  | "PlayEffect"
  | "PlayPostProcess"
  | "PlaySound"
  | "PlayVideo"
  | "ProtectLairNPCSquadItem"
  | "Random"
  | "ReputationLocker"
  | "ResetAI"
  | "RestrictSave"
  | "RestrictionArea"
  | "SaveGame"
  | "ScheduledContainer"
  | "SearchPoint"
  | "SendSignal"
  | "SequenceStart"
  | "SetAIBehavior"
  | "SetCharacterEffect"
  | "SetCharacterParam"
  | "SetDialog"
  | "SetDurabilityParam"
  | "SetFactionRestriction"
  | "SetGlobalVariable"
  | "SetHubOwner"
  | "SetItemGenerator"
  | "SetJournal"
  | "SetMeshGenerator"
  | "SetNPCSequentialAbility"
  | "SetName"
  | "SetPersonalRestriction"
  | "SetQuestGiver"
  | "SetSpaceRestrictor"
  | "SetTime"
  | "SetTimer"
  | "SetWeather"
  | "SetWounded"
  | "ShowFadeScreen"
  | "ShowLoadingScreen"
  | "ShowMarker"
  | "ShowTutorialWidget"
  | "Spawn"
  | "SpawnAnomaly"
  | "SpawnAnomalySpawner"
  | "SpawnArtifactSpawner"
  | "SpawnDeadBody"
  | "SpawnItemContainer"
  | "SpawnLair"
  | "SpawnSafeZone"
  | "SpawnSingleObj"
  | "SpawnSquad"
  | "SpawnTrigger"
  | "SwitchQuestItemState"
  | "Technical"
  | "TeleportCharacter"
  | "TimeLock"
  | "ToggleLairActivity"
  | "ToggleNPCHidden"
  | "TrackJournal"
  | "TrackShelter"
  | "Trigger"}`;

export type EQuestRewardType = `EQuestRewardType::${
  | "Ammo"
  | "Armor"
  | "Artifact"
  | "Attach"
  | "Detector"
  | "Food"
  | "Helmet"
  | "Medkit"
  | "Money"
  | "Weapon"}`;

export type ERadiationInnerOffsetPreset = `ERadiationInnerOffsetPreset::${
  | "Custom"
  | "Full"}`;

export type ERadiationPreset = `ERadiationPreset::${
  | "Custom"
  | "Deadly"
  | "Light"
  | "Medium"
  | "RadBlock"
  | "Strong"
  | "Topaz"}`;

type Newbie = "ERank::Newbie";
type Experienced = "ERank::Experienced";
type Veteran = "ERank::Veteran";
type Master = "ERank::Master";
type Permutations2<A, B> = A extends string
  ? B extends string
    ? A | B | `${A}, ${B}`
    : A
  : never;

type Permutations3<A, B, C> = A extends string
  ? B extends string
    ? C extends string
      ? Permutations2<A, B> | Permutations2<B, C> | `${A}, ${B}, ${C}`
      : Permutations2<A, B>
    : A
  : never;

export type ERank =
  | Permutations3<Newbie, Experienced, Veteran>
  | Permutations3<Experienced, Veteran, Master>
  | `${Newbie}, ${Experienced}, ${Veteran}, ${Master}`;

export type ERegion = `ERegion::${
  | "Bolota"
  | "CHAES"
  | "ChemZavod"
  | "DickyOstrov"
  | "Duga"
  | "ERegion_MAX"
  | "Generatory"
  | "GoreliyLes"
  | "Gradirni"
  | "Jupiter"
  | "Kordon"
  | "Malahit"
  | "MalayaZona"
  | "NIICHAZ"
  | "None"
  | "Pripyat"
  | "RizhyLes"
  | "Rostock"
  | "Svalka"
  | "Yanov"
  | "Yantar"
  | "Zaton"
  | "ZementniyZavod"
  | "ZheleznyLes"
  | "Zone"}`;

export type ERelationChangingEvent = `ERelationChangingEvent::${
  | "Damage"
  | "FractionDamage"
  | "Grenade"
  | "Heal"
  | "Kill"
  | "KillWounded"
  | "Melee"
  | "Wounded"}`;

export type ERelationLevel = `ERelationLevel::${
  | "Count"
  | "Disaffection"
  | "Enemy"
  | "Friend"
  | "Neutral"}`;

export type ERepetitions = `ERepetitions::${
  | "Infinity"
  | "PlayCount"
  | "TimeInSeconds"}`;

export type ERequiredSquadMembers = `ERequiredSquadMembers::${
  | "AllMembers"
  | "AnyMember"}`;

export type ESaveType = `ESaveType::${"Auto" | "Manual" | "Quest" | "Quick"}`;

export type ESaveSubType =
  `ESaveSubType::${"Auto" | "Manual" | "Quest" | "Quick"}`;

export type EScenarioBranch = `EScenarioBranch::${
  | "Noon"
  | "Skif"
  | "Spark"
  | "Strelok"
  | "Varta"}`;

export type ESensitivityType = `ESensitivityType::${"Medium"}`;

export type ESettingCategoryType = `ESettingCategoryType::${
  | "Display = 1"
  | "Input = 2"}`;

export type ESmartCoverType = `ESmartCoverType::${
  | "BehindTreeCover"
  | "Generic"
  | "High"
  | "Low"
  | "NoShootingPosition"}`;

export type ESortGroup = `ESortGroup::${
  | "Bleeding"
  | "Buff"
  | "Down"
  | "HP"
  | "Hunger"
  | "Left"
  | "None"
  | "Radiations"
  | "Right"
  | "Stamina"
  | "Up"}`;

export type ESoundEventType = `ESoundEventType::${
  | "AnomalyActivated"
  | "Bolt"
  | "BulletFlyby"
  | "BulletHit"
  | "Count"
  | "DoorKnockedOut"
  | "Explosion"
  | "GrenadeHit"
  | "Guitar"
  | "Interactable"
  | "Jump"
  | "PhysObjectImpact"
  | "Reload"
  | "Shot"
  | "StealthKill"
  | "Steps"
  | "Voice"}`;

export type ESpaceRestrictionType = `ESpaceRestrictionType::${
  | "In"
  | "None"
  | "Out"}`;

export type ESpawnNodeExcludeType = `ESpawnNodeExcludeType::${
  | "ForceDespawn"
  | "KillSpawnedObj"
  | "SeamlessDespawn"}`;

export type ESpawnType = `ESpawnType::${
  | "ALifeGroup"
  | "Anomaly"
  | "AnomalySpawner"
  | "ArtifactSpawner"
  | "ClickerAnomaly"
  | "ContextualAction"
  | "DailyScheduleZone"
  | "DeadBody"
  | "DestructibleObject"
  | "ElectroAnomaly"
  | "FogVolume"
  | "GuardZone"
  | "Hub"
  | "Item"
  | "ItemContainer"
  | "LairSpawner"
  | "LightningBallAnomaly"
  | "Marker"
  | "MoveToPath"
  | "None"
  | "Obj"
  | "OnlineModifierZone"
  | "PSYControllerAnomaly"
  | "PackOfItems"
  | "Patrol"
  | "PillowAnomaly"
  | "PsyAnomaly"
  | "Radiation"
  | "SafeZone"
  | "Searchpoint"
  | "Shelter"
  | "SoapBubbleAnomaly"
  | "Squad"
  | "TeleportPoint"
  | "Trigger"
  | "WeatherSelection"}`;

export type ESpeechEventType = `ESpeechEventType::${
  | "Combat_EnemyDetected"
  | "Combat_EnemySearch"
  | "Combat_HitByEnemy"
  | "Combat_Reloading"
  | "Combat_TakeCover"}`;

export type EStaminaAction = `EStaminaAction::${"Run" | "Sprint" | "Walk"}`;

export type EStateTag = `EStateTag::${
  | "Aim"
  | "Climb"
  | "Crouch"
  | "Jump"
  | "LowCrouchInPlace"
  | "None"
  | "Run"
  | "SlowRun"
  | "Sprint"
  | "SprintUnderRunSpeed"
  | "Vault"
  | "Walk"}`;

export type ESubtitlesSize = `ESubtitlesSize::${"Standart"}`;

export type ESummonBehaviourOnSpawn = `ESummonBehaviourOnSpawn::${
  | "Default"
  | "Kill"}`;

export type ESummonSpawnOrientation = `ESummonSpawnOrientation::${
  | "LookAtEnemy"
  | "LookFromOwner"
  | "MatchOwner"}`;

export type EThreatActionType = `EThreatActionType::${
  | "CallAllies"
  | "MoveToLocation"
  | "SearchEnemy"
  | "TurnHead"}`;

export type EThreatAwareness = `EThreatAwareness::${
  | "Battle"
  | "Calm"
  | "MoveToLocation"
  | "SearchEnemy"
  | "TurnHead"}`;

export type EThreatType = `EThreatType::${
  | "CharacterTouch"
  | "Corpse"
  | "Flashlight"
  | "Hit"
  | "IdentifiedEnemy"
  | "PhysicsTouch"
  | "PossibleEnemy"
  | "Sound"
  | "UnidentifiedEnemy"}`;

export type EThrowQueueDisarmMode =
  `EThrowQueueDisarmMode::${"DispatchAtLastKnownPosition"}`;

export type ETriggerReact = `ETriggerReact::${
  | "ReactBoth"
  | "ReactOnAlive"
  | "ReactOnDead"}`;

export type EUISound = `EUISound::${
  | "CloseInventory"
  | "Count"
  | "SpecificReward"
  | "SystemNotificationNews"
  | "UseConsumableAntiRad"
  | "UseConsumableArmyMedkit"
  | "UseConsumableBandage"
  | "UseConsumableBeer"
  | "UseConsumableBread"
  | "UseConsumableCannedFood"
  | "UseConsumableCinnamon"
  | "UseConsumableEcoMedkit"
  | "UseConsumableEnergetic"
  | "UseConsumableHercules"
  | "UseConsumableMedkit"
  | "UseConsumableMilk"
  | "UseConsumablePsyBlocker"
  | "UseConsumableSausage"
  | "UseConsumableVodka"
  | "UseConsumableWater"}`;

export type EUpgradeTargetPartType = `EUpgradeTargetPartType::${
  | "Barrel"
  | "Body"
  | "Handguard"
  | "None"
  | "PistolGrip"
  | "Stock"
  | "Stock "}`;

export type EUpgradeVerticalPosition = `EUpgradeVerticalPosition::${
  | "Down"
  | "None"
  | "Top"}`;

export type EUserNotificationType = `EUserNotificationType::${
  | "None"
  | "SideText"
  | "Voice"}`;

export type EVitalType = `EVitalType::${
  | "Bleeding"
  | "Drunkness"
  | "HP"
  | "None"
  | "PoppyFieldSleepiness"
  | "PsyPoints"
  | "Radiation"
  | "SleepinessPoints"
  | "SuppressionPoints"}`;

export type EWaterImmersionLevel = `EWaterImmersionLevel::${
  | "Deadly"
  | "High"
  | "Low"
  | "Medium"}`;

export type EWeaponState = `EWeaponState::${"Combat" | "NoWeapon" | "Relax"}`;

export type EWeaponType = `EWeaponType::${
  | "None"
  | "Pistol"
  | "Rifle"
  | "Shotgun"}`;

export type EWeather = `EWeather::${
  | "CalmBeforeEmission"
  | "Clearly"
  | "Cloudy"
  | "Emission"
  | "Fogy"
  | "LightRainy"
  | "Rainy"
  | "Stormy"
  | "Thundery"}`;

export type EALifeGroupPriorityType = `EALifeGroupPriorityType::${
  | "Global"
  | "Local"
  | "Quest"}`;

export type ELairPreferredSpawnType = `ELairPreferredSpawnType::${
  | "CoreVolume"
  | "TerritoryVolume"}`;

export type EPillowAnomalyBiomeType = `EPillowAnomalyBiomeType::${
  | "Forest"
  | "Industrial"
  | "Paper"
  | "RedForest"
  | "Rock"
  | "Urban"}`;

export type ETriggerShape = `ETriggerShape::${
  | "Box"
  | "Cylinder"
  | "Freeform"
  | "Sphere"}`;

export type EWeatherParam = `EWeatherParam::${"RainIntensity"}`;

export type EWeightStatus = `EWeightStatus::${
  | "Heavy"
  | "Normal"
  | "Overweight"}`;

export type EZombificationType = `EZombificationType::${
  | "AliveHuman"
  | "CorpseHuman"}`;

export type PanningRule = `PanningRule::${
  | "PanningRule_Headphones"
  | "PanningRule_Speakers"}`;

export type ESoundEffectSubtype = `ESoundEffectSubtype::${
  | "PlaySoundAttached"
  | "SetParameter"
  | "SetSwitch"
  | "SetState"
  | "StopInfiniteSound"
  | "SetGlobalParameter"}`;

export type EInputAxisType = `EInputAxisType::${"XY" | "Rotate2D"}`;

export type EActionType = `EActionType::${
  | "AutoCover"
  | "Crouch"
  | "Fall"
  | "HandleAimInput"
  | "Lean"
  | "None"
  | "Sprint"
  | "UseMainItem"
  | "Vault"
  | "ThrowItem"}`;

export type Reactions =
  | "Enemy"
  | "Disaffection"
  | "Neutral"
  | "Friend"
  | "Self";

export type Factions =
  | ""
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

export type EObjBoolParams = `EObjBoolParams::${
  | "IsOffsetAimingEnabled"
  | "IsNightVisionEnabled"
  | "IsDetectorInHands"}`;
