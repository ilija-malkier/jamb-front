import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements  OnInit{

  constructor(private activateRoute:ActivatedRoute,private userService:UserService) {
  }


  confirmMail() {

  }

  ngOnInit(): void {
    let param = this.activateRoute.queryParams.subscribe(data=>
    {
      let token=data['token']
      console.log(token)
      this.userService.activateAccount(token)
    })

  }
}
