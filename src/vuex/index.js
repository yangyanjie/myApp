import Vuex from 'vuex'
import Vue  from 'vue'
import palace from '../pages/palace/module'
import home from '../pages/home/module'
import list from '../pages/list/module'
import activity from '../pages/activity/module'
import palacedetail from '../pages/palacedetail/module'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: home,
        list: list,
        activity:activity,
        palace: palace,
        palacedetail: palacedetail
    }
})

