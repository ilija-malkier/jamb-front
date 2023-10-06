import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  constructor(public auth: AuthService) {
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
