export default [
    {
        path: '/perfil/:username',
        name: 'feed.perfil',
        component: () => import('./Perfil'),
    }
]