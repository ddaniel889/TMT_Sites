import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutobusesRoutingModule } from './autobuses-routing.module';
import { AutobusesComponent } from './autobuses.component';

import { CompraComponent } from './components/compra/compra.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { BusComponent } from './components/bus/bus.component';
import { RodoviaComponent } from './components/rodovia/rodovia.component';



@NgModule({
  declarations: [AutobusesComponent,CompraComponent,OnibusComponent,CiudadesComponent,BusComponent, RodoviaComponent],
  imports: [
    CommonModule,
    AutobusesRoutingModule,
  
  ]
})
export class AutobusesModule { }
