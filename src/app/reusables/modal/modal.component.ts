import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalid='';
  @Input() title='';
  @Output() closeEventEmitter:EventEmitter<void>=new EventEmitter<void>()
  @Input() disableExit:boolean=false

  constructor(public modalService:ModalService) {
  }

  isModalOpen(){
    let b = this.modalService.isModalOpen(this.modalid);
    return !b;
  }
  closeModal($event: Event) {
    $event.preventDefault();
    this.closeEventEmitter.emit();
    this.modalService.closeModal(this.modalid);
  }
}