import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {UploadSheetComponent} from "../account/upload-sheet/upload-sheet.component";
import {FilterRequest} from "../../model/filter-request";
import {SortDirection} from "../../model/sort-direction";
import {GameListComponent} from "../games/game-list/game-list.component";
import {LoadingModalComponent} from "../../modals/loading-modal/loading-modal.component";
import {AuthService} from "../../../services/auth.service";
import {Route, Router} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../model/app-state";
import {DataState} from "../../model/data-state";
import {CustomResponse} from "../../model/custom-response";
import {GameFilterResponse} from "../../model/game-filter-response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.desc
  recentGames$:Observable<AppState<GameFilterResponse[]>> =new Observable<AppState<GameFilterResponse[]>>();
  @ViewChild("modal") modal:UploadSheetComponent
  @ViewChild("gameList",{static:false}) gameList:GameListComponent


  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}
  constructor(private gameService:GameService,private  authService:AuthService,private router:Router) {
  }


  ngOnInit(): void {
    this.gameService.getRecentGames();
    this.getRecentGames();
  }


  getRecentGames(){
    this.gameService.recentGames$.subscribe(data=>{
      this.recentGames$=data.pipe(
        startWith({dataState:DataState.LOADING}),
        catchError(err => {
          console.log(err)
          return of({dataState:DataState.ERROR,error:err})
        }),
        map((element:CustomResponse )=>{

          console.log(element)
          return {
            dataState:DataState.SUCCESS,
            appData:element?.data?.gameFilterResponses
          }
        }),
      )
    },error => {

    })
  }




  protected readonly SortDirection = SortDirection;




}
