import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My keys are asleep — it's 3 AM, and the last thing they signed was your 2 AM 'definitely not a rug pull' promise. Ask again at sunrise.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
