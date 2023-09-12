import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {TokenService} from "../../services/token.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('auth')) {
      let token =this.tokenService.getAccessToken();
        request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
    }
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status===401 && this.tokenService.hasRefreshToken()){
          return this.tokenService.refreshAccessToken().pipe(
            switchMap((data)=>{
              console.log(data.data.access_token)
              this.tokenService.setRefreshToken(data.data.access_token)
              request = request.clone({
                headers: request.headers.set("Authorization", `Bearer ${this.tokenService.getAccessToken()}`)
              })
              return next.handle(request)
            }),
            catchError((refreshTokenError:any)=>{
              console.log("refresh token error")
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
