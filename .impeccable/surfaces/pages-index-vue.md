---
version: 1
slug: "pages-index-vue"
primary_target: "pages/index.vue"
related_targets: ["pages/work.vue","pages/about.vue","pages/contact.vue","pages/blog/index.vue"]
---

# Portfolio site: Home, Work, About, Blog, Contact

Scope: whole site shell plus the four pages and home. Visitor mode: Experience (portfolio), with Read for blog articles. Audience: recruiters and freelance clients equally. Action: reach Contact (LinkedIn / GitHub). Projects deliberately deferred.

## Direction contract

THESIS: One engineer, the whole request path. The home page traces a request from the browser down to a settled ledger entry, each hop labelled with the real stack Orng uses. It refuses the category default: photo hero plus skill-icon cards plus "Project A/B/C".

OWN-WORLD: Studio MACACO's console voice fused with Denny Pratama's restraint. Near-black ink `#0D0E0C` for identity sections, cool concrete paper `#E8E8E3` for reading sections, one signal: the brand lime `#C8F31D` (fills and dark-ground text only). Archivo light at display sizes with tight tracking; Archivo 500 tracked caps for nav and buttons; JetBrains Mono only for data: timestamps, routes, status codes, tags, code. Hairline 1px frames with drawn corner ticks; a fixed status bar showing the current route as `GET /path 200`.

STORY: Within one viewport a visitor knows who (Orng Neup), what (full-stack engineer, skilled with AI), and the proof (the trace of a real stack, front to ledger). They scan the two-column front/back stack, read writing, then contact.

FIRST VIEWPORT: Dark. Left 7/12: headline "Front end to ledger." at ~6rem light, positioning lede that opens with the name and headline, two actions (Get in touch primary lime, See my work secondary outline). Right 5/12: hairline-framed trace of six hops ending in a lime "settled" row. Fixed status bar at bottom.

FORM: World and motion pinned by the user: "combine these 2 design, remove the dizzying animation keep small animation like page transition and loading screen". The first-surface thesis (request trace, "Front end to ledger.") is the builder's proposal, not pinned; it is put to the user for confirmation rather than rolled. seed: none (pinned)
Motion: first-visit boot loader (wordmark + mono progress, ~900ms, clip-path lift) and a short page transition (fade + 12px rise + status-bar route update). Nothing scroll-driven. Reduced motion removes both.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
