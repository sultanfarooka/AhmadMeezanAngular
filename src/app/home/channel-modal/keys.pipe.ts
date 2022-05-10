import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return Object.keys(value);
  // }

  transform(value: any, args: any = null): any {
    return Object.keys(value).map(key => Object.assign({ key }, value[key]));
}

}
