import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";
import {FriendRequestRequest} from "../app/model/friend-request-request";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  $friendRequest:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
  $friends:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
   maxFriends=3;

  constructor(private http:HttpClient) { }


  getFriendRequests(page: number){
    this.$friendRequest.next(this.http.get<CustomResponse>("http://localhost:8081/player/requests/received",{
      params:{
        pageNumber:page,
        pageSize:this.maxFriends
      }
    }))
  }

  getFriends(page: number){
    this.$friends.next(this.http.get<CustomResponse>("http://localhost:8081/player/friends",{
      params:{
        pageNumber:page,
        pageSize:this.maxFriends
      }
    }))
  }


  filterForPage(currentPage: number) {

    this.getFriends(currentPage - 1)
  }

  getPages() {

  }

  findFriends(value: string) {
   return this.http.get<CustomResponse>("http://localhost:8081/player/friends/new/find",{
      params:{
        find:value
      }
    })
  }

  sendFriendRequest(username: string) {
  let friendRequest=<FriendRequestRequest>{username:username}
   return  this.http.post<CustomResponse>("http://localhost:8081/player/request/send",friendRequest)
  }

  unfriend(username: string) {

   return  this.http.delete<CustomResponse>("http://localhost:8081/player/friends/"+username)
  }
}
