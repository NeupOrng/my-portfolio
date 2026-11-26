<template>
  <article class="on-paper">
    <header class="mx-auto max-w-site px-5 pt-16 md:px-10 md:pt-24">
      <NuxtLink to="/blog" class="caps inline-flex items-center gap-2 text-muted no-underline hover:underline">
        <ArrowIcon class="-rotate-90" /> All writing
      </NuxtLink>
      <h1 class="heading mt-10 max-w-[18ch] text-[clamp(2.5rem,1.5rem+3.6vw,4.75rem)]">{{ currentBlog.title }}</h1>
      <p class="mono mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        <time :datetime="iso">{{ formatted }}</time>
        <span v-if="currentBlog.tags.length">{{ currentBlog.tags.join(' · ') }}</span>
        <span>{{ readMinutes }} min read</span>
      </p>
    </header>
    <figure v-if="currentBlog.cover" class="hud mx-5 mt-12 md:mx-10 xl:mx-auto xl:max-w-[calc(1360px-5rem)]">
      <img :src="currentBlog.cover" alt="" class="block h-auto w-full">
    </figure>
    <div class="mx-auto max-w-site px-5 pb-28 pt-14 md:px-10">
      <div class="prose-article mx-auto" v-html="content" />
    </div>
  </article>
</template>

<script lang="ts" setup>
const blogStore = useBlogStore()
const route = useRoute()
const { currentBlog } = storeToRefs(blogStore)

await blogStore.fetchBlogById(route.params.id.toString())

useHead({ title: () => currentBlog.value.title })

const content = computed(() => currentBlog.value.htmlContent ?? '')
const date = computed(() => new Date(currentBlog.value.createdAt))
const iso = computed(() => date.value.toISOString().slice(0, 10))
const formatted = computed(() =>
  date.value.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
)
const readMinutes = computed(() =>
  Math.max(1, Math.round((currentBlog.value.content ?? '').split(/\s+/).length / 220)),
)
</script>
