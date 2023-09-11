import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit,OnDestroy{

  registerModalId="register-modal"
  public static  registerModalId="register-modal"
  registerModalTitle="Registration"
  constructor(private modalService:ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this.registerModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.registerModalId)

  }

  closeModal() {
    this.modalService.closeModal(this.registerModalId)
  }
}
