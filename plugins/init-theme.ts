
export default defineNuxtPlugin((nuxtApp) => {
    const themeStore = useThemeStore();
    themeStore.init();
})