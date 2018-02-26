import { AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
    if((control.value as string).indexOf(" ") != -1){
      return {cannotContainSpace: true };
    } else {
      return null;
    }
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve,reject) => {
      // simulating call to server
      setTimeout(() => {
      if(control.value=="Marc"){
        resolve({ shouldBeUnique: true});
      } else {
        resolve(null);
      }
      }, 2000);
    });
  }
}
