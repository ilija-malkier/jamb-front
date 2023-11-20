import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-image-relative-p',
  templateUrl: './custom-image-relative-p.component.html',
  styleUrls: ['./custom-image-relative-p.component.css']
})
export class CustomImageRelativePComponent {

  @Input("username") username:string


  randomColor='';

  generateRandomColor() {
    const randomR = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomG = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomB = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255


    this.randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }



  ngOnInit(): void {
    this.generateRandomColor();

  }
}
