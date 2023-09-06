import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "../app/model/user-login-request";
import {UserRegisterRequest} from "../app/model/user-register-request";
import {ModalService} from "./modal.service";
import {RegistrationModalComponent} from "../app/registration-modal/registration-modal.component";
import {BehaviorSubject, Observable} from "rxjs";
import {AppState} from "../app/model/app-state";
import {CustomResponse} from "../app/model/custom-response";
import {Route, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public $isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private modalService:ModalService,private router:Router) {

    if(localStorage.getItem("access_token")){
      this.$isLogin.next(true)
      this.router.navigate(["home"])

    }

  }

  $register:Observable<CustomResponse>;
  public login(loginRequest: UserLoginRequest){

    return this.http.post("http://localhost:8081/user/login",loginRequest)

  }

  register(userRegisterRequest: UserRegisterRequest) {
    return this.http.post<CustomResponse>("http://localhost:8081/user/register",userRegisterRequest);
  }

  public logout(){
    localStorage.setItem("access_token",null)
    localStorage.setItem("refresh_token",null)
    this.$isLogin.next(false)
      this.router.navigate(["login"])
  }
}
