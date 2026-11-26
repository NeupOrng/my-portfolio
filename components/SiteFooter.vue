<template>
  <footer class="on-ink border-t hairline">
    <div class="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
      <div class="md:col-span-5">
        <Wordmark />
        <p class="mt-4 max-w-xs text-muted">{{ profile.headline }}.</p>
      </div>
      <nav class="md:col-span-3" aria-label="Footer">
        <ul class="space-y-2">
          <li v-for="item in nav" :key="item.to">
            <NuxtLink :to="item.to" class="footer-link">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="space-y-2 md:col-span-4">
        <li v-for="link in [links.telegram, links.whatsapp, links.linkedin, links.github]" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener" class="footer-link inline-flex items-center gap-2">
            {{ link.label }} <ArrowIcon class="text-sm text-muted" />
          </a>
        </li>
      </ul>
      <p class="text-sm text-muted md:col-span-12">© {{ year }} Orng Neup. Designed and built by the same hands.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { links, nav, profile } from '~/data/site'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer-link {
  color: var(--on-ink);
  text-decoration: none;
  font-size: 1.0625rem;
}
.footer-link:hover { text-decoration: underline; }
</style>
