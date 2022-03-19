import { post, get } from './request.js'
export const getUser = (params) => get('users', params)