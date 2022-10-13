import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default function atomicModal(_modalName) {
    const store = useStore();
    
    let showModal = ref(false);
    // const modalName = _modalName;
    const currModalName = computed(() => {
        return store.getters['GET_OPEN_ATOMIC_MODAL_NAME'];
    });

    const setModalName = () => {
        store.commit('SET_OPEN_ATOMIC_MODAL_NAME', _modalName)
    }
    const isShowModal = () => currModalName.value==_modalName;

    return {showModal, currModalName, setModalName, isShowModal};
}