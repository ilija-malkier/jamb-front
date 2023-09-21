import {GameFilterResponse} from "./game-filter-response";
import {HomeStatistics} from "./home-statistics";
import {LoginResponse} from "./login-response";
import {PlayerFriend} from "./player-friend";
import {PlayerFriendRequest} from "./player-friend-request";
import {ResultResponse} from "./result-response";
import {PagedGameRequestResponse} from "./paged-game-request-response";
import {GamesetDropdown} from "./gameset-dropdown";
import {GameDetailsResponse} from "./game-details-response";
import {GameSetInfo} from "./game-set-info";

export interface CustomResponse {
  timeStamp:Date;
  statusCode:number;
  status:string;
  message:string;
  developerMessage:string;
  data:{gameFilterResponses?:GameFilterResponse[],
    total_games?:HomeStatistics,
    access_token?:string,
    gameCount?:number,
    refresh_token?:string,
    friends?:PlayerFriend,
    friend_requests?:PlayerFriendRequest,
    isValid?:boolean,
    results?:ResultResponse,
    game_requests?:PagedGameRequestResponse
    gameSetResponseList?:GameSetInfo[],
    game?:GameDetailsResponse




  }
}
