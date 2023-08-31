import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserLoginRequest} from "../model/user-login-request";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

   errorMessage='';
   showErrorMessage=false;
  constructor(private auth:AuthService) {
  }


  login(form: NgForm) {
    let loginRequest=form.value as UserLoginRequest;



    this.checkForErrors(form);
    if(!this.showErrorMessage)
      this.auth.login(loginRequest);

  }
  private checkForErrors(form: NgForm) {
    this.showErrorMessage=form.submitted &&  form.invalid
    this.errorMessage='Please insert valid values.'
  }
}
