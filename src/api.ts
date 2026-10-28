import axios from "axios"
import type { Ihoimods, Root } from "./types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})
// const getHoimods = async (): Promise<Root<IDaum[]>> => {
//     const res = await apiInstance.get<Root<IDaum[]>>("/games", {
//         params: {
//             populate: "cover",
//         },
//     })
//     return res.data
// }

// export const api = { getHoimods }