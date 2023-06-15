import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[imagen]'
})
export class ImagenDirective implements OnInit {

  @Input() private producto?: any | null = null;
  @Input() private categoriaPaquete?: any | null = null;
  @Input() private bannerSuperior?: any | null = null;
  @Input() private slideHorizontal?: any | null = null;
  @Input() private slideHorizontalDataBackground?: boolean;
  @Input() private categoria?: any | null = null;
  @Input() private galeria?: any | null = null;
  @Input() private galeriaHref?: boolean;

  @Input() private tipo?:
    'default'
    | 'vertical'
    | 'recomendado'
    | 'mejor'
    | 'shop'
    | 'tienda'
    | 'producto'
    | 'usuario'
    | 'galeria'
    | 'paquete'
    ;

  @Input() private index?: number;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.run();
  }

  private run = (): void => {
    if (this.producto !== null) { this.setImagenanys(this.producto); }
    if (this.categoriaPaquete !== null) { this.setImagenCategoriaPaquete(this.categoriaPaquete); }
    if (this.bannerSuperior !== null) { this.setImagenBannerSuperior(this.bannerSuperior); }
    if (this.slideHorizontal !== null) { this.setImagenSliderHorizontal(this.slideHorizontal);  }
    if (this.categoria !== null) { this.setImagenCategoria(this.categoria); }
    if (this.galeria !== null) { this.setImagenGaleria(this.galeria); }
  }

  private setImagenanys = (producto: any): void => {

    let url: string | null = null;
    let nombre: string | null = null;

    switch (this.tipo) {
      case 'default':
        url = `assets/img/productos/${producto.categoria.url}/default/${producto.bannerPorDefecto}`;
        nombre = producto.nombre;
        break;
      case 'vertical':
        url = `assets/img/productos/${producto.categoria.url}/vertical/${producto.sliderVertical}`;
        nombre = producto.nombre;
        break;
      case 'recomendado':
        url = `assets/img/productos/shop/recomendado/${producto.imagen}`;
        nombre = producto.nombre;
        break;
      case 'mejor':
        url = `assets/img/productos/shop/mejor/${producto.imagen}`;
        nombre = producto.nombre;
        break;
      case 'tienda':
        url = `assets/img/tienda/${producto.tienda.url}/${producto.tienda.logo}`;
        nombre = producto.tienda.nombre;
        break;
      case 'usuario':
        // ? Se puede amplificar su amplitud usando recursividad o una funcion con retorno
        const imagen = producto.revisiones[this.index].usuario.foto !== undefined
          ? producto.revisiones[this.index].usuario.foto
          : `/default/default.png`;

        url = `assets/img/usuarios/${imagen}`;
        url = imagen;
        nombre = producto.revisiones[this.index].usuario.nombre + ' ' + producto.revisiones[this.index].usuario.apellido;
        break;
      case 'shop':
        url = `assets/img/productos/shop/${producto.imagen}`;
        nombre = producto.nombre;
        break;
      case 'producto':
        url = `assets/img/productos/${producto.categoria.url}/${producto.imagen}`;
        nombre = producto.nombre;
        break;
      case 'galeria':
        let tipo: string;
        let categoria: string;
        if (producto.categoria !== null && !!producto.categoria) {
          tipo = 'productos';
          categoria = producto.categoria.url;
        } else {
          console.log('ImagenDirective -> constructor -> producto.categoria esle', !!producto.categoria);
          tipo = 'paquetes';
          categoria = producto.categoriaPaquete.url;
        }
        url = `assets/img/${tipo}/${categoria}/galeria/${producto.galeria[0].imagen}`;
        nombre = producto.nombre;
        break;
      case 'paquete':
        url = `assets/img/paquetes/${producto.imagen}`;
        nombre = producto.titulo;
        break;
      default:
        url = `assets/img/productos/${producto.imagen}`;
        nombre = producto.nombre;
        break;
    }

    if (url !== null) {
      this.setSrc(url, nombre);
    }
  }

  private setImagenCategoriaPaquete = (categoriaPaquete: any): void => {
    const url = `assets/img/paquetes/categorias/${categoriaPaquete.imagen}`;
    const nombre = categoriaPaquete.nombre;
    this.setSrc(url, nombre);
  }

  private setImagenBannerSuperior = (bannerSuperior: any): void => {
    const url = `assets/img/productos/${bannerSuperior.CATtag}/superior/${bannerSuperior.IMGtag}`;
    this.setStyle(`background: url(${url})`);
  }

  private setImagenSliderHorizontal = (slideHorizontal: any): void => {
    const url = `assets/img/productos/${slideHorizontal.CATtag}/horizontal/${slideHorizontal.IMGtag}`;
    if (!this.slideHorizontalDataBackground) {
      const nombre = slideHorizontal.NOMtag;
      this.setSrc(url, nombre);
    } else {
      this.setDataBackground(url);
    }
  }

  private setImagenCategoria = (categoria: any): void => {
    const url = `assets/img/categorias/${categoria.imagen}`;
    const nombre = categoria.nombre;
    this.setSrc(url, nombre);
  }


  private setImagenGaleria = (galeria: any): void => {
    let tipo: string;
    let categoria: string;
    if (galeria.producto.categoria !== null && !!galeria.producto.categoria) {
      tipo = 'productos';
      categoria = galeria.producto.categoria.url;
    } else {
      tipo = 'paquetes';
      categoria = galeria.producto.categoriaPaquete.url;
    }

    const url = `assets/img/${tipo}/${categoria}/galeria/${galeria.imagen}`;
    const nombre = galeria.producto.nombre;
    if (this.galeriaHref) {
      this.setHref(url);
    } else {
      this.setSrc(url, nombre);
    }
  }

  private setSrc = (src: string, alt: string): void => {
    this.renderer.setAttribute(this.el.nativeElement, 'src', src);
    this.renderer.setAttribute(this.el.nativeElement, 'alt', alt);
  }

  private setHref = (href: string): void => {
    this.renderer.setAttribute(this.el.nativeElement, 'href', href);
  }

  private setStyle = (style: string): void => {
    this.renderer.setAttribute(this.el.nativeElement, 'style', style);
  }

  private setDataBackground = (background: string): void => {
    this.renderer.setAttribute(this.el.nativeElement, 'data-background', background);
  }


}
