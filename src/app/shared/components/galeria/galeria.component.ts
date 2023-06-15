import { Component, Input } from '@angular/core';


@Component({
  selector: 'shared-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {

  @Input() public producto: any | null = null;

}
