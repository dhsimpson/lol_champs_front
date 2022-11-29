<template>
    <div>
        <kakao-o-auth-component/>
        <kakao-o-auth-result-component/>
    </div>
</template>

<script>
import KakaoOAuthComponent from "@/components/auth/KakaoOAuthComponent.vue"
import KakaoOAuthResultComponent from '@/components/auth/KakaoOAuthResultComponent.vue'


export default {
    components: { 
        KakaoOAuthComponent, 
        KakaoOAuthResultComponent 
    }
    
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
</style>
