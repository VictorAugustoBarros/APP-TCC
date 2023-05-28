import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/criterios'
import { routes as perfil } from '@/pages/perfil'
import { routes as feedbacks } from '@/pages/feedbacks'
import { routes as evolucao } from '@/pages/evolucao'


export default [
  {
    path: '/',
    name: 'app',
    component: () => import('@/App'),
  },
  {
    path: '/app',
    name: 'appWeb',
    component: () => import('@/AppWeb'),
    children: [
      ...objetivos,
      ...criterios,
      ...perfil,
      ...feedbacks,
      ...evolucao,
    ]
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/pages/404'),
  },
]
