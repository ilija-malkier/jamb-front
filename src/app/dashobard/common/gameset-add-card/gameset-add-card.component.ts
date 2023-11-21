import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GamesetService} from "../../../../services/gameset.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {GamesetGameResponse} from "../../../model/gameset-game-response";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {GameSetResponse} from "../../../model/game-set-response";

@Component({
  selector: 'app-gameset-add-card',
  templateUrl: './gameset-add-card.component.html',
  styleUrls: ['./gameset-add-card.component.css']
})
export class GamesetAddCardComponent {

  @Input() gameset:GameSetResponse
  @Output() selectGamesetEmitter:EventEmitter<GameSetResponse>=new EventEmitter<GameSetResponse>();
  @Output() deselectGameEmitter:EventEmitter<GameSetResponse>=new EventEmitter<GameSetResponse>();
  @Input() isSelected:boolean=false
  selectGameset() {
    if(this.isSelected) this.deselectGameEmitter.emit(this.gameset)
   else  this.selectGamesetEmitter.emit(this.gameset)
  }
}
