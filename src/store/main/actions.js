import sortList from "@/assets/json/sortList.json";
import axios from 'axios';

const apiBaseUrl = 'https://lck-data-api.fly.dev';
const teamUrl = '/v1/lck-team/';
const matchUrl = '/v1/lck-match/'; // match == viedo (매치영상)

export default {
    FETCH_VIDEO_LIST: async ({commit}, params) => {
        const queryParam = Object.entries(params).reduce((acc, [key, value]) => acc += `${key}=${value}&`, '?');
        const videoList = await axios.get(`${apiBaseUrl}${matchUrl}${queryParam}`);
        commit('SET_VIDEO_LIST', videoList.data.data.slice(0,10));//추후에 slice 제거
    },
    ADD_VIDEO_LIST: async ({state, commit}, params) => {
        params.page = state.pageNum++;
        const queryParam = Object.entries(params).reduce((acc, [key, value]) => acc += `${key}=${value}&`, '?');
        const videoList = await axios.get(`${apiBaseUrl}${matchUrl}${queryParam}`);
        commit('ADD_VIDEO_LIST', videoList.data.data.slice(state.pageNum*10,(state.pageNum+1)*10));//temp: 페이지x10, 페이지+1 x 10.... 추후에 slice 제거
        commit('TOGGLE_IS_LOADING', false);
    },
    FETCH_SEASON_TEAM_LIST: async ({commit}) => {
        try{
            const seasonTeamList = await axios.get(`${apiBaseUrl}${teamUrl}`);
            commit('SET_SEASON_TEAM_LIST', seasonTeamList.data.data);
        }catch(e){
            console.log(e)
        }
    },
    FETCH_SORT_LIST: ({commit}) => {
        commit('SET_SORT_LIST', sortList.sortList);
    }
}