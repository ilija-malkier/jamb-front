import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../services/statistics.service";
import { catchError, map, Observable, of, startWith, tap} from "rxjs";
import {AppState} from "../model/app-state";
import {HomeStatistics} from "../model/home-statistics";
import {DataState} from "../model/data-state";
import {CustomResponse} from "../model/custom-response";

@Component({
  selector: 'app-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.css']
})
export class HomeStatisticsComponent implements OnInit{

  $statistics:Observable<AppState<HomeStatistics>> = new Observable<AppState<HomeStatistics>>()
  constructor(private statisticsService:StatisticsService) {

    this.statisticsService.$homeStatistics.subscribe(

      next=>{
        this.$statistics=  next.pipe(

          startWith({dataState: DataState.LOADING}),
           map(  (response:CustomResponse )=>{
            return {
              dataState:DataState.SUCCESS,
              appData: response.data?.total_games
            }
          }),
          catchError(err => {
            return of({dataState:DataState.ERROR,error:err})
          }),

        )
      }
    )
  }


  ngOnInit(): void {


  }



  protected readonly DataState = DataState;
  protected readonly parseInt = parseInt;
}
