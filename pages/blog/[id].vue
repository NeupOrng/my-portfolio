<template>
    <div class="w-full pt-20">
        <section class="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            {{ currentBlog }}
        </section>
    </div>
</template>
<script lang="ts" setup>
const blogStore = useBlogStore();
const route = useRoute();
const { currentBlog } = storeToRefs(blogStore)

console.log(route.params.id);

await blogStore.fetchBlogById(route.params.id.toString());
</script>