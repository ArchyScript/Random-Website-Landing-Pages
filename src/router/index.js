import { createRouter, createWebHistory } from 'vue-router'

// Routes
const Home = () =>
    import ('@/components/Home/Main.vue')
const Citonhub = () =>
    import ('@/components/Citonhub/Main.vue')
const Stranerd = () =>
    import ('@/components/Stranerd/Main.vue')
const Squareroof = () =>
    import ('@/components/Squareroof/Main.vue')
const ArchitectureHub = () =>
    import ('@/components/ArchitectureHub/Main.vue')
const Enyata = () =>
    import ('@/components/Enyata/Main.vue')

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/mysquareroof',
        name: 'Squareroof',
        component: Squareroof,
    },
    {
        path: '/citonhub',
        name: 'Citonhub',
        component: Citonhub,
    },
    {
        path: '/stranerd',
        name: 'Stranerd',
        component: Stranerd,
    },
    {
        path: '/architecturehub',
        name: 'ArchitectureHub',
        component: ArchitectureHub,
    },
    {
        path: '/enyata',
        name: 'Enyata',
        component: Enyata,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router