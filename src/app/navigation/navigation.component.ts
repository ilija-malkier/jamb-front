import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  activeRoute:string="login";

  constructor(private router:Router) {}

  public changeActiveNav(active:string){
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
