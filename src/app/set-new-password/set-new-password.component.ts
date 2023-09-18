import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
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

  private validatePasswords(passwords: string, confirmPassword: string) {
    if(passwords == passwords){
      this.showError=false
      this.errorMessage=''
      return true
    }
    else{
      this.showError=true
      this.errorMessage='Password are not the same'
      return false
    }
  }
}
