import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Routes
const LandingPage = () =>
    import ('@/components/LandingPage/Main.vue')
const CitonhubLandingPage = () =>
    import ('@/components/CitonhubLandingPage/Main.vue')
const StranerdLandingPage = () =>
    import ('@/components/StranerdLandingPage/Main.vue')
const MySquareroofLandingPage = () =>
    import ('@/components/MySquareroofLandingPage/Main.vue')

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/landing-page',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/mysquareroof',
        name: 'MySquareroofLandingPage',
        component: MySquareroofLandingPage,
    },
    {
        path: '/citonhub',
        name: 'CitonhubLandingPage',
        component: CitonhubLandingPage,
    },
    {
        path: '/stranerd',
        name: 'StranerdLandingPage',
        component: StranerdLandingPage,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router