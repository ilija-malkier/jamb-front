import { Component } from '@angular/core';
import {AppState} from "../../model/app-state";
import {CustomResponse} from "../../model/custom-response";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserLoginRequest} from "../../model/user-login-request";
import {DataState} from "../../model/data-state";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  errorMessage='';
  showErrorMessage=false;
  appState:AppState<CustomResponse>={dataState: DataState.INIT};
  constructor(private auth:AuthService,private router:Router) {
  }


  login(form: NgForm) {
    let loginRequest=form.value as UserLoginRequest;
    console.log(loginRequest)
    this.checkForErrors(form);
    if(!this.showErrorMessage){

      this.appState={dataState: DataState.LOADING}


      this.auth.login(loginRequest).subscribe(
        (customResponse)=>{
          let loginResponse=customResponse.data ;
          localStorage.setItem("access_token",loginResponse.access_token)
          localStorage.setItem("refresh_token",loginResponse.refresh_token)
          this.auth.username=loginRequest.username
          this.auth.$isLogin.next(true)
        },
        error => {
          this.appState={dataState:DataState.ERROR}
          this.showErrorMessage=true;
          // this.errorMessage="Could not perform wanted operation.Please try again later."
          this.errorMessage=error.error.message
        },
        ()=>{
          this.appState={dataState:DataState.DONE}
          form.resetForm()
          if(localStorage.getItem("access_token"))
            this.router.navigate(["dashboard","home"])
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
