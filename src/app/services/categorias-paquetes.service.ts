import { Injectable } from '@angular/core';
import { Datos } from 'src/app/DB';

interface GetCategoriasPaquetes {
  categoriaPaquetes: any[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasPaquetesService {


  constructor() { }

  public categoriasPaquetes = (): Promise<GetCategoriasPaquetes> => {
    return new Promise<GetCategoriasPaquetes>(resolver => {
      const { categoriaPaquetes } = Datos;
      resolver({ categoriaPaquetes, loading: false });
    });
  }

}
