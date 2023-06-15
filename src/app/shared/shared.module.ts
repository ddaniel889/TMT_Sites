import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ImagenDirective } from './directives/imagen.directive';

import { SpinnerBorderComponent } from './components/spinner-border/spinner-border.component';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BloqueDeEstrellasDirective } from 'src/app/shared/directives/bloque-de-estrellas.directive';
import { RatingDirective } from 'src/app/shared/directives/rating.directive';
import { GaleriaComponent } from 'src/app/shared/components/galeria/galeria.component';
import { StockDirective } from 'src/app/shared/directives/stock.directive';
import { PrecioOfertaDirective } from 'src/app/shared/directives/precio-oferta.directive';
import { TemporizadorPipe } from 'src/app/shared/pipe/temporizador.pipe';

@NgModule({
  declarations: [
    SpinnerBorderComponent,
    DatePickerComponent,
    BreadcrumbComponent,
    ImagenDirective,
    BloqueDeEstrellasDirective,
    RatingDirective,
    GaleriaComponent,
    StockDirective,
    PrecioOfertaDirective,
    TemporizadorPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SpinnerBorderComponent,
    DatePickerComponent,
    BreadcrumbComponent,
    ImagenDirective,
    BloqueDeEstrellasDirective,
    RatingDirective,
    GaleriaComponent,
    StockDirective,
    PrecioOfertaDirective,
    TemporizadorPipe
  ]
})
export class SharedModule { }
