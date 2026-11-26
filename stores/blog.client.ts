import { marked } from "marked";
import type { IBlog } from "~/models";

// Plain objects only: Pinia state is serialized from server to client.
export type BlogPost = IBlog & { htmlContent: string };

const emptyPost = (): BlogPost => ({
    id: '',
    title: '',
    cover: '',
    createdAt: new Date(0).toISOString() as unknown as Date,
    tags: [],
    content: '',
    htmlContent: '',
});

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: [] as IBlog[],
        currentBlog: emptyPost(),
    }),
    actions: {
        async fetchBlog() {
            const response = await $fetch('/api/blog');
            this.blogs = response.data as unknown as IBlog[];
        },
        async fetchBlogById(id: string) {
            const response = await $fetch(`/api/blog/${id}`);
            if (!response.data) {
                throw createError({ statusCode: 404, statusMessage: 'Post not found' });
            }
            const post = response.data as unknown as IBlog;
            this.currentBlog = { ...post, htmlContent: await marked(post.content ?? '') };
        }
    },
})
