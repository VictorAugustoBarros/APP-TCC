export default [
    {
        path: '/perfil/:username',
        name: 'perfil',
        component: () => import('./Perfil'),
    }
]