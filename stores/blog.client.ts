import { marked } from "marked";
import type { IBlog } from "~/models";

// Plain objects only: Pinia state is serialized from server to client.
export type BlogPost = IBlog & { htmlContent: string; excerpt: string };

// The page renders the title as its own <h1>, so drop the markdown's leading "# Title".
const stripTitle = (md: string) => md.replace(/^\s*#\s+[^\n]*\n/, '');

// First paragraph as plain text, trimmed to about 155 characters for search snippets.
const toExcerpt = (md: string) => {
    const para = md.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !/^[#|`>-]/.test(p)) ?? '';
    const text = para.replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ');
    return text.length > 155 ? text.slice(0, 152).replace(/\s+\S*$/, '') + '…' : text;
};

const emptyPost = (): BlogPost => ({
    id: '',
    title: '',
    cover: '',
    createdAt: new Date(0).toISOString() as unknown as Date,
    tags: [],
    content: '',
    htmlContent: '',
    excerpt: '',
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
            const body = stripTitle(post.content ?? '');
            this.currentBlog = { ...post, htmlContent: await marked(body), excerpt: toExcerpt(body) };
        }
    },
})
