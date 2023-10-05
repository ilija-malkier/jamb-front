import {fi} from "date-fns/locale";

export class UpdatePlayerRequest {
  private firstName:string;
  private lastName:string
  constructor(firstName: string, lastName: string) {
    this.firstName=firstName
    this.lastName=lastName
  }

}
