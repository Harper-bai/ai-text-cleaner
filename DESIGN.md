# Design System — AI Word Cleaner Demo

## Product Context
- **What this is:** A focused web demo that turns messy AI-generated Chinese paper text into clean, Word-ready body copy. The product's core promise is immediate usability: paste once, get a usable result.
- **Who it's for:** Students and light academic users who rely on AI for drafting but do not want to manually clean formatting in Word.
- **Space/industry:** Writing tools, text utilities, AI workflow helpers.
- **Project type:** Single-page web app.

## Product Goals
- Make the value obvious within the first screen.
- Preserve a one-step feeling even though the UI shows before/after comparison.
- Look polished enough for a portfolio without becoming decorative or gimmicky.
- Signal product judgment through restraint: narrow scope, strong defaults, no settings clutter.

## Aesthetic Direction
- **Direction:** Editorial Utility
- **Decoration level:** Intentional
- **Mood:** Quietly confident, text-first, slightly warm, and materially grounded. It should feel closer to a well-made writing tool than a generic SaaS landing page.
- **Reference patterns:** Competitors in text cleanup and writing-tool interfaces tend to overuse plain SaaS grids and generic utility visuals. This system keeps their clarity while replacing the generic feel with stronger typography, warmer surfaces, and a more editorial first impression.

## Visual Strategy
- The hero should communicate a single promise, not a feature set.
- The work area is the product, so it owns the page.
- The visual center of gravity is the before/after relationship, not marketing copy.
- Typography should do most of the brand work.
- Color should support trust and readability first, personality second.

## Typography
- **Display/Hero:** `Fraunces`
  - Use for the hero headline and a few large editorial accents.
  - Rationale: Gives the product a clear text-product identity and helps it stand apart from generic tool sites.
- **Body:** `Instrument Sans`
  - Use for body copy, UI labels, helper text, and buttons.
  - Rationale: Clean and contemporary without feeling default or overused.
- **UI/Labels:** `Instrument Sans`
  - Keep interface language visually unified and highly readable.
- **Data/Tables:** `IBM Plex Mono`
  - Use for counts, processing badges, small technical labels, and comparison metadata.
  - Rationale: Adds a quiet utility signal and supports tabular numerals.
- **Code:** `IBM Plex Mono`
- **Loading:** Google Fonts for `Fraunces`, `Instrument Sans`, and `IBM Plex Mono`.

### Type Scale
- `hero-xl`: 72px / 0.98 / -0.03em
- `hero-lg`: 56px / 1.0 / -0.025em
- `display-sm`: 40px / 1.05 / -0.02em
- `title-lg`: 28px / 1.15 / -0.015em
- `title-md`: 22px / 1.2 / -0.01em
- `body-lg`: 18px / 1.6 / 0
- `body-md`: 16px / 1.6 / 0
- `body-sm`: 14px / 1.5 / 0
- `label`: 12px / 1.3 / 0.06em
- `mono-sm`: 12px / 1.4 / 0.02em

## Color
- **Approach:** Restrained
- **Primary:** `#C96B3B`
  - Use for the main action, emphasis strokes, and key interactive highlights.
  - Represents clarity, intervention, and a slight editorial warmth.
- **Secondary:** `#B8C4B0`
  - Use for subtle success states, positive system feedback, and low-pressure accents.
- **Neutrals:**
  - `#FCFBF7` surface base
  - `#F5F1E8` canvas background
  - `#E8E0D0` soft fill / hover wash
  - `#D9D2C3` border / dividers
  - `#A59A87` muted copy
  - `#6F6A5F` secondary text
  - `#1E1E1A` primary text
- **Semantic:**
  - Success: `#7A9462`
  - Warning: `#B8852F`
  - Error: `#B95C4B`
  - Info: `#6A7E95`
- **Dark mode strategy:** Keep the same warm-neutral DNA, but reduce accent saturation by roughly 15 percent and lift surfaces into layered charcoal-brown tones instead of pure black.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Scale:** `2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96)`

