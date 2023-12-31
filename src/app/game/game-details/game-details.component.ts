import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomResponse} from "../../model/custom-response";
import {GameDetailsResponse} from "../../model/game-details-response";
import {GameService} from "../../../services/game.service";
import {GamesetService} from "../../../services/gameset.service";
import {GameSetInfo} from "../../model/game-set-info";
import {error} from "@angular/compiler-cli/src/transformers/util";
import * as alertifyjs from "alertifyjs";
import {LoadingModalComponent} from "../../modals/loading-modal/loading-modal.component";
import {ModalService} from "../../../services/modal.service";
import {da} from "date-fns/locale";
import {ChipEmmit} from "../../model/chip-emmit";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{

  game:GameDetailsResponse=null
  gameSetsToAdd:GameSetInfo[]=[]
  selectedGamesetId:number=-1
  selectedGamesetName:string='Select'
  isEditMode:boolean=false
  constructor(private activatedRoute:ActivatedRoute,private gameService:GameService,private gameSetService:GamesetService,private router:Router,private modalService:ModalService) {}

  getGameSets(){
    this.gameService.getGameSetsForGame(this.game.gameId).subscribe(data=>{
      console.log(data)

      this.gameSetsToAdd=data.data.GameGamesetResponseList?.gameSetResponse
    });

  }

  removeGameset(gameset: ChipEmmit){

    this.gameService.removeGameFromGameset(gameset.chipId,this.game.gameId).subscribe(data=>{
      alertifyjs.success("Game deleted from gameset " +gameset)
      this.game.gameSets = this.game.gameSets.filter(element=>{
        if(element.gameSetId!=gameset.chipId){
          this.gameSetsToAdd.push({gameSetName:element.gameSetName,gameSetId:element.gameSetId})
          return false
        }
        return true
      })

    },error=>{
      alertifyjs.error("Could not delete game from gameset "+gameset)
    })
  }
  setGameset(gameSetId: number) {
    this.selectedGamesetId=gameSetId
    this.selectedGamesetName=this.gameSetsToAdd.filter(x=>x.gameSetId===gameSetId)[0].gameSetName
  }
  ngOnInit(): void {

   let data= <CustomResponse>this.activatedRoute.snapshot.data['data']
    this.game=data.data.game
    this.getGameSets()
  }

  protected readonly event = event;

  handleViewImage(username:string) {
    this.gameService.viewPlayerSheet(username,this.game.gameId).subscribe(data=>{
      this.game.image=data.data.players_image.image
    })
  }

  addGameToGameset() {

    this.gameSetService.addGameToGameset(this.game.gameId,this.selectedGamesetId).subscribe(data=>{
      this.game.gameSets.push({gameSetName:this.selectedGamesetName,gameSetId:this.selectedGamesetId})
      this.gameSetsToAdd=this.gameSetsToAdd.filter(gameset=>gameset.gameSetId!=this.selectedGamesetId)
      this.restartGameSetVaribles()
    },error=>{

    })
  }

  private restartGameSetVaribles() {
    this.selectedGamesetId=-1
    this.selectedGamesetName='Select'
  }

  toggleEditMode() {
    this.isEditMode=!this.isEditMode
  }

  deleteGame() {
    // this.modalService.toggleModal(LoadingModalComponent.loadingModalId)

    this.gameService.deleteGame(this.game.gameId).subscribe(data=>{
      alertifyjs.success("Successfully deleted game")
      this.router.navigate(['game'])
    },error=>{
      alertifyjs.error("Unable to delete the game.Please try again later.")

    },()=>{
      // this.modalService.toggleModal(LoadingModalComponent.loadingModalId)

    })
  }


}
