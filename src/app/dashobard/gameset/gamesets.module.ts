import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountGamesetComponent} from "./gameset/account-gameset.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppCommonModule} from "../../app-common/app-common.module";
import {GameSetDetailsComponent} from "./game-set-details-component/game-set-details.component";
import {GamesetPaginationComponent} from "./gameset-pagination/gameset-pagination.component";
import {FormsModule} from "@angular/forms";
import {navigationRouteGuard} from "../../angular-system/route-guards/navigation-route.guard";
import {GameSetDetailsResolver} from "../../angular-system/route-guards/game-set-details.resolver";


console.warn("gameset module loaded")

var routes = [

  {path: '', component: AccountGamesetComponent},
  // ],canActivate:[navigationRouteGuard]},
{path: `:id`,component:GameSetDetailsComponent,resolve:{data:GameSetDetailsResolver},canActivate:[navigationRouteGuard]},
]

@NgModule({
  declarations: [
    GameSetDetailsComponent,
    GamesetPaginationComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterOutlet,
    RouterModule.forChild(routes),
    FormsModule
  ],
    exports: [RouterModule, GamesetPaginationComponent]
})
export class GamesetsModule {
}
