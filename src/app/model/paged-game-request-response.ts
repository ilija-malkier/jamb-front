import {GameRequestResponse} from "./game-request-response";

export interface PagedGameRequestResponse {
   gameRequests:GameRequestResponse[],
   pageNumber:number,
   pageSize:number,
   totalElements:number
}
