<template>
  <header-component/>
  <banner-component/>
  <video-component v-if="selectedVideo"/>
  <search-component/>
  <video-list-component/>
  <footer-component/>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import VideoComponent from './components/VideoComponent.vue'
import VideoListComponent from './components/VideoListComponent.vue'
import { mapGetters } from 'vuex'

export default {
  components: { 
    HeaderComponent,
    BannerComponent,
    VideoComponent,
    SearchComponent,
    VideoListComponent,
    FooterComponent
  },
  name: 'App',
  created() {
    this.$store.dispatch('FETCH_VIDEO_LIST');
    this.$store.dispatch('FETCH_SEASON_TEAM_LIST');
    this.$store.dispatch('FETCH_SORT_LIST');
    this.$store.dispatch('FETCH_SEASON_LIST');
    
  },
  computed: {
    ...mapGetters({
        selectedVideo: 'GET_SELECTED_VIDEO'
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: $represent-color;
}
</style>