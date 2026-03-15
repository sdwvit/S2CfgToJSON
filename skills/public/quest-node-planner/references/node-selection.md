# Node Selection

Read this file when choosing concrete node families.

## Control

- `Technical`: safest glue node for bootstrap, delay, pass-through, and replacement logic
- `Condition`: simple gate
- `If`: explicit branching with `True` / `False`
- `Random`: weighted or named branching
- `BridgeEvent`: synchronization
- `Container` / `ScheduledContainer`: multi-output or grouped flow where container semantics fit

## Events

Reach for an event node when the quest should react to something instead of auto-starting. Particularly useful families include:

- item events
- trigger or overlap events
- dialog-related events
- journal-related events
- signal receive nodes

## State / Progression

- `SetGlobalVariable`: phase or flag changes
- `SetJournal`: objective and quest-stage updates
- `TrackJournal`: tracked objective changes
- `SendSignal` / `OnSignalReceived`: cross-fragment control
- journal quest prototype structs
- global variable definitions or reused variable namespaces

## Inventory / Reward

- `ItemAdd`
- `ItemRemove`
- `SetItemGenerator`
- `GiveCache`
- money-related conditions or events when affordability or payment gating matters
- reward generator structs
- stash and item-generator structs
- item prototypes when a genuinely new item must exist

## World / Interaction

- spawn-family nodes
- `Despawn`
- `ActivateInteractableObject`
- `ForceInteract`
- trigger-related nodes

## Character / AI

- `SetCharacterParam`
- `SetCharacterEffect`
- `SetAIBehavior`
- `ChangeRelationships`
- `ChangeFaction`

## Dialog / Narrative

- `SetDialog`
- dialog-start or infotopic-finish events
- `SetJournal` for stage reflection after dialog
- dialog-chain/topic structs when new conversation content must be authored

## Navigation / POI

- `SetJournal` with embedded markers
- `ShowMarker`
- `SearchPoint`
- region or hub data from local world definitions
- marker prototype structs or reused marker families

## Supporting Content

- quest prototype and container structs when the quest must be registered in a broader quest family
- NPC prototype or spawn references when the quest depends on a specific giver or target
- world or support structs only when the quest cannot function by referencing existing data

## Selection Rule

Prefer the smallest node set that communicates the design cleanly. If two approaches work, prefer the one that uses:

- explicit launchers
- fewer inferred semantics
- clearer patch points
