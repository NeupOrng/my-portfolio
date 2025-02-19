<template>
    <div class="w-full pt-20">
        <section class="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            <div class="w-fit gap-5 grid grid-cols-1 md:grid-cols-4 px-5 pt-5">
                <BlogCard
                    v-for="(blog, index) in blogs" 
                    :key="index"
                    :blog="blog"
                />
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
const blogStore = useBlogStore();
const { blogs } = storeToRefs(blogStore)

await blogStore.fetchBlog();
</script>