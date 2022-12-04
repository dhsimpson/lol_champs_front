import { computed } from 'vue';
import { useStore } from 'vuex';

export default function atomicModal(_modalName) {
    const store = useStore();
    
    const currModalName = computed(() => {
        return store.getters['MAIN/GET_OPEN_ATOMIC_MODAL_NAME'];
    });

    const showModal = () => {
        store.commit('MAIN/SET_OPEN_ATOMIC_MODAL_NAME', _modalName)
    }

    const closeAllModal = () => {
        store.commit('MAIN/SET_OPEN_ATOMIC_MODAL_NAME', '')
    }

    const isShowModal = () => currModalName.value==_modalName;

    return {showModal, currModalName, isShowModal, closeAllModal};
}