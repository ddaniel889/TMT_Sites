import { Component, Input } from '@angular/core';

import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent {

  @Input() public obtenerDatos: InfoProducto | null = null;

}
