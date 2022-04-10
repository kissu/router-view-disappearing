import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
]

const router = new createRouter({
  history,
  routes,
})

export default router
