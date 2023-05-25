import { authVerifyToken } from '@/services/auth'
import authStore from "@/store/authStore";
import pageStore from "@/store/pageStore";

export default async (to, from, next) => {
  const auth = authStore()
  const page = pageStore()

  page.setPage(to.path);

  const token = auth.getToken  

  if (from.path === "/" && to.path === "/feed" && auth.getfromLogin){
    auth.setFromLogin(false);
    next();
    return;
  }

  if (!token && to.name !== 'login') {
    next({ path: '/login' });
    return;
  }

  if (to.name !== 'login' && token && !auth.getfromLogin) {
    let response = await authVerifyToken()

    if (!response) {
      next({ path: '/login' });
      return;
    }
    next();  
    return;
  } 

  next();
  return;
}
