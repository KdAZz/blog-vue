import request from '@/utils/request'

export function addFollow(data) {
    return request({
        url: '/service-article/blogFollower',
        method: 'post',
        data
    })
}

export function deleteFollow(data) {
    return request({
        url: '/service-article/blogFollower/delete',
        method: 'delete',
        data
    })
}

export function followList(id) {
    return request({
        url: 'service-article/blogFollower/getFollowByUser/' + id,
        method: 'get'
    })
}

export function getList(data) {
    return request({
        url: '/service-article/blog/page',
        method: 'get',
        params: data
    })
}

export function getFollower(data, id) {
    return request({
        url: '/service-article/blog/page/' + id,
        method: 'get',
        params: data
    })
}

export function getBlogComment(id) {
    return request({
        url: '/service-comment/blog/' + id
    })
}

export function addLike(data) {
    return request({
        url: '/service-article/blogLike/like',
        method: 'put',
        data
    })
}

export function addComment(data) {
    return request({
        url: '/service-comment/blog',
        method: 'POST',
        data
    })
}

export function addCount(userId) {
    return request({
        url: '/service-article/blog/add/' + userId,
        method: 'get'
    })
}

export function createBlog(data) {
    return request({
        url: '/service-article/blog/add',
        method: "post",
        data
    })
}
