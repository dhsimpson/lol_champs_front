<template>
    <div class="win-lose-wrapper">
        <div :class="['win-lose-container', 'win', {active: winLose==='win'}]">
            <input v-model="winLoseVal" type="radio" id="win" value="win"><label for="win">승리한 경기</label>
        </div>
        <div :class="['win-lose-container', 'lose', {active: winLose==='lose'}]">
            <input v-model="winLoseVal" type="radio" id="lose" value="lose"><label for="lose">패배한 경기</label>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            winLoseVal: ''
        }
    },
    computed: {
        ...mapGetters({
            winLose: 'GET_SELECTED_WIN_LOSE'
        })
    },
    watch: {
        winLoseVal(val) {
            this.$store.commit('SET_QUERY_PARAMS', {winLose: val})
        }
    }
}
</script>

<style lang="scss" scoped>
.win-lose-wrapper {
    display: flex;
    height: $button-medium-height;
    .win-lose-container {
        color: black;
        width: 100px;
        border: 1px solid black;
        background-color: $represent-color;
        position: relative;
        text-align: center;
        vertical-align: middle;
        display: flex;
        border-width: 0.5px;
        border-color:  $color-light-gray;
        input {
            visibility: hidden;
            position: absolute;
        }
        label {
            margin: auto;
            font-weight: $font-weight-huge;
        }
    }
    .win {
        border-right: 0;
        border-top-left-radius: calc($border-radious / 2);
        border-bottom-left-radius: calc($border-radious / 2);
    }
    .lose {
        border-left: 0;
        border-top-right-radius: calc($border-radious / 2);
        border-bottom-right-radius: calc($border-radious / 2);
    }
    .active {
        color: $font-color-button;
        background-color: $color-button;
    }
}



</style>