import { Component, OnInit, Input } from '@angular/core';

import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-derecho',
  templateUrl: './derecho.component.html',
  styleUrls: ['./derecho.component.scss']
})
export class DerechoComponent implements OnInit {

  @Input() obtenerDatos: InfoProducto | null = null;

  public productos: any[] | null = null;
  public loading: boolean;

  constructor() { }

  ngOnInit(): void {
    this.loading = true; // ? Activar el preloading
    this.run();
  }

  private run = (): void => {
    this.getProducto(this.obtenerDatos);
  }

  // ? Obtener los productos mas vendidos por la tienda
  private getProducto = (obtenerDatos: InfoProducto): void => {
    if (obtenerDatos !== null) {
      this.productos = obtenerDatos.productos;
      this.loading = obtenerDatos.loading;
    }
  }

}
