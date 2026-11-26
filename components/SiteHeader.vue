<template>
  <header class="on-ink sticky top-0 z-40 border-b hairline">
    <div class="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 md:px-10">
      <NuxtLink to="/" class="no-underline" aria-label="Orng Neup, home">
        <Wordmark />
      </NuxtLink>
      <nav aria-label="Primary">
        <ul class="flex items-center gap-4 sm:gap-8">
          <li v-for="item in nav" :key="item.to">
            <NuxtLink :to="item.to" class="nav-link caps">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { nav } from '~/data/site'
</script>

<style scoped>
.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0;
  color: var(--on-ink-muted);
  text-decoration: none;
  transition: color 200ms var(--ease-out);
}
.nav-link:hover { color: var(--on-ink); }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.15rem;
  height: 2px;
  background: var(--signal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 320ms var(--ease-out);
}
.nav-link.router-link-active { color: var(--on-ink); }
.nav-link.router-link-active::after { transform: scaleX(1); }
@media (max-width: 380px) {
  .nav-link { font-size: 0.6875rem; letter-spacing: 0.1em; }
}
</style>
