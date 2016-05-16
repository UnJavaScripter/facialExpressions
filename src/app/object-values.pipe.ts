import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValues implements PipeTransform {

  transform(value: any, args?: any): any {
    let llaves_arr = Object.keys(value),
      datos_arr = [];

    llaves_arr.forEach(key => {
      datos_arr.push([ key, value[key] ]);
    });

    return datos_arr;
  }

}
