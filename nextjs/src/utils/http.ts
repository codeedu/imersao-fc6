import axios from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEST_HOST
})

export default http;