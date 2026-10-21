# Stalker 2 CFG to JSON converter

Reads Stalker 2 `.cfg` and `.cfg.bin` files into plain JavaScript objects, and writes them back out as `.cfg` text. Use it to write mods in code or to dig through game data.

---

## What's inside

- **`Struct` class.** Parses and writes Stalker 2 config structs, including nested structs, wildcard keys and indexed entries like `[0]`.
- **TypeScript types.** The package is written in TypeScript and ships its types.

---

## Getting started

### You'll need

- Node.js 24 or newer
- npm, pnpm or yarn

### Install

Add it to your project:

```bash
npm install s2cfgtojson
```

If you cloned this repo instead, install its dependencies:

```bash
npm install
```

### Use

`Struct.fromString(text)` parses config text and returns an array of structs, one per top-level struct. `struct.toString()` turns a struct back into config text:

```ts
import { Struct } from 's2cfgtojson';

const [struct] = Struct.fromString(configText);
const text = struct.toString();
```

---

## Example

Parse a `.cfg` snippet and read a field:

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

Quick heads-up: this part explains how the game loads cfg files, not how this library works. `Struct` only reads and writes text. The merging happens inside the game.

Here's the short version:

- Put your patch file in a folder named after the file you're patching.
- Add `{bpatch}` to a struct to change a few fields. Leave it off and you replace the whole struct.
- `@BaseGame/...` refurls only work in ZoneKit mods.

The details are below.

### Where to put your files

When the game loads `X.cfg`, it also loads every `.cfg` file in a folder called `X/` right next to it, and treats each one as a patch to `X.cfg`.

So if you want the game to see your new cfg file, put it in `<stem>/` next to an existing `<stem>.cfg`. Anywhere else, the game won't load it.

You can name the file whatever you like. `<Name>_patch_<Mod>.cfg` is just a common habit. The game uses this same rule for its own files: `GameData/ObjPrototypes.cfg` is the root, and everything in `GameData/ObjPrototypes/` (`QuestObjPrototypes.cfg`, `GeneralNPCObjPrototypes.cfg` and so on) gets merged into it as a patch.

### What happens when your patch merges

The game goes through your patch one top-level struct at a time and matches it by key. The key is the name you write before `: struct.begin`, not the `SID` field. These two can differ: vanilla's `CorpusMedlak` has `SID = CorpMedlak`, so your patch has to say `CorpusMedlak`.

Here's what happens to each top-level struct in your patch:

| Does the target already have this key? | Your struct has | What the game does |
| --- | --- | --- |
| no | anything | Adds your struct. |
| yes | `removenode` | Deletes the existing struct. |
| yes | `{bpatch}` | Merges your struct into the existing one, field by field, nested structs included. |
| yes | neither | **Replaces** the existing struct with yours. Any field you didn't write out is gone. |

That last row catches people out. If you want to replace a struct but keep vanilla's fields, point it back at the original with `refurl` and `refkey`. In a ZoneKit mod (more on those below) that looks like this:

```
CorpusMedlak : struct.begin {refurl=@BaseGame/ObjPrototypes/QuestObjPrototypes.cfg;refkey=CorpusMedlak}
   TradePrototypeSID = MyTrade
struct.end
```

In code, `struct.fork()` gives you a copy marked `{bpatch}`, which is usually what you want for edits. If you don't fork a struct, it's written without `bpatch` and the game will replace the target struct with it.

### `@` refurls

A refurl can start with a config path name, like `@<ConfigPathName>/<RelativePath>`. The game takes everything before the first `/` as the name and checks whether that config path is active. If it isn't, you'll see `refurl '…' references config path '…' which is not active` in the log, and the reference won't resolve. `BaseGame` works the same way as any other name. It gets no special treatment.

Only ZoneKit (Game Feature) mods turn config paths on. Plain pak mods don't.

