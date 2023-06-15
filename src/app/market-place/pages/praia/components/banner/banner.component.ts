import { Component, Input, OnInit } from '@angular/core';
import { Plugins } from 'src/app/services/funciones';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'praia-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() private dataBanner: { slideHorizontalAleatorio: any; loading: boolean; } | null = null;

  public slideHorizontales: any[] | null = null;
  public loading: boolean;
  private render: boolean;

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.run();
    this.render = true;
    // this.plugins();
  }

  private run = (): void => {
    this.loading = true; // ? Activar el preloading
    // ? Comprobar que el dataBanner no sea null
    if (this.dataBanner) {
      const { slideHorizontalAleatorio, loading } = this.dataBanner; // ? Destructurar los datos
      this.slideHorizontales = this.productosService
        .getSlideHorizontalAleatorio(slideHorizontalAleatorio)
        .slideHorizontal;
      this.loading = loading; // ?  Desactivar el preloading
    }
  }

  public plugins = () => {
    if (this.render) {
      this.render = false;
      Plugins.owlCarouselConfig();
      //Plugins.backgroundImage();
    }
  }

}
