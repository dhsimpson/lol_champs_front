import sortList from "@/assets/json/sortList.json";
import axios from 'axios';

const apiBaseUrl = 'https://lck-data-api.fly.dev';
const seasonUrl = '/v1/lck-season/list?season='
const teamUrl = '/v1/lck-season/list?team=';
const matchUrl = '/v1/lck-match'; // match == viedo (매치영상)

export default {
    FETCH_VIDEO_LIST: async ({commit}, params) => {
        Object.assign(params, {limit: 10});
        const queryParam = Object.entries(params).reduce((acc, [key, value]) => acc += `${key}=${value}&`, '?');
        const videoList = await axios.get(`${apiBaseUrl}${matchUrl}${queryParam}`);
        commit('SET_VIDEO_LIST', videoList.data);//추후에 slice 제거
    },
    ADD_VIDEO_LIST: async ({state, commit}, params) => {
        // const page = state.pageNum++; TODO : page 는 좋아요/조회수로 sort 할 때 사용하면 될까?
        const lastVideo = state.videoList[state.videoList.length-1];
        Object.assign(params, {publishedAt: lastVideo.PublishedAt, limit: 10})
        const queryParam = Object.entries(params).reduce((acc, [key, value]) => acc += `${key}=${value}&`, '?');
        const videoList = await axios.get(`${apiBaseUrl}${matchUrl}${queryParam}`);
        commit('ADD_VIDEO_LIST', videoList.data);//temp: 페이지x10, 페이지+1 x 10.... 추후에 slice 제거
        commit('TOGGLE_IS_LOADING', false);
    },
    FETCH_SEASON_LIST: async ({commit}, team = '') => {
        try{
            const seasonTeamList = await axios.get(`${apiBaseUrl}${teamUrl}${team}`);
            commit('SET_SEASON_LIST', seasonTeamList.data);
        }catch(e){
            console.log(e)
        }
    },
    FETCH_TEAM_LIST: async ({commit}, season = '') => {
        try{
            const seasonTeamList = await axios.get(`${apiBaseUrl}${seasonUrl}${season}`);
            commit('SET_TEAM_LIST', seasonTeamList.data);
        }catch(e){
            console.log(e)
        }
    },
    FETCH_SORT_LIST: ({commit}) => {
        commit('SET_SORT_LIST', sortList.sortList);
    }
}