import { Component } from '@angular/core';
import {GameDetailsResponse} from "../../../model/game-details-response";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../../services/game.service";
import {CustomResponse} from "../../../model/custom-response";
import {GameSetDetailsResponse} from "../../../model/game-set-details-response";
import {GamesetService} from "../../../../services/gameset.service";
import * as alertifyjs from "alertifyjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-game-set-details-component',
  templateUrl: './game-set-details.component.html',
  styleUrls: ['./game-set-details.component.css']
})
export class GameSetDetailsComponent {



  updateError:boolean=false
  gameset:GameSetDetailsResponse=null
  description:string=''
  name:string=''
  isEditMode: boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private gamesetService:GamesetService) {}


  ngOnInit(): void {
    let data= <CustomResponse>this.activatedRoute.snapshot.data['data']
    console.log(data)

    this.gameset=data.data.gameSet
    this.name=this.gameset.gameSetName
    this.description=this.gameset.description
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



  toggleEdit() {
    this.isEditMode=!this.isEditMode
  }

  backFromEdit() {
    this.name=this.gameset.gameSetName
    this.description=this.gameset.description
    this.updateError=false
    this.isEditMode=false
  }

  saveGamesetChanges() {
    if(!this.checkUpdateValues()) {
      this.updateError=true
      return
    }
    this.updateError=false
    this.gamesetService.updateGameset(this.name,this.description,this.gameset.id).subscribe(data=>{

      this.gameset.gameSetName=this.name
      this.gameset.description=this.description
      this.isEditMode=false
      alertifyjs.success("Successfully updated gameset")
    },error=>{
      alertifyjs.error("Could not update gameset")

    })

  }

  private checkUpdateValues() {

    return this.name.length!=0 && this.description.length!=0
  }
}
