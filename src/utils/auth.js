import Cookies from 'js-cookie'

const TokenKey = 'user_token'

const UserKey = 'user_name'

const IdKey = 'user_id'

const AvatarKey = "user_avatar"

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function setUserInfo(user, id) {
    Cookies.set(IdKey, id)
    return Cookies.set(UserKey, user)
}

export function setAvatar(avatar) {
    Cookies.set(AvatarKey, avatar)
}

export function getUser() {
    return Cookies.get(UserKey)
}

export function getAvatar() {
    return Cookies.get(AvatarKey)
}

export function getId() {
    return Cookies.get(IdKey)
}
