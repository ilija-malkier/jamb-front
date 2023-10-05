import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-warning-baner',
  templateUrl: './warning-baner.component.html',
  styleUrls: ['./warning-baner.component.css']
})
export class WarningBanerComponent {
  @Input() show:boolean=false;
  @Input() text:string='';
}
