import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {RequestResetPasswordRequest} from "../model/request-reset-password-request";

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent {

  constructor(private userService:UserService) {
  }

  sendRequestForPasswordReset(form: NgForm){

    this.userService.sendRequestForResetPassword(form.value as RequestResetPasswordRequest)
  }
}
