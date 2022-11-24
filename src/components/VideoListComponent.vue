<template>
  <count-and-sort-component class="count-and-sort" sortModalName="sortModal-mw"/>
  <list-component :chunkSize="2" deviceType="mw"/>
  <list-component :chunkSize="4" deviceType="pc"/>
</template>

<script>
import CountAndSortComponent from './videoListComponents/CountAndSortComponent.vue'
import ListComponent from './videoListComponents/ListComponent.vue'
export default {
  components: { 
    CountAndSortComponent,
    ListComponent
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 700px) {
    .count-and-sort {
        display: none;
    }
}
</style>