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
import {navigationRouteGuard} from "../angular-system/route-guards/navigation-route.guard";
import {AppCommonModule} from "../app-common/app-common.module";
import {AccountModule} from "./account/account.module";
import {UploadSheetComponent} from "../reusables/upload-sheet/upload-sheet.component";
import {FormsModule} from "@angular/forms";
import {FabComponent} from "../reusables/fab/fab.component";
import { FriendAddCardComponent } from './common/friend-add-card/friend-add-card.component';
import { GamesetAddCardComponent } from './common/gameset-add-card/gameset-add-card.component';


var routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'games',
    loadChildren: () => import('src/app/dashobard/games/game.module').then(m => m.GameModule)
    ,canActivate:[navigationRouteGuard]

  },
  {
    path: 'account',
    loadChildren: () => import('src/app/dashobard/account/account.module').then(m => m.AccountModule)
    ,canActivate:[navigationRouteGuard]
  },
  {
    path: 'gamesets',
    loadChildren: () => import('src/app/dashobard/gameset/gamesets.module').then(m => m.GamesetsModule)
    ,canActivate:[navigationRouteGuard]
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
    HomeComponent,
    UploadSheetComponent,
    FabComponent,
    FriendAddCardComponent,
    GamesetAddCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    RouterOutlet,
    RouterLink,
    AppCommonModule,
    FormsModule,

  ],
    exports: [RouterModule, FabComponent, FriendAddCardComponent, GamesetAddCardComponent, UploadSheetComponent]
})
export class DashboardModule {
}
