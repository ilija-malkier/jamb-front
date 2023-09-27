import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomResponse} from "../../model/custom-response";
import {GameDetailsResponse} from "../../model/game-details-response";
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{

  game:GameDetailsResponse=null
  constructor(private activatedRoute:ActivatedRoute,private gameService:GameService) {}


  ngOnInit(): void {
   let data= <CustomResponse>this.activatedRoute.snapshot.data['data']
    this.game=data.data.game
    console.log(this.game)
  }

  protected readonly event = event;

  handleViewImage(username:string) {
    this.gameService.viewPlayerSheet(username,this.game.gameId).subscribe(data=>{
      this.game.image=data.data.players_image.image
    })
  }
}
