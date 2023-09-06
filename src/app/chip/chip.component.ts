import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  @Input("chipName") chipName:string=""
  @Output() removeChipEmmiter:EventEmitter<string> =new EventEmitter<string>()
  removeChip() {
    this.removeChipEmmiter.emit(this.chipName)
  }
}
