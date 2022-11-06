<template>
    <button :id="modalName" @click="setModalName()">
        <slot name="button"></slot>
    </button>
    <teleport v-if="isShowModal()" :to="`#${modalName}`" :disabled="false">
        <slot name="modal"></slot>
    </teleport>
</template>

<script>
import atomicModal from '@/composables/atomicModal';

export default {
    components: {
        
    },
    props: ['modalName'],
    setup(props) {
        const {showModal, currModalName, setModalName, isShowModal} = atomicModal(props.modalName);
        return {showModal, currModalName, setModalName, isShowModal};
    },
}
</script>

<style>

</style>