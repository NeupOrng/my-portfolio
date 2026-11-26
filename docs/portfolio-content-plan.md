# Portfolio Content Plan

Research date: 2026-11-26. Sources: this repo, local project folders, public GitHub (github.com/NeupOrng), and a web search.

## 1. What I found about you

### Public footprint
- **GitHub:** [NeupOrng](https://github.com/NeupOrng). 16 public repos, no bio, no location, no profile README, 1 follower. Pinned: `artical-manager`, `payment-formance-poc`.
- **LinkedIn:** linked in the footer (`orng-neup-91ab14230`). I could not read it because it needs a sign-in.
- **Web search:** nothing comes up for "Orng Neup". Your portfolio would be the first page about you, which makes it worth doing well and worth basic SEO (title, meta description, Open Graph image).
- **Name consistency:** the footer says *Orng NEUP*, git commits say *Orng Astrylark*, *God Orng* and *orng*. Pick one public name and use it everywhere.

### Positioning the evidence supports
The current hero says "Vue.js and modern web technologies". Your real work is broader and more senior than that:

> **Full-stack engineer who designs and builds fintech and multi-tenant platforms**: payment ledgers, sagas, auth, and the Vue/Nuxt and React front ends on top.

Recurring themes across your projects:
- **Fintech / core banking:** payment engine, ledger (Formance), sagas (Temporal), maker-checker workflow with a hash-chained audit trail, Bakong/KHQR integration, loan origination.
- **Identity & auth:** Ory Kratos / Hydra / Keto, OAuth, Google and Telegram login, JWT refresh flows, Kong gateway.
- **Architecture:** modular monolith with enforced bounded contexts, hexagonal services, gRPC between services, ADRs, OpenAPI contracts.
- **Platform / DevOps:** Docker Compose, self-hosted GitHub Actions runner, Taskfile workflows.
- **Product front ends:** Nuxt 3/4, Vue 3, Next.js, shadcn, Tailwind, PWA.

### Real skill set (replaces the placeholder tabs)
| Group | Skills seen in your code |
|---|---|
| Frontend | Vue 3, Nuxt 3/4, React, Next.js, TypeScript, Tailwind CSS, shadcn/ui (Vue & React), Pinia, vee-validate + Zod, PWA |
| Backend | NestJS, Node.js, Go, Java + Spring Boot, Python (FastAPI), Deno Fresh, REST, gRPC, OpenAPI |
| Data | PostgreSQL, CockroachDB, Drizzle ORM, Liquibase, goose, Valkey/Redis, MongoDB, Strapi |
| Fintech & workflow | Formance Ledger, Temporal, double-entry, saga compensation, maker-checker |
| Auth & security | Ory (Kratos, Hydra, Keto), OAuth 2 / OIDC, JWT, Kong |
| DevOps | Docker, GitHub Actions, Taskfile |

The current "Firebase / MongoDB / Express" list undersells you. Keep MongoDB/Express only if you still want that work.

## 2. Projects to feature

Personal and public projects are safe to show. Work projects need your OK first (see section 4).

| # | Project | Repo | One-line pitch | Stack |
|---|---|---|---|---|
| 1 | **Payment Formance POC** | public | Agent-banking payment core: Formance ledger, every payment a Temporal saga, reserve → authorize → settle with compensation on failure | TypeScript, Formance, Temporal |
| 2 | **Article Manager** | public | Multi-tenant Medium-like publishing platform. One backoffice runs several branded sites on their own domains | Nuxt, Ory Kratos/Hydra, Docker |
| 3 | **ListeoBook (booking-service)** | public | Service booking platform: owners publish availability, customers book through a guided wizard. JWT, Google and Telegram login | Nuxt 4, NestJS, Drizzle, PostgreSQL |
| 4 | **Store Manager** | local | PWA for shop stock. Staff scan barcodes on a phone, the owner reviews movement history on desktop | Nuxt 4 PWA |
| 5 | **Sala** | public | School management app | Nuxt 3, Vue |
| 6 | **Novuxt** | public | Nuxt 4 PWA light-novel reader with client-side plugins | Nuxt 4, Vue |
| 7 | **Feature Management** | public | Backend and core engine for feature flags | NestJS 11 |
| 8 | **Kork Muy** | org repo | Event platform (web app + backend) | Nuxt 3, NestJS |

Suggested top 3 for the homepage: **Payment Formance POC**, **Article Manager**, **ListeoBook**. They show fintech depth, multi-tenant design and a full-stack product.

For each project card, write: problem → what you built → one hard technical decision → stack → links (repo, demo, screenshots).

Older repos (`skin-care-app`, `baktuk-confession`, `FastAPI_Postgresql_VRdart`, `resume-builder`): leave them off, or put them in an "Earlier work" list.

## 3. Proposed site structure

1. **Hero:** name, title (e.g. "Full-stack Engineer · Fintech & Platforms"), one-sentence pitch, CTA buttons (View projects, Contact, Download CV).
2. **About:** short bio, location, what you're working on now, what you're studying (if relevant).
3. **Skills:** the tabs you already built, filled with the real groups above. Replace the lorem ipsum with one line of proof per skill ("used in X").
4. **Featured projects:** replace "Project A/B/C" with the top 3, each linking to a detail page.
5. **Experience:** timeline of roles (company, title, dates, 2–3 impact bullets).
6. **Blog:** already in progress. Good first topics from your own work: Ory Kratos auth setup, sagas with Temporal + Formance, modular monolith with depguard.
7. **Contact:** email form or mailto, GitHub, LinkedIn. Consider dropping Facebook for a professional site.

Small fixes: footer says © 2024, the photo alt is "Your Photo", the README is the Nuxt starter, and the GitHub profile has no bio or README (add one that links here).

## 4. What I need from you

These can't be found from your files or the web:

1. **Public name:** Orng Neup, Neup Orng, or something else?
2. **Title & years of experience:** e.g. "Senior Full-stack Engineer, 5 years".
3. **Work history:** companies, roles, dates. Your local folders suggest work under *AstrylArk* (Atlas loan origination system, tenant portal) and a mobile-banking platform.
4. **Can work projects be shown?** Atlas, mobile banking (payment engine, fund transfer via Bakong, maker-checker workflow) and poc-portal are your strongest work but look like employer or client code. I'd only show them as anonymised case studies (no code, no client names) if you confirm that's allowed.
5. **Education:** there's a "Master / Business Ethic" folder. Are you doing a Master's? Which school and program?
6. **Location / availability:** city and country, open to remote, freelance or full-time?
7. **Achievements:** certificates, awards, talks, community work (e.g. your KhmerCoders contribution).
8. **Assets:** a professional photo, project screenshots, demo URLs, a CV PDF.
9. **Contact email** to show publicly.
