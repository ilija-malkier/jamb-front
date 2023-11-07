import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-template-button',
  templateUrl: './toggle-template-button.component.html',
  styleUrls: ['./toggle-template-button.component.css']
})
export class ToggleTemplateButtonComponent {

  isToggle:boolean=false
  @Input() isColumn:boolean
  @Input() columnIndex:number

  @Output() toggleEmit:EventEmitter<{isColumn:boolean,columnIndex:number,columnValue:boolean}>=new EventEmitter<{isColumn:boolean,columnIndex:number,columnValue:boolean}>();

  toggleButton(){
    this.isToggle=!this.isToggle;
    this.toggleEmit.emit({isColumn:this.isColumn,columnIndex:this.columnIndex,columnValue:this.isToggle})
  }

}
