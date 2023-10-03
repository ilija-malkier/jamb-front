import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CustomResponse} from "../app/model/custom-response";
import {HttpClient} from "@angular/common/http";
import {ht} from "date-fns/locale";

@Injectable({
  providedIn: 'root'
})
export class GamesetService implements OnInit{

  gameSet$:BehaviorSubject<Observable<CustomResponse>> =new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>())
  constructor(private  http:HttpClient) { }

  ngOnInit(): void {
    this.gameSet$.next(this.http.get<CustomResponse>("http://localhost:8081/gameSets"))
  }

}
