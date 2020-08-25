import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
