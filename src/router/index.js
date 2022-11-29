import {createWebHistory, createRouter} from 'vue-router';
import AppMainComponent from '@/views/AppMainComponent.vue';
import LoginComponent from '@/views/LoginComponent.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: AppMainComponent
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})