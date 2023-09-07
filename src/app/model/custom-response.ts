import {GameFilterResponse} from "./game-filter-response";
import {HomeStatistics} from "./home-statistics";
import {LoginResponse} from "./login-response";
import {PlayerFriend} from "./player-friend";
import {PlayerFriendRequest} from "./player-friend-request";

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
    friends?:PlayerFriend[],
    friend_requests?:PlayerFriendRequest[]


  }
}
