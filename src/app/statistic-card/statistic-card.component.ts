import {Component, Input} from '@angular/core';
import {DataState} from "../model/data-state";

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.css']
})
export class StatisticCardComponent {
  @Input() title:string='';
  @Input() percent:string='';
  @Input("value") value:string='';
  @Input() image:string='assets/images/rook.png';
  @Input() state:DataState=DataState.LOADING
  @Input() showProcent:boolean=true
  protected readonly isFinite = isFinite;
  protected readonly parseInt = parseInt;
  protected readonly isNaN = isNaN;


  protected readonly DataState = DataState;

}
