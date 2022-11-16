<template>
  <header-component/>
  <banner-component/>
  <video-component v-if="selectedVideo"/>
  <search-component/>
  <video-list-component/>
  <footer-component/>
  <go-top-btn/>
  <share-btn/>
</template>

<script>
import BannerComponent from './BannerComponent.vue'
import FooterComponent from './FooterComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import SearchComponent from './SearchComponent.vue'
import VideoComponent from './VideoComponent.vue'
import VideoListComponent from './VideoListComponent.vue'
import GoTopBtn from './GoTopBtn.vue'
import ShareBtn from './ShareBtn.vue'
import { mapGetters } from 'vuex'

export default {
  components: { 
    HeaderComponent,
    BannerComponent,
    VideoComponent,
    SearchComponent,
    VideoListComponent,
    FooterComponent,
    GoTopBtn,
    ShareBtn
  },
  name: 'AppMainComponent',
  created() {
    this.$store.dispatch('FETCH_VIDEO_LIST', this.$route.query);
    this.$store.dispatch('FETCH_SEASON_LIST');
    this.$store.dispatch('FETCH_TEAM_LIST');
    this.$store.dispatch('FETCH_SORT_LIST');
  },
  computed: {
    ...mapGetters({
        selectedVideo: 'GET_SELECTED_VIDEO'
    })
  },
  watch: {
      $route(to, from) {
          if(to.fullPath !== from.fullPath) {
              this.$store.dispatch('FETCH_VIDEO_LIST', to.query);
          }
    //   console.log(this.$route.query)
      }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: $represent-color;
}
</style>