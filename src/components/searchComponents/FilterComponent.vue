<template>
    <team-and-player-filter-component/>
    <win-lose-filter-component/>
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

</style>