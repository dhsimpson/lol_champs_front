<template>
    <ul v-if="teamList" :class="['team-list']">
        <li v-for="team in teamList" :key="team">
            <span :class="{active: team.isActive}" @click.stop="selectTeam(team.name)">
                {{team.name}}
            </span>
        </li>
    </ul>
</template>

<script>
import atomicModal from '@/composables/atomicModal';

export default {
    data() {
        return {
            season: ''
        }
    },
    setup() {
        const {closeAllModal} = atomicModal();
        return {closeAllModal};
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
            return teamList[0]?.teams;
        }
    },
    methods: {
        selectTeam(team) {
            this.$store.commit('SET_SELECTED_TEAM', {season: this.season, name: team});
            this.$store.commit('SET_QUERY_PARAMS', {team});
            this.closeAllModal();
        }
    }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;
$team-name-width: 70px;

.team-list {
  width: 200%;
  height: 200px;
  background-color: $color-button;
  z-index: 1;
  position: absolute;
  top: 100%;
  right: 0;
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
  }

}
</style>