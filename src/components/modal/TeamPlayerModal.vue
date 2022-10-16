<template>
  <ul class="team-list">
    <li v-for="team in teamList" :key="team.teamName">
      <span :class="{active: selectedTeamName==team.teamName}" @click.stop="selectedTeamName=team.teamName">
        {{team.teamName}}
      </span>
      <ul :class="{'player-list':true, active: selectedTeamName==team.teamName}">
        <li @click="alertPlayer(team.teamName, player.playerName)" v-for="player in team.playerList" :key="player.playerName">
          {{player.playerName}}
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
      selectedTeamName: ''
      }
  },
  computed: {
    ...mapGetters({
      teamList: 'GET_TEAM_LIST'
    })
  },
  mounted() {
    this.selectedTeamName = this.teamList[0].teamName;
  },
  methods: {
    alertPlayer(team, player){
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