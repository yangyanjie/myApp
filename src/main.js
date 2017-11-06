import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex/index'
import FastClick from 'fastclick';
import Vuex from 'vuex';
FastClick.attach(document.body);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,//router:router
  store,
  template: '<App/>',
  components: { App }
})
