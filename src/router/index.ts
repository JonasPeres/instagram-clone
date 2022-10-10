import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
  ],
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
