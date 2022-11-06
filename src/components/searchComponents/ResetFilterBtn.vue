<template>
    <i class="fa-sharp fa-solid fa-arrow-rotate-right refresh-button" @click="deleteTeamAndPlayer()"></i>
  
</template>

<script>
export default {
    methods: {
        deleteTeamAndPlayer() {
            this.$store.commit('RESET_QUERY_PARAMS');
        }
    }
}
</script>

<style lang="scss" scoped>
.refresh-button {
    font-size: 25px;
}
</style>