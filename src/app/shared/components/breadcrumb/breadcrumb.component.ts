import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() public breadcrumb: { path: string; sitio1: string; sitio2?: string; sitio3?: string; sitio4?: string; sitio5?: string; salir?: boolean } | null = null;

  constructor() { }


}
