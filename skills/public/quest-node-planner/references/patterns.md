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

## Dialog-Driven Quest Surface

Use:

- existing or new accept entry
- in-progress reminder entry
- turn-in entry
- optional decline or cancel entry
- `OnInfotopicFinishEvent` or another dialog-linked event for state transitions

Treat these as part of the quest contract. The node graph and the dialog surface should agree on which branch accepts, completes, cancels, or defers the quest.

Implementation guidance:

- use a `SetDialog` node when the quest must expose a dialog state directly
- map `LastPhraseSID` values to named output pins
- prefer the NPC conversation itself to be player-initiated; the quest should usually expose dialog availability, not auto-launch the giver's conversation
- let accept, complete, cancel, and "not yet" outcomes flow from the chosen final phrase or dialog-linked event into quest-state changes
- use separate chains or comments for major state transitions when needed
- use dialog-side `If` nodes or bridge conditions when the dialog itself should react to quest state
- when the quest giver already has dialog content, add new chains and dialog structs alongside that existing dialog family
- reserve forced dialog, comments, or radio-style conversation for cases where vanilla also treats the line as an unsolicited event rather than a normal NPC interaction

## Fetch And Return

Use:

- accept or start event
- `SetJournal` for the first objective
- `SetGlobalVariable` or journal-state gate for quest phase
- `OnPlayerGetItemEvent` for objective acquisition
- second `SetJournal` for return-to-giver progression
- `SetDialog` to expose the giver's quest conversation
- final phrase output or dialog-linked event on the quest giver
- `If` checking both quest phase and item possession
- `ItemRemove` for turn-in
- reward and completion nodes

Optional branches:

- reminder branch when the player talks to the giver too early
- decline branch before acceptance
- cancel branch if the player should be allowed to back out after acceptance

Use this pattern when the quest should not spawn the item itself and only needs to track acquisition and delivery.

Reward add-ons:

- `ItemAdd` for direct money-like or item-like payout if locally appropriate
- `SetItemGenerator` for a packaged reward
- `GiveCache` when the reward should arrive as a stash reveal
