import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternacionalesRoutingModule } from './internacionales-routing.module';
import { InternacionalesComponent } from './internacionales.component';


@NgModule({
  declarations: [InternacionalesComponent],
  imports: [
    CommonModule,
    InternacionalesRoutingModule
  ]
})
export class InternacionalesModule { }
