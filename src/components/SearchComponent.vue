<template>
<div class="filter-wrapper">
    <filter-component/>
    <search-button-component/>
</div>
</template>

<script>
import FilterComponent from './searchComponents/FilterComponent.vue'
import SearchButtonComponent from './searchComponents/SearchButtonComponent.vue'
export default {
  components: { 
    FilterComponent,
    SearchButtonComponent 
  },
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid $color-heavy-gray;
  padding: 10px 20px;
}
</style>