import { IBlog } from "~/models"
import { blogs } from "~/mock/blog"


export default defineEventHandler(async (event) => {
    const data = blogs;
    console.log(data)
    return {
        data
    }
})