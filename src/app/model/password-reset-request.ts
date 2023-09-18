export class PasswordResetRequest {
  constructor(newPassword: string) {
    this.newPassword=newPassword;
  }

  newPassword:String
}
