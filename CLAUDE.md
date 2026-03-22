## Design System
Always read `DESIGN.md` before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that does not match `DESIGN.md`.

## Project Docs
Before making structural changes, also read:
- `README.md`
- `ARCHITECTURE.md`
- `CONTRIBUTING.md`
- `samples/README.md`

## Project Scope
This project is a body-text cleaner for AI-generated Chinese academic writing.
It is not a general Markdown renderer.
It is not a Word template formatter.
It is not a `.docx` export tool.

## Rule Changes
When changing text cleaning behavior:
1. Prefer adding or updating a sample in `samples/cases.mjs` first.
2. Then update `src/rules.mjs` or `src/cleaner.mjs`.
3. Run `node ./scripts/run-samples.mjs`.
