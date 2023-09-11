export interface GameCreateRequest {
  numberOfPlayers:string,
  players:string[],
  image:Uint8Array,
  score:number

}
