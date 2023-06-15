import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tab-descripcion',
  templateUrl: './tab-descripcion.component.html',
  styleUrls: ['./tab-descripcion.component.scss']
})
export class TabDescripcionComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
