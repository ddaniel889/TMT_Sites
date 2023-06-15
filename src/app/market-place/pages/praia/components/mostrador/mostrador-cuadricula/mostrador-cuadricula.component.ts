import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'praia-mostrador-cuadricula',
  templateUrl: './mostrador-cuadricula.component.html',
  styleUrls: ['./mostrador-cuadricula.component.scss']
})
export class MostradorCuadriculaComponent implements OnInit {

  @Input() public paquetes: any[] | null = null;
  @Input() public paginaActual: number;
  @Input() public itemsPorPagina: number;
  @Input() public titulo: string;

  public ruta: string;

  ngOnInit(): void {
    // ? Obtener la ruta del paquete
    this.ruta = this.getRuta();
  }

  // ? Define la ruta de los paquetes
  private getRuta = (): string => {
    console.log('MostradorCuadriculaComponent -> this.titulo.toLowerCase()', this.paquetes);
    return `/paquetes/${this.titulo.toLowerCase()}`;
  }

}
