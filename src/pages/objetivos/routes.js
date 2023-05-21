export default [
  {
    path: 'objetivos',
    name: 'home.objetivos',
    component: () => import('./Objetivos'),    
  },
  {
    path: 'objetivos/detalhes',
    name: 'home.objetivos.detalhes',
    component: () => import('./ObjetivosDetalhes'),
  }
]