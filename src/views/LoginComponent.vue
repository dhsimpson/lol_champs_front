<template>
    <kakao-o-auth-component/>
    <kakao-o-auth-result-component/>
</template>

<script>
import KakaoOAuthComponent from "@/components/auth/KakaoOAuthComponent.vue"
import KakaoOAuthResultComponent from '@/components/auth/KakaoOAuthResultComponent.vue'


export default {
    components: { KakaoOAuthComponent, KakaoOAuthResultComponent }
    
}
</script>

<style lang="scss" scoped>

</style>
