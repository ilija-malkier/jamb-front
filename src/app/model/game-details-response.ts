import {PlayerGameDetailsResponse} from "./player-game-details-response";

export interface GameDetailsResponse {
   gameId:number,
   status:string,
   date:Date,
  players:PlayerGameDetailsResponse[],
  image:string
}
