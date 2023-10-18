import {GameRequestResponse} from "./game-request-response";
import {Friend} from "./friend";

export interface PlayerFriendRequest {
  requests:Friend[],
  pageNumber:number,
  pageSize:number,
  totalElements:number
}
