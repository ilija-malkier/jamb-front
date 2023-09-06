import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../services/statistics.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../model/app-state";
import {HomeStatistics} from "../model/home-statistics";
import {DataState} from "../model/data-state";
import {CustomResponse} from "../model/custom-response";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.css']
})
export class HomeStatisticsComponent implements OnInit{

  $statistics:Observable<AppState<HomeStatistics>> = new Observable<AppState<HomeStatistics>>()
  constructor(private statisticsService:StatisticsService,private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<CustomResponse>("http://localhost:8081/player/game/total").subscribe(
      (data)=>{
        console.log(data)
      }
    )
    this.statisticsService.$homeStatistics.subscribe(
      next=>{
        this.$statistics=next.pipe(
          startWith({dataState: DataState.LOADING}),
          map((response:CustomResponse )=>{
            console.log(response.data.total_games)
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


  protected readonly DataState = DataState;
}
