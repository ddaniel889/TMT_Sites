import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[rating]'
})
export class RatingDirective implements OnInit {

  @Input() private producto: any | null = null;
  @Input() private soloPromedio?: boolean; // ? Desactiva las estrellas y solo muestra el promedio
  @Input() private decimales?: boolean; // ? Activa los decimales del promedio
  @Input() private revisiones?: boolean; // ? Activar o desactivar las reseñas
  @Input() private revisionesTexto?: boolean; // ? Activar o Desactivar el texto reseñas
  @Input() private indexRevisiones?: number; // ? Index para ir moviendose entre las revisiones

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.rating(this.producto, this.soloPromedio, this.revisionesTexto);
  }

  private rating = (producto: any, soloPromedio: boolean, revisionesTexto = true) => {

    const estrellas: number[] = [1, 2, 3, 4, 5]; // ? Cantidad de estrellas a mostrar

    let promedio = 0; // ? Promedio

    if (producto && producto.revisiones && producto.revisiones.length > 0) {
      // ? Calcula el promedio
      promedio = this.decimales
        ? Number((producto.revisiones.reduce((sum: number, current: any) => sum += current.revision, 0) / producto.revisiones.length).toFixed(2))
        : Math.round(producto.revisiones
            .reduce((sum: number, current: any) => sum += current.revision, 0) / producto.revisiones.length);
    }

    // ? Si soloPromedio esta activo envio el promedio. y si no calculo el rating y lo renderiza.
    if (soloPromedio) {
      // ? Crea los elementos que seran renderizado en el select rating
      const spanText = this.renderer.createText(promedio.toString());
      this.renderer.appendChild(this.el.nativeElement, spanText);
    } else if (this.revisiones) {
      // ? Crea los elementos que seran renderizado en el select rating
      // ? en la posicion revisiones
      const spanText = this.renderer.createText(revisionesTexto
        ? `(${this.producto.revisiones.length.toString()}) reseñas`
        : this.producto.revisiones.length.toString()
      );
      this.renderer.appendChild(this.el.nativeElement, spanText);
    } else if (this.indexRevisiones !== undefined) {
      // ? Calcular el rating que cada usuario a seleccionado
      for (const estrella of estrellas) {
        // ? Verifica si el promedio es menor que el numero de estrellas
        // ? si es menor activa la estrella y si no la desactiva (1: desactivado, 2: activado)
        const value: string = this.producto.revisiones[this.indexRevisiones].revision < estrella
          ? '1'
          : '2';

        // ? Crea los elementos que seran renderizado en el select rating
        const option =  this.renderer.createElement('option');
        this.renderer.setAttribute(option, 'value', value);
        const optionText = this.renderer.createText(estrella.toString());
        this.renderer.appendChild(option, optionText);
        this.renderer.appendChild(this.el.nativeElement, option);
      }
    } else {
      for (const estrella of estrellas) {
        // ? Verifica si el promedio es menor que el numero de estrellas
        // ? si es menor activa la estrella y si no la desactiva (1: desactivado, 2: activado)
        const value: string = promedio < estrella
          ? '1'
          : '2';
        // ? Crea los elementos que seran renderizado en el select rating
        const option =  this.renderer.createElement('option');
        this.renderer.setAttribute(option, 'value', value);
        const optionText = this.renderer.createText(estrella.toString());
        this.renderer.appendChild(option, optionText);
        this.renderer.appendChild(this.el.nativeElement, option);
      }

    }

  }

}
