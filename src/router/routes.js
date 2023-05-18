import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'

export default [
  ...auth,
  ...home,
  {
    path: '/:pathMatch(.*)',
    name: 'Login',
    component: () => import('../pages/404.vue'),
  }
]
