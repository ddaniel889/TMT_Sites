import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';


@Directive({
  selector: '[oferta]'
})
export class PrecioOfertaDirective implements OnInit {

  @Input() private producto: any | null = null;
  @Input() private porcentage?: boolean;
  @Input() private porcentageConParentesis?: boolean;
  @Input() private precioTachado: boolean;
  @Input() private precioOferta: boolean;
  @Input() private precio: boolean;
  @Input() private small?: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

    // let precio: string | null = null;
    const oferta: any = this.producto.oferta;

    const descuento = this.producto.oferta.tipo === 'Descuento'
      ? this.porcentageConParentesis
        ? ` (-${this.producto.oferta.descuento}%)`
        : ` -${this.producto.oferta.descuento}%`
      : this.producto.oferta.tipo === 'Fijo'
        ? this.porcentageConParentesis
          ? ` (-${Math.round(Number(this.producto.oferta.descuento) * 100 / this.producto.precio)}%)`
          : ` -${Math.round(Number(this.producto.oferta.descuento) * 100 / this.producto.precio)}%`
        : null;

    /**
     * Puede recivir la propiedad oferta como un array o como un string
     */
    const precioOferta: string | null = this.producto.oferta.tipo === 'Descuento'
      ? `$${(this.producto.precio - (this.producto.precio * Number(this.producto.oferta.descuento) / 100)).toFixed(2)}`
      : this.producto.oferta.tipo === 'Fijo'
        ? `$${(this.producto.precio - Number(this.producto.oferta.descuento)).toFixed(2)}`
        : null;

    /**
     * Si hay un descuento o fijo se crea el span con color de texto rojo
     * el precio normal se crea un del
     * Si no hay descuento se crea un span con solo el precio sin color
     * <h4 class="ps-product__price sale">$36.78 <del> $56.99</del></h4>
     */
    if (oferta.tipo === 'Descuento' || oferta.tipo === 'Fijo') {
      const del = this.renderer.createElement('del');
      const small = this.renderer.createElement('small'); // <small> (-25%)</small>
      const textPrecioOferta = this.renderer.createText(`${precioOferta} `); // ? Precio de la oferta
      const textPrecioTachado = this.renderer.createText(`$${this.producto.precio.toFixed(2)}`); // ? Precio del producto tachado
      const textPrecio = this.renderer.createText(`$${this.producto.precio.toFixed(2)}`); // ? Precio del producto
      const textSmall = this.renderer.createText(this.producto.stock === 0 ? 'Out of stock' : descuento);

      // ? Mostrar precio oferta
      if (this.precioOferta) {
        this.renderer.appendChild(this.el.nativeElement, textPrecioOferta);
      }
      // ? Precio
      if (this.precio) {
        this.renderer.appendChild(this.el.nativeElement, textPrecio);
      }
      // this.renderer.setAttribute(span, 'style', 'color:#FF4416;');
      this.renderer.appendChild(del, textPrecioTachado);
      this.renderer.addClass(this.el.nativeElement, 'sale');
      // ? Mostrar precio
      if (this.precioTachado) {
        this.renderer.appendChild(this.el.nativeElement, del);
      }
      // ? Renderer small porcentage
      this.renderer.appendChild(small, textSmall);
      if (this.porcentage || this.porcentageConParentesis) {
        if (this.small) {
          this.renderer.appendChild(this.el.nativeElement, small);
        } else {
          this.renderer.appendChild(this.el.nativeElement, textSmall);
        }
      }
    } else {
      const span = this.renderer.createElement('span');
      const textSpan = this.renderer.createText(`$${this.producto.precio.toFixed(2)}`);
      this.renderer.appendChild(span, textSpan);
      this.renderer.removeClass(this.el.nativeElement, 'sale');
      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

}
