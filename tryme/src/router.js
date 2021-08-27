import Home from './view/Home';
import Form from './view/Form'
import  { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import('./view/About')
    },
    {
        path: '/add',
        component: Form
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
