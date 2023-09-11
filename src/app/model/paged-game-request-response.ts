import {GameRequestResponse} from "./game-request-response";

export interface PagedGameRequestResponse {
  friends:GameRequestResponse[],
   pageNumber:number,
   pageSize:number,
   totalElements:number
}
