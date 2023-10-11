import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashobardComponent} from "./dashobard.component";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./home/home.component";
import {GameModule} from "./games/game.module";
import {SidebarComponent} from "./navigation/sidebar/sidebar.component";
import {NavbarComponent} from "./navigation/navbar/navbar.component";
import {GameComponent} from "./games/game/game.component";
import {ProfileComponent} from "./account/profile/profile.component";


var routes: Routes = [




  {path: 'home', component: HomeComponent},
  {path: 'home1', component: HomeComponent},
  {path: 'home2', component: HomeComponent},
  {
    path: 'games',
    loadChildren: () => import('src/app/dashobard/games/game.module').then(m => m.GameModule)

  },
  {
    path: 'account',
    loadChildren: () => import('src/app/dashobard/account/account.module').then(m => m.AccountModule)

  },
  {
    path: 'gamesets',
    loadChildren: () => import('src/app/dashobard/gameset/gamesets.module').then(m => m.GamesetsModule)

  }
]

  // {path:'friends',component:FriendsSettingsComponent},
  // {path:'gamesets',component:AccountGamesetComponent},
  // {path: 'password/reset',component: SetNewPasswordComponent}
  // ],canActivate:[navigationRouteGuard]},
  // {path:'profile/:username',component:ProfileComponent,resolve: {data:ProfileResolver}},
  // {path:'settings',component:SettingsComponent},



console.warn("dashboard module loaded")

@NgModule({
  declarations: [
    DashobardComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    RouterOutlet,
    RouterLink,

  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
