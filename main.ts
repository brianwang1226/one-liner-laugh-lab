// One-Liner Laugh Lab — writes one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We tested 100 jokes on 100 people. 99 laughed. Gary didn't. Gary has been in the lab for 6 years. Gary still isn't laughing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
