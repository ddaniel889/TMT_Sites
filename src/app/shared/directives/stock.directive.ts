import { Directive, OnInit, Renderer2, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[stock]'
})
export class StockDirective implements OnInit {

  @Input() producto: any | null = null;
  @Input() mostrarTexto: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    if (this.producto.stock > 0) {
      this.renderer.addClass(this.el.nativeElement, 'in-stock');
      if (this.mostrarTexto) {
        const textStrong = this.renderer.createText(' In Stock');
        this.renderer.appendChild(this.el.nativeElement, textStrong);
      }
    } else if (this.producto.stock === 0) {
      this.renderer.addClass(this.el.nativeElement, 'out-stock');
      if (this.mostrarTexto) {
        const textStrong = this.renderer.createText(' Out Stock');
        this.renderer.appendChild(this.el.nativeElement, textStrong);
      }
    }
  }

}
