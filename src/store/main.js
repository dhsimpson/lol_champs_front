import state from '@/store/main/state';
import getters from '@/store/main/getters';
import mutations from '@/store/main/mutations';
import actions from '@/store/main/actions';

export const MAIN = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}