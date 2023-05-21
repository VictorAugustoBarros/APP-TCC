import { routes as objetivos } from '@/pages/objetivos'
import { routes as criterios } from '@/pages/criterios'
import { routes as perfil } from '@/pages/Perfil'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home'),
    children: [
      ...perfil,
      ...objetivos,
      ...criterios
    ]
  },
]