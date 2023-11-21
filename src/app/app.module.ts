import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RoutingModule} from "./routing.module";
import {DashboardModule} from "./dashobard/dashboard.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from "ngx-toastr";
import {JwtInterceptorConst} from "./angular-system/interceptor/jwt-interceptor.service";


console.warn("app module loaded")

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    //System defines modules
    BrowserModule,
    CommonModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule

    //User defined modules

  ],
  providers: [JwtInterceptorConst],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
