const sotre = useStore()
axios.defaults.baseURL = import.meta.env.MODE == 'production' ? 'https://jsonplaceholder.typicode.com/' : '/api'
axios.interceptors.request.use(request => {
    sotre.requesting = true
    return request
})
let retryRequestArr = []
const loopRequest = () => {
    if(retryRequestArr.length){
        console.log(retryRequestArr)
    }
    requestAnimationFrame(() => {
        retryRequestArr.forEach(request => {
            // if (request.vcode) {
            //     request.callback()
            // }
            // request()
        });
        loopRequest()
    })
}
loopRequest()
axios.interceptors.response.use(response => {
    if (Math.random() > 0) {
        response.data.code = 300
    }
    if (response.data.code == 300) {
        const config = response.config
        return new Promise((resolve) => {
            retryRequestArr.push(() => {
                resolve(axios(config))
                // resolve(Promise.resolve({
                //     config: config,
                //     callback: axios(config),
                //     vcode: 1,
                // }));
            });
            console.log(retryRequestArr)
        });
    } else {
        sotre.requesting = false
    }
    return response
})
export function get(url, params) {
    return axios.get(url, { params })
}
export function post(url, params, config) {
    return axios.post(url, params, config)
}
