// Single source for the portfolio's content. Edit facts here, not in pages.

export const profile = {
  name: 'Orng Neup',
  headline: 'Full-stack engineer, skilled with AI',
  intro:
    'I’m Orng Neup, a full-stack engineer skilled with AI. I build the whole path of a product: the Vue and React interfaces people touch, and the services underneath that move money, check identity and keep records straight.',
  photo: null as string | null, // add a portrait later, e.g. "/image/portrait.jpg"
}

export const links = {
  github: { label: 'GitHub', handle: 'NeupOrng', href: 'https://github.com/NeupOrng' },
  linkedin: {
    label: 'LinkedIn',
    handle: 'orng-neup',
    href: 'https://www.linkedin.com/in/orng-neup-91ab14230/',
  },
  telegram: { label: 'Telegram', handle: '@orng_neup', href: 'https://t.me/orng_neup' },
  whatsapp: { label: 'WhatsApp', handle: '+855 88 255 0515', href: 'https://wa.me/855882550515' },
}

// Search and share metadata, one description per page (about 150 characters).
export const seo = {
  siteName: 'Orng Neup',
  defaultTitle: 'Orng Neup · Full-stack engineer, skilled with AI',
  shareImage: '/brand/orng-wordmark-on-dark-bg.png',
  pages: {
    home: 'Orng Neup is a full-stack engineer leading back-end work in Cambodian fintech: Vue and React front ends, payment services, and building with AI.',
    work: 'Experience of Orng Neup: Lead Software Developer at TrueMoney Cambodia, back-end and front-end roles at Techbodia, and community work with Khmer Coders.',
    about: 'How Orng Neup works: engineering principles, the stack at work and in personal projects, and building with AI coding agents without giving up judgement.',
    contact: 'Send Orng Neup a request for a full-stack role or a product build. It goes straight to Telegram; WhatsApp, LinkedIn and GitHub work too.',
    blog: 'Writing by Orng Neup on front-end patterns, back-end decisions, payments and working with AI as an engineering lead.',
  },
}

export const nav = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

// The home page trace: one request, front end to ledger. Every stack name is
// one Orng has shipped with; the timings are illustrative and labelled as such.
export const trace = [
  { hop: 'Client', stack: 'Nuxt · Vue · React', ms: 18 },
  { hop: 'Gateway', stack: 'Kong', ms: 3 },
  { hop: 'Identity', stack: 'Ory Kratos · Hydra', ms: 9 },
  { hop: 'Service', stack: 'NestJS · Go · Spring Boot', ms: 14 },
  { hop: 'Workflow', stack: 'Temporal saga', ms: 22 },
  { hop: 'Ledger', stack: 'Formance · PostgreSQL', ms: 7 },
]

export const stack = {
  front: [
    'Vue 3 and Nuxt',
    'React and Next.js',
    'TypeScript',
    'Tailwind and shadcn',
    'Pinia, Zod, vee-validate',
  ],
  back: [
    'NestJS and Node.js',
    'Go',
    'Java and Spring Boot',
    'PostgreSQL and CockroachDB',
    'Temporal and Formance',
  ],
}

export const stackGroups = [
  { group: 'Frontend', items: 'Vue 3, Nuxt 3/4, React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Pinia, vee-validate, Zod, PWA' },
  { group: 'Backend', items: 'NestJS, Node.js, Go, Java, Spring Boot, Python (FastAPI), REST, gRPC, OpenAPI' },
  { group: 'Data', items: 'PostgreSQL, CockroachDB, Drizzle ORM, Liquibase, goose, Valkey' },
  { group: 'Payments', items: 'Formance Ledger, Temporal, double-entry accounting, saga compensation, maker-checker' },
  { group: 'Identity', items: 'Ory Kratos, Hydra, Keto, OAuth 2 / OIDC, JWT, Kong' },
  { group: 'Delivery', items: 'Docker, Docker Compose, GitHub Actions, Taskfile' },
]

// About page. Facts come from LinkedIn and Orng's own answers; the
// principles are Orng's stated philosophy, kept in plain words.
export const aboutFacts = [
  { label: 'Role', value: 'Lead Software Developer' },
  { label: 'Company', value: 'TrueMoney Cambodia' },
  { label: 'Fintech', value: 'Since 2023' },
  { label: 'Focus', value: 'Back end, payments' },
  { label: 'Community', value: 'Khmer Coders' },
  { label: 'Based in', value: 'Cambodia' },
]

