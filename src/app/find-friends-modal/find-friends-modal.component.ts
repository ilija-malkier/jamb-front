import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {FriendsService} from "../../services/friends.service";
import {FindFriends} from "../model/find-friends";
import {da} from "date-fns/locale";
import {Friend} from "../model/friend";

@Component({
  selector: 'app-find-friends-modal',
  templateUrl: './find-friends-modal.component.html',
  styleUrls: ['./find-friends-modal.component.css']
})
export class FindFriendsModalComponent implements OnInit,OnDestroy{

  findFriendsModalId="find-friends"
  static findFriendsModalId="find-friends"
  findFriendsModalTitle="Find Friends"
  foundFriends:Friend[]=[]
  constructor(private modalService:ModalService,private friendsService:FriendsService) {}

  ngOnInit(): void {
    this.modalService.register(this.findFriendsModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.findFriendsModalId)

  }

  onStopTyping(value: string) {
    if(value===''){
      this.foundFriends=[]
      return
    }
    this.friendsService.findFriends(value).subscribe(data=>{
      console.log(data)
      this.foundFriends= <Friend[]>(<FindFriends> data.data).matching_usernames
    })
  }
  closeModal() {
    this.modalService.closeModal(this.findFriendsModalId)
  }


}
