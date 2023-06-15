import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tab-especificacion',
  templateUrl: './tab-especificacion.component.html',
  styleUrls: ['./tab-especificacion.component.scss']
})
export class TabEspecificacionComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
