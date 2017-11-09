import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex/index'
import FastClick from 'fastclick';
import Vuex from 'vuex';
import VueAwesomeSwiper from "vue-awesome-swiper";
// import VueScroll from 'vue-iscroll-view'

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
// Vue.use(VueScroller);

//vue
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,//router:router
  store,
  template: '<App/>',
  components: { App }
})

