import axios from "axios";
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(request => {
    return request
})
axios.interceptors.response.use(response => {
    return response
})
export function get(url, params) {
    return axios.get(url, { params })
}
export function post(url, params, config) {
    return axios.post(url, params, config)
}