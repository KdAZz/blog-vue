import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from "@/components/IndexPage";
import HomePage from "@/components/HomePage";
import Article from "@/page/Article.vue";
import UserCenter from "@/page/UserCenter.vue";
Vue.use(Router)
export const constantRoutes = [
    {
        path: '/',
        component: IndexPage,

    },
    {
        path: '/Article',
        component: Article
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/UserCenter',
        component: UserCenter
    }
]
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    mode: "history",
    routes: constantRoutes
})
const router = createRouter()
export default router
