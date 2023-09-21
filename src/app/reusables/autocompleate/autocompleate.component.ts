import {Component, EventEmitter, Output} from '@angular/core';
import {da} from "date-fns/locale";
import {FriendsService} from "../../../services/friends.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-autocompleate',
  templateUrl: './autocompleate.component.html',
  styleUrls: ['./autocompleate.component.css']
})
export class AutocompleateComponent {
  filterFriends:string[]=[]
  @Output() filterFriendsEventEmitter:EventEmitter<string[]> = new EventEmitter<string[]>()
  friendSearchText: string='';
  searchedFriends:string[]=[]
  constructor(private service: FriendsService) {
  }
  addFilterFriends(inputUsename: HTMLInputElement){
    if(this.filterFriends.includes(inputUsename.value) || !this.searchedFriends.includes(inputUsename.value)) return;
    //maybe notify user
    this.filterFriends.push(inputUsename.value)
    inputUsename.value=""
    this.filterFriendsEventEmitter.emit(this.filterFriends)

  }


  removeFilterFriends(username:string){
    this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==username);
    this.filterFriendsEventEmitter.emit(this.filterFriends)
  }




  ngOnInit() {
  }



  // nameValue(name: any) {
  //   this.username = name;
  //   console.log(this.username);
  // }

  onInputChange() {
    this.service.serachFriends(this.friendSearchText).subscribe(data=>{
          this.searchedFriends= data.data.matching_usernames.map(element=>element.username)
      console.log(this.searchedFriends)
    })
  }
}
