import {Component, Input} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {GamesetService} from "../../../services/gameset.service";

@Component({
  selector: 'app-gameset-pagination',
  templateUrl: './gameset-pagination.component.html',
  styleUrls: ['./gameset-pagination.component.css']
})
export class GamesetPaginationComponent {


  @Input() totalPages:number=0
  itemsPerPage:number=10;
  currentPage:number =0;
  ngOnInit(): void {

  }

  constructor(private gamesetService:GamesetService) {
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
    this.gamesetService.filterForPage(this.currentPage);
  }

}
