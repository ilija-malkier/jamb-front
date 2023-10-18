import {Component, Input, OnInit} from '@angular/core';
import {FriendsService} from "../../../../services/friends.service";
import {PaginationHandler} from "../../../reusables/pagination-handler";

@Component({
  selector: 'app-friends-requests-send-list-pagination',
  templateUrl: './friends-requests-send-list-pagination.component.html',
  styleUrls: ['./friends-requests-send-list-pagination.component.css']
})
export class FriendsRequestsSendListPaginationComponent extends PaginationHandler implements OnInit{


  @Input() itemsPerPageInput = 0

  ngOnInit(): void {

  super.itemsPerPage=this.itemsPerPageInput;
  }

  constructor(private friendsService: FriendsService) {
    super()
  }

  setTotalPages(totalPagesInput :number){
    super.totalPages=totalPagesInput

  }

  getNotesForCurrPage() {
    this.friendsService.filterForPage(this.currentPage);
  }


}
