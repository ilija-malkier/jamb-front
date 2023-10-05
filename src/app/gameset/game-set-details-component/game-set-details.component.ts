import { Component } from '@angular/core';
import {GameDetailsResponse} from "../../model/game-details-response";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {CustomResponse} from "../../model/custom-response";
import {GameSetDetailsResponse} from "../../model/game-set-details-response";
import {GamesetService} from "../../../services/gameset.service";
import * as alertifyjs from "alertifyjs";

@Component({
  selector: 'app-game-set-details-component',
  templateUrl: './game-set-details.component.html',
  styleUrls: ['./game-set-details.component.css']
})
export class GameSetDetailsComponent {




  gameset:GameSetDetailsResponse=null
  constructor(private activatedRoute:ActivatedRoute,private gamesetService:GamesetService) {}


  ngOnInit(): void {
    let data= <CustomResponse>this.activatedRoute.snapshot.data['data']

    this.gameset=data.data.gameSet
  }

  removeFromGameset(gameId: number) {
    this.gamesetService.removeGameFromGameset(gameId,this.gameset.id).subscribe(
      data=>{
        alertifyjs.success("Game successfully removed from gameset")
        this.gameset.games=this.gameset.games.filter(e=> e.gameId!==gameId);
      },
      error => {
        alertifyjs.error("Cloud not remove game from gameset")
      }
    )
  }
}
