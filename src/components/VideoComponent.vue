<template>
  <iframe :src="`https://www.youtube.com/embed/${selectedVideo.video_id}`" 
        :title="selectedVideo.title" frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  <div>{{selectedVideo.title}}</div>
  <div>{{selectedVideo.views}}</div>
  <div>{{selectedVideo.uploadDate}}</div>
  <div>{{selectedVideo.description}}</div> <!-- 타임라인 이나 풀영상 보기 주소(아프리카 등등) - 하이퍼링크 처리 -->
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
    height: 250px;
    position: sticky;
    top: 0;
    z-index: 10;
}
</style>