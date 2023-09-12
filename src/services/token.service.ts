import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private refreshTokenKey:string='refresh_token'
  private accessTokenKey:string='access_token'
  constructor(private http:HttpClient) { }

  getAccessToken():string{
    return localStorage.getItem(this.accessTokenKey)
  }
  getRefreshToken():string{
    return localStorage.getItem(this.refreshTokenKey)
  }
  hasRefreshToken():boolean {
    return localStorage.getItem(this.refreshTokenKey)!=null
  }
  hasAccessToken() {
    return localStorage.getItem(this.accessTokenKey)!=null
  }

  refreshAccessToken(){
   return  this.http.post<CustomResponse>("http://localhost:8081/user/refresh-token",{refreshToken:this.getRefreshToken()})
  }

  setRefreshToken(accessToken: string) {
    localStorage.setItem(this.accessTokenKey,accessToken)
  }
}
