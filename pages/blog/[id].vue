<template>
    <div class="w-full pt-20">
        <section class="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            <Markdown>
                <div v-html="content"></div>
            </Markdown>
        </section>
    </div>
</template>
<script lang="ts" setup>
const blogStore = useBlogStore();
const route = useRoute();
const { currentBlog } = storeToRefs(blogStore)

await blogStore.fetchBlogById(route.params.id.toString());
const content = computed(() => currentBlog.value.htmlContent ?? '');
</script>