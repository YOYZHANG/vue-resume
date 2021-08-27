import Home from './view/Home.vue';
import  { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import('./view/About')
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
