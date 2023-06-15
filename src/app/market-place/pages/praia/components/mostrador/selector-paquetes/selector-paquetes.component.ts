import { Component, OnInit } from '@angular/core';

import { SelectorPaqueteService } from 'src/app/services/selector-paquete.service';
import { CategoriasPaquetesService } from 'src/app/services/categorias-paquetes.service';

@Component({
  selector: 'praia-selector-paquetes',
  templateUrl: './selector-paquetes.component.html',
  styleUrls: ['./selector-paquetes.component.scss']
})
export class SelectorPaquetesComponent implements OnInit {

  public categoriaPaquetes: any[] | null = null;
  public loading: boolean;

  constructor(
    private selectorPaqueteService: SelectorPaqueteService,
    private categoriasPaquetesService: CategoriasPaquetesService
  ) { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.loading = true; // ? Activar el preloading
    this.getCategoriaPaquetes(); // ? Obtener todas las categorias de los paquetes
  }

  // ? Buscar todos las categorias de los paquetes
  private getCategoriaPaquetes = (): void => {
    this.categoriasPaquetesService.categoriasPaquetes().then(({ categoriaPaquetes, loading }) => {
      this.categoriaPaquetes = categoriaPaquetes;
      this.loading = loading;
    });
  }

  // ? Mostrar paquete seleccionado
  public seleccionarPaquete = (paquete: string): void => {
    switch (paquete) {
      case 'NACIONALES':
        this.mostrarPaqueteNacional();
        break;
      case 'INTERNACIONALES':
        this.mostrarPaqueteInternacional();
        break;
      default:
        break;
    }
  }

  // ? Activar y desactiva la vista de paquetes nacionales
  public mostrarPaqueteNacional = (): void => {
    this.selectorPaqueteService.selector.emit({ nacional: true, internacional: false });
  }

  // ? Activar y desactiva la vista de paquetes internacionales
  public mostrarPaqueteInternacional = (): void => {
    this.selectorPaqueteService.selector.emit({ internacional: true, nacional: false });
  }

}
