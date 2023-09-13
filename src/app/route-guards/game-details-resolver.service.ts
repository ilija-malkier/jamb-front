import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {CustomResponse} from "../model/custom-response";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameDetailsResolver implements Resolve<Observable<CustomResponse>>
{
  constructor(private http:HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<CustomResponse>> | Promise<Observable<CustomResponse>> | Observable<CustomResponse> {
   let gameId=    route.paramMap.get('id');


    //this.http.get<CustomResponse>("http://localhost:8081/games/"+gameId)


    return undefined;
  }

}
