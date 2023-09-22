import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cell} from "../../model/cell";
import {SheetService} from "../../../services/sheet.service";
import {ResultResponse} from "../../model/result-response";
import {GameService} from "../../../services/game.service";
import {ModalService} from "../../../services/modal.service";
import {CreateGameModalComponent} from "../../modals/create-game-modal/create-game-modal.component";
import {da} from "date-fns/locale";
import * as alertifyjs from "alertifyjs";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-calculate-game',
  templateUrl: './calculate-game.component.html',
  styleUrls: ['./calculate-game.component.css']
})
export class CalculateGameComponent implements OnInit{
  sheetData:Cell[][]
  currentScore:ResultResponse
  isLoading: boolean=false;
  isCalculating: boolean=false;
  image:File
  joinGame:boolean=false
  gameId:number=-1
  sumOfresultsFirstSixRows=0
  sumOfresultsMaxMinRows=0
  sumOfresultsLastRows=0
  imageBase64=''

  constructor(private sanitizer: DomSanitizer,private router:Router,private sheetService:SheetService,private gameService:GameService,private modalService:ModalService) {

    const dataObject = this.router.getCurrentNavigation().extras.state['table']
    const dataImage = this.router.getCurrentNavigation().extras.state['image']
    const joinGame = this.router.getCurrentNavigation().extras.state['joinGame']
    const gameId = this.router.getCurrentNavigation().extras.state['gameId']
    this.sheetData=dataObject
    this.image=dataImage
    this.joinGame=joinGame
    this.gameId=gameId
  }

  get numberArray(): number[] {
    return Array.from({ length: this.sheetData[0].length  }, (_, index) => index);
  }

  validateCell(rowIndex: number, columnIndex: number, rowLength: number, value: string) {
    let sheetDatumElement = this.sheetData[rowIndex][columnIndex];
    if(sheetDatumElement.value!=value){
      sheetDatumElement.value=value
       this.sheetData[rowIndex][columnIndex]=sheetDatumElement
      this.sheetService.validateCell(rowIndex,columnIndex,rowLength,sheetDatumElement).subscribe(data=>{
        sheetDatumElement.valid=data.data.isValid
        this.sheetData[rowIndex][columnIndex]=sheetDatumElement

      })
    }


  }

  calculateSheet() {
    this.sheetService.calculateSheet(this.sheetData).subscribe(data=>{
        this.currentScore=data.data?.results

        for (let i = 1; i <this.currentScore.resultsFirstSixRows.length; i++) {
          this.sheetData[6][i]={valid:true,value:this.currentScore.resultsFirstSixRows[i-1].toString()}
          this.sheetData[9][i]={valid:true,value:this.currentScore.resultsMaxMinRows[i-1].toString()}
          this.sheetData[this.sheetData.length-1][i]={valid:true,value:this.currentScore.resultsLastRows[i-1].toString()}
        }
        this.sumOfresultsMaxMinRows=this.currentScore.resultsMaxMinRows[this.currentScore.resultsMaxMinRows.length-1]
        this.sumOfresultsFirstSixRows=this.currentScore.resultsFirstSixRows[this.currentScore.resultsFirstSixRows.length-1]
        this.sumOfresultsLastRows=this.currentScore.resultsLastRows[this.currentScore.resultsLastRows.length-1]



    }

    )

  }

  cancelGameCreation() {
    this.restartData()
    this.router.navigate(['home'])
  }

  private restartData() {
    this.isCalculating=false;
    this.isLoading=false;
    this.sheetData=null;
    this.currentScore=null;
  }

   saveGame() {
    console.log(this.currentScore)
    if(this.currentScore===undefined || this.currentScore.result===null || this.currentScore.result===0) {
      alertifyjs.warning('Please calculate final result of the game to proceed')
      return
    }
    if(this.joinGame) {
      let reader = new FileReader();
      reader.onloadend =  ()=> {

        const parts =   reader.result.toString().split(",");
        if (parts.length === 2) {
          this.imageBase64 = parts[1];
          this.gameService.joinGame(this.gameId,this.imageBase64,this.currentScore.result).subscribe(data=>{
            alertifyjs.success("Successfully joined game")
            this.router.navigate(['account/game'])
          },error => alertifyjs.error('Error occured.Please try again later'))

        } else {
          console.error("Invalid data URL format");
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
       reader.readAsDataURL(this.image);


    }
    else this.modalService.toggleModal(CreateGameModalComponent.createGameModalId)

  }

  ngOnInit(): void {
  }
}
