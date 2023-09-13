import {Component, Input} from '@angular/core';
import {GameFilterResponse} from "../../model/game-filter-response";
import {GameStatus} from "../../model/game-status";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-history-card',
  templateUrl: './game-history-card.component.html',
  styleUrls: ['./game-history-card.component.css']
})
export class GameHistoryCard {

  @Input() game:GameFilterResponse=null

  protected readonly top = top;
  protected readonly GameStatus = GameStatus;

  constructor(private router:Router) {}

  navigateToGameDetails() {
    this.router.navigate(['/game',this.game.gameId])
  }
}
