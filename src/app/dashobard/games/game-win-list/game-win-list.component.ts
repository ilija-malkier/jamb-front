import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerGameDetailsResponse} from "../../../model/player-game-details-response";
import {GameService} from "../../../../services/game.service";

@Component({
  selector: 'app-win-list',
  templateUrl: './game-win-list.component.html',
  styleUrls: ['./game-win-list.component.css']
})
export class GameWinListComponent {

  @Input() players:PlayerGameDetailsResponse[]
  @Output() eventViewImageEmitter:EventEmitter<string>=new EventEmitter<string>()


  viewPlayerSheet(username: string) {
    this.eventViewImageEmitter.emit(username)
  }
}
