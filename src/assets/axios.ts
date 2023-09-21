import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://neutrinoapi.net/convert",
    headers: {
        "API-Key": process.env.API_KEY,
        "User-ID": process.env.USER_ID
    }
})

export default axiosInstance;