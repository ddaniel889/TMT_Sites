import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'praia-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.scss']
})
export class MostradorComponent implements OnInit {

  @Input() public paquetes: any[];
  @Input() public titulo: string;

  public paginaActual: number;
  public itemsPorPagina = 3; // ? Cantidad de items que seran mostrados del paquete

  ngOnInit(): void {
    // ? Iniciar la pagina seleccionada si existe en el storage si no por defecto sera 1
    this.paginaActual = !!window.localStorage.getItem('regionales') && this.titulo === 'Regionales'
      ? Number(window.localStorage.getItem('regionales'))
      : !!window.localStorage.getItem('nacionales') && this.titulo === 'Nacionales'
        ? Number(window.localStorage.getItem('nacionales'))
        : !!window.localStorage.getItem('internacionales') && this.titulo === 'Internacionales'
          ? Number(window.localStorage.getItem('internacionales'))
          : 1;
  }

  // ? Cambiar la paginacion
  public cambiarPagina = (pagina: number) => {
    this.paginaActual = pagina; // ? Pasar la nueva pagina actual
    window.localStorage.setItem(this.titulo.toLowerCase(), pagina.toString()); // ? guardar la pagina seleccionada en el storage
  }

}
