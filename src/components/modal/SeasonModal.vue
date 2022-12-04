<template>
  <ul class="season-list">
    <li v-for="season in seasonList" :key="season">
      <span :class="{active: season==selectedSeason}" @click.stop="selectSeason(season)">
        {{season}}
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
      seasonList: 'MAIN/GET_SEASON_LIST',
      selectedSeason: 'MAIN/GET_SELECTED_SEASON',
    })
  },
  setup() {
      const {closeAllModal} = atomicModal();
      return {closeAllModal};
  },
  methods: {
    selectSeason(season) {
        this.$store.commit('MAIN/SET_QUERY_PARAMS', {season});
        this.$store.dispatch('MAIN/FETCH_TEAM_LIST', season);
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
      color: $font-color-button;
    }
    span.active {
      background-color: white;
      color: $font-active-color-button;
    }
  }
}
</style>