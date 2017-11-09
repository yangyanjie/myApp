import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Tour from "@/pages/list/OneDayList"
import Details from '@/pages/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    },
    {
      path: '/tour/details/:id?',
      name: 'details',
      component: Details
    }
  ]
})
