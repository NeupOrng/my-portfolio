---
name: Orng Neup
description: Portfolio of a full-stack engineer, skilled with AI, set as a request console.
colors:
  ink: "#0d0e0c"
  paper: "#e8e8e3"
  paper-sunk: "#dcdcd5"
  signal: "#c8f31d"
  on-ink: "#ecece7"
  on-ink-muted: "#a3a49c"
  on-paper: "#0d0e0c"
  on-paper-muted: "#55564f"
  line-ink: "rgba(236, 236, 231, 0.16)"
  line-paper: "rgba(13, 14, 12, 0.16)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 5vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)"
    fontWeight: 350
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 1vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  prose:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0em"
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "40px"
  section: "96px"
  section-lg: "128px"
  block: "64px"
  row: "24px"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-signal-hover:
    backgroundColor: "{colors.on-ink}"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.on-ink}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.on-ink-muted}"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.on-ink}"
  status-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.mono}"
    height: "32px"
  settled-row:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "14px 20px"
---

# Design System: Orng Neup

## Overview

**Creative North Star: "The Request Console"**

The site reads like a quiet operations console for one engineer: near-black ink for identity, cool concrete paper for reading, and a single lime signal that only ever means "live" or "settled". Structure is drawn, never filled: 1px hairlines divide rows and columns, and the few framed objects carry two drawn corner ticks instead of a box shadow or a radius. Data speaks in monospace (routes, timings, dates, tags, status codes); everything human speaks in Archivo, light and tightly tracked at large sizes.

Density is low and deliberate. Big light headlines sit on a 12-column grid with long, open sections (96 to 144px of vertical padding), and lists are ruled tables rather than cards. Motion exists only for orientation: a first-visit boot loader and a short page transition, both removed under reduced motion. Nothing moves on scroll.

The world alternates surfaces section by section rather than using a theme toggle. Ink opens and closes a page (hero, closing call, contact); paper carries the reading in between (stack, writing, experience, articles). The fixed status bar at the foot of every page reports the current route as `GET /path 200 OK`, and it is the system's recurring signature.

**Key Characteristics:**
- Two surfaces (ink and paper) alternated by section; one lime signal.
- Square everything: no radius anywhere, no shadows.
- Hairline 1px rules and ruled-table lists instead of cards.
- Archivo light display with negative tracking; tracked Archivo caps for controls; JetBrains Mono for data only.
- HUD frame: hairline box with two drawn corner ticks, used sparingly on the one framed object per view.
- Fixed mono status bar showing the live route.

## Colors

A near-monochrome pair of ink and concrete, cut by one electric lime that is reserved for signal.

### Primary
- **Signal Lime** (`signal`): the brand lime from the ORNG wordmark. Used as a fill (primary button, the "settled" trace row, the boot progress bar, the skip link, text selection, the status-bar dot) or as text and rules on ink only (the wordmark "O", "200 OK" in the status bar, contact-channel hover, the top rule on ink feature columns, focus outlines and HUD corner ticks on ink).

### Neutral
- **Console Ink** (`ink`): identity surfaces, the header, footer, status bar, boot loader and code blocks. Also the text colour on paper (`on-paper`) and on lime.
- **Concrete Paper** (`paper`): reading surfaces: home stack and writing sections, Experience, Writing, About, articles.
- **Sunk Concrete** (`paper-sunk`): the one recessed tone on paper: inline code backgrounds and the portrait frame fill.
- **Bone** (`on-ink`): primary text on ink; also the hover fill of buttons on ink.
- **Ash** (`on-ink-muted`): secondary text, ledes and data columns on ink; inactive nav.
- **Graphite** (`on-paper-muted`): secondary text, ledes, dates and list markers on paper.
- **Ink Hairline** (`line-ink`) and **Paper Hairline** (`line-paper`): every divider, row rule and frame border, 16% of the opposite surface's text colour.

### Named Rules
**The One Signal Rule.** Lime is the only chromatic colour. It marks state (live, settled, current, focused) or the primary action, never decoration, and it never appears as text on paper; on paper the same roles fall to ink (focus outlines and HUD ticks turn ink).

**The Surface Swap Rule.** Every surface token has an "on" partner. Muted text, hairlines, HUD borders and focus colours are re-derived when a block sits on paper; never place ink-surface muted values on paper.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial, sans-serif), self-hosted variable 100–900
**Body Font:** Archivo
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo), self-hosted variable 100–800, tabular numerals

**Character:** A grotesque used light and tight at scale, so headlines feel engineered rather than loud; paired with a mono that behaves like log output.

### Hierarchy
- **Display** (300, clamp up to ~6rem on the home and contact heroes, 0.95, -0.04em, balanced): page titles and the closing call. One per page.
- **Headline** (350, clamp 2.25–4.75rem, 1.02, -0.03em, balanced): section titles and article titles.
- **Title** (400, clamp 1.25–2rem, 1.15–1.2, -0.02 to -0.025em): row titles in ruled lists (blog rows, experience roles). Large list items (stack items, contact channels) drop to weight 300 at 1.6–3.5rem.
- **Lede** (400, clamp 1.125–1.3125rem, 1.5, max 34em, pretty wrap): the paragraph under a page title, usually muted.
- **Body** (400, 1rem, 1.5): supporting copy; summaries capped near 42ch.
- **Prose** (400, 1.125rem, 1.7, max 68ch): articles. h2 at 1.875rem/400, h3 at 1.3125rem/500; square bullets.
- **Label** (500, 0.75rem, 0.14em, uppercase): nav, column headings, and inline text links ("All posts"). Buttons use the same treatment at 0.8125rem.
- **Mono** (400, 0.75–0.875rem, tabular): routes, timings, dates, tags, status codes, code.

