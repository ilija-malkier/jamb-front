import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-baner',
  templateUrl: './error-baner.component.html',
  styleUrls: ['./error-baner.component.css']
})
export class ErrorBanerComponent {

  @Input() show:boolean=false;
  @Input() text:string='';
}
