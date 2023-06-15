import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /**
   * @producto para pasar valores de un componente a otro
   * Ejemplo de uso productos.emit(aqui el valor que se quiere enviar)
   * y se recibe con un subcribe productos.subscribe(res => {setear datos})
   */
  public productos: EventEmitter<{ productos: any[], loading: boolean; }>;

  constructor(
  ) {
    this.productos = new EventEmitter();
  }

  /**
   * @param productos: Producto[]
   * @returns: { bannerSuperior: BannerSuperior; categoriaUrl: string; }
   * Selecciona aleatoriamente un banner top del producto
   */
  public getBannerSuperiorAleatorio = (producto: any): { bannerSuperior: any; } => {
    return {
      bannerSuperior: {
        ...producto.bannerSuperior,
        URLtag: producto.url,
        CATtag: producto.categoria.url
      }
    };
  }

  /**
   * @param total:number Total de productos registrados
   * @param restarIndice: number Resta al indice generado un total de 5 para no pasarse
   * del indice del registro de productos (es un paramentro opcional y su valor es la catidad de
   * registro que se quieren traer de la base de datos)
   * @returns: number Retorno el indice para hacer la busqueda aleatoria
   */
  public indiceAleatorio = (total: number, restarIndice: number = 0): number => {
    return Math.floor(Math.random() * (total - restarIndice));
  }

  /**
   * @param productos: Producto[] -  todos los productos
   * @param total: number  total de los productos registrado en la base de datos
   * Si hay mas de 5 productos guardados se escoje aleatoriamente los banner es un maximo de 5
   * @returns: { sliderHorizontal: SliderHorizontal; }
   * @nota Selecciona aleatoriamente 5 productos apartir de su indice ordenado por los primeros 5
   * del indice seleccionado aleatoriamente.
   */
  public getSlideHorizontalAleatorio = (productos: any[]): {
    slideHorizontal: any[];
  } => {

    const slideHorizontal: any[] = [];

    /**
     * Si el tamaño del array es mayor que 5 creo un array con indices aleatorio producto
     * Si no es menor que 6 creo un array con los primeros 5 indices del producto
     */
    if (productos.length >= 5) {
      for (const producto of productos) {
        slideHorizontal.push({
          ...producto.sliderHorizontal,
          NOMtag: producto.nombre,
          CATtag: producto.categoria.url,
          URLtag: producto.url
        });
      }
    } else {
      for (const producto of productos) {
        slideHorizontal.push({
          ...producto.sliderHorizontal,
          NOMtag: producto.nombre,
          CATtag: producto.categoria.url,
          URLtag: producto.url
        });
      }
    }

    return { slideHorizontal };
  }

}

