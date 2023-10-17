import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, startWith, timer} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CustomResponse} from "../../../model/custom-response";
import {AppState} from "../../../model/app-state";
import {GameService} from "../../../../services/game.service";
import {DataState} from "../../../model/data-state";
import {FilterRequest} from "../../../model/filter-request";
import {SortDirection} from "../../../model/sort-direction";
import {GameFilterResponse} from "../../../model/game-filter-response";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{
  gameLists:Observable<AppState<GameFilterResponse[]>> = new Observable<AppState<GameFilterResponse[]>>();
  gamesLength:number=0;
  gameIndex:number=0;
  evenList:GameFilterResponse[]=[]
  oddList:GameFilterResponse[]=[]
  constructor(private gameService:GameService) {}
  get numberArray(): number[] {
    return Array.from({ length: this.customRound(this.gamesLength/2) }, (_, index) => index);
  }

  private customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    return Math.floor(number) + roundedDecimal;
  }
  public filter(filterRequest:FilterRequest,sortField:string,sortDirection:SortDirection){
    console.log(filterRequest)
    this.gameService.filter(filterRequest,sortField,sortDirection);
  }

  ngOnInit(): void {
    this.gameService.games$.subscribe(data=>{
      this.gameLists= data.pipe(

        map((element:CustomResponse )=>{
              this.gamesLength=element?.data?.gameFilterResponses.length
              this.gameIndex=0;
                 this.evenList= element?.data?.gameFilterResponses.filter((x,y)=>y%2==0)
                 this.oddList= element?.data?.gameFilterResponses.filter((x,y)=>y%2!=0)
              console.log(element)
              return {
                dataState:DataState.SUCCESS,
                appData:element?.data?.gameFilterResponses
              }
            }),
        startWith({dataState:DataState.LOADING}),
        catchError(err => {
          console.log(err)
          return of({dataState:DataState.ERROR,error:err})
        })
      )
    })
    this.gameService.filterForPage(0)
  }


  protected readonly DataState = DataState;

  load() {
    this.gameIndex++
  }
}
