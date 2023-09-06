export interface GameFilterResponse {
  gameId:number,
  datePlayed:Date,
  gameStatus:string,
  players:{"username":string}[],
  winner:{"firstName":string,"lastName":string,"username":string}
}
