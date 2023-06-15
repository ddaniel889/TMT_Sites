import { Component, OnInit, Input } from '@angular/core';

import { SelectorPaqueteService } from 'src/app/services/selector-paquete.service';

@Component({
  selector: 'praia-estado-mostrador',
  templateUrl: './estado-mostrador.component.html',
  styleUrls: ['./estado-mostrador.component.scss']
})
export class EstadoMostradorComponent implements OnInit {

  @Input() private obtenerPaquetes: { paquetes: any[]; total: number } | null = null;

  public nacionales: any[] = [];
  public internacionales: any[] = [];
  public nacional: boolean;
  public internacional: boolean;

  constructor(
    private selectorPaqueteService: SelectorPaqueteService
  ) {}

  ngOnInit(): void {
    this.estadoMostrador(); // ? Obtener todos los paquetes
    // ? Obtener si fue activado un paquete desde el selector-paquete
    this.selectorPaqueteService.selector.subscribe(({ nacional, internacional }: { nacional: boolean; internacional: boolean; }) => {
      this.nacional = nacional;
      this.internacional = internacional;
    });
  }

  // ? Obtiene todos los paquetes filtrados por tipos
  private estadoMostrador = () => {
    // ? Filtrar los paquetes por tipos
    this.nacionales = this.obtenerPaquetes.paquetes.filter(paquete => paquete.categoriaPaquete.nombre === 'NACIONALES');
    this.internacionales = this.obtenerPaquetes.paquetes.filter(paquete => paquete.categoriaPaquete.nombre === 'INTERNACIONALES');
  }

}
