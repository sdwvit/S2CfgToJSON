---
name: quest-node-planner
description: Plan S.T.A.L.K.E.R. 2 quest-node-only graphs from human quest descriptions using the quest prototype docs in this repository. Use when Codex needs to convert plain-language quest intent into a structured node design, choose likely node families, map launchers and named outputs, identify required GUID placeholders, or summarize assumptions before cfg authoring or patching.
---

# Quest Node Planner

Turn human quest intent into a quest-node-only design brief grounded in this repo's quest documentation. Produce a graph plan, not full `.cfg` authoring, unless the user explicitly asks for a later implementation step.

## Workflow

1. Read the user's quest intent and restate it as:
   - trigger
   - progression steps
   - success/fail outcomes
   - actors, items, locations, or interactables
   - persistence or repeatability needs
2. If core inputs are missing, make the smallest safe assumptions and label them clearly.
3. Read only the references needed for the task:
   - Start with `references/workflow.md`.
   - Read `references/patterns.md` when the quest has branching, synchronization, journals, dialog, or reusable subgraphs.
   - Read `references/node-selection.md` when node choice is the hard part.
   - Read `references/constraints.md` when wiring, GUIDs, or evidence strength matters.
4. Build the graph in this order:
   - bootstrap
   - event source
   - gating or branching
   - action nodes
   - synchronization or rejoin
   - explicit termination
5. Prefer quest-node plans that are easy to patch or extend later:
   - use `Technical` as glue
   - use exact launcher targeting
   - keep helper subgraphs explicit
   - prefer additive structure over giant rewrites

## Output Contract

Always return these sections:

- `Intent summary`: one short paragraph
- `Assumptions`: only unresolved or inferred details
- `Recommended graph`: short narrative of flow
- `Nodes`: a table with `SID`, `NodeType`, purpose, key fields, and notable pins
- `Edges`: upstream `SID` plus output `Name` for each launcher binding
- `State and references`: globals, journal state, signals, bridges, GUID placeholders
- `Validation risks`: anything that remains inference or needs live verification

If the user asks for variants, provide a primary plan first, then 1-2 alternatives with the tradeoff.

## Constraints

- Stay within quest nodes. Do not invent non-schema systems.
- Treat the repo docs as the authority for node names and field shapes.
- Separate `Schema-confirmed`, observed practice, and inference when confidence matters.
- Do not imply exact runtime semantics unless the docs support them.
- Distinguish player GUID usage from NPC or object placeholders.
- When a node has named outputs, bind the exact output `Name`.
- When a simple gate is enough, prefer `Condition`; when explicit `True` / `False` routing is needed, prefer `If`.

## Default Planning Heuristics

- For automatic startup, begin with `Technical { LaunchOnQuestStart = true }` unless an event root is clearly better.
- For reactive quests, prefer `event -> If/Condition -> actions`.
- For multi-outcome flow, prefer nodes with named outputs such as `If`, `SetDialog`, `Random`, or `Container`.
- For waiting or joins, prefer `BridgeEvent`, bridge conditions, node-state conditions, or signals instead of brittle linear chaining.
- For staged progression, use journal state or globals rather than hidden incidental ordering.
- For compatibility-minded plans, isolate risky behavior in helper subgraphs entered by one explicit edge or signal.

## Response Style

- Use concrete SIDs that are readable and consistent, such as `<QuestSID>_Start`, `<QuestSID>_CheckHasItem`, or `<QuestSID>_Reward`.
- Keep node lists concise. Include only fields needed to communicate the design.
- End by naming the smallest next implementation step, such as cfg authoring, patch insertion, or GUID resolution.
