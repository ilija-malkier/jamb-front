import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('auth')) {
      let token = localStorage.getItem("access_token");
      request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
export  const JwtInterceptorConst={
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};
