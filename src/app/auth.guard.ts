import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const id = localStorage.getItem("id")
  const router = new Router();
  if(id === "23") {
    return true
  }
  return router.parseUrl("/user/login");
};
