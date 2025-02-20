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
            response.data.forEach((blog) => {
                const blogObject = new Blog(blog as unknown as IBlog);
                this.blogs.push(blogObject)
            })
        },
        async fetchBlogById(id: string) {
            const themeStore = useThemeStore();
            await themeStore.onLoading(async () => {
                const response = await $fetch(`/api/blog/${id}`)
                this.currentBlog = response.data;
            })
        }
    },
    getters: {
    }
})