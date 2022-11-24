<template>
    <div class="filter-wrapper-container">
        <div class="filter-wrapper">
            <filter-component/>
        </div>
        <div class="filter-wrapper">
            <win-lose-filter-component/>
            <count-and-sort-component class="count-and-sort" sortModalName="sortModal-pc"/>
            <reset-filter-btn class="reset-filter-btn"/>
            <search-button-component/>
        </div>
    </div>
</template>

<script>
import FilterComponent from './searchComponents/FilterComponent.vue'
import ResetFilterBtn from './searchComponents/ResetFilterBtn.vue'
import SearchButtonComponent from './searchComponents/SearchButtonComponent.vue'
import WinLoseFilterComponent from './searchComponents/WinLoseFilterComponent.vue'
import CountAndSortComponent from './videoListComponents/CountAndSortComponent.vue'

export default {
  components: { 
    FilterComponent,
    WinLoseFilterComponent,
    SearchButtonComponent,
    CountAndSortComponent,
    ResetFilterBtn
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
.count-and-sort {
    display: none;
}

@media screen and (min-width: 700px) {
    .filter-wrapper-container {
        display: flex;
        justify-content: center;
        border-top: 0.5px solid $color-light-gray;
        background-color: $represent-color;
        box-shadow: 0 4px 5px $color-light-gray;
        .filter-wrapper {
            padding-left: 3px;
            padding-right: 3px;
        }
    }
    .count-and-sort {
        display: flex;
    }
    .reset-filter-btn {
        display: block;
        margin-right: 20px;
    }
}
</style>