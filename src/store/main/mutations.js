export default {
  SET_VIDEO_LIST(state, videoList) {
    state.videoList = videoList;
  },
  ADD_VIDEO_LIST(state, newVideoList) {
    if (newVideoList) state.videoList.push(...newVideoList);
  },
  TOGGLE_IS_LOADING(state, toggleState) {
    state.isLoading = toggleState;
  },
  SET_SEASON_LIST(state, seasonTeamList) {
    const seasonSet = new Set();
    seasonTeamList.forEach((seasonTeam) => seasonSet.add(seasonTeam.season));
    state.seasonList = Array.from(seasonSet);
  },
  SET_TEAM_LIST(state, seasonTeamList) {
    if (seasonTeamList.length > 1) {
      const teamSet = new Set();
      seasonTeamList.forEach((seasonTeam) => {
        seasonTeam.teams.forEach((team) => {
          if (team) {
            teamSet.add(team);
          }
        });
      });
      state.teamList = Array.from(teamSet);
    } else {
      state.teamList = seasonTeamList[0].teams.filter((team) => team != "");
    }
  },
  SET_SELECTED_TEAM(state, { season, name }) {
    state.seasonTeamList.forEach((seasonTeam) => {
      if (seasonTeam.season === season) {
        seasonTeam.teams.forEach(
          (team) => (team.isActive = team.name === name)
        );
      }
    });
  },
  SET_SORT_LIST(state, sortList) {
    state.sortList = sortList.map((sort) => {
      return {
        name: sort.name,
        value: sort.value,
        isActive: false,
      };
    });
  },
  SET_SORT_OPTION(state, sortOption) {
    state.sortList.forEach(
      (sort) => (sort.isActive = sort.name == sortOption.name)
    );
    state.params.sortOption = sortOption.value;
  },
  SET_OPEN_ATOMIC_MODAL_NAME(state, openAtomicModalName) {
    state.openAtomicModalName =
      state.openAtomicModalName == openAtomicModalName
        ? ""
        : openAtomicModalName;
  },
  SET_SELECTED_VIDEO(state, selectedVideo) {
    state.selectedVideo = selectedVideo;
  },
  SET_QUERY_PARAMS(state, params) {
    Object.assign(state.params, params);
  },
  RESET_QUERY_PARAMS(state) {
    state.params = {};
  },
};
