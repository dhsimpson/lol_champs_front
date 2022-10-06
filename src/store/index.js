import { createStore } from "vuex";
import state from '@/store/main/state';
import getters from '@/store/main/getters';
import mutations from '@/store/main/mutations';
import actions from '@/store/main/actions';

export default createStore({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})