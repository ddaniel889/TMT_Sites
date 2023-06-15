import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'praia-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent {

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageBoundsCorrection: EventEmitter<number> = new EventEmitter<number>();

}

