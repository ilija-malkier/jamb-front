import {Component, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {UploadSheetComponent} from "../upload-sheet/upload-sheet.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private modalService:ModalService) {}

  openModal() {
    this.modalService.toggleModal(UploadSheetComponent.uploadSheetModalId);
  }
}
