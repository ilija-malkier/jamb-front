import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../model/app-state";
import {Friend} from "../../model/friend";
import {PlayerFriendRequest} from "../../model/player-friend-request";
import {FriendsService} from "../../../services/friends.service";
import {ModalService} from "../../../services/modal.service";
import {DataState} from "../../model/data-state";
import {CustomResponse} from "../../model/custom-response";
import {FindFriendsModalComponent} from "../../modals/find-friends-modal/find-friends-modal.component";
import {GameService} from "../../../services/game.service";
import {GameRequestResponse} from "../../model/game-request-response";
import {PagedGameRequestResponse} from "../../model/paged-game-request-response";
import {UploadSheetComponent} from "../../upload-sheet/upload-sheet.component";
import {error} from "@angular/compiler-cli/src/transformers/util";
import * as alertifyjs from "alertifyjs";

@Component({
  selector: 'app-game-request',
  templateUrl: './game-request.component.html',
  styleUrls: ['./game-request.component.css']
})
export class GameRequestComponent implements OnInit{
  maxGames=10;
  $games:Observable<AppState<GameRequestResponse[]>> = new Observable<AppState<GameRequestResponse[]>>()
  $gamesRequestsSend:Observable<AppState<GameRequestResponse[]>> = new Observable<AppState<GameRequestResponse[]>>()
  currentPage=0
  totalElements=0
  currentPageRequestsSend=0
  totalElementsRequestsSend=0
  constructor(private gameService:GameService,private modalService:ModalService) {
    this.handleGames();
    this.handleGamesRequestSend();
    this.gameService.getGameRequests(this.currentPage)
    this.gameService.getGameRequestsSend(this.currentPage)
  }
  ngOnInit(): void {
  }
  customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    return Math.floor(number) + roundedDecimal;
  }

  private handleGames() {
    this.gameService.$gameRequests.subscribe(data => {
      this.$games = data.pipe(

        map((element: CustomResponse) => {
          this.totalElements=element?.data?.received_game_requests.totalElements
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.received_game_requests.gameRequests
          }
        }),
      startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        })
      )
    })
  }

  private handleGamesRequestSend() {
    this.gameService.$gameRequests.subscribe(data => {
      this.$gamesRequestsSend = data.pipe(

        map((element: CustomResponse) => {
          this.totalElementsRequestsSend=element?.data?.sent_game_requests.totalElements
          return {
            dataState: DataState.SUCCESS,
            appData: element?.data?.sent_game_requests.gameRequests
          }
        }),
        startWith({dataState: DataState.LOADING}),
        catchError(err => {
          return of({dataState: DataState.ERROR, error: err})
        })
      )
    })
  }

  openFindFriendsModal() {
    this.modalService.toggleModal(FindFriendsModalComponent.findFriendsModalId)
  }
  acceptGame(gameId: number) {
    this.modalService.toggleModal(UploadSheetComponent.uploadSheetModalId)
  }

  declineGame(gameId:number){
      this.gameService.declineGame(gameId)
      this.currentPage=0
      this.gameService.getGameRequests(this.currentPage)
  }

  protected readonly DataState = DataState;

  removeGameRequest(gameId: number, username: string) {
    this.gameService.deleteGameRequest(gameId,username).subscribe(data=>{
      alertifyjs.success("Successfully deleted game request")
    },error=>{
      alertifyjs.error("Could not delete game request.Please try again later.")

    })
  }


}
