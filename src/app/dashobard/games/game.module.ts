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
import {DashboardModule} from "../dashboard.module";
import { GameCreateComponent } from './game-create/game-create.component';
import { TemplateScreenComponent } from './template-screen/template-screen.component';
import { TemplatesScreenComponent } from './templates-screen/templates-screen.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { AddCopPlayerComponent } from './add-cop-player/add-cop-player.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { AddGamesetsComponent } from './add-gamesets/add-gamesets.component';
import { CoFriendsListComponent } from './co-friends-list/co-friends-list.component';
import { CoFriendsPaginationComponent } from './co-friends-pagination/co-friends-pagination.component';
import {
  FriendAddCardUnselectComponent
} from "../../reusables/friend-add-card-unselect/friend-add-card-unselect.component";
import {AccountModule} from "../account/account.module";

console.warn("game module loaded")
  var routes:Routes=[

    {path: 'create',component: GameCreateComponent ,canActivate:[navigationRouteGuard]},
    {path: 'calculate',component: CalculateGameComponent ,canActivate:[navigationRouteGuard]},
    {path:'requests',component:GameRequestComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates',component:TemplatesScreenComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates/create',component:CreateTemplateComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates/edit',component:CalculateGameComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates/cop-player',component:AddCopPlayerComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates/friends',component:AddFriendsComponent ,canActivate:[navigationRouteGuard]},
    {path:'templates/gamesets',component:AddGamesetsComponent ,canActivate:[navigationRouteGuard]},
    {path:'',component:GameComponent ,canActivate:[navigationRouteGuard]},

    {path:':id',component:GameDetailsComponent,resolve:{data:GameDetailsResolver} ,canActivate:[navigationRouteGuard]},

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
    GameCreateComponent,
    TemplateScreenComponent,
    TemplatesScreenComponent,
    CustomTemplateComponent,
    CreateTemplateComponent,
    AddCopPlayerComponent,
    AddFriendsComponent,
    AddGamesetsComponent,
    CoFriendsListComponent,
    CoFriendsPaginationComponent,
    FriendAddCardUnselectComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule,
    FormsModule,
    DashboardModule,
    AccountModule
  ],
  exports:[RouterModule]
})
export class GameModule { }
