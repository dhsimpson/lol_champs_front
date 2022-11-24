<template>
  <ol :class="deviceType" v-for="(chunk, idx) in videoList" :key="idx" @wheel="detectPagination" @touchmove="detectPagination">
    <li v-for="(video, chunkIdx) in chunk" :key="chunkIdx">
      <button @click="showVideo(video)">
        <img :src="video.Thumbnails?.High.URL" :alt="video.Title">
        <h4>{{video.Title}}</h4>
        <div>
          <!-- <span class="views">{{filterCounts(video.views)}} 회</span>
          <span class="upload-date">&#183;{{filterUploadDate(video.uploadDate)}}</span>
          <span class="likes">&#183;<i class="fa-solid fa-heart"></i>{{filterCounts(video.likes)}}</span> -->
        </div>
      </button>
    </li>
  </ol>
  <div :class="['videoListLoading', deviceType]" v-if="videoList.length<1">
    데이터를 로딩 중입니다!!
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showModal: false,
    }
  },
  props: ['chunkSize', 'deviceType'],
  computed: {
    ...mapGetters({
        isLoading: 'GET_IS_LOADING'
    }),
    videoList() {
      const tempList = this.$store.getters['GET_VIDEO_LIST'];
      return tempList.reduce((acc, curr, i) => {
        if(i==0) {
          return [[curr]];
        }
        if(!(i%this.chunkSize)) {
          acc.push([curr]);
          return acc;
        }
        acc[acc.length-1].push(curr);
        return acc;
      }, []);
    }
  },
  methods: {
    filterCounts(counts) {
      if(counts >= 10000) {
        return `${counts/10000}만`;
      }
      return `${counts}`;
    },
    filterUploadDate(uploadDate) {
      const today = dayjs();
      const uploadDt = dayjs(uploadDate);
      if(today.diff(uploadDt, 'y') > 0) return `${today.diff(uploadDt, 'y')}년 전`;
      if(today.diff(uploadDt, 'M') > 0) return `${today.diff(uploadDt, 'M')}개월 전`;
      if(today.diff(uploadDt, 'd') > 0) return `${today.diff(uploadDt, 'd')}일 전`;
      return '오늘';
    },
    showVideo(video) {
      this.$store.commit('SET_SELECTED_VIDEO', video);
    },
    detectPagination() {
        if((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight && !this.isLoading) {
            this.$store.commit('TOGGLE_IS_LOADING', true);
            this.$store.dispatch('ADD_VIDEO_LIST', this.$route.query);
        }
    }
  }
}

</script>

<style lang="scss" scoped>
ol {
  margin: 10px 20px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  li {
    list-style: none;
    width: 45%;
    button {
      padding: 0;
      background-color: white;
      border: 0;
      text-align: start;
      img {
        width: 100%;
      }
      h4 {
        margin: 2px 0;
      }
      div {
        font-size: $font-very-small;
        color: $color-very-heavy-gray;
      }
    }

  }
}
.videoListLoading {
    width: 100%; 
    text-align: center;
    padding: 150px 0;
    font-size: 30px;
    font-weight: $font-weight-huge;
    color: $color-very-heavy-gray;
}

@media screen and (max-width: 700px) {
    .pc {
        display: none;
    } 
}
@media screen and (min-width: 700px) {
    .mw {
        display: none;
    } 
    ol {
        li {
            width: 30%;
            padding: 10px;
        }
    }
}
</style>