import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {catchError, map, Observable, of, startWith, tap} from "rxjs";
import {AppState} from "../../../model/app-state";
import {DataState} from "../../../model/data-state";
import {CustomResponse} from "../../../model/custom-response";

@Component({
  selector: 'app-game-list-pagination',
  templateUrl: './game-list-pagination.component.html',
  styleUrls: ['./game-list-pagination.component.css']
})
export class GameListPaginationComponent implements OnInit{


  @Input() totalPages:number=0
   itemsPerPage:number=10;
  currentPage:number =0;
  ngOnInit(): void {

  }

  constructor(private gameService:GameService) {
  }

  get numberArray(): number[] {
    return Array.from({ length: this.totalPages  }, (_, index) => index);
  }



  canGoBack() {
    return 0 <= this.currentPage - 1
  }
  canGoForward(){
    return this.totalPages>this.currentPage+1
  }


  backPage() {
    if(!this.canGoBack()) return;

    this.currentPage--;
    this.getNotesForCurrPage();
  }

  nextPage() {
    if(!this.canGoForward()) return;
    this.currentPage++;
    this.getNotesForCurrPage();
  }


  toPage(i: number) {
    this.currentPage=i;
    this.getNotesForCurrPage();
  }

  private getNotesForCurrPage(){
    this.gameService.filterForPage(this.currentPage);
  }


}
