import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ViewCities from '@/views/Cities'
import ViewCitiesCreate from '@/views/CitiesCreate'
import ViewCitiesEdit from '@/views/CitiesEdit'
import ViewOperations from '@/views/OperationsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cities',
    name: 'view.cities',
    component: ViewCities
  },
  {
    path: '/cities/new',
    name: 'view.cities.create',
    component: ViewCitiesCreate
  },
  {
    path: '/cities/edit',
    name: 'view.cities.edit',
    component: ViewCitiesEdit
  },
  {
    path: '/operations',
    name: 'view.operations',
    component: ViewOperations
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
