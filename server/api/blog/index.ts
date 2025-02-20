import { IBlog } from "~/models"
import { blogs } from "~/mock/blog"


export default defineEventHandler(async (event) => {
    const data = await new Promise((resolve) => {
        setTimeout(() => resolve(blogs), 2000);
    });
    console.log(data)
    return {
        data
    }
})