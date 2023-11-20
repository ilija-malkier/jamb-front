import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FriendsService} from "../../../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {CustomResponse} from "../../../model/custom-response";
import {AppState} from "../../../model/app-state";
import {Friend} from "../../../model/friend";
import {DataState} from "../../../model/data-state";

@Component({
  selector: 'app-friend-add-card',
  templateUrl: './friend-add-card.component.html',
  styleUrls: ['./friend-add-card.component.css']
})
export class FriendAddCardComponent{

@Input() friend:Friend
@Input() isSelected:boolean
  @Input() icon:string
@Output() selectedCop:EventEmitter<Friend>=new EventEmitter<Friend>();
  isPlusHovered:boolean
  selectCoP() {
    this.selectedCop.emit(this.friend)
  }
}
