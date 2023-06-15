import { Component, OnInit, Input } from '@angular/core';

import { Plugins } from 'src/app/services/funciones';
import { InfoProducto } from 'src/app/interfaces/productos';

@Component({
  selector: 'nacionales-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss']
})
export class HeaderStickyComponent implements OnInit {

  @Input() private obtenerDatos: InfoProducto | null = null;

  private render: boolean;
  public loading: boolean;
  public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    this.render = true;
    this.plugins();
    this.run();
  }

  private run = (): void => {
    if (this.obtenerDatos !== null) {
      const { producto, loading } = this.obtenerDatos;
      this.producto = producto;
      this.loading = loading;
    }
  }

  public plugins = (): void => {
    if (this.render) {
      this.render = false;
      Plugins.stickyHeader();
    }
  }

}
