import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {CustomResponse} from "../model/custom-response";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ModalService} from "../../services/modal.service";
import {LoadingModalComponent} from "../modals/loading-modal/loading-modal.component";

@Injectable({
  providedIn: 'root'
})
export class GameDetailsResolver implements Resolve<Observable<CustomResponse>>
{
  constructor(private http:HttpClient,private modalSerivce:ModalService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<CustomResponse> {
   let gameId=    route.paramMap.get('id');

 let res=   this.http.get<CustomResponse>("http://localhost:8081/games/"+gameId)
    // this.modalSerivce.toggleModal(LoadingModalComponent.loadingModalId)
    return res

  }

}
