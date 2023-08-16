
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Work from "@/views/Work.vue";
import Contact from "@/views/About.vue";

const routes = [
    {path: '/', redirect: '/home' }, // To redirect root to '/home'
    {path: '/home', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/work', name: 'Work', component: Work},
    {path: '/contact', name: 'Contact', component: Contact},
];

const router = createRouter({
    routes,
   history: createWebHistory(),
})

export default router