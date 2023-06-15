import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';


@NgModule({
  declarations: [PublicarComponent],
  imports: [
    CommonModule,
    PublicarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicarModule { }
