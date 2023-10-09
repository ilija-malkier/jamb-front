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
import {SearchedFriends} from "./searched-friends";
import {ImageResponse} from "./image-response";
import {GameSetDetailsResponse} from "./game-set-details-response";
import {PlayerResponse} from "./player-response";
import {GamesetGameResponse} from "./gameset-game-response";
import {GameSetResponse} from "./game-set-response";

export interface CustomResponse {
  timeStamp:Date;
  statusCode:number;
  status:string;
  message:string;
  developerMessage:string;
  data:{
    gameFilterResponses?:GameFilterResponse[],
    total_games?:HomeStatistics,
    access_token?:string,
    gameCount?:number,
    refresh_token?:string,
    friends?:PlayerFriend,
    friend_requests?:PlayerFriendRequest,
    friend_requests_send?:PlayerFriend,
    isValid?:boolean,
    results?:ResultResponse,
    received_game_requests?:PagedGameRequestResponse
    sent_game_requests?:PagedGameRequestResponse
    gameSetResponseList?:GamesetGameResponse,
    game?:GameDetailsResponse,
    player?:PlayerResponse,
    gameSet?:GameSetDetailsResponse,
    matching_usernames?:SearchedFriends[],
    players_image?:ImageResponse,
    GameGamesetResponseList:GamesetGameResponse




  }
}
