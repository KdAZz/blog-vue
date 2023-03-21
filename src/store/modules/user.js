import {getInfo, login} from '@/api/admin/user'
import {getToken, removeToken, setCurrentUser, setCurrentUserId, setCurrentUsername, setToken} from '@/utils/auth'
import {constantRoutes} from '@/router'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        avatar: '',
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
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    serPermissions({commit}, permissions) {
        commit('SET_PERMISSIONS', permissions)
    },
    setRoutes({commit}, routes) {
        commit('SET_ROUTES', routes)
    },
    // user login
    login({commit}, userInfo) {
        const {username, password} = userInfo
        let grant_type = "password";
        return new Promise((resolve, reject) => {
            login({username: username.trim(), password: password, grant_type: grant_type}).then(response => {
                const {data} = response
                commit('SET_TOKEN', data.access_token)
                setToken(data.access_token)
                setCurrentUsername(data.username)
                setCurrentUserId(data.userId)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    getInfo({commit, state}) {
        return new Promise((resolve, reject) => {
            getInfo().then(response => {
                const {data} = response

                if (!data) {
                    return reject('Verification failed, please Login again.')
                }

                const {username, avatar} = data

                commit('SET_NAME', username)
                commit('SET_AVATAR', avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({commit, state}) {
        removeToken() // must remove  token  first
        commit('RESET_STATE')
    },

    // remove token
    resetToken({commit}) {
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

