import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../../../services/game.service";
import {SaveTemplate} from "../../../model/save-template";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent {


  templateColumns:String[]=['1','1','1','1','1','1','1','1','1','1'];
  triling:boolean=true;
  topicName:string
  constructor(private router:Router,private gameService:GameService) {
  }

async crateTemplateWithSave() {
    await this.saveToFavorites();
  }

  private async  saveToFavorites() {
    this.gameService.saveTemplateToFavorites(new SaveTemplate(this.templateColumns.toString(),this.triling,this.topicName)).subscribe(data=>{
      this.navigateToCopPlayer()
    })
  }

  navigateToCopPlayer(){
    this.router.navigate(['dashboard/games/templates/cop-player'])
  }

  createTemplateWithoutSave() {
    console.log("cao")
    this.navigateToCopPlayer()
  }

  handleToggle($event: { isColumn: boolean; columnIndex: number; columnValue: boolean }) {

      if(!$event.isColumn){
        //triling
        this.triling=$event.columnValue
      }else{
        this.templateColumns[$event.columnIndex]=$event.columnValue? '0' : '1';
      }
    console.log(this.templateColumns)
  }
}
