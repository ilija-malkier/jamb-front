import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnDestroy{

  modalRef:BsModalRef
  @ViewChild("template") template:TemplateRef<any>
  constructor(private modalServicebs: BsModalService) {}


  openModal() {
    this.modalRef = this.modalServicebs.show(this.template);
  }
  ngOnDestroy(): void {
    // this.modalRef.hide()
  }

  closeModal() {
    this.modalRef.hide()
  }
}
