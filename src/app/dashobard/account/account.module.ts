import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetNewPasswordComponent} from "./set-new-password/set-new-password.component";
import {AccountGamesetComponent} from "../gameset/gameset/account-gameset.component";
import {FriendsSettingsComponent} from "./friends-settings/friends-settings.component";
import {GameRequestComponent} from "../games/game-request/game-request.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProfileResolver} from "../../angular-system/route-guards/profile.resolver";
import {RouterModule} from "@angular/router";
import {RestartPasswordComponent} from "../../auth/restart-password/restart-password.component";
import {UploadSheetComponent} from "../../reusables/upload-sheet/upload-sheet.component";
import {FindFriendsModalComponent} from "../../modals/find-friends-modal/find-friends-modal.component";
import {
  FriendsRequestsSendListPaginationComponent
} from "./friends-requests-send-list-pagination/friends-requests-send-list-pagination.component";
import {FriendsListPaginationComponent} from "./friends-list-pagination/friends-list-pagination.component";
import {CreateGamesetModalComponent} from "../../modals/create-gameset-modal/create-gameset-modal.component";
import {FormsModule} from "@angular/forms";
import {StopTypingDirective} from "../../angular-system/directive/stop-typing.directive";
import {AppCommonModule} from "../../app-common/app-common.module";
import {SupportComponent} from "./support/support.component";
import {GamesetPaginationComponent} from "../gameset/gameset-pagination/gameset-pagination.component";
import {GamesetsModule} from "../gameset/gamesets.module";
import {DashboardModule} from "../dashboard.module";
import { FriendsRequestsReceivedListPaginationComponent } from './friends-requests-received-list-pagination/friends-requests-received-list-pagination.component';


console.warn("account module loaded")

var routes = [

  {path: 'settings', component: SettingsComponent},
  {path: 'friends', component: FriendsSettingsComponent},
  {path: 'gamesets', component: AccountGamesetComponent},
  {path: 'password/reset', component: SetNewPasswordComponent},
  {path: 'support', component: SupportComponent},
  {path: ':username', component: ProfileComponent, resolve: {data: ProfileResolver}},

  // ],canActivate:[navigationRouteGuard]},
]

@NgModule({
  declarations: [
    SettingsComponent,
    GameRequestComponent,
    FriendsSettingsComponent,
    AccountGamesetComponent,
    SetNewPasswordComponent,
    RestartPasswordComponent,
    FindFriendsModalComponent,
    FriendsRequestsSendListPaginationComponent,
    FriendsListPaginationComponent,
    CreateGamesetModalComponent,
    ProfileComponent,
    SupportComponent,
    FriendsRequestsReceivedListPaginationComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    RouterModule.forChild(routes),
    GamesetsModule,
    DashboardModule,
  ],
    exports: [RouterModule, FriendsListPaginationComponent]
})
export class AccountModule {
}
