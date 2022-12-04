<template>
  <banner-component/>
  <video-component v-show="selectedVideo"/>
  <search-component/>
  <video-list-component/>
  <go-top-btn/>
  <share-btn/>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import VideoComponent from '@/components/VideoComponent.vue'
import VideoListComponent from '@/components/VideoListComponent.vue'
import GoTopBtn from '@/components/GoTopBtn.vue'
import ShareBtn from '@/components/ShareBtn.vue'
import { mapGetters } from 'vuex'

export default {
  components: { 
    BannerComponent,
    VideoComponent,
    SearchComponent,
    VideoListComponent,
    GoTopBtn,
    ShareBtn
  },
  name: 'AppMainComponent',
  created() {
    this.$store.dispatch('MAIN/FETCH_VIDEO_LIST', this.$route.query);
    this.$store.dispatch('MAIN/FETCH_SEASON_LIST');
    this.$store.dispatch('MAIN/FETCH_TEAM_LIST');
    this.$store.dispatch('MAIN/FETCH_SORT_LIST');
    // this.$store.commit('USER/SET_IS_LOGIN', false);
  },
  computed: {
    ...mapGetters({
        selectedVideo: 'MAIN/GET_SELECTED_VIDEO'
    })
  },
  watch: {
      $route(to, from) {
          if(to.fullPath !== from.fullPath) {
              this.$store.dispatch('MAIN/FETCH_VIDEO_LIST', to.query);
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