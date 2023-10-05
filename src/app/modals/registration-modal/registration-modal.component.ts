import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnDestroy{



  modalRef:BsModalRef
  @ViewChild("template") template:TemplateRef<any>
  constructor(private modalServicebs: BsModalService) {}


  openModal() {
    this.modalRef = this.modalServicebs.show(this.template);
  }
  ngOnDestroy(): void {
    this.modalRef.hide()
  }

  closeModal() {
    this.modalRef.hide()
  }
}
