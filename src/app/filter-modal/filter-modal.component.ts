import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent  implements OnInit,OnDestroy{
  filterModelId="filter"
  filterModalTitle="Filter"
  constructor(private modalService:ModalService) {}

  ngOnDestroy(): void {
    this.modalService.unregister(this.filterModelId);
  }

  ngOnInit(): void {
    this.modalService.register(this.filterModelId);
    this.modalService.toggleModal(this.filterModelId);
  }
}
