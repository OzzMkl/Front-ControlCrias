import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCria'
})
export class NombreCriaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.lenght < 3) return value;
    const result =[];
    for(const cria of value){
      if(cria.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(cria);
      };
    };
    return result;
  }

}
