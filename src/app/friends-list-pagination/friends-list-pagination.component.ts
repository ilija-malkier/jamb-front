import { Component } from '@angular/core';
import {GameService} from "../../services/game.service";
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'app-friends-list-pagination',
  templateUrl: './friends-list-pagination.component.html',
  styleUrls: ['./friends-list-pagination.component.css']
})
export class FriendsListPaginationComponent {


  itemsPerPage:number=9;
  totalPages:number=0;
  currentPage:number =1;
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
    this.friendsService.filterForPage(this.currentPage);
  }
  private customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    // console.log(decimalPart +"-"+roundedDecimal)
    return Math.floor(number) + roundedDecimal;
  }

}
