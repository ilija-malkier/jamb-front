import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, Observable, of, skip, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {Friend} from "../../../model/friend";
import {
  FriendsRequestsSendListPaginationComponent
} from "../../account/friends-requests-send-list-pagination/friends-requests-send-list-pagination.component";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {FriendsService} from "../../../../services/friends.service";
import {GameService} from "../../../../services/game.service";
import {TemplateCreatedResponse} from "../../../model/template/template-created-response";
import {Router} from "@angular/router";
import {DraftGameService} from "../../../../services/draft-game.service";

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  $friends: Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  selectedFriends: Friend[] = []
  currentPageFriends = 0
  @ViewChild("friends") friends: FriendsRequestsSendListPaginationComponent

  searchText: string = ''
  template: TemplateCreatedResponse

  constructor(private friendsService: FriendsService, private gameService: GameService, private router: Router, private draftGameService: DraftGameService) {
    this.template = <TemplateCreatedResponse>this.router.getCurrentNavigation().extras.state['data']

  }

  ngOnInit() {
    this.friendsService.getFriends(this.currentPageFriends)
    this.handleFriends()
  }

  getMaxFriends() {
    return 10;
  }

  private handleFriends() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(
        map((element: CustomResponse) => {

          this.friends.setTotalPages(element?.data?.friends.totalElements)
          console.log(element)
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friends.friends
          }
        }), startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }

  handleFriendSelected(friend: Friend) {
    this.selectedFriends.push(friend)

  }


  handleDiselectFriend(friend: Friend) {
    this.selectedFriends = this.selectedFriends.filter(element => element.username != friend.username)
  }

  searchCoP() {
    if (this.searchText === null) return
    this.$friends = this.friendsService.serachFriends(this.searchText).pipe(
      map(
        (element: CustomResponse) => {
          //ovo fali
          // this.totalPages=element?.data?.matching_usernames
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.matching_usernames.map(data => {
              return <Friend>{'username': data.username, 'firstname': data.username[0], 'lastname': null}
            })
          }
        }
      )
      , startWith({dataState: DataState.LOADING}),
      catchError(err => {
        return of({dataState: DataState.ERROR, error: err})
      }),
    )
  }


  back() {

  }

  next(strings: string[]) {
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
}

