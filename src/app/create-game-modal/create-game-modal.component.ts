import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent implements OnInit,OnDestroy{
  createGameModalId="create-game"
  createGameModalTitle="Create Game"
  constructor(private modalService:ModalService) {}
  ngOnDestroy(): void {
    this.modalService.unregister(this.createGameModalId);
  }

  ngOnInit(): void {
    this.modalService.register(this.createGameModalId);
    this.modalService.toggleModal(this.createGameModalId);
  }

}
