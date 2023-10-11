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
import {RestartPasswordComponent} from "./restart-password/restart-password.component";
import {UploadSheetComponent} from "./upload-sheet/upload-sheet.component";
import {FindFriendsModalComponent} from "../../modals/find-friends-modal/find-friends-modal.component";
import {
  FriendsRequestsListPaginationComponent
} from "./friends-requests-list-pagination/friends-requests-list-pagination.component";
import {FriendsListPaginationComponent} from "./friends-list-pagination/friends-list-pagination.component";
import {CreateGamesetModalComponent} from "../../modals/create-gameset-modal/create-gameset-modal.component";
import {FormsModule} from "@angular/forms";
import {StopTypingDirective} from "../../angular-system/directive/stop-typing.directive";
import {AppCommonModule} from "../../app-common/app-common.module";
import {SupportComponent} from "./support/support.component";


console.warn("account module loaded")

var routes = [

  {path: ':username', component: ProfileComponent, resolve: {data: ProfileResolver}},
  {path: 'settings', component: SettingsComponent},
  {path: 'friends', component: FriendsSettingsComponent},
  {path: 'gamesets', component: AccountGamesetComponent},
  {path: 'password/reset', component: SetNewPasswordComponent},
  {path: 'support', component: SupportComponent}
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
    UploadSheetComponent,
    FindFriendsModalComponent,
    FriendsRequestsListPaginationComponent,
    FriendsListPaginationComponent,
    CreateGamesetModalComponent,
    ProfileComponent,
    SupportComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AccountModule {
}
