import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tab-revisiones',
  templateUrl: './tab-revisiones.component.html',
  styleUrls: ['./tab-revisiones.component.scss']
})
export class TabRevisionesComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
