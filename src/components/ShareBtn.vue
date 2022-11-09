<template>
    <div>
        <i class="fa-solid fa-square-share-nodes" @click="copyUrl"></i>
    </div>
</template>

<script>
export default {
    methods: {
        async copyUrl() {
            navigator.clipboard.writeText(window.location.href);
            await navigator.clipboard.readText();
            alert('클립보드에 복사되었습니다.')
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    position: sticky;
    width: 100%;
    right: 30px;
    bottom: 70px;
    i {
        display: inline-block;
        position: absolute;
        font-size: 50px;
        right: 10px;
    }
}
// i {
//     font-size: 40px;
//     position: sticky;
//     bottom: 15px;
//     width: 100%;
//     right: 30px;
//     display: inline-block;
//     // text-align: end;
// }
</style>