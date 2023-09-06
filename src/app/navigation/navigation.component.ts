import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  activeRoute:string="login";
  isLogin=false

  constructor(private router:Router,public auth:AuthService) {

  }

  public changeActiveNav(active:string){
    console.log(active)
    this.activeRoute=active;
  }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Your code to handle the URL change

        this.activeRoute=    event.url.substring(1,event.url.length);
      }
    });
  }
}
