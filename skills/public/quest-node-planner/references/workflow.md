# Workflow

Use this file first for most requests.

## Input Checklist

Extract or infer:

- quest goal
- start condition
- progression stages
- branch conditions
- rewards or penalties
- fail or reset behavior
- actors, items, triggers, dialog, or world objects
- whether the quest is one-shot, repeatable, or stateful

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
- wait-for-completion behavior: `BridgeEvent`, bridge conditions, or node-state checks
- quest updates and map guidance: `SetJournal`, `TrackJournal`, `ShowMarker`, `SearchPoint`, `AddNote`
- cross-fragment communication: `SendSignal`, `OnSignalReceived`, globals, or `BridgeEvent`

## Planning Order

Build plans in this order:

1. Choose the entry point.
2. Choose the first gate or branch.
3. Choose the action nodes.
4. Add any helper delays with `Technical`.
5. Add joins or side-branch synchronization.
6. Add explicit end nodes where the fragment should stop.
