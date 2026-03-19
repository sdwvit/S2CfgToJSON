# Patch Layout

Read this file when the user wants to know where new cfg patches and supporting structs should go.

## Core Rule

Patch files are generated per target cfg family and stored under the mod's `raw/` tree, preserving the `GameLite/GameData` folder family.

The game does not read arbitrary new cfg files. New structs still have to be written into a patch whose target is an existing base cfg file from the relevant family.

For implementation guidance, the exact base cfg filename is mandatory. Do not stop at the family name alone.

Base pattern:

- `Mods/<ModName>/raw/Stalker2/Content/GameLite/GameData/...`

Observed processor behavior from `S2Mods/src/get-cfg-file-processor.mts`:

- it starts from a real source cfg file path
- it preserves that file's family and base name
- it writes the patch under a folder derived from the base file name
- it names the patch from the existing file name, not from the new struct name

## File Family Placement

Place content by family:

- quest nodes: `GameData/QuestNodePrototypes/...`
- dialog structs: `GameData/DialogPrototypes/...`
- journal quests: `GameData/JournalQuestPrototypes/...`
- item and reward generators: `GameData/ItemGeneratorPrototypes/...`
- markers: `GameData/MarkerPrototypes...` or embedded in journal updates when appropriate
- item prototypes: `GameData/ItemPrototypes/...`
- quest prototypes: `GameData/QuestPrototypes/...` if the quest package needs registration there

## Patch Naming

Observed implementation pattern:

- ordinary cfg family: `<BaseName>_patch_<ModName>.cfg`
- special case for `CoreVariables.cfg`: `<BaseName>.cfg_patch_<ModName>`

Do not invent a different naming pattern unless the user explicitly wants one.

## New Struct Placement

Placement rules:

- add new dialog chains and dialog structs next to the existing NPC dialog family
- add new journal quest structs in the journal quest family
- add new reward generators in the quest reward or item-generator family
- add new quest nodes in the quest node family
- add new items only when existing items cannot satisfy the design
- for every one of the above, choose an existing base cfg file in that family and place the new structs in that file's patch
- if the exact base cfg file cannot be resolved quickly, ask the user instead of inventing one

## Struct Rendering Note

When the plan turns into actual authoring with this repo's `Struct` helpers:

- set `__internal__.rawName` to the engine-facing struct SID or name that should appear before `: struct.begin`
- set `__internal__.isRoot = true` on each top-level struct being emitted into the cfg patch
- leave `isRoot` unset on ordinary nested child structs

Role of `__internal__.isRoot`:

- it makes `Struct.toString()` render the struct as a root entry like `SomeSID : struct.begin`
- it also prevents the parent from re-rendering that struct's field key, which would otherwise duplicate the name at the nesting site

Practical rule: use `isRoot` for structs that should exist as standalone cfg entries in the patch file, not for normal nested properties inside another struct.

## Content Grouping

Keep the guidance grouped by target cfg family. Do not describe the quest as if unrelated edits should be scattered arbitrarily.
