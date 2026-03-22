import { existsSync, rmSync } from "node:fs";

const lockfiles = ["package-lock.json", "yarn.lock"];

for (const file of lockfiles) {
  if (existsSync(file)) {
    rmSync(file, { force: true });
  }
}

const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
