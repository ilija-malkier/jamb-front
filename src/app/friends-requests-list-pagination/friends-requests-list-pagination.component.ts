import {Component, EventEmitter, Output} from '@angular/core';
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'app-friends-requests-list-pagination',
  templateUrl: './friends-requests-list-pagination.component.html',
  styleUrls: ['./friends-requests-list-pagination.component.css']
})
export class FriendsRequestsListPaginationComponent {

  itemsPerPage:number=9;
  totalPages:number=0;
  currentPage:number =1;
  @Output() nextPageEmmiter:EventEmitter<number>=new EventEmitter<number>()
  ngOnInit(): void {
    this.getPageNumber();
  }

  constructor(private friendsService:FriendsService) {}

  get numberArray(): number[] {
    return Array.from({ length: this.totalPages  }, (_, index) => index);
  }
  public getPageNumber(){
    // this.friendsService.getPages().subscribe((total)=>{
    //   let totalItems=total.data.gameCount as number;
    //   this.totalPages=this.customRound(totalItems/this.itemsPerPage);
    // });
  }


  canGoBack() {
    return 0 != this.currentPage - 1
  }
  canGoForward(){
    return this.totalPages>=this.currentPage+1
  }


  backPage() {
    if(!this.canGoBack()) return;

    this.currentPage--;
    this.getNotesForCurrPage();
    this.emitPage()
  }

  nextPage() {
    if(!this.canGoForward()) return;
    this.currentPage++;
    this.getNotesForCurrPage();
    this.emitPage()
  }

  private emitPage() {
    this.nextPageEmmiter.next(this.currentPage)

  }


  toPage(i: number) {
    this.currentPage=i;
    this.getNotesForCurrPage();
    this.emitPage()
  }

  private getNotesForCurrPage(){
    this.friendsService.filterForPage(this.currentPage);
  }
  private customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    // console.log(decimalPart +"-"+roundedDecimal)
    return Math.floor(number) + roundedDecimal;
  }

}
