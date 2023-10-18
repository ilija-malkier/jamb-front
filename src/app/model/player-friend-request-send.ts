import {Friend} from "./friend";
import {FriendSendRequestDetails} from "./friend-send-request-details";

export interface PlayerFriendRequestSend {

  requests:FriendSendRequestDetails[],
  pageNumber:number,
  pageSize:number,
  totalElements:number
}
