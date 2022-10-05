<template>
  <div class="count-and-sort-wrapper">
    <div class="count-and-sort-container">
      <span>10 개의 경기 동영상</span>
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
  height: 60px;
  // background-color: $color-very-light-gray;
  .count-and-sort-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    span {
      color: $color-very-heavy-gray;
      font-weight: $font-weight-huge;
      height: auto;
      line-height: 2;
    }
    button {
      width: 100px;
      height: $button-medium-height;
      border-radius: $border-radious/2;
      border-width: 0.5px;
      border-color:  $color-light-gray;
      background-color: $color-button;
      color: $fonr-color-button;
      font-weight: $font-weight-huge;
      font-size: $font-small;
    }
  }
}
</style>