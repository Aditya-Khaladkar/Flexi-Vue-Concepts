import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListRendering.vue'
import WatcherView from '../views/Watcher.vue'
import ComputedView from '../views/ComputedProperty.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: WatcherView
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
