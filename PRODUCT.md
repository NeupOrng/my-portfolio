# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** deciding whether to interview Orng for a full-time engineering role. They skim fast, want to know the stack, seniority and recent experience, and leave with a contact or CV.
- **Freelance clients** deciding whether to hire Orng to build something. They want to know what Orng can take end to end, whether Orng is available, and how to get in touch.

Both audiences carry equal weight.

## Product Purpose

Personal portfolio of **Orng Neup**, presented as a **full-stack engineer, skilled with AI**. Success is a visitor reaching the contact or LinkedIn/GitHub links convinced Orng can take a product from front end to backend, including the hard parts (payments, ledgers, auth, platform), and that Orng uses AI tools to deliver it well and fast.

## Positioning

Full-stack across the whole path, from a Vue/Nuxt or React front end down to payment ledgers, sagas and identity services, and building with AI as a working practice rather than a buzzword. Evidence lives in Orng's own repos (Formance + Temporal payment POC, multi-tenant publishing platform with Ory, booking platform in Nuxt + NestJS).

## Capabilities and Constraints

- Pages in scope now: **Work, About, Blog, Contact.**
- **Work** shows an experience timeline. Project case studies are deliberately deferred; the projects section stays out until Orng supplies content.
- Blog already exists (Nuxt server API + markdown rendering) and must keep working.
- Stack: Nuxt 3, Vue 3, Tailwind CSS 3, Pinia, @nuxt/icon. Deployed with Docker Compose via a self-hosted GitHub Actions runner.
- Motion: small only, a short loading screen and page transitions. No scroll-jacking or long scroll-driven sequences.

## Brand Commitments

- Name: Orng Neup. Headline: "Full-stack engineer, skilled with AI".
- Existing mark: "ORNG" wordmark with a lime `#C8F31D` "O".
- Links: GitHub `NeupOrng`, LinkedIn `orng-neup-91ab14230`.

## Evidence on Hand

- Skills evidenced in code: Vue 3, Nuxt 3/4, React, Next.js, TypeScript, Tailwind, NestJS, Node.js, Go, Java/Spring Boot, PostgreSQL, CockroachDB, Drizzle, Valkey, Formance, Temporal, Ory Kratos/Hydra/Keto, OAuth/OIDC, Kong, gRPC, Docker, GitHub Actions.
- Photo: `assets/image/human.png`.
- Experience (employers, titles, dates, descriptions) taken from Orng’s LinkedIn profile in Nov 2026; recorded in `data/site.ts`.
- **Not on hand, never fabricate:** education, testimonials, ratings, client names, availability status, public email. Work done for employers (Atlas, mobile banking) must not be named without Orng's approval.

## Product Principles

1. Show the full path, front to back, rather than listing buzzwords.
2. Every claim traces to real work; placeholders beat invented facts.
3. Fast to read for a recruiter in 30 seconds; deeper for a client who stays.
4. Motion serves orientation (loading, page change), never spectacle.

## Accessibility & Inclusion

Respect `prefers-reduced-motion`; keep text contrast at WCAG AA; full keyboard navigation.
