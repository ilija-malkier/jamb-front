import { Component } from '@angular/core';
import {FriendsService} from "../../../../services/friends.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {Friend} from "../../../model/friend";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {TemplateService} from "../../../../services/template.service";
import {UploadType} from "../../../model/enum/upload-type";
import {Router} from "@angular/router";
import {TemplateCreatedResponse} from "../../../model/template/template-created-response";
import {DraftGameService} from "../../../../services/draft-game.service";

@Component({
  selector: 'app-add-cop-player',
  templateUrl: './add-cop-player.component.html',
  styleUrls: ['./add-cop-player.component.css']
})
export class AddCopPlayerComponent {


  type:UploadType=UploadType.TEMPLATE;
  template:TemplateCreatedResponse
  selectedCop:string
  searchText: string=null;
  constructor(private router:Router,private friendsService:FriendsService,private draftGameService:DraftGameService) {
   this.template=<TemplateCreatedResponse> this.router.getCurrentNavigation().extras.state['data']
  }

  ngOnInit(): void {



  }



  toEditScreen() {
    this.draftGameService.addCopPlayer(this.selectedCop,this.template.templateId).subscribe(data=>{
      this.router.navigate(['dashboard/game/templates/edit'],)
    })
  }

  skipCoP() {
    this.draftGameService.addCopPlayer(null,this.template.templateId).subscribe(data=>{
      this.router.navigate(['dashboard/game/templates/friends'],)
    })
  }



  handleSelectedCop(selectedCop: string) {
    this.selectedCop=selectedCop
  }
}
