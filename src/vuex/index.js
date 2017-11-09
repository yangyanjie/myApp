import Vuex from 'vuex';
import Vue from 'vue';
import home from '../pages/home/module'
<<<<<<< HEAD
import list from '../pages/list/module'

=======
import activity from '../pages/activity/module'
>>>>>>> origin/master
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: home,
<<<<<<< HEAD
        list: list
=======
        activity:activity
>>>>>>> origin/master
    }
})

