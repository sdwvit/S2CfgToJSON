# Stalker 2 CFG to JSON Converter

A utility to convert Stalker 2 `.cfg` configuration files into structured JavaScript objects (POJOs), enabling easier mod development and analysis.

---

## Key Features

- **Struct Class**: A flexible base class for parsing and generating Stalker 2 config structures, handling nested data, wildcards, and indexed entries.
- **TypeScript Support**: Built with TypeScript for type safety and clarity.

---

## Getting Started

### Prerequisites
- Node.js ≥24
- npm (or pnpm/yarn)

### Installation
In your project directory, run:
```bash
npm install s2cfgtojson
```

Or, if you checked out the repository, you can install dependencies directly:
```bash
npm install
```

### Usage
Import the `Struct` class from `Struct.mts` to parse or generate Stalker 2 config data. For example:
```ts
import { Struct } from 's2cfgtojson';

const config = new Struct();
// Use methods like `toString()` or `fromString()` to process configs
```

---

## Example
Convert a `.cfg` file to a structured object:
```ts
const configText = `
BasePhantomAttack : struct.begin {refkey=BaseAttackAbility}
   TriggeredCooldowns : struct.begin
      [0] : struct.begin
         CooldownTag = Ability.Cooldown.RunAttack
         Duration = 50.f
      struct.end
   struct.end
struct.end
`;
const parsed = Struct.fromString(configText)[0];
console.log(parsed.TriggeredCooldowns);
```

---

## Quest Node Planner Skill

This package includes a **Quest Node Planner** skill for AI-assisted quest authoring. It turns plain-language quest descriptions into complete S.T.A.L.K.E.R. 2 quest content packages — quest node graphs, dialog chains, journal entries, markers, rewards, and all supporting structs.

Describe a quest in plain language and the planner will:

1. Resolve real content IDs from your local `GameLite` data (NPCs, items, dialogs, journals, markers)
2. Determine every struct the quest needs (nodes, dialog, journal, globals, rewards, generators)
3. Produce a structured plan with concrete SIDs, a node graph, edges, placement guidance, and validation risks

Example prompt:

> Plan a fetch quest where Barkeep in the Skadovsk asks the player to retrieve a unique PDA from a bandit camp, with a money reward on turn-in and an option to decline.

### Key design principles

- All new structs must patch an **existing base cfg file** — the game won't read arbitrary new files.
- The skill prefers **reusing existing content** (items, markers, generators) over creating new prototypes.
- If something can't be resolved from local data, the skill asks you instead of guessing.

---

## Development

### Tests
Run tests using:
```bash
npm test
```

---

## Contributing

Feel free to contribute by submitting issues or pull requests. Ensure your code adheres to the project's coding standards and includes tests for new features.

---

## License
Free to use in non-commercial projects.

---

## Notes

Thanks, GSC and modders for providing the community with tools to enhance the modding experience.
