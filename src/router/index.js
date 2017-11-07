import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace/Palace'
import Tour from "@/pages/list/OneDayList"

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
      component: Home
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    }
  ]
})
