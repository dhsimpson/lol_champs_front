<template>
    <header>
        <h3>
            <router-link to="/">LCK 골라보기</router-link>
        </h3>
        <div>
            <img v-if="isLogin" :src="thumbnail" @click="toggleUserMenu" alt="유저프로필썸네일">
            <router-link v-else to="/login">로그인</router-link>
        </div>
        <ul v-show="showUserMenu">
            <li>최근 시청한 영상</li>
            <li @click="logout">로그아웃</li>
        </ul>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
//메뉴는 내정보 /로그아웃 /최근에 본 영상(이건 나중에)??
// mw, pc 각각 유튜브를 따르자.
// 최초 어딘가에서 로그인 하면 store에 썸넬 등의 정보 저장?
// 코드만 세션에 저장하구

export default {
    data() {
        return {
            showUserMenu: false
        }
    },
    computed: {
        ...mapGetters({
            isLogin: 'USER/GET_IS_LOGIN',
            thumbnail: 'USER/GET_THUMBNAIL'
        })
    },
    methods: {
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu;
        },
        logout() {
            this.$store.commit('USER/SET_IS_LOGIN');
        }
    }
}
</script>

<style lang="scss" scoped>
$header-height: 70px;

header {
    height: $header-height;
    background-color: $represent-color;
    box-shadow: 0 4px 5px $color-light-gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $mobile-padding;
    position: relative;
    a {
        text-decoration: none;
        color: $color-very-heavy-gray;
    }
    h3 {
        margin: auto 0;
        line-height: $header-height;
        font-size: $font-large;
        flex-grow: 1;
        text-align: center;
    }
    div {
        img {
            width: 40px;
            border-radius: 50%;
        }
    }
    ul {
        position: absolute;
        top: $header-height;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: $represent-color;
        li {
            height: 50px;
            padding: $mobile-padding;
            text-align: center;
            line-height: 50px;
            background-color: $color-button;
            color: $font-color-button;
        }
    }
}
</style>