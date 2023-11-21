import {Component, ViewChild} from '@angular/core';
import {FriendsService} from "../../../../services/friends.service";
import {UploadType} from "../../../model/enum/upload-type";
import {Router} from "@angular/router";
import {TemplateCreatedResponse} from "../../../model/template/template-created-response";
import {DraftGameService} from "../../../../services/draft-game.service";
import {CoFriendsListComponent} from "../co-friends-list/co-friends-list.component";

@Component({
  selector: 'app-add-cop-player',
  templateUrl: './add-cop-player.component.html',
  styleUrls: ['./add-cop-player.component.css']
})
export class AddCopPlayerComponent {


  template:TemplateCreatedResponse
  selectedCop:string
  searchText: string=null;
  @ViewChild("listCop") listCop:CoFriendsListComponent
  constructor(private router:Router,private friendsService:FriendsService,private draftGameService:DraftGameService) {
   this.template=<TemplateCreatedResponse> this.router.getCurrentNavigation().extras.state['data']

  }

  ngOnInit(): void {

  }



  next() {
    this.draftGameService.addCopPlayer(this.selectedCop,this.template.templateId).subscribe(data=>{
      this.router.navigate(['dashboard/game/templates/edit'],)
    })
  }

  skip() {
    this.draftGameService.addCopPlayer(null,this.template.templateId).subscribe(data=>{
      this.router.navigate(['dashboard/game/templates/friends'],)
    })
  }



  handleSelectedCop(selectedCop: string) {
    this.selectedCop=selectedCop
  }

  searchCop() {
      this.listCop?.searchCoP(this.searchText);

  }
}
