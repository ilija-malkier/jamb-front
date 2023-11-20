import {UploadType} from "../enum/upload-type";
import {Flag} from "../enum/flag";

export interface TemplateCreatedResponse {
  templateId:string
  selectedColumns:string
  isTrillinSelected:boolean
  type:UploadType
  flag:Flag
}
