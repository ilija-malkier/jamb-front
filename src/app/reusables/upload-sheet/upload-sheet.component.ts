import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {NavigationEnd, NavigationExtras, Router} from "@angular/router";
import {DataState} from "../../model/data-state";
import {fi} from "date-fns/locale";
import {Ng2ImgMaxService} from "ng2-img-max";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";


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
   showError=false
  errorMessage=''
  imageUrl:SafeResourceUrl
  @Input() joinGame=false
  @Input() gameId:number=-1
  modalRef:BsModalRef
  @ViewChild("template") template:TemplateRef<any>
  constructor(private sanitizer: DomSanitizer,private httpClient:HttpClient,private router:Router,private ng2ImgMax: Ng2ImgMaxService) {
    this.router.events.subscribe(e=>{
      if(e instanceof  NavigationEnd){

        this.closeModal(null)

      }
    })
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
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
     console.log(form)
    this.isLoading=true
    this.showError=false
    this.errorMessage=''

    if(!this.isFileSelected && this.isLoading) {
      this.isLoading=false
      this.showError=true
      this.errorMessage='You must select the image you want to upload.'
      return
    }


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
        this.router.navigate(["games/calculate"],navigationExtras)
      },
      error => {
        this.isLoading=false
        this.showError=true
        this.errorMessage=error.error.message
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


     this.showError=false
     this.errorMessage=''


    let file=$event.target.files[0];
    this.sheetToUpload=file
    if(file){
      const fileSizeInBytes = this.sheetToUpload.size;
      const fileSizeInKilobytes = fileSizeInBytes / (1024); // Convert to KB

      // You can now check the image size and take appropriate action
      // if (fileSizeInKilobytes < 1) {
      //   this.showError=true
      //   this.errorMessage="Image must be less bigger then 1kb"
      // } else {
        this.isFileSelected=true;
        this.isLoadingImage=true;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    // this.resizeImage(file,1024)
      await new Promise(f => setTimeout(f, 1000));
      this.showProgress=true
      this.interval = setInterval(this.notifyEverySecond, 1000);
    }
    // }

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
    this.modalRef?.hide()
    this.restartVariables(form)

  }

  restartVariables(form:NgForm){
    this.showProgress=false
    this.progress=0
    this.progressPercentString="0%"
    this.isFileSelected=false
    this.remainingTime = 3;
    this.isLoading=false
    this.isLoadingImage=false
    this.showError=false
    this.errorMessage=''
    this.imageUrl=null
    form?.resetForm()
    clearInterval(this.interval);
  }

  deleteSelectedImage(form:NgForm) {
    if(this.isLoading || this.isLoadingImage) return
    this.restartVariables(form)
  }

    protected readonly DataState = DataState;


}
