import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tabs-list',
  templateUrl: './tabs-list.component.html',
  styleUrls: ['./tabs-list.component.scss']
})
export class TabsListComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
