import {Component, Input, OnInit} from '@angular/core';

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
  protected readonly isFinite = isFinite;
  protected readonly parseInt = parseInt;
  protected readonly isNaN = isNaN;


}
