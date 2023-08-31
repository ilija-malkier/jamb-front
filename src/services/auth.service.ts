import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "../app/model/user-login-request";
import {UserRegisterRequest} from "../app/model/user-register-request";
import {ModalService} from "./modal.service";
import {RegistrationModalComponent} from "../app/registration-modal/registration-modal.component";
import {BehaviorSubject, Observable} from "rxjs";
import {AppState} from "../app/model/app-state";
import {CustomResponse} from "../app/model/custom-response";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private modalService:ModalService) { }

  $register:Observable<CustomResponse>;
  public login(loginRequest: UserLoginRequest){

    this.http.post("http://localhost:8081/user/login",loginRequest).subscribe(
      (value)=>{
        console.log(value)
      }
    );

  }

  register(userRegisterRequest: UserRegisterRequest) {
    return this.http.post<CustomResponse>("http://localhost:8081/user/register",userRegisterRequest);
  }
}
