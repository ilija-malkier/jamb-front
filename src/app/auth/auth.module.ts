import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationModalComponent} from "../modals/registration-modal/registration-modal.component";
import {FormsModule} from "@angular/forms";
import {AppCommonModule} from "../app-common/app-common.module";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AuthComponent} from '../auth/auth.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from "../dashobard/home/home.component";
import {SignUpComponent} from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {LottiePlayer} from "@lottiefiles/lottie-player";
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';

var routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: "logout", redirectTo: "/login", pathMatch: "full"},
  {path:'account/activate',component:VerifyEmailComponent},
]
export function playerFactory() { // add this line
  return player; // add this line
} // add this line


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegistrationModalComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    NavBarComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    AppCommonModule,
    LottieModule.forRoot({ player: playerFactory}) ,

    RouterOutlet,
    RouterModule.forChild(routes),

  ],
  exports:[RouterModule]
})
export class AuthModule { }