## Layout
- **Approach:** Hybrid
- **Grid:** 12-column desktop, 6-column tablet, 1-column mobile
- **Max content width:** 1180px
- **Page structure:**
  - Thin top bar with logo and two lightweight links
  - Hero split into messaging and a compact sample card
  - Dominant comparison workspace beneath the fold line, but still visible in the first viewport on desktop
  - Small reassurance section below the tool: what gets fixed, privacy, and examples
- **Border radius:**
  - `sm`: 6px
  - `md`: 10px
  - `lg`: 16px
  - `xl`: 24px
  - `pill`: 999px

## Component Direction
### Navigation
- Keep it thin and quiet.
- Include only logo, `How it works`, and `Samples`.
- No full SaaS navbar or multi-item marketing IA.

### Hero
- One dominant statement:
  - `把 AI 文字一键整理成可贴进 Word 的正文`
- One supporting line:
  - `自动去掉 Markdown、异常空格和多余空行，保留自然段落。`
- A compact before/after specimen card sits beside the headline to prove the promise before the user scrolls.

### Workspace
- Core layout: two large text panes with strict alignment.
- Left pane: raw input
- Right pane: cleaned result
- A slim process ribbon above the panes shows:
  - `自动清洗中`
  - `已处理 1,248 字`
  - `去 Markdown / 修空格 / 合并空行`
- The right pane gets stronger contrast and visual focus because it is the destination state.

### Buttons
- Primary button: filled with `#C96B3B`, dark text, slight inset shading.
- Secondary controls: quiet outline or text-only.
- Keep the button shapes structural, not playful.

### Status and Feedback
- Copy success should be explicit and brief.
- Auto-cleaning should feel instant but not jittery.
- Empty state should guide, not explain too much.

### Samples Section
- Show 2 to 3 realistic messy-text examples with condensed before/after states.
- This section exists for credibility and portfolio storytelling.

## Interaction Rules
- Paste triggers cleaning automatically.
- No settings panel in v1.
- No multi-step flow.
- The right panel updates with a short fade, not a full loading skeleton.
- Copy should change to `已复制` for about 1.5 seconds, then revert.
- If input is empty, output should show a calm instructional state, not a blank void.

## Motion
- **Approach:** Minimal-functional
- **Easing:**
  - Enter: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Exit: `cubic-bezier(0.4, 0, 1, 1)`
  - Move: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Duration:**
  - Micro: `80ms`
  - Short: `180ms`
  - Medium: `280ms`
  - Long: `480ms`

## Safe Choices
- Keep the comparison view because it matches user expectations in this category.
- Use a single dominant CTA because the product only has one real job.
- Make the tool available immediately on the landing screen instead of hiding it below promotional content.

## Risks
- Use `Fraunces` as the hero voice.
  - Gain: Distinctive, text-native identity.
  - Cost: Slightly less neutral than default sans-serif UI products.
- Use warm paper-like surfaces instead of pure white.
  - Gain: Stronger material feel, better portfolio presence.
  - Cost: Requires tighter contrast discipline.
- Make the before/after workspace the primary visual event.
  - Gain: The product proves itself instantly.
  - Cost: Less room for conventional marketing storytelling.

## Screen Blueprint
### Desktop
- Header
- Hero split section
- Comparison workspace
- Three-value strip
- Sample cases
- Footer note with privacy reassurance

### Mobile
- Hero stacks vertically
- Before/after specimen card becomes a horizontal preview block
- Comparison panes collapse into a segmented toggle:
  - `原文`
  - `清洗后`
- Copy action remains pinned to the cleaned view

## Content Style
- Short, specific, non-marketing language
- Avoid AI hype phrases
- Use verbs that describe the result:
  - `整理`
  - `清洗`
  - `复制到 Word`
- Avoid jargon-heavy phrasing like `格式标准化引擎`

## Implementation Notes for the Frontend
- Use CSS variables for all colors, spacing, radius, and motion values.
- The layout should work cleanly without illustration assets.
- Prioritize typographic rhythm and panel hierarchy over decorative elements.
- If later you add dark mode, preserve warmth and avoid neon accents.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-22 | Initial design system created | Based on product scope from office-hours and a design consultation focused on portfolio-grade polish and immediate usability |
