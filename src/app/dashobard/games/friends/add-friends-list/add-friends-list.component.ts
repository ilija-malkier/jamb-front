import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../model/app-state";
import {Friend} from "../../../../model/friend";
import {CustomResponse} from "../../../../model/custom-response";
import {DataState} from "../../../../model/data-state";
import {FriendsService} from "../../../../../services/friends.service";
import {fr} from "date-fns/locale";

@Component({
  selector: 'app-add-friends-list',
  templateUrl: './add-friends-list.component.html',
  styleUrls: ['./add-friends-list.component.css']
})
export class AddFriendsListComponent implements OnInit{
  $friends: Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  currentPageFriends = 0
 @Input() selectedFriends: Friend[] = []


  @Output() friendSelectedEmitter:EventEmitter<Friend>=new EventEmitter<Friend>();
constructor(public friendsService: FriendsService,) {
}

  ngOnInit() {
    this.friendsService.getFriends(this.currentPageFriends)
    this.handleFriends()
  }

  searchCoP(searchText) {
    if (searchText === null) return
    this.$friends = this.friendsService.serachFriends(searchText).pipe(
      map(
        (element: CustomResponse) => {
          //ovo fali
          // this.totalPages=element?.data?.matching_usernames
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.matching_usernames.filter(x=> !this.selectedFriends.some(y=> x.username===y.username)).map(data => {
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

  private handleFriends() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(
        map((element: CustomResponse) => {

          // this.friends.setTotalPages(element?.data?.friends.totalElements)
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
    this.friendSelectedEmitter.emit(friend);
    this.removeFriendFromList(friend)
  }

  private removeFriendFromList(friend: Friend) {
    this.$friends=this.$friends.pipe(map(x=>{

      return {
        dataState: DataState.SUCCESS,
        appData: x?.appData?.filter(y=>y.username!=friend.username)
      }
      }
    ))
  }
   handleFriendDeselected(friend:Friend){
    this.$friends=this.$friends.pipe(map(x=>{
      if(!x?.appData?.some(y=>y.username===friend.username))
          x?.appData?.push(friend)
        return {
          dataState: DataState.SUCCESS,
          appData: x?.appData
        }
      }
    ))
  }
}

