import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService,private router:Router,private authService:AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('login') || request.url.includes('register') || request.url.includes('activate')){
      return next.handle(request)

    }
    if (!request.url.includes('login') || !request.url.includes('register')) {
      let token =this.tokenService.getAccessToken();
        request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
    }
    if(localStorage.getItem('refresh_token')==null){
      this.router.navigate(['login']);
      this.authService.$isLogin.next(false)
      return next.handle(request)

    }
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status===401 && this.tokenService.hasRefreshToken()){
          return this.tokenService.refreshAccessToken().pipe(
            switchMap((data)=>{
              this.tokenService.setRefreshToken(data.data.access_token)
              request = request.clone({
                headers: request.headers.set("Authorization", `Bearer ${this.tokenService.getAccessToken()}`)
              })
              return next.handle(request)
            }),
            catchError((refreshTokenError:any)=>{
              console.log("refresh token error")
              this.authService.invalidateLoginValues()
              return throwError(refreshTokenError)
            })

          )
        }
        return throwError(error)
      })

    );
  }
}
export  const JwtInterceptorConst={
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};
