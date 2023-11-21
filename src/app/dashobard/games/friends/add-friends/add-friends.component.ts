import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../model/app-state";
import {Friend} from "../../../../model/friend";
import {
  FriendsRequestsSendListPaginationComponent
} from "../../../account/friends-requests-send-list-pagination/friends-requests-send-list-pagination.component";
import {CustomResponse} from "../../../../model/custom-response";
import {DataState} from "../../../../model/data-state";
import {FriendsService} from "../../../../../services/friends.service";
import {GameService} from "../../../../../services/game.service";
import {TemplateCreatedResponse} from "../../../../model/template/template-created-response";
import {Router} from "@angular/router";
import {DraftGameService} from "../../../../../services/draft-game.service";
import {AddFriendsListComponent} from "../add-friends-list/add-friends-list.component";

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent  {
  selectedFriends: Friend[] = []

  @ViewChild("friendsList") friendsList:AddFriendsListComponent
  searchText: string = ''
  template: TemplateCreatedResponse

  constructor( private gameService: GameService, private router: Router, private draftGameService: DraftGameService) {
    // this.template = <TemplateCreatedResponse>this.router.getCurrentNavigation().extras.state['data']

  }




  handleFriendSelected(friend: Friend) {
    this.selectedFriends.push(friend)

  }


  handleDiselectFriend(friend: Friend) {
    this.selectedFriends = this.selectedFriends.filter(element => element.username != friend.username)
    this.friendsList.handleFriendDeselected(friend)
  }


  back() {

  }

  next() {
    this.draftGameService.addFriends(this.selectedFriends.map(x => x.username), this.template.templateId, this.template.type).subscribe(
      data => {
        console.log(data)
      }
    )

  }

  skip() {
    this.draftGameService.addFriends(null,this.template.templateId,this.template.type).subscribe(
      data => {
        console.log(data)
      })

  }

  searchFriends() {
    this.friendsList?.searchCoP(this.searchText)
  }
}

