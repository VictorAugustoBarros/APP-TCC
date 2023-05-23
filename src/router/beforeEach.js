import { authVerifyToken } from '@/services/auth'
import authStore from "@/store/authStore";
import pageStore from "@/store/pageStore";

export default async (to, from, next) => {
  document.title = `Routine`;

  const auth = authStore()
  const page = pageStore()

  // console.log(from.path, "->", to.path)

  page.setPage(customStringify(to)); // Use a custom stringify function

  const token = auth.getToken

  if (to.name === 'login' && token) {
    next({ name: 'home' });
    return;
  }

  if (token && to.name !== 'login') {
    let response = await authVerifyToken()

    if (!response) {
      next({ name: 'login' });
      return;
    }
  } else if (!token && to.name !== 'login') {
    next({ name: 'login' });
    return;
  }

  next();
  return;
}

// Custom stringify function to handle circular references
function customStringify(obj) {
  const seen = new WeakSet();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return; // Skip circular references
      }
      seen.add(value);
    }
    return value;
  });
}