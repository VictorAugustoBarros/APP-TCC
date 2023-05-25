import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/criterios'
import { routes as perfil } from '@/pages/perfil'
import { routes as feed } from '@/pages/feed'


export default [
  {
    path: '/',
    name: 'app',
    component: () => import('@/App')
  },
  ...objetivos,
  ...criterios,
  ...perfil,
  ...feed,
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
