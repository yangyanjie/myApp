// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick';
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueScroller from 'vue-scroller'
import axios from "axios"

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueScroller);

//vue
/* eslint-disable no-new */
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,//router:router
  template: '<App/>',
  components: { App }
})

