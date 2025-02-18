<template>
    <div class="w-full pt-20">
        <section class="w-full max-w-[1440px] mx-auto flex flex-col">
            <div class="font-bold text-2xl w-full">
                <h1 class="mx-auto w-fit px-4">My Blogs</h1>
            </div>
            <div class="w-full grid grid-cols-4 px-5">
                <div class="background-secondary p-4 rounded-xl" v-for="(blog, index) in blogs" :key="index">
                    {{ blog.title }}
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
const blogStore = useBlogStore();
const { blogs } = storeToRefs(blogStore)

await blogStore.fetchBlog();
</script>