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
import { Struct } from './Struct.mts';

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
console.log(parsed.toString());
```

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
