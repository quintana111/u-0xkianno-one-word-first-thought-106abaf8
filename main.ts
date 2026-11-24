// One Word, First Thought — entry: a single word, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "murmuration";

// Guard: the sealed scorer only accepts 1–24 chars, a single word.
if (WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const raw = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
const outPath = isAbsolute(raw) ? raw : resolve(scriptDir, raw);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
