import { Component } from '@angular/core';

@Component({
  selector: 'app-dashobard',
  templateUrl: './dashobard.component.html',
  styleUrls: ['./dashobard.component.css']
})
export class DashobardComponent {
  public sidebarColor: string = "red";

  constructor() {}
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
      sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
      mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
      body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {}
}