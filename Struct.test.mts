import { describe, test, expect } from "vitest";
import {
  createDynamicClassInstance,
  ERank,
  pad,
  Struct,
  ArmorPrototype,
  Refs,
} from "./Struct.mjs";
import fs from "node:fs";

class ChimeraHPFix extends Struct {
  __internal__ = new Refs({
    rawName: "ChimeraHPFix",
    isRoot: true,
    bskipref: true,
  });

  MaxHP = 750;
}
class TradePrototype extends Struct {
  __internal__ = new Refs({
    rawName: "TradersDontBuyWeaponsArmor",
    refurl: "../TradePrototypes.cfg",
    refkey: 0,
    isRoot: true,
  });

  TradeGenerators = new TradeGenerators();
}
class TradeGenerators extends Struct {
  __internal__ = new Refs({
    isArray: true,
    rawName: "TradeGenerators",
    //useAsterisk: true, this option is not supported for now
  });
  "0" = new TradeGenerator();
}
class TradeGenerator extends Struct {
  __internal__ = new Refs({
    rawName: "0",
  });
  BuyLimitations = new BuyLimitations();
}

class BuyLimitations extends Struct {
  __internal__ = new Refs({
    rawName: "BuyLimitations",
    isArray: true,
  });
  "0" = "EItemType::Weapon";
  "1" = "EItemType::Armor";
  "2" = new Struct({
    __internal__: {
      removenode: true,
    },
  });
}

