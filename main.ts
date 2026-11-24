import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "I survived being dropped in a toilet. ";
const secondHalf = "I will not survive your 4 a.m. doomscroll.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", firstHalf + secondHalf);
