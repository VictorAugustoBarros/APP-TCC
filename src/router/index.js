// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'App',
        component: () => import('@/App.vue'),
      },
    ]
  },{
    path: '/home',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
      },
    ]
  },{
    path: '/perfil',
    children: [
      {
        path: '',
        name: 'Perfil',
        component: () => import('@/views/Perfil.vue'),
      },
    ]
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
  },{
    path: '/login',
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
