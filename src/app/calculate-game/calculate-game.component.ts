import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cell} from "../model/cell";
import {SheetService} from "../../services/sheet.service";
import {ResultResponse} from "../model/result-response";

@Component({
  selector: 'app-calculate-game',
  templateUrl: './calculate-game.component.html',
  styleUrls: ['./calculate-game.component.css']
})
export class CalculateGameComponent {
  sheetData:[Cell[]]
  currentScore:ResultResponse
  isLoading: boolean=false;
  isCalculating: boolean=false;

  constructor(private router:Router,private sheetService:SheetService) {
    const dataObject = this.router.getCurrentNavigation().extras.state['data']
    this.sheetData=dataObject
    console.log(this.sheetData)
  }

  get numberArray(): number[] {
    return Array.from({ length: this.sheetData[0].length  }, (_, index) => index);
  }

  validateCell(rowIndex: number, columnIndex: number, rowLength: number, value: string) {
    let sheetDatumElement = this.sheetData[rowIndex][columnIndex];
    let valueNumber=parseInt(value)
    if(sheetDatumElement.value!=valueNumber){
      sheetDatumElement.value=valueNumber
       this.sheetData[rowIndex][columnIndex]=sheetDatumElement
      console.log(sheetDatumElement)
      this.sheetService.validateCell(rowIndex,columnIndex,rowLength,sheetDatumElement).subscribe(data=>{

        sheetDatumElement.valid=data.data.isValid
        this.sheetData[rowIndex][columnIndex]=sheetDatumElement

      })
    }


  }

  calculateSheet() {
    this.sheetService.calculateSheet(this.sheetData).subscribe(data=>{
        this.currentScore=data.data?.result
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

  }
}
