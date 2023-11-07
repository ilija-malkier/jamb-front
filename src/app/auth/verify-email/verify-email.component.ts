import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {AnimationLoader, AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  providers:[AnimationLoader]
})
export class VerifyEmailComponent implements  OnInit{

  options: AnimationOptions = {
    path: './assets/lottie/success_verify_email.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json

  };
  animationItem: AnimationItem;

  constructor(private activateRoute:ActivatedRoute,private userService:UserService) {
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
  stopAnimation() {
    this.animationItem.stop();
  }
  confirmMail() {

  }

  ngOnInit(): void {
    let param = this.activateRoute.queryParams.subscribe(data=>
    {
      let token=data['token']
      this.userService.activateAccount(token)
    })
  }
}
