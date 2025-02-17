
export default defineNuxtPlugin((nuxtApp) => {
    console.log(nuxtApp);
    const themeStore = useThemeStore();
    themeStore.init();
})