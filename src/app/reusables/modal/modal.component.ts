import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalId='';
  @Input() title='';
  @Output() closeEventEmitter:EventEmitter<void>=new EventEmitter<void>()
  @Input() disableExit:boolean=false

  constructor(public modalService:ModalService) {
  }

  isModalOpen(){
   return !this.modalService.isModalOpen(this.modalId);

  }
  closeModal($event: Event) {
    $event.preventDefault();
    this.closeEventEmitter.emit();
    this.modalService.closeModal(this.modalId);
  }
}
