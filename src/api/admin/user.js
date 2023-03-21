import request from '@/utils/request'
export function login(data) {
    return request({
        url: '/blog-auth/oauth/token',
        method: 'post',
        params: data,
        headers: {
            'authorization': 'Basic a2Rheno6a2Rheno='
        },
    })
}
export function getInfo() {
    return request({
        url: '/blog-admin/user/current',
        method: 'get'
    })
}

