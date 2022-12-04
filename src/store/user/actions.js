// import axios from 'axios';
// import {apiBaseUrl} from '@/js/const';

// const seasonUrl = '/v1/lck-season/list?season='
// const teamUrl = '/v1/lck-season/list?team=';
// const matchUrl = '/v1/lck-match'; // match == viedo (매치영상)

export default {
    FETCH_USER_DATA: async ({commit}) => {
        commit('SET_THUMBNAIL', 'http://k.kakaocdn.net/dn/bXLViz/btrMVtU8Ztp/xl6EeDs2cggUxVFKCeELR1/img_110x110.jpg');
    },
}