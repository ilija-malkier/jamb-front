import {GameDetailsResponse} from "./game-details-response";

export interface GameSetDetailsResponse {
   id:number,
   gameSetName:string,
   description:string,
 games:  GameDetailsResponse[],
   player:string
}
