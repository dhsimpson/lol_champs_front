<template>
    <div class="filter-container">
      <season-team-filter-component/>
    </div>

</template>

<script>
import SeasonTeamFilterComponent from './SeasonTeamFilterComponent.vue'
export default {
  components: { 
    SeasonTeamFilterComponent
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