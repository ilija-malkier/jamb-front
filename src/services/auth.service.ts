import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "../app/model/user-login-request";
import {UserRegisterRequest} from "../app/model/user-register-request";
import {ModalService} from "./modal.service";
import {RegistrationModalComponent} from "../app/modals/registration-modal/registration-modal.component";
import {BehaviorSubject, Observable} from "rxjs";
import {AppState} from "../app/model/app-state";
import {CustomResponse} from "../app/model/custom-response";
import {Route, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  public $isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public username:string='';
  constructor(private http:HttpClient,private modalService:ModalService,private router:Router) {
  }


  public login(loginRequest: UserLoginRequest){

    return this.http.post<CustomResponse>("http://localhost:8081/user/login",loginRequest)

  }

  register(userRegisterRequest: UserRegisterRequest) {
    return this.http.post<CustomResponse>("http://localhost:8081/user/register",userRegisterRequest);
  }

  public logout(){
    localStorage.setItem("access_token",null)
    localStorage.setItem("refresh_token",null)
    this.$isLogin.next(false)
    this.username='';
      this.router.navigate(["login"])
  }

  public invalidateLoginValues(){
    localStorage.setItem("access_token",null)
    localStorage.setItem("refresh_token",null)
    this.$isLogin.next(false)
    this.username='';
    this.router.navigate(["login"])
  }
  ngOnInit(): void {

  }
}
