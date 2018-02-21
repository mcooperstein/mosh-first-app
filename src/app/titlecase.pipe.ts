import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "titlecase"
})

export class TitlePipe implements PipeTransform {
  transform(value:string, args?:any){
    if(!value) {
      return null;
    } else {
      let prepositions = ['of', 'the', 'and', 'by', 'or']
      let newStr = value.split(" ");
      for(let i =0; i<newStr.length; i++){
        //if(newStr[i]==="the"|| newStr[i]==="of" || newStr[i]==="and" || newStr[i]==="by"){
        if(prepositions.includes(newStr[i])) {
          if(i===0){
            newStr[i]= newStr[i][0].toUpperCase()+newStr[i].slice(1).toLowerCase();
          }
        } else {
          newStr[i]= newStr[i][0].toUpperCase()+newStr[i].slice(1).toLowerCase();
        }
      }
      return newStr.join(" ");
    }

  }
}
