import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {UploadSheetComponent} from "../upload-sheet/upload-sheet.component";
import {HttpClient} from "@angular/common/http";
import {FilterModalComponent} from "../filter-modal/filter-modal.component";
import {FilterRequest} from "../model/filter-request";
import {SortDirection} from "../model/sort-direction";
import {CustomResponse} from "../model/custom-response";
import {StatisticsService} from "../../services/statistics.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private pageSize=10
  private pageNumber=0
  private sortField=""
  private sortDirection=""


  private sort:string=null
  private filterRequest:FilterRequest={date_from:new Date(),date_to:new Date(),game_status:"",player_names:null,winner_names:null}
  constructor(private modalService:ModalService) {



  }

  openModal() {
    this.modalService.toggleModal(UploadSheetComponent.uploadSheetModalId);
  }

  ngOnInit(): void {
    this.filterGames()

  }

  openFilter() {
    this.modalService.toggleModal(FilterModalComponent.filterModelId)
  }

  filterSubmit(filterRequest: FilterRequest) {
    this.filterRequest=filterRequest;
    this.filterGames()
  }

  filterGames(){


  }

  setSort(sort: string, sortDirection: SortDirection) {
      this.sort=sort
      this.sortDirection=sortDirection.toString()
      this.filterGames()
  }

  protected readonly SortDirection = SortDirection;


}
