export default [
  {
    path: 'perfil/:username',
    name: 'home.perfil',
    component: () => import('./Perfil')
  }
]