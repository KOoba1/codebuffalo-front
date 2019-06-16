import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Weekly from './views/Weekly.vue'
import CostFilter from './views/CostFilter.vue'
import ParticipantFilter from './views/ParticipantFilter.vue'
import CategoryFilter from './views/CategoryFilter.vue'
import Events  from './views/Events.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
        {
      path: '/Weekly',
      name: 'Weekly',
      component: Weekly
    },
    {
      path: '/CostFilter',
      name: 'CostFilter',
      component: CostFilter
    },
    {
      path: '/ParticipantFilter',
      name: 'ParticipantFilter',
      component: ParticipantFilter
    },
    {
      path: '/CategoryFilter',
      name: 'CategoryFilter',
      component: CategoryFilter
    },
    {
      path: '/Events/:category',
      name: 'Events',
     component: Events
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
