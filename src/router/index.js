import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Activity from '@/pages/activity/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    } 
    
  ]
})
