// import axios from 'axios';
// import {apiBaseUrl} from '@/js/const';

// const seasonUrl = '/v1/lck-season/list?season='
// const teamUrl = '/v1/lck-season/list?team=';
// const matchUrl = '/v1/lck-match'; // match == viedo (매치영상)
import { useCookies } from "vue3-cookies";

export default {
    FETCH_USER_DATA: async ({commit}) => {//canLogin 은 테스트용 값
        const { cookies } = useCookies();
        const lckAuth = cookies.get("lck-auth");
        // const profile = await axios.get(`${apiBaseUrl}/auth`, {
        //     headers: {
        //         Authorization: `Bearer ${lckAuth}`
        //     }
        // }).catch(err => {
        //     console.error(err);
        // });
        // console.log(profile)
        // this.profile = profile;
        commit('SET_IS_LOGIN', lckAuth?true:false);
        commit('SET_THUMBNAIL', 'http://k.kakaocdn.net/dn/bXLViz/btrMVtU8Ztp/xl6EeDs2cggUxVFKCeELR1/img_110x110.jpg');
    }
}