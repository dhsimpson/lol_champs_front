<template>
    <div class="iframe-wrapper" id="lck-video-wrapper" tabindex="0">
        <iframe v-if="selectedVideo" :src="`https://www.youtube.com/embed/${selectedVideo.VideoId}`" 
                :title="selectedVideo.title" frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    </div>
    <div v-if="selectedVideo" class="video-info-container">
        <div class="video-info-wrapper">
            <div class="video-title">{{selectedVideo.Title}}</div>
            <div class="views-date-wrapper">
                <span class="views">조회수 : {{filterViews(selectedVideo.Views)}} 회</span>
                <span class="middle-dot"> · </span>
                <span class="date">  업로드 날짜 : {{selectedVideo.Date}}</span>
            </div>
            <!-- <div>{{selectedVideo.Description}}</div> 타임라인 이나 풀영상 보기 주소(아프리카 등등) - 하이퍼링크 처리 -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            selectedVideo: 'GET_SELECTED_VIDEO'
        })
    },
    methods: {
        filterViews(views) {
            if(views > 10000) {
                return `${Math.floor(views/10000)}만`;
            }
            if(views > 1000) {
                return `${Math.floor(views/1000)}천`;
            }
            return views;
        }
    }
}
</script>

<style lang="scss" scoped>
.iframe-wrapper {
    position: sticky;
    top: 0;
    z-index: 10;
    iframe {
        width: 100%;
        height: 250px;
    }
}
.video-title {
    margin: 5px 0;
}
.views-date-wrapper {
    display: flex;
    color: $color-very-heavy-gray;
    font-size: $font-small;
    .views {

    }
    .middle-dot {
        padding: 0 3px;
    }
    .date {

    }
}

@media screen and (min-width: 700px) {
    .iframe-wrapper {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
        iframe {
            width: 80%;
            height: 500px;
        }
    }
    .video-info-container {
        width: 100%;
        display: flex;
        justify-content: center;
        .video-info-wrapper {
            width: 80%;
        }
    }
}
</style>