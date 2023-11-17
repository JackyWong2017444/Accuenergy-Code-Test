import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CurrentLocation from '../views/CurrentLocation.vue'
import SearchLocation from '../views/SearchLocation.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/currentLocation',
    name: 'currentLocation',
    component: CurrentLocation
  },
  {
    path: '/searchLocation',
    name: 'searchLocation',
    component: SearchLocation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router