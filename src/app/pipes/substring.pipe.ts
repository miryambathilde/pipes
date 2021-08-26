import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.substring(0, 24) + ' ...';
    //console.log(value.length)
    //return value;
  }

}
