import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/demo/canvas-coord-flip',
    name: 'Canvas坐标翻转',
    component: () => import('../demos/01-junior-math/canvas-coord-flip/Demo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
