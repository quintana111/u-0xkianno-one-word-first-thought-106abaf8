// One Word, First Thought — entry: a single word, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "murmuration";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const raw = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
const outPath = isAbsolute(raw) ? raw : resolve(scriptDir, raw);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
