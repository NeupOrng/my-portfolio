<template>
  <div>
    <!-- First viewport: who, what, and the trace that proves it -->
    <section class="on-ink">
      <div class="mx-auto grid max-w-site gap-12 px-5 pb-20 pt-16 md:px-10 lg:min-h-[calc(100svh-4rem-var(--statusbar-h))] lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
        <div class="lg:col-span-7">
          <h1 class="display text-[clamp(3.25rem,1.6rem+6.4vw,6rem)]">
            Front end<br>to ledger.
          </h1>
          <p class="lede mt-8 text-muted">{{ profile.intro }}</p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn btn-signal">Get in touch <ArrowIcon class="btn-arrow" /></NuxtLink>
            <NuxtLink to="/work" class="btn btn-line">See my work</NuxtLink>
          </div>
        </div>

        <figure class="hud lg:col-span-5" aria-labelledby="trace-caption">
          <div class="mono flex items-center justify-between border-b hairline px-5 py-3 text-xs">
            <span>POST /orders</span>
            <span class="text-muted">trace</span>
          </div>
          <ol class="trace">
            <li v-for="(hop, i) in trace" :key="hop.hop" class="trace-row">
              <span class="trace-node" aria-hidden="true" />
              <span class="trace-hop">{{ hop.hop }}</span>
              <span class="mono trace-stack text-muted">{{ hop.stack }}</span>
              <span class="mono trace-ms text-muted">{{ hop.ms }}ms</span>
              <span v-if="i < trace.length - 1" class="trace-link" aria-hidden="true" />
            </li>
          </ol>
          <div class="settled mono">
            <span>201 · settled</span>
            <span>{{ totalMs }}ms</span>
          </div>
          <figcaption id="trace-caption" class="mono px-5 py-3 text-[0.6875rem] text-muted">
            One request through the stack I build. Timings are illustrative.
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Both ends of the stack -->
    <section class="on-paper">
      <div class="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
        <div class="grid gap-8 lg:grid-cols-12">
          <h2 class="heading text-[clamp(2.5rem,1.6rem+3.4vw,4.5rem)] lg:col-span-7">Both ends of the stack, one pair of hands.</h2>
          <p class="lede text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
            No handoff between the screen and the system behind it. The interface and the service that serves it are designed together, so neither side gets surprised.
          </p>
        </div>

        <div class="mt-16 grid border-t hairline md:grid-cols-2">
          <div class="border-b hairline py-8 md:border-b-0 md:border-r md:pr-10">
            <h3 class="caps text-muted">Front end</h3>
            <ul class="mt-6 space-y-1">
              <li v-for="item in stack.front" :key="item" class="stack-item">{{ item }}</li>
            </ul>
          </div>
          <div class="py-8 md:pl-10 md:text-right">
            <h3 class="caps text-muted">Back end</h3>
            <ul class="mt-6 space-y-1">
              <li v-for="item in stack.back" :key="item" class="stack-item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Working with AI -->
    <section class="on-paper border-t hairline">
      <div class="mx-auto grid max-w-site gap-8 px-5 py-24 md:px-10 lg:grid-cols-12">
        <h2 class="heading text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] lg:col-span-5">Built with AI, owned by me.</h2>
        <div class="lg:col-span-6 lg:col-start-7">
          <p class="lede">Coding agents take the volume: scaffolding, tests, migrations, refactors. I keep the architecture, the review and the final call, and every repo carries the written context that keeps both of us honest.</p>
          <NuxtLink to="/about#ai" class="caps mt-8 inline-flex items-center gap-2 no-underline hover:underline">How I work with AI <ArrowIcon /></NuxtLink>
        </div>
      </div>
    </section>

    <!-- Writing -->
    <section v-if="latest.length" class="on-paper border-t hairline">
      <div class="mx-auto max-w-site px-5 py-24 md:px-10">
        <div class="flex items-end justify-between gap-6">
          <h2 class="heading text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)]">Writing</h2>
          <NuxtLink to="/blog" class="caps inline-flex items-center gap-2 pb-2 no-underline hover:underline">All posts <ArrowIcon /></NuxtLink>
        </div>
        <ul class="mt-10 border-t hairline">
          <li v-for="post in latest" :key="post.id">
            <BlogRow :blog="post" />
          </li>
        </ul>
      </div>
    </section>

    <!-- Close -->
    <section class="on-ink">
      <div class="mx-auto max-w-site px-5 py-28 md:px-10 md:py-36">
        <h2 class="display text-[clamp(2.75rem,1.4rem+5vw,5.5rem)]">Have something<br>to build?</h2>
        <div class="mt-12 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="btn btn-signal">Start a conversation <ArrowIcon class="btn-arrow" /></NuxtLink>
          <a :href="links.linkedin.href" target="_blank" rel="noopener" class="btn btn-line">LinkedIn <ArrowIcon class="btn-arrow" /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { links, profile, stack, trace } from '~/data/site'

useHead({ title: '' })

const totalMs = trace.reduce((sum, hop) => sum + hop.ms, 0)

const blogStore = useBlogStore()
const { blogs } = storeToRefs(blogStore)
await blogStore.fetchBlog()
const latest = computed(() => blogs.value.slice(0, 3))
</script>

<style scoped>
.trace {
  padding: 0.75rem 1.25rem;
}
.trace-row {
  position: relative;
  display: grid;
  grid-template-columns: 0.75rem 6.5rem 1fr auto;
  align-items: baseline;
  column-gap: 0.75rem;
  padding: 0.7rem 0;
}
.trace-node {
  width: 7px;
  height: 7px;
  border: 1px solid var(--on-ink);
  align-self: center;
}
.trace-link {
  position: absolute;
  left: 3px;
  top: calc(50% + 6px);
  height: calc(100% - 10px);
  width: 1px;
  background: var(--line-ink);
}
.trace-hop { font-weight: 500; }
.trace-stack { font-size: 0.8125rem; overflow-wrap: anywhere; }
.trace-ms { font-size: 0.75rem; }
.settled {
  display: flex;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background: var(--signal);
  color: var(--ink);
  font-size: 0.8125rem;
  font-weight: 500;
}
.stack-item {
  font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.5rem);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.25;
}
@media (max-width: 420px) {
  .trace-row { grid-template-columns: 0.75rem 1fr auto; }
  .trace-stack { grid-column: 2 / 4; grid-row: 2; }
}
</style>
