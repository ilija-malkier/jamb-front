import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {


  $homeStatistics:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>())
  constructor(private http:HttpClient) {
    this.getHomeStatistic()
  }

  getHomeStatistic(){
    this.$homeStatistics.next(this.http.get<CustomResponse>("http://localhost:8081/games/total"))

  }

}
