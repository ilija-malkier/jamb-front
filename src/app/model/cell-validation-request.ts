import {Cell} from "./cell";

export interface CellValidationRequest {
   cell:Cell,
   rowIndex:number,
   columnIndex:number,
   totalRows:number
}
