import {createWebHistory, createRouter} from 'vue-router';
import AppMainComponent from '@/components/AppMainComponent.vue';

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