import {Injectable, OnInit} from '@angular/core';
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GameFilterResponse} from "../app/model/game-filter-response";
import {FilterRequest} from "../app/model/filter-request";
import {SortDirection} from "../app/model/sort-direction";
import { format, parseISO } from 'date-fns';
import {da} from "date-fns/locale";
import {GameCreateRequest} from "../app/model/game-create-request";
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}
  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.desc
  games$:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>( new Observable<CustomResponse>())
  constructor(private httpClient:HttpClient) {
    this.games$.next( this.httpClient.get<CustomResponse>("http://localhost:8081/games/filter"))
  }

  getPages(){
    return  this.httpClient.get<CustomResponse>("http://localhost:8081/games/count")
  }


  filterForPage(page:number){
    let params = this.createParams();
    params= {... params,pageNumber:page}
    this.games$.next(
      this.httpClient.get<CustomResponse>("http://localhost:8081/games/filter",{
        params:params
      })
    )
  }
  filter(filterRequest: FilterRequest, sortField: string, sortDirection: SortDirection){
    this.setParams(filterRequest,sortField,sortDirection)

    let params = this.createParams();
    this.games$.next(
        this.httpClient.get<CustomResponse>("http://localhost:8081/games/filter",{
          params:params
        })
      )
  }

  private createParams():any {
    let params:{}
    if (this.filterRequest.date_to != null && this.filterRequest.date_to.toString().length > 0) {
      params = {...params, "dateTo": this.convertToLocalDateTime(this.filterRequest.date_to),}
    }
    if (this.filterRequest.date_from != null && this.filterRequest.date_from.toString().length > 0) {
      params = {...params, "dateFrom": this.convertToLocalDateTime(this.filterRequest.date_from)}
    }
    if (this.filterRequest.game_status != null) {
      params = {...params, "gameStatus": this.filterRequest.game_status}
    }
    if (this.filterRequest.player_names != null && this.filterRequest.player_names.length > 0) {
      params = {...params, "opponentUsernames": this.filterRequest.player_names}
    }
    if (this.filterRequest.winner_names != null && this.filterRequest.winner_names.length > 0) {
      params = {...params, "winnerUsernames": this.filterRequest.winner_names}
    }

    return {
      ...params,
      "sortField": this.sortField,
      "sortDirection": this.sortDirection
    }
  }

  private convertToLocalDateTime(date:Date){
   const localDateTime= parseISO(new Date(date).toISOString())
  return  format(localDateTime, "yyyy-MM-dd'T'HH:mm:ss");

  }


  private setParams(filterRequest: FilterRequest, sortField: string, sortDirection: SortDirection) {
    this.filterRequest=filterRequest
    this.sortField=sortField
    this.sortDirection=sortDirection
  }

  saveGame(gameCreateRequest:GameCreateRequest) {
    console.log(gameCreateRequest)
    this.httpClient.post<CustomResponse>("http://localhost:8081/games",gameCreateRequest).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
