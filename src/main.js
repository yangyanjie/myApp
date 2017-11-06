import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import FastClick from 'fastclick';
import VueAwesomeSwiper from "vue-awesome-swiper";
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);


new Vue({
  el: '#app',
  router,//router:router
  store,
  template: '<App/>',
  components: { App }
})
