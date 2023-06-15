import { Component, Input } from '@angular/core';

@Component({
  selector: 'nacionales-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadCrumbComponent {

  @Input() public breadcrumb: { path: string; sitio: string; } | null = null;

}
