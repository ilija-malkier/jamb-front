import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserLoginRequest} from "../model/user-login-request";
import {DataState} from "../model/data-state";
import {AppState} from "../model/app-state";
import {CustomResponse} from "../model/custom-response";
import {RegistrationModalComponent} from "../registration-modal/registration-modal.component";
import {ModalService} from "../../services/modal.service";
import {delay} from "rxjs";
import {LoginResponse} from "../model/login-response";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

   errorMessage='';
   showErrorMessage=false;
  appState:AppState<CustomResponse>={dataState: DataState.INIT};
  constructor(private auth:AuthService,private router:Router) {
  }


  login(form: NgForm) {
    let loginRequest=form.value as UserLoginRequest;



    this.checkForErrors(form);
    if(!this.showErrorMessage){

      this.appState={dataState: DataState.LOADING}
      delay(1000)

      this.auth.login(loginRequest).subscribe(
        (customResponse)=>{


         let loginResponse=customResponse.data ;
          localStorage.setItem("access_token",loginResponse.access_token)
          localStorage.setItem("refresh_token",loginResponse.refresh_token)
          this.auth.$isLogin.next(true)
        },
        error => {
          this.appState={dataState:DataState.ERROR}
          this.showErrorMessage=true;
          this.errorMessage="Could not perform wanted operation.Please try again later."
        },
        ()=>{
          this.appState={dataState:DataState.DONE}
          form.resetForm()
          if(localStorage.getItem("access_token"))
              this.router.navigate(["home"])
        }
      )
    }

  }
  private checkForErrors(form: NgForm) {
    this.showErrorMessage=form.submitted &&  form.invalid
    this.errorMessage='Please insert valid values.'
  }

  protected readonly DataState = DataState;
}
