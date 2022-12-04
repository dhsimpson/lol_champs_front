<template>
    <header>
        <h3>
            <router-link to="/">롤 대회 하이라이트 골라보기</router-link>
        </h3>
        <div>
            <img v-if="isLogin" :src="thumbnail" alt="유저프로필썸네일">
            <router-link v-else to="/login">로그인</router-link>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
//메뉴는 내정보 /로그아웃 /최근에 본 영상(이건 나중에)??
// mw, pc 각각 유튜브를 따르자.
// 최초 어딘가에서 로그인 하면 store에 썸넬 등의 정보 저장?
// 코드만 세션에 저장하구

export default {
    computed: {
        ...mapGetters({
            isLogin: 'USER/GET_IS_LOGIN',
            thumbnail: 'USER/GET_THUMBNAIL'
        })
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: $represent-color;
    box-shadow: 0 4px 5px $color-light-gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    a {
        text-decoration: none;
        color: $color-very-heavy-gray;
    }
    h3 {
        margin: auto 0;
        line-height: 70px;
        font-size: $font-large;
        flex-grow: 1;
        text-align: center;
    }
    div {
        // flex-grow: 0;
        img {
            width: 40px;
            border-radius: 50%;
        }
        // padding: 20px;
    }
}
</style>