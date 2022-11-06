// import videoList from "@/assets/json/videoList.json";
// import teamAndPlayerList from "@/assets/json/teamAndPlayerList.json";
import sortList from "@/assets/json/sortList.json";
import axios from 'axios';

const apiBaseUrl = 'https://raw.githubusercontent.com/gyu-young-park/lck_data_generator';

export default {
    FETCH_VIDEO_LIST: async ({commit}) => {
        const videoList = await axios.get(`${apiBaseUrl}/main/all-match.json`);
        commit('SET_VIDEO_LIST', videoList.data.data);
    },
    FETCH_SEASON_TEAM_LIST: async ({commit}) => {
        const seasonTeamList = await axios.get(`${apiBaseUrl}/main/all-team.json`);
        console.log(seasonTeamList.data.data)
        commit('SET_SEASON_TEAM_LIST', seasonTeamList.data.data);
    },
    FETCH_SORT_LIST: ({commit}) => {
        commit('SET_SORT_LIST', sortList.sortList);
        commit('SET_SORT_OPTION', sortList.sortList[0]);
    }
}