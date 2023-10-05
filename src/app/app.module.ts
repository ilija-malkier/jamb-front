import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ErrorBanerComponent } from './reusables/error-baner/error-baner.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { GameHistoryCard } from './game/game-history-card/game-history-card.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ButtonIconComponent } from './reusables/button-icon/button-icon.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestartPasswordComponent } from './restart-password/restart-password.component';
import { ModalComponent } from './reusables/modal/modal.component';
import { UploadSheetComponent } from './upload-sheet/upload-sheet.component';
import { CreateGameModalComponent } from './modals/create-game-modal/create-game-modal.component';
import { ChipComponent } from './reusables/chip/chip.component';
import { FindFriendsModalComponent } from './modals/find-friends-modal/find-friends-modal.component';
import { FriendsSettingsComponent } from './friends/friends-settings/friends-settings.component';
import {Router, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { SupportComponent } from './support/support.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { GameRequestComponent } from './game/game-request/game-request.component';
import { CalculateGameComponent } from './game/calculate-game/calculate-game.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationModalComponent } from './modals/registration-modal/registration-modal.component';
import {JwtInterceptor, JwtInterceptorConst} from "./interceptor/jwt-interceptor.service";
import {navigationRouteGuard} from "./route-guards/navigation-route.guard";
import { CustomImageComponent } from './reusables/custom-image/custom-image.component';
import { HomeStatisticsComponent } from './home-statistics/home-statistics.component';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import {StatisticsService} from "../services/statistics.service";
import { GameListPaginationComponent } from './game/game-list-pagination/game-list-pagination.component';
import { FriendsListPaginationComponent } from './friends/friends-list-pagination/friends-list-pagination.component';
import { FriendsRequestsListPaginationComponent } from './friends/friends-requests-list-pagination/friends-requests-list-pagination.component';
import { StopTypingDirective } from './directive/stop-typing.directive';
import { GameDetailsComponent } from './game/game-details/game-details.component';
import { WinCardComponent } from './game/win-card/win-card.component';
import { WinListComponent } from './game/win-list/win-list.component';
import {GameDetailsResolver} from "./route-guards/game-details-resolver.service";
import { AutocompleateComponent } from './reusables/autocompleate/autocompleate.component';
import {CommonModule} from "@angular/common";
import { LoadingModalComponent } from './modals/loading-modal/loading-modal.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game/game.component';
import { FilterGamesComponent } from './game/game/filter-games/filter-games.component';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import { AccountGamesetComponent } from './account-gameset/account-gameset.component';
import {GameSetDetailsResolver} from "./route-guards/game-set-details.resolver";
import { GameSetDetailsComponent } from './gameset/game-set-details-component/game-set-details.component';
import { ProfileComponent } from './account-gameset/profile/profile.component';
import {ProfileResolver} from "./route-guards/profile.resolver";
import { WarningBanerComponent } from './reusables/warning-baner/warning-baner.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import {ModalModule} from "ngx-bootstrap/modal";


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[navigationRouteGuard]},
  {path:'game',component:GameComponent,canActivate:[navigationRouteGuard]},
  {path:'reset-password',component:RestartPasswordComponent},
  {path: `gameset/:id`,component:GameSetDetailsComponent,resolve:{data:GameSetDetailsResolver},canActivate:[navigationRouteGuard]},
  {path:'support',component:SupportComponent,canActivate:[navigationRouteGuard]},
  {path:'account/activate',component:VerifyEmailComponent},
  {path:'account',children:[
      {path:'profile/:username',component:ProfileComponent,resolve: {data:ProfileResolver}},
      {path:'settings',component:SettingsComponent},
      {path:'game',component:GameRequestComponent},
      {path:'friends',component:FriendsSettingsComponent},
      {path:'gamesets',component:AccountGamesetComponent},
      {path: 'password/reset',component: SetNewPasswordComponent}
    ],canActivate:[navigationRouteGuard]},
  {path:'game',children:[
      {path: 'create',component: CalculateGameComponent},
      {path:':id',component:GameDetailsComponent,resolve:{data:GameDetailsResolver}},

    ],canActivate:[navigationRouteGuard]},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"logout",redirectTo:"/login",pathMatch:"full"},
  {path:"*",component:NotFoundPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorBanerComponent,
    VerifyEmailComponent,
    NotFoundPageComponent,
    HomeComponent,
    GameHistoryCard,
    GameListComponent,
    ButtonIconComponent,
    StatisticCardComponent,
    NavigationComponent,
    RestartPasswordComponent,
    ModalComponent,
    UploadSheetComponent,
    CreateGameModalComponent,
    ChipComponent,
    FindFriendsModalComponent,
    FriendsSettingsComponent,
    SupportComponent,
    SetNewPasswordComponent,
    GameRequestComponent,
    CalculateGameComponent,
    RegistrationModalComponent,
    CustomImageComponent,
    HomeStatisticsComponent,
    CapitalizeFirstLetterPipe,
    GameListPaginationComponent,
    FriendsListPaginationComponent,
    FriendsRequestsListPaginationComponent,
    StopTypingDirective,
    GameDetailsComponent,
    WinCardComponent,
    WinListComponent,
    AutocompleateComponent,
    LoadingModalComponent,
    SettingsComponent,
    GameComponent,
    FilterGamesComponent,
    AccountGamesetComponent,
    GameSetDetailsComponent,
    ProfileComponent,
    WarningBanerComponent,
    ConfirmationModalComponent,

  ],
    imports: [
        BrowserModule,
      CanvasJSAngularChartsModule,
        CommonModule,
        FormsModule,
        RouterOutlet,
        HttpClientModule,
        RouterModule.forRoot(routes),
      ModalModule.forRoot()

    ],
  providers: [HttpClient,JwtInterceptorConst,StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
