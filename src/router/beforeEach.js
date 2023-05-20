import store from '@/store'

export default async (to, from, next) => {
  document.title = `${to.name} - Routine`;
  let hasToken = store.getters['auth/hasToken'];


  if (to.name === 'login' && hasToken) {
    next({ name: 'home' });
    return; // Retorna aqui para evitar a execução do restante do código
  }

  if (hasToken && to.name !== 'login') {
    let response = await store.dispatch('auth/ActionCheckToken');
    
    if (!response) {
      next({ name: 'login' });
      return; // Retorna aqui para evitar a execução do restante do código
    }
  } else if (!hasToken && to.name !== 'login') {
    next({ name: 'login' });
    return; // Retorna aqui para evitar a execução do restante do código
  }

  next();
}