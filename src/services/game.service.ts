import {Injectable, OnInit} from '@angular/core';
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GameFilterResponse} from "../app/model/game-filter-response";
import {FilterRequest} from "../app/model/filter-request";
import {SortDirection} from "../app/model/sort-direction";
import { format, parseISO } from 'date-fns';
import {da} from "date-fns/locale";
@Injectable({
  providedIn: 'root'
})
export class GameService {

  games$:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>( new Observable<CustomResponse>())
  constructor(private httpClient:HttpClient) {
    this.games$.next( this.httpClient.get<CustomResponse>("http://localhost:8081/game/filter"))
  }


  filter(filterRequest: FilterRequest, sortField: string, sortDirection: SortDirection){
    let params:{}
    if(filterRequest.date_to!=null && filterRequest.date_to.toString().length>0){
      params={... params,"dateTo":this.convertToLocalDateTime(filterRequest.date_to),}
    }
    if(filterRequest.date_from !=null && filterRequest.date_from.toString().length>0){
      params={... params,"dateFrom":this.convertToLocalDateTime(filterRequest.date_from)}
    }
    if(filterRequest.game_status !=null){
      params={... params,"gameStatus":filterRequest.game_status}
    }
    if(filterRequest.player_names!=null && filterRequest.player_names.length>0){
      params={... params,"opponentUsernames":filterRequest.player_names}
    }
    if(filterRequest.winner_names!=null && filterRequest.winner_names.length>0){
      params={... params, "winnerUsernames":filterRequest.winner_names}
    }

    params={... params,
      "sortField":sortField,
      "sortDirection":sortDirection
    }
      this.games$.next(
        this.httpClient.get<CustomResponse>("http://localhost:8081/game/filter",{
          params:params
        })
      )
  }
  private convertToLocalDateTime(date:Date){
   const localDateTime= parseISO(new Date(date).toISOString())
  return  format(localDateTime, "yyyy-MM-dd'T'HH:mm:ss");

  }




}
