import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent {
  @Input() text:string=''
  @Input() icon:string='';
  @Input() color:string='--primary-color';
  @Input() isLoading:boolean=false
}
