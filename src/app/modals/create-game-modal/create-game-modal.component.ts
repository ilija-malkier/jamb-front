import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {PlayerFriend} from "../../model/player-friend";
import {NgForm} from "@angular/forms";
import {GameService} from "../../../services/game.service";
import {FindFriendsModalComponent} from "../find-friends-modal/find-friends-modal.component";
import {GameSetCreateRequest} from "../../model/game-set-create-request";
import * as alertifyjs from "alertifyjs";
import {GameSetInfo} from "../../model/game-set-info";
import {Router} from "@angular/router";
import {DataState} from "../../model/data-state";

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent implements OnInit,OnDestroy{
  createGameModalId="create-game"
  static createGameModalId="create-game"
  createGameModalTitle="Create Game"
  gameSets:GameSetInfo[]=[]
  @Input() score:number=0;
  @Input() image:File
  @Input() joinGame:boolean=false
  @Input() gameId:number=-1
  createNewGamesetContent:boolean=false
  selectedGamesetId:number=-1
  selectedGamesetName:string='Select'
  showError=false
  errorMessage=''
  filterFriends:string[]=[]
  isLoadingSaveGame:boolean=false
  isLoadingJoinGame:boolean=false
  isGamesetCreating:boolean=false
  constructor(private modalService:ModalService,private gameService:GameService,private router:Router) {}
  ngOnDestroy(): void {
    this.modalService.unregister(this.createGameModalId);
  }

  isModalOpen(){
  }
  ngOnInit(): void {
    this.modalService.register(this.createGameModalId);
    this.getGameSets()

  }

  cancelGameCreation() {
    this.modalService.closeModal(this.createGameModalId)
  }



  saveGame(form: NgForm) {
    this.isLoadingSaveGame=true
    let gameSet=form.value['gameset']
    let numberOfPlayers=form.value['numofplayers']
    // const textDecoder = new TextDecoder('utf-8');
    // const textImage = textDecoder.decode(this.image);
    // if(this.joinGame)
      // this.gameService.joinGame(this.gameId,this.image,this.score)
    // else
    if(form.invalid ) {
      this.isLoadingSaveGame=false
      return
    }
      this.gameService.saveGame({players:this.filterFriends,numberOfPlayers:parseInt(numberOfPlayers),score:this.score,gameSetId:this.selectedGamesetId},this.image).subscribe(data=>{
        this.modalService.toggleModal(CreateGameModalComponent.createGameModalId)
        this.router.navigate(['home'])
      },error => {
        this.showError=true
        this.errorMessage="Could not create the game.Please try again later."
        console.log("error")
      },()=>{
        this.isLoadingSaveGame=false
      })
  }


  getGameSets(){
  this.gameService.getGameSets().subscribe(data=>{
    this.gameSets=data.data.gameSetResponseList
  });

}
  createNewGameset() {
    this.createNewGamesetContent=true;
  }

  saveGameset(formCreateGameset: NgForm) {
    this.isGamesetCreating=true
    if(formCreateGameset.invalid){
      this.isGamesetCreating=false
      return
    }
   let gamesetCreateRequest=<GameSetCreateRequest> formCreateGameset.value
    gamesetCreateRequest={... gamesetCreateRequest,gameIds:[]}
    this.gameService.createGameset(gamesetCreateRequest).subscribe(data=>{
      this.createNewGamesetContent=false
      this.getGameSets()

      alertifyjs.success("Gameset "+ gamesetCreateRequest.name +" created.")
    },error => {
      alertifyjs.error("Gameset with that name already exists")
    },()=>{
      this.isGamesetCreating=false
    })
    console.log(this.filterFriends)
  }

  exitGameset() {
    this.createNewGamesetContent=false
  }

  setGameset(gameSetId: number) {
      this.selectedGamesetId=gameSetId
    this.selectedGamesetName=this.gameSets.filter(x=>x.gameSetId===gameSetId)[0].gameSetName
  }

  handleFiendsAdded(friends: string[]) {
      this.filterFriends=friends
  }

  protected readonly DataState = DataState;
}
