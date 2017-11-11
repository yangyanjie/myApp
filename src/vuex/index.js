import Vuex from 'vuex';
import Vue from 'vue';
import home from '../pages/home/module'
import search from '../pages/search/module'
import list from '../pages/list/module'
import activity from '../pages/activity/module'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: home,
        search: search,
        list: list,
        activity:activity
    }
})

