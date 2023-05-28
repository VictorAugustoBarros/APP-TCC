export default [
    {
        path: '/objetivos',
        name: 'objetivos',
        component: () => import('./Objetivos'),
    },
    {
        path: '/objetivos/detalhes',
        name: 'objetivos.detalhes',
        component: () => import('./ObjetivosEdit')
    }
]