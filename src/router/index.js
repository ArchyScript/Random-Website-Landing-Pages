import { createRouter, createWebHistory } from 'vue-router'

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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router