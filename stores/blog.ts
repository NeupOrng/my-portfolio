
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
            this.blogs = response.data;
        }
    },
    getters: {
    }
})