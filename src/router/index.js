import {createWebHistory, createRouter} from 'vue-router';
import AppMainComponent from '@/components/AppMainComponent.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: AppMainComponent
    },
    // {
        // path: '/v1/lck-match',
        // name: 'main2',
        // redirect: 'https://lck-data-gyu-young-park.koyeb.app',
        // component: AppMainComponent
    // }
]

export default createRouter({
    history: createWebHistory(),
    routes
})