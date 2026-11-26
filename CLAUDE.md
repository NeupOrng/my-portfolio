# CLAUDE.md

Personal portfolio of **Orng Neup**, a full-stack engineer skilled with AI. Built with Nuxt 3 and deployed to a self-hosted server.

Read **PRODUCT.md** before changing content: it lists who the site is for, what can be claimed, and what must never be made up. Read **DESIGN.md** (once written) and `.impeccable/surfaces/pages-index-vue.md` before changing the look.

## Commands

```bash
pnpm install        # also runs `nuxt prepare`
pnpm dev            # http://localhost:3000
pnpm build          # production build to .output/
pnpm preview        # serve the production build
```

Add `?noboot` to any URL to skip the first-visit loading screen (useful for screenshots).

## Contact form → Telegram

`components/ContactForm.vue` posts to `server/api/contact.post.ts`, which validates the fields (honeypot, 5 requests per IP per 10 minutes) and forwards the message to Telegram with the Bot API. It needs two server-only env vars in `.env` (see `.env.example`; never commit them):

- `NUXT_TELEGRAM_BOT_TOKEN`: create a bot with @BotFather and copy its token.
- `NUXT_TELEGRAM_CHAT_ID`: send the bot any message, then open `https://api.telegram.org/bot<token>/getUpdates` and copy `message.chat.id`.

Without them the endpoint answers 503 and the form tells visitors to use Telegram directly. On the server, put `.env` in the repo folder the runner deploys from (docker-compose mounts it at `/app`).

## Stack

- Nuxt 3 (Vue 3, `srcDir: ./`), TypeScript
- Tailwind CSS 3 through `@nuxtjs/tailwindcss`, plus hand-written tokens and classes in `assets/css/main.css`
- Pinia (`@pinia/nuxt`; stores in `stores/` are auto-imported)
- `@nuxt/icon` for brand icons; `marked` renders blog markdown
- Deploy: push to `master` → GitHub Actions on a self-hosted runner → `docker-compose up -d` (see `Dockerfile`, `docker-compose.yml`, `.github/workflows/deploy.yml`)

## Layout

| Path | What it holds |
|---|---|
| `data/site.ts` | **All site content:** profile, links, nav, the home-page trace, stack lists, AI-practice notes, experience timeline. Edit facts here, not in pages. |
| `pages/` | `index` (home), `work` (experience), `about`, `contact`, `blog/index`, `blog/[id]` |
| `layouts/default.vue` | Shell: skip link, boot loader, header, footer, status bar |
| `components/` | `SiteHeader`, `SiteFooter`, `StatusBar` (shows `GET /route 200 OK`), `BootLoader`, `BlogRow`, `Wordmark`, `ArrowIcon` |
| `assets/css/main.css` | Fonts, colour tokens, type classes, buttons, `.hud` frame, loader and page-transition motion, article prose |
| `public/fonts/` | Self-hosted variable fonts: Archivo, JetBrains Mono |
| `public/brand/` | Logo files from the ORNG brand kit, SVG + PNG. `orng-wordmark-on-dark` / `on-light` (transparent), `-bg` (with background), `on-light-badge`; icons `orng-icon-brackets`, `-minimal`, `-hud`. `components/Wordmark.vue` inlines the on-dark wordmark. |
| `public/favicon.*`, `apple-touch-icon.png` | Favicons from the brand kit, linked in `nuxt.config.ts` |
| `server/api/contact.post.ts` | Contact form endpoint; forwards to Telegram (see above) |
| `server/api/blog/` | Blog API, served from `mock/blog.ts` (posts in `mock/blogs/*.ts` as markdown strings) |
| `models/` | `IBlog` type (and the legacy `Blog` class) |
| `stores/blog.client.ts` | Blog store. Keep state as **plain objects**: Pinia state is serialized from server to client, and class instances crash SSR with "Cannot stringify arbitrary non-POJOs". |
| `docs/portfolio-content-plan.md` | Research and content plan, including open questions for Orng |

## Design rules

- **Concept:** "front end to ledger". One engineer owns the whole request path. Studio MACACO's console voice (status bar, hairline HUD frames, monospace data) combined with Denny Pratama's restraint (light Archivo display type, dark and light sections taking turns, one accent).
- **Colour:** ink `#0d0e0c` for identity sections (`.on-ink`), paper `#e8e8e3` for reading sections (`.on-paper`), and the single accent, lime `#c8f31d` (`signal`). Lime is a fill or text on dark only; it fails contrast as text on paper.
- **Type:** Archivo throughout (`.display` and `.heading` for big light type, `.caps` for nav and buttons). JetBrains Mono (`.mono`) is **only** for data: dates, routes, status codes, tags, timings, code. Don't use it as decoration.
- **Motion is deliberately small:** a first-visit boot loader (pure CSS, once per session) and a short page transition. No scroll-jacking, parallax or scroll-driven sequences. Every animation must turn off under `prefers-reduced-motion`.
- No eyebrow or kicker labels above headings, no same-size icon cards, and no gradient text.
- The Impeccable design skill is installed (`.claude/skills/impeccable/`); use it for UI work. Its hooks are in `.claude/settings.local.json` (personal, gitignored).

## Content rules

- **Never invent facts:** employers, titles, dates, years of experience, testimonials, ratings, client names, availability or email. If something is unknown, leave a clearly marked placeholder (`pending: true` in `experience`).
- Don't name work done for employers (e.g. Atlas, mobile banking) unless Orng approves.
- Projects or case studies are deferred on purpose. Don't add a projects section until Orng provides the content.
- Refer to Orng by name or as "they"; pronouns haven't been stated.

## Conventions

- Commit messages: `feat: …`, `fix: …`, `chore: …` (matches history).
- Don't commit `.claude/settings.local.json`, `.impeccable/review/` or `.env*`.
