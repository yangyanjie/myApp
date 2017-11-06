import Vuex from 'vuex'
import Vue  from 'vue'
import palace from '../pages/palace/module.js'
  	
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		palace: palace
	}
})