import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";
import {DataState} from "../model/data-state";
import {fi} from "date-fns/locale";
import {Ng2ImgMaxService} from "ng2-img-max";


@Component({
  selector: 'app-upload-sheet',
  templateUrl: './upload-sheet.component.html',
  styleUrls: ['./upload-sheet.component.css']
})
export class UploadSheetComponent implements OnInit,OnDestroy{

  uploadSheetModalId="upload-sheet"
  uploadSheetModalTitle="Upload Sheet"
  static uploadSheetModalId="upload-sheet"
  sheetToUpload:File;
  isFileSelected=false
   remainingTime = 3;
   interval;
   progressPercentString="0%"
  progress=0
  showProgress=false;
   isLoadingImage=false;
   isLoading=false;
  @Input() joinGame=false
  @Input() gameId:number=-1
  constructor(private modalService:ModalService,private httpClient:HttpClient,private router:Router,private ng2ImgMax: Ng2ImgMaxService) {}
  ngOnInit(): void {
    this.modalService.register(this.uploadSheetModalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.uploadSheetModalId)
  }
  openFile(fileInput: HTMLInputElement) {
      fileInput.click();
  }

  // private readFileAsUint8Array(file: File): void {
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const arrayBuffer = reader.result as ArrayBuffer;
  //     const uint8Array = new Uint8Array(arrayBuffer);
  //     this.sheetToUploadBytes=uint8Array
  //   };
  //   reader.readAsArrayBuffer(file);
  // }
  uploadSheet(form: NgForm) {
    if(!this.isFileSelected || this.isLoading) return

    this.isLoading=true
    const formData = new FormData();
    formData.append('file', this.sheetToUpload);
    this.httpClient.post("http://localhost:8081/sheet/upload",formData).subscribe(
      next=>{
        const navigationExtras: NavigationExtras = {
          state: {
            table: next,
            image:this.sheetToUpload,
            joinGame:this.joinGame,
            gameId:this.gameId
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
  resizeImage(file: File, targetSizeInKB: number) {
    this.ng2ImgMax.resizeImage(file, targetSizeInKB * 1024,targetSizeInKB * 1024).subscribe(
      (result) => {
        const resizedImage: File = new File([result], result.name);
        // Handle the resized image, e.g., upload it or display it.
        this.sheetToUpload=resizedImage
      },
      (error) => {
        console.error('Error resizing image:', error);
      }
    );
  }

   async change($event: any) {

     this.isFileSelected=true;
     this.isLoadingImage=true;



    let file=$event.target.files[0];
    this.sheetToUpload=file
    if(file){
    // this.resizeImage(file,1024)
      await new Promise(f => setTimeout(f, 1000));
      this.showProgress=true
      this.interval = setInterval(this.notifyEverySecond, 1000);
    }


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
