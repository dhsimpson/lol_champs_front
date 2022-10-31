<template>
  <div class="count-and-sort-wrapper">
    <div class="count-and-sort-container">
      <span>{{videoList?.length ?? 0}} 개의 경기 동영상</span>
      <button id="sort-button" @click="setModalName()">{{sortOption}}</button>
      <teleport v-if="isShowModal()" to="#sort-button" :disabled="false">
        <sort-modal/>
      </teleport>
    </div>
  </div>
</template>

<script>
import SortModal from '@/components/modal/SortModal.vue'
import atomicModal from '@/composables/atomicModal';
import { mapGetters } from 'vuex';

export default {
  components: { SortModal },
  setup() {
      const {showModal, currModalName, setModalName, isShowModal} = atomicModal('sortModal');
      return {showModal, currModalName, setModalName, isShowModal};
  },
  computed: {
    ...mapGetters({
      videoList: 'GET_VIDEO_LIST',
      sortOption: 'GET_SORT_OPTION'
    })
  }
}
</script>

<style lang="scss" scoped>
.count-and-sort-wrapper {
  height: 60px;
  .count-and-sort-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    span {
      color: $color-very-heavy-gray;
      font-weight: $font-weight-huge;
      height: auto;
      line-height: 2;
    }
    button {
      width: 100px;
      height: $button-medium-height;
      border-radius: calc($border-radious / 2);
      border-width: 0.5px;
      border-color:  $color-light-gray;
      background-color: $color-button;
      color: $fonr-color-button;
      font-weight: $font-weight-huge;
      font-size: $font-small;
      position: relative;
    }
  }
}
</style>