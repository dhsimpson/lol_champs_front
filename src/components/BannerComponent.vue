<template>
<!--1 안 : 현재 진행 중인 리그 이미지를 보여주고, 클릭하면 LCK 유튜브 채널로 들어간다-->
<!--2 안 : 전체 리그 이미지를 swiper로 보여주고, 클릭하면 LCK 유튜브 채널로 들어간다-->
<!--3 안 : 롤 팀 이미지를 swiper로 보여주고, 클릭하면 해당 팀 유튜브 채널로 들어간다(그럼 우리 서비스 에서도 팀 채널 동영상 노출까지 해야 하나?)-->
    <img class="banner-image" src="@/assets/images/LCK_Logo_Black.jpeg" alt="lck logo"/>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-image {
    width: 100%;
    padding: 10px 0;
}
@media screen and (min-width: 700px) {
    .banner-image {
        display: none;
    }
}
</style>