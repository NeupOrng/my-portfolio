import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme',  {
    state: () => ({
        colorMode: useCookie(COLOR_MODE).value ?? 'light',
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
        },
        changeMode() {
            this.colorMode = this.isDarkMode ? 'light' : 'dark';
            useCookie(COLOR_MODE).value = this.colorMode;
        }
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