import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";
import {DataState} from "../model/data-state";


@Component({
  selector: 'app-upload-sheet',
  templateUrl: './upload-sheet.component.html',
  styleUrls: ['./upload-sheet.component.css']
})
export class UploadSheetComponent implements OnInit,OnDestroy{

  uploadSheetModalId="upload-sheet"
  uploadSheetModalTitle="Upload Sheet"
  static uploadSheetModalId="upload-sheet"
  sheetToUpload;
  isFileSelected=false
   remainingTime = 3;
   interval;
   progressPercentString="0%"
  progress=0
  showProgress=false;
   isLoadingImage=false;
   isLoading=false;
  constructor(private modalService:ModalService,private httpClient:HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.modalService.register(this.uploadSheetModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.uploadSheetModalId)

  }


  openFile(fileInput: HTMLInputElement) {
      fileInput.click();
  }


  uploadSheet(form: NgForm) {
    this.isLoading=true
    const formData = new FormData();
    formData.append('file', this.sheetToUpload);
    this.httpClient.post("http://localhost:8081/sheet/upload",formData).subscribe(
      next=>{
        const navigationExtras: NavigationExtras = {
          state: {
            data: next
          }
        };
        this.router.navigate(["game/create"],navigationExtras)
      },
      error => {
        this.isLoading=false
        console.log(error)
      },
      ()=>{
        console.log("finished")
        this.isLoading=false
      }
    )
  }

   async change($event: any) {

     this.isFileSelected=true;
     this.isLoadingImage=true;
    this.sheetToUpload=$event.target.files[0];

    await new Promise(f => setTimeout(f, 1000));
    this.showProgress=true
    this.interval = setInterval(this.notifyEverySecond, 1000);

  }

   notifyEverySecond = () => {
    this.remainingTime--;
    this.progress+=25;
    this.progressPercentString=this.progress+"%"
    if (this.remainingTime < 0) {
      this.isLoadingImage=false;
      clearInterval(this.interval);

    }
  };

  closeModal(form:NgForm) {
    this.modalService.toggleModal(UploadSheetComponent.uploadSheetModalId);
    this.restartVariables(form)
  }

  restartVariables(form:NgForm){
    this.showProgress=false
    this.progress=0
    this.progressPercentString="0%"
    this.isFileSelected=false
    this.remainingTime = 3;
    this.isLoading=false
    form.resetForm()
    clearInterval(this.interval);
  }

  deleteSelectedImage(form:NgForm) {
    this.restartVariables(form)
  }

    protected readonly DataState = DataState;
}
