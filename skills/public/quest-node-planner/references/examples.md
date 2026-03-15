# Examples

Read this file when the user wants a plan that should follow an existing local quest pattern.

## SQ86: Full Fetch Quest With Dialog State

Primary files:

- `GameLite/GameData/QuestNodePrototypes/SQ86.cfg`
- `GameLite/GameData/DialogPrototypes/SQ86_Dialog_Genij_FirstMeet.cfg`
- `GameLite/GameData/DialogPrototypes/SQ86_Comment_Genij_AfterSecondDialog.cfg`

What to reuse:

- `SetDialog` with explicit `OutputPinNames`
- `LastPhrases` mapped to named outputs
- multiple dialog phases represented by different chains or comments
- dialog-side conditional routing using `Bridge` conditions and `LinkedNodePrototypeSID`
- quest state exposed through dialog availability instead of auto-fired giver conversations

Use this as the main template for:

- a full fetch quest
- in-progress recontact
- state-dependent reminder or alternate lines
- dialog branches that need to trigger or reflect quest progress

## RSQ06: Sidorovich Turn-In And Cancel Confirmation

Primary files:

- `GameLite/GameData/QuestNodePrototypes/RSQ06_C05___B_B.cfg`
- `GameLite/GameData/DialogPrototypes/RSQ06_Dialog_Sidorovich_C10_Finish.cfg`

What to reuse:

- finish dialog presented via `SetDialog`
- `LastPhraseSID` mapped back into quest-node outputs
- multi-step cancel confirmation inside the dialog chain
- quest completion triggered from the finish phrase
- turn-in state changes happening after the player-selected finish line, not by auto-launching a giver conversation

Use this as the main template for:

- turn-in conversations
- "not yet" fallback responses
- cancel confirmation branches
- Sidorovich-style giver interactions

Placement rule:

- when extending an existing quest giver, place the new `DialogChainPrototypeSID` and dialog structs alongside that NPC's existing dialog file family
- do not default to a separate quest-only dialog namespace unless there is a concrete reason

## Example Reading Rule

When the user asks for:

- a complete fetch quest: start with `SQ86`
- a turn-in with cancellation or confirmation: start with `RSQ06`
- both: use `SQ86` for the broader flow and `RSQ06` for the turn-in/cancel surface
