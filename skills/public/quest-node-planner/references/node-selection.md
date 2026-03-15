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

## Inventory / Reward

- `ItemAdd`
- `ItemRemove`
- `SetItemGenerator`
- `GiveCache`

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

## Selection Rule

Prefer the smallest node set that communicates the design cleanly. If two approaches work, prefer the one that uses:

- explicit launchers
- fewer inferred semantics
- clearer patch points
