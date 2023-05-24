import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/criterios'
import { routes as perfil } from '@/pages/perfil'


export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import('@/pages/feed/Feed'),
    children: [
      ...objetivos,
      ...criterios,
      ...perfil
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/pages/404'),
  }
]
