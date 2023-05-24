export default [
    {
        path: '/objetivos',
        name: 'feed.objetivos',
        component: () => import('./Objetivos'),
    },
    {
        path: '/objetivos/detalhes',
        name: 'feed.objetivos.detalhes',
        component: () => import('./ObjetivosEdit')
    }
]