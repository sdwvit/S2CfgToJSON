---
name: quest-node-planner
description: "Plan and author complete S.T.A.L.K.E.R. 2 quest content packages from human quest descriptions using the quest prototype docs and local GameLite data in this repository. Use when Codex needs to convert plain-language quest intent into all required structs: quest nodes, dialog chains and topics, journal entries, markers, globals, reward generators, stash or item generators, quest prototypes, supporting references, and new items or supporting data when existing content does not cover the need."
---

# Quest Node Planner

Turn human quest intent into a complete quest content package grounded in this repo's quest documentation and local `GameLite` content. Produce whatever structs are required for the quest to exist coherently, not just the quest graph.

## Workflow

1. Read the user's quest intent and restate it as:
   - trigger
   - progression steps
   - success/fail outcomes
   - actors, items, locations, or interactables
   - persistence or repeatability needs
2. Resolve real content IDs before planning whenever the workspace contains game data:
   - NPC or object placeholders from `GameLite/GameData/SpawnActorPrototypes/**`
   - object or actor prototype SIDs from `GameLite/GameData/ObjPrototypes/**`
   - item SIDs from `GameLite/GameData/ItemPrototypes/**` or other concrete prototype sources
   - dialog chain or infotopic IDs from `GameLite/GameData/DialogPrototypes/**`
   - journal quest or stage IDs from `GameLite/GameData/JournalQuestPrototypes/**`
   - existing globals, guideway flags, or precondition names from local quest, dialog, world, and support data
   - region, marker, or hub guidance data from `GameLite/GameData/MarkerPrototypes.cfg`, `FastTravelLocationPrototypes.cfg`, and related world data
   - if the user gives a display name but no exact internal SID, search for the exact internal ID before treating it as an assumption
3. Determine the full struct surface the quest needs:
   - quest node graph
   - accept entry
   - reminder or in-progress entry
   - turn-in entry
   - cancel or decline entry when the quest should support backing out
   - journal quest and stage definitions
   - globals or other state carriers
   - markers, search areas, or region guidance
   - reward generators, item generators, stash generators, or direct items
   - any supporting quest prototype, actor reference, or item prototype that must exist for the design to work
4. Reuse existing structs where they fit. Create new structs only when the existing content does not cover the need cleanly.
   - Even when a struct is new, place it into a patch for an existing cfg file in the correct family. Do not plan brand-new standalone cfg files that the game will not read.
   - In implementation mode, resolve the exact existing base cfg filename for each struct family being patched.
5. If core inputs are still missing after local lookup, make the smallest safe assumptions and label them clearly.
   - For quest-objective stashes or reward stashes, do a brief local lookup first.
   - If a suitable stash cannot be found quickly, ask the user whether to reuse a known stash, point to a specific stash, or author a new stash-related struct.
   - If implementation guidance is requested and the exact base cfg filename for a required patch cannot be found quickly, ask the user instead of guessing.
6. Read only the references needed for the task:
   - Start with `references/workflow.md`.
   - Read `references/patterns.md` when the quest has branching, synchronization, journals, dialog, or reusable subgraphs.
   - Read `references/node-selection.md` when node choice is the hard part.
   - Read `references/constraints.md` when wiring, GUIDs, or evidence strength matters.
   - Read `references/examples.md` when the quest needs a concrete template from local content.
   - Read `references/poi-and-rewards.md` when the quest needs regional guidance, marker logic, or composed rewards.
   - Read `references/mod-workflow.md` and `references/patch-layout.md` when the user wants actual mod placement guidance.
   - Read `references/environment-prompts.md` when environment-specific paths or target mod location are unknown.
7. Build the package in this order:
   - IDs and reusable existing content
   - journal and state model
   - dialog surface
   - quest node graph
   - navigation and marker layer
   - rewards and supporting generators
   - any missing supporting structs
   - explicit termination and cleanup
8. Prefer structures that are easy to patch or extend later:
   - use `Technical` as glue
   - use exact launcher targeting
   - keep helper subgraphs explicit
   - prefer additive structure over giant rewrites

## Output Contract

Always return these sections:

- `Intent summary`: one short paragraph
- `Resolved IDs`: concrete SIDs, GUIDs, dialog chains, journal identifiers, markers, or generator references found locally
- `Assumptions`: only unresolved or inferred details after local lookup
- `Required structs`: every struct family the quest needs, split into reuse vs new authoring
- `Dialog surface`: accept / reminder / turn-in / cancel entries and whether they reuse existing dialog or need new entries
- `POI guidance`: region, hub, marker, search point, or location references if navigation matters
- `Recommended graph`: short narrative of flow
- `Nodes`: a table with `SID`, `NodeType`, purpose, key fields, and notable pins
- `Supporting structs`: journal quests, markers, globals, reward generators, item generators, stash generators, items, or other supporting content
- `Placement guidance`: where each new or patched struct family should live in the mod layout, including the exact existing base cfg file being patched whenever implementation guidance is in scope
- `Edges`: upstream `SID` plus output `Name` for each launcher binding
- `State and references`: globals, journal state, signals, bridges, GUID placeholders
- `Validation risks`: anything that remains inference or needs live verification

