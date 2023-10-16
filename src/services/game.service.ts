import {Injectable} from '@angular/core';
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";
import {FilterRequest} from "../app/model/filter-request";
import {SortDirection} from "../app/model/sort-direction";
import {format, parseISO} from 'date-fns';
import {GameCreateRequest} from "../app/model/game-create-request";
import {GameSetCreateRequest} from "../app/model/game-set-create-request";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpClient} from "@angular/common/http";
import * as alertifyjs from "alertifyjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private filterRequest: FilterRequest = {
    date_from: null,
    date_to: null,
    game_status: null,
    player_names: null,
    winner_names: null
  }
  protected sortField = "date"
  protected sortDirection: SortDirection = SortDirection.desc
  games$: BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>())
  $gameRequests:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject(new Observable<CustomResponse>())
  $gameRequestsSend:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject(new Observable<CustomResponse>())
  constructor(private httpClient:HttpClient) {

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
    console.log(filterRequest)
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

  saveGame(gameCreateRequest:GameCreateRequest,image:File) {
    const form = new FormData();
    form.append('file', image);
    form.append('request',  new Blob([JSON.stringify(gameCreateRequest)], {
      type: "application/json"
    }));

    return this.httpClient.post("http://localhost:8081/games",form)
  }

  getGameRequests(page:number){
    this.$gameRequests.next(
    this.httpClient.get<CustomResponse>("http://localhost:8081/games/requests/received",{
      params:{
        pageNumber:page
      }
    }))
  }

  declineGame(gameId: number) {
    this.httpClient.put<CustomResponse>("http://localhost:8081/games/request/decline",{gameId:gameId}).subscribe(data=>{
        alertifyjs.success(`Game ${gameId} declined.`)
    })
  }

  joinGame(gameId:number,image:string,score:number) {

   return this.httpClient.put<CustomResponse>("http://localhost:8081/games/request/approve",{gameId:gameId,image:image,score:score})
  }

  getGameSets() {
  return  this.httpClient.get<CustomResponse>("http://localhost:8081/gameSets/info")
  }

  createGameset(gamesetCreateRequest: GameSetCreateRequest) {
   return this.httpClient.post<CustomResponse>("http://localhost:8081/gameSets", gamesetCreateRequest)
  }

  viewPlayerSheet(username: string, gameId: number) {
    return this.httpClient.get<CustomResponse>(`http://localhost:8081/games/${gameId}/${username}/image`)
  }

  deleteGameRequest(gameId: number, username: string) {
   return  this.httpClient.delete<CustomResponse>("http://localhost:8081/games/request/"+gameId+"/"+username)
  }

  getGameRequestsSend(currentPage: number) {
      this.$gameRequestsSend.next(this.httpClient.get<CustomResponse>("http://localhost:8081/games/requests/sent"))
  }

  deleteGame(gameId: number) {
    return this.httpClient.delete<CustomResponse>("http://localhost:8081/games/"+gameId)
  }

  deleteAllSendGameRequests() {
    return this.httpClient.delete<CustomResponse>("http://localhost:8081/games/requests/delete")
  }

  getGameSetsForGame(gameId:number) {
    return this.httpClient.get<CustomResponse>("http://localhost:8081/gameSets/game/"+gameId)
  }

  removeGameFromGameset(gamesetId: number, gameId: number) {
    return this.httpClient.delete<CustomResponse>("http://localhost:8081/games/"+gameId+"/sets/"+gamesetId)
  }
}
