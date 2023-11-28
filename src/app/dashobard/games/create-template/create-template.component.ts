import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {GameService} from "../../../../services/game.service";
import {SaveTemplate} from "../../../model/save-template";
import {TemplateService} from "../../../../services/template.service";
import {TemplateCreatedResponse} from "../../../model/template/template-created-response";
import {UploadType} from "../../../model/enum/upload-type";
import {Flag} from "../../../model/enum/flag";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent {


  templateColumns:String[]=['1','1','1','1','1','1','1','1','1','1'];
  triling:boolean=true;
  topicName:string
  constructor(private router:Router,private gameService:GameService,private templateService:TemplateService) {
  }

async crateTemplateWithSave() {
    await this.saveToFavorites();
  }

  private async  saveToFavorites() {
    this.templateService.saveTemplateToFavorites(new SaveTemplate(this.templateColumns.toString(),this.triling,this.topicName)).subscribe(data=>{
      this.navigateToCopPlayer(data.data.templateResponse)
    })
  }

  navigateToCopPlayer(data:TemplateCreatedResponse){
    const navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['dashboard/games/templates/cop-player'],navigationExtras)
  }

  createTemplateWithoutSave() {
    this.navigateToCopPlayer({templateId:null,
      selectedColumns:this.templateColumns.toString(),
      isTrillinSelected:null,
      type:UploadType.TEMPLATE,
      flag:Flag.FRIENDS})
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
