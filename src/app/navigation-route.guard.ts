import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const navigationRouteGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let res = localStorage.getItem('access_token')!=null;
  if(!res){
    router.navigate(['login']);
    return false;
  }
  return  true;
};
