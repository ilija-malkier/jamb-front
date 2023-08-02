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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
