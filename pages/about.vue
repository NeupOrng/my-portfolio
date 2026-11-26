<template>
  <div>
    <!-- Who I am -->
    <section class="on-paper">
      <div class="mx-auto grid max-w-site gap-14 px-5 pb-24 pt-20 md:px-10 md:pt-28 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <h1 class="display text-[clamp(3rem,1.6rem+5vw,5.5rem)]">I’m Orng.</h1>
          <div class="lede mt-10 space-y-5">
            <p>I’m a full-stack engineer who leads the back-end team at TrueMoney Cambodia, where I’ve worked on the wallet and agent network since 2023.</p>
            <p class="text-muted">I like the parts of a product most people hand to someone else: the payment that has to settle exactly once, the sign-in flow that has to be safe, the record that has to add up.</p>
          </div>
        </div>

        <dl class="facts lg:col-span-5 lg:col-start-8 lg:self-end" aria-label="At a glance">
          <div v-for="fact in aboutFacts" :key="fact.label" class="fact">
            <dt class="caps text-muted">{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- How I think -->
    <section class="on-paper border-t hairline" aria-labelledby="think">
      <div class="mx-auto grid max-w-site gap-10 px-5 py-24 md:px-10 lg:grid-cols-12">
        <h2 id="think" class="heading text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] lg:col-span-4">How I think</h2>
        <ol class="lg:col-span-7 lg:col-start-6">
          <li v-for="item in principles" :id="item.id" :key="item.id" class="principle">
            <h3 class="principle-title">{{ item.title }}</h3>
            <p class="mt-2 max-w-[56ch] text-muted">{{ item.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- What I work with -->
    <section class="on-paper border-t hairline" aria-labelledby="tools">
      <div class="mx-auto grid max-w-site gap-10 px-5 py-24 md:px-10 lg:grid-cols-12">
        <h2 id="tools" class="heading text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] lg:col-span-4">What I work with</h2>
        <div class="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:col-span-7 lg:col-start-6">
          <div v-for="side in [workingStack.work, workingStack.own]" :key="side.label" class="border-t border-[var(--on-paper)] pt-5">
            <h3 class="caps">{{ side.label }}</h3>
            <p class="mt-2 text-sm text-muted">{{ side.note }}</p>
            <ul class="mt-6 space-y-1">
              <li v-for="tool in side.items" :key="tool" class="tool">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What I value, and the close -->
    <section class="on-ink" aria-labelledby="values">
      <div class="mx-auto max-w-site px-5 py-24 md:px-10 md:py-28">
        <div class="grid gap-10 lg:grid-cols-12">
          <h2 id="values" class="heading text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] lg:col-span-4">What I value</h2>
          <dl class="lg:col-span-7 lg:col-start-6">
            <div v-for="value in values" :key="value.title" class="value">
              <dt class="text-lg font-medium">{{ value.title }}</dt>
              <dd class="text-muted">{{ value.body }}</dd>
            </div>
          </dl>
        </div>

        <div class="mt-24 border-t hairline pt-14">
          <p class="display text-[clamp(2.5rem,1.4rem+4.4vw,4.75rem)]">Let’s build<br>something solid.</p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn btn-signal">Get in touch <ArrowIcon class="btn-arrow" /></NuxtLink>
            <a :href="links.github.href" target="_blank" rel="noopener" class="btn btn-line">GitHub <ArrowIcon class="btn-arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { aboutFacts, links, principles, values, workingStack } from '~/data/site'
useHead({ title: 'About' })
</script>

<style scoped>
.facts { border-top: 1px solid var(--on-paper); }
.fact {
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  align-items: baseline;
  gap: 1rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line-paper);
}
.principle {
  padding: 1.75rem 0;
  border-top: 1px solid var(--line-paper);
  scroll-margin-top: 6rem;
}
.principle:first-child { border-top-color: var(--on-paper); }
.principle-title {
  font-size: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  font-weight: 450;
  letter-spacing: -0.015em;
  line-height: 1.25;
}
.tool {
  font-size: clamp(1.375rem, 1.1rem + 1vw, 1.875rem);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 1.3;
}
.value {
  display: grid;
  gap: 0.5rem 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--line-ink);
}
.value:first-child { border-top-color: var(--signal); }
@media (min-width: 640px) {
  .value { grid-template-columns: 13rem 1fr; }
}
</style>
