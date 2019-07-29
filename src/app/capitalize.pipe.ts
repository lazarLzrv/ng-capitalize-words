import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let words = value.split(" ");  
      let last="";
      for (let i = 0; i < words.length; i++) {
        console.log(i);
        if (words[i]=="of" || words[i]=="the" || words[i]=="OF" || words[i]=="THE"){
          last += words[i].toLowerCase() 
        }else{
          last += words[i].toLowerCase().charAt(0).toUpperCase()+words[i].toLowerCase().slice(1); 
        }
        
        last += " "; 
      }
      return last;
    }    
  
  }

}
