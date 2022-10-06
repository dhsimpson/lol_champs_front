import videoList from "@/assets/json/videoList.json";

export default {
    FETCH_VIDEO_LIST: ({commit}) => {
        console.log(videoList);
        commit('SET_VIDEO_LIST', videoList);
    }
}