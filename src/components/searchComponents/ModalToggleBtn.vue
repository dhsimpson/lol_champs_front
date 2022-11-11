<template>
    <button :id="modalName" @click="showModal()">
        <slot name="button"></slot>
    </button>
    <teleport v-if="isShowModal()" :to="`#${modalName}`" :disabled="false">
        <slot name="modal"></slot>
    </teleport>
</template>

<script>
import atomicModal from '@/composables/atomicModal';

export default {
    props: ['modalName'],
    setup(props) {
        const {showModal, currModalName, isShowModal} = atomicModal(props.modalName);
        return {showModal, currModalName, isShowModal};
    },
}
</script>

<style lang="scss" scoped>
button {
    width: 45%;
    min-height: $button-medium-height;
    max-height: 300px;
    border-radius: calc($border-radious / 2);
    border-width: 0.5px;
    border-color:  $color-light-gray;
    background-color: $color-button;
    color: $font-color-button;
    font-weight: $font-weight-huge;
    margin-right: 5px;
    font-size: $font-small;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
</style>