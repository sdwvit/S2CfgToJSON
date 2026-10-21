# Stalker 2 CFG to JSON Converter

A utility to convert Stalker 2 `.cfg` and `.cfg.bin` configuration files into structured JavaScript objects (POJOs), enabling easier mod development and analysis.

---

## Key Features

- **Struct Class**: A flexible base class for parsing and generating Stalker 2 config structures, handling nested data, wildcards, and indexed entries.
- **TypeScript Support**: Built with TypeScript for type safety and clarity.

---

## Getting Started

### Prerequisites
- Node.js ≥24
- npm (or pnpm/yarn)

### Installation
In your project directory, run:
```bash
npm install s2cfgtojson
```

Or, if you checked out the repository, you can install dependencies directly:
```bash
npm install
```

### Usage
Import the `Struct` class from `Struct.mts` to parse or generate Stalker 2 config data. For example:
```ts
import { Struct } from 's2cfgtojson';

const config = new Struct();
// Use methods like `toString()` or `fromString()` to process configs
```

---

## Example
Convert a `.cfg` file to a structured object:
```ts
const configText = `
BasePhantomAttack : struct.begin {refkey=BaseAttackAbility}
   TriggeredCooldowns : struct.begin
      [0] : struct.begin
         CooldownTag = Ability.Cooldown.RunAttack
         Duration = 50.f
      struct.end
   struct.end
struct.end
`;
const parsed = Struct.fromString(configText)[0];
console.log(parsed.TriggeredCooldowns);
```

---

## How the game applies patches

This describes the retail game's cfg loader, not this library. `Struct` only parses and serializes text; it doesn't merge anything.

### Which files are read

When the game loads `X.cfg`, it treats every `.cfg` file in the folder `X/` next to it as a patch to `X.cfg`. A new file is read only if it sits in `<stem>/` next to an existing `<stem>.cfg`. A file anywhere else isn't read.

The `<Name>_patch_<Mod>.cfg` file name is a convention, not a requirement. The game itself depends on this rule: `GameData/ObjPrototypes.cfg` is the root, and every file in `GameData/ObjPrototypes/` (for example `QuestObjPrototypes.cfg` and `GeneralNPCObjPrototypes.cfg`) is a patch merged into it.

### How a patch merges

Merging works per top-level key. The key is the struct name before `: struct.begin`, not its `SID` field. For example, vanilla's `CorpusMedlak` has `SID = CorpMedlak`, and a patch has to target `CorpusMedlak`. For each top-level node in a patch file:

| Target already has the key? | Node has | Result |
| --- | --- | --- |
| no | anything | The node is added. |
| yes | `removenode` | The existing node is deleted. |
| yes | `{bpatch}` | The node is merged into the existing one field by field, recursively. |
| yes | neither | The whole existing node is **replaced**. Fields the patch doesn't restate are lost. |

To replace a node and keep vanilla's fields, point the replacement back at the original file. In a ZoneKit mod (see below) that looks like this:

```
CorpusMedlak : struct.begin {refurl=@BaseGame/ObjPrototypes/QuestObjPrototypes.cfg;refkey=CorpusMedlak}
   TradePrototypeSID = MyTrade
struct.end
```

In code, `struct.fork()` produces a `{bpatch}` copy, which is usually what you want for edits. A struct that isn't forked serializes without `bpatch` and replaces the target node.

### `@` refurls

A refurl can name a config path: `@<ConfigPathName>/<RelativePath>`. The game splits the name off at the first `/` and looks it up among the *active* config paths. If the name isn't active, it logs `refurl '…' references config path '…' which is not active` and the reference isn't resolved. `BaseGame` gets no special treatment.

Config paths are activated by ZoneKit (Game Feature) mods, not by plain pak mods:

- **ZoneKit mods.** When the mod's Game Feature activates, the game logs `Activated config path 'BaseGame' at '…/Content/GameLite/GameData/'` and `Activated config path '<Mod>' at '…/Mods/<Mod>/Content/GameLite/ModGameData/<Mod>/'`. In the logs checked, the mod's config path name was the mod's name. The mod's own cfgs live under `ModGameData/<Mod>/`, and `@BaseGame/...` reaches vanilla files. Workshop ZoneKit mods use `refurl=@BaseGame/...`.
- **Plain pak mods** (`Content/Paks/~mods`). No config path is active. Every retail run checked logs `No config paths are active, using default parser path '…/GameLite/GameData/'` and never activates one. Cfgs resolve against `GameData/` directly, so use relative refurls. An `@BaseGame/` refurl in a pak mod should fail with the "not active" error. That follows from the code; it hasn't been tested in game.

`toBaseGameRefurl(path)` and `toMountRefurl(mount, path)` build `@` refurls from a path relative to the config path root, or from a full path containing `GameLite/GameData/` or `GameLite/ModGameData/<mount>/`. Use them only in ZoneKit mods:

```ts
import { toBaseGameRefurl } from "s2cfgtojson";

struct.__internal__.refurl = toBaseGameRefurl(
  "GameLite/GameData/ObjPrototypes/QuestObjPrototypes.cfg",
); // "@BaseGame/ObjPrototypes/QuestObjPrototypes.cfg"
struct.__internal__.refkey = "CorpusMedlak";
```

The parser knows these flags inside `{...}`: `refurl`, `refkey`, `bpatch`, `removenode` and `bskipref`.

### Not verified yet

- The order in which several patch files in one folder apply. The loader sorts the list after scanning the folder, and mods that use `zz` prefixes assume alphabetical order, but nobody has confirmed this.
- Whether a `refkey` on a replacing node that points at its own key (as in the `CorpusMedlak` example above) resolves against the vanilla node from before the swap. In a ZoneKit mod, an explicit `@BaseGame/...` refurl avoids depending on this.
- Whether a mod's config path name always equals the mod's name, or can be set separately (the engine has a `ConfigPathName` property). The logs also show a second `<Mod>_BaseGame_Overrides` path whose role hasn't been traced.

---

## Quest Node Planner Skill

This package includes a **Quest Node Planner** skill for AI-assisted quest authoring. It turns plain-language quest descriptions into complete S.T.A.L.K.E.R. 2 quest content packages — quest node graphs, dialog chains, journal entries, markers, rewards, and all supporting structs.

Describe a quest in plain language and the planner will:

1. Resolve real content IDs from your local `GameLite` data (NPCs, items, dialogs, journals, markers)
2. Determine every struct the quest needs (nodes, dialog, journal, globals, rewards, generators)
3. Produce a structured plan with concrete SIDs, a node graph, edges, placement guidance, and validation risks

Example prompt:

> Plan a fetch quest where Barkeep in the Skadovsk asks the player to retrieve a unique PDA from a bandit camp, with a money reward on turn-in and an option to decline.

### Key design principles

- All new structs go into a patch for an **existing base cfg file**: a file in `<stem>/` next to an existing `<stem>.cfg`. The game doesn't read cfg files anywhere else (see [How the game applies patches](#how-the-game-applies-patches)).
- The skill prefers **reusing existing content** (items, markers, generators) over creating new prototypes.
- If something can't be resolved from local data, the skill asks you instead of guessing.

---

## Development

### Tests
Run tests using:
```bash
npm test
```

---

## Contributing

Feel free to contribute by submitting issues or pull requests. Ensure your code adheres to the project's coding standards and includes tests for new features.

---

## License
Free to use in non-commercial projects.

---

## Notes

Thanks, GSC and modders for providing the community with tools to enhance the modding experience.
