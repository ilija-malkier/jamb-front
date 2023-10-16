import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilterRequest} from "../../../model/filter-request";
import {GameService} from "../../../../services/game.service";
import {GameListComponent} from "../game-list/game-list.component";
import {SortDirection} from "../../../model/sort-direction";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{


  @ViewChild("gameList",{static:false}) gameList:GameListComponent
  totalPages:number=0
  itemsPerPage:number=10
  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.asc
  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}


  constructor(private gameService:GameService) {}
  filterSubmit(filterRequest: FilterRequest) {
    this.filterRequest=filterRequest;
    this.filterGames()
  }

  public getPageNumber(){
    this.gameService.getPages().subscribe((total)=>{
      let totalItems=total.data.gameCount as number;
      this.totalPages=this.customRound(totalItems/this.itemsPerPage);
    });
  }

  private customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    return Math.floor(number) + roundedDecimal;
  }
  private filterGames() {
      this.gameList.filter(this.filterRequest,this.sortField,this.sortDirection)
    // this.gameService.filter(this.filterRequest,this.sortField,this.sortDirection)
  }

  protected readonly SortDirection = SortDirection;

  setSort(sort: string, sortDirection: SortDirection) {
    this.sortField=sort
    this.sortDirection=sortDirection
    this.filterGames()
  }

  ngOnInit(): void {
    // this.getPageNumber()
  }
}
