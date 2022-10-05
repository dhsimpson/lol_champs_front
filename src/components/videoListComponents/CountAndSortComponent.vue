<template>
  <div class="count-and-sort-wrapper">
    <div class="count-and-sort-container">
      <span>10 개의 검색 결과</span>
      <button>좋아요 많은 순</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.count-and-sort-wrapper {
  height: 40px;
  border-bottom: 1px solid $color-heavy-gray;
  .count-and-sort-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>