const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    userId: state => state.user.userId,
    routes: state => state.user.routes,
    permissions: state => state.user.permissions,
    visitedViews: state => state.tagsView.visitedViews
}
export default getters
