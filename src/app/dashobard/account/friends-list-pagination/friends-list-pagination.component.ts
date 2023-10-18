import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {FriendsService} from "../../../../services/friends.service";
import {PaginationHandler} from "../../../reusables/pagination-handler";

@Component({
  selector: 'app-friends-list-pagination',
  templateUrl: './friends-list-pagination.component.html',
  styleUrls: ['./friends-list-pagination.component.css']
})
export class FriendsListPaginationComponent extends PaginationHandler implements OnInit{


  @Input() itemsPerPageInput = 0

  ngOnInit(): void {

    super.itemsPerPage=this.itemsPerPageInput;
  }

  constructor(private friendsService: FriendsService) {
    super()
  }



  getNotesForCurrPage() {
    this.friendsService.filterForPage(this.currentPage);
  }


}
