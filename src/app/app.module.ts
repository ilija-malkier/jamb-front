import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ErrorBanerComponent } from './error-baner/error-baner.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestartPasswordComponent } from './restart-password/restart-password.component';
import { ModalComponent } from './modal/modal.component';
import { UploadSheetComponent } from './upload-sheet/upload-sheet.component';
import { CreateGameModalComponent } from './create-game-modal/create-game-modal.component';
import { ChipComponent } from './chip/chip.component';
import { FindFriendsModalComponent } from './find-friends-modal/find-friends-modal.component';
import { FriendsSettingsComponent } from './friends-settings/friends-settings.component';
import {Router, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { SupportComponent } from './support/support.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { GameRequestComponent } from './game-request/game-request.component';
import { CalculateGameComponent } from './calculate-game/calculate-game.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'support',component:SupportComponent},
  {path:'account',children:[
      {path:'settings',component:NotFoundPageComponent},
      {path:'game',component:GameRequestComponent},
      {path:'friends',component:FriendsSettingsComponent},
      {path:'activate',component:VerifyEmailComponent}
    ]},
  {path:'game',children:[
      {path: 'create',component: CalculateGameComponent}
    ]},
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
    GameComponent,
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
    FilterModalComponent,
    RegistrationModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
