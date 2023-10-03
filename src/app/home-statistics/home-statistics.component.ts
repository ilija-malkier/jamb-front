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
  gamesWon:string='10'
  gamesLost:string='10'
  totalGames:string='10'
  chartOptionsGames = {}
  chartOptionsGameState = {}
  constructor(private statisticsService:StatisticsService) {


  }


  ngOnInit(): void {
    this.statisticsService.$homeStatistics.subscribe(
      next=>{
        this.$statistics=  next.pipe(

          map(  (response:CustomResponse )=>{
            console.log(response)
            this.gamesWon=response.data?.total_games.gamesWon
            this.gamesLost=response.data?.total_games.gamesLost
            this.totalGames=response.data?.total_games.totalGames
            this.setChart()

            return {
              dataState:DataState.SUCCESS,
              appData: response.data?.total_games
            }
          }),
          startWith({dataState: DataState.LOADING}),
          catchError(err => {
            return of({dataState:DataState.ERROR,error:err})
          }),

        )
      }
    )

    this.statisticsService.getHomeStatistic()
  }



  protected readonly DataState = DataState;
  protected readonly parseInt = parseInt;

  private setChart() {
    this.chartOptionsGames = {
      animationEnabled: true,
      title: {
        text: "Game History"
      },
      data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: this.gamesWon, name: "Games Won" },
          { y: this.gamesLost, name: "Games Lost" },
        ]
      }]
    }
  }
}
