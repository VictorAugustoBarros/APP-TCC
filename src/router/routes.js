import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/Home'

export default [
  ...auth,
  ...home,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../pages/404.vue'),
  }
]
