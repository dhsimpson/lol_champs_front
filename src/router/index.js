import {createWebHistory, createRouter} from 'vue-router';
import AppMainComponent from '@/views/AppMainComponent.vue';
import LoginComponent from '@/views/LoginComponent.vue';
// 최초 main 에 접속 시 쿠키 값으로 로그인 정보 쿼리 해보기??
// 쿼리 후 로그인 state 저장하기

// login 화면에서 로그인 토큰 가져오면 쿠키로 저장하고 main 으로 리다이렉트 하기 (main 에서 로그인 state 저장하니)
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