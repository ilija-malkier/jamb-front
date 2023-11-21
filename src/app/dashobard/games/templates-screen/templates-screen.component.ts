import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {TemplateInfo} from "../../../model/template-info";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";
import {TemplateService} from "../../../../services/template.service";
import {SaveTemplate} from "../../../model/save-template";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-templates-screen',
  templateUrl: './templates-screen.component.html',
  styleUrls: ['./templates-screen.component.scss']
})
export class TemplatesScreenComponent implements OnInit{

  favouriteTemplates:Observable<AppState<TemplateInfo[]>>

  constructor(private userService:UserService,private templateService:TemplateService,private router:Router) {
  }
  ngOnInit(): void {
    this.templateService.getFavoriteTemplates()
    this.templateService.favouritesTemplates.subscribe(data => {
      this.favouriteTemplates = data.pipe(

        map((element: CustomResponse) => {
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.templateResponses
          }
        }),startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        }),
      )
    })
  }

  handleSelectedTemplate(templateInfo: TemplateInfo) {
    this.templateService.saveTemplate(new SaveTemplate(templateInfo.selectedColumns,templateInfo.isTrillingSelected,templateInfo.templateName)).subscribe(data=>{
      const navigationExtras: NavigationExtras = {
        state: {
          data: data.data.templateCreateResponse
        }
      };
      this.router.navigate(["/dashboard/games/templates/cop-player"],navigationExtras)
    }
    )
  }
}
