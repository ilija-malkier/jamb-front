import {Component, EventEmitter, Output} from '@angular/core';
import {GameStatus} from "../../../model/game-status";
import {FilterRequest} from "../../../model/filter-request";
import {ModalService} from "../../../../services/modal.service";
import {NgForm} from "@angular/forms";
import {ChipEmmit} from "../../../model/chip-emmit";

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

  removeFilterFriends(chipEmmit: ChipEmmit){
    this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==chipEmmit.chipName);
  }

  removeFilterWinners(chipEmmit: ChipEmmit){
    this.filterWiners= this.filterWiners.filter(playerUsername=>playerUsername!==chipEmmit.chipName);
  }




  filterHistory(form: NgForm) {
    this.filterRequest.player_names=this.filterFriends
    this.filterRequest.winner_names=this.filterWiners
    this.filterRequestEmmiter.emit(this.filterRequest);
  }

  protected readonly GameStatus = GameStatus;


  clearFilter() {
    this.filterWiners=[]
    this.filterFriends=[]
    this.filterRequest={date_from:null,date_to:null,game_status:null,player_names:this.filterFriends,winner_names:this.filterWiners}
    this.filterRequestEmmiter.emit(this.filterRequest)
  }
}
