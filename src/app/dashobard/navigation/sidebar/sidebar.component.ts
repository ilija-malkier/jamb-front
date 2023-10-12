import { Component } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'home',
    title: 'Home',
    rtlTitle: '',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: 'games',
    title: 'Games',
    rtlTitle: '',
    icon: 'icon-controller',
    class: ''
  },

  {
    path: "gamesets",
    title: "Gamesets",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  // {
  //   path: "/account/settings",
  //   title: "Settings",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },
  {
    path: "account",
    title: "Account",
    rtlTitle: "الرموز",
    icon: "icon-single-02",
    class: ""
  },

  {
    path: "account/support",
    title: "Support",
    rtlTitle: "قائمة الجدول",
    icon: "icon-headphones",
    class: ""
  },



];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
