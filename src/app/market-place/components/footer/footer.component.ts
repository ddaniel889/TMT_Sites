import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'market-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() dataHeader: { categorias: any[]; loading: boolean; } | null = null;

  public categorias: any[];
  public loading: boolean;

  ngOnInit(): void {
    this.loading = true; // ? Activar el preloading
    // ? Comprobar que el dataHeader no sea null
    if (this.dataHeader) {
      const { categorias, loading } = this.dataHeader; // ? Destructurar los datos
      this.categorias = categorias; // ? Asignar los datos
      this.loading = loading; // ? Desactivar el preloading
    }

  }
}
