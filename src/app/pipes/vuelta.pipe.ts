import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})

export class VueltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //recibo una cadena de caracteres y quiero darle la vuelta //
    // primero tengo que comprobar lo que es una cadena, solo tiene que funcionar con cadenas de texto //
    // despues quiero darle la vuelta y retorna la cadena dada la vuelta //
    if (typeof value === 'string') {
      /* let array = value.split(' ');
      let arrayReverse = [...array].reverse();
      let result = arrayReverse.join(' ');
      return result; */

      return value.split(' ').reverse().join(' ');
    }

    return null;
  }

}


