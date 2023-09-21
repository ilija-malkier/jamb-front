import { Injectable } from '@angular/core';
import {Cell} from "../app/model/cell";
import {HttpClient} from "@angular/common/http";
import {CellValidationRequest} from "../app/model/cell-validation-request";
import {CustomResponse} from "../app/model/custom-response";

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http:HttpClient) { }

  validateCell(rowIndex: number, columnIndex: number, rowLength: number, cell: Cell) {
    let cellValidationRequest={rowIndex: rowIndex,columnIndex:columnIndex,rowLength:rowLength,cell:cell}
    return this.http.post<CustomResponse>("http://localhost:8081/sheet/validate-cell",cellValidationRequest)
  }

  calculateSheet(sheetData: Cell[][]) {
    return this.http.post<CustomResponse>("http://localhost:8081/sheet/result",{"numbers":sheetData})
  }


}
