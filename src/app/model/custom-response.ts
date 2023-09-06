import {GameFilterResponse} from "./game-filter-response";

export interface CustomResponse {
  timeStamp:Date;
  statusCode:number;
  status:string;
  message:string;
  developerMessage:string;
  data:{gameFilterResponses?:GameFilterResponse[]}
}
