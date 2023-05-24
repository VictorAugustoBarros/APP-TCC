import { authVerifyToken } from '@/services/auth'
import authStore from "@/store/authStore";
import pageStore from "@/store/pageStore";

export default async (to, from, next) => {
  const auth = authStore()
  const page = pageStore()

  page.setPage(to.path);

  const token = auth.getToken  

  // console.log(from.path, "->", to.path)

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
