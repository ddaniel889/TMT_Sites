import { Component, OnInit, Input } from '@angular/core';

import { HeaderService } from 'src/app/services/header.service';
import { Plugins } from 'src/app/services/funciones';


@Component({
  selector: 'market-header-tres',
  templateUrl: './header-tres.component.html',
  styleUrls: ['./header-tres.component.scss']
})
export class HeaderTresComponent implements OnInit {

  @Input() private dataHeader: { categorias: any[], loading: boolean; } | null = null;
  @Input() public ruta: string;

  public categorias: any[];
  public loading: boolean;
  public logo: string;
  public logueado: boolean;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.loading = true; // ? Activar el preloading
    // ? Agregar menus por url activa en el router
    this.headerService.setMenuUrlActiva({ ruta: this.ruta, dataHeader: this.dataHeader })
      .then(({ logo, loading, categorias }) => {
        this.logo = logo;
        this.categorias = categorias;
        this.loading = loading;
      });

    this.headerService.router.subscribe((ruta: string) => {
      this.headerService.setMenuUrlActiva({ ruta, dataHeader: this.dataHeader })
        .then(({ logo, loading, categorias }) => {
          this.logo = logo;
          this.categorias = categorias;
          this.loading = loading;
        });
    });

    this.plugins();
  }

  private plugins = (): void => {
    Plugins.stickyHeader();
  }

}
