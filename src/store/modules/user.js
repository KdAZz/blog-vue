import { getInfo, login } from '@/api/admin/user'
import {getAvatar, getId, getToken, getUser, removeToken, setAvatar, setToken, setUserInfo} from '@/utils/auth'
import { constantRoutes, resetRouter } from '@/router'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: getUser(),
        avatar: getAvatar(),
        userId: getId(),
        routes: [],
        permissions: []
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_PERMISSIONS: (state, permissions) => {
        state.permissions = permissions
    },
    SET_ROUTES: (state, routes) => {
        state.routes = constantRoutes.concat(routes)
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ID: (state, userId) => {
        state.userId = userId
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    login({ commit }, userInfo) {
        const { username, password, grant_type } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password, grant_type: grant_type }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.access_token)
                setToken(data.access_token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo().then(response => {
                const { data } = response
                if (!data) {
                    return reject('Verification failed, please Login again.')
                }

                const { username, avatar, id } = data

                commit('SET_NAME', username)
                setUserInfo(data.username, data.id)
                commit('SET_ID', id)
                setAvatar(data.avatar)
                commit('SET_AVATAR', avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({ commit, state }) {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
    },
    // user menu
    listMenuTree({ commit, state }) {
        return new Promise((resolve, reject) => {
            menuRoutes().then((res) => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

