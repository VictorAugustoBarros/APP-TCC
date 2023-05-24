import { authVerifyToken } from '@/services/auth'
import authStore from "@/store/authStore";
import pageStore from "@/store/pageStore";

export default async (to, from, next) => {
  document.title = `Routine`;
  console.log(from.path, "->", to.path)

  const auth = authStore()
  const page = pageStore()

  page.setPage(JSON.stringify(to));

  const token = auth.getToken

  if (to.name === 'login' && token) {
    next({ path: '/feed' });
    return;
  }

  if (to.name !== 'login' && token) {
    let response = await authVerifyToken()

    if (!response) {
      next({ path: '/login' });
      return;
    }
    
  } else if (!token && to.name !== 'login') {
    next({ path: '/login' });
    return;
  }

  next();
  return;
}