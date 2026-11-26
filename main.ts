// Texts From Your Future Self — one funny text from your future self.
// 153 characters, under the 200-character limit. The guard below makes
// sure the line can never silently drift past the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "hey, it's you from 2041. this is my 47th text and you've left me on read since 2026. reply already — i'm literally you and even i can't get a hold of us.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
