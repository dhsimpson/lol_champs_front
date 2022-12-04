<template>
    <p></p>
    <!-- <p>{{profile}}</p> -->
</template>

<script>
import {defineComponent} from 'vue';
import axios from 'axios';
import { useCookies } from "vue3-cookies";
import CryptoJS from 'crypto-js';
// import {apiBaseUrl} from '@/js/const';

export default defineComponent({
    data() {
        return {
            profile: {},
            apikey: process.env.VUE_APP_OAUTH_KAKAO_API_KEY,
            redirectUri: process.env.VUE_APP_OAUTH_REDIRECT_URL
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    async created() {
        const token = await this.getToken();
        this.saveTokenToCookie(token);
        //회원가입 여부 체크하는 로직..?? or TODO - 회원가입, 로그인 관련 로직 정리해야 함. 두 화면을 따로 만드는 게 맞나?
        await this.isSignUp();
        if(this.$store.getters['USER/GET_IS_LOGIN']) {
            this.$router.push('/');
        }
        // this.getProfile(token);
    },
    methods: {
        async getToken() {
            const uri = window.location.search.substring(1);
            const params = new URLSearchParams(uri); 
            const res = await axios.get(`https://kauth.kakao.com/oauth/token?client_id=${this.apikey}&code=${params.get('code')}&grant_type=authorization_code`, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            });
            return res.data.access_token;
        },
        encryptToken(token) {
            const key = 'gyulina'.padEnd(32, "A");
            const cipher = CryptoJS.AES.encrypt(token, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(""),
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
            });
            return cipher.toString();
            /** 아래는 복호화 로직 예시 */
            // const decryptCipher = CryptoJS.AES.decrypt(encrypted, CryptoJS.enc.Utf8.parse(key), {
            //     iv: CryptoJS.enc.Utf8.parse(""),
            //     padding: CryptoJS.pad.Pkcs7,
            //     mode: CryptoJS.mode.CBC
            // });
            // console.log(decryptCipher.toString(CryptoJS.enc.Utf8));
        },
        saveTokenToCookie(token) {
            const encryptedToken = this.encryptToken(token);
            this.cookies.set("lck-auth", encryptedToken)
        },
        async isSignUp() {
            this.$store.dispatch('USER/FETCH_USER_DATA');
            
            // profile 데이터 형식 체크용
            // const lckAuth = this.cookies.get("lck-auth");
            // const profile = await axios.get(`${apiBaseUrl}/auth`, {
            //     headers: {
            //         Authorization: `Bearer ${lckAuth}`
            //     }
            // });
            // console.log(profile)
            // this.profile = profile;
        }
        /** 유저정보 쿼리 로직 예시 */
        // ,async getProfile(token) {
        //     const profile = await axios.get('https://kapi.kakao.com/v2/user/me', {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     });
        //     console.log(profile)
        //     this.profile = profile;
        // }
    }
})
</script>

<style>

</style>