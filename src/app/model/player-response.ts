import {ProfileGameDTO} from "./profile-game-dto";
import {ProfileGameSetDTO} from "./profile-game-set-dto";

export interface PlayerResponse {

   username:string,
   email:string,
   firstName:string,
   lastName:string,
   joined:Date,
  friends:string[],
  games:ProfileGameDTO[],
   gameSets:ProfileGameSetDTO[]
}
