<template>
    <ul :class="{'player-list':true, active: true}">
        <li v-for="team in teamList" :key="team" @click="selectTeam(team.name)">
            {{team.name}}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            season: ''
        }
    },
  computed: {
    teamList() {
        const seasonTeamList = this.$store.getters['GET_SEASON_TEAM_LIST'];
        const teamList = seasonTeamList.filter(seasonTeam => {
            if(seasonTeam.isActive){
                this.season = seasonTeam.season;
            }
            return seasonTeam.isActive;
        })
        console.log('teamList')
        console.log(teamList)
        return teamList[0].teams;
    }
  },
  methods: {
      selectTeam(team) {
          this.$store.commit('SET_SELECTED_TEAM', {season: this.season, name: team});
          this.$store.commit('SET_QUERY_PARAMS', {team});
      }
  }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;
$team-name-width: 70px;

.team-list {
  width: 250px;
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
      width: 100%;
      height: $item-height;
      line-height: $item-height;
      overflow: hidden;
    }
    span.active {
      background-color: white;
    }
    // .player-list {
    //   width: 200 - $team-name-width;
    //   display: none;
    //   padding: 0;
    //   margin: 0;
    //   list-style: none;
    //   position: absolute;
    //   left: 70px;
    //   top: 0;
    //   li {
    //     padding: 0 0 0 10px;
    //     height: $item-height;
    //     line-height: $item-height;
    //     border-bottom: 0.1px solid $color-light-gray;
    //     box-sizing: content-box;
    //   }
    // }
    // .player-list.active {
    //   display: block;
    //   background-color: white;
    // }
    
  }

}
</style>