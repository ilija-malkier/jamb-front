import {Component, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {GameFilterResponse} from "../../model/game-filter-response";
import {GameStatus} from "../../model/game-status";
import {Router} from "@angular/router";
import {ModalService} from "../../../services/modal.service";
import {LoadingModalComponent} from "../../modals/loading-modal/loading-modal.component";

@Component({
  selector: 'app-game-history-card',
  templateUrl: './game-history-card.component.html',
  styleUrls: ['./game-history-card.component.css'],
  //nije htelo da renderuje kao child komponentu taj css nije raido dok ovo nisam ubacio
  encapsulation: ViewEncapsulation.None
})
export class GameHistoryCard {

  @Input() game:GameFilterResponse=null
@ViewChild("modal") modal:LoadingModalComponent

  protected readonly top = top;
  protected readonly GameStatus = GameStatus;

  constructor(private router:Router,private modalService:ModalService) {}

  navigateToGameDetails() {
    this.modal.openModal()
    this.router.navigate(['/game',this.game.gameId])
  }
}
