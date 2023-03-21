import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

const UserKey = 'vue_admin_template_user'

const IdKey = 'vue_admin_template_id'
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function setCurrentUsername(username) {
    return Cookies.set(UserKey, username)
}

export function setCurrentUserId(id) {
    return Cookies.set(IdKey, id)
}
