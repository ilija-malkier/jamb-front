import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import alertifyjs from "alertifyjs";
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Jamb';

  constructor(private modalService:ModalService) {}

  isModalOpen(){
    return this.modalService.isAnyModalOpen()
  }
  ngOnInit(): void {
    let token = localStorage.getItem("access_token")

    // if(token){
    //   //need to se if token is valid
    //   this.auth.$isLogin.next(true)
    //   this.router.navigate(["home"])
    // }else{
    //   this.auth.$isLogin.next(false)
    //   this.router.navigate(["login"])
    //
    // }
  }
}
