import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {tr} from "date-fns/locale";

export const navigationRouteGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let authService=inject(AuthService)
  let res = localStorage.getItem('access_token')!=null;
  if(!res){
    router.navigate(['login']);
    authService.$isLogin.next(false)
    return false;
  }
  authService.$isLogin.next(true)
  return  true;
};
