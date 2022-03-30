import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewc from '../views/HomeViewc.vue'
import BakerView from '../views/BakerView.vue'
import LocationView from '../views/LocationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewc
  },
  {
    path: '/baker',
    name: 'baker',
    component: BakerView
  },
  {
    path: '/location',
    name: 'location',
    component: LocationView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
