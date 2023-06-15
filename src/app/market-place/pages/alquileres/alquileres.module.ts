import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquileresRoutingModule } from './alquileres-routing.module';
import { AlquileresComponent } from './alquileres.component';


@NgModule({
  declarations: [AlquileresComponent],
  imports: [
    CommonModule,
    AlquileresRoutingModule
  ]
})
export class AlquileresModule { }
