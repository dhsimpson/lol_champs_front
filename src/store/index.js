import { createStore } from "vuex";
import {MAIN} from "@/store/main";
import {USER} from "@/store/user";

export default createStore({
    modules: {
        MAIN,
        USER
    }
})