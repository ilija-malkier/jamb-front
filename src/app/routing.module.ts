import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {DashobardComponent} from "./dashobard/dashobard.component";
import {AuthComponent} from "./auth/auth.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // {
  //   path:'auth',
  //   component:AuthComponent,
  //   children:[
  //     {path: '',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
  //   ]
  // },
  {
    //kada sam ovde stavio u path nije htel oda radi
    path: 'dashboard',
    component: DashobardComponent,
     loadChildren: () => import('src/app/dashobard/dashboard.module').then(m => m.DashboardModule)
    //kada imamo loadChildren on lazy loaduje ostale module kako nam treba,nece sve odjednom da load
  },
  {
    path: 'auth',
    component:AuthComponent,
     loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
]


// {path:'auth',children:[
//     {path: '',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
//   ]},

// {path:'home',component:HomeComponent},
// {path:'game',component:GameComponent,canActivate:[navigationRouteGuard]},
// {path:'reset-password',component:RestartPasswordComponent},
// {path: `gameset/:id`,component:GameSetDetailsComponent,resolve:{data:GameSetDetailsResolver},canActivate:[navigationRouteGuard]},
// {path:'support',component:SupportComponent,canActivate:[navigationRouteGuard]},
// {path:'account/activate',component:VerifyEmailComponent},


// {
//   path:'account',children:[
//     {path: '',loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)}
//   ]
// },
// {path:"",redirectTo:"/login",pathMatch:"full"},
// {path:"*",component:NotFoundPageComponent}
// {
//   path:'game',children:[
//     {path: '',loadChildren:()=>import('./game/game.module').then(m=>m.GameModule)}
//   ],canActivate:[navigationRouteGuard]
// },
// ]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ enableTracing: true })
  ]
})
export class RoutingModule {
}
