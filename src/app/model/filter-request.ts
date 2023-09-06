export interface FilterRequest {
  date_from:Date,
  date_to:Date,
  game_status:string,
  player_names:string[],
  winner_names:string[]
}
