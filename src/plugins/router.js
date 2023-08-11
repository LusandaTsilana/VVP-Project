
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', redirect: '/home' }, // To redirect root to '/home'
    {path: '/home', component: () => import('@/views/Home.vue')},
    {path: '/about', component: () => import('@/views/About.vue')},
    {path: '/work', component: () => import('@/views/Work.vue')},
    {path: '/contact', component: () => import('@/views/Contact.vue')},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router