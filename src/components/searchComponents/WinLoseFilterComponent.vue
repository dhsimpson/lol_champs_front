<template>
    <div class="win-lose-wrapper">
        <div class="win-lose-container win active">
            <input type="radio" id="win"><label for="win">승리한 경기</label>
        </div>
        <div class="win-lose-container lose">
            <input type="radio" id="win"><label for="win">패배한 경기</label>
        </div>
    </div>
</template>

<script>
export default {

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
        color: $fonr-color-button;
        background-color: $color-button;
    }
}



</style>