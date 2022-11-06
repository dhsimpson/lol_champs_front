export default {
    SET_VIDEO_LIST(state, videoList) {
        state.videoList = videoList;
    },
    SET_SEASON_TEAM_LIST(state, seasonTeamList) {
        state.seasonTeamList = seasonTeamList.map((seasonTeam, idx) => {
            seasonTeam.teams = seasonTeam.teams.map(team => {
                return {name: team, isActive: false}
            });
            if(idx==0) {
                seasonTeam.isActive = true;
                return seasonTeam;
            }
            seasonTeam.isActive = false;
            return seasonTeam;
        });
    },
    SET_SELECTED_SEASON(state, season) {
        state.seasonTeamList.forEach( seasonTeam => {
            if(seasonTeam.season === season) {
                seasonTeam.isActive = true;
                return;
            }
            seasonTeam.isActive = false;
        });
    },
    SET_SELECTED_TEAM(state, {season, name}) {
        state.seasonTeamList.forEach(seasonTeam => {
            if(seasonTeam.season === season) {
                seasonTeam.teams.forEach(team => {
                    if(team.name === name) {
                        team.isActive = true;
                        return;
                    }
                });
            }
        });
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
    },
    RESET_QUERY_PARAMS(state) {
        this.commit('SET_QUERY_PARAMS', {season: null, team: null});
        state.seasonTeamList.forEach((seasonTeam, idx) => {
            seasonTeam.teams.forEach(team => {
                return {name: team, isActive: false}
            });
            if(idx==0) {
                seasonTeam.isActive = true;
                return;
            }
            seasonTeam.isActive = false;
        });
    }
}