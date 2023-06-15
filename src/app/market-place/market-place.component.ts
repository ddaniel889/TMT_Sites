import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HeaderService } from 'src/app/services/header.service';
import { Datos } from 'src/app/DB';

@Component({
  selector: 'market-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit, OnDestroy {

  private querySubscriptionRouter: Subscription;
  public dataHeaderPromotion: { bannerSuperiorAleatorio: any, loading: boolean } | null = null;
  public loadingHeaderPromotion: boolean;
  public dataHeader: { categorias: any[], loading: boolean } | null = null;
  public loadingHeader: boolean;
  public ruta: string;

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    // ? Obtener la url para filtrar menus
    this.querySubscriptionRouter = this.router.events
      .pipe(filter((event: NavigationEnd) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.ruta = event.url;
        this.headerService.router.emit(event.url);
      });
  }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.getBannerSuperior();
    this.getHeader();
  }

  // ? Buscar todos los banner superior de los productos
  private getBannerSuperior = (): void => {
    const { bannerSuperiorAleatorio } = Datos;
    this.loadingHeaderPromotion = true; // ? Activar el preloading
    this.dataHeaderPromotion = { bannerSuperiorAleatorio, loading: false }; // ? Datos para Header Promotion
    this.loadingHeaderPromotion = false; // ? Desactivar el Preloading de Header Promotion
  }

  // ? Buscar las categorias para el el munu del header
  private getHeader = async (): Promise<void> => {
    const { categorias } = Datos;
    this.loadingHeader = true; // ? Activar el preloading
    this.dataHeader = { categorias, loading: false }; // ? Datos para el Header
    this.loadingHeader = false; // ? Desactivar el preloading
  }

  ngOnDestroy(): void {
    this.querySubscriptionRouter.unsubscribe();
  }

}
