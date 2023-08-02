import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-upload-sheet',
  templateUrl: './upload-sheet.component.html',
  styleUrls: ['./upload-sheet.component.css']
})
export class UploadSheetComponent implements OnInit,OnDestroy{

  uploadSheetModalId="upload-sheet"
  uploadSheetModalTitle="Upload Sheet"
  constructor(private modalService:ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this.uploadSheetModalId)
    this.modalService.toggleModal(this.uploadSheetModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.uploadSheetModalId)

  }


  openFile(fileInput: HTMLInputElement) {
      fileInput.click();
  }
}
