import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChipEmmit} from "../../model/chip-emmit";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  @Input("chipName") chipName:string=""
  @Output() removeChipEmmiter:EventEmitter<ChipEmmit> =new EventEmitter<ChipEmmit>()
  @Input("chipId") chipId:number=-1
  removeChip() {
    this.removeChipEmmiter.emit({chipName:this.chipName,chipId:this.chipId})
  }
}
