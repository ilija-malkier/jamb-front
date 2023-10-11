import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {UserService} from "../../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent {
  showError:boolean=false
  errorMessage:string=''
 private  token:string=''
  constructor(private userService:UserService,private activeRoute:ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(data=>
    {
       this.token=data['token']


    })
  }
  changePassword(form: NgForm) {
    let password=form.value['password'];
    let confirmPassword=form.value['confirmPassword']
      if(!this.validatePasswords(password,confirmPassword))  return

    this.userService.restartPassword(password,this.token)
  }
   hasDigit(inputString: string): boolean {
    const digitRegex = /\d/;
    return digitRegex.test(inputString);
  }
   hasSpecialCharacter(inputString: string): boolean {
    const specialCharacterRegex = /[^a-zA-Z0-9]/;
    return specialCharacterRegex.test(inputString);
  }
  private validatePasswords(password: string, confirmPassword: string){

    if(password != confirmPassword){
      this.showError=true
      this.errorMessage='Password are not the same'
      return false
    }
    if(!this.hasDigit(password)){
      this.showError=true
      this.errorMessage='Password must contain a digit'
      return false
    }
    if(!this.hasSpecialCharacter(password)) {
      this.showError = true
      this.errorMessage = 'Password must contain a special character'
      return false
    }
    this.showError=false
    this.errorMessage=''
    return true


  }
}
