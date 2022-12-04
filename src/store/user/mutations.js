import { useCookies } from "vue3-cookies";

const {cookies} = useCookies();

export default {
    SET_IS_LOGIN : (state, data) => {
        state.isLogin = data;
    },
    SET_THUMBNAIL : (state, data) => {
        state.thumbnail = data;
    },
    SET_LOGOUT (){
        cookies.remove("lck-auth");
        this.commit('USER/SET_IS_LOGIN',false);
        this.commit('USER/SET_THUMBNAIL', '');
    }
}