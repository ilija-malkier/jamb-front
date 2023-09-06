import {Component, Input} from '@angular/core';
import {GameFilterResponse} from "../model/game-filter-response";
import {GameStatus} from "../model/game-status";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input() game:GameFilterResponse=null

  protected readonly top = top;
  protected readonly GameStatus = GameStatus;
}
