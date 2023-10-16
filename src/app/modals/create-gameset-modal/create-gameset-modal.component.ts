import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GameSetCreateRequest} from "../../model/game-set-create-request";
import alertifyjs from "alertifyjs";
import {GameService} from "../../../services/game.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-create-gameset-modal',
  templateUrl: './create-gameset-modal.component.html',
  styleUrls: ['./create-gameset-modal.component.css']
})
export class CreateGamesetModalComponent {
  isGamesetCreating:boolean=false
  @ViewChild("closeDialog") elementRef:HTMLButtonElement
  constructor(private gameService:GameService
  ) {
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
      this.closeModal();
      },error => {
      alertifyjs.error("Gameset with that name already exists")
    },()=>{
      this.isGamesetCreating=false


    })
  }


  private closeModal() {
    document.getElementById("closeDialog")?.click();

  }
}
