import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme',  {
    state: () => ({
        colorMode: 'dark',
    }),
    actions: {
        init() {
            const storeMode = useCookie(COLOR_MODE);
            if(storeMode.value) {
                this.colorMode = storeMode.value;
            } else {
                const isDarkModeFromBrowser = window.matchMedia("(prefers-color-scheme: dark)").matches;
                this.colorMode = isDarkModeFromBrowser ? 'dark' : 'light';
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
    }, 
    getters: {
        isDarkMode: (state): boolean => {
            return state.colorMode === 'dark';
        },
        theme: (state): string => {
            return state.colorMode === 'dark' ? 'dark' : ''; 
        }
    }
}); 