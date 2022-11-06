export default {
    SET_VIDEO_LIST(state, videoList) {
        state.videoList = videoList;
    },
    SET_SEASON_TEAM_LIST(state, seasonTeamList) {
        state.seasonTeamList = seasonTeamList;
    },
    SET_SORT_LIST(state, sortList) {
        state.sortList = sortList;
    },
    SET_SORT_OPTION(state, sortOption) {
        state.sortOption = sortOption;
    },
    SET_OPEN_ATOMIC_MODAL_NAME(state, openAtomicModalName) {
        if(state.openAtomicModalName == openAtomicModalName) {
            state.openAtomicModalName = '';
            return;   
        }
        state.openAtomicModalName = openAtomicModalName;
    },
    SET_SELECTED_VIDEO(state, selectedVideo) {
        state.selectedVideo = selectedVideo;
    },
    SET_QUERY_PARAMS(state, params) {
        Object.assign(state.params, params);
    }
}