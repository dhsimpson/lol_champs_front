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
@media screen and (min-width: 700px) {
    .filter-container {
        width: 400px;
        justify-content: flex-start;
    }
}
</style>