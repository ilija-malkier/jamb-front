import {PlayerGameDetailsResponse} from "./player-game-details-response";
import {GameSetDetailsResponse} from "./game-set-details-response";
import {GameSetResponse} from "./game-set-response";

export interface GameDetailsResponse {
   gameId:number,
   status:string,
   date:Date,
  players:PlayerGameDetailsResponse[],
  gameSets:GameSetResponse[]
  image:string
}
