import Vuex from 'vuex';
import Vue from 'vue';
import home from '../pages/home/module'
import activity from '../pages/activity/module'
import list from '../pages/list/module'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: home,
        activity:activity,
        list: list
    }
})

