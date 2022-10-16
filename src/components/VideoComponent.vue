<template>
  <iframe :src="`https://www.youtube.com/embed/${selectedVideo.videoId}`" 
        :title="selectedVideo.title" frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            selectedVideo: 'GET_SELECTED_VIDEO'
        })
    }
}
</script>

<style lang="scss" scoped>
iframe {
    width: 100%;
    height: 200px;
}
</style>