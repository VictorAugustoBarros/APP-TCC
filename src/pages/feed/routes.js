import { routes as login } from '@/pages/login'
import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/criterios'
import { routes as perfil } from '@/pages/perfil'

export default [
  {
    path: '/feed',
    name: 'app.feed',
    component: () => import('./Feed'),
    children: [
      ...login,
      ...objetivos,
      ...criterios,
      ...perfil,
    ]
  }
]