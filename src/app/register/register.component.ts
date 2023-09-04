import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserRegisterRequest} from "../model/user-register-request";
import {AppState} from "../model/app-state";
import {CustomResponse} from "../model/custom-response";
import {DataState} from "../model/data-state";
import {delay} from "rxjs";
import {ModalService} from "../../services/modal.service";
import {RegistrationModalComponent} from "../registration-modal/registration-modal.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  errorMessage='';
  showErrorMessage=false;
  appState:AppState<CustomResponse>={dataState: DataState.INIT};
  constructor(private auth:AuthService,private modalService:ModalService) {
  }
  register(form: NgForm) {
    let userRegisterRequest=<UserRegisterRequest> form.value;
    this.checkForErrors(form);
    if( !this.showErrorMessage){
      this.appState={dataState: DataState.LOADING}
      delay(1000)
      this.auth.register(userRegisterRequest).subscribe(
        (next)=>{},
        error => {
          this.appState={dataState:DataState.ERROR}
          this.showErrorMessage=true;
          this.errorMessage="Could not perform wanted operation.Please try again later."
        },
        ()=>{
          this.appState={dataState:DataState.DONE}
          this.modalService.toggleModal(RegistrationModalComponent.registerModalId);
          form.resetForm()
        }
      )
    }
  }

  private checkForErrors(form: NgForm) {
    let arePasswordTheSame=form.value.confirm_password===form.value.password && form.value.confirm_password.length>=5 && form.value.password.length>=5

    if(!arePasswordTheSame)
    {
      this.showErrorMessage=true
      this.errorMessage='Password are not the same'
    }else{
      this.showErrorMessage=form.submitted &&  form.invalid
      this.errorMessage='Please insert valid values.'

    }
  }

  ngOnInit(): void {


  }

  protected readonly DataState = DataState;
}
