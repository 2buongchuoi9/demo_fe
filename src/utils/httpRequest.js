import axios from "axios"

const { REACT_APP_URL_API: URL_API, REACT_APP_X_API_KEY: X_API_KEY } = process.env

const url = "http://localhost:3000/api/v1"

const httpRequest = axios.create({
    baseURL: URL_API,
    headers: { "Content-Type": "application/json; charset=UTF-8", "x-api-key": X_API_KEY },
})

export const get = async (path, option = {}) => {
    const res = await httpRequest.get(path, option)

    return res.data
}

export const remove = async (path, config = {}) => {
    const res = await httpRequest.delete(path, config)
    return res
}

export const post = async (path, data = {}, config = {}, loading, success, error) => {
    loading && loading()
    httpRequest
        .post(path, data, { ...config, headers: { "Content-Type": "application/json" } })
        .then((res) => {
            success && success()
            return res.data
        })
        .catch((e) => {
            error && error(e)
        })
}
export const postFile = async (path, data = {}) => {
    const res = await httpRequest.post(path, data, { headers: { "Content-Type": "multipart/form-data" } })

    return res.data
}

export default httpRequest
