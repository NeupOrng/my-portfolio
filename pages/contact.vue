<template>
  <div class="on-ink">
    <section class="mx-auto max-w-site px-5 pb-28 pt-20 md:px-10 md:pt-28">
      <h1 class="display text-[clamp(3rem,1.4rem+5.6vw,6rem)]">Send a request.</h1>
      <p class="lede mt-8 text-muted">
        Hiring for a full-stack role, or need a product built end to end? Tell me about it below and it lands straight in my Telegram.
      </p>

      <div class="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-10">
        <ContactForm class="lg:col-span-7" />

        <div class="lg:col-span-4 lg:col-start-9">
          <h2 class="caps text-muted">Or message me directly</h2>
          <ul class="mt-6 border-t hairline">
            <li v-for="channel in channels" :key="channel.href">
              <a :href="channel.href" target="_blank" rel="noopener" class="channel">
                <span class="channel-name">{{ channel.label }}</span>
                <span class="mono whitespace-nowrap text-sm text-muted">{{ channel.handle }}</span>
                <ArrowIcon class="channel-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { links } from '~/data/site'
useHead({ title: 'Contact' })
const channels = [links.telegram, links.whatsapp, links.linkedin, links.github]
</script>

<style scoped>
.channel {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--line-ink);
  color: inherit;
  text-decoration: none;
}
.channel-name {
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1;
  transition: color 220ms var(--ease-out);
}
.channel:hover .channel-name { color: var(--signal); }
.channel-arrow { font-size: 1.25rem; transition: transform 220ms var(--ease-out); }
.channel:hover .channel-arrow { transform: translate(3px, -3px); color: var(--signal); }
</style>
