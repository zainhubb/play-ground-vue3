import { post } from "./request"

export const getUser = (params) => get('users', params)
export const postUser = (data) => post('posts', data)
