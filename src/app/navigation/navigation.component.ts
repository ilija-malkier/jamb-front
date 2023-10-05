import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  activeRoute:string="login";

  totalGameRequests=0;

  constructor(private router:Router,public auth:AuthService) {
  }



  ngOnInit(): void {

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //
    //       this.activeRoute=    event.url.substring(1,event.url.length);
    //   }
    // });
  }

  protected readonly localStorage = localStorage;
}
