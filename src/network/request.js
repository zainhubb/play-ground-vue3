const store = useStore()
axios.defaults.baseURL = import.meta.env.MODE == 'production' ? 'https://jsonplaceholder.typicode.com/' : '/api'
axios.interceptors.request.use(request => {
    store.requesting = true
    return request
})
let retryRequestArr = []
const loopRequest = () => {
    requestAnimationFrame(() => {
        if (retryRequestArr.length && !store.requestConfig) {
            store.requestConfig = { ...retryRequestArr[0] }
            retryRequestArr.shift()
        }
        if (!store.showModal && store.requestConfig) {
            store.openModal()
        }
        loopRequest()
    })
}
loopRequest()
axios.interceptors.response.use(response => {

    if (!response.data.vcode) {
        const config = response.config
        return new Promise((resolve) => {
            retryRequestArr.push(config)
            store.requesting = false
            resolve()
        })
    } else {
        store.requesting = false
        store.closeModal()
    }
    return response
})
export function get(url, params) {
    return axios.get(url, { params })
}
export function post(url, data, config) {
    return axios.post(url, data, config)
}
