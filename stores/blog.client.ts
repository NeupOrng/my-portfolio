import { Blog, type IBlog } from "~/models";

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: [] as Blog[],
        currentBlog: new Blog(),
    }),
    actions: {
        async fetchBlog() {
            const themeStore = useThemeStore();
            await themeStore.onLoading(this.promiseFetchBlog)
        },
        async promiseFetchBlog() {
            this.blogs = [];
            const response = await $fetch('/api/blog');
            const blogsResponse = response.data;
            for (const blog of blogsResponse) {
                const newBlog = new Blog().fromJson(blog);
                this.blogs.push(newBlog);
            }
        },
        async fetchBlogById(id: string) {
            const themeStore = useThemeStore();
            await themeStore.onLoading(async () => {
                const response = await $fetch(`/api/blog/${id}`)
                this.currentBlog =  new Blog().fromJson(response.data);
                await this.currentBlog.generateHtmlContent();
            })
        }
    },
    getters: {
    }
})