<template>
  <ol v-for="(chunk, idx) in videoList" :key="idx">
    <li v-for="(video, chunkIdx) in chunk" :key="chunkIdx">
      <img :src="video.thumbNail" :alt="video.title">
    </li>
  </ol>
</template>

<script>
// import {mapGetters} from 'vuex';

export default {
  computed: {
    // ...mapGetters({
    //   videoList: 'GET_VIDEO_LIST'
    // }),
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
  mounted() {
    console.log(this.videoList)
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