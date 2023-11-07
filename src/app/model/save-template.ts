export class SaveTemplate {
   selectedColumns:string
   isTrillingSelected:boolean
   templateName:string

  constructor(selectedColumns:string,isTrillingSelected:boolean,templateName:string) {
    this.selectedColumns=selectedColumns;
    this.isTrillingSelected=isTrillingSelected;
    this.templateName=templateName
   }

}
