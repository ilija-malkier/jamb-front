import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";
import {FriendRequestRequest} from "../app/model/friend-request-request";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  $friendRequestReceived:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
  $friends:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
  $friendRequestsSend:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())

   maxFriends=10;

  constructor(private http:HttpClient) { }
  private baseURL = 'https://jsonplaceholder.typicode.com/users';


  getData() {
    return this.http.get(this.baseURL);
  }

  getFriendRequests(page: number){
    this.$friendRequestReceived.next(this.http.get<CustomResponse>("http://localhost:8081/player/requests/received",{
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
  getFriendRequestsSend(page: number) {
    this.$friendRequestsSend.next(this.http.get<CustomResponse>("http://localhost:8081/player/requests/sent",{
      params:{
        pageNumber:page,
        pageSize:this.maxFriends
      }
    }))
  }

  filterForPage(currentPage: number) {

    this.getFriends(currentPage )
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

  serachFriends(friendSearchText: string) {
    return this.http.get<CustomResponse>("http://localhost:8081/player/friends/find",{params:{name:friendSearchText}})
  }

  acceptFriend(username: string) {
   return this.http.put<CustomResponse>("http://localhost:8081/player/request/approve",{username:username})
  }
  declineFriend(username:string){
    return this.http.put<CustomResponse>("http://localhost:8081/player/request/decline",{username:username})

  }


  cancelFriendRequest(username: string) {
    return this.http.post<CustomResponse>("http://localhost:8081/player/request/unsend",{"username":username})
  }

  deleteAllSendRequests() {
    return this.http.delete<CustomResponse>("http://localhost:8081/player/requests/delete")
  }
}
