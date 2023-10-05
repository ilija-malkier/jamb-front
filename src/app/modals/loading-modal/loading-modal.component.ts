import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnInit,OnDestroy{
  loadingModalId="loading"
  static loadingModalId="loading"
  loadingGModalTitle="Loading"
  @ViewChild('modal') myModal:ElementRef;

  constructor(private modalService:ModalService) {
  }
  toggleModal(){
    this.myModal.nativeElement.click();
  }
  ngOnDestroy(): void {
    this.modalService.unregister(this.loadingModalId);
  }

  ngOnInit(): void {
    this.modalService.register(this.loadingModalId);

  }
}
