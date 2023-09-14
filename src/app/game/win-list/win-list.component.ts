import {Component, Input} from '@angular/core';
import {PlayerGameDetailsResponse} from "../../model/player-game-details-response";

@Component({
  selector: 'app-win-list',
  templateUrl: './win-list.component.html',
  styleUrls: ['./win-list.component.css']
})
export class WinListComponent {

  @Input() players:PlayerGameDetailsResponse[]
}
