import {Component, Input, OnInit} from '@angular/core';
import {PaginationHandler} from "../../../reusables/pagination-handler";
import {FriendsService} from "../../../../services/friends.service";

@Component({
  selector: 'app-friends-requests-received-list-pagination',
  templateUrl: './friends-requests-received-list-pagination.component.html',
  styleUrls: ['./friends-requests-received-list-pagination.component.css']
})
export class FriendsRequestsReceivedListPaginationComponent extends PaginationHandler implements OnInit{


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
