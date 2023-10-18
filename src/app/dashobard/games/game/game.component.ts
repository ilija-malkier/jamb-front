import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilterRequest} from "../../../model/filter-request";
import {GameService} from "../../../../services/game.service";
import {GameListComponent} from "../game-list/game-list.component";
import {SortDirection} from "../../../model/sort-direction";
import {GameStatus} from "../../../model/game-status";
import {GameListPaginationComponent} from "../game-list-pagination/game-list-pagination.component";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{


  @ViewChild("gameList",{static:false}) gameList:GameListComponent
  @ViewChild("gamelistPagination") gameListPagination:GameListPaginationComponent

  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.asc
  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}


  constructor(private gameService:GameService) {
    this.getPageNumber()
  }
  filterSubmit(filterRequest: FilterRequest) {
    this.filterRequest=filterRequest;
    this.filterGames()
  }

  public getPageNumber(){
    this.gameService.getPages().subscribe((total)=>{
      this.gameListPagination.setTotalPages(total.data.gameCount as number)
    });
  }


  private filterGames() {
      this.gameList.filter(this.filterRequest,this.sortField,this.sortDirection)
    // this.gameService.filter(this.filterRequest,this.sortField,this.sortDirection)
  }

  protected readonly SortDirection = SortDirection;

  setSort(sort: string, sortDirection: SortDirection) {
    this.sortField=sort
    this.sortDirection=sortDirection
    console.log(sort)
    this.filterGames()
  }

  ngOnInit(): void {
    // this.getPageNumber()
  }

    protected readonly GameStatus = GameStatus;

  getmaxGamePage() {
    return this.gameService.maxGameRequestsElements;
  }
}
