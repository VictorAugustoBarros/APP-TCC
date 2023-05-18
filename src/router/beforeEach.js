import store from '../store'

import { mapState } from 'vuex'

export default async (to, from, next) => {
  document.title = `${to.name} - Routine`

  console.log("--------")
  console.log(store.state.auth.token)
  console.log(store.getters['auth/getToken']);
  console.log(mapState("auth", ["token"]));

  if (to.name !== 'login' && !store.getters['auth/getToken']) {
    try {
      next({ path: to.path })

    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && store.getters['auth/getToken']) {
      next({ name: 'home' })

    } else {
      next()
    }
  }
}