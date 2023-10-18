import {Component, OnInit, ViewChild} from '@angular/core';
import {FriendsService} from "../../../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {PlayerFriend} from "../../../model/player-friend";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {PlayerFriendRequest} from "../../../model/player-friend-request";
import {ModalService} from "../../../../services/modal.service";
import {FindFriendsModalComponent} from "../../../modals/find-friends-modal/find-friends-modal.component";
import {el} from "date-fns/locale";
import {Friend} from "../../../model/friend";
import alertifyjs from "alertifyjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {PlayerFriendRequestSend} from "../../../model/player-friend-request-send";
import {FriendSendRequestDetails} from "../../../model/friend-send-request-details";
import {
  FriendsRequestsSendListPaginationComponent
} from "../friends-requests-send-list-pagination/friends-requests-send-list-pagination.component";

@Component({
  selector: 'app-friends-settings',
  templateUrl: './friends-settings.component.html',
  styleUrls: ['./friends-settings.component.css']
})
export class FriendsSettingsComponent implements OnInit{


  $friends:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  currentPageFriends=0
  @ViewChild("friends") friends:FriendsRequestsSendListPaginationComponent


  $friendsRequests:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  currentPageFriendsRequests  =0
  @ViewChild("friendsRequestsReceived") friendsRequestsReceived:FriendsRequestsSendListPaginationComponent


  $friendRequestsSend:Observable<AppState<FriendSendRequestDetails[]>> = new Observable<AppState<FriendSendRequestDetails[]>>()
  currentPageFriendsRequestsSend=0
  @ViewChild("friendsRequestsSend") friendsRequestsSend:FriendsRequestsSendListPaginationComponent
  constructor(private friendsService:FriendsService,private modalService:ModalService) {}
  ngOnInit(): void {
    this.friendsService.getFriends(this.currentPageFriends)
    this.friendsService.getFriendRequests(this.currentPageFriendsRequests)
    this.friendsService.getFriendRequestsSend(this.currentPageFriendsRequestsSend)
    this.handleFriends();
    this.handleFriendRequestsReceived();
    this.handleFriendRequestsSend();
  }

  private handleFriends() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(

        map((element: CustomResponse) => {

          this.friends.setTotalPages(element?.data?.friends.totalElements)
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friends.friends
          }
        }),startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }

  private handleFriendRequestsReceived() {
    this.friendsService.$friendRequestReceived.subscribe(data => {
      this.$friendsRequests = data.pipe(

        map((element: CustomResponse) => {

          this.friendsRequestsReceived.setTotalPages(element?.data?.friend_requests.totalElements)

          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friend_requests?.requests
          }
        }),startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }
  private handleFriendRequestsSend() {
    this.friendsService.$friendRequestsSend.subscribe(data => {
      this.$friendRequestsSend = data.pipe(

        map((element: CustomResponse) => {

          this.friendsRequestsSend.setTotalPages(element?.data?.friend_requests_send.totalElements)
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friend_requests_send.requests

          }
        }),startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }


  unfriend(username: string) {
    this.friendsService.unfriend(username).subscribe(data=>{
      alertifyjs.success(username +' unfriended')
    },error => {
      alertifyjs.error('Could not unfriend ' + username+',try again later.')

    })
    this.currentPageFriends=0
    this.friendsService.getFriends(this.currentPageFriends)
  }

  getMaxFriends(){
    return this.friendsService.maxFriends
  }

  acceptFriendRequest(username: string) {
    this.friendsService.acceptFriend(username).subscribe(data=>{
      alertifyjs.success("Friend request accepted")
      this.friendsService.getFriendRequests(this.currentPageFriendsRequests)
    })

  }

  declineFriendRequest(username: string) {
    this.friendsService.declineFriend(username).subscribe(data=>{
      alertifyjs.success("Friend request declined")
      this.friendsService.getFriendRequests(this.currentPageFriendsRequests)
    })
  }


  protected readonly DataState = DataState;

  cancelFriendRequest(username: string) {
    //delete from list
    this.friendsService.cancelFriendRequest(username).subscribe(data=>{
      alertifyjs.success("Successfully deleted request")
    },error=>{
      alertifyjs.error("Error while canceling request")
    })
  }

  deleteAllFriendRequestSend() {
    this.friendsService.deleteAllSendRequests().subscribe(data=>{
      alertifyjs.success("Successfully deleted all request")
    },error=>{
      alertifyjs.error("Error while deleting request")
    })
  }
}
