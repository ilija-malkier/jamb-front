import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {tr} from "date-fns/locale";
import {TokenService} from "../../../services/token.service";

export const navigationRouteGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let authService=inject(AuthService)
  let tokenService=inject(TokenService)
  let res = tokenService.hasAccessToken()
  if(!res){
    router.navigate(['auth','sign-in']);
    authService.$isLogin.next(false)
    return false;
  }
  authService.$isLogin.next(true)
  return  true;
};