export const principles = [
  {
    id: 'problem',
    title: 'Understand the problem before the solution.',
    body: 'The first question is what has to be true when this ships, not which framework to reach for.',
  },
  {
    id: 'architecture',
    title: 'Decide the architecture on purpose.',
    body: 'In payments a shortcut becomes someone else’s incident. I pick the reliable option and write down why, so the next person can maintain it.',
  },
  {
    id: 'ownership',
    title: 'Own the outcome, not just the code.',
    body: 'Shipping isn’t the finish line. The work is done when it runs well in production and nobody is paged for it.',
  },
  {
    id: 'review',
    title: 'Review to raise the team.',
    body: 'A good review explains the why, so the next pull request doesn’t need the same comment.',
  },
  {
    id: 'ai',
    title: 'Move fast with AI, keep the judgement human.',
    body: 'I work best in fast-moving teams that ship often. Coding agents take the volume: scaffolding, tests, migrations, refactors. Every repo carries written context so they start from the same truth I do, and the design, the review and the accountability stay with me.',
  },
]

export const workingStack = {
  work: {
    label: 'At work',
    note: 'Production fintech at TrueMoney.',
    items: ['Java', 'Spring Boot', 'Microservices', 'RabbitMQ'],
  },
  own: {
    label: 'On my own',
    note: 'Personal projects and exploration.',
    items: ['NestJS', 'Go', 'Vue and Nuxt', 'React and Next.js', 'PostgreSQL', 'Temporal', 'Formance'],
  },
}

export const values = [
  { title: 'Engineering quality', body: 'Systems that are reliable, well structured and still easy to change a year later.' },
  { title: 'Ownership', body: 'Responsibility past the merge: for how it runs, how it fails and what it means for the people using it.' },
  { title: 'Continuous growth', body: 'Always learning, experimenting and improving how software gets designed and delivered.' },
]

// Experience timeline, from Orng's LinkedIn profile (Nov 2026). Newest first.
// Stack tags are the skills LinkedIn lists for each role.
export type Role = {
  period: string
  role: string
  org: string
  summary: string
  highlights?: string[]
  stack: string[]
  pending?: boolean
}

// Bullets are action-led with no pronoun: present tense for current roles,
// past tense for finished ones. Stack tags skip baseline items (JWT, CI/CD).
export const experience: Role[] = [
  {
    period: 'Aug 2026 — now',
    role: 'Lead Software Developer',
    org: 'TrueMoney Cambodia',
    summary: 'Promoted from Senior Back End Developer to lead TrueMoney Cambodia’s back-end team.',
    highlights: [
      'Make the system design decisions for the team’s back-end services.',
      'Review the team’s code and mentor its back-end developers.',
      'Own the back-end support flow for TrueMoney’s daily operations.',
      'Contribute back-end work to TrueMoney’s new innovation products.',
    ],
    stack: ['Java', 'Spring Boot'],
  },
  {
    period: 'Jul 2023 — Jul 2026',
    role: 'Senior Back End Developer',
    org: 'TrueMoney Cambodia',
    summary: 'Back-end services for TrueMoney’s wallet and nationwide agent network.',
    highlights: [
      'Built Bankhub: TrueMoney’s 10,000+ agents process cash-in and cash-out for partner banks and wallets, so bank customers deposit or withdraw at an agent instead of a branch.',
      'Since April 2025, Bankhub covers every Bakong-linked bank: customers scan KHQR in their own banking app and cash out at any TrueMoney agent.',
      'Built O2O (Offline to Online): people without a TrueMoney wallet transact at agents for an instant win, and wallet customers earn lucky-draw tickets.',
      'Served as the final tier of technical support for TrueMoney’s daily operations.',
    ],
    stack: ['Java', 'Spring Boot', 'Microservices', 'RabbitMQ', 'KHQR'],
  },
  {
    period: 'Dec 2022 — May 2023',
    role: 'Junior Back End Developer',
    org: 'Techbodia',
    summary: 'Back end of a platform with millions of users.',
    highlights: [
      'Integrated third-party provider services, including payments, into the platform.',
      'Maintained the platform and shipped new features for its existing users.',
    ],
    stack: ['C#', '.NET Core', 'SQL Server'],
  },
  {
    period: 'Mar 2022 — Dec 2022',
    role: 'Junior Front End Developer',
    org: 'Techbodia',
    summary: 'Front end for a large client project from Taiwan.',
    highlights: [
      'Built web application features in Vue.js and TypeScript.',
      'Wrote unit and component tests for existing code.',
      'Took part in code review across the team.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Jest'],
  },
]

// Community work, shown below the employment history on the Work page.
export const community: Role[] = [
  {
    period: 'Nov 2024 — now',
    role: 'Event Coordinator',
    org: 'Khmer Coders Community',
    summary: 'Event coordinator and moderator for Khmer Coders, a developer community in Cambodia.',
    highlights: [
      'Co-hosted Khmer Coders Gathering v6 with its Vibe Coding & AI Agent Seminar, a community day at Connexion, Koh Pich, Phnom Penh.',
      'Help run the community’s events in Phnom Penh, after starting as guest support at Khmer Coders Party V4.',
    ],
    stack: [],
  },
]
