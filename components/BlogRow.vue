<template>
  <NuxtLink :to="`/blog/${blog.id}`" class="blog-row group">
    <time class="mono text-sm text-muted" :datetime="iso">{{ formatted }}</time>
    <span class="blog-title">{{ blog.title }}</span>
    <span class="mono hidden text-xs text-muted md:block">{{ blog.tags.join(' · ') }}</span>
    <ArrowIcon class="blog-arrow" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IBlog } from '~/models'

const props = defineProps<{ blog: IBlog }>()
const date = computed(() => new Date(props.blog.createdAt))
const iso = computed(() => date.value.toISOString().slice(0, 10))
const formatted = computed(() =>
  date.value.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
)
</script>

<style scoped>
.blog-row {
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--line-paper);
  text-decoration: none;
  color: inherit;
}
@media (min-width: 768px) {
  .blog-row { grid-template-columns: 9rem 1fr 12rem auto; }
}
@media (max-width: 560px) {
  .blog-row { grid-template-columns: 1fr auto; }
  .blog-row time { grid-column: 1 / -1; }
}
.blog-title {
  font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-wrap: balance;
}
.blog-row:hover .blog-title { text-decoration: underline; text-decoration-thickness: 1px; }
.blog-arrow { transition: transform 220ms var(--ease-out); }
.blog-row:hover .blog-arrow { transform: translate(3px, -3px); }
</style>
