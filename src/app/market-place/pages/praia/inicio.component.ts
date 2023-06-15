import { Component, OnInit } from '@angular/core';

import { Datos } from 'src/app/DB';

@Component({
  selector: 'praia-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public obtenerPaquetes: { paquetes: any[], total: number } | null = null;
  public loading: boolean;
  public dataBanner: { slideHorizontalAleatorio: any[], loading: boolean; } | null = null;
  public loadingBanner: boolean;

  constructor() { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.getBanner();
    this.getPaquetes(); // ? buscar todos los paquetes
  }

  // ? Obtener todos los paquetes
  private getPaquetes = (): void => {
    this.loading = true; // ? Activar preloading

    const { productos } = Datos;

    this.obtenerPaquetes = {
      paquetes: productos.data,
      total: productos.total
    };

    this.loading = false;
  }

  private getBanner = (): void => {
    this.loadingBanner = true; // ?  Activar preloading
    const { slideHorizontalAleatorio } = Datos;

    this.dataBanner = { slideHorizontalAleatorio, loading: false }; // ? Asignar datos
    this.loadingBanner = false; // ? Desactivar el preloading
  }

}
