<template>
    <i class="fa-sharp fa-solid fa-arrow-rotate-right refresh-button" @click="deleteTeamAndPlayer()"></i>
  
</template>

<script>
export default {
    methods: {
        deleteTeamAndPlayer() {
            this.$store.commit('MAIN/RESET_QUERY_PARAMS');
            this.$store.dispatch('MAIN/FETCH_TEAM_LIST');
            this.$store.dispatch('MAIN/FETCH_SEASON_LIST');
        }
    }
}
</script>

<style lang="scss" scoped>
.refresh-button {
    font-size: 25px;
}
</style>