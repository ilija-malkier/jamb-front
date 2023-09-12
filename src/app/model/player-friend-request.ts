import {GameRequestResponse} from "./game-request-response";
import {Friend} from "./friend";

export interface PlayerFriendRequest {
  friends:Friend[],
  pageNumber:number,
  pageSize:number,
  totalElements:number
}