- **ZoneKit mods.** When your mod's Game Feature starts, the log shows `Activated config path 'BaseGame' at '…/Content/GameLite/GameData/'` and `Activated config path '<Mod>' at '…/Mods/<Mod>/Content/GameLite/ModGameData/<Mod>/'`. In every log I've checked, the config path name matched the mod's name. Your mod's cfg files go under `ModGameData/<Mod>/`, and `@BaseGame/...` gets you to the vanilla files. Workshop ZoneKit mods use `refurl=@BaseGame/...`.
- **Plain pak mods** (in `Content/Paks/~mods`). No config path is active. Every retail run I've checked logs `No config paths are active, using default parser path '…/GameLite/GameData/'` and never turns one on. Refurls resolve straight against `GameData/`, so stick to relative refurls. Going by the code, an `@BaseGame/` refurl in a pak mod fails with the "not active" error. I haven't tried it in game yet.

There are 2 helpers that build `@` refurls for you: `toBaseGameRefurl(path)` and `toMountRefurl(mount, path)`. You can pass a path relative to the config path root, or a full path that contains `GameLite/GameData/` or `GameLite/ModGameData/<mount>/`. Only use them in ZoneKit mods:

```ts
import { toBaseGameRefurl } from "s2cfgtojson";

struct.__internal__.refurl = toBaseGameRefurl(
  "GameLite/GameData/ObjPrototypes/QuestObjPrototypes.cfg",
); // "@BaseGame/ObjPrototypes/QuestObjPrototypes.cfg"
struct.__internal__.refkey = "CorpusMedlak";
```

The parser understands 5 flags inside `{...}`: `refurl`, `refkey`, `bpatch`, `removenode` and `bskipref`.

### Things nobody has confirmed yet

If you figure out any of these, please open an issue.

- **The order patch files load in.** When one folder has several patch files, the loader sorts the list after scanning the folder. Mods that start file names with `zz` assume the sort is alphabetical, but nobody has checked.
- **A `refkey` pointing at its own key.** In the `CorpusMedlak` example above, the replacing struct's `refkey` names its own key. We don't know yet whether that reads the vanilla struct from before the replacement. In a ZoneKit mod you don't have to rely on it: write the full `@BaseGame/...` refurl.
- **Config path names.** We don't know whether a mod's config path name is always the mod's name or can be set to something else (the engine has a `ConfigPathName` property). The logs also show a second path, `<Mod>_BaseGame_Overrides`, and what it does is still a mystery.

---

## Quest Node Planner skill

The package comes with a **Quest Node Planner** skill for writing quests with an AI assistant. You describe a quest in plain words, and it produces the Stalker 2 content for it: quest node graph, dialog chains, journal entries, markers, rewards and the other structs the quest needs.

From your description, the planner:

1. Looks up real content IDs (NPCs, items, dialogs, journals, markers) in your local `GameLite` data.
2. Lists every struct the quest needs: nodes, dialogs, journal entries, globals, rewards and generators.
3. Writes a plan with exact SIDs, the node graph and its edges, which file each struct goes in, and what could break.

Example prompt:

> Plan a fetch quest where Barkeep in the Skadovsk asks the player to retrieve a unique PDA from a bandit camp, with a money reward on turn-in and an option to decline.

### How it decides

- Every new struct goes into a patch for an **existing base cfg file**, meaning a file in `<stem>/` next to an existing `<stem>.cfg`. The game doesn't read cfg files anywhere else (see [How the game applies patches](#how-the-game-applies-patches)).
- It reuses existing items, markers and generators before it creates new prototypes.
- If it can't find something in your local data, it asks you. It doesn't guess.

---

## Development

### Tests

```bash
npm test
```

---

## Contributing

Issues and pull requests are welcome. Please match the existing code style and add tests for any new feature.

---

## License

Free to use in non-commercial projects.

---

## Thanks

Thanks to GSC and to the modders who build and share tools for this game.
