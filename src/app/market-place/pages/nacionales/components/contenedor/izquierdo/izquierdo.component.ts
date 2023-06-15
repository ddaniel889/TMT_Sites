import { Component, OnInit, Input } from '@angular/core';


import { Plugins } from 'src/app/services/funciones';
import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-izquierdo',
  templateUrl: './izquierdo.component.html',
  styleUrls: ['./izquierdo.component.scss']
})
export class IzquierdoComponent implements OnInit {

  @Input() obtenerDatos: InfoProducto | null = null;

  public producto: any | null = null;
  public loading: boolean;
  public cantidad: number;

  constructor() { this.cantidad = 1; }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.loading = true; // ? Activar el preloading
    this.getProducto(this.obtenerDatos); // ? Obtener producto seleccionado
    this.activarPlugings(); // ? Activar plugins
  }

  // ? Obtener el producto y asignarlo
  private getProducto = (obtenerDatos: InfoProducto): void => {
    if (obtenerDatos !== null) {
      this.producto = obtenerDatos.producto;
      this.loading = obtenerDatos.loading;
    }
  }

  // ? Aumentar la cantidad de compra
  public up = (): void => {
    this.cantidad = this.cantidad < 9
      ? this.cantidad + 1
      : 9;
  }

  // ? Disminuir la cantidad de compra
  public down = (): void => {
    this.cantidad = this.cantidad > 1
      ? this.cantidad - 1
      : 1;
  }

  // ? Asignar los datos que se introduzcan por teclado
  public cantidadChange = (cantidad: string): void => {
    this.cantidad = Number(cantidad);
  }

  // ? plugins necesarios para el funcionamiento de la plantilla
  private plugins = (): void => {
    Plugins.owlCarouselConfig();
    Plugins.countDown();
    Plugins.carouselNavigation();
    Plugins.slickConfig();
    Plugins.productLightbox();
    Plugins.rating();
    Plugins.progressBar();
    Plugins.tabs();
  }

  // ? Chequear los plugins si loading es false
  private activarPlugings = (): void => {
    const check = setInterval(() => {
      if (!this.loading) {
        clearInterval(check);
      }
      this.plugins();
    }, 100);
  }

}
