import {Component, ElementRef, ViewChild} from '@angular/core';
import {FilterRequest} from "../../model/filter-request";
import {GameService} from "../../../services/game.service";
import {GameListComponent} from "../game-list/game-list.component";
import {SortDirection} from "../../model/sort-direction";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {


  @ViewChild("gameList",{static:false}) gameList:GameListComponent

  protected sortField="date"
  protected sortDirection:SortDirection=SortDirection.asc
  private filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:null,winner_names:null}

  filterSubmit(filterRequest: FilterRequest) {
    this.filterRequest=filterRequest;
    this.filterGames()
  }

  private filterGames() {
      this.gameList.filter(this.filterRequest,this.sortField,this.sortDirection)
  }

  protected readonly SortDirection = SortDirection;

  setSort(sort: string, sortDirection: SortDirection) {
    this.sortField=sort
    this.sortDirection=sortDirection
    this.filterGames()
  }
}
