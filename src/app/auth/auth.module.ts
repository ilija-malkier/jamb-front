import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AppModule} from "../app.module";
import {RegistrationModalComponent} from "../modals/registration-modal/registration-modal.component";
import {FormsModule} from "@angular/forms";
import {AppCommonModule} from "../app-common/app-common.module";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { AuthComponent } from '../auth/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HomeComponent} from "../dashobard/home/home.component";


var routes:Routes=[
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'home1', component: HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:RegisterComponent},
  {path:"logout",redirectTo:"/login",pathMatch:"full"}

]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegistrationModalComponent,
    AuthComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    AppCommonModule,
    RouterOutlet,
    RouterModule.forChild(routes)
  ],
})
export class AuthModule { }
