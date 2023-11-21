import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {DashobardComponent} from "./dashobard/dashobard.component";
import {AuthComponent} from "./auth/auth.component";
import {navigationRouteGuard} from "./angular-system/route-guards/navigation-route.guard";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'auth',
    component:AuthComponent,
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    //kada sam ovde stavio u path nije htel oda radi
    path: 'dashboard',
    component: DashobardComponent,
     loadChildren: () => import('src/app/dashobard/dashboard.module').then(m => m.DashboardModule)
    ,canActivate:[navigationRouteGuard]
    //kada imamo loadChildren on lazy loaduje ostale module kako nam treba,nece sve odjednom da load
  },

]



@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
