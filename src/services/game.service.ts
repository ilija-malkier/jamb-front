import {Injectable, OnInit} from '@angular/core';
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GameFilterResponse} from "../app/model/game-filter-response";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games$:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>( new Observable<CustomResponse>())
  constructor(private httpClient:HttpClient) {
    this.games$.next( this.httpClient.get<CustomResponse>("http://localhost:8081/game/filter"))
  }





}
