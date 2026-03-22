# Design System — AI Word Cleaner Demo

## Product Context
- **What this is:** A static tool site for cleaning AI-generated Chinese body text before it is pasted into Word.
- **Who it's for:** Students and light academic users who use AI for drafting but do not want to manually clean formatting in Word.
- **Project type:** Single-page web tool.

## Aesthetic Direction
- **Direction:** Minimal Utility
- **Mood:** Clean, restrained, and immediate. It should feel like a focused text tool, not a product landing page.
- **Reference stance:** The page should follow a simple tool-site rhythm: thin header, centered hero, large workspace, very little decoration.

## Core Principles
- The tool itself is the main page content.
- Explanatory copy should stay short.
- Surfaces should be plain and quiet.
- Beauty should come from proportion, spacing, and restraint.
- Avoid “AI product” cliches and unnecessary feature marketing.

## Typography
- **Display/Hero:** System sans stack
  - `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", sans-serif`
- **Body:** Same as display
- **Labels:** Same as body
- **Accent mono:** `IBM Plex Mono` is allowed only where a stronger utilitarian accent is needed, but should stay optional.

### Type Scale
- `hero`: 2.5rem
- `body-lg`: 1.05rem
- `body`: 0.95rem
- `label`: 0.85rem
- `meta`: 0.8rem

## Color
- **Approach:** Monochrome-first
- **Background:** `#fafafa`
- **Surface:** `#ffffff`
- **Text main:** `#111111`
- **Text muted:** `#666666`
- **Border:** `#e5e5e5`
- **Primary action:** `#111111`

### Dark Mode
- **Background:** `#111111`
- **Surface:** `#1a1a1a`
- **Text main:** `#f5f5f5`
- **Text muted:** `#a0a0a0`
- **Border:** `#2b2b2b`
- **Primary action:** `#f5f5f5`

## Layout
- **Header:** thin, left brand, right utility action
- **Hero:** centered title and one short supporting paragraph
- **Workspace:** dominant two-panel area beneath hero
- **Mobile:** segmented input/output switch above the panels

## Component Rules

### Header
- Keep it sparse.
- No marketing navigation.
- One utility action is enough.

### Hero
- One headline.
- One supporting paragraph.
- Optional text emphasis only; no image, no illustration, no secondary card.

### Workspace
- Two panels of equal weight.
- Equal height.
- Panel headers are compact and utilitarian.
- Right panel keeps the main action button.

### Buttons
- Default button: transparent with thin border
- Primary button: solid monochrome fill
- No gradients
- No oversized pills unless functionally justified

## Responsive Behavior
- Desktop: two columns
- Tablet/mobile: stacked panels
- Mobile defaults to output view first
- Touch targets should remain comfortable and clear

## Non-Goals
- No product-style feature sections
- No testimonial or trust blocks
- No decorative imagery
- No school template UI

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-22 | Simplified the page into a minimal tool-site layout | The project needs to behave like a utility, not a product page |
