import {Component, EventEmitter, Output} from '@angular/core';
import {GameStatus} from "../../../model/game-status";
import {FilterRequest} from "../../../model/filter-request";
import {ModalService} from "../../../../services/modal.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-filter-games',
  templateUrl: './filter-games.component.html',
  styleUrls: ['./filter-games.component.css']
})
export class FilterGamesComponent {

  filterModelId="filter"
  static filterModelId="filter"
  filterModalTitle="Filter"
  filterFriends:string[]=[]
  filterWiners:string[]=[]
  filterRequest:FilterRequest={date_from:null,date_to:null,game_status:null,player_names:this.filterFriends,winner_names:this.filterWiners}
  @Output() filterRequestEmmiter:EventEmitter<FilterRequest>=new EventEmitter<FilterRequest>();

  constructor() {}

  addFilterFriends(inputUsename: HTMLInputElement){

    if(this.filterFriends.includes(inputUsename.value) || inputUsename.value.length==0) return;
    //maybe notify user
    this.filterFriends.push(inputUsename.value)
    inputUsename.value=""
  }
  addFilterWiners(inputUsename: HTMLInputElement){

    if(this.filterWiners.includes(inputUsename.value) || inputUsename.value.length==0) return;
    //maybe notify user
    this.filterWiners.push(inputUsename.value)
    inputUsename.value=""
  }

  removeFilterFriends(username:string){
    this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==username);
  }
  removeFilterWinners(username:string){
    this.filterWiners= this.filterWiners.filter(playerUsername=>playerUsername!==username);
  }




  filterHistory(form: NgForm) {
    this.filterRequest.player_names=this.filterFriends
    this.filterRequest.winner_names=this.filterWiners
    this.filterRequestEmmiter.emit(this.filterRequest);
  }

  protected readonly GameStatus = GameStatus;


}
