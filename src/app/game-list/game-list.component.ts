import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit(): void {
    this.httpClient.get("http://localhost:8081/game/filter").subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }




}
