import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'market-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.scss']
})
export class HeaderPromotionComponent implements OnInit {

  @Input() private dataHeaderPromotion: { bannerSuperiorAleatorio: any, loading: boolean } | null = null;

  public bannerSuperior: any | null = null;
  public loading: boolean;
  public categoriaUrl: string;

  constructor(
    private productosServices: ProductosService
  ) { }

  ngOnInit(): void {
    this.loading = true; // ? Activar el preloading
    if (this.dataHeaderPromotion) { // ? Comprobar si dataHeaderPromotion no es null
      const { bannerSuperiorAleatorio, loading } = this.dataHeaderPromotion; // ? Destructurar los datos
      // ? Asignar el banner aleatorio
      this.bannerSuperior = this.productosServices.getBannerSuperiorAleatorio(bannerSuperiorAleatorio).bannerSuperior;
      this.loading = loading; // ? Desactivar el preloading
    }
  }

}
