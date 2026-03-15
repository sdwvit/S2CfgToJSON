# Patterns

Read this file when the quest is more than a straight line.

## Start-of-Quest Bootstrap

Use:

- `Technical { LaunchOnQuestStart = true, StartDelay = 0 }`
- downstream actions or helper branches

Use it to initialize globals, stage delayed work, or start a reusable subsystem.

## Event -> Condition -> Action

Use:

- event root
- `If` or `Condition`
- one or more actions

This is the default reactive quest pattern.

## Action Fanout

One upstream node can launch several downstream nodes. Use this to split one moment into parallel outcomes such as journal update, reward, marker update, and state change.

## Named-Branch Routing

Use named outputs when different follow-up consequences matter.

High-value branch nodes:

- `If`
- `Random`
- `SetDialog`
- `Container`

## Delay Insertion

Use `Technical { StartDelay = ... }` when two operations should not happen on the same tick.

## Bridge / Synchronization

Use a side branch plus:

- `BridgeEvent`
- bridge condition
- node-state condition

Use this when the main branch should continue only after helper work completes.

## Signal Bus

Use:

- `SendSignal`
- `OnSignalReceived`

Use this to decouple fragments without direct launcher rewiring.

## Stateful Quest Machine

Use:

- event or trigger
- `If` / `Condition` on a global
- `SetGlobalVariable`

Use this for phases, repeatable loops, and one-shot guards.

## Journal-Driven Progression

Use:

- `SetJournal`
- optional `TrackJournal`
- optional marker updates
- `If` / `Condition` on `JournalState`

## Dialog to World Consequence

Use:

- `SetDialog` with named outputs
- branch-specific action nodes

This is the standard player-choice pattern.
