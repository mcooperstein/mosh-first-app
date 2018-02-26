import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control:AbstractControl){
    return new Promise((resolve)=>{
      if(control.value!=="1234"){
        resolve({invalidOldPassword:true});
      }else {
        resolve(null);
      }
    });
  }
  static cannotContainSpace(control:AbstractControl){
    return new Promise((resolve)=>{
      if((control.value as string).indexOf(" ") !=-1){
        resolve({cannotContainSpace: true});
      } else {
        resolve(null);
      }
    })
  }
  static passwordsShouldMatch(control:AbstractControl){
    let newPassword =  control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if(newPassword.value !== confirmPassword.value){
      return { passwordsShouldMatch: true};
    } else {
      return null;
    }
  }
}
