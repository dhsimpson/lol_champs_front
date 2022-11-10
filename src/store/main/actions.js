import sortList from "@/assets/json/sortList.json";
import axios from 'axios';

const apiBaseUrl = 'https://lck-data-api.fly.dev';
const teamUrl = '/v1/lck-team/';
const matchUrl = '/v1/lck-match/'; // match == viedo (매치영상)

export default {
    FETCH_VIDEO_LIST: async ({commit}, params) => {
        const queryParam = Object.entries(params).reduce((acc, [key, value]) => acc += `${key}=${value}&`, '?');
        // console.log(`${apiBaseUrl}${matchUrl}${queryParam}`)
        const videoList = await axios.get(`${apiBaseUrl}${matchUrl}${queryParam}`);
        commit('SET_VIDEO_LIST', videoList.data.data);
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