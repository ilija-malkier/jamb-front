import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {RequestResetPasswordRequest} from "../app/model/request-reset-password-request";
import {da} from "date-fns/locale";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  restartPassword(newPassword:string){
    // this.http.put<CustomResponse>("http://localhost:8081/user/password/change",)
  }

  sendRequestForResetPassword(requestResetPassword:RequestResetPasswordRequest){
   return  this.http.post<CustomResponse>("http://localhost:8081/user/password/reset", requestResetPassword)
  }

  activateAccount(token: string) {
    let params = new HttpParams().set('token', token);

    this.http.get<CustomResponse>("http://localhost:8081/user/activate",{ params: params }).subscribe(data=>{
      console.log(data)
    })
  }
}