If the user asks for variants, provide a primary plan first, then 1-2 alternatives with the tradeoff.

## Constraints

- Stay within real game content systems. Do not invent non-schema systems.
- Treat the repo docs as the authority for node names and field shapes.
- Separate `Schema-confirmed`, observed practice, and inference when confidence matters.
- Do not imply exact runtime semantics unless the docs support them.
- Distinguish user-facing names from internal SIDs. Do not present a display name as if it were already the engine-facing item or actor ID.
- Distinguish player GUID usage from NPC or object placeholders.
- Treat quest-facing dialog as part of the quest design, not as optional flavor text.
- When the quest requires new conversation content, plan both the quest node hooks and the dialog chain/topic skeleton.
- When extending an existing NPC, prefer placing new dialog chains and dialog structs next to that NPC's existing dialog file family.
- For NPC giver interactions, prefer dialog-triggered state changes: expose the dialog with `SetDialog`, then drive accept, turn-in, cancel, or defer outcomes from `LastPhraseSID` outputs or dialog-linked events.
- Do not default to quest-state nodes auto-firing giver conversations. Reserve forced or auto-started dialog for explicit comment, radio, cutscene, or user-requested cases.
- Treat journal, marker, reward, and generator structs as part of the quest package, not as optional extras.
- Create new item or support prototypes only when existing items, markers, generators, or world references are insufficient.
- When the user wants implementation guidance, explain the expected mod folder structure and patch file family placement.
- The game will not read arbitrary brand-new cfg files. Every new or changed struct must be emitted into a patch derived from an existing base cfg file in the correct family.
- In implementation mode, the exact existing base cfg filename is mandatory for each patched struct family.
- Do not invent a specific quest stash or reward stash if local lookup does not surface one quickly; ask the user instead.
- If a quest grants a stash as a reward, do not plan it as pre-lootable world content with the final reward already inside; use `SetItemGenerator` in the quest completion flow to populate or unlock the stash reward at completion time.
- When a node has named outputs, bind the exact output `Name`.
- When a simple gate is enough, prefer `Condition`; when explicit `True` / `False` routing is needed, prefer `If`.

## Default Planning Heuristics

- For automatic startup, begin with `Technical { LaunchOnQuestStart = true }` unless an event root is clearly better.
- For reactive quests, prefer `event -> If/Condition -> actions`.
- For multi-outcome flow, prefer nodes with named outputs such as `If`, `SetDialog`, `Random`, or `Container`.
- For waiting or joins, prefer `BridgeEvent`, bridge conditions, node-state conditions, or signals instead of brittle linear chaining.
- For staged progression, use journal state or globals rather than hidden incidental ordering.
- For compatibility-minded plans, isolate risky behavior in helper subgraphs entered by one explicit edge or signal.
- For fetch quests, usually separate three states: quest offered/accepted, objective item acquired, and turn-in resolution.
- When the user implies abandon or backing out, include an explicit cancel or decline path rather than assuming only success/failure.
- For NPC-given quests, plan the dialog entry points first, then connect them to quest-state nodes.
- Use `SetDialog`, `OnDialogStartEvent`, and `OnInfotopicFinishEvent` when dialog is the natural trigger or branch surface.
- For accept, turn-in, and cancel flows, prefer player-initiated conversation that changes quest state after the relevant dialog phrase finishes, rather than quest state launching the conversation itself.
- For existing NPCs, prefer extending their established dialog chain family instead of inventing a disconnected dialog namespace.
- For local regions and hubs, prefer concrete region, hub, or search-area data over vague place text.
- For rewards, choose the gameplay fantasy explicitly: direct item grant, inventory package, or stash reveal.
- For rewards in this repo, treat money reward generators as first-class authored content, not as an afterthought.
- For stash rewards, prefer `SetItemGenerator`-driven completion gating so the player cannot loot the final reward before finishing the quest.
- Default to reusing existing items, markers, reward generators, and location structures before inventing new prototypes.
- If the quest cannot work without a missing struct, call it out and specify the minimal new struct needed.
- If implementation paths are unknown, ask the user for the GameLite source path, implementation repo path, and target mod folder rather than guessing.

## Response Style

- Use concrete SIDs that are readable and consistent, such as `<QuestSID>_Start`, `<QuestSID>_CheckHasItem`, or `<QuestSID>_Reward`.
- Keep node lists concise. Include only fields needed to communicate the design.
- When dialog must be created, include a short dialog chain/topic outline with entry purpose, final phrase, and branch result, not full prose unless the user asks for writing.
- When support structs must be created, group them by file family such as journal, markers, rewards, generators, or items.
- When implementation placement matters, group the answer by `GameData` family and target mod path.
- When naming placements, identify the existing base cfg file being patched, not just the folder family.
- If the exact base cfg file is unknown, say so and ask instead of inventing one.
- If the user wants a `readme.md`, keep it short and make sure it describes the quest flow, main stages, and reward/cancel outcomes.
- End by naming the smallest next implementation step, such as cfg authoring, patch insertion, or GUID resolution.
