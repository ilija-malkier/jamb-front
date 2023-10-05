import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {CustomResponse} from "../model/custom-response";
import {HttpClient} from "@angular/common/http";
import {GamesetService} from "../../services/gameset.service";
import {UserService} from "../../services/user.service";
import {Injectable} from "@angular/core";
import {ModalService} from "../../services/modal.service";
import {LoadingModalComponent} from "../modals/loading-modal/loading-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Observable<CustomResponse>>
{
  constructor(private http:HttpClient,private userService:UserService,private modalService:ModalService) {
}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<CustomResponse> {
  let username=    route.paramMap.get('username');
  // this.modalService.toggleModal(LoadingModalComponent.loadingModalId)
  return  this.userService.getProfileDetails(username)

}
}
