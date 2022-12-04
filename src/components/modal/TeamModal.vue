<template>
    <ul :class="['team-list']">
        <li v-for="team in teamList" :key="team">
            <span :class="{active: team==selectedTeam}" @click.stop="selectTeam(team)">
                {{team}}
            </span>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
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
        ...mapGetters({
            teamList: 'MAIN/GET_TEAM_LIST',
            selectedTeam: 'MAIN/GET_SELECTED_TEAM'
        })
    },
    methods: {
        selectTeam(team) {
            this.$store.commit('MAIN/SET_QUERY_PARAMS', {team});
            this.$store.dispatch('MAIN/FETCH_SEASON_LIST', team);
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
      color: $font-color-button;
    }
    span.active {
      background-color: white;
      color: $font-active-color-button;
    }
  }

}
</style>