import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import People from './views/People.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/history',
      name: 'history',
      component: Home
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      component: Home
    }
  ]
})
