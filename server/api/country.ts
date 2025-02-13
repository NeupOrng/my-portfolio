import { useAxios } from "~/composables/axios"

export default defineEventHandler(async (event) => {
    console.log('event:', event)
    const axios = useAxios();
    try {
        const response = await axios.get('/v3.1/all')
        console.log("response: ", response);
        return response.data;
    } catch(error) {
        throw createError({
            statusCode: error.response?.status || 500,
            message: error.message
        })
    }
})