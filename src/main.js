import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store.js';
import router from './router/router.js'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
