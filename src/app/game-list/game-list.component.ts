import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {GameFilterResponse} from "../model/game-filter-response";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CustomResponse} from "../model/custom-response";
import {AppState} from "../model/app-state";
import {GameService} from "../../services/game.service";
import {DataState} from "../model/data-state";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{
  gameLists:Observable<AppState<GameFilterResponse[]>> = new Observable<AppState<GameFilterResponse[]>>(null);
  constructor(private gameService:GameService) {
  }
  ngOnInit(): void {
    this.gameService.games$.subscribe(data=>{

      this.gameLists= data.pipe(
            startWith({dataState:DataState.LOADING}),
            catchError(err => {
              return of({dataState:DataState.ERROR,error:err})
            }),
            map((element:CustomResponse )=>{
              console.log(element)
              return {
                dataState:DataState.SUCCESS,
                appData:element.data?.gameFilterResponses
              }
            })
      )
    })
  }


  protected readonly DataState = DataState;
}
