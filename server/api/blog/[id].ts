import { IBlog } from "~/models"
import { blogs } from "~/mock/blog"


export default defineEventHandler((event) => {
    console.log('getting blog', event)
    const id = event.context.params?.id;
    return {
        data: blogs.filter((blog) => blog.id === id)
    }
})