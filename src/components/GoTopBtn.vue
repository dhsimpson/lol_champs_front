<template>
    <i v-show="showGoTop" class="fa-solid fa-circle-arrow-up" @click="goTop()"></i>
</template>

<script>

export default {
    data() {
        return {
            showGoTop: false
        }
    },
    methods: {
        goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {this.showGoTop = window.scrollY > 400 || 0;})
    }
}
</script>

<style lang="scss" scoped>
i {
    font-size: 40px;
    position: sticky;
    bottom: 15px;
    width: 100%;
    text-align:center;
}
</style>