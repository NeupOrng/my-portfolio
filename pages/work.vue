<template>
  <div class="on-paper">
    <section class="mx-auto max-w-site px-5 pb-24 pt-20 md:px-10 md:pt-28">
      <div class="grid gap-8 lg:grid-cols-12">
        <h1 class="display text-[clamp(3rem,1.6rem+5vw,5.5rem)] lg:col-span-6">Experience</h1>
        <p class="lede text-muted lg:col-span-5 lg:col-start-8 lg:self-end">
          Payments, wallets and platforms in Cambodia, from front end to back end. Case studies of individual projects are on the way.
        </p>
      </div>

      <div v-for="group in groups" :key="group.label" class="mt-16">
        <h2 v-if="group.heading" class="caps text-muted mb-6">{{ group.label }}</h2>
        <ol class="border-t border-[var(--on-paper)]" :aria-label="group.label">
          <li v-for="(item, i) in group.items" :key="i" class="role" :class="{ pending: item.pending }">
            <p class="mono text-sm text-muted">{{ item.period }}</p>
            <div>
              <h3 class="role-title">
                {{ item.role }}
                <span v-if="item.pending" class="mono ml-2 align-middle text-xs tracking-normal">[pending]</span>
              </h3>
              <p class="mt-1 text-muted">{{ item.org }}</p>
            </div>
            <div>
              <p class="max-w-[46ch]">{{ item.summary }}</p>
              <ul v-if="item.highlights?.length" class="mt-4 max-w-[46ch] space-y-2 text-muted">
                <li v-for="point in item.highlights" :key="point" class="highlight">{{ point }}</li>
              </ul>
              <ul v-if="item.stack.length" class="mono mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      <div class="mt-16 flex flex-wrap items-center justify-between gap-6">
        <p class="text-muted">Want the full history?</p>
        <a :href="links.linkedin.href" target="_blank" rel="noopener" class="btn btn-line">View on LinkedIn <ArrowIcon class="btn-arrow" /></a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { community, experience, links } from '~/data/site'

const groups = [
  { label: 'Employment', heading: false, items: experience },
  { label: 'Community', heading: true, items: community },
]
useHead({ title: 'Experience' })
</script>

<style scoped>
.role {
  display: grid;
  gap: 0.75rem 2.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line-paper);
}
@media (min-width: 900px) {
  .role { grid-template-columns: 10rem 1fr 1fr; }
}
.role-title {
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.15;
}
.role.pending { color: var(--on-paper-muted); }
.highlight {
  position: relative;
  padding-left: 1.1rem;
}
.highlight::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  border: 1px solid var(--on-paper);
}
</style>
