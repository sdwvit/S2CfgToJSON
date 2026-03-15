# Constraints

Read this file when precision matters.

## Source of Truth

- Treat this repo's quest documentation as the authority for node names and field shapes.
- Treat statements labeled as inference as design guidance, not proof of exact engine behavior.

## Launchers

- `Launchers` encode inbound edges.
- A launcher connection identifies an upstream `SID` and an output `Name`.
- Empty `Name` usually means ordinary pass-through.
- `True` and `False` matter for `If`.
- Custom names matter for nodes such as `Random`, `SetDialog`, `Container`, and other named-output nodes.

## Conditions

- `Condition` and `If` both use `Conditions`.
- Use `Condition` when the graph only needs to pass or stop.
- Use `If` when the graph needs explicit branch outputs.

## GUIDs and Targets

Common target fields include:

- `TargetQuestGuid`
- `TargetCharacter`
- `TargetNPC`
- `InteractableQuestGuid`
- `TriggerQuestGuid`
- `SignalSenderGuid`
- `SignalReceiverGuid`

Observed convention:

- `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA` refers to the player

Do not assume target fields are interchangeable even when they point at the same logical actor.

## Evidence Rules For IDs

- Prefer concrete IDs found in local `GameLite` files over guessed placeholders.
- If an actor is found through spawn data, report both the `SpawnedPrototypeSID` and the `PlaceholderActorGuid` when relevant.
- If a display name cannot be matched to an internal item SID, keep the plan generic and call out the unresolved mapping.

## Practical Guardrails

- Prefer exact launcher targeting.
- Prefer helper `Technical` nodes over rewriting large chains.
- Keep helper subgraphs explicit and clearly named.
- Prefer additive patching patterns over destructive rewrites.
- Prefer stateful joins through globals, journal state, signals, or bridges over brittle linear chaining.
