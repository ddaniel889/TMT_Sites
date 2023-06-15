import { Component, OnInit, Input } from '@angular/core';

import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.scss']
})
export class RelacionadosComponent implements OnInit {

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

  // ? Obtener los productos relacionados al producto selecconado
  private getProducto = (obtenerDatos: InfoProducto): void => {
    if (obtenerDatos !== null) {
      this.productos = obtenerDatos.relacionados; // ? Asignar datos
      this.loading = obtenerDatos.loading; // ? Desactivar el preloading
    }
  }

}
