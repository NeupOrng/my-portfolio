import { IBlog } from "~/models"
import { blogs } from "~/mock/blog"


export default defineEventHandler((event) => {
    const id = event.context.params?.id;
    return {
        data: blogs.filter((blog) => blog.id === id)[0]
    }
})