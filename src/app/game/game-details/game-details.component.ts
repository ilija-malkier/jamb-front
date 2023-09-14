import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomResponse} from "../../model/custom-response";
import {GameDetailsResponse} from "../../model/game-details-response";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{

  game:GameDetailsResponse=null
  constructor(private activatedRoute:ActivatedRoute) {
  }


  ngOnInit(): void {
   let data= <CustomResponse>this.activatedRoute.snapshot.data['data']
    this.game=data.data.game
    console.log(this.game)
  }

}
