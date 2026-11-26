// Markdown body of the post. Backticks are escaped because this is a template literal.
const claudeTeamContent = `
# Claude as a team: how I lead an AI engineering crew

The most useful way I've found to work with Claude isn't to treat it as autocomplete. It's to treat it as a team I lead. A team needs a brief, shared context, a plan someone signs off, a reviewer who didn't write the code, and a lead who makes the final call. Give Claude those things and it stops producing plausible code and starts producing work you can ship.

This site is the example I'll use throughout. I built it with Claude Code: the research, the content plan, the design, the contact form that lands in my Telegram, and the reviews along the way.

## The roles

When I start a piece of work I think in roles, not prompts:

| Role | Who | What they own |
|---|---|---|
| Lead | Me | The goal, the architecture, the facts, the final call |
| Researcher | Claude | Reading the codebase, docs and the web, then reporting back |
| Engineer | Claude | Writing the code, tests and migrations |
| Reviewer | A separate Claude agent | Checking the result against the brief |

These aren't four agents running at all times. They're responsibilities I keep separate on purpose. On a small task one Claude session covers research and engineering; on a larger one, research and review go to sub-agents. The lead role is the one that never gets delegated.

## Context before code

A new engineer reads the docs before touching anything. Claude should too. Every repo I work in carries written context that Claude reads at the start of each session, and each kind of knowledge gets its own home:

\`\`\`
my-portfolio/
├── CLAUDE.md    # how to run it, where things live, rules that never break
├── PRODUCT.md   # who it's for, what it may and may not claim
└── DESIGN.md    # colours, type, spacing, what the interface must look like
\`\`\`

The point isn't one giant instruction file. Engineering rules, product decisions and design constraints change for different reasons, so keeping them apart lets the agent pull the right one without mixing them up.

The rules section does the most work. This site's CLAUDE.md includes:

\`\`\`md
## Content rules

- Never invent facts: employers, titles, dates, years of experience,
  testimonials, client names, availability or email.
- If something is unknown, leave a clearly marked placeholder.
\`\`\`

That one rule changed how the project went. When Claude rewrote my experience page and didn't know my team size, it asked me instead of guessing a number that sounded good.

## Brief it like a person

A vague prompt gets a vague result. I brief Claude the way I'd brief a developer on my team: the goal, the constraints, and how we'll both know it's done. This is close to the brief I gave for this site's About page:

\`\`\`
Task: Improve the About page.

Goal:
  Show how I think as an engineer, beyond the jobs and stack
  already on the Work page.

Constraints:
  - Keep the existing visual identity. Refine, don't replace.
  - Don't repeat the Work page.
  - Separate professional experience from personal projects.
  - Don't invent anything.

Done when:
  - Desktop, tablet and mobile are checked.
  - The production build passes.
  - Every link works, and no unrelated page changed.
\`\`\`

Every line there prevents a mistake AI tools make by default: redesigning what you asked them to polish, padding a page with claims, or calling it finished without looking.

## Plan, approve, then build

How much I supervise depends on the risk, not on habit:

- **Small, isolated changes**, like fixing a label or a broken link: Claude just does it and shows the evidence.
- **Medium tasks**: Claude reads the code first and proposes an approach in a few lines before writing it.
- **Large or architectural work**: a full plan, my explicit approval, then the build, then a review.

For the About page that meant: inspect, list what's weak, propose, and stop. Reading a plan takes two minutes; untangling a confident implementation of the wrong idea takes an afternoon. The plan is also where the decisions that are mine to make show up, like which facts go on a page.

## Split the work, separate the reviewer

Claude can hand work to sub-agents, and I use that the way I'd split work across a team:

- **Parallel research.** Several agents read different sources at once and each sends back a summary, so the main session doesn't drown in raw pages.
- **A separate reviewer.** After a build, another agent checks the result against the brief: does it meet the requirements, follow the design rules, avoid regressions? Because it starts with its own context and didn't write the change, it comes with fewer assumptions about how it was built. That doesn't make it right, but it's one more chance to catch a problem. On this site, a review caught a heading label the design system bans and a button with the wrong wording.

Delegation isn't free, though. Every agent needs context, and every result needs reading. I only split work when the pieces can genuinely progress on their own. Otherwise one session is faster.

## Verify with evidence, not confidence

"Done" from an AI means nothing until it's backed by evidence, and different checks prove different things. A production build proves the code compiles, not that the page works. Type checks and tests prove what they cover and nothing more. Only using the feature proves the feature.

So my definition of done names the evidence: the build passes, the page has been looked at in screenshots at real screen sizes, and the feature has been exercised for real. For the contact form, Claude submitted a test request and confirmed it arrived in Telegram before calling it finished. Anything it couldn't check gets reported as unchecked, not glossed over.

## When Claude gets it wrong

It does, regularly. The useful part is noticing early and correcting the right thing.

The first version of this site's blog kept class instances in its data store. The code looked finished, and it crashed server rendering with a 500 the moment a page loaded. The fix itself was small. The lesson went into CLAUDE.md as a rule, keep store state as plain objects, so the same mistake doesn't come back in the next session.

That's my usual loop when something goes wrong:

- **Stop** instead of letting it keep patching around the problem.
- **Find what was missing**: usually an assumption, not a typo.
- **Fix the brief or the context**, not just the code, so it holds next time.
- **Redirect** with the corrected brief, and verify again.

## Where I stay in the loop

Some things never leave my hands:

- **Architecture and trade-offs.** Claude proposes; I decide.
- **Facts.** Anything stated about me, my employer or a user is mine to confirm.
- **Secrets.** Tokens and keys go in \`.env\` files I fill in myself. They never go into a chat.
- **Anything irreversible.** Commits, deploys, deleting data and sending messages wait for my explicit yes.

## What changes for the lead

Working this way doesn't make my job smaller; it moves it.

Without AI, a lead's week goes to breaking work down, assigning it, implementing a share of it, reviewing it and delivering it. With an AI team, the weight shifts: define the goal, provide the context, delegate, review the decisions, verify the outcome. Less of my time goes into typing scaffolding, tests and refactors. More goes into the parts that decide whether the work is good.

That's the same shift as becoming a lead on a human team, and it needs the same skills: be clear about the goal, write things down, review honestly, and own the result. The lead isn't less important. The job moves from implementation volume to judgement and quality.

Claude does the volume. The judgement, and the accountability, stay with me.
`

export default claudeTeamContent
