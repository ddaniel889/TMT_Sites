import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'temporizador'
})
export class TemporizadorPipe implements PipeTransform {

  transform(producto: any): string {
    return producto.oferta.fecha;
  }

}
