export default {
    SET_VIDEO_LIST(state, videoList) {
        state.videoList = videoList;
    },
    SET_TEAM_PLAYER_LLIST(state, teamList) {
        state.teamList = teamList;
    },
    SET_OPEN_ATOMIC_MODAL_NAME(state, openAtomicModalName) {
        if(state.openAtomicModalName == openAtomicModalName) {
            state.openAtomicModalName = '';
            return;   
        }
        state.openAtomicModalName = openAtomicModalName;
    }
    
}