// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Perfil',
        component: () => import('@/views/Perfil.vue'),
      },
    ]
  }, {
    path: '/feed',
    children: [
      {
        path: '',
        name: 'Feed',
        component: () => import('@/views/Feed.vue'),
      },
    ],
  },
  {
    path: '/objetivos',
    children: [
      {
        path: '',
        name: 'Objetivos',
        component: () => import('@/views/Objetivos.vue'),
      },
    ],
  },
  {
    path: '/criteriosConfig',
    children: [
      {
        path: '',
        name: 'CriteriosConfig',
        component: () => import('@/views/CriteriosConfig.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
