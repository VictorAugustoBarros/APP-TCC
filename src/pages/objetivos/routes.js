export default [
    {
        path: '/objetivos',
        name: 'home.objetivos',
        component: () => import('./Objetivos'),
        children: [
            {
                path: 'detalhes',
                name: 'home.objetivos.detalhes',
                component: () => import('./ObjetivosDetalhes'),
            }
        ]
    }
]