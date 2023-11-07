import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent {

  constructor(private router:Router) {
  }

  crateTemplateWithSave() {
    this.navigateToEditSceen()
  }
  navigateToEditSceen(){
    this.router.navigate(['/dashboard/games/templates/edit'])
  }

  createTemplateWithoutSave() {
    this.navigateToEditSceen()

  }
}
