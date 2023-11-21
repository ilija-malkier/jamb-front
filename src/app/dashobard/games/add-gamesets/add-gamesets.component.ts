import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {GamesetGameResponse} from "../../../model/gameset-game-response";
import {GamesetService} from "../../../../services/gameset.service";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {GameSetResponse} from "../../../model/game-set-response";
import {DraftGameService} from "../../../../services/draft-game.service";
import {TemplateCreatedResponse} from "../../../model/template/template-created-response";
import {GamesetAddListComponent} from "./gameset-add-list/gameset-add-list.component";

@Component({
  selector: 'app-add-gamesets',
  templateUrl: './add-gamesets.component.html',
  styleUrls: ['./add-gamesets.component.css']
})
export class AddGamesetsComponent  {
  template:TemplateCreatedResponse
  searchText:string

  @ViewChild("gamesetList") gamesetList:GamesetAddListComponent
  constructor(private gamesetService:GamesetService,private draftService:DraftGameService) {
    // this.template=<TemplateCreatedResponse> this.router.getCurrentNavigation().extras.state['data']
  }



  // handleSelectedGameset(gameset: GameSetResponse) {
  //   this.selectedGameSet.push(gameset)
  //   this.selectedNumber=1
  // }
  //
  // handleDeselectGameset(gameset:GameSetResponse){
  //   this.selectedGameSet=this.selectedGameSet.filter(x=>x.gameSetId!=gameset.gameSetId)
  // }
  next() {
    this.draftService.addGamesets(this.gamesetList.selectedGameSet.map(x=>x.gameSetId),this.template.templateId,this.template.type).subscribe(data=>{
      console.log(data)
    })
  }
  skip(){
    this.draftService.addGamesets(null,null,null).subscribe(data=>{
      console.log(data)
    })
  }

  back() {

  }


  searchGamesets() {
    // this.gamesetList?.searchCoP(this.searchText)
  }
}
