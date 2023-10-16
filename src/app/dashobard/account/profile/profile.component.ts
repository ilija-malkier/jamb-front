import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomResponse} from "../../../model/custom-response";
import {PlayerResponse} from "../../../model/player-response";
import {NgFor} from "@angular/common";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {UpdatePlayerRequest} from "../../../model/update-player-request";
import {error} from "@angular/compiler-cli/src/transformers/util";
import * as alertifyjs from "alertifyjs";
import {AuthService} from "../../../../services/auth.service";
import {GameStatus} from "../../../model/game-status";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profile:PlayerResponse

  firstName: string;
  lastName: string;
  showErrorPasswordChange: boolean;
  errorMessage: string;
  randomColor='';

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private authService:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    let data= <CustomResponse>this.activatedRoute.snapshot.data['data']
    this.generateRandomColor()
    this.profile=data.data.player
    this.firstName=this.profile.firstName
    this.lastName=this.profile.lastName
  }


  generateRandomColor() {
    const randomR = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomG = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255
    const randomB = Math.floor(Math.random() * 128) + 128; // Range from 128 to 255


    this.randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

  async saveProfileChanges() {
    if(this.profile.firstName===this.firstName && this.profile.lastName===this.lastName){
      return
    }
    this.profile.firstName=this.firstName
    this.profile.lastName=this.lastName
    await this.userService.updateProfile(new UpdatePlayerRequest(this.firstName,this.lastName)).subscribe(data=>{
      // alertifyjs.success("Profile updated.")
      console.log(data)

    },error=>{
      console.log(error)
        // alertifyjs.error("Could not update profile.Please try again later.")
    })
  }



  logout() {
    this.authService.logout()
  }

  deactivateAccount() {
    this.userService.deactivateAccount().subscribe(data=>{
      alertifyjs.success("Account deactivated successfully")
    },error=>{
      alertifyjs.error("Could not deactivate the account.Please try again later")
    })
  }

  protected readonly GameStatus = GameStatus;

  changePassword(form: NgForm) {
      let newPassowrd=form.value['newPassword'];
      let oldPassword=form.value['oldPassword']
    console.log(newPassowrd)

    if(!this.validatePasswords(newPassowrd,oldPassword))  return
    console.log(newPassowrd)

      this.userService.restartPasswordProfile(newPassowrd,oldPassword).subscribe(data=>{
        form.reset()
        // alertifyjs.success("Password changed successfully.")
        console.log(data)
      },error=>{
        console.log(error)
        // alertifyjs.error("Could not reset newPassowrd.Please try again later")

      })
    }

  private validatePasswords(password: string, oldPassword: string){

    if(password === oldPassword){
      this.showErrorPasswordChange=true
      this.errorMessage='Password are the same.Please change to new password'
      return false
    }
    if(!this.hasDigit(password) || !this.hasDigit(oldPassword)){
      this.showErrorPasswordChange=true
      this.errorMessage='Password must contain a digit'
      return false
    }
    if(!this.hasSpecialCharacter(password) || !this.hasSpecialCharacter(oldPassword)) {
      this.showErrorPasswordChange = true
      this.errorMessage = 'Password must contain a special character'
      return false
    }
    this.showErrorPasswordChange=false
    this.errorMessage=''
    return true
  }
  hasDigit(inputString: string): boolean {
    const digitRegex = /\d/;
    return digitRegex.test(inputString);
  }
  hasSpecialCharacter(inputString: string): boolean {
    const specialCharacterRegex = /[^a-zA-Z0-9]/;
    return specialCharacterRegex.test(inputString);
  }

  viewAllGamesets() {
    this.router.navigate(['account/gamesets'])
  }
}
