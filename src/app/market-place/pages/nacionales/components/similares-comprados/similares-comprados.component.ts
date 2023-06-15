import { Component, OnInit, Input } from '@angular/core';

import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-similares-comprados',
  templateUrl: './similares-comprados.component.html',
  styleUrls: ['./similares-comprados.component.scss']
})
export class SimilaresCompradosComponent implements OnInit {

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
      this.productos = obtenerDatos.similares; // ? Asignar datos
      this.loading = obtenerDatos.loading; // ? Desactivar el preloading
    }
  }

}
