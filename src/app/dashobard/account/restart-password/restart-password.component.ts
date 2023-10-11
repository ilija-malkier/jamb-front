import { Component } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {NgForm} from "@angular/forms";
import {RequestResetPasswordRequest} from "../../../model/request-reset-password-request";
import * as alertifyjs from "alertifyjs";
import {DataState} from "../../../model/data-state";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent {

  isLoading=false
  showErrorMessage=false
  constructor(private userService:UserService) {

  }

  sendRequestForPasswordReset(form: NgForm){
    this.isLoading=true;
    this.showErrorMessage=false
    let request=form.value as RequestResetPasswordRequest
    console.log(form.invalid && form.submitted)
    if(form.invalid && form.submitted){
      this.isLoading=false;
      this.showErrorMessage=true

      return
    }
    this.userService.sendRequestForResetPassword(form.value as RequestResetPasswordRequest).subscribe(data=>{
      alertifyjs.success('Request for password reset is send.')
    },error => {
      alertifyjs.error('Could not reset password,please try again later.')
      this.isLoading=false

    },()=>{
      this.isLoading=false
    })
  }



  protected readonly DataState = DataState;
}
