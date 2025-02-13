import axios from "axios";

export const useAxios = () => {
    const runtimeConfig = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: runtimeConfig.public.baseURL,
    });

    return axiosInstance;
}