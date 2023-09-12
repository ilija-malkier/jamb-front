import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {PlayerFriend} from "../../model/player-friend";
import {NgForm} from "@angular/forms";
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent implements OnInit,OnDestroy{
  createGameModalId="create-game"
  static createGameModalId="create-game"
  createGameModalTitle="Create Game"
  isLoading: boolean;
  filterFriends:string[]=[]
  @Input() score:number=0;
  @Input() image:Uint8Array
  @Input() joinGame:boolean=false
  @Input() gameId:number=-1
  constructor(private modalService:ModalService,private gameService:GameService) {}
  ngOnDestroy(): void {
    this.modalService.unregister(this.createGameModalId);
  }

  ngOnInit(): void {
    this.modalService.register(this.createGameModalId);
  }

  cancelGameCreation() {
    this.modalService.closeModal(this.createGameModalId)
  }

  removeFilterFriends(username:string){
    this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==username);
  }

  saveGame(form: NgForm) {

    let gameSet=form.value['gameset']
    let numberOfPlayers=form.value['numofplayers']
    const textDecoder = new TextDecoder('utf-8');
    const textImage = textDecoder.decode(this.image);
    if(this.joinGame)
      this.gameService.joinGame(this.gameId,textImage,this.score)
    else
      this.gameService.saveGame({players:this.filterFriends,numberOfPlayers:parseInt(numberOfPlayers),image:textImage,score:this.score,gameSetId:1})
  }
  addFilterFriends(inputUsename: HTMLInputElement){
    if(this.filterFriends.includes(inputUsename.value)) return;
    //maybe notify user
    this.filterFriends.push(inputUsename.value)
    inputUsename.value=""
  }


}
