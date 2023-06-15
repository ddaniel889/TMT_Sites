import { Component, OnInit, Input } from '@angular/core';

import { HeaderService } from 'src/app/services/header.service';
import { Plugins } from 'src/app/services/funciones';

@Component({
  selector: 'market-header-mobile-tres',
  templateUrl: './header-mobile-tres.component.html',
  styleUrls: ['./header-mobile-tres.component.scss']
})
export class HeaderMobileTresComponent implements OnInit {

  @Input() private dataHeader: { categorias: any[], loading: boolean; } | null = null;
  @Input() public ruta: string;

  public categorias: any[] | null = null;
  public loading: boolean;

  public logo: string;
  public mostrarUsuarioLogueado: boolean;
  private render: boolean;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.loading = true; // ? Activar el preloading
    this.run();
  }

  private run = (): void => {
    // ? Agregar menus por url activa en el router
    this.headerService.setMenuUrlActiva({ ruta: this.ruta, dataHeader: this.dataHeader })
      .then(({ logo, loading, categorias }) => {
        this.logo = logo;
        this.categorias = categorias;
        this.loading = loading;
        this.render = true;
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

  public plugins = (): void => {
    Plugins.stickyHeader();
    Plugins.siteToggleAction();
    Plugins.subMenuToggle();
  }

  public subsMenuToggle = (): void => {
    if (this.render) {
      this.render = false;
      Plugins.subMenuToggle();
    }
  }

  // get buscar() { return this.buscarForm.get('buscar'); }

}
