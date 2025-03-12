import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme',  {
    state: () => ({
        colorMode: 'dark',
        isLoading: false,
        isRouteChanging: false,
        isMounting: false,
    }),
    actions: {
        init() {
            const storeMode = useCookie(COLOR_MODE);
            if(storeMode.value) {
                this.colorMode = storeMode.value;
            } else {
                if(window) {
                    const isDarkModeFromBrowser = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    this.colorMode = isDarkModeFromBrowser ? 'dark' : 'light';
                }
            }
            useHead({
                bodyAttrs: {
                    class: [
                        'background-primary',
                        this.theme,
                    ]
                }
            })
        },
        changeMode() {
            this.colorMode = this.isDarkMode ? 'light' : 'dark';
            useCookie(COLOR_MODE).value = this.colorMode;
            const body = document.querySelector('body');
            if(this.theme) {
                body?.classList.add('dark')
            } else {
                body?.classList.remove('dark')
            }
        },
        async onLoading<T>(promiseFunc: () => Promise<T>): Promise<T> {
            try {
                this.isLoading = true;
                if(document) {
                    document.body.style.overflow = 'hidden';
                }
                return await promiseFunc();
            } catch (error) {
                console.error('Error executing function:', error);
                throw error;
            } finally {
                this.isLoading = false;
                if(document) {
                    document.body.style.overflow = '';
                }
            }
        },
        setIsRouteChanging(status: boolean) {
            this.isRouteChanging = status;
        },
    }, 
    getters: {
        isDarkMode: (state): boolean => {
            return state.colorMode === 'dark';
        },
        theme: (state): string => {
            return state.colorMode === 'dark' ? 'dark' : ''; 
        },
        loadingClass: (state): string => {
            return state.isLoading || state.isRouteChanging || state.isMounting ? '' : 'hidden';
        }
    }
}); 