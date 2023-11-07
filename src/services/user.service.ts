import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {RequestResetPasswordRequest} from "../app/model/request-reset-password-request";
import {da} from "date-fns/locale";
import {PasswordResetRequest} from "../app/model/password-reset-request";
import {AuthService} from "./auth.service";
import {UpdatePlayerRequest} from "../app/model/update-player-request";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  favouritesTemplates:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>());
  constructor(private http:HttpClient) { }



  restartPassword(newPassword:string,token:string){
    let params = new HttpParams().set('token', token);

    this.http.put<CustomResponse>(" http://localhost:8081/user/password/reset",new PasswordResetRequest(newPassword),{params:params}).subscribe(data=>{
    })
  }

  sendRequestForResetPassword(requestResetPassword:RequestResetPasswordRequest){
   return  this.http.post<CustomResponse>("http://localhost:8081/user/password/reset", requestResetPassword)
  }

  activateAccount(token: string) {
    let params = new HttpParams().set('token', token);
    this.http.get<CustomResponse>("http://localhost:8081/user/activate",{ params: params }).subscribe(data=>{
    })
  }

  getProfileDetails(username: string){
   return this.http.get<CustomResponse>("http://localhost:8081/player/"+username)
  }

  updateProfile(updatePlayerRequest: UpdatePlayerRequest) {
    return this.http.patch<CustomResponse>(" http://localhost:8081/player",updatePlayerRequest)
  }

  restartPasswordProfile(password: string, oldPassword: string) {
    console.log("password" + password)
    console.log("oldpassword" + oldPassword)
      return this.http.put<CustomResponse>("http://localhost:8081/user/password/change",{"oldPassword":oldPassword,"newPassword":password})
  }

  deactivateAccount() {
    return this.http.put<CustomResponse>("http://localhost:8081/user/deactivate",null)
  }

  getFavoriteTemplates(){
    this.favouritesTemplates.next(this.http.get<CustomResponse>("http://localhost:8081/template"))
  }
}
