import {Component, EventEmitter, Output} from '@angular/core';
import {da, fr} from "date-fns/locale";
import {FriendsService} from "../../../services/friends.service";
import {FormControl} from "@angular/forms";
import {ChipEmmit} from "../../model/chip-emmit";

@Component({
  selector: 'app-autocompleate',
  templateUrl: './autocompleate.component.html',
  styleUrls: ['./autocompleate.component.css']
})
export class AutocompleateComponent {
  filterFriends:string[]=[];
  @Output() filterFriendsEventEmitter:EventEmitter<string[]> = new EventEmitter<string[]>()
  friendSearchText: string='';
  searchedFriends:string[]=[];
  isLoadingFriends:boolean=false;
  constructor(private service: FriendsService) {}

  addFilterFriends(inputUsename: HTMLInputElement){
    if(this.filterFriends.includes(inputUsename.value) || !this.searchedFriends.includes(inputUsename.value)) return;
    //maybe notify user
    this.filterFriends.push(inputUsename.value)
    inputUsename.value=""
    this.filterFriendsEventEmitter.emit(this.filterFriends)
    this.searchedFriends=[]
    this.isLoadingFriends=false
  }

  removeFilterFriends(chipEmmit: ChipEmmit){
    this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==chipEmmit.chipName);
    this.filterFriendsEventEmitter.emit(this.filterFriends)
  }

  ngOnInit() {
  }

  onInputChange() {
    if(this.friendSearchText==='') {
      this.searchedFriends=[]
      return
    }
    this.isLoadingFriends=true
    this.service.serachFriends(this.friendSearchText).subscribe(data=>{
      if(this.isLoadingFriends===false) return
      this.searchedFriends= data.data.matching_usernames.map(element=>element.username)
    },error => {},()=>{this.isLoadingFriends=false})
  }

  chooseFriend(friend: string) {
    this.friendSearchText=friend
    this.onInputChange()
  }
}
