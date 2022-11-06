<template>
  <ul class="season-list">
    <li v-for="seasonTeam in seasonTeamList" :key="seasonTeam.season">
      <span :class="{active: seasonTeam.isActive}" @click.stop="selectSeason(seasonTeam.season)">
        {{seasonTeam.season}}
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import atomicModal from '@/composables/atomicModal';

export default {
  computed: {
    ...mapGetters({
      seasonTeamList: 'GET_SEASON_TEAM_LIST'
    })
  },
  setup() {
      const {closeAllModal} = atomicModal();
      return {closeAllModal};
  },
  methods: {
    selectSeason(season) {
        this.$store.commit('SET_SELECTED_SEASON', season);
        this.$store.commit('SET_QUERY_PARAMS', {season});
        this.closeAllModal();
    }
  }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;
$season-name-width: 70px;

.season-list {
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
  }
}
</style>