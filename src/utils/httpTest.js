import axios from "axios"

const httpTest = axios.create({
    baseURL: "http://localhost:8084",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
})
export default httpTest
