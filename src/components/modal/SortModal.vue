<template>
  <ul>
    <li :class="{isActive: sort.isActive}" @click.stop="selectSort(sort)" v-for="sort in sortList" :key="sort">
      {{sort.name}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import atomicModal from '@/composables/atomicModal';

export default {
  computed: {
    ...mapGetters({
      sortList: 'GET_SORT_LIST'
    })
  },
  setup() {
      const {closeAllModal} = atomicModal();
      return {closeAllModal};
  },
  methods: {
    selectSort(sort){
      this.$store.commit('SET_SORT_OPTION', sort);
      this.closeAllModal();
    }
  }
}
</script>

<style lang="scss" scoped>
$item-height: 40px;

ul {
    width: 130px;
    height: 150px;
    background-color: $color-button;
    position: absolute;
    top: 100%;
    right: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: scroll;
    li {
        height: $item-height;
        line-height: $item-height;
        color: white;
        border-bottom: 0.1px solid $color-light-gray;
    }
    li.isActive {
        background-color: white;
        color: $font-active-color-button;
    }
}
</style>