import { cleanText } from "../src/cleaner.mjs";
import { sampleCases } from "../samples/cases.mjs";

let failures = 0;

for (const sample of sampleCases) {
  const actual = cleanText(sample.input);

  if (actual !== sample.expected) {
    failures += 1;
    console.error(`FAIL ${sample.id}`);
    console.error("Expected:");
    console.error(sample.expected);
    console.error("Actual:");
    console.error(actual);
    console.error("---");
    continue;
  }

  console.log(`PASS ${sample.id}`);
}

if (failures > 0) {
  console.error(`\n${failures} sample case(s) failed.`);
  process.exit(1);
}

console.log(`\nAll ${sampleCases.length} sample case(s) passed.`);
