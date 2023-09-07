import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    console.log(requestResetPassword)
    this.http.post<CustomResponse>("http://localhost:8081/user/password/reset", requestResetPassword).subscribe(data=>{
      console.log(data)
    })
  }
}
