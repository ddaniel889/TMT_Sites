import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutobusesComponent } from './autobuses.component';
import { BusComponent } from './components/bus/bus.component';

const routes: Routes = [
  { path:'bus', component: BusComponent},
  { path: '', component: AutobusesComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutobusesRoutingModule { }
