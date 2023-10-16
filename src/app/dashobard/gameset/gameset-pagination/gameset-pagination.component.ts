import {Component, Input} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {GamesetService} from "../../../../services/gameset.service";

@Component({
  selector: 'app-gameset-pagination',
  templateUrl: './gameset-pagination.component.html',
  styleUrls: ['./gameset-pagination.component.css']
})
export class GamesetPaginationComponent {


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

  protected readonly top = top;
}
