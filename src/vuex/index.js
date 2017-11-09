import Vuex from 'vuex'
import Vue  from 'vue'
import palace from '../pages/palace/module.js'
import home from '../pages/home/module'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: home,
        palace: palace
    }
})

