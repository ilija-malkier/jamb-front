import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-find-friends-modal',
  templateUrl: './find-friends-modal.component.html',
  styleUrls: ['./find-friends-modal.component.css']
})
export class FindFriendsModalComponent implements OnInit,OnDestroy{

  findFriendsModalId="find-friends"
  static findFriendsModalId="find-friends"
  findFriendsModalTitle="Find Friends"
  constructor(private modalService:ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this.findFriendsModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.findFriendsModalId)

  }

  closeModal() {
    this.modalService.closeModal(this.findFriendsModalId)
  }
}
