import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../model/app-state";
import {PlayerFriend} from "../model/player-friend";
import {CustomResponse} from "../model/custom-response";
import {DataState} from "../model/data-state";
import {PlayerFriendRequest} from "../model/player-friend-request";

@Component({
  selector: 'app-friends-settings',
  templateUrl: './friends-settings.component.html',
  styleUrls: ['./friends-settings.component.css']
})
export class FriendsSettingsComponent implements OnInit{


  maxFriends=4;
  $friends:Observable<AppState<PlayerFriend[]>> = new Observable<AppState<PlayerFriend[]>>()
  $friendsRequests:Observable<AppState<PlayerFriendRequest[]>> = new Observable<AppState<PlayerFriendRequest[]>>()

  constructor(private friendsService:FriendsService) {
  }
  ngOnInit(): void {
    this.friendsService.getFriends()
    this.friendsService.getFriendRequests()
    this.handleFriends();
    this.handleFriendRequests();


  }


  private handleFriends() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(
        startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
        map((element: CustomResponse) => {
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friends
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
}
