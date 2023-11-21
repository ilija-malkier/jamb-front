import {Component, Input, OnInit} from '@angular/core';
import {PaginationHandler} from "../../../../reusables/pagination-handler";
import {FriendsService} from "../../../../../services/friends.service";

@Component({
  selector: 'app-co-friends-pagination',
  templateUrl: './co-friends-pagination.component.html',
  styleUrls: ['./co-friends-pagination.component.css']
})
export class CoFriendsPaginationComponent extends PaginationHandler implements OnInit {


  @Input() itemsPerPageInput = 0

  ngOnInit(): void {

    super.itemsPerPage = this.itemsPerPageInput;
  }

  constructor(private friendsService: FriendsService) {
    super()
  }


  getNotesForCurrPage() {
    this.friendsService.filterForPage(this.currentPage);
  }
}
