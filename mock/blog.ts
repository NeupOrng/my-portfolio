import type { IBlog } from "~/models";
import vueContent from "./blogs/vue";

export const blogs: IBlog[] = [
    {
        id: '7a7b123',
        title: 'Enhancing Vue.js with Element UI: A Comprehensive Guide',
        tags: ['Vuejs'],
        cover: 'https://i.imgur.com/WybWXGi.jpeg',
        createdAt: new Date('19 February 2025'),
        content: vueContent
    }
]