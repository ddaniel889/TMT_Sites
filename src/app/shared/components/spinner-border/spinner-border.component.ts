import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-spinner-border',
  templateUrl: './spinner-border.component.html',
  styleUrls: ['./spinner-border.component.scss']
})
export class SpinnerBorderComponent implements OnInit {

  @Input() class: string;
  @Input() style: string;

  constructor() { }

  ngOnInit(): void {
  }

}
