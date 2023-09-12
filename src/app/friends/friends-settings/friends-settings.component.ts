import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../model/app-state";
import {PlayerFriend} from "../../model/player-friend";
import {CustomResponse} from "../../model/custom-response";
import {DataState} from "../../model/data-state";
import {PlayerFriendRequest} from "../../model/player-friend-request";
import {ModalService} from "../../../services/modal.service";
import {FindFriendsModalComponent} from "../../modals/find-friends-modal/find-friends-modal.component";
import {el} from "date-fns/locale";
import {Friend} from "../../model/friend";

@Component({
  selector: 'app-friends-settings',
  templateUrl: './friends-settings.component.html',
  styleUrls: ['./friends-settings.component.css']
})
export class FriendsSettingsComponent implements OnInit{


  $friends:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  $friendsRequests:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  currentPageFriends=0
  currentPageFriendsRequests=0
  totalElementsFriends=0
  totalElementsFriendsRequests=0
  constructor(private friendsService:FriendsService,private modalService:ModalService) {
  }
  ngOnInit(): void {
    this.friendsService.getFriends(this.currentPageFriends)
    this.friendsService.getFriendRequests(this.currentPageFriendsRequests)
    this.handleFriends();
    this.handleFriendRequests();
  }
   customRound(number: number): number {
    const decimalPart = number - Math.floor(number);

     const roundedDecimal = Math.ceil(decimalPart);
    return Math.floor(number) + roundedDecimal;
  }

  private handleFriends() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(
        startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
        map((element: CustomResponse) => {
          this.totalElementsFriends=element?.data?.friends.totalElements
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friends.friends
          }
        })
      )
    })
  }

  private handleFriendRequests() {
    this.friendsService.$friendRequest.subscribe(data => {
      this.$friendsRequests = data.pipe(
        startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
        map((element: CustomResponse) => {
          this.totalElementsFriendsRequests=element?.data?.friend_requests.totalElements
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friend_requests?.friends
          }
        })
      )
    })
  }

  openFindFriendsModal() {
    this.modalService.toggleModal(FindFriendsModalComponent.findFriendsModalId)
  }


  unfriend(username: string) {
    this.friendsService.unfriend(username)
    this.currentPageFriends=0
    this.friendsService.getFriends(this.currentPageFriends)
  }

  getMaxFriends(){
    return this.friendsService.maxFriends
  }
}
