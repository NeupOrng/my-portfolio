
export default defineNuxtPlugin((nuxtApp) => {
    console.log(useCookie(COLOR_MODE).value);
    const themeStore = useThemeStore();
    themeStore.init();
})