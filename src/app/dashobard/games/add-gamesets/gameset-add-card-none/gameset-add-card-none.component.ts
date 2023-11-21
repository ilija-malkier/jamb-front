import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-gameset-add-card-none',
  templateUrl: './gameset-add-card-none.component.html',
  styleUrls: ['./gameset-add-card-none.component.css']
})
export class GamesetAddCardNoneComponent {

  @Input() isSelected:boolean
  @Output() selectedCop:EventEmitter<string>=new EventEmitter<string>();




  unselect(){
    this.selectedCop.emit(null)
  }
}
