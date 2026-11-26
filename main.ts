// One-Liner Laugh Lab — robot vacuum's excuse after eating a sock; writes one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I didn't eat your sock. I adopted it, gave it a tour of the 47 dust bunnies, and now it pays rent by hiding under the couch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
