import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../model/app-state";
import {TemplateInfo} from "../../../model/template-info";
import {CustomResponse} from "../../../model/custom-response";
import {DataState} from "../../../model/data-state";

@Component({
  selector: 'app-templates-screen',
  templateUrl: './templates-screen.component.html',
  styleUrls: ['./templates-screen.component.css']
})
export class TemplatesScreenComponent implements OnInit{

  favouriteTemplates:Observable<AppState<TemplateInfo[]>>

  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    this.userService.getFavoriteTemplates()
    this.userService.favouritesTemplates.subscribe(data => {
      this.favouriteTemplates = data.pipe(

        map((element: CustomResponse) => {
          console.log(element?.data?.templateResponses)
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

}
