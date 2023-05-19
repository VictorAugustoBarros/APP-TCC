import store from '@/store'


export default async (to, from, next) => {
  document.title = `${to.name} - Routine`

  

  if (to.name === 'login' && store.getters['auth/hasToken']) {
    next({ name: 'home' })
  } 
  
  if (to.name !== 'login' && !store.getters['auth/hasToken']) {  
    next({ name: 'login' })
  }
  
  next();
}