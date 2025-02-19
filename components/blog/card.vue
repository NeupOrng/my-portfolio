<template>
    <div class="blog-card background-secondary overflow-hidden rounded-xl h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] flex flex-col">
        <div class="block w-full overflow-hidden h-[10rem] md:h-[12rem]">
            <img class="object-fit card-cover" :src="computedBlog.cover" />
        </div>
        <div class="py-2 px-4">
            <h1 class="font-bold text-lg">
                {{ computedBlog.title }}
            </h1>
            <p class="py-2 text-[16px] font-light">
                {{ computedBlog.descriptionForCard }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Blog } from '~/models'
const props = defineProps<{
    blog: Blog
}>()

const computedBlog = computed(() => {
    return new Blog(props.blog)
})
</script>
<style scoped>
.blog-card:hover {
    transform: translateY(-5px) scale(101%);
    box-shadow: 0 0 0.8rem var(--ui-secondary-button-background-color);
}
</style> 