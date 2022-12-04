import state from '@/store/user/state';
import getters from '@/store/user/getters';
import mutations from '@/store/user/mutations';
import actions from '@/store/user/actions';

export const USER = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}