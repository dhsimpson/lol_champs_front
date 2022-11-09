<template>
    <div>
        <i class="fa-solid fa-square-share-nodes" @click="copyUrl"></i>
    </div>
</template>

<script>
export default {
    methods: {
        async copyUrl(e) {
            const textArea = document.createElement("textarea");
            textArea.value = window.location.href;
            e.target.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                alert('클립보드에 복사되었습니다!')
            } catch (err) {
                console.error('Unable to copy to clipboard', err);
            }
            e.target.removeChild(textArea);
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