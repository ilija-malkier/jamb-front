import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "../app/model/user-login-request";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  public login(loginRequest: UserLoginRequest){

    this.http.post("http://localhost:8081/user/login",loginRequest).subscribe(
      (value)=>{
        console.log(value)
      }
    );

  }

}
