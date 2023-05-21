import store from '@/store'
import { useAuthStore } from "@/store/storage";
import { watch } from 'vue';


export default async (to, from, next) => {
  document.title = `Routine`;

  const auth = useAuthStore()
  const token = auth.getToken

  console.log(from.path, "->", to.path)

  if (to.name === 'login' && token) {
    console.log("1");
    next({ name: 'home' });
    return;
  }

  if (token && to.name !== 'login') {
    let response = await store.dispatch('auth/ActionCheckToken');

    if (!response) {
      next({ name: 'login' });
      return;
    }
  } else if (!token && to.name !== 'login') {
    next({ name: 'login' });
    return;
  }

  watch(to.params, (newParams, oldParams) => {
    // Verificar se os parâmetros são diferentes do valor atual
    if (JSON.stringify(newParams) !== JSON.stringify(oldParams)) {
      console.log('Parâmetros diferentes:', newParams);
      // Recarregar o componente ou executar outras ações necessárias
      next();
    }
  }, { immediate: true });

  next();
  return;
}