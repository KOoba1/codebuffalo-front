import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Weekly from './views/Weekly.vue'
import Helpmechoose from './views/Helpmechoose.vue'

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
      path: '/Helpmechoose',
      name: 'Helpmechoose',
      component: Helpmechoose
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
