import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proveedorpi'
})
export class ProveedorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.lenght < 3) return value;
    const result =[];
    for(const proveedor of value){
      if(proveedor.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(proveedor);
      };
    };
    return result;
  }

}