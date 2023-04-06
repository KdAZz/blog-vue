import request from '@/utils/request'

export function getCategory() {
    return request({
        url: '/service-article/category',
        method: 'get'
    })
}

export function getNum(data) {
    return request({
        url: '/service-article/article/num',
        method: 'get',
        params: data
    })
}

export function createArticle(data) {
    return request({
        url: '/service-article/article/createArticle/' + data.categoryId,
        method: 'post',
        data
    })
}

export function getArticle(data) {
    return request({
        url: '/service-article/article/page',
        method: 'get',
        params: data
    })
}

export function getArticleById(id) {
    return request({
        url: '/service-article/article/' + id,
        method: 'get'
    })
}
