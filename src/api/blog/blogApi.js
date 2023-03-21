import request from '@/utils/request'


export function getList() {
    return request({
        url: '/service-article/blog/page',
        method: 'get',
    })
}

export function getBlogComment(id) {
    return request({
        url: '/service-comment/blog/' + id
    })
}
