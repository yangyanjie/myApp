import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Tour from "@/pages/list/OneDayList"
import Search from "@/pages/search/Search"

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
    },{
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
