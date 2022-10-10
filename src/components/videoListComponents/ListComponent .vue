<template>
  <ol v-for="(chunk, idx) in videoList" :key="idx">
    <li v-for="(video, chunkIdx) in chunk" :key="chunkIdx">
      <img :src="video.thumbNail" :alt="video.title">
      <h4>{{video.title}}</h4>
      <div>
        <span class="views">{{filterCounts(video.views)}} 회</span>
        <span class="upload-date">&#183;{{filterUploadDate(video.uploadDate)}}</span>
        <span class="likes">&#183;<i class="fa-solid fa-heart"></i>{{filterCounts(video.likes)}}</span>
      </div>
    </li>
  </ol>
</template>

<script>
import dayjs from 'dayjs';

export default {
  computed: {
    videoList() {
      const tempList = this.$store.getters['GET_VIDEO_LIST'];
      const chunkSize = 2;
      return tempList.reduce((acc, curr, i) => {
        if(i==0) {
          return [[curr]];
        }
        if(!(i%chunkSize)) {
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
</style>