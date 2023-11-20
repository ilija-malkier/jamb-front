import { Injectable } from '@angular/core';
import {UploadType} from "../app/model/enum/upload-type";
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../app/model/custom-response";

@Injectable({
  providedIn: 'root'
})
export class DraftGameService {

  constructor(private http:HttpClient) { }

  addFriends(friends: string[],templateId:string,templateType:UploadType) {
   return this.http.post<CustomResponse>("http://localhost:8081/draft/friends",{id:templateId,friends:friends,numberOfPlayers:friends.length,type:templateType})
  }
  addCopPlayer(selected: string,templateId:string) {
    return this.http.post<CustomResponse>("http://localhost:8081/draft/coPlayer",{"coPlayerUsername":selected,"type":"TEMPLATE",id:templateId})
  }
}
