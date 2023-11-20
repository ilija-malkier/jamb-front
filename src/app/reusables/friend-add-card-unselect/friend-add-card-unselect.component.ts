import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-friend-add-card-unselect',
  templateUrl: './friend-add-card-unselect.component.html',
  styleUrls: ['./friend-add-card-unselect.component.css']
})
export class FriendAddCardUnselectComponent {

  @Input() isSelected:boolean
  @Output() selectedCop:EventEmitter<string>=new EventEmitter<string>();


  unselect(){
      this.selectedCop.emit(null)
  }
}
