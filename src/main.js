import { createApp } from 'vue'
import store from './store';
import router from './router';
import App from './App.vue'
import VueCryptojs from 'vue-cryptojs'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCryptojs);
app.mount('#app');
