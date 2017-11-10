import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace/Palace'
import Activity from '@/pages/activity/Activity'
import Tour from "@/pages/list/OneDayList"
import Details from '@/pages/details/details'
import PalaceDetail from "@/pages/palacedetail/PalaceDetail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },{
      path: '/palace',
      name: 'palace',
      component: Palace
    },{
      path: '/activity',
      name: 'Activity',
      component: Activity
    },{ 
      path: '/tour',
      name: 'tour',
      component: Tour
    },
    {
      path: '/tour/details/:id?',
      name: 'details',
      component: Details
    }
    ,{ 
      path: '/palacedetail',
      name: 'PalaceDetail',
      component: PalaceDetail
    }
  ]
})
