import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Friend} from "../../../model/friend";

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
