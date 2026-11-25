import { mkdirSync, writeFileSync } from "node:fs";

// Excuse from a hardware wallet refusing to sign at 3 AM, for the
// "The 3 AM Excuse" bounty on make.fun.
const entry =
  "I can't sign at 3 AM. My screen is asleep, my buttons are tired, and honestly, so is your judgment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
