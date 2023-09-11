import {Friend} from "./friend";

export interface PlayerFriend {
  friends:Friend[],
  pageNumber:number,
  pageSize:number,
  totalElements:number
}
