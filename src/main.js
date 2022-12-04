import { createApp } from 'vue'
import store from './store';
import router from './router';
import App from './App.vue'
import VueCryptojs from 'vue-cryptojs'

router.beforeEach( () => {
    if(!store.getters['USER/GET_IS_LOGIN']) {
        store.dispatch('USER/FETCH_USER_DATA');
        return;
    }
})

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCryptojs);
app.mount('#app');
