import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const tscPath = path.join(root, "node_modules", ".bin", process.platform === "win32" ? "tsc.cmd" : "tsc");
const expectedOutputs = [
  "Struct.mjs",
  "Struct.d.mts",
  "enums.mjs",
  "enums.d.mts",
  "types.mjs",
  "types.d.mts",
  "utility-types.mjs",
  "utility-types.d.mts",
];

rmSync(distDir, { recursive: true, force: true });

const result = spawnSync(tscPath, ["-p", "tsconfig.build.json"], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
});

const allOutputsExist = expectedOutputs.every((file) => existsSync(path.join(distDir, file)));

if (!allOutputsExist) {
  process.exit(result.status ?? 1);
}

if (result.status !== 0) {
  process.exit(result.status);
}
