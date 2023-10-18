import {Friend} from "./friend";

export interface PlayerFriendResponse {
  friends:Friend[],
  pageNumber:number,
  pageSize:number,
  totalElements:number
}
