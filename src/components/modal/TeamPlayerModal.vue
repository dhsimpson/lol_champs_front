<template>
  <ul class="team-list">
    <li v-for="seasonTeam in seasonTeamList" :key="seasonTeam.season">
      <span :class="{active: selectedSeason==seasonTeam.season}" @click.stop="selectedSeason=seasonTeam.season">
        {{seasonTeam.season}}
      </span>
      <ul :class="{'player-list':true, active: selectedSeason==seasonTeam.season}">
        <li @click="selectTeamAndPlayer(seasonTeam.season, team)" v-for="team in seasonTeam.teams" :key="team">
          {{team}}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selectedSeason: ''
      }
  },
  computed: {
    ...mapGetters({
      seasonTeamList: 'GET_SEASON_TEAM_LIST'
    })
  },
  mounted() {
    this.selectedSeason = this.seasonTeamList[0].season;
  },
  methods: {
    selectTeamAndPlayer(team, player){
      this.$store.commit('SET_QUERY_PARAMS', {team, player});
      //TODO : query params commit 및 dispatch 추가
      // alert(name)
    }
  }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;
$team-name-width: 70px;

.team-list {
  width: 200px;
  height: 200px;
  background-color: $color-button;
  z-index: 1;
  position: absolute;
  top: 100%;
  color: black;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: scroll;
  li {
    display: flex;
    span {
      width: $team-name-width;
      height: $item-height;
      line-height: $item-height;
      overflow: hidden;
    }
    span.active {
      background-color: white;
    }
    .player-list {
      width: 200 - $team-name-width;
      display: none;
      padding: 0;
      margin: 0;
      list-style: none;
      position: absolute;
      left: 70px;
      top: 0;
      li {
        padding: 0 0 0 10px;
        height: $item-height;
        line-height: $item-height;
        border-bottom: 0.1px solid $color-light-gray;
        box-sizing: content-box;
      }
    }
    .player-list.active {
      display: block;
      background-color: white;
    }
    
  }

}
</style>