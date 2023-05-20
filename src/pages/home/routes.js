import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/Config'
import { routes as perfil } from '@/pages/Perfil'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home'),
    children: [
      ...objetivos,
      ...criterios,
      ...perfil
    ]
  },
]