### Named Rules
**The Mono Is Data Rule.** JetBrains Mono appears only on machine-shaped content: routes, ms timings, ISO-ish dates, tags, status codes, code. Prose, headings and labels are always Archivo.

**The Light At Scale Rule.** The larger the type, the lighter and tighter it gets: 300 and -0.04em for display, 350 and -0.03em for headlines. Never set display sizes at bold weights.

## Layout

A centred 12-column grid with a 1360px maximum width, 20px side gutters on mobile and 40px from 768px up. Heroes split 7/5 (content left, framed object right); section intros pair a headline (5–7 columns) with a muted lede pinned to the right and aligned to its baseline (`self-end`). Sections run full-bleed in their surface colour with 96px vertical padding (128px on larger heroes, 112–144px on closing calls); internal blocks sit 64px apart.

Lists are ruled tables: a top rule, then rows with 24–32px vertical padding and a hairline bottom border, laid out in fixed label columns (dates at 8–10rem) that collapse to stacked rows below 560px. Primary list pages (Experience, Writing) open their table with a full-ink rule instead of a hairline. The header is a 64px sticky bar; a 32px fixed status bar sits at the foot, and the body reserves its height.

## Elevation & Depth

The system is completely flat. There are no shadows, no blurs and no raised cards; depth comes from surface alternation (ink against paper), from a single recessed tone (Sunk Concrete) and from hairline structure. The only layering is positional: the sticky header, the fixed status bar and the boot loader overlay.

### Named Rules
**The Drawn Not Lifted Rule.** If something needs emphasis, frame it with a hairline and corner ticks or swap its surface; never give it a shadow.

## Shapes

Every corner is square (0px): buttons, frames, images, code blocks, the status dot and trace nodes. Borders are 1px hairlines; the only heavier strokes are the 2px HUD corner ticks and the 2px active-nav underline. Small markers are squares (6–7px) rather than circles, and list bullets are square. The arrow glyph is a 1.5px-stroke up-right arrow with square caps, drawn inline as SVG.

## Components

### Buttons
Tracked uppercase, square, and quiet until hovered.
- **Shape:** square (0px), 48px minimum height, 20px horizontal padding, 1px border in the current colour.
- **Signal (primary):** lime fill and border, ink text. One per view, for the main action (Get in touch, Start a conversation).
- **Line (secondary):** transparent with a 1px current-colour border.
- **Hover:** signal fills to Bone; line fills with the opposite surface's text colour (Bone on ink, Ink on paper) and inverts its text. 220ms with the expo-out ease. A trailing arrow nudges 2px up-right.
- **Focus:** 2px lime outline offset 3px on ink, ink outline on paper.

### Navigation
- Tracked caps in Ash on ink; hover lifts to Bone. The current route is Bone with a 2px lime underline that draws in from the left (320ms). Below 380px wide the labels shrink to 0.6875rem with 0.1em tracking to fit four items without a menu.

### Ruled List Rows
The system's card substitute (blog rows, experience roles, contact channels, stack definition lists).
- **Structure:** grid columns (mono date or meta / title / mono tags / arrow), 24–32px vertical padding, hairline bottom border.
- **Hover:** the title underlines (on paper) or turns lime (on ink, contact channels only), and the arrow moves 3px up-right.

### HUD Frame (signature)
A 1px hairline box with two 12px, 2px-thick corner ticks at top-left and bottom-right: lime on ink, ink on paper. Used on the one framed object in a view: the home request trace, the About portrait, an article cover. Never nested, never on list rows.

### Request Trace (signature)
Inside a HUD frame: a mono header row (method and route, "trace"), then ordered hops with a square node, a hairline connector, the hop name in Archivo 500 and the stack and timing in muted mono, closed by a full-width lime **settled row** (`201 · settled`, total ms).

### Status Bar (signature)
Fixed 32px ink bar at the viewport foot, mono 0.75rem, hairline top border: a 6px square dot (lime when settled, Ash while navigating), `GET`, the live path, and `200 OK` in lime (an ellipsis while pending). Announced politely to assistive tech.

### Boot Loader
First visit per session only: the wordmark, a mono line (`boot /orng.neup … ready`) and a 1px lime bar that fills over 900ms, then the overlay lifts with a clip-path wipe at about 1.05s. Skipped on reduced motion, without JavaScript, and on repeat visits.

### Wordmark
"ORNG" in Archivo 600 with 0.08em tracking, the "O" in lime. Appears on ink only.

## Do's and Don'ts

### Do:
- **Do** alternate ink and paper by section, opening and closing pages on ink.
- **Do** keep lime to fills and to text or rules on ink, and to state or the primary action.
- **Do** use hairline (16%) rules and ruled-table rows to structure content.
- **Do** set machine data (routes, timings, dates, tags, status) in JetBrains Mono with tabular numerals.
- **Do** keep corners square (0px) on every element.
- **Do** keep motion to the boot loader, the page transition (360ms fade with a 12px rise in, 160ms fade out) and 200–320ms hover easing on `cubic-bezier(0.16, 1, 0.3, 1)`; remove the loader and transitions under reduced motion.

### Don't:
- **Don't** add shadows, glows, blurs or rounded corners.
- **Don't** set lime text on paper.
- **Don't** introduce a second accent colour or gradients.
- **Don't** wrap content in cards; use ruled rows or a single HUD frame.
- **Don't** add scroll-driven or looping animation.
- **Don't** use mono for prose, headings or button labels.
