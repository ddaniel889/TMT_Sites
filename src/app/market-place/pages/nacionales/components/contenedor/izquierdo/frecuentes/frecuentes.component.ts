import { Component, OnInit, Input } from '@angular/core';

import { Datos } from 'src/app/DB';

@Component({
  selector: 'nacionales-frecuentes',
  templateUrl: './frecuentes.component.html',
  styleUrls: ['./frecuentes.component.scss']
})
export class FrecuentesComponent implements OnInit {

  @Input() public producto: any | null = null;
  public  productoCJ: any | null = null;
  public loading: boolean;

  public precioCompradoJunto: number;
  public checkedProductoCJ = true;
  public checkedProducto = true;

  constructor() { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.precioCompradoJunto = 0;
    this.getProductoCJ();
  }

  // ? Buscar productos comprados junto al producto seleccionado
  private getProductoCJ = (): void => {
    this.loading = true; // ? Activar preloading
    // ? Buscar el producto relacionado

    const { productos } = Datos;

    const data = productos.data.filter(productosData => productosData.titulo === this.producto.titulo)
      .sort((a: any, b: any) => a.vistas - b.vista)
      .slice(0, 1)[0];

    this.setCompradoJunto(data); // ? Asignar el producto relacionado
    this.loading = false; // ? Desactivar el preloading
  }

  // ? Asignar los datos del producto comprado
  // ? Si los checked estan seleccionado y el producto seleccionado no es null
  // ? Asignar los precios de cada producto
  private setCompradoJunto = (producto: any): void => {
    this.productoCJ = producto;
    if (this.checkedProducto && this.checkedProductoCJ && this.producto !== null) {
      this.precioCJ(this.checkedProductoCJ);
      this.precioProducto(this.checkedProducto);
    }
  }

  // ? Si activo o desactivo el checked del Producto Comprado Junto
  // ? Sumar si esta activo
  // ? Resta si esta desactivado
  public precioCJ = (check: boolean): void => {
    if (check) {
      this.checkedProductoCJ = true;
      this.precioCompradoJunto += this.calcularDescuento(this.productoCJ);
    } else {
      this.checkedProductoCJ = false;
      this.precioCompradoJunto -= this.calcularDescuento(this.productoCJ);
    }
  }

  // ? Si activo o desactivo el checked del Producto Seleccionado
  // ? Sumar si esta activo
  // ? Resta si esta desactivado
  public precioProducto = (check: boolean): void => {
    if (check) {
      this.checkedProducto = true;
      this.precioCompradoJunto += this.calcularDescuento(this.producto);
    } else {
      this.checkedProducto = false;
      this.precioCompradoJunto -= this.calcularDescuento(this.producto);
    }
  }

  // ? Calcular el precio con descuento
  private calcularDescuento = (producto: any): number => {
    return Number((producto.precio - (producto.precio * Number(producto.oferta.descuento) / 100)).toFixed(2));
  }

}
