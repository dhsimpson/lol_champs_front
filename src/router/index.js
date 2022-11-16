import {createWebHistory, createRouter} from 'vue-router';
import AppMainComponent from '@/views/AppMainComponent.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: AppMainComponent
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})