describe("Struct", () => {
  test("toString()", () => {
    const c = new ChimeraHPFix();
    expect(c.MaxHP).toBe(750);
    expect(new ChimeraHPFix().toString()).toBe(
      `ChimeraHPFix : struct.begin {bskipref}
   MaxHP = 750
struct.end`,
    );

    expect(new TradePrototype().toString()).toBe(
      `TradersDontBuyWeaponsArmor : struct.begin {refurl=../TradePrototypes.cfg;refkey=[0]}
   TradeGenerators : struct.begin
      [0] : struct.begin
         BuyLimitations : struct.begin
            [0] = EItemType::Weapon
            [1] = EItemType::Armor
            [2] : removenode
         struct.end
      struct.end
   struct.end
struct.end`,
    );
  });

  test("pad()", () => {
    expect(pad("test")).toBe("   test");
    expect(pad(pad("test"))).toBe("      test");
  });

  describe("createDynamicClassInstance", () => {
    test("1", () => {
      const instance = createDynamicClassInstance("DynamicClass");
      instance.__internal__.isRoot = true;

      expect(instance).toBeInstanceOf(Struct);
      expect(instance.toString()).toBe(
        `DynamicClass : struct.begin\n\nstruct.end`,
      );
    });

    test("reserved keyword name", () => {
      const instance = createDynamicClassInstance("default");
      instance.__internal__.isRoot = true;

      expect(instance).toBeInstanceOf(Struct);
      expect(instance.toString()).toBe(`default : struct.begin\n\nstruct.end`);
    });
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
         Duration = 50
      struct.end
   struct.end
   Effects : struct.begin
      [0] : struct.begin
         EffectPrototypeSID = MutantMediumAttackCameraShake
         Chance = 1
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
            [*] : struct.begin
               ItemPrototypeSID = DutyArmor_3_U1
               Weight = 1
               MinDurability = 1
               MaxDurability = 1
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
               MinDurability = 1
               MaxDurability = 1
            struct.end
         struct.end
      struct.end
   struct.end
struct.end`;
      expect(Struct.fromString(dynamicItemGeneratorText)[0].toString()).toBe(
        dynamicItemGeneratorText,
      );
    });

    test("4", () => {
      const dynamicItemGeneratorText = `A : struct.begin
         N1 = 0.1f 
         N2 = 1. 
         N3 = 0.f 
         N4 = .1 
         N5 = .1f
         N6 = -2.22f
       struct.end`;
      const str = Struct.fromString<{ [key: `N${number}`]: number }>(
        dynamicItemGeneratorText,
      );
      expect(str[0].N1).toBe(0.1);
      expect(str[0].N2).toBe(1);
      expect(str[0].N3).toBe(0);
      expect(str[0].N4).toBe(0.1);
      expect(str[0].N5).toBe(0.1);
      expect(str[0].N6).toBe(-2.22);
    });

    test("5", () => {
      const testCfg = fs.readFileSync("./test.cfg", "utf-8").trim();
      const structs = Struct.fromString(testCfg);
      expect(structs.map((s) => s.toString()).join("\n")).toBe(testCfg);
    });
  });

  describe("fork", () => {
    test("1", () => {
      const a = new TradePrototype();
      const b = a.fork() as TradePrototype;

      expect(a === b).toBe(false);
      b.TradeGenerators = new TradeGenerators().fork();
      expect(b.toString()).toBe(
        "TradersDontBuyWeaponsArmor : struct.begin {bpatch}\n" +
          "   TradeGenerators : struct.begin {bpatch}\n" +
          "   struct.end\n" +
          "struct.end",
      );
    });
  });

  describe("addNode", () => {
    test("1", () => {
      const a = new TradePrototype().fork(true);
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("EItemType::Weapon");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("EItemType::Armor");
      a.TradeGenerators[0].BuyLimitations.addNode(
        "EItemType::Artifact",
        undefined,
      );
      expect(a.TradeGenerators[0].BuyLimitations[3]).toBe(
        "EItemType::Artifact",
      );
    });
  });

  describe("forEach", () => {
    test("1", () => {
      const a = new TradePrototype().fork(true);
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("EItemType::Weapon");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("EItemType::Armor");
      a.TradeGenerators[0].BuyLimitations.forEach(([k]) => {
        a.TradeGenerators[0].BuyLimitations[k] = "forEach" as any;
      });
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("forEach");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("forEach");
    });
  });

  describe("filter", () => {
    test("1", () => {
      const a = new TradePrototype().fork(true);
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("EItemType::Weapon");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("EItemType::Armor");
      const b = a.TradeGenerators[0].BuyLimitations.filter(([k]) => k === "0");
      expect(b[0]).toBe("EItemType::Weapon");
      expect(b[1]).toBeUndefined();
    });
  });

  describe("map", () => {
    test("1", () => {
      const a = new TradePrototype();
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("EItemType::Weapon");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("EItemType::Armor");
      const b = a.TradeGenerators[0].BuyLimitations.map(
        ([k, v]) => `${v}-mapped-${k}`,
      );
      expect(b[0]).toBe("EItemType::Weapon-mapped-0");
      expect(b[1]).toBe("EItemType::Armor-mapped-1");
    });
  });

  describe("clone", () => {
    test("1", () => {
      const a = new TradePrototype();
      const b = a.clone() as TradePrototype;

      expect(a === b).toBe(false);
      expect(a.TradeGenerators === b.TradeGenerators).toBe(false);
      expect(a.toString()).toBe(b.toString());
    });
  });

  describe("removeNode", () => {
    test("1", () => {
      const a = new TradePrototype().fork(true);
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("EItemType::Weapon");
      expect(a.TradeGenerators[0].BuyLimitations[1]).toBe("EItemType::Armor");
      a.TradeGenerators[0].BuyLimitations.removeNode("0");
      expect(a.TradeGenerators[0].BuyLimitations[0]).toBe("removenode");
    });
  });

  describe("toJson", () => {
    test("1", () => {
      const struct = new TradePrototype();
      expect(struct.toJson()).toEqual({
        __internal__: {
          rawName: "TradersDontBuyWeaponsArmor",
          isRoot: true,
          refurl: "../TradePrototypes.cfg",
          refkey: 0,
        },
        TradeGenerators: {
          __internal__: { rawName: "TradeGenerators", isArray: true },
          "0": {
            __internal__: { rawName: "0" },
            BuyLimitations: {
              __internal__: { rawName: "BuyLimitations", isArray: true },
              "0": "EItemType::Weapon",
              "1": "EItemType::Armor",
              "2": {
                __internal__: {
                  removenode: true,
                },
              },
            },
          },
        },
      });
    });

    test("2", () => {
      const struct = new ChimeraHPFix();
      expect(struct.toJson(true)).toEqual({
        _: { w: "ChimeraHPFix", r: true, s: true },
        MaxHP: 750,
      });
    });
  });

  describe("fromJson", () => {
    test("1", () => {
      const json = {
        __internal__: { rawName: "Test", isRoot: true },
        MeshGenerator: {
          __internal__: { rawName: "MeshGenerator" },
          Meshes: {
            __internal__: { rawName: "Meshes", isArray: true },
            "0": {
              __internal__: { rawName: "0" },
              MeshPath: "path/to/mesh",
              Offset: {
                __internal__: { rawName: "Offset" },
                X: 0,
                Y: 0,
                Z: 0,
              },
              Rotation: {
                __internal__: { rawName: "Rotation" },
                Pitch: 0,
                Yaw: 0,
                Roll: 0,
              },
            },
          },
        },
      };
      const struct = Struct.fromJson(json);
      expect(struct.toString()).toBe(`Test : struct.begin
   MeshGenerator : struct.begin
      Meshes : struct.begin
         [0] : struct.begin
            MeshPath = path/to/mesh
            Offset : struct.begin
               X = 0
               Y = 0
               Z = 0
            struct.end
            Rotation : struct.begin
               Pitch = 0
               Yaw = 0
               Roll = 0
            struct.end
         struct.end
      struct.end
   struct.end
struct.end`);
    });

    test("2", () => {
      const json = {
        _: { w: "Test", r: true },
        MeshGenerator: {
          _: { w: "MeshGenerator" },
          Meshes: {
            _: { w: "Meshes", a: true },
            "0": {
              _: { w: "0" },
              MeshPath: "path/to/mesh",
              Offset: {
                _: { w: "Offset" },
                X: 0,
                Y: 0,
                Z: 0,
              },
              Rotation: {
                _: { w: "Rotation" },
                Pitch: 0,
                Yaw: 0,
                Roll: 0,
              },
            },
          },
        },
      };
      const struct = Struct.fromJson(json, true);
      expect(struct.toString()).toBe(`Test : struct.begin
   MeshGenerator : struct.begin
      Meshes : struct.begin
         [0] : struct.begin
            MeshPath = path/to/mesh
            Offset : struct.begin
               X = 0
               Y = 0
               Z = 0
            struct.end
            Rotation : struct.begin
               Pitch = 0
               Yaw = 0
               Roll = 0
            struct.end
         struct.end
      struct.end
   struct.end
struct.end`);
    });
  });
});

// noinspection JSUnusedLocalSymbols
const MyRank: ERank = "ERank::Experienced, ERank::Veteran, ERank::Master";
// noinspection BadExpressionStatementJS
({}) as ArmorPrototype["MeshGenerator"];
