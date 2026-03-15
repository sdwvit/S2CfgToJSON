# Patch Layout

Read this file when the user wants to know where new cfg patches and supporting structs should go.

## Core Rule

Patch files are generated per target cfg family and stored under the mod's `raw/` tree, preserving the `GameLite/GameData` folder family.

Base pattern:

- `Mods/<ModName>/raw/Stalker2/Content/GameLite/GameData/...`

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

## Content Grouping

Keep the guidance grouped by target cfg family. Do not describe the quest as if unrelated edits should be scattered arbitrarily.
