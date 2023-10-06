import {Component, OnInit, ViewChild} from '@angular/core';
import {DataState} from "../model/data-state";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../model/app-state";
import {GamesetService} from "../../services/gameset.service";
import {CustomResponse} from "../model/custom-response";
import * as alertifyjs from "alertifyjs";
import {Router} from "@angular/router";
import {GameSetDetailsResponse} from "../model/game-set-details-response";
import {GameSetInfo} from "../model/game-set-info";
import {LoadingModalComponent} from "../modals/loading-modal/loading-modal.component";

  @Component({
    selector: 'app-account-gameset',
    templateUrl: './account-gameset.component.html',
    styleUrls: ['./account-gameset.component.css']
  })
  export class AccountGamesetComponent implements OnInit{

    gamesets$:Observable<AppState<GameSetInfo[]>> =new Observable<AppState<GameSetInfo[]>>()
    private maxGamesets:number=10;
    @ViewChild("modal") modal:LoadingModalComponent

    constructor(private gamesetService:GamesetService,private router:Router) {
    }



      protected readonly DataState = DataState;

    ngOnInit(): void {
      this.gamesetService.getGameSets()
      this.gamesetService.gameSet$.subscribe(data=>{
        this.gamesets$=data.pipe(

          map((element: CustomResponse) => {
            return {
              dataState: DataState.SUCCESS,
              appData: element?.data?.gameSetResponseList
            }
          }),startWith({dataState: DataState.LOADING}),
          catchError(err => {
            return of({dataState: DataState.ERROR, error: err})
          }),
        )
      })
    }

    deleteGameset(id: number,name:string) {
      //when delete get gamesets again,or delete it from observable
      this.gamesetService.deleteGameset(id).subscribe(data=>{
        alertifyjs.success(`Gameset ${name} deleted successfully.`)
      },
        error => {
        alertifyjs.error(`Could not delete gameset ${name}.`)
        }
        );
    }

    viewDetails(id:number) {
      this.modal.openModal()
      this.router.navigate(['/gameset',id])
    }

    getMaxGamesets() {
      return this.maxGamesets;
    }
  }
