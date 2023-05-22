import { routes as feed } from '@/pages/feed'

export default [
  {
    path: '/',
    name: 'app',
    component: () => import('@/App'),
    children: [
      ...feed,
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
