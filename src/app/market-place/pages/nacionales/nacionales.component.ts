import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Datos } from 'src/app/DB';
import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'praia-nacionales',
  templateUrl: './nacionales.component.html',
  styleUrls: ['./nacionales.component.scss']
})
export class NacionalesComponent implements OnInit {

  public obtenerDatos: InfoProducto | null;
  public breadcrumb: { sitio: string; path: string; } | null = null;
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.getParametro(); // ? Obtener el parametro pasado por la url
  }

  // ? Obtener el parametro pasado por la url
  private getParametro = (): void => {
    this.activatedRoute.params.subscribe(({ paqueteURL }: { paqueteURL: string }) => {
      this.getPaquete(paqueteURL); // ? Buscar el paquete seleccionado
    });
  }

  // ? Obtener el paquete seleccionado
  private getPaquete = async (url: string): Promise<void> => {

    this.loading = true; // ? Activar el preloading
    this.obtenerDatos = null;

    const { productos: productosArray} = Datos;

    // ? Obtener el paquete
    const producto = productosArray.data.filter((productoData) => productoData.url === url)[0];

    // ? Obtener 2 productos de la tienda del paquete seleccionado
    const productos = productosArray.data.filter(productosData => productosData.tienda.nombre === producto.tienda.nombre && productosData.categoriaPaquete !== null)
      .sort((a: any, b: any) => a.vendidos - b.vendidos)
      .slice(0, 1);

    // ? Obtener los productos relacionados al paquete seleccionado
    const relacionados = productosArray.data.filter(productosData => productosData.categoriaPaquete.url === producto.categoriaPaquete.url)
      .sort((a: any, b: any) => a.vistas - b.vista)
      .slice(0, 9);

    // ? Desactivar el preloading
    this.loading = producto === null
      || productos === null
      || relacionados === null;

    // ? Asignar los datos del paquete
    const time = setInterval(() => {
      if (!!producto && !!productos && !!relacionados ) {
        this.obtenerDatos = {
          producto,
          loading: false,
          productos,
          relacionados
        };
        clearInterval(time);
      }
    }, 100);

  }

}
