import {Component, TemplateRef, ViewChild} from '@angular/core';
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

  modalRef:BsModalRef
  @ViewChild("template") template:TemplateRef<any>
  constructor(private gameService:GameService,private modalServicebs:BsModalService) {
  }

  openModal() {
    this.modalRef = this.modalServicebs.show(this.template);
  }


  closeModal() {
    this.modalRef.hide()
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

      alertifyjs.success("Gameset "+ gamesetCreateRequest.name +" created.")
    },error => {
      alertifyjs.error("Gameset with that name already exists")
    },()=>{
      this.isGamesetCreating=false
      this.closeModal()
    })
  }

  exitGameset() {

  }
}
