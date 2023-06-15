import { Injectable, EventEmitter } from '@angular/core';

interface MenuUrl {
  dataHeader: { categorias: any[], loading: boolean } | null;
  ruta: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public router: EventEmitter<string>;

  constructor() { this.router = new EventEmitter<string>(); }

  /**
   * @param args: {
   * dataHeader: { categorias: Categoria[], loading: boolean } | null;
   * ruta: string;
   * }
   */
  public setMenuUrlActiva = (args: MenuUrl): Promise<{ logo: string; categorias: any[] | null; loading: boolean; }> => {

    const { ruta, dataHeader: { categorias, loading } } = args;
    // ? Guardar la ubicacion en el localStorage de la ruta en que se esta navegando para hacer redireccion con el login y el registro de usuarios
    // if (ruta !== '/login' && ruta !== '/registro') {
    //   window.localStorage.setItem('ubicacion', ruta);
    // }

    const logo = './assets/svg/praia.svg';

    switch (ruta.split('/')[1]) {
      case '':
        return new Promise<{ logo: string; categorias: any[] | null; loading: boolean; }>(resolve => resolve({ logo, categorias: null, loading: false }));
      case 'paquetes':
        return new Promise<{ logo: string; categorias: any[] | null; loading: boolean; }>(resolve => resolve({ logo, categorias: null, loading: false }));
      case 'cambios':
        return new Promise<{ logo: string; categorias: any[] | null; loading: boolean; }>(resolve => resolve({ logo, categorias: null, loading: false }));
      case 'tienda':
        // ? Comprobar que dataHeader no sea null
        if (categorias) {
          return new Promise<{ logo: string; categorias: any[] | null; loading: boolean; }>(resolve => resolve({ logo, categorias, loading }));
        }
        break;
      default:
        return new Promise<{ logo: string; categorias: any[] | null; loading: boolean; }>(resolve => resolve({ logo, categorias , loading }));
    }
  }

}
