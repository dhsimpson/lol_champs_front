<template>
  <header-component/>
  <search-component/>
  <video-list-component/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import VideoListComponent from './components/VideoListComponent .vue'

export default {
  components: { 
    HeaderComponent,
    SearchComponent,
    VideoListComponent
  },
  name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
  background-color: $represent-color;
}
</style>