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
import BannerComponent from '@/components/BannerComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import VideoComponent from '@/components/VideoComponent.vue'
import VideoListComponent from '@/components/VideoListComponent.vue'
import GoTopBtn from '@/components/GoTopBtn.vue'
import ShareBtn from '@/components/ShareBtn.vue'
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