# POI And Rewards

Read this file when the quest needs navigation guidance or explicit reward composition.

## Regions, Hubs, And Places

Common place names can map to different kinds of data:

- region enum
- hub or fast-travel location
- marker prototype
- world stash or search-point location

Do not assume these are interchangeable.

## Resolving Places

Useful local sources:

- `GameLite/GameData/JournalQuestPrototypes/*.cfg` for quest region usage
- `GameLite/GameData/MarkerPrototypes.cfg` for marker and region marker definitions
- `GameLite/GameData/FastTravelLocationPrototypes.cfg` for hub locations and player coordinates
- `GameLite/GameData/SpawnActorPrototypes/WorldMap_WP/**` for concrete world placements and stash generators
- `GameLite/GameData/CorpseClueStashPrototypes.cfg` for region-linked stash categories

Use these rules:

- if the player only needs broad regional guidance, use journal region and marker guidance
- if the player needs a base or hub destination, use the fast-travel or hub location data
- if the player needs a specific stash or search area, prefer a concrete stash generator, marker target, or search point
- if the user names a place that could mean several things, resolve whether they mean a region, hub, marker, or specific world location before planning
- if exact coordinates are unnecessary, prefer a broad area target with a radius over inventing a precise point
- if the quest depends on a specific stash and local lookup does not reveal a clear candidate quickly, stop and ask the user which stash or stash family to use

## Reward Composition

High-value reward patterns:

- direct deterministic item: `ItemAdd`
- inventory package or loadout: `SetItemGenerator`
- stash reveal or cache fantasy: `GiveCache`
- money payout authored through a quest reward generator with `MoneyGenerator`, then delivered via `SetItemGenerator`

Practical reward planning:

- for money-only rewards, prefer an authored reward generator using `MoneyGenerator`
- for "money plus stash" rewards, split the reward into two explicit actions
- for armor rewards such as a plain exoskeleton, prefer an item generator or stash reveal over inventing ad hoc delivery logic
- if the reward fantasy depends on a stash reveal but no suitable stash can be identified quickly, ask the user before inventing one

Observed local pattern:

- `EQ50` delivers alternate money rewards through `SetItemGenerator` nodes targeting reward generators such as `EQ50_reward_var2_MoreMoney`
- quest reward generator files under `GameLite/GameData/ItemGeneratorPrototypes/QuestRewardsPrototypes/**` commonly use `MoneyGenerator`
- money card item SIDs exist in `GameLite/GameData/ItemPrototypes/MoneyPrototypes.cfg`

## Recommendation For This Repo

When the user wants a combined reward:

1. look for an existing quest reward generator pattern
2. model the money portion as its own reward generator
3. if a stash is part of the fantasy, use `GiveCache` with a dedicated stash generator
4. if the reward should go straight to the player, use `SetItemGenerator` or `ItemAdd`

## Missing Struct Rule

If the quest needs a reward, marker, journal entry, variable, or item that does not already exist:

1. reuse the closest existing local pattern
2. define the minimal new struct family needed
3. keep names scoped to the quest SID
4. avoid creating unrelated support content
