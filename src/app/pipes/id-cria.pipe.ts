import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCria'
})
export class IdCriaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.lenght < 3) return value;
    const result =[];
    for(const cria of value){
      if(cria.id_cria.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(cria);
      };
    };
    return result;
  }

}
