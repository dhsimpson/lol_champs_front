import videoList from "@/assets/json/videoList.json";
import teamAndPlayerList from "@/assets/json/teamAndPlayerList.json";
import sortList from "@/assets/json/sortList.json";

export default {
    FETCH_VIDEO_LIST: ({commit}) => {
        commit('SET_VIDEO_LIST', videoList.videoList);
    },
    FETCH_TEAM_PLAYER_LIST: ({commit}) => {
        commit('SET_TEAM_PLAYER_LLIST', teamAndPlayerList.teamList);
    },
    FETCH_SORT_LIST: ({commit}) => {
        commit('SET_SORT_LIST', sortList.sortList);
    }
}