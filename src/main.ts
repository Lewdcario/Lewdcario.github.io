import { createApp } from '@vue/compat';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueVirtualScroller from 'vue-virtual-scroller';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import './assets/main.css';

const app = createApp(App);

app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(VueVirtualScroller);
app.use(router);

app.mount('#app');
