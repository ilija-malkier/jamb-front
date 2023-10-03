import {Component, OnInit} from '@angular/core';
import {DataState} from "../model/data-state";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../model/app-state";
import {GamesetService} from "../../services/gameset.service";
import {CustomResponse} from "../model/custom-response";

@Component({
  selector: 'app-account-gameset',
  templateUrl: './account-gameset.component.html',
  styleUrls: ['./account-gameset.component.css']
})
export class AccountGamesetComponent implements OnInit{

  // gamesets:Observable<AppState<>> =new Observable<AppState>()

  constructor(private gamesetService:GamesetService) {
  }



    protected readonly DataState = DataState;

  ngOnInit(): void {
    // this.gamesetService.gameSet$.subscribe(data=>{
    //   this.gamesets=data.pipe(
    //
    //     map((element: CustomResponse) => {
    //       return {
    //         dataState: DataState.SUCCESS,
    //         appData: element?.data?.friends.friends
    //       }
    //     }),startWith({dataState: DataState.LOADING}),
    //     catchError(err => {
    //       return of({dataState: DataState.ERROR, error: err})
    //     }),
    //   )
    // })
  }
}
