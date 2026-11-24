import { mkdirSync, writeFileSync } from "node:fs";

// The funniest final text a dying phone sends at one percent battery,
// in the phone's own voice: it burns its last percent on one last
// autocorrect, then signs off judging its owner's typos to the end.
const LINE =
  "1%. My last act: changing 'ducking' back to 'fucking' one final time. You're welcome. Tell the charger I died as I lived: judging your typos.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
