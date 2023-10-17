import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {catchError, map, Observable, of, startWith, tap} from "rxjs";
import {AppState} from "../../../model/app-state";
import {DataState} from "../../../model/data-state";
import {CustomResponse} from "../../../model/custom-response";
import {GamesetService} from "../../../../services/gameset.service";

@Component({
  selector: 'app-game-list-pagination',
  templateUrl: './game-list-pagination.component.html',
  styleUrls: ['./game-list-pagination.component.css']
})
export class GameListPaginationComponent implements OnInit{


  @Input() totalPages:number;
  @Input() itemsPerPage:number;
  currentPage:number =0;
  calculatedTotalPages=0;
  ngOnInit(): void {
  }
  customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    return Math.floor(number) + roundedDecimal;
  }
  constructor(private gamesetService:GamesetService) {
  }

  get numberArray(): number[] {
    this.calculatedTotalPages=this.customRound(this.totalPages/this.itemsPerPage)
    return Array.from({ length: this.calculatedTotalPages  }, (_, index) => index);
  }



  canGoBack() {
    return 0 <= this.currentPage - 1
  }
  canGoForward(){
    return this.calculatedTotalPages>this.currentPage+1
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
    this.gamesetService.filterForPage(this.currentPage);
  }


}
