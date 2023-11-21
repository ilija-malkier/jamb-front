import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {UploadType} from "../../../model/enum/upload-type";
import {AppState} from "../../../model/app-state";
import {Friend} from "../../../model/friend";
import {Router} from "@angular/router";
import {FriendsService} from "../../../../services/friends.service";
import {TemplateService} from "../../../../services/template.service";
import {CoFriendsPaginationComponent} from "../co-friends-pagination/co-friends-pagination.component";

@Component({
  selector: 'app-co-friends-list',
  templateUrl: './co-friends-list.component.html',
  styleUrls: ['./co-friends-list.component.css']
})
export class CoFriendsListComponent implements OnInit{

  selected:string;
  selectedNumber:number=0;

  $friends:Observable<AppState<Friend[]>> = new Observable<AppState<Friend[]>>()
  currentPageFriends=0
  @ViewChild("coPlayers") coPlayersPagination:CoFriendsPaginationComponent


  @Output() selectedCop:EventEmitter<string> =new EventEmitter<string>();
  constructor(private router:Router,public friendsService:FriendsService,private templateService:TemplateService) {

  }


  ngOnInit(): void {
    this.friendsService.getFriends(this.currentPageFriends)

   this.handleCoPlayers();
  }
  searchCoP(searchText) {
    console.log(searchText)
    if(searchText===null) return
    this.$friends=this.friendsService.serachFriends(searchText).pipe(
      map(
        (element: CustomResponse) => {
          console.log(element)
          // this.totalPages=element?.data?.matching_usernames
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.matching_usernames.map(data=> { return <Friend>{ 'username': data.username,'firstname': data.username[0],'lastname':null}})
          }
        }
      )
      ,startWith({dataState: DataState.LOADING}),
      catchError(err => {
        return of({dataState: DataState.ERROR, error: err})
      }),
    )

  }
  handleSelectedCop(friend: Friend) {
    this.selected=friend.username;
    this.selectedNumber=1;
    this.selectedCop.emit(this.selected);
  }

  private handleCoPlayers() {
    this.friendsService.$friends.subscribe(data => {
      this.$friends = data.pipe(

        map((element: CustomResponse) => {
          this.coPlayersPagination.setTotalPages(element?.data?.friends.totalElements)
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.friends.friends
          }
        }),startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }

  noneSelected() {
    this.selected=null
    this.selectedNumber=0;
  }
}
