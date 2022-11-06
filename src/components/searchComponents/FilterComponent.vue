<template>
    <div class="filter-container">
      <team-and-player-filter-component/>
    </div>

</template>

<script>
import TeamAndPlayerFilterComponent from './TeamAndPlayerFilterComponent.vue'
export default {
  components: { 
    TeamAndPlayerFilterComponent
  },

}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
}
</style>