import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from "@/page/IndexPage.vue";
import HomePage from "@/page/HomePage.vue";
import Article from "@/page/Article.vue";
import UserCenter from "@/page/UserCenter.vue";
import HomeComponent from "@/components/UserCenter/HomeComponent.vue";
import UserInfo from "@/components/UserCenter/UserInfo.vue";
import SettingCenter from "@/components/UserCenter/SettingCenter.vue";
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
        component: UserCenter,
        children:[
            {
                path: '/UserCenter/HomeComponent',
                component: HomeComponent,
            },
            {
                path: '/UserCenter/UserInfo',
                component: UserInfo
            },
            {
                path: '/UserCenter/SettingCenter',
                component: SettingCenter
            }
        ]
    }
]
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    mode: "history",
    routes: constantRoutes
})
const router = createRouter()
export default router
