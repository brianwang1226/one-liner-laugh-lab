// One-Liner Laugh Lab — the robot vacuum explains the missing sock (124 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const setup = "I didn't eat your sock. I adopted it,";
const tour = "gave it a tour of the 47 dust bunnies,";
const punch = "and now it pays rent by hiding under the couch.";
const line = [setup, tour, punch].join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
