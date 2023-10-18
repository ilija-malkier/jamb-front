import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {catchError, map, Observable, of, startWith, tap} from "rxjs";
import {AppState} from "../../../model/app-state";
import {DataState} from "../../../model/data-state";
import {CustomResponse} from "../../../model/custom-response";
import {GamesetService} from "../../../../services/gameset.service";
import {PaginationHandler} from "../../../reusables/pagination-handler";

@Component({
  selector: 'app-game-list-pagination',
  templateUrl: './game-list-pagination.component.html',
  styleUrls: ['./game-list-pagination.component.css']
})
export class GameListPaginationComponent extends PaginationHandler{


  @Input() totalPagesInput = 0
  @Input() itemsPerPageInput = 0
  ngOnInit(): void {
    super.totalPages=this.totalPagesInput
    super.itemsPerPage=this.totalPagesInput
  }

  constructor(private gamesetService:GamesetService) {
    super()
  }


   getNotesForCurrPage(){
    this.gamesetService.filterForPage(this.currentPage);
  }


}
