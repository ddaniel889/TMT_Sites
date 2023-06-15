import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IkarusRoutingModule } from './ikarus-routing.module';
import { IkarusComponent } from './ikarus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IkarusComponent],
  imports: [
    CommonModule,
    IkarusRoutingModule,
    FormsModule, ReactiveFormsModule

  ]
})
export class IkarusModule { }
