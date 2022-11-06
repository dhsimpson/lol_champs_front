export default {
    GET_VIDEO_LIST : state => state.videoList,
    GET_SEASON_TEAM_LIST : state => state.seasonTeamList,
    GET_SORT_LIST : state => state.sortList,
    GET_SORT_OPTION : state => state.sortOption,
    GET_OPEN_ATOMIC_MODAL_NAME : state => state.openAtomicModalName,
    GET_SELECTED_VIDEO : state => state.selectedVideo,
    GET_QUERY_PARAMS : state => state.params,
    GET_SELECTED_SEASON : state => state.params.season,
    GET_SELECTED_TEAM : state => state.params.team,
}