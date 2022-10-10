<template>
  <ol v-for="(chunk, idx) in videoList" :key="idx">
    <li v-for="(video, chunkIdx) in chunk" :key="chunkIdx">
      <img :src="video.thumbNail" :alt="video.title">
      <h4>{{video.title}}</h4>
      <div>
        <span class="views">조회수 {{filterCounts(video.views)}} 회</span>
        <span class="likes">좋아요 {{filterCounts(video.likes)}} 회</span>
        <span class="upload-date">업로드 날짜 : {{video.uploadDate}}</span>
      </div>
    </li>
  </ol>
</template>

<script>

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
  }
}
</style>