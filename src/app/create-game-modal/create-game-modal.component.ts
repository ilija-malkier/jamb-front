import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {PlayerFriend} from "../model/player-friend";
import {NgForm} from "@angular/forms";

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
  constructor(private modalService:ModalService) {}
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
    console.log(form.value)
  }
}
