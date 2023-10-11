import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StatisticsService} from "../services/statistics.service";
import {CommonModule} from "@angular/common";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {ModalModule} from "ngx-bootstrap/modal";
import {RoutingModule} from "./routing.module";
import {GameListPaginationComponent} from "./dashobard/games/game-list-pagination/game-list-pagination.component";
import {ButtonIconComponent} from "./reusables/button-icon/button-icon.component";
import {ChipComponent} from "./reusables/chip/chip.component";
import {GamesetPaginationComponent} from "./dashobard/gameset/gameset-pagination/gameset-pagination.component";
import {GameModule} from "./dashobard/games/game.module";
import {AccountModule} from "./dashobard/account/account.module";
import {AuthModule} from "./auth/auth.module";
import {ErrorBanerComponent} from "./reusables/error-baner/error-baner.component";
import {DashboardModule} from "./dashobard/dashboard.module";
import {SidebarComponent} from "./dashobard/navigation/sidebar/sidebar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from "ngx-toastr";


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
    DashboardModule,
    NgbModule

    //User defined modules

  ],
  providers: [HttpClient],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
