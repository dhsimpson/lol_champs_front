<template>
  <button @click="searchVideoList"><i class="fa-sharp fa-solid fa-magnifying-glass" ></i> 검색</button>
</template>

<script>
export default {
    methods: {
        searchVideoList() {
            this.$store.dispatch('FETCH_VIDEO_LIST', this.$store.getters['GET_QUERY_PARAMS']);
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 80px;
    height: $button-medium-height;
    border-radius: calc($border-radious / 2);
    border-width: 0.5px;
    border-color:  $color-light-gray;
    background-color: $color-button;
    color: $fonr-color-button;
    font-weight: $font-weight-huge;
    font-size: $font-small;
}
</style>