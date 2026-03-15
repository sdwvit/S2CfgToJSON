# Environment Prompts

Read this file when the skill is moving from design to implementation guidance.

## Ask The User When Unknown

Ask for these values if they are needed and cannot be inferred safely:

- implementation repo path
- GameLite source folder path
- target mod folder or mod name
- whether the quest should be a new mod or part of an existing mod
- whether the user wants design-only output or implementation-ready placement guidance

## Do Not Ask By Default

Do not stop to ask for:

- exact coordinates when broad area guidance is acceptable
- exact reward values when placeholders are acceptable
- exact dialog prose when the user only needs structure

Instead:

- use broad region or marker-radius guidance
- propose placeholder reward values
- provide dialog chain and phrase skeletons
