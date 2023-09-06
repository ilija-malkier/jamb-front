import {GameFilterResponse} from "./game-filter-response";
import {HomeStatistics} from "./home-statistics";
import {LoginResponse} from "./login-response";

export interface CustomResponse {
  timeStamp:Date;
  statusCode:number;
  status:string;
  message:string;
  developerMessage:string;
  data:{gameFilterResponses?:GameFilterResponse[],total_games?:HomeStatistics,access_token?:string,refresh_token?:string}
}
