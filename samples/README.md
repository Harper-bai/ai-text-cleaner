# Samples

`cases.mjs` is the baseline corpus for this demo.

Each case should include:
- `id`
- `label`
- `input`
- `expected`

When you add a new real-world text sample:
1. Paste the raw AI output into `input`
2. Write the exact Word-ready target into `expected`
3. Run `node ./scripts/run-samples.mjs`

The goal is to make rule changes measurable before they touch the UI.
