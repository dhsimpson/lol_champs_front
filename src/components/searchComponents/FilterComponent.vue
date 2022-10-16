<template>
    <div class="filter-container">
      <team-and-player-filter-component/>
      <win-lose-filter-component/>
    </div>

</template>

<script>
import TeamAndPlayerFilterComponent from './TeamAndPlayerFilterComponent.vue'
import WinLoseFilterComponent from './WinLoseFilterComponent.vue'
export default {
  components: { 
    TeamAndPlayerFilterComponent, 
    WinLoseFilterComponent
  },

}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  position: relative;
}
</style>