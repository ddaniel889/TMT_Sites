import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquileresComponent } from './alquileres.component';

const routes: Routes = [{ path: '', component: AlquileresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquileresRoutingModule { }
