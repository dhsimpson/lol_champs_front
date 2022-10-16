<template>
  <ul>
    <li @click="selectSort(sort)" v-for="sort in sortList" :key="sort">
      {{sort}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      sortList: 'GET_SORT_LIST'
    })
  },
  methods: {
    selectSort(sort){
      this.$store.commit('SET_SORT_OPTION', sort);
    }
  }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;

ul {
    width: 130px;
    height: 150px;
    background-color: white;
    position: absolute;
    top: 100%;
    right: 0;
    color: black;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: scroll;
    li {
      height: $item-height;
      line-height: $item-height;
      border-bottom: 0.1px solid $color-light-gray;
    }
}
</style>