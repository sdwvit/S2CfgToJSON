# Workflow

Use this file first for most requests.

## Input Checklist

Extract or infer:

- quest goal
- start condition
- exact internal SIDs or GUIDs for actors, items, and key interactables
- required dialog surface for accept, in-progress, turn-in, decline, or cancel behavior
- required dialog chains, topics, or final phrase hooks if new dialog must be created
- progression stages
- branch conditions
- rewards or penalties
- fail or reset behavior
- point-of-interest or navigation requirements
- actors, items, triggers, dialog, or world objects
- whether the quest is one-shot, repeatable, or stateful
- every supporting struct family the quest will require

## Minimal Mental Model

Default flow:

1. Event or `Technical` starts a branch.
2. `If` or `Condition` decides whether the branch continues.
3. Action nodes change journal, inventory, AI, world state, or globals.
4. Named-output nodes create branching.
5. Bridges, node-state checks, or signals synchronize branches.
6. `End` closes the fragment.

## Quick Routing

If the user wants:

- automatic startup: `Technical` with `LaunchOnQuestStart = true`
- yes/no branch: `If`, or `Condition` when a simple gate is enough
- more than two outcomes: `Random`, `SetDialog`, `Container`, `ScheduledContainer`, or another node with `OutputPinNames`
- NPC conversation states: `SetDialog`, `OnDialogStartEvent`, or `OnInfotopicFinishEvent`
- wait-for-completion behavior: `BridgeEvent`, bridge conditions, or node-state checks
- quest updates and map guidance: `SetJournal`, `TrackJournal`, `ShowMarker`, `SearchPoint`, `AddNote`
- cross-fragment communication: `SendSignal`, `OnSignalReceived`, globals, or `BridgeEvent`
- location or hub guidance: journal `Region`, `Markers`, marker prototypes, and fast-travel location data
- complete quest package authoring: journal quests, globals, reward generators, item generators, stash generators, and support prototypes

## ID Resolution

Before treating names as assumptions, search local game data for:

- NPC placeholders in `SpawnActorPrototypes`
- NPC or object prototype SIDs in `ObjPrototypes`
- item SIDs in `ItemPrototypes` or concrete spawn/prototype data
- dialog chains and dialog node IDs in `DialogPrototypes`
- journal quest and stage IDs in `JournalQuestPrototypes`
- region, marker, hub, and fast-travel data when the user names a place
- existing reward, stash, and item generator patterns before inventing new ones

If a requested item name does not appear anywhere in local data, say so explicitly and keep the plan generic until the exact internal SID is known.

## Planning Order

Build plans in this order:

1. Resolve concrete IDs.
2. Resolve place data if navigation matters.
3. Identify all required struct families.
4. Define the journal and state model.
5. Define the dialog surface.
6. Choose the entry point.
7. Choose the first gate or branch.
8. Choose the action and reward nodes.
9. Add any helper delays with `Technical`.
10. Add joins or side-branch synchronization.
11. Add explicit end nodes where the fragment should stop.
