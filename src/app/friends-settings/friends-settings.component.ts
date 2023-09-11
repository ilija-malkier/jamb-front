import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../model/app-state";
import {PlayerFriend} from "../model/player-friend";
import {CustomResponse} from "../model/custom-response";
import {DataState} from "../model/data-state";
import {PlayerFriendRequest} from "../model/player-friend-request";
import {ModalService} from "../../services/modal.service";
import {FindFriendsModalComponent} from "../find-friends-modal/find-friends-modal.component";
import {el} from "date-fns/locale";
import {Friend} from "../model/friend";

@Component({
  selector: 'app-friends-settings',
  templateUrl: './friends-settings.component.html',
  styleUrls: ['./friends-settings.component.css']
})
export class FriendsSettingsComponent implements OnInit{


  maxFriends=10;
  $friends:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  $friendsRequests:Observable<AppState<PlayerFriendRequest[]>> = new Observable<AppState<PlayerFriendRequest[]>>()
  currentPage=0
  totalElements=0
  constructor(private friendsService:FriendsService,private modalService:ModalService) {
  }
  ngOnInit(): void {
    this.friendsService.getFriends(this.currentPage)
    this.friendsService.getFriendRequests()
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
          this.totalElements=element?.data?.friends.totalElements
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
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friend_requests
          }
        })
      )
    })
  }

  openFindFriendsModal() {
    this.modalService.toggleModal(FindFriendsModalComponent.findFriendsModalId)
  }

  handleNextPage(page: number) {
    this.friendsService.getFriends(this.currentPage)

  }
}
