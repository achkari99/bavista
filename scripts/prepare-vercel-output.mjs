import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const sourceDir = path.resolve(repoRoot, "artifacts", "bavista-website", "dist");
const outputDir = path.resolve(repoRoot, "dist");

if (!existsSync(sourceDir)) {
  console.error(`Build output not found at ${sourceDir}`);
  process.exit(1);
}

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
cpSync(sourceDir, outputDir, { recursive: true });
