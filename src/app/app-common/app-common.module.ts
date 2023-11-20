import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameListPaginationComponent} from "../dashobard/games/game-list-pagination/game-list-pagination.component";
import {ButtonIconComponent} from "../reusables/button-icon/button-icon.component";
import {ChipComponent} from "../reusables/chip/chip.component";
import {ErrorBanerComponent} from "../reusables/error-baner/error-baner.component";
import {AutocompleateComponent} from "../reusables/autocompleate/autocompleate.component";
import {FormsModule} from "@angular/forms";
import {LoadingModalComponent} from "../modals/loading-modal/loading-modal.component";
import {CustomImageComponent} from "../reusables/custom-image/custom-image.component";
import {ConfirmationModalComponent} from "../modals/confirmation-modal/confirmation-modal.component";
import {WarningBanerComponent} from "../reusables/warning-baner/warning-baner.component";
import {CapitalizeFirstLetterPipe} from "../angular-system/pipes/capitalize-first-letter.pipe";
import {StopTypingDirective} from "../angular-system/directive/stop-typing.directive";
import {CustomImageRelativePComponent} from "../reusables/custom-image-relative-p/custom-image-relative-p.component";



@NgModule({
  declarations: [
    GameListPaginationComponent,
    ButtonIconComponent,
    ChipComponent,
    ErrorBanerComponent,
    AutocompleateComponent,
    LoadingModalComponent,
    CustomImageComponent,
    ConfirmationModalComponent,
    WarningBanerComponent,
    CapitalizeFirstLetterPipe,
    StopTypingDirective,
    CustomImageRelativePComponent

  ],
  exports: [
    GameListPaginationComponent,
    ButtonIconComponent,
    ChipComponent,
    ErrorBanerComponent,
    AutocompleateComponent,
    LoadingModalComponent,
    CustomImageComponent,
    ConfirmationModalComponent,
    WarningBanerComponent,
    CapitalizeFirstLetterPipe,
    StopTypingDirective,
    CustomImageRelativePComponent

  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class AppCommonModule { }
