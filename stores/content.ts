import { defineStore } from "pinia";

export const useContentStore = defineStore('content', {
    state: () => ({
        topContent: ''  
    }),
    actions: {
        setContent(content: string) {
            this.topContent = content;
        }
    }
})