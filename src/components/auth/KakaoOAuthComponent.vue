<template>
    <a @click="getOAuth">
        <img src="@/assets/images/kakao_login_large_wide.png" alt="kakaologin">
    </a>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'OAuthComponent',
    data() {
        const apikey = process.env.VUE_APP_OAUTH_KAKAO_API_KEY;
        const redirectUri = process.env.VUE_APP_OAUTH_REDIRECT_URL;
        return {
            kakaoOAuhUri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${apikey}&redirect_uri=${redirectUri}`
        }
    },
    methods: {
        getOAuth() {
            window.location.href = this.kakaoOAuhUri;
        },
    }
})
</script>

<style lang="scss" scoped>
a {
    display: inline-block;
    img {
        display: block;
        width: 80%;
        margin: auto;
    }
}
</style>