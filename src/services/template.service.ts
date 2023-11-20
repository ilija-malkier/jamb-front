import { Injectable } from '@angular/core';
import {CustomResponse} from "../app/model/custom-response";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TemplateInfo} from "../app/model/template-info";
import {SaveTemplate} from "../app/model/save-template";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  favouritesTemplates:BehaviorSubject<Observable<CustomResponse>> = new BehaviorSubject<Observable<CustomResponse>>(new Observable<CustomResponse>());
  constructor(private http:HttpClient) { }

  getFavoriteTemplates(){
    this.favouritesTemplates.next(this.http.get<CustomResponse>("http://localhost:8081/template"))
  }



  saveTemplateToFavorites(saveTemplate:SaveTemplate){
    return this.http.post<CustomResponse>("http://localhost:8081/template/favourite",saveTemplate)
  }

  saveTemplate(saveTemplate: SaveTemplate) {
    return this.http.post<CustomResponse>("http://localhost:8081/template",saveTemplate)
  }


}
