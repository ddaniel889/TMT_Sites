import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nacionales-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() public producto: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
