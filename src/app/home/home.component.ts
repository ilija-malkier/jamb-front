import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {UploadSheetComponent} from "../upload-sheet/upload-sheet.component";
import {FilterModalComponent} from "../filter-modal/filter-modal.component";
import {FilterRequest} from "../model/filter-request";
import {SortDirection} from "../model/sort-direction";
import {GameListComponent} from "../game-list/game-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.desc

  @ViewChild("gameList") gameList:GameListComponent


  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}
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
    this.gameList.filter(this.filterRequest,this.sortField,this.sortDirection)
  }

  setSort(sort: string, sortDirection: SortDirection) {
      this.sortField=sort
      this.sortDirection=sortDirection
      this.filterGames()
  }

  protected readonly SortDirection = SortDirection;



}
