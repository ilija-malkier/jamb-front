import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {RequestResetPasswordRequest} from "../model/request-reset-password-request";
import * as alertifyjs from "alertifyjs";

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent {

  constructor(private userService:UserService) {
  }

  sendRequestForPasswordReset(form: NgForm){
    this.userService.sendRequestForResetPassword(form.value as RequestResetPasswordRequest).subscribe(data=>{
      alertifyjs.success('Request for password reset is send.')
    },error => {
      alertifyjs.error('Could not reset password,please try again later.')

    })
  }
}
