import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameDetailsResolver} from "../../angular-system/route-guards/game-details-resolver.service";
import {GameDetailsComponent} from "./game-details/game-details.component";
import {CalculateGameComponent} from "./calculate-game/calculate-game.component";
import {WarningBanerComponent} from "../../reusables/warning-baner/warning-baner.component";
import {ButtonIconComponent} from "../../reusables/button-icon/button-icon.component";
import {GameListComponent} from "./game-list/game-list.component";
import {GameHistoryCard} from "./game-history-card/game-history-card.component";
import {GameComponent} from "./game/game.component";
import {FilterGamesComponent} from "./filter-games/filter-games.component";
import {GameWinListComponent} from "./game-win-list/game-win-list.component";
import {AppModule} from "../../app.module";
import {CapitalizeFirstLetterPipe} from "../../angular-system/pipes/capitalize-first-letter.pipe";
import {GameWinCardComponent} from "./game-win-card/game-win-card.component";
import {GamesetPaginationComponent} from "../gameset/gameset-pagination/gameset-pagination.component";
import {ErrorBanerComponent} from "../../reusables/error-baner/error-baner.component";
import {AppCommonModule} from "../../app-common/app-common.module";
import {CreateGameModalComponent} from "../../modals/create-game-modal/create-game-modal.component";
import {GameSetDetailsComponent} from "../gameset/game-set-details-component/game-set-details.component";
import {FormsModule} from "@angular/forms";
import {GameRequestComponent} from "./game-request/game-request.component";
import {navigationRouteGuard} from "../../angular-system/route-guards/navigation-route.guard";

console.warn("game module loaded")
var routes:Routes=[
  {path:'',component:GameComponent ,canActivate:[navigationRouteGuard]},

  {path:':id',component:GameDetailsComponent,resolve:{data:GameDetailsResolver} ,canActivate:[navigationRouteGuard]},
  {path: 'create',component: CalculateGameComponent ,canActivate:[navigationRouteGuard]},
  {path:'requests',component:GameRequestComponent ,canActivate:[navigationRouteGuard]},

]

@NgModule({
  declarations: [
    CalculateGameComponent,
    GameDetailsComponent,
    GameListComponent,
    GameHistoryCard,
    GameComponent,
    FilterGamesComponent,
    GameWinListComponent,
    GameWinCardComponent,
    CreateGameModalComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class GameModule { }
