import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  $friendRequest:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
  $friends:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject(new Observable<CustomResponse>())
  constructor(private http:HttpClient) { }


  getFriendRequests(){
    this.$friendRequest.next(this.http.get<CustomResponse>("http://localhost:8081/player/requests/received"))
  }

  getFriends(){
    this.$friends.next(this.http.get<CustomResponse>("http://localhost:8081/player/friends"))
  }


  filterForPage(currentPage: number) {

  }

  getPages() {

  }
}
