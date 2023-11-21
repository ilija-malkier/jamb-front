import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameDetailsResolver} from "../../angular-system/route-guards/game-details-resolver.service";
import {GameDetailsComponent} from "./game-details/game-details.component";
import {CalculateGameComponent} from "./calculate-game/calculate-game.component";
import {GameListComponent} from "./game-list/game-list.component";
import {GameHistoryCard} from "./game-history-card/game-history-card.component";
import {GameComponent} from "./game/game.component";
import {FilterGamesComponent} from "./filter-games/filter-games.component";
import {GameWinListComponent} from "./game-win-list/game-win-list.component";
import {GameWinCardComponent} from "./game-win-card/game-win-card.component";
import {AppCommonModule} from "../../app-common/app-common.module";
import {CreateGameModalComponent} from "../../modals/create-game-modal/create-game-modal.component";
import {FormsModule} from "@angular/forms";
import {GameRequestComponent} from "./game-request/game-request.component";
import {navigationRouteGuard} from "../../angular-system/route-guards/navigation-route.guard";
import {GameCreateComponent} from './game-create/game-create.component';
import {TemplateScreenComponent} from './template-screen/template-screen.component';
import {TemplatesScreenComponent} from './templates-screen/templates-screen.component';
import {CustomTemplateComponent} from './custom-template/custom-template.component';
import {CreateTemplateComponent} from './create-template/create-template.component';
import {AddCopPlayerComponent} from './co-friends/add-cop-player/add-cop-player.component';
import {AddFriendsComponent} from './friends/add-friends/add-friends.component';
import {AddGamesetsComponent} from './add-gamesets/add-gamesets.component';
import {CoFriendsListComponent} from './co-friends/co-friends-list/co-friends-list.component';
import {CoFriendsPaginationComponent} from './co-friends/co-friends-pagination/co-friends-pagination.component';
import {
  FriendAddCardUnselectComponent
} from "../../reusables/friend-add-card-unselect/friend-add-card-unselect.component";
import {AddFriendsListComponent} from './friends/add-friends-list/add-friends-list.component';

console.warn("game module loaded")
const routes: Routes = [

  {path: '', component: GameComponent, canActivate: [navigationRouteGuard]},
  {path: 'create', component: GameCreateComponent, canActivate: [navigationRouteGuard]},
  {path: 'calculate', component: CalculateGameComponent, canActivate: [navigationRouteGuard]},
  {path: 'requests', component: GameRequestComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates', component: TemplatesScreenComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates/create', component: CreateTemplateComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates/edit', component: CalculateGameComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates/cop-player', component: AddCopPlayerComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates/friends', component: AddFriendsComponent, canActivate: [navigationRouteGuard]},
  {path: 'templates/gamesets', component: AddGamesetsComponent, canActivate: [navigationRouteGuard]},

  {
    path: ':id',
    component: GameDetailsComponent,
    resolve: {data: GameDetailsResolver},
    canActivate: [navigationRouteGuard]
  },

];

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
    FriendAddCardUnselectComponent,
    AddFriendsListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule,
    FormsModule,
  ],
  exports:[RouterModule]
})
export class GameModule { }
