import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import People from './views/People.vue'
import PersonInfo from './views/PersonInfo.vue'
import History from './views/History.vue'
import Curiosities from './views/Curiosities.vue'

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
      path: '/people/:id?',
      name: 'people',
      component: People
    },
    {
      path: '/person/:id',
      name: 'person',
      component: PersonInfo
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      component: Curiosities
    }
  ]
})
