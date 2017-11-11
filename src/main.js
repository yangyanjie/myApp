import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex/index'
import FastClick from 'fastclick';
import Vuex from 'vuex';
import VueAwesomeSwiper from "vue-awesome-swiper";
// import VueScroll from 'vue-iscroll-view'
import VueScroller from 'vue-scroller'
import axios from "axios"

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

