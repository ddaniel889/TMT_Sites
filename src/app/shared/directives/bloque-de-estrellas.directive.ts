import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

type Estrellas = {
  [key: number]: number
};

@Directive({
  selector: '[bloqueDeEstrellas]'
})
export class BloqueDeEstrellasDirective implements OnInit {

  @Input() private producto: any | null = null;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    this.cantidadDeBloque(5);
  }

  // Cantidad de bloqueDeEstrellas
  private cantidadDeBloque = (cantidad: number): void => {
    for (let index = cantidad; index > 0; index--) {
      this.bloqueDeEstrellas(index, this.porcentaje(this.estrellas(this.producto), index));
    }
  }

  // ? Cantidad de estrellas
  private estrellas = (producto: any): Estrellas => {
    const estrellas: Estrellas = {
      [1]: 0,
      [2]: 0,
      [3]: 0,
      [4]: 0,
      [5]: 0
    };

    producto.revisiones
      .map((revision: any) => revision.revision)
      .sort()
      .forEach((value: any, index: number, array: any) => {
        // ? Obtener el primer index del array
        const primerIndex = array.indexOf(value);
        // ? Obtener el ultimo index del array
        const ultimoIndex = array.lastIndexOf(value);
        // ? Comparar si el primer index y el ultimo index son diferentes
        // ? Si es diferente es porque se repite muchas veces
        // ? Si son iguales es porque no se repiten
        if (primerIndex !== ultimoIndex) {
          // ? Aumentat la cantidad de veces que se repite una estrella
          estrellas[value] += 1;
        } else if (primerIndex === ultimoIndex) {
          // ? Aumentat la cantidad de veces que no se repite una estrella
          estrellas[value] += 1;
        }
      });

    return estrellas;

  }

  // ? Calcular el porcentaje
  private porcentaje = (estrellas: Estrellas, index: number): string => {
    return Math.round((estrellas[index] * 100) / this.producto.revisiones.length).toString();
  }

  // ? Renderizar elementos div Bloque de estrellas
  private bloqueDeEstrellas = (estrellas: number, porcentage: string): void => {
    // ? Crear el elemento div ps-block
    const divPsBlock = this.renderer.createElement('div');
    this.renderer.setAttribute(divPsBlock, 'class', 'ps-block__star');
    // ? Crear el elemento span
    const spanEstrellaText = this.renderer.createText(`${estrellas} Star`);
    const spanEstrellas = this.renderer.createElement('span');
    this.renderer.appendChild(spanEstrellas, spanEstrellaText);
    // ? Crear el elemento div
    const divPsProgress = this.renderer.createElement('div');
    // ? Agregar el atributo con la class ps-progress
    this.renderer.setAttribute(divPsProgress, 'class', 'ps-progress');
    // ? Agregar el atributo  data-value="0"
    this.renderer.setAttribute(divPsProgress, 'data-value', porcentage);
    // ? Crear el elemento span vacio de este div
    const spanDelDiv = this.renderer.createElement('span');
    // ? Agregar el span del div al elemento div
    this.renderer.appendChild(divPsProgress, spanDelDiv);
    // ? Crear elemento span con el texto de valor 0
    const spanCeroText = this.renderer.createText(`${porcentage}%`);
    const spanCero = this.renderer.createElement('span');
    this.renderer.appendChild(spanCero, spanCeroText);
    // ? Agregar todos los elementos al divPsBlock
    this.renderer.appendChild(divPsBlock, spanEstrellas);
    this.renderer.appendChild(divPsBlock, divPsProgress);
    this.renderer.appendChild(divPsBlock, spanCero);
    // ? Agregar el ps-block__start al dom
    this.renderer.appendChild(this.el.nativeElement, divPsBlock);
  }

}
