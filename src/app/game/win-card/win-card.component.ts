import {Component, Input, OnInit} from '@angular/core';
import {PlayerGameDetailsResponse} from "../../model/player-game-details-response";
import {GameService} from "../../../services/game.service";
import {da} from "date-fns/locale";

@Component({
  selector: 'app-win-card',
  templateUrl: './win-card.component.html',
  styleUrls: ['./win-card.component.css']
})
export class WinCardComponent implements OnInit{

  @Input() player:PlayerGameDetailsResponse
  randomColor='';
  generateRandomColor() {
    const randomR = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomG = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomB = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255


    this.randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

  constructor(private gameService:GameService) {
  }

  ngOnInit(): void {
    this.generateRandomColor()
  }


}
