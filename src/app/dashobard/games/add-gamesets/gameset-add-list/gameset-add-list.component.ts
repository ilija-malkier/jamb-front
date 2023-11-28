import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {CustomResponse} from "../../../../model/custom-response";
import {DataState} from "../../../../model/data-state";
import {AppState} from "../../../../model/app-state";
import {GameSetResponse} from "../../../../model/game-set-response";
import {GamesetService} from "../../../../../services/gameset.service";

@Component({
  selector: 'app-gameset-add-list',
  templateUrl: './gameset-add-list.component.html',
  styleUrls: ['./gameset-add-list.component.css']
})
export class GamesetAddListComponent implements OnInit{
  $gamesets:Observable<AppState<GameSetResponse[]>> =new Observable<AppState<GameSetResponse[]>>();
  selectedNumber:number=0;
  totalItems:number=0
  selectedGameSet:GameSetResponse[]=[]

  constructor(private gamesetService:GamesetService) {
  }
  ngOnInit(): void {
    this.handleGamesets();
    this.gamesetService.getGameSets()

  }

  handleSelectedGameset(gameset: GameSetResponse) {
    this.selectedGameSet.push(gameset)
    this.selectedNumber=1
  }
  isSelected(gameSetId: number ) {
    return this.selectedGameSet.some(x=> x.gameSetId===gameSetId);
  }
  handleDeselectGameset(gameset:GameSetResponse){
    this.selectedGameSet=this.selectedGameSet.filter(x=>x.gameSetId!=gameset.gameSetId)
  }

  noneSelected() {
    this.selectedNumber=0
    this.selectedGameSet=[]
  }

  private handleGamesets() {
    this.gamesetService.gameSet$.subscribe(data=>{
      this.$gamesets=data.pipe(
        map((element: CustomResponse) => {

          console.log(element)
          this.totalItems=element?.data?.gameSetResponseList.totalElements
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.gameSetResponseList.gameSetResponse
          }
        }), startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),

      )
    })
  }

  // searchCoP(searchText) {
  //   console.log(searchText)
  //   if(searchText===null) return
  //   this.$gamesets=this.gamesetService.searchGameset(searchText).pipe(
  //     map(
  //       (element: CustomResponse) => {
  //         console.log(element)
  //         // this.totalPages=element?.data?.matching_usernames
  //         return {
  //           dataState: DataState.SUCCESS,
  //           appData: element?.data?.matching_usernames.map(data=> { return <Friend>{ 'username': data.username,'firstname': data.username[0],'lastname':null}})
  //         }
  //       }
  //     )
  //     ,startWith({dataState: DataState.LOADING}),
  //     catchError(err => {
  //       return of({dataState: DataState.ERROR, error: err})
  //     }),
  //   )
  //
  // }
}
