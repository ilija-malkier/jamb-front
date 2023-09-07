import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Jamb';

  constructor(private router:Router,private auth:AuthService) {}

  ngOnInit(): void {

    let token = localStorage.getItem("access_token");
    if(token){
      this.auth.$isLogin.next(true)
      this.router.navigate(["home"])
    }else{
      this.auth.$isLogin.next(false)
      this.router.navigate(["login"])

    }
  }
}
