import { Blog, type IBlog } from "~/models";

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: []
    }),
    actions: {
        async fetchBlog() {
            const themeStore = useThemeStore();
            await themeStore.onLoading(this.promiseFetchBlog)
        },
        async promiseFetchBlog() {
            this.blogs = [];
            const response = await $fetch('/api/blog');
            response.data.forEach((blog) => {
                const blogObject = new Blog(blog as unknown as IBlog);
                this.blogs.push(blog)
            })
        }
    },
    getters: {
    }
})