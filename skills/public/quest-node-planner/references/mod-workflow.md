# Mod Workflow

Read this file when the user wants guidance for turning a quest package into an actual mod layout.

## Scope

This skill teaches the authoring model used in the local mod repo. It does not assume packaging, SDK cooking, or publishing should happen in this repo.

## Expected Mod Layout

The implementation repo uses a per-mod folder under:

- `Mods/<ModName>/`

In the local implementation repo, generated content is typically stored under:

- `Mods/<ModName>/raw/Stalker2/Content/GameLite/...`

The important game-facing content tree inside that layout is:

- `Stalker2/Content/GameLite/...`

Other files such as metadata, package manifests, readmes, images, or publishing files are repo-specific and optional for mod creation guidance in this skill.

If the user does want a `readme.md`, treat it as lightweight supporting documentation. It should summarize:

- the quest premise
- the main quest stages or flow
- the success, failure, or cancel outcomes
- notable rewards or side effects

Generated cfg patches live under:

- `Mods/<ModName>/raw/Stalker2/Content/GameLite/...`

Example:

- quest node patches end up under `Stalker2/Content/GameLite/GameData/QuestNodePrototypes/...`
- dialog patches end up under `Stalker2/Content/GameLite/GameData/DialogPrototypes/...`

## Source GameLite Path

The implementation repo reads base cfg files from the SDK GameLite tree:

- `SDK_PATH/Stalker2/Content/GameLite`

If the user asks for implementation guidance and the actual path is not known, ask for:

- the implementation repo path
- the GameLite source path
- the target mod folder or mod name
