import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CustomResponse} from "../app/model/custom-response";
import {HttpClient} from "@angular/common/http";
import {ht} from "date-fns/locale";

@Injectable({
  providedIn: 'root'
})
export class GamesetService implements OnInit{

  gameSet$:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>())
  constructor(private  http:HttpClient) { }

  ngOnInit(): void {
    this.gameSet$.next(this.http.get<CustomResponse>("http://localhost:8081/gameSets"))
  }

  deleteGameset(id: number) {
      return this.http.delete<CustomResponse>(`http://localhost:8081/gameSets/${id}`)
  }

  getGamesetDetails(gameSetId: string) {
      return this.http.get<CustomResponse>('http://localhost:8081/gameSets/'+gameSetId)
  }

  removeGameFromGameset(gameId: number, gameSetid: number) {
   return  this.http.delete<CustomResponse>("http://localhost:8081/games/"+gameId+"/sets/"+ gameSetid)
  }

  addGameToGameset(gameId: number,gameSetId) {
    return this.http.patch<CustomResponse>("http://localhost:8081/games",{"gameSetId":gameSetId},{
      params:{
        gameId:gameId,
      }
    })
  }

  getGameSets() {
     this.gameSet$.next( this.http.get<CustomResponse>("http://localhost:8081/gameSets/info"))
  }

  filterForPage(currentPage: number) {

  }

  updateGameset(name: string, description: string,gamesetid:number) {
    return this.http.patch<CustomResponse>(" http://localhost:8081/gameSets/"+gamesetid,{'name':name,'description':description})
  }
}
