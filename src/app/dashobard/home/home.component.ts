import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {UploadSheetComponent} from "../account/upload-sheet/upload-sheet.component";
import {FilterRequest} from "../../model/filter-request";
import {SortDirection} from "../../model/sort-direction";
import {GameListComponent} from "../games/game-list/game-list.component";
import {LoadingModalComponent} from "../../modals/loading-modal/loading-modal.component";
import {AuthService} from "../../../services/auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.desc
  @ViewChild("modal") modal:UploadSheetComponent

  @ViewChild("gameList",{static:false}) gameList:GameListComponent


  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}
  constructor(private modalService:ModalService,private  authService:AuthService,private router:Router) {
  }

  // openModal() {
  //   this.modalService.toggleModal(UploadSheetComponent.uploadSheetModalId);
  // }

  ngOnInit(): void {
    // this.filterGames()
  }



  filterSubmit(filterRequest: FilterRequest) {
    this.filterRequest=filterRequest;
    this.filterGames()
  }

  filterGames(){
    this.gameList?.filter(this.filterRequest,this.sortField,this.sortDirection)
  }

  setSort(sort: string, sortDirection: SortDirection) {
      this.sortField=sort
      this.sortDirection=sortDirection
      this.filterGames()
  }

  protected readonly SortDirection = SortDirection;


  openUploadSheet() {
    this.modal.openModal()
  }

  startNow() {
    if(this.authService.$isLogin.value){
      this.router.navigate(['login'])
    }else{
      this.router.navigate(['games'])

    }
  }
}
