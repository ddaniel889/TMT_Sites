import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tab-vendedor',
  templateUrl: './tab-vendedor.component.html',
  styleUrls: ['./tab-vendedor.component.scss']
})
export class TabVendedorComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void { }

}
