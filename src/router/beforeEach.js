import authStore from "@/store/authStore";
import userStore from "@/store/userStore";
import pageStore from "@/store/pageStore";

import { authVerifyToken } from "@/services/auth";
import { GetUserData } from "@/services/users";

export default async (to, from, next) => {
  const authS = authStore();
  const userS = userStore();
  const pageS = pageStore();

  pageS.setPage(to.path);

  const token = authS.getToken;

  if (from.name === "login" && to.name === "app") {
    await GetUserData();
  }

  if (to.name === "app" && token) {
    next({ name: "appWeb" });
    return;
  }

  if (to.name === "appWeb" && token) {
    next({ name: "perfil", params: { username: userS.getUsername } });
    return;
  }

  if (!token && to.name == "recovery") {
    next();
    return;
  }

  if (!token && to.name !== "login") {
    next({ path: "/login" });
    return;
  }

  if (to.name !== "login" && token) {
    let response = await authVerifyToken();

    if (!response) {
      next({ path: "/login" });
      return;
    }
  }

  next();
  return;
};
