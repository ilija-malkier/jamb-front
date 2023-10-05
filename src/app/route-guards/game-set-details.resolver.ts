import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from "rxjs";
import {CustomResponse} from "../model/custom-response";
import {HttpClient} from "@angular/common/http";
import {ModalService} from "../../services/modal.service";
import {GamesetService} from "../../services/gameset.service";
import {Injectable} from "@angular/core";
import {LoadingModalComponent} from "../modals/loading-modal/loading-modal.component";

@Injectable({
  providedIn: 'root'
})
export class GameSetDetailsResolver implements Resolve<Observable<CustomResponse>>
{
  constructor(private http:HttpClient,private ganesetService:GamesetService,private modalService:ModalService) {
    }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<CustomResponse> {
  let gameSetId=    route.paramMap.get('id');

    this.modalService.toggleModal(LoadingModalComponent.loadingModalId)



    return  this.ganesetService.getGamesetDetails(gameSetId)

}
}
