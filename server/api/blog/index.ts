import { IBlog } from "~/models"
import { blogs } from "~/mock/blog"


export default defineEventHandler((event) => {
    console.log('getting blog', event)
    return {
        data: blogs
    }
})