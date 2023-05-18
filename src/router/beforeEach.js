import store from '@/store'

export default async (to, from, next) => {
  document.title = `${to.name} - Routine`

  // console.log(store.state.auth.token);
  // console.log(store.getters['auth/hasToken']);

  if (to.name === 'login' && store.getters['auth/hasToken']) {
    next({ name: 'home' })
  } 
  
  if (to.name !== 'login' && !store.getters['auth/hasToken']) {  
    next({ name: 'login' })
  }
  
  next();
}