<template>
  <div class="on-paper">
    <section class="mx-auto max-w-site px-5 pb-24 pt-20 md:px-10 md:pt-28">
      <div class="grid gap-8 lg:grid-cols-12">
        <h1 class="display text-[clamp(3rem,1.6rem+5vw,5.5rem)] lg:col-span-6">Writing</h1>
        <p class="lede text-muted lg:col-span-5 lg:col-start-8 lg:self-end">
          Notes from building things: front-end patterns, back-end decisions, and what I learn along the way.
        </p>
      </div>
      <ul v-if="blogs.length" class="mt-16 border-t border-[var(--on-paper)]">
        <li v-for="blog in blogs" :key="blog.id">
          <BlogRow :blog="blog" />
        </li>
      </ul>
      <p v-else class="mt-16 border-t border-[var(--on-paper)] pt-8 text-muted">No posts yet. The first one is being written.</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { seo } from '~/data/site'

usePageSeo({ title: 'Writing', description: seo.pages.blog })
const blogStore = useBlogStore()
const { blogs } = storeToRefs(blogStore)
await blogStore.fetchBlog()
</script>
