import { Component, OnInit } from '@angular/core';

// import { Plugins } from 'src/app/services/funciones';

@Component({
  selector: 'shared-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.plugins();
  }

  private plugins = (): void => {
    // Plugins.dataPicker();
  }

}
