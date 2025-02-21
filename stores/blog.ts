import { Blog, type IBlog } from "~/models";

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: [] as IBlog[],
        currentBlog: {},
    }),
    actions: {
        async fetchBlog() {
            const themeStore = useThemeStore();
            await themeStore.onLoading(this.promiseFetchBlog)
        },
        async promiseFetchBlog() {
            this.blogs = [];
            const response = await $fetch('/api/blog');
            this.blogs = response.data;
        },
        async fetchBlogById(id: string) {
            const themeStore = useThemeStore();
            await themeStore.onLoading(async () => {
                const response = await $fetch(`/api/blog/${id}`)
                this.currentBlog =  new Blog(response.data as IBlog);
                await this.currentBlog.generateHtmlContent();
                console.log(this.currentBlog);
            })
        }
    },
    getters: {
    }
})