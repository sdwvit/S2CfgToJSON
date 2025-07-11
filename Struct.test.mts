import { describe, test, expect } from "vitest";
import { Struct } from "./Struct.mjs";

class ChimeraHPFix extends Struct {
  _id = "ChimeraHPFix";
  bskipref = true;
  entries = { MaxHP: 750 };
  isRoot = true;
}
class TradersDontBuyWeaponsArmor extends Struct {
  _id = "TradersDontBuyWeaponsArmor";
  refurl = "../TradePrototypes.cfg";
  refkey = 0;
  isRoot = true;
  entries = { TradeGenerators: new TradeGenerators() };
}
class TradeGenerators extends Struct {
  _id = "TradeGenerators";
  entries = { "*": new TradeGenerator() };
}
class TradeGenerator extends Struct {
  _id = "TradeGenerator";
  entries = { BuyLimitations: new BuyLimitations() };
}
class BuyLimitations extends Struct {
  _id = "BuyLimitations";
  entries = { [0]: "EItemType::Weapon", [1]: "EItemType::Armor" };
}

describe("Struct", () => {
  test("toString()", () => {
    expect(new ChimeraHPFix().toString()).toBe(
      `ChimeraHPFix : struct.begin {bskipref}
   MaxHP = 750
struct.end`,
    );

    expect(new TradersDontBuyWeaponsArmor().toString()).toBe(
      `TradersDontBuyWeaponsArmor : struct.begin {refurl=../TradePrototypes.cfg;refkey=[0]}
   TradeGenerators : struct.begin
      [*] : struct.begin
         BuyLimitations : struct.begin
            [0] = EItemType::Weapon
            [1] = EItemType::Armor
         struct.end
      struct.end
   struct.end
struct.end`,
    );
  });

  test("pad()", () => {
    expect(Struct.pad("test")).toBe("   test");
    expect(Struct.pad(Struct.pad("test"))).toBe("      test");
  });

  describe("fromString()", () => {
    test("1", () => {
      const chimeraText = new ChimeraHPFix().toString();

      expect(Struct.fromString(chimeraText)[0].toString()).toBe(chimeraText);
    });

    test("2", () => {
      const complexStructText = `BasePhantomAttack : struct.begin {refkey=BaseAttackAbility}
   TriggeredCooldowns : struct.begin
      [0] : struct.begin
         CooldownTag = Ability.Cooldown.RunAttack
         Duration = 50.f
      struct.end
   struct.end
   Effects : struct.begin
      [0] : struct.begin
         EffectPrototypeSID = MutantMediumAttackCameraShake
         Chance = 1.f
      struct.end
   struct.end
struct.end`;
      expect(Struct.fromString(complexStructText)[0].toString()).toBe(
        complexStructText,
      );
    });

    test("3", () => {
      const dynamicItemGeneratorText = `DynamicTraderItemGenerator : struct.begin {refurl=../ItemGeneratorPrototypes.cfg;refkey=[0]}
   SID = DynamicTraderItemGenerator
   ItemGenerator : struct.begin
      [0] : struct.begin
         Category = EItemGenerationCategory::WeaponPrimary
         PlayerRank = ERank::Newbie
         bAllowSameCategoryGeneration = true
         ReputationThreshold = -500
         RefreshTime = 1h
         PossibleItems : struct.begin
            [0] : struct.begin
               ItemPrototypeSID = GunMark_SP
               Weight = 1
               MinDurability = 0.3
               MaxDurability = 0.6
               AmmoMinCount = 600
               AmmoMaxCount = 900
            struct.end
         struct.end
      struct.end
      [1] : struct.begin
         Category = EItemGenerationCategory::BodyArmor
         PlayerRank = ERank::Newbie
         bAllowSameCategoryGeneration = true
         ReputationThreshold = -500
         RefreshTime = 1h
         PossibleItems : struct.begin
            [0] : struct.begin
               ItemPrototypeSID = DutyArmor_3_U1
               Weight = 1
               MinDurability = 1.
               MaxDurability = 1.
            struct.end
         struct.end
      struct.end
      [2] : struct.begin
         Category = EItemGenerationCategory::WeaponPistol
         ReputationThreshold = -500
         bAllowSameCategoryGeneration = true
         RefreshTime = 1h
         PossibleItems : struct.begin
            [0] : struct.begin
               ItemPrototypeSID = GunAPB_HG
               Weight = 1
               MinDurability = 0.25
               MaxDurability = 0.5
               AmmoMinCount = 60
               AmmoMaxCount = 100
            struct.end
         struct.end
      struct.end
      [3] : struct.begin
         Category = EItemGenerationCategory::WeaponSecondary
         PlayerRank = ERank::Veteran
         bAllowSameCategoryGeneration = true
         RefreshTime = 1h
         PossibleItems : struct.begin
            [0] : struct.begin
               ItemPrototypeSID = GunTOZ_SG
               Weight = 1
               MinDurability = 0.3
               MaxDurability = 0.6
               AmmoMinCount = 60
               AmmoMaxCount = 90
            struct.end
         struct.end
      struct.end
      [4] : struct.begin
         Category = EItemGenerationCategory::Head
         PlayerRank = ERank::Veteran
         bAllowSameCategoryGeneration = true
         ReputationThreshold = -500
         RefreshTime = 1h
         PossibleItems : struct.begin
            [0] : struct.begin
               ItemPrototypeSID = DutyMask_1
               Weight = 2
               MinDurability = 1.
               MaxDurability = 1.
            struct.end
         struct.end
      struct.end
   struct.end
struct.end`;
      expect(Struct.fromString(dynamicItemGeneratorText)[0].toString()).toBe(
        dynamicItemGeneratorText,
      );
    });
  });
});
