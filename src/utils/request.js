import axios from 'axios'
import { MessageBox,Message } from 'element-ui'
import store from '@/store'
import {getToken} from "@/utils/auth";
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['authorization'] = 'Bearer ' + getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // 如果自定义代码不是200，则将其判断为错误。
        if (res.code !== '000000') {
            // 50008: 非法Token; 50012: 异地登录; 50014: Token失效;
            if (res.code === 401 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    window.location.hash = '#'
                })

            } else {
                Message.error(
                    res.message || 'Error'
                )
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message.error(
            error.message
        )
        return Promise.reject(error)
    }
)

export default service
