<template>
    <div class="filter-wrapper">
        <filter-component/>
    </div>
    <div class="filter-wrapper">
        <win-lose-filter-component/>
        <search-button-component/>
    </div>
</template>

<script>
import FilterComponent from './searchComponents/FilterComponent.vue'
import SearchButtonComponent from './searchComponents/SearchButtonComponent.vue'
import WinLoseFilterComponent from './searchComponents/WinLoseFilterComponent.vue'
export default {
  components: { 
    FilterComponent,
    WinLoseFilterComponent,
    SearchButtonComponent,
  },
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 20px 20px;
  font-weight: $font-weight-huge;
  font-size: $font-small;
}
</style>