<template>
  <header-component/>
  <banner-component/>
  <search-component/>
  <video-list-component/>
  <footer-component/>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import VideoListComponent from './components/VideoListComponent.vue'

export default {
  components: { 
    HeaderComponent,
    SearchComponent,
    VideoListComponent,
    FooterComponent,
    BannerComponent
  },
  name: 'App',
  created() {
    this.$store.dispatch('FETCH_VIDEO_LIST');
    this.$store.dispatch('FETCH_TEAM_PLAYER_LIST');
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: $represent-color;
}
</style>