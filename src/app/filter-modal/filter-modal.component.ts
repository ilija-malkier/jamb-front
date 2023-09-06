import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {NgForm} from "@angular/forms";
import {FilterRequest} from "../model/filter-request";
import {SortDirection} from "../model/sort-direction";
import {GameStatus} from "../model/game-status";

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent  implements OnInit,OnDestroy{
  filterModelId="filter"
 static filterModelId="filter"
  filterModalTitle="Filter"
  filterFriends:string[]=[]
  filterWiners:string[]=[]
   filterRequest:FilterRequest={date_from:new Date("2020-05-05"),date_to:null,game_status:null,player_names:this.filterFriends,winner_names:this.filterWiners}
  @Output() filterRequestEmmiter:EventEmitter<FilterRequest>=new EventEmitter<FilterRequest>();

  constructor(private modalService:ModalService) {}

  addFilterFriends(inputUsename: HTMLInputElement){

    if(this.filterFriends.includes(inputUsename.value)) return;
    //maybe notify user
    this.filterFriends.push(inputUsename.value)
    inputUsename.value=""
  }
  addFilterWiners(inputUsename: HTMLInputElement){

    if(this.filterWiners.includes(inputUsename.value)) return;
    //maybe notify user
    this.filterWiners.push(inputUsename.value)
    inputUsename.value=""
  }

  removeFilterFriends(username:string){
    console.log(username)
   this.filterFriends= this.filterFriends.filter(playerUsername=>playerUsername!==username);
  }
  removeFilterWiners(username:string){
    console.log(username)
   this.filterWiners= this.filterWiners.filter(playerUsername=>playerUsername!==username);
  }
  ngOnDestroy(): void {
    this.modalService.unregister(this.filterModelId);
  }

  ngOnInit(): void {
    this.modalService.register(this.filterModelId);
  }

  filterHistory(form: NgForm) {
    console.log(this.filterRequest)
    this.filterRequestEmmiter.emit(this.filterRequest);
    this.modalService.closeModal(this.filterModelId)
  }

  protected readonly GameStatus = GameStatus;

  closeModal() {
    this.modalService.closeModal(FilterModalComponent.filterModelId)
  }
